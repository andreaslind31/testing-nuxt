<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <AntSider />
    <a-layout>
      <a-layout-header class="bg-standard p-0">
        <h3 class="text-center">Andreas Lind</h3>
      </a-layout-header>
      <a-layout-content class="margin-rs">
          <Nuxt></Nuxt>
      </a-layout-content>
      <a-layout-footer class="text-center">
        ©2021 Created by Andreas Lind
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>

</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
}

a {
    color: white;
 text-decoration: none;   
}
a:hover {
    color:#DB5461;
    
}
.home {
    font-family: 'Raleway', Arial, Helvetica, sans-serif;
    color: white;
    /* background: linear-gradient(116.82deg, #3D5467 0%, #1A232B 99.99%, #333333 100%); */
    background: linear-gradient(117deg, #002140 0%, #1C3A4F 99.99%, #002140 100%);
}
.d_none {
    display: none;
}
.d_flex {
    display: flex;
}
.container {
    max-width: 1170px;
    margin: auto;
}
.loading {
    font-size: 2rem;
}
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}
.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}
.nuxt-content p {
    margin-bottom: 20px;
}
.icon.icon-link {
  background-image: url('~assets/svg/icon-hashtag.svg');
  display: inline-block;
  width: 20px;
  height: 20px;
  background-size: 20px 20px;
}
.margin-rs {
  margin: 0 16px;
}
.margin-st {
  margin: 16px 0;
}
.text-center {
  text-align: center;
}
.p-0 {
  padding: 0;
}
.p-2 {
  padding: "24px";
}
.bg-standard {
  background-color: #fff;
}
</style>