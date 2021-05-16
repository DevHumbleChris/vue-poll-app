<template>
  <div class="VotePoll">
    <div v-if="isID">
      <div class="pollID">
        poll ID: {{poll.id}}
      </div>
      <div class="pollTitle">
        {{poll.title}}
      </div>
      <form @submit.prevent="handleVoteForm">
        <div v-if="alertOpen" class="text-white px-6 py-4 border-0 rounded relative mb-4 warning">
          <span class="text-white inline-block mr-8 align-middle">
            You Need To Cast A Vote (Choose One Option)
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
        <div v-for="(answer, index) in poll.answer" :key="index" class="form-radio">
          <input type="radio" name="answer" :value="answer.option" :id="answer.option" v-model="selected"/>
          <label :for="answer.option">
            {{answer.option}}
          </label>
        </div>
        <div class="flex justify-center buttonGroup">
          <router-link to="/" class="btn btn-back-polls-vote">
            Back To Polls
          </router-link>
          <button class="btn btn-cast-vote" type="submit">
            Cast Vote
          </button>
        </div>
      </form>
    </div>
    <div v-else>
      Id Not Found
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'VotePoll',
  data () {
    return {
      poll: {},
      isID: false,
      selected: '',
      alertOpen: false
    }
  },
  computed: {
    ...mapState([
      'Polls'
    ])
  },
  methods: {
    handleVoteForm () {
      if (!this.selected) {
        this.alertOpen = true
      } else {
        this.poll.answer.map((answer) => {
          if (answer.option === this.selected) {
            answer.vote++
          }
        })
        this.$router.push({
          name: 'Home',
          path: '/'
        })
      }
    },
    closeAlert () {
      this.alertOpen = false
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.poll = this.Polls.find((polls) => {
      this.isID = true
      return polls.id === parseInt(id)
    })
  }
}
</script>

<style>
.warning {
  background: red;
  color: #fff;
}
.btn-back-polls-vote {
  text-align: center;
}
.btn-back-polls-vote, .btn-cast-vote {
  width: 100%;
}
.pollTitle {
  font-family: 'Texturina', serif;
}
.pollID {
  font-family: 'Chela One', cursive;
}
</style>
