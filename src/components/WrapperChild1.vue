<template>
    <div class="child1">
        <div>
            <h3>{{ inComingMessage }}</h3>
            <input type="text" v-model="message" />
            <br>
            <button @click="sendMessage">Send Message</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "WrapperChild1",
        data() {
            return {
                message: '',
                inComingMessage: 'incoming message',
            }
        },
        methods: {
            sendMessage() {
                // please fill here
            }
        },
    }
</script>

<style scoped>
    .child1 {
        border: solid 1px #cccccc;
        background-color: azure;
        padding: 10px;
    }
</style>
