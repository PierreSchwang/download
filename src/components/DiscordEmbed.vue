<template>
  <iframe class="script" defer-src="https://discordapp.com/widget?id=268444645527126017&amp;theme={{ theme }}"
          allowtransparency="true" style="display: table;"
          src="https://discordapp.com/widget?id=268444645527126017&amp;theme={{ theme }}" :width="width"
          :height="height"
          frameborder="0"></iframe>
</template>

<script>
export default {
  name: "DiscordEmbed",
  props: {
    theme: {
      type: String,
      default: 'dark'
    },
    width: {
      type: String,
      default: "320"
    },
    height: {
      type: String,
      default: "500"
    }
  }
}
</script>

<style scoped>

</style>