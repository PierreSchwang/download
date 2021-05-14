<template>
  <div class="uk-grid" data-uk-grid-margin="">
    <div class="uk-width-3-4@m">
      <div class="uk-container-large">
        <slot name="container"></slot>
      </div>
    </div>
    <div class="uk-width-1-4@m uk-flex uk-flex-wrap uk-flex-center">
      <slot name="sidebar"></slot>
      <DiscordEmbed class="uk-margin-medium-top uk-margin-large-right uk-margin-large-left" width="100%"/>
    </div>
  </div>
</template>

<script>
import DiscordEmbed from "./DiscordEmbed";

export default {
  name: "SoftwarePage",
  components: {DiscordEmbed}
}
</script>

<style scoped>

</style>