<template lang="pug">
  view.container
    text.count {{count}}
    view.button-container
      button(title="+", :on-press="increment")
      button(title="-", :on-press="decrement")
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
};
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.button-container {
  flex-direction: row;
}
.text {
  color: blue;
}
</style>
