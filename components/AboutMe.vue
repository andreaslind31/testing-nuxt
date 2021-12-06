<template>
  <div>
    <a-row type="flex" justify="center" align="top">
      <a-col :span="6">
        <p class="height-100">
          <a-icon type="right" /><a-icon type="right" /><span> Hej! :span="6" type="flex" justify="center" align="top"</span>
        </p>
      </a-col>
      <a-col :span="6">
        <a-icon type="right-circle"></a-icon> <span>:span="6" </span>
        <a-button type="primary"> Primary </a-button>
        <a-button type="danger"> Danger </a-button>
        <a-button type="link"> Link </a-button>
        <a-icon type="left-circle" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-around" align="center">
      <a-col :span="6">
        <p class="height-100">
          <a-icon type="right" /><a-icon type="right" />
          <span> från den andra rowen! type="flex" justify="space-around" align="center"</span>
          <a-icon type="left" /><a-icon type="left" />
        </p>
      </a-col>
      <a-col :span="6">
        <a-icon type="right-circle" />
        <a-button type="dashed"> Primary </a-button>
        <a-button type="ghost"> Link </a-button>
        <a-button type="danger"> Link </a-button>
        <a-icon type="left-circle" />
      </a-col>
    </a-row>
    <a-row type="flex" justify="space-between" align="bottom">
      <a-col :span="4">
        <p class="height-100">
          <a-icon type="right" /><a-icon type="right" />
          <span> från den tredje rowen! type="flex" justify="space-between" align="bottom"</span>
          <a-icon type="left" /><a-icon type="left" />
        </p>
      </a-col>
      <a-col :span="4">
        <a-icon type="right-circle" />
        <a-button type="dashed"> Primary </a-button>
        <a-button type="ghost"> Link </a-button>
        <a-button type="danger"> Link </a-button>
      </a-col>
      <a-col :span="4">
        <a-button type="dashed"> Primary </a-button>
        <a-button type="ghost"> Link </a-button>
        <a-button type="danger"> Link </a-button>
        <a-icon type="left-circle" />
      </a-col>
    </a-row>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
</style>