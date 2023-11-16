<template>
    <router-link :to="link">
    <n-button 
    color="#042C60"

    :round="round"
    :type="type"
    :to="link"

    class="button-style"
    >
    {{ buttonText }}
    </n-button>
</router-link>
</template>


<script>
    export default {
        props: {
            strong: Boolean,
            secondary: Boolean,
            round: Boolean,
            type: String,
            link: String,
            buttonText: String, // Dynamic text for the button
        },
    };
</script>

<style scoped>
    .button-style{
        width: 100%;
        margin-top: 5%;
        margin-left: 15%;
    }
</style>
