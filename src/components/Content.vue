<template>
    <div class="content-wrapper">
        <div 
        class="card"
        v-for="(i, idx) in allItems"
        :key="i.itemId"
        >
            <img :src="i.itemImageLink" alt="Здесь могла бы быть Ваша реклама" style="height: 200px; width:332px;">
            <h1 >{{i.itemName}}</h1>
            <h2>{{i.itemDescription}}</h2>
            <h3>{{i.itemPrice.replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')}}  руб.</h3>
            <img src="../assets/img/trash.png" alt="" class="trash" @click="deleteItem(idx)">
            <img src="../assets/img/trash-icon.svg" alt="" class="trash-icon" @click="deleteItem(idx)">
        </div>

        <div 
        v-if="this.allItems.length == 0"
        class="empty-items">
            В списке нет товаров
        </div>
    </div>
</template>

<script>
import { mapGetters }  from 'vuex'
export default {
    methods: {
        deleteItem(idx) {
            this.$store.commit('deleteItemInState', idx);
        }
    },
    computed: {
       ...mapGetters([
           'allItems'
       ])
    }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');

.content-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 1028px;
    justify-content: space-around;
}
    .card{
        position: relative;
        width: 332px;
        height: 423px;
        background: #FFFEFB;
        box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
        border-radius: 4px;
        margin-bottom: 16px;
        opacity: 0.8;
            &:hover{
                border: 2px solid rgb(5, 84, 202);
                opacity: 1;
            }
        
         h1{
            width: 300px;
            height: 25px;
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 20px;
            line-height: 25px;
            color: #3F3F3F;
            padding: 0 16px;
         }

         h2{
            width: 300px;
            height: 80px;
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 20px;
            color: #3F3F3F;
            padding: 0 16px;
            margin-bottom: 16px;
         }

         h3{
            width: 300px;
            height: 30px;
            font-family: 'Source Sans Pro';
            font-style: normal;
            font-weight: 600;
            font-size: 24px;
            line-height: 30px;
            color: #3F3F3F;
            padding: 0 16px;
         }

         .trash{
             position: absolute;
             top: -15px;
             left: 305px;
             opacity: 1;
             cursor: pointer;
             &:hover {
                 opacity: 0.7;
             }
         }
         
         .trash-icon{
             position: absolute;
             top: -5px;
             left: 318px;
             color: black;
             cursor: pointer;
         }
    }
</style>