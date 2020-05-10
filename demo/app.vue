<template>
  <div id="app">
    <image-compare
      :before="before"
      :after="after"
      :full="full"
      :hide-after="hideAfter"
      :is-zoomable="isZoomable"
      :is-switchable="isSwitchable"
      :is-draggable="isDraggable"
      :hide-handle="hideHandle"
      :zoom="{min: zoom.min, max: zoom.max}"
      :labels="{before: labels.before, after: labels.after}"
    >
      <i slot="icon-left" class="fas fa-angle-left" aria-hidden="true" />
      <i slot="icon-right" class="fas fa-angle-right" aria-hidden="true" />
    </image-compare>

    <i title="Show options" class="show-options fas fa-sliders-h" aria-hidden="true" @click="showOptions = !showOptions" />

    <div v-show="showOptions" class="options">
      <div class="columns">
        <div class="column has-text-centered">
          <h1 class="title">{{ pkg.displayName }}</h1>
          <h2 class="subtitle">version {{ pkg.version }}</h2>
          <a :href="pkg.homepage">
            Project, sources & documentation on GitHub
            <i class="fab fa-github" aria-hidden="true" />
          </a>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">After image</label>
            <div class="control">
              <input v-model="after" class="input" type="text" placeholder="after image">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Before image</label>
            <div class="control">
              <input v-model="before" class="input" type="text" placeholder="before image">
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">After label</label>
            <div class="control">
              <input v-model="labels.after" class="input" type="text" placeholder="after label">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Before label</label>
            <div class="control">
              <input v-model="labels.before" class="input" type="text" placeholder="before label">
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <div class="field">
            <label class="label">Zoom scale min</label>
            <div class="control">
              <input v-model.number="zoom.min" class="input" type="number" min="0" :max="zoom.max">
            </div>
          </div>
        </div>
        <div class="column">
          <div class="field">
            <label class="label">Zoom scale max</label>
            <div class="control">
              <input v-model.number="zoom.max" class="input" type="number" :min="zoom.min" max="1000">
            </div>
          </div>
        </div>
      </div>

      <div class="columns">
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              full ?
              <input v-model="full" type="checkbox">
            </label>
          </div>
        </div>
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              hideAfter ?
              <input v-model="hideAfter" type="checkbox">
            </label>
          </div>
        </div>
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              isZoomable ?
              <input v-model="isZoomable" type="checkbox">
            </label>
          </div>
        </div>
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              isSwitchable ?
              <input v-model="isSwitchable" type="checkbox">
            </label>
          </div>
        </div>
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              isDraggable ?
              <input v-model="isDraggable" type="checkbox">
            </label>
          </div>
        </div>
        <div class="column field">
          <div class="control">
            <label class="checkbox">
              hideHandle ?
              <input v-model="hideHandle" type="checkbox">
            </label>
          </div>
        </div>
      </div>
      <hr>
      <div class="columns is-centered">
        <button class="button is-info" @click="showOptions = !showOptions">Hide options</button>
      </div>
    </div>
  </div>
</template>

<script>
/* global require */
import pkg from '../package.json'
import ImageCompare from '../src/vue-image-compare'

export default {
  components: {
    ImageCompare,
  },
  data () {
    return {
      before: require('./assets/before.jpg'),
      after: require('./assets/after.jpg'),
      full: true,
      hideAfter: false,
      isZoomable: true,
      isSwitchable: true,
      isDraggable: true,
      showOptions: false,
      hideHandle: false,
      labels: {
        before: 'Before',
        after: 'After',
      },
      zoom: {
        min: 0.5,
        max: 4,
      },
      pkg,
    }
  },
}
</script>

<style>
@import url("https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css");
html,
body,
#app {
  height: 100%;
  overflow: hidden;
  --options-width: 900px;
}
.options,
.show-options {
  z-index: 100;
  border: 2px solid currentColor;
  transition: all 0.3s;
  background-color: whitesmoke;
  border-radius: 5px;
}
.options {
  padding: 2rem 2rem 3rem;
  position: absolute;
  top: 25%;
  width: var(--options-width);
  left: calc(50% - var(--options-width) / 2);
}
body {
  margin: 0;
}
.show-options {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 36px;
  color: grey;
  padding: 4px 6px;
  cursor: pointer;
}
.show-options:hover {
  transform: scale(1.1);
  color: #333;
}
</style>
