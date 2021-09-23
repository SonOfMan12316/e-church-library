<template>
    <div @click="togglemenuOpen" :class="{'menu-btn': menuBtn}">
        <div class="menu-btn_burger bg-gray-500">
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        togglemenuOpen() {
            this.menuOpen =!this.menuOpen
        }
    }
}
</script>

<style scoped>
.menu-btn {
    transition: all .5s ease-in-out;
    cursor: pointer;
}

.menu-btn .menu-btn_burger {
    width: 25px;
    height: 5px;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    cursor: pointer;
}

.menu-btn .menu-btn_burger:before,
.menu-btn .menu-btn_burger:after {
    content: '';
    position: absolute;
    width: 25px;
    height: 5px;
    background: rgb(143, 138, 138);
    border-radius: 5px;
    transition: all .5s ease-in-out;
}

.menu-btn .menu-btn_burger::before {
    transform: translateY(-10px);
}

.menu-btn .menu-btn_burger:after {
    transform: translateY(10px);
}

.menu-btn.open .menu-btn_burger {
    transform: translateX(-50px);    
}

.menu-btn.open .menu-btn_burger::before {
    transform: rotate(45deg) translateX(35px, -35px);    
}

.menu-btn.open .menu-btn_burger::after {
    transform: rotate(45deg) translateX(35px, 35px);    
}
</style>