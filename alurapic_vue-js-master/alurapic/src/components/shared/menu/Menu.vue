<template>
    <nav>
      <ul>       
          <li v-for="(rota, alura) in rotas" :key='alura'>
            <router-link :to="rota.path ? rota.path : '/'">
              {{ rota.titulo }}
            </router-link>
          </li>
      </ul>
    </nav>
</template>

<script>

export default {

    props: {

        rotas: {
            type: Array,
            required: true
        }
    }
}

</script>

<style>
</style>