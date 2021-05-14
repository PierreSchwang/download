<template>
  <div>
    <!-- Mobile Sidenav -->
    <div id="sidenav" uk-offcanvas>
      <div class="uk-offcanvas-bar">
        <button class="uk-offcanvas-close" type="button" uk-close></button>
        <ul class="uk-nav uk-nav-default">
          <li v-for="entry in navigationEntries" :key="'mob-nav-' + entry.name"
              :class="entry.active ? 'uk-active' : ''">
            <a v-if="entry.external" :href="entry.path">
              {{ entry.name }}
            </a>
            <router-link v-else :to="entry.path">
              {{ entry.name }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <a class="uk-navbar-toggle uk-hidden@s" uk-toggle="target: #sidenav" uk-navbar-toggle-icon></a>
    <!-- Desktop Top-Nav -->
    <nav class="uk-navbar-container uk-visible@s" uk-navbar>
      <div class="uk-navbar-left">
        <ul class="uk-navbar-nav">
          <li>
            <a class="uk-logo" href="">
              <img src="@/assets/logo.jpg" class="nav-is-logo" alt="">
            </a>
          </li>
          <li v-for="entry in navigationEntries" :key="'des-nav-' + entry.name"
              :class="entry.active ? 'uk-active' : ''">
            <a v-if="entry.external" :href="entry.path">
              {{ entry.name }}
            </a>
            <router-link v-else :to="entry.path">
              {{ entry.name }}
            </router-link>
          </li>
        </ul>
      </div>
      <div class="uk-navbar-right">
        <ul class="uk-navbar-nav">
          <li>
            <a class="uk-logo" href="https://discord.gg/intellectualsites">
              <img
                  src="https://img.shields.io/discord/268444645527126017.svg?style=flat-square&maxAge=3600&colorB=7289DA"
                  alt="">
            </a>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import {getNavigationEntries} from "@/config/navigation";
import {NavigationEntries} from "@/config/navigation/NavigationEntry";
import {Component} from "vue";

export default {
  name: "Navigation",
  data() {
    return {
      navigationEntries: [] as NavigationEntries
    }
  },
  mounted() {
    this.navigationEntries = getNavigationEntries(this.$router);
  }
} as Component
</script>

<style scoped>
.nav-is-logo {
  height: 50px;
  width: auto;
}
</style>