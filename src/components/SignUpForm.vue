<template>
  <div class="container">
    <form class="modal sign-up-form">
      <!-- use a prop for this content -->
      <h2>{{ formData.header }}</h2>
      <p>{{ formData.msg }}</p>
      <input placeholder="Name" type="name" />
      <input placeholder="name@example.com" type="email" />
      <button @click="closeModal" class="close">&times;</button>
      <button @click="closeModal" class="btn submit">
        {{ formData.btnText }}
      </button>
    </form>
  </div>
</template>
<script>
export default {
  name: "SignUpForm",
  props: {
    formData: Object,
  },
  methods: {
    closeModal(e) {
      e.preventDefault();
      this.$emit("close-modal", e);
    },
  },
  emits: ["close-modal"],
};
</script>

<style scoped>
.sign-up-form {
  --primary: var(--oxford-blue);
  --secondary: var(--light-gray);
  --tertiary: var(--charcoal);
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--primary);
  color: var(--secondary);
  padding: 4rem;
}
p {
  margin-bottom: 2rem;
}
h2 {
  font-size: 3rem;
  width: max-content;
  margin-bottom: 1rem;
}
input {
  display: block;
  margin: 0 auto;
  padding: 1rem 2rem;
  width: 80%;
  font-family: inherit;
  color: var(--black);
  font-size: 1.6rem;
}
input:focus {
  outline-color: none;
}
input::placeholder {
  color: var(--tertiary);
}
input:not(:last-child) {
  margin-bottom: 1.5rem;
}

.close {
  position: absolute;
  top: 3px;
  right: 1.7rem;
  border: none;
  background: none;
  font-size: 4.5rem;
  color: inherit;
  cursor: pointer;
}

.submit {
  background: var(--secondary);
  color: var(--primary);
  font-size: 1.8rem;
  font-weight: bold;
}
</style>
