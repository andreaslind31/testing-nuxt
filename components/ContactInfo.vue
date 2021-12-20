<template>
  <div>
    <a-breadcrumb class="margin-st">
      <a-breadcrumb-item>Home</a-breadcrumb-item>
      <a-breadcrumb-item>Contact</a-breadcrumb-item>
    </a-breadcrumb>
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <h3 :style="{ margin: '16px 0' }">Contact me here</h3>
      <a-list size="small" bordered :data-source="data">
        <a-list-item slot="renderItem" slot-scope="item">
          <a :href="item">{{ item }}</a>
        </a-list-item>
      </a-list>
    </div>
  </div>
</template>

<style>
</style>
  
<script>
const data = [
  "https://github.com/andreaslind31",
  "https://www.linkedin.com/in/andreas-lind31/",
  "https://medium.com/@andreaslind31",
  "andreaslind31@gmail.com"
];

export default {
  data() {
    return {
      data,
    };
  },
};
</script>