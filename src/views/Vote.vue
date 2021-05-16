<template>
  <div class="Vote">
    <VotePoll/>
    <Author/>
  </div>
</template>

<script>
import VotePoll from '@/components/VotePoll.vue'
import Author from '@/components/Author.vue'

export default {
  name: 'Vote',
  components: {
    VotePoll,
    Author
  }
}
</script>

<style>
.Vote {
  width :30rem;
  margin: auto;
  padding: 2rem;
  background: #f1f5f8;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  margin-top: 2rem;
  border-radius: 10px;
}
.pollID{
  text-align: center;
}
.pollTitle {
  text-align: center;
  font-size: 22px;
}
.form-radio {
  padding: 10px;
  margin-top :7px;
}

@media screen and (max-width: 480px) {
  .Vote {
    width: 23rem;
  }
}
</style>
