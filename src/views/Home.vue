<template>
  <div class="uk-container uk-container-large uk-position-relative">
    <article class="uk-article">
      <h1 class="uk-article-title">
        Information
      </h1>
      <p>
        IntellectualSites is the home of open source projects for and by the minecraft community.
        Our projects are available for a plenty of platforms, for example Bukkit, Sponge, Forge, NukkitX and others.
      </p>
      <p>
        Alongside plugins and mods, we are developing lots of other open source projects as well.
        For example custom web frameworks, paste services and asset databases for our projects.
      </p>
      <p class="uk-link-reset member-wrapper">
        <b>Team Members</b>:
        <a>Citymonstret</a>, <a>dordosor21</a>, <a>IronApollo</a>, <a>Jesse</a>, <a>MattBDev</a>, <a>NotMyFault</a> and
        <a>RedstoneFuture</a>
      </p>
    </article>

    <article class="uk-article">
      <h1 class="uk-article-title">
        Projects
      </h1>
      <div class="uk-child-width-expand@s uk-text-center uk-grid-match uk-link-reset" uk-grid>
        <div>
          <router-link to="/fawe"
                       class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>FastAsyncWorldEdit (FAWE)</p>
          </router-link>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>FastAsyncVoxelSniper (FAVS)</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>PlotSquared (P2)</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>HoloPlots - PlotSquared Addition</p>
          </div>
        </div>
      </div>
      <div class="uk-child-width-expand@s uk-text-center uk-grid-match" uk-grid>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>Plot2Dynmap - PlotSquared Addon</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>PAPI Expansion - PlotSquared Addon</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>PlotWebPHP - PlotSquared Web Interface</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>RedEdit</p>
          </div>
        </div>
      </div>
      <div class="uk-child-width-expand@s uk-text-center uk-grid-match" uk-grid>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>Schematic Web Interface</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>Heightmap Interface</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>Paste Viewer</p>
          </div>
        </div>
        <div>
          <div class="uk-card uk-card-small uk-card-primary uk-card-hover uk-card-body uk-light uk-text-center">
            <p>Kvantum</p>
          </div>
        </div>
      </div>
    </article>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {}
}
</script>

<style>
.member-wrapper > a {
  color: #39f !important;
}
</style>
