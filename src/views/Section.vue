<template>
    <div>
        <div class="section">
            <Navigation/>
            <div class="section-content p-6 sm:px-6 lg:px-16 xl:px-20">
                <div class="section-info flex flex-col sm:flex-row sm:justify-between md:justify-around xl:justify-between xl:mx-20 justify-center items-center gap-y-6 my-20 sm:my-12 lg:my-20">
                    <div class="section-image hidden sm:block">
                        <div class="image">
                            <img src="../assets/images/Group88.png" class="welcome">
                        </div>
                        <div class="font-serif text-base lg:text-lg font-normal text-gray-500">
                            <p>Now faith is the assirance of things<br>hoped for, the conviction of things<br>not seen</p>
                        </div>
                        <div class="second-p rounded-lg text-white mt-1">
                            <p class="font-serif text-base lg:text-xl font-bold px-2">Hebrew 11:1</p>
                            <!-- 08063033768 -->
                        </div>
                    </div>
                    <div class="section-border py-2 lg:py-3">
                        <p class="font-serif text-red-600 text-xl font-semibold text-center p-2 lg:py-4">Prayer Request</p>
                        <form @submit="handleSubmit" class="mx-5">
                                <input type="name" v-model="name" name="name" placeholder="Name" class="outline-none text-tiny rounded-lg bg-transparent border-red-600 border-solid font-serif">
                                <input type="email" v-model="email" name="email" placeholder="Email"  class="outline-none text-tiny rounded-lg bg-transparent border-red-600 border-solid font-serif">
                                <textarea type="message" v-model="message" placeholder="Message" class="outline-none text-tiny bg-transparent rounded-lg border-red-600 border-solid font-serif"></textarea>
                                <button class="bg-red-600 text-white font-serif font-medium text-lg">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>        
        <Featured/>
        <Events/>
        <GetFamiliar/>
        <News/>
        <Footer/>
    </div>
</template>

<script>
import Navigation from '../components/Navigation.vue'
import Featured from '../components/Featured.vue'
import Events from '../components/Events.vue'
import GetFamiliar from '../components/GetFamiliar.vue'
import News from '../components/News.vue'
import Footer from '../components/Footer.vue'
export default {
    name: 'Section',
    components: {
        Navigation,
        Featured,
        Events,
        GetFamiliar,
        News,
        Footer
    },
    data() {
        return {
            name: '',
            email: '',
            message: ''
        }
    },
    methods: {
      handleSubmit() {
        const data = {
            name: this.name,
            email: this.email,
            message: this.message
        }
      }
  }
}
</script>

<style scoped>
.section {
    background-image: url('../assets/images/sky-pattern-paradise-hd-free-church-baiyun-pull-material-9d3b8396d6ab6364c246950e89f5bd071.jpg');
    background-position: center;
    background-size: cover;
    height: 100vh;
}

.section-border {
    border: 0.5px solid #CA0609;
    border-radius: 20px;
}

.section-border form {
   width: 100%;
}

input[type=name],
input[type=email],
textarea[type=message] {
    border: 1.5px solid #CA0609;
    padding: 0.4rem 1.25rem;
    color: rgba(0, 0, 0, 0.4);
    width: 85%;
    margin: 0 auto 1.5rem auto;
}

button {
    border-radius: 5px;
    text-transform: uppercase;
    width: 85%;
    height: 2rem;
    margin-bottom: 1.5rem;
}

.second-p {
    background: rgba(115, 115, 116, 1);
    width: 45%;
}

@media (min-width: 375px) {
    .section-border {
        width: 95%;
    }

    form {
        margin: 0 1.5rem;
    }
}

@media (min-width: 400px) {
    .section-border {
        width: 90%;
    }
}

@media (min-width: 640px) {
    .section-border {
        width: 50%;
    }    
}

@media (min-width: 768px) {
    .section-border {
        width: 40%;
    } 

    button {
        height: 2.3rem;
    }
}

@media (min-width: 1024px) {
    .section-border {
        width: 35%;
    } 
}

@media (min-width: 1200px) {
    .section-border {
        width: 30%;
    }
    
    .welcome {
        width: 100%;
    }
}
</style>