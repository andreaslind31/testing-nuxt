<template>
<div>
  <a-row type="flex" justify="start">
    <a-col :span="18">
      <img class="hero" src="~assets/jpg/IMG_3355.JPG" />
    </a-col>
    <a-col :span="6">
      <p>So this is me</p>
      <nuxt-link to="/projectlist"><h2>Check out my projects</h2></nuxt-link>
    </a-col>
  </a-row>
</div>
</template>

<script>
export default {};
</script>

<style scoped>
main .aboutMe {
    width: 100%;
    margin-top: 2%;
    min-height: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.hero {
  width: 90%;
}
</style>