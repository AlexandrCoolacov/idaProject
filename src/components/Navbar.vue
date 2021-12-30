<template>
   
        <div 
        class="navbar">
             <label for="itemName" class="label label-after"  >Наименование товара</label>
             <input 
             type="text" 
             id="itemName" 
             name="itemName" 
             class="input placeholder"  
             placeholder="Введите наименование товара"
             v-model="itemName"
             required
             >
             <div 
             v-show="!itemName"
             class="validText"
             >Поле является обязательным</div>

             <label for="itemDescription" class="label ">Описание товара</label>
             <textarea 
             name="itemDescription" 
             id="itemDescription" 
             cols="30" 
             rows="10" 
             class="textarea placeholder"
             placeholder="Введите описание товара"
             v-model="itemDescription"
              ></textarea>

             <label for="itemImageLink" class="label label-after">Ссылка на изображение товара</label>
             <input 
             type="text" 
             id="itemImageLink" 
             name="itemImageLink" 
             class="input placeholder" 
             placeholder="Введите ссылку"
             v-model="itemImageLink"
             required
             >
             <div 
             v-show="!itemImageLink"
             class="validText"
             >Поле является обязательным</div>

             <label for="itemPrice" class="label label-after">Цена товара</label>
             <input 
             type="number" 
             id="itemPrice" 
             name="itemPrice" 
             class="input placeholder" 
             placeholder="Введите цену"
             v-model="itemPrice"
             required
             >
             <div 
             v-show="!itemPrice"
             class="validText"
             >Поле является обязательным</div>

             <button 
             :class="{active: this.itemName && this.itemImageLink && this.itemPrice}"
             @click="addItem"
             class="btn"
             > 
                 <span>
                     Добавить товар
                 </span>
             </button>
        </div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data() {
        return {
            itemName: '',
            itemDescription: '',
            itemImageLink: '',
            itemPrice: '',
        }
    },
    methods: {
        addItem() {
            if(this.itemName && this.itemImageLink && this.itemPrice) {

                this.disabled = false
                const newItem = {
                    itemName: this.itemName,
                    itemDescription: this.itemDescription,
                    itemImageLink: this.itemImageLink,
                    itemPrice: this.itemPrice,
                    itemId: Date.now()
                } 
                this.$store.commit('addItemInState' , newItem)
            }

            this.itemName = ''
            this.itemDescription = ''
            this.itemImageLink = ''
            this.itemPrice = ''
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
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Source+Sans+Pro&display=swap');


.navbar {
    width: 332px;
    height: 440px;
    background: #FFFEFB;
    box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.04), 0px 6px 10px rgba(0, 0, 0, 0.02);
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 24px;
    
    
}
.label {
    width: 150px;
    height: 13px;
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 13px;
    letter-spacing: -0.02em;
    color: #49485E;
    margin-bottom: 4px;
        &.label-after::after{
        content: '';
        display: inline-block;
        position: relative;
        width: 4px;
        height: 4px;
        top: -5px;
        background: #FF8484;
        border-radius: 4px;
        }
}

.input{
    width: 284px;
    height: 36px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    margin-bottom: 16px;
}
.textarea{
    width: 284px;
    height: 108px;
    background: #FFFEFB;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
    border: none;
    margin-bottom: 16px;
}

.btn{
    width: 288px;
    height: 36px;
    left: 56px;
    top: 463px;
    cursor: pointer;
    background: #EEEEEE;
    border-radius: 10px;
    border: none;
     span{
        width: 93px;
        height: 15px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 600;
        font-size: 12px;
        line-height: 15px;
        text-align: center;
        letter-spacing: -0.02em;
        color: #B4B4B4;
     }
}
.placeholder{ 
font-family: Source Sans Pro;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 15px;
color: #B4B4B4;
    &:hover{
        border: 1px dashed rgb(64, 134, 73);
    }
}

.validText {
position: relative;
top: -10px;
width: 100px;
height: 10px;
font-family: 'Source Sans Pro';
font-style: normal;
font-weight: normal;
font-size: 8px;
line-height: 10px;

letter-spacing: -0.02em;

color: #FF8484;
}
.active {
    background-color: green;
}
</style>