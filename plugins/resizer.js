import _ from 'lodash'

export default ({
  isClient,
  store
}) => {
  if (isClient) {
    const detectScreensize = () => {

      if (window.innerWidth < 960) {
        store.commit('SET_SMALLSCREEN', true)

      } else {
        store.commit('SET_SMALLSCREEN', false)
      }

      if (window.innerWidth > 1920) {
        store.commit('SET_XLSCREEN', true)
      } else {
        store.commit('SET_XLSCREEN', false)
      }

      store.commit('SET_SCREENSIZE', window.innerWidth)

      console.log('resize')

    };


    detectScreensize();

    window.addEventListener('resize', _.debounce(detectScreensize, 100));


    if (window.innerWidth < 960) {
      store.commit('SET_SMALLSCREEN', true)
    } else {
      store.commit('SET_SMALLSCREEN', false)
    }
    if (window.innerWidth > 1920) {
      store.commit('SET_XLSCREEN', true)
    } else {
      store.commit('SET_XLSCREEN', false)
    }

  }
};
