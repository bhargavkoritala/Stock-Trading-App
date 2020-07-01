import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state : {
        funds : 5000,
        market : [{
            company : 'Apple',
            price : '450'
          },
          {
            company : 'Samsung',
            price : '350'
          },
          {
            company : 'Tata Industries',
            price : '500'
          },
          {
            company : 'Bharti Airtel',
            price : '250'
          },
          {
            company : 'Reliance Industries',
            price : '200'
          },
          {
            company : 'Angel Brokers',
            price : '100'
          },
          ],
        shares : [],
        savedMarket : []
    },
    mutations :{
        newShares : (state,payload) => {
            state.shares.push(payload);
            state.funds -= payload.price * payload.quantity
        },
        sellShares : (state,payload) => {
            for (let share in state.shares){
                if(payload.company.localeCompare(state.shares[share].company)==0){
                    console.log('true');
                    let num = parseInt(state.shares[share].quantity)- parseInt(payload.quantity)
                    state.shares[share]['quantity'] = num.toString();
                    state.funds += payload.price * payload.quantity
                    state.funds.toFixed(2);
                }
                if(state.shares[share].quantity<=0){
                    state.shares = state.shares.filter(now => now.company != state.shares[share].company);
                }
            }
        },
        endDay : state => {
            state.market.forEach(element => {
                let max = parseInt(element.price) + 100;
                let min = Math.max(0, element.price - 100);
                let hehe = Math.random() * (max - min) + min
                element.price = hehe.toFixed(2);
            })
            for(let marketIndex in state.market){
                for(let sharesIndex in state.shares){
                    if(state.shares[sharesIndex].company == state.market[marketIndex].company){
                        state.shares[sharesIndex].price = state.market[marketIndex].price;
                    }
                }
            }
            console.log(state.savedMarket);
        },
        saveMarket : state => {
            state.savedMarket = JSON.parse(JSON.stringify(state.market));
            console.log(state.savedMarket);
        },
        loadMarket : state => {
            state.market = JSON.parse(JSON.stringify(state.savedMarket));
            console.log(state.savedMarket);
            for(let marketIndex in state.market){
                for(let sharesIndex in state.shares){
                    if(state.shares[sharesIndex].company == state.market[marketIndex].company){
                        state.shares[sharesIndex].price = state.market[marketIndex].price;
                    }
                }
            }
        }
    },
    actions : {
        newShareAction : (context,payload) => {
            context.commit('newShares', payload);
        },
        sellSharesAction : (context,payload) => {
            context.commit('sellShares',payload);
        },
        saveMarketAction : context => {
            context.commit('saveMarket');
        },
        loadMarketAction : context => {
            context.commit('loadMarket');
        }
    }
})