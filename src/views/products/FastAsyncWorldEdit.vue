<template>
  <SoftwarePage>
    <template v-slot:container>
      <div class="uk-container uk-padding">
        <div class="uk-timeline">
          <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
              <span class="uk-badge">
                <i data-feather="download-cloud"></i>
              </span>
            </div>
            <div class="uk-timeline-content">
              <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <h3 class="uk-card-title">
                      Download FastAsyncWorldEdit (FAWE)
                    </h3>
                  </div>
                </div>
                <div class="uk-card-body">
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
                  <p class="uk-margin">
                    <button class="uk-button uk-button-primary">
                      Download FAWE (Beta Development Builds)
                    </button>
                    &nbsp;
                    <button class="uk-button uk-button-secondary">
                      Download FAVS (FastAsyncVoxelSniper)
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
              <span class="uk-badge">
                <i data-feather="box"></i>
              </span>
            </div>
            <div class="uk-timeline-content">
              <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <h3 class="uk-card-title">
                      Download any optional Dependencies
                    </h3>
                  </div>
                </div>
                <div class="uk-card-body">
                  <p class="uk-margin">
                    <button class="uk-button uk-button-secondary">
                      Vault - For persistent toggles on Spigot
                    </button>
                    &nbsp;
                    <button class="uk-button uk-button-secondary">
                      Web Interface (Instead of using the public one)
                    </button>
                  </p>
                  <p class="uk-margin">
                    <button class="uk-button uk-button-secondary">
                      Asset Interface - To host private assets
                    </button>
                    &nbsp;
                    <button class="uk-button uk-button-secondary">
                      Heightmap Interface
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="uk-timeline-item">
            <div class="uk-timeline-icon">
              <span class="uk-badge">
                <i data-feather="settings"></i>
              </span>
            </div>
            <div class="uk-timeline-content">
              <div class="uk-card uk-card-default uk-margin-medium-bottom uk-overflow-auto">
                <div class="uk-card-header">
                  <div class="uk-grid-small uk-flex-middle" uk-grid>
                    <h3 class="uk-card-title">
                      Configure the plugin + Give players the required permissions
                    </h3>
                  </div>
                </div>
                <div class="uk-card-body">
                  <div class="uk-alert-success" uk-alert>
                    <p>
                      You can find the config file at: <code>plugins/FastAsyncWorldEdit/config.yml</code>
                    </p>
                  </div>
                  <p class="uk-margin">
                    <button class="uk-button uk-button-secondary">
                      General FAWE Permissions
                    </button>
                    &nbsp;
                    <button class="uk-button uk-button-secondary">
                      FAWE Commands / Command Permissions
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
    <template v-slot:sidebar>
      <div class="uk-panel">
        <h3 class="uk-panel-title">Choose a version</h3>
        <div class="uk-margin uk-text-center">
          <div class="uk-form-controls">
            <select class="uk-select" id="form-stacked-select">
              <option v-for="version in versions" :key="version">
                {{ version }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </template>
  </SoftwarePage>

</template>

<script>
// import DiscordEmbed from "../../components/DiscordEmbed";
import SoftwarePage from "../../components/SoftwarePage";
import feather from "feather-icons";
export default {
  name: 'FastAsyncWorldEdit',
  components: {
    SoftwarePage,
    // DiscordEmbed
  },
  data() {
    return {
      versions: [
          "1.1", "1.2", "1.3",
          "1.1", "1.2", "1.3",
          "1.1", "1.2", "1.3",
          "1.1", "1.2", "1.3",
      ],
      currentVersion: ''
    }
  },
  mounted() {
    this.currentVersion = this.versions[0];
    feather.replace();
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