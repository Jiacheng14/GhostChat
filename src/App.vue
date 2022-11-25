<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { nextTick, ref,  reactive } from 'vue'
import './assets/login_style.css';
// import axios from 'axios'

const userName = ref('');
const userPassword = ref('');
const a = ref('');

// Login and go to chat
function login() {
  // 确认账户密码
  a.value = '123123';
  let routeData = useRouter().resolve({
    path: '/chat',
  });
  window.location.assign(routeData.href);
}

// Go to sign up page
function signUp() {
  useRouter().push({ path: '/signup' });
}
</script>

<template>
  <routerView />
</template>

<style scoped>
</style>
