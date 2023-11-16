<template>
    <router-link :to="link">
    <n-button 
    color="#042C60"

    :round="round"
    :type="type"
    :to="link"

    class="button-style"
    >
    <span class="button-content"> {{ buttonText }} </span>
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
        width: 150%;
        height: 50%;
        margin-bottom: 5%;
        margin-left: 10%;
    }

    .button-content {
    font-size: 1.5vw; /*vw-viewport width */
}

</style>
