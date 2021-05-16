<template>
  <div class="home">
      <div class="pollContainer">
        <MessagePoll/>
        <Author/>
      </div>
  </div>
</template>

<script>
import MessagePoll from '@/components/MessagePoll.vue'
import Author from '@/components/Author.vue'

export default {
  name: 'Home',
  components: {
    MessagePoll,
    Author
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

@media screen and (max-width: 480px) {
  .pollContainer {
    width: 22rem;
  }
}
</style>
