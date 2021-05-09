<template>
  <div class="uk-container">
    Choose version:
    <button v-for="version in this.versions" :key="'version-' + version"
            class="uk-button uk-button-default"
            :class="currentVersion === version ? 'uk-button-primary' : ''"
            @click="this.currentVersion = version"
    >
      {{ version }}
    </button>

    <div>
      <article class="uk-article">
        <h2>
          1. Download FastAsyncWorldEdit (FAWE)
        </h2>
        <div class="uk-alert-warning" uk-alert>
          <p>
            Please ensure the correct platform & version is selected above.
            Versions labeled as "Spigot" run on PaperMC as well.
            Versions below 1.15 are classified as legacy and receive no support.
          </p>
        </div>
        <div class="uk-alert-danger" uk-alert>
          <p>
            Do not install WorldEdit (FAWE is a replacement)
          </p>
        </div>
        <p v-for="i in 50" :key="i">
          IntellectualSites is the home of open source projects for and by the minecraft community.
          Our projects are available for a plenty of platforms, for example Bukkit, Sponge, Forge, NukkitX and others.
        </p>
      </article>
    </div>
    <div>
      <iframe class="script" defer-src="https://discordapp.com/widget?id=268444645527126017&amp;theme=dark"
              allowtransparency="true" style="display: table;"
              src="https://discordapp.com/widget?id=268444645527126017&amp;theme=dark" width="300" height="500"
              frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FastAsyncWorldEdit',
  components: {

  },
  data() {
    return {
      versions: [
          "1.1", "1.2", "1.3"
      ],
      currentVersion: ''
    }
  },
  mounted() {
    this.currentVersion = this.versions[0]
  }
}
</script>

<style>
.sidebar-right {
  position: absolute;
  top: 0;
  left: calc(100% + 0px);
  width: 200px;
}
</style>