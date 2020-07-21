<template>
    <div class="price">
        <div>
            <input type="text" placeholder="please enter price" /> <br><br>
            Price : {{ price }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Price",
        filters: {
            formatTL() {
                // please fill here
            }
        },
        data() {
            return {
                price: 0
            }
        },
    }
</script>

<style scoped>
 .price {
     border: solid 1px #ccc;
     background-color: azure;
     padding: 10px;
 }
</style>
