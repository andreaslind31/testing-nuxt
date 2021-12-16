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
          <nuxt-link to="/blog/greenroomtraining"> Greenroom training </nuxt-link>
        </a-menu-item>
        <a-menu-item key="4">
          <nuxt-link to="/blog/flickR-app"> FlickR app </nuxt-link>
        </a-menu-item>
        <a-menu-item key="5">
          <nuxt-link to="/blog/go-redis-webapp"> Go-Redis webapp </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="book" />
          <span>Blogposts</span>
        </span>
        <a-menu-item key="6">
          <nuxt-link to="/blog/my-first-blog-post">
            My first blogpost
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="7">
          <nuxt-link to="/blog/blog-post-nr2"> Second blogpost </nuxt-link>
        </a-menu-item>
        <a-menu-item key="8">
          <nuxt-link to="/blog/third-post"> Third </nuxt-link>
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
