<template>
  <a-layout-header>
    <div class="logo d_flex justify_center align_center">
      <span><a-icon type="code"></a-icon> portfolio</span>
    </div>
    <a-menu
      theme="dark"
      mode="horizontal"
      :default-selected-keys="['1']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <nuxt-link to="/">
          <a-icon type="home" />
          <span>Home</span>
        </nuxt-link>
      </a-menu-item>
      <a-menu-item key="2">
        <nuxt-link to="/aboutme">
          <a-icon type="user" />
          <span>Andreas Lind</span>
        </nuxt-link>
      </a-menu-item>
      <a-sub-menu key="sub1">
        <span slot="title">
          <a-icon type="folder-open" />
          <span>Projects</span>
        </span>
        <a-menu-item key="sub2">
          <nuxt-link to="/projectlist"> GitHub projects </nuxt-link>
        </a-menu-item>
        <a-menu-item key="sub3">
          <nuxt-link to="/projects/greenroomtraining">
            Greenroom training
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="sub4">
          <nuxt-link to="/projects/flickR-app"> FlickR app </nuxt-link>
        </a-menu-item>
        <a-menu-item key="sub5">
          <nuxt-link to="/projects/go-redis-webapp">
            Go-Redis webapp
          </nuxt-link>
        </a-menu-item>
      </a-sub-menu>

      <a-sub-menu key="sub2">
        <span slot="title">
          <a-icon type="book" />
          <span>Blog</span>
        </span>
        <a-menu-item key="7">
          <nuxt-link to="/blog/my-first-blog-post">
            My first blogpost
          </nuxt-link>
        </a-menu-item>
        <a-menu-item key="8">
          <nuxt-link to="/blog/blog-post-nr2"> Second blogpost </nuxt-link>
        </a-menu-item>
        <a-menu-item key="9">
          <nuxt-link to="/blog/third-post"> Third </nuxt-link>
        </a-menu-item>
      </a-sub-menu>
      <a-menu-item key="10">
        <nuxt-link to="/contact">
          <a-icon type="mail" />
          <span>Contact</span>
        </nuxt-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>
<style scoped>
.logo {
  width: 100px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
  float: left;
}
</style>