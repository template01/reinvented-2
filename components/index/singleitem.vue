<template>
    <div class="">
      <img :src="singleitemdata._embedded['wp:featuredmedia'][0].media_details.sizes.full.source_url" />
      <h1 class="is-size-3">{{singleitemdata.title.rendered}}</h1><br />
    </div>
</template>

<script>


export default {
props:['singleitemdata']
}
</script>

<style>

</style>
