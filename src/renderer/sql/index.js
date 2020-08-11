import * as SQL from 'sql.js'
import fs from 'fs'

var config = {
    // 指定加载sql-wasm.wasm文件的位置
    locateFile: filename => `src/renderer/sql/${filename}`
};
var sql = null
var timer = null, list = []

SQL(config).then(db => {
    var data = fs.readFileSync('sql.db');
    sql = new db.Database(data)
    console.log('数据库加载完成', sql)
})

function clear() {
    if (timer !== null) {
        window.clearInterval(timer)
        timer = null
    }
}

export function ready(call) {
    if (sql !== null && sql !== undefined) {
        clear()
        call();
    } else {
        list.push(call)
        timer = setInterval(function (call) {
            if (sql !== null && sql !== undefined) {
                list.forEach(f => f())
                list = []
            }
        }, 1000)
    }
}

export function save() {
    let buffer = Buffer.from(sql.export(), 'binary');
    fs.writeFile("sql.db", buffer, () => console.log("saved"));
}

function keyCover(key) {
    return key
}
export function select(sqlStr) {
    clear()
    try {
        let result = sql.exec(sqlStr)[0]
        let rsp = []
        result.values.forEach(rs => {
            let val = {}
            for(let index = 0; index < rs.length; index ++){
                val[result.columns[index]] = rs[index]
            }
            rsp.push(val)
        })
        return {isOk: true, msg: rsp}
    } catch (e) {
        return {isOk: false, msg: e.message}
    }
}

export function update(sqlStr, params) {
    clear()
    try {
        sql.run(sqlStr, params)
        return {isOk: true, msg: 'update ok'}
    } catch (e) {
        return {isOk: false, msg: e.message}
    }
}
