<script setup lang="ts">
import '../assets/login_style.css';
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { nextTick, ref,  reactive } from 'vue'
import axios from 'axios'

const router = useRouter();
const route = useRoute();
const userName = ref('');
const userPassword = ref('');
const aaa = ref();

// Login and go to chat
function login() {
    // 确认账户密码
    // router.push('/chat');
    axios.post('./api/login', {
        username: userName.value,
        password: userPassword.value
    }).then((res) => {
        aaa.value = res;
    }).catch((err) => {
        aaa.value = err;
    });
}

// Go to sign up page
function signUp() {
    // useRouter().push('../signup');
}

// Go to forgot page
function forgot() {

}
</script>

<template>
    <div class = "backround">
        <div class = "box-input">
            <h2>All Ghost Chat</h2>
            <div class="input-box">
                <input type="" name="" id="" v-model="userName" required />
                <label>Username</label>
            </div>
            <div class = "input-box">
                <input type="password" v-model="userPassword" required />
                <label>Password</label>
                <i></i>
            </div>
            <div class = "links">
                <RouterLink to="/forgot" class="aRouter">Forgot password?</RouterLink>
                <RouterLink to="/signup" class="aRouter">Sign up</RouterLink>
            </div>
            <button @click="login">Login</button>
            <!-- <routerView></routerView> -->
            <p>{{ aaa }}</p>
        </div>
    </div>
</template>