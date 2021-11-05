<template>
    <div class="leave-a-message fixed flex flex-row space-x-1 pb-1 px-1" style=" background: #333; height: 1.5rem;">
        <div class="pt-1">
            <MessageSvg/>
        </div>
        <div class="font-bold font-serif text-xs lg:text-tiny text-white items-center text-center">
            Leave a Message
        </div>
    </div>
</template>

<script>
import MessageSvg from '../components/MessageSvg.vue'
export default {
    components: {
        MessageSvg
    }
}
</script>

<style scoped>
.leave-a-message {
    bottom: 0;
    right: 0;
    border-radius: 5px;
}
</style>