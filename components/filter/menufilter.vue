<template>
<div class="menufilter" v-if="filterbarOpen">

  <div class="menufilterClose"  @click="$store.commit('SET_FILTERBARCLOSE')">

  </div>
  <div class="menufilterInner">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <button class="navbar-item" href="" @click="$store.commit('SET_FILTERBARCLOSE')">
          close
        </button>
      </div>
    </nav>
    <div class="">
      <selectfilter :filtername='"volume"'></selectfilter>
      <br />
      <selectfilter :filtername='"volumecategory"'></selectfilter>
      <br />
      <selectfilter :filtername='"articletag"'></selectfilter>
      <br />
      <searchfilter :filtername='"search"'></searchfilter>
    </div>
  </div>

</div>
</template>

<script>
import axios from 'axios'
import selectfilter from '~/components/filter/selectfilter.vue'
import searchfilter from '~/components/filter/searchfilter.vue'
import queryresults from '~/components/index/queryresults.vue'


import {
  mapGetters
} from 'vuex'




export default {
  components: {
    selectfilter,
    queryresults,
    searchfilter
  },

  computed: {
    ...mapGetters({
      filterbarOpen: "filterbarOpen",
    }),
  }


}
</script>

<style scoped="">

.menufilter{
  position: fixed;
  height: 100%;
  width: 100%;
  right:0;
  top:0;
  /*background: navy;*/
}

.menufilterClose{
  /*position: absolute;*/
  float: left;
  height: 100%;
  width: 50%;
  background: transparent;
}


.menufilterInner{
  /*position: absolute;*/
  float: left;
  height: 100%;
  width: 50%;
  background: lightblue;
}

</style>
