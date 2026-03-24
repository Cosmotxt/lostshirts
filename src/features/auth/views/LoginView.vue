<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";
import HeaderPage from "../../home/components/HeaderPage.vue";

const router = useRouter();
const email = ref("");
const password = ref("");
const error = ref("");

const onSubmit = () => {
  error.value = "";
  const usersJson = localStorage.getItem("lostshirt_users");
  if (!usersJson) {
    error.value = "Nenhuma conta cadastrada. Crie uma conta primeiro.";
    return;
  }

  try {
    const users = JSON.parse(usersJson) as Array<{ email: string; password: string; name: string }>;
    const match = users.find((u) => u.email.toLowerCase() === email.value.toLowerCase());
    if (!match) {
      error.value = "E-mail não encontrado. Cadastre-se ou verifique o e-mail.";
      return;
    }
    if (match.password !== password.value) {
      error.value = "Senha incorreta. Tente novamente.";
      return;
    }

    localStorage.setItem("lostshirt_current_user", JSON.stringify(match));
    router.push("/");
  } catch (e) {
    error.value = "Erro interno. Tente novamente mais tarde.";
    console.error(e);
  }
};

const goRegister = () => router.push("/cadastrar");
</script>

<template>
  <div class="min-h-screen bg-[#f7f7f7] flex flex-col">
    <HeaderPage />

    <div class="flex-1 flex justify-center items-center mt-20 px-4">
      <div class="w-full max-w-md bg-white shadow-lg border border-gray-200 rounded-lg p-8">
        <h1 class="text-5xl font-bold tracking-widest text-center mb-8">ENTRAR</h1>

        <div class="space-y-5">
          <div>
            <label class="block font-semibold mb-2" for="email">E-mail</label>
            <input id="email" v-model="email" type="email" placeholder="Digite seu e-mail" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>
          <div>
            <label class="block font-semibold mb-2" for="password">Senha</label>
            <input id="password" v-model="password" type="password" placeholder="Digite a senha" class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-black-ls" />
          </div>

          <button @click.prevent="onSubmit" class="w-full bg-black text-white font-bold py-3 rounded hover:bg-gray-800 transition">ENTRAR</button>

          <p class="text-center text-sm text-gray-500">Não tem conta? <button @click.prevent="goRegister" class="font-bold underline">Cadastrar</button></p>

          <p v-if="error" class="text-red-600 text-center font-semibold">{{ error }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
