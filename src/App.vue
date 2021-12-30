<template>
  <div class="container">
    <div class="wrapper">
      <Header class="header"/>
      <Navbar class="navbar"/>
      <Content class="content"/>
    </div>
  </div>
  
</template>

<script>
import Header from './components/Header.vue'
import Navbar from './components/Navbar.vue'
import Content from './components/Content.vue'

export default {
  name: 'App',
  components: {
    Header,
    Navbar,
    Content
  }
}
</script>

<style lang="scss" scoped>
*{
  margin: 0;
  padding: 0;
}
  .container{
    width: 1440px;
    background-color: #FAF9F7;
    margin: 0 auto;
  }
  .wrapper{
    display: grid;
    grid-template-areas: "header header"
                         "navbar content"
    ;
    margin: 32px;
    background-color: #FAF9F7;
    align-content: space-between;
  }

  .header{
    margin-bottom: 16px;
    grid-area: header;
  }

  .navbar{
    grid-area: navbar;
  }

  .content{
    grid-area: content;
  }

  
</style>
