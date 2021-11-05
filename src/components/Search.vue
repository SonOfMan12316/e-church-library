<template>
    <form class=" mx-16 flex flex-row">
        <input class="font-serif"  type="text" v-model="searchQ" placeholder="Search"/>
            <div class="secsearchbtn">
                <SecSearchButton v-on:click="changeNews"/>
            </div>
    </form>
</template>

<script>
import SecSearchButton from '../components/SecSearchButton.vue'

export default {
    components: {
        SecSearchButton       
    },
    data() {
        return {
            searchQ: ''
        }
    },
    methods: {
        changeNews() {
            this.$emit("newsChanged", this.searchQ);
            this.searchQ = '';
        }
    }
}
</script>

<style>
.secsearchbtn {
    border: 1px solid #ddd; 
    border-radius: 5px;
    padding: 0.5rem;
}

input[type=text] {
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 5px;
    background: transparent;
    height: 2rem;
    outline: none;
    color: black;
    padding-top: 1.2rem;
    padding-left: 1.2rem;
    padding-bottom: 1.2rem;
    padding-right: 0.5rem;
    width: 95%;
    font-weight: 400;
}

::placeholder {
    color: rgb(17, 17, 17);    
}

</style>