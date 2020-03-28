<template>

<lista :rotas='routes'> </lista>

</template>

<script>

import Lista from './components/Lista.vue'
import {routes} from './routes';

export default {


  components: {
    'lista' : Lista
  },

  data(){

    return{

      routes
    }
  }

  
}
</script>

<style>

</style>
