# 🖤 Lost Shirts

**Lost Shirts** é um e-commerce moderno focado em camisetas e produtos personalizados com estética alternativa.
O projeto foi desenvolvido com **frontend em Vue** e **backend em Node.js**, utilizando uma arquitetura modular orientada a **features** para manter o código escalável e organizado.

A proposta da loja é oferecer peças com identidade própria — camisetas, estampas e outros personalizados com uma pegada **independente, underground e autoral**.

---

## ✨ Tecnologias utilizadas

### Frontend

* Vue.js
* TypeScript
* Vite
* Vue Router

### Backend

* Node.js

---

## 🧱 Arquitetura

O frontend utiliza uma **arquitetura baseada em features**, onde cada domínio da aplicação possui seus próprios componentes, serviços e modelos.

Isso facilita:

* manutenção do código
* escalabilidade
* isolamento de responsabilidades
* evolução independente das funcionalidades

### Estrutura de pastas

```
src
│
├── core/                # Configurações globais
│   ├── router/
│   ├── services/
│   
│
├── features/
│   ├── products/
│   │   ├── components/
│   │   ├── views/
│   │   ├── services/
│   │   ├── models/
│   │   
│   │
│   ├── cart/
│   │   ├── components/
│   │   ├── models/
│   │   
│   │
│   ├── checkout/
│   │   ├── views/
│   │   └── services/
│   │
│   └── auth/
│       ├── views/
│       ├── services/
│       
│
└── shared/
    ├── components/
    └── utils/
```

---

## 🛍️ Funcionalidades

* Listagem de camisetas e produtos personalizados
* Página de detalhes do produto
* Carrinho de compras
* Checkout
* Autenticação de usuários
* Histórico de pedidos

---

## 📌 Roadmap

* sistema de variações (tamanho, cor)
* sistema de cupons
* painel administrativo
* integração com gateway de pagamento
* gerenciamento de estoque
* sistema de reviews de produtos

---