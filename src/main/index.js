import {app, BrowserWindow, Menu, Tray, ipcMain} from 'electron'
import path from 'path'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
    global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}
let mainWindow, tray = null, trayIcon = null
const winURL = process.env.NODE_ENV === 'development'
    ? `http://localhost:9080`
    : `file://${__dirname}/index.html`

function createWindow() {
    /**
     * Initial window options
     */
    mainWindow = new BrowserWindow({
        height: 530,
        useContentSize: true,
        width: 350,
        frame: false
    })

    mainWindow.loadURL(winURL)

    mainWindow.on('closed', () => {
        mainWindow = null
    })
    createTray()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow()
    }
})

const createTray = () => {
    trayIcon = path.join(__dirname, '../renderer/assets/image/');
    tray = new Tray(path.join(trayIcon, 'tray.png'));
    const contextMenu = Menu.buildFromTemplate([
        {
            label: '取消闪烁', click: function () {
                trayInit()
            }
        },
        {
            label: '退出', click: function () {
                app.quit()
            }
        }
    ])
    tray.on('click', () => {
        mainWindow.show()
        trayInit()
    })
    tray.setToolTip('微聊')
    tray.setContextMenu(contextMenu)
    trayFlashing()
}

let show = false, timer = null;
const trayInit = () => {
    if (null !== timer) {
        clearInterval(timer)
        timer = null
        tray.setImage(path.join(trayIcon, 'tray.png'))
    }
}
const trayFlashing = () => {
    timer = setInterval(function () {
        if (show) {
            tray.setImage(path.join(trayIcon, 'tray.png'))
        } else {
            tray.setImage(path.join(trayIcon, 'traya.png'))
        }
        show = !show
    }, 600);
}

ipcMain.on('new-msg', (event, params) => {
    console.log('收到新消息：',params)
    trayFlashing()
    return true
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

import { autoUpdater } from 'electron-updater'

/*
progressObj:
    bytesPerSecond: bps/s //传送速率
    percent : 百分比 //我们需要这个就可以了
    total : 总大小
    transferred: 已经下载
*/

autoUpdater.on('download-progress', progressObj => {
    const winId = BrowserWindow.getFocusedWindow().id;
    let win = BrowserWindow.fromId(winId);
    win.webContents.send('downloadProgress', progressObj)
})

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
