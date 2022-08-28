<template>
  <div>
    <div>
        <Welcome msg="Willkommen zum Online-Phrasenschwein"/>
    </div>
    <div class="piggy-pic">
        <img alt="Piggy" src="../assets/pig.svg" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Welcome from "@/components/Welcome.vue"; // @ is an alias to /src

@Component({
  components: {
    Welcome,
  },
})
export default class WelcomeView extends Vue {}
</script>
