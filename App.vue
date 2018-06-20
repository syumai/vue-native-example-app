<template lang="pug">
  view.container
    text.title
      | Counter example
    counter
</template>

<script lang="ts">
import Counter from './Counter.vue';

export default {
  components: { Counter }
}
</script>

<style lang="stylus">
.container
  background-color: white
  align-items: center
  justify-content: center
  flex: 1

.title
  font-size: 18px
  margin-bottom: 20px
</style>
