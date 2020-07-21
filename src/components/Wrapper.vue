<template>
    <div class="wrapper">
        <h3>Mixins & EventBus example</h3>
        <div>
            <WrapperChild1 />
            <br>
            <WrapperChild2 />
        </div>
    </div>
</template>

<script>
    import WrapperChild1 from "./WrapperChild1";
    import WrapperChild2 from "./WrapperChild2";

    export default {
        name: "Wrapper",
        components: {
            WrapperChild1,
            WrapperChild2
        }
    }
</script>

<style scoped>
    .wrapper {
        border: solid 1px;
        background-color: cornflowerblue;
        padding: 10px;
    }
</style>
