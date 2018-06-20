<template lang="pug">
  view.container
    text(:class="countClass") {{count}}
    view.button-container
      button(title="+", color="red", :on-press="increment")
      button(title="-", color="blue", :on-press="decrement")
</template>

<script lang="ts">
export default {
  data(): {
    count: number
  } {
    return {
      count: 0,
    };
  },
  computed: {
    countClass(): string {
      let className: string = 'count';
      if (this.count > 0) {
        className = 'count-plus';
      } else if (this.count < 0) {
        className = 'count-minus';
      }
      return className;
    }
  },
  methods: {
    increment(): void {
      this.count++;
    },
    decrement(): void {
      this.count--;
    },
  },
};
</script>

<style lang="stylus">
.container
  align-items: center
  justify-content: center

.button-container
  flex-direction: row

font-size = 26px

.count
  font-size: font-size

.count-plus
  font-size: font-size
  color: red

.count-minus
  font-size: font-size
  color: blue
</style>

