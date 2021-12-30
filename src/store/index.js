import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        items: [ 
            {
                    itemName: 'Наименование товара',
                    itemDescription: 'Довольно-таки интересное описание товара в несколько строк. Довольно-таки интересное описание товара в несколько строк',
                    itemImageLink: 'www.google.com',
                    itemPrice: '10 000 руб.',
            }
        ]
        
    },
    mutations: {
        addItemInState(state,payload) {
            state.items.push(payload)
        },

        deleteItemInState( state,payload) {
            state.items.splice(payload,1)
        },

        sortedItemsByPriceUp(state, sortKey) {
                state.items.sort( (a,b) => +a[sortKey] - +b[sortKey])
        },

        sortedItemsByPriceDown(state, sortKey) {
            state.items.sort( (a,b) => +b[sortKey] - +a[sortKey])
        },

        sortedItemsByName(state, sortKey) {
            
            const items = this.state.items;
            items.sort((a, b) => {
            let compare = 0;
            if (a[sortKey] > b[sortKey]) {
                compare = 1;
            } else if (b[sortKey] > a[sortKey]) {
                compare = -1;
            }
            return compare;
        });
        state.items = items;
        },
      
    },

    actions: {

    },
    getters: {
        
        allItems:state =>state.items
    
    },
    plugins: [createPersistedState()]
})
