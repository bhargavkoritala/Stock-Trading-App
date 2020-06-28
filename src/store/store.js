import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        funds : 5000,
        shares : []
    },
    mutations :{
        newShares : (state,payload) => {
            state.shares.push(payload);
            state.funds -= payload.price * payload.quantity
        }
    },
    actions : {
        newShareAction : (context,payload) => {
            context.commit('newShares', payload);
        }
    }
})