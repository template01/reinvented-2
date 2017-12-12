export const state = () => ({
  locales: ['en', 'nl'],
  locale: 'nl',
  n: 1,
  smallscreen: false,
  screensize: 0,
  xlscreen: false,
  initiated: false,
  splashimagesloaded: false,
  showcontact: false,
  filterbarOpen: false,
  apiRoot: 'http://placeholder-b.template-studio.nl/wp-json',
  selectedVolume:initialSelected('volume'),
  selectedVolumecategory:initialSelected('volumecategory'),
  selectedArticletag:initialSelected('articletag'),
  selectedSearch:initialSelected('search')
})

function initialSelected(taxonomy){
  var urlParams = new URLSearchParams(window.location.search);
  var selected = urlParams.get(taxonomy)
  if(selected){
    return selected.split(',');
  }else{
    return []
  }
}

export const getters = {

  searchQuery(state) {

    // NOTES ON THIS METHOD http://placeholder-b.template-studio.nl/wp-json/wp/v2/posts?volume=39&volumecategory=32&articletag=34,40&
    // IT's a non excluding way of filtering: if multiple tags clicked it does not imply; all posts with tag A and tag B (together) but all posts with tag A or tag B

    function returnSelectedOrNot(selectedState,filtername){
      if(selectedState.length>0){
        return filtername + '=' + selectedState.join() + '&'
      }else{
        return ''
      }
    }

    function returnSearchedOrNot(search,filtername){
      if(search.length>0){
        return filtername + '=' + search + '&'
      }else{
        return ''
      }
    }


    // also get _embed
    var combinedQuery = state.apiRoot + '/wp/v2/posts' + '?' + '_embed&' + returnSelectedOrNot(state.selectedVolume,'volume') + returnSelectedOrNot(state.selectedVolumecategory,'volumecategory') + returnSelectedOrNot(state.selectedArticletag,'articletag') + returnSearchedOrNot(state.selectedSearch,'search')

    console.log(combinedQuery)

    return combinedQuery

  },

  filterbarOpen(state) {
    return state.filterbarOpen
  },
  issmallscreen(state) {
    return state.smallscreen
  },
  isxlscreen(state) {
    return state.xlscreen
  },
  getscreensize(state) {
    return state.screensize
  },
  getlocale(state) {
    return state.locale
  },
  showContact(state) {
    return state.showcontact
  },

  getinitiated(state) {
    return state.initiated
  },
  getsplashimagesloaded(state) {
    return state.splashimagesloaded
  }
}

export const mutations = {

  SET_SELECTED_volume(state, input) {
    state.selectedVolume = input
  },

  SET_SELECTED_volumecategory(state, input) {
    state.selectedVolumecategory = input
  },

  SET_SELECTED_articletag(state, input) {
    state.selectedArticletag = input
  },


  SET_SELECTED_search(state, input) {
    state.selectedSearch = input
  },

  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale;
    }
  },

  SET_SIDEBARTOGGLE(state, filterbarOpen) {
    if(state.filterbarOpen){
      state.filterbarOpen = false;
    }else{
      state.filterbarOpen = true;
    }
  },

  SET_FILTERBARCLOSE(state) {
    state.filterbarOpen = false;
  },


  SET_FILTERBAROPEN(state) {
    state.filterbarOpen = true;
  },



  SET_SMALLSCREEN(state, small) {
    state.smallscreen = small;
  },

  SET_SCREENSIZE(state, screensize) {
    state.screensize = screensize;
  },

  SET_XLSCREEN(state, xl) {
    state.xlscreen = xl;
  },

  SET_HIDECONTACT(state, showcontact) {
    state.showcontact = false;
  },

  SET_SHOWCONTACT(state, showcontact) {
    state.showcontact = true;
  },

  SET_SPLASHIMAGESLOADED(state, splashimagesloaded) {
    state.splashimagesloaded = true;
  },


  SET_INITIATED(state, initiated) {
    state.initiated = true;
  },

}
