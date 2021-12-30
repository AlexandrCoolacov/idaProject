<template>
    <div class="header">
        <h1>Добавление товара</h1>
        
        <select 
        class="select" 
        name="" 
        id=""
        v-if="!this.allItems.length == 0"
        >
            <option 
            value=""
            @click="sortedByUp('itemPrice')"
            >По возрастанию цены</option>
            <option 
            value=""
            @click="sortedByDown('itemPrice')"
            >По убыванию цены</option>
            <option 
            value=""
            @click="sortedByName('itemName')"
            >По наименованию</option>
        </select>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    methods: {
            sortedByUp(sortKey) {
                this.$store.commit('sortedItemsByPriceUp', sortKey)
            },

            sortedByDown(sortKey) {
                this.$store.commit('sortedItemsByPriceDown', sortKey)
            },

            sortedByName(sortKey) {
                this.$store.commit('sortedItemsByName', sortKey)
            }
    },
    computed: {
         ...mapGetters([
           'allItems'
       ]),
    }
}
</script>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    .header{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        flex-wrap: wrap;
            h1{
            width: 400px;
            height: 35px;
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 28px;
            line-height: 35px;
            color: #3F3F3F;
            }
            select{
                height: 36px;
                background: #FFFEFB;
                box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
                border-radius: 4px;
                font-family: Source Sans Pro;
                    font-style: normal;
                    font-weight: normal;
                    font-size: 12px;
                    line-height: 15px;
                    color: #B4B4B4;
            }
    }

    
</style>
