<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="">
        Reinvented
      </a>
      <button class="navbar-item" href="" @click="$store.commit('SET_FILTERBAROPEN')">
        filter
      </button>
    </div>
  </nav>
</template>

<script>
// import queryresults from '~/components/index/queryresults.vue'


export default {
  components: {
    // queryresults
  }
}
</script>

<style>

</style>
