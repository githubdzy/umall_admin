import { reqGet, reqPost } from "../../utils/request";

const state = {
    // 菜单的list
    list:[]
}
const mutations = {
    //修改list
    changeList(state,arr){
        state.list=arr;
    }
}
const actions={
    reqList(context){
        reqGet('/api/rolelist').then((res)=>{
            let list=res.data.list?res.data.list:[]
            context.commit("changeList",list)
        })
    }
};
const getters = {
    list(state){
        return state.list
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
    namespaced: true

}