<template>
  <div class="child1">
    <div>
      <span>Message From Other Component:</span>
      <h3>{{ inComingMessage }}</h3>
      <input type="text" v-model="message" />
      <br />
      <button @click="sendMessage">Send Message</button>
    </div>
  </div>
</template>

<script>
import { EventBus, EventBusListener } from "../eventBus";
import wrapperChildMixins from "../wrapperChildMixins";

export default {
  name: "WrapperChild1",
  mixins: [wrapperChildMixins],
  methods: {
    sendMessage() {
      EventBus.$emit(EventBusListener.Wrapper_Child_1_Message, this.message);
    },
  },
  created() {
    EventBus.$on(
      EventBusListener.Wrapper_Child_2_Message,
      (messageFromComp) => {
        this.inComingMessage = messageFromComp;
      }
    );
  },
};
</script>

<style scoped>
.child1 {
  border: solid 1px #cccccc;
  background-color: azure;
  padding: 10px;
}
</style>
