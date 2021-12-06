<template>
  <a-layout-sider v-model="collapsed" collapsible>
    <div class="logo" />
    <a-menu theme="dark" :default-selected-keys="['1']" mode="inline">
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type="home" />
          <span>Home</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/user">
          <a-icon type="user" />
          <span>Andreas Lind</span>
        </nuxt-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
            <a-icon type="folder-open" />
            <span>Projects</span>
        </span>
        <a-menu-item key="3">
          <nuxt-link to="/projects/1">
            Greenroom training
          </nuxt-link>
          </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link to="/projects/2"> Flickr app </nuxt-link>
          </a-menu-item>
        <a-menu-item key="5">
          <nuxt-link to="/projects/3"> Go-Redis app </nuxt-link>
          </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="9">
        <nuxt-link to="/contact">
          <a-icon type="mail" />
          <span>Contact</span>
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
</style>
