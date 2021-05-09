<template>
  <nav class="uk-navbar-container" uk-navbar>
    <div class="uk-navbar-left">
      <ul class="uk-navbar-nav">
        <li>
          <a class="uk-logo" href="">
            <img src="@/assets/logo.jpg" class="nav-is-logo" alt="">
          </a>
        </li>
        <li class="uk-active">
          <router-link to="/">Home</router-link>
        </li>
        <li><a href="https://www.spigotmc.org/members/i-s.79996/#resources">Spigot</a></li>
        <li><a href="https://ci.athion.net">Jenkins (CI)</a></li>
        <li><a href="">Sponsors</a></li>
        <li><a href="">Contact Us</a></li>
        <li><a href="https://discord.gg/intellectualsites">Discord</a></li>

        <!-- https://img.shields.io/discord/268444645527126017.svg?style=flat-square&maxAge=3600&colorB=7289DA -->
      </ul>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li>
          <a class="uk-logo" href="https://discord.gg/intellectualsites">
            <img src="https://img.shields.io/discord/268444645527126017.svg?style=flat-square&maxAge=3600&colorB=7289DA"
                 alt="">
          </a>
        </li>
      </ul>
    </div>
  </nav>

  <router-view class="uk-margin-large-top"></router-view>

</template>

<script>

export default {
  name: 'App',
  components: {}
}
</script>

<style>
@import "~uikit/dist/css/uikit.min.css";

.nav-is-logo {
  height: 50px;
  width: auto;
}
</style>
