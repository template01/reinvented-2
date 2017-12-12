<template>
<div>
  <input type="search" v-model="serachFilter" :value="filtername" />
</div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  data: function() {
    return {
      filterboxes: null,
      serachFilter: null,
      serachFilterFin: 'temp',
      querybuilderstring: ''
    }
  },

  computed: {},

  props: ['filtername'],


  methods: {


    throttledSearch: _.throttle(function() {
      this.querybuilder(this.filtername, this.serachFilter)
      this.$store.commit('SET_SELECTED_'+this.filtername,this.serachFilter)
    }, 500),

    pushurlFiltersFilter: function() {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.get(this.filtername)) {

        console.log(urlParams.get(this.filtername))

        return urlParams.get(this.filtername)

      } else {
        return ''
      }
    },

    querybuilder: function(param, value) {

      console.log(value.length)

      function UpdateQueryString(url, key, value) {
        if (!url) url = window.location.href;
        var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
          hash;

        if (re.test(url)) {
          if (typeof value !== 'undefined' && value !== null)
            return url.replace(re, '$1' + key + "=" + value + '$2$3');
          else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
              url += '#' + hash[1];
            return url;
          }
        } else {
          if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null)
              url += '#' + hash[1];
            return url;
          } else
            return url;
        }
      }

      window.history.replaceState('', '', UpdateQueryString(window.location.href, param, value));

    },


  },
  created() {
    this.serachFilter = this.pushurlFiltersFilter()
  },
  mounted() {},

  watch: {
    serachFilter: function() {
      this.throttledSearch()
    }
  }
}
</script>

<style>

</style>
