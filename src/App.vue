<template>
  <div>
    <Navigation :key="'nav-' + $route.fullPath"/>
    <router-view class="uk-margin-large-top uk-margin-large-bottom"></router-view>
  </div>
</template>

<script>

import Navigation from "@/components/Navigation";

export default {
  name: 'App',
  components: {Navigation}
}
</script>

<style>
@import "~uikit/dist/css/uikit.min.css";
@import "assets/timeline.css";
</style>
