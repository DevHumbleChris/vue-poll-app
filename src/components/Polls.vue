<template>
  <div class="Polls">
    <div class="noPolls" v-if="polls.length == 0">
      No Polls Created, Please Try To Create A Poll.
      <div class="hint">
        <div class="hintTitle">Notice:</div>
        Once You Have Created A Poll Don't Refresh The Page. If You happen To Refresh It, All The Created Polls Gets Lost (Polls Are Not Stored In The Database).
      </div>
    </div>
    <div class="pollsContainer" v-else>
      <div v-if="polls">
        <div v-for="(poll,index) in polls" :key="index">
          <div class="polls">
            <div class="title">
              {{poll.title}}
            </div>
            <div :class="getDateCreated(poll.id)">
              <i>Time Created: {{timeCreated}} ago</i>
            </div>
            <router-link :to="`/${poll.id}/vote`" class="btn btn-vote">
              <font-awesome-icon :icon="['fas', 'vote-yea']"/>
              Vote
            </router-link>
            <router-link :to="`/${poll.id}/results`" class="btn btn-results" :disabled="true">
              <font-awesome-icon :icon="['fas', 'poll']"/>
              Results
            </router-link>
          </div>
        </div>
        <button class="btn btn-clearAll" @click="clearPolls">
          Clear All Polls
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { formatDistanceToNow } from 'date-fns'

export default {
  name: 'Polls',
  data () {
    return {
      polls: [],
      timeCreated: ''
    }
  },
  computed: {
    ...mapState([
      'Polls'
    ])
  },
  mounted () {
    this.polls = this.Polls
  },
  methods: {
    ...mapActions([
      'clearAllPolls'
    ]),
    getDateCreated (id) {
      this.timeCreated = formatDistanceToNow(new Date(id), {
        includeSeconds: true
      })
      return 'dateCreated'
    },
    clearPolls () {
      setTimeout(() => {
        this.clearAllPolls(this.Polls)
        this.polls = []
      }, 2000)
    }
  }
}
</script>

<style>
.polls {
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.noPolls {
  background: #fff;
  box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
  padding: 15px;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.title {
  font-family: 'Ubuntu', sans-serif;
}
.dateCreated {
  margin-bottom: 15px;
}
.hintTitle {
  color: green;
  font-size: 20px;
}
.hint {
  background: #f1f4f7;
  padding: 15px;
  margin-top: 0.6rem;
  border-left: 3px solid chocolate;
  color: red;
}
</style>
