const wrapperChildMixins = {
  data() {
    return {
      message: "",
      inComingMessage: "",
    };
  },
  beforeDestroy() {
    EventBus.$off();
  },
};
export default wrapperChildMixins;
