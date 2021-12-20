<template>
  <div>
    <div class="flex">
      <img class="hero" src="~assets/jpg/IMG_3355.JPG" />
      <a-page-header
        title="So this is me"
        sub-title="A hard-working father and systems developer student with lots of experience from the Swedish Armed Forces. "
        @back="() => null"
      >
      </a-page-header>
    </div>
    <nuxt-link to="/projectlist"><h2>Check my projects</h2></nuxt-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.flex {
  display: flex;
}
.hero {
  width: 85%;
  height: 30%;
}
</style>