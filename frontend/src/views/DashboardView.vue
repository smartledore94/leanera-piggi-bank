<template>
  <div>
    <div class="piggy-pic">
        <Dashboard msg="Willkommen zum Online-Phrasenschwein von Benjamin Krause"/>
        <img alt="Piggy" src="../assets/pig.svg" />
    </div>
    <div></div>
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
export default class DashboardView extends Vue {}
</script>
