<template>
<div class="queryWrapper ">

  <div class="columns is-gapless">
    <div class="column" :class="'is-primary'">
      <singleitem :singleitemdata=post v-for="(post,index) in unevenQueryresults"></singleitem>
    </div>

    <div class="column" :class="'is-primary'">
      <singleitem :singleitemdata=post v-for="(post,index) in evenQueryresults"></singleitem>
    </div>
  </div>
</div>
</template>
<script>
import axios from 'axios'
import singleitem from '~/components/index/singleitem.vue'

import {
  mapGetters
} from 'vuex'


export default {
  components: {
    singleitem
  },

  data: function() {
    return {
      queryresults: []
    }
  },


  computed: {
    ...mapGetters({
      searchQuery: "searchQuery",
    }),

    unevenQueryresults: function() {
      var arr = this.queryresults
      var filtered = arr.filter(function(element, index, array) {
        return (index % 2 === 0);
      });
      return filtered
    },
    evenQueryresults: function() {
      var arr = this.queryresults
      var filtered = arr.filter(function(element, index, array) {
        return (index % 2 != 0);
      });
      return filtered
    }
  },
  methods: {


    fetchSearchResults: function() {
      var vm = this
      // alert(this.searchQuery)

      function getFilter() {
        return axios.get(vm.searchQuery);
      }

      axios.all([getFilter()])
        .then(axios.spread(function(searchQueryRes) {
          vm.queryresults = searchQueryRes.data
        }));
    }


  },
  mounted() {
    this.$nextTick(function () {
      this.fetchSearchResults()
    })

  },
  watch: {
    'searchQuery': function() {
      this.fetchSearchResults()
    }
  }

}
</script>

<style lang="scss" scoped>
.queryWrapper{

  .column.is-primary{
    background-color: lightgrey;
  }
  .column.is-info{
    background-color: navy;
  }

}
</style>
