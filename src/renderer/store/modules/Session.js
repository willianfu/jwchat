
const state = {
    //选中得当前会话
    chatSession: null
}

const mutations = {
   setChatSession(state, val){
       state.chatSession = val
   }
}

const actions = {

}

export default {
    state,
    mutations,
    actions
}
