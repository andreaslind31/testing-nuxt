<template>
<div>
  <a-row type="flex" justify="start">
    <a-col :span="18">
      <img class="hero" src="~assets/jpg/IMG_3355.JPG" />
    </a-col>
    <a-col :span="6">
      <a-page-header
        title="So this is me"
        sub-title="A well-disciplined father and developer student with years of experience from the Swedish Armed Forces. "
        @back="() => null"
      >
      </a-page-header>
      <nuxt-link to="/projectlist"><h2>Check out my projects</h2></nuxt-link>
    </a-col>
  </a-row>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
.hero {
  width: 85%;
}
</style>