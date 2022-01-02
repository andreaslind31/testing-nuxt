<template>
  <div class="home">
    <div>
      <p>{{ greenroom.name }}</p>
      <p>{{ greenroom.bio }}</p>
    </div>
    <img src="../../assets/jpg/greenroom-booking.jpg" style="width: 50%; float: center;" />
  </div>
</template>

<script>
  export default {
    props: {
      greenroom: {
        type: Object,
        required: true
      }
    }
  }
</script>