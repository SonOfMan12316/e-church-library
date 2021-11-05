<template>
    <div :audioGot="showAudio === true" v-show="showAudio" class="audio py-4 px-8 xl:px-10" style="background: #FFFFFF; border-radius: 10px;">
                <div class="audio-content flex flex-col gap-y-4">
                    <div style="border: 1px solid #E8E8E8; border-radius: 20px;" class=" p-2">
                        <img src="../assets/images/ASCEND.jpg" class="image rounded-xl">
                        <h1 class="font-serif font-medium text-tiny text-black">Ascend</h1>
                        <p style="letter-spacing: 0.065em; color: rgba(0, 0, 0, 0.59);" class="font-serif font-normal text-xs -mt-1">Dunsin Oyekan</p>
                    </div>
                    <div style="border: 1px solid #E8E8E8; border-radius: 20px;" class="p-2">
                        <img src="../assets/images/beautifulMali.png">
                        <h1 class="font-serif font-medium text-tiny text-black">Beatiful</h1>
                        <p style="letter-spacing: 0.065em; color: rgba(0, 0, 0, 0.59);" class="font-serif font-normal text-xs -mt-1">Mali</p>
                    </div>
                    <div style="border: 1px solid #E8E8E8; border-radius: 20px;" class="p-2">
                        <img src="../assets/images/yah.png">
                        <h1 class="font-serif font-medium text-tiny text-black">YAH</h1>
                        <p style="letter-spacing: 0.065em; color: rgba(0, 0, 0, 0.59);" class="font-serif font-normal text-xs -mt-1">Dunsin Oyekan</p>
                    </div>
                    <div style="border: 1px solid #E8E8E8; border-radius: 20px;" class="p-2">
                        <img src="../assets/images/walkInThePromise.png">
                        <h1 class="font-serif font-medium text-tiny text-black">Walk In The Promise</h1>
                        <p style="letter-spacing: 0.065em; color: rgba(0, 0, 0, 0.59);" class="font-serif font-normal text-xs -mt-1">Jeremy Riddle</p>
                    </div>           
                </div>
    </div>  
</template>

<script>
export default {
    data() {
        return {
            showAudio: true
        }
    }
}
</script>

<style scoped>

</style>