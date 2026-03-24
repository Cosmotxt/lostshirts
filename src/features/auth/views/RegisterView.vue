<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeaderPage from "../../home/components/HeaderPage.vue";

const router = useRouter();
const name = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const error = ref("");
const success = ref("");

const onSubmit = () => {
  error.value = "";
  success.value = "";

  if (!name.value.trim() || !email.value.trim() || !password.value.trim() || !confirmPassword.value.trim()) {
    error.value = "Todos os campos são obrigatórios.";
    return;
  }

  if (password.value !== confirmPassword.value) {
    error.value = "As senhas não conferem.";
    return;
  }

  const normalizedEmail = email.value.toLowerCase();

  const usersJson = localStorage.getItem("lostshirt_users");
  const users = usersJson ? (JSON.parse(usersJson) as Array<{ name: string; email: string; password: string }>) : [];

  if (users.find((u) => u.email.toLowerCase() === normalizedEmail)) {
    error.value = "E-mail já cadastrado.";
    return;
  }

  users.push({ name: name.value.trim(), email: normalizedEmail, password: password.value });
  localStorage.setItem("lostshirt_users", JSON.stringify(users));

  success.value = "Cadastro realizado com sucesso! Você será redirecionado para login.";
  setTimeout(() => router.push("/login"), 1400);
};

const goLogin = () => router.push("/login");
</script>

<template>
  <div class="min-h-screen bg-[#f7f7f7] flex flex-col">
    <HeaderPage />

    <div class="flex-1 flex justify-center items-center mt-20 px-4">
      <div class="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-lg p-8">
        <h1 class="text-5xl font-bold tracking-widest text-center mb-8">CADASTRAR</h1>

        <div class="space-y-5">
          <div>
            <label class="block font-semibold mb-2" for="name">Nome</label>
            <input id="name" v-model="name" type="text" placeholder="Seu nome" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>
          <div>
            <label class="block font-semibold mb-2" for="email">E-mail</label>
            <input id="email" v-model="email" type="email" placeholder="Seu e-mail" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>
          <div>
            <label class="block font-semibold mb-2" for="password">Senha</label>
            <input id="password" v-model="password" type="password" placeholder="Senha" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>
          <div>
            <label class="block font-semibold mb-2" for="confirm">Confirme sua senha</label>
            <input id="confirm" v-model="confirmPassword" type="password" placeholder="Confirme a senha" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>

          <button @click.prevent="onSubmit" class="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition">CADASTRAR</button>

          <p class="text-center text-sm text-gray-500">Já tem conta? <button @click.prevent="goLogin" class="font-bold underline">Entrar</button></p>

          <p v-if="error" class="text-red-600 text-center font-semibold">{{ error }}</p>
          <p v-if="success" class="text-green-600 text-center font-semibold">{{ success }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
