<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { nextTick, ref,  reactive } from 'vue'
import '../assets/login_style.css';
// import axios from 'axios'

const userName = ref('');
const userPassword = ref('');

// Login and go to chat
function login() {
    // 确认账户密码
    // useRouter().push('../chat');
}

// Go to sign up page
function signUp() {
    // useRouter().push('../signup');
}
</script>

<template>
    <body class="background">
        <div class = "box">
            <h2>Login</h2>
            <div class = "input-box">
                <label>Username</label>
                <input type = "text" v-model="userName">
            </div>
            <div class = "input-box">
                <label>Password</label>
                <input type = "password" v-model="userPassword">
            </div>
            <div class = "btn-box">
                <a href = "./forgot.html">forgot password?</a>
                <div>
                    <button @click="login">Log in</button>
                    <button @clidk="signUp">Sign up</button>
                </div>
            </div>
        </div>
    </body>
</template>