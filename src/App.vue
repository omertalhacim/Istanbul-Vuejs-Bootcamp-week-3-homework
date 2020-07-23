<template>
  <div id="app">
    <h3>Using slots in child component to get title and detail from parent component</h3>
    <Card>
      <h1 slot="slotTitle">The Mighty Title</h1>
      <span slot="slotDetail">The Tiny Detail</span>
    </Card>

    <br />
    <hr />
    <br />

    <h3>Making a fade transition without using a css library or a framework</h3>
    <button @click="isShow = !isShow">{{ buttonText }}</button>
    <br />
    <br />
    <transition name="fade">
      <div class="box" v-if="isShow">
        <span>"Vue.js is awesome!!!"</span>
      </div>
    </transition>

    <br />
    <hr />
    <br />

    <h3>Making a transition example with using animate.css (When page loaded)</h3>
    <transition enter-active-class="animate__animated animate__rubberBand animate__slow" appear>
      <div class="box">I have a animation!!!!</div>
    </transition>

    <br />
    <hr />
    <br />

    <h3>Using Vue filters in child component for formatting the text</h3>
    <Price />

    <br />
    <hr />
    <br />

    <h3>Using eventBus to establish a communication between child components and using mixin to avoid code repetition</h3>
    <Wrapper :title="titleForProps" />
  </div>
</template>

<script>
import Card from "./components/Card.vue";
import Price from "./components/Price.vue";
import Wrapper from "./components/Wrapper.vue";

export default {
  name: "App",
  data() {
    return {
      isShow: true,
      titleForProps: "Mixins & EventBus Example",
    };
  },
  components: {
    Card,
    Price,
    Wrapper,
  },
  computed: {
    buttonText() {
      return this.isShow ? "Hide" : "Show";
    },
  },
};
</script>

<style>
#app {
  width: 800px;
  margin: auto;
}
.box {
  background-color: beige;
  border: solid 1px #ccc;
  padding: 10px;
}
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.75s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 0.75s;
  opacity: 0;
}
</style>
