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