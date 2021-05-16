<template>
  <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-4 success">
    <span class="text-white inline-block mr-8 align-middle">
      {{message}}
    </span>
    <button
      class="absolute bg-transparent text-2xl font-semibold leading-none right-0 top-2 mr-6 outline-none focus:outline-none"
      @click="closeAlert"
    >
      <span>
        x
      </span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'AlertBox',
  props: {
    alertOpen: Boolean,
    message: String,
    closeAlert: Function
  }
}
</script>

<style>
.success {
  background: rgb(55, 163, 55);
  padding: 10px;
  margin-bottom: 0.5rem;
  border-radius: 10px;
  color: white;
}
</style>
