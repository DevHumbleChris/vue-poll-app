<template>
  <div class="home">
      <div class="pollContainer">
        <MessagePoll/>
      </div>
  </div>
</template>

<script>
import MessagePoll from '@/components/MessagePoll.vue'

export default {
  name: 'Home',
  components: {
    MessagePoll
  }
}
</script>

<style scoped>
.pollContainer {
  margin: auto;
  width: 30rem;
  padding: 1.5rem;
  background: #f1f5f8;
  margin-top: 3rem;
  border-radius: 10px;
  box-shadow: 0 12px 6px -6px #777;
}
</style>
