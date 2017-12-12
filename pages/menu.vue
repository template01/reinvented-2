<template>
<div class="tile is-ancestor">
  <div class="tile is-4 is-vertical is-parent">
    <selectfilter :filtername='"volume"'></selectfilter>
    <selectfilter :filtername='"volumecategory"'></selectfilter>
    <selectfilter :filtername='"articletag"'></selectfilter>
  </div>
  <br />
  <div class="tile is-4 is-vertical is-parent">

    <queryresults></queryresults>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import selectfilter from '~/components/filter/selectfilter.vue'
import queryresults from '~/components/index/queryresults.vue'


import {
  mapGetters
} from 'vuex'




export default {
  components: {
    selectfilter,
    queryresults
  },

  computed: {
    ...mapGetters({
      searchQuery: "searchQuery",
    }),
  }


}
</script>

<style>

</style>
