import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        status: "",
        user: {},
        token: ""
    },
    mutations: {
        auth_req(state) {
            state.status = "loading";
        },
        auth_done(state, user) {
            state.status = "logged";
            state.user = user;
        },
        auth_err(state) {
            state.status = "error";
        },
        logout(state) {
            state.status = null;
            state.user = null;
            state.token = null;
        }
    },
    actions: {},
    modules: {},
    getters: {}
});
