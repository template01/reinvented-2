<template>
<div>
  <div v-for="(filterSingle,index) in filterboxes">
    <input v-model="checkedFilter" type="checkbox" name="vehicle" :value="filterSingle.id"><span v-html="filterSingle.name"></span>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      filterboxes: null,
      checkedFilter: [],
      querybuilderstring: ''
    }
  },

  computed: {
  },
  props:['filtername'],

  methods: {

    pushurlFiltersFilter: function() {
      var urlParams = new URLSearchParams(window.location.search);

      if (urlParams.get(this.filtername)) {

        console.log(urlParams.get(this.filtername))

        return urlParams.get(this.filtername).split(",")

      } else {
        return []
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

    fetchTaxonomies: function() {
      var vm = this

      function getFilter() {
        return axios.get(vm.$store.state.apiRoot + '/wp/v2/' + vm.filtername);
      }

      axios.all([getFilter()])
        .then(axios.spread(function(filterRes) {
          vm.filterboxes = filterRes.data
        }));
    }


  },
  created(){
    this.checkedFilter = this.pushurlFiltersFilter()

  },
  mounted() {
    this.fetchTaxonomies()
  },

  watch: {
    checkedFilter: function() {

        this.querybuilder(this.filtername, this.checkedFilter.join(","))
        this.$store.commit('SET_SELECTED_'+this.filtername,this.checkedFilter)
    }
  }
}
</script>

<style>

</style>
