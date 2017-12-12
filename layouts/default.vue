<template>
  <div>
    <headerreinvented>
    </headerreinvented>
    <menufilter></menufilter>
    <nuxt/>
  </div>
</template>

<script>
import headerreinvented from '~/components/header/headerreinvented.vue'
import menufilter from '~/components/filter/menufilter.vue'


export default {
  components: {
    headerreinvented,
    menufilter
  }
}
</script>


<style>

</style>
