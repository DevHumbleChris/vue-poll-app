<template>
  <div class="Results">
    <PollResults/>
  </div>
</template>

<script>
import PollResults from '@/components/PollResults.vue'

export default {
  name: 'Results',
  components: {
    PollResults
  }
}
</script>

<style>
.Results {
  width: 50rem;
  margin: auto;
  background: #f1f5f8;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  padding: 2rem;
  border-radius: 10px;
  margin-top: 2rem;
}
</style>
