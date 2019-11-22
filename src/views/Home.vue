<template>
  <div class="home">
    <Tournament />
  </div>
</template>

<script>
// @ is an alias to /src
import Tournament from "@/components/Tournament.vue";

export default {
  name: "home",
  components: {
    Tournament
  }
};
</script>
