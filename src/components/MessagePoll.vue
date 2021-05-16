<template>
    <div class="messagePoll">
      <AlertBox
        :alertOpen="alertOpen"
        :message="message"
        :closeAlert="closeAlert"
      />
        <h3>Welcome To
            <span> Vue Poll App</span>.
        </h3>
        <div class="todayDate">
            Today is
            <span class="today">
                {{today}}
            </span>
        </div>
        <div class="PollCreated">
            You've Created
            <span class="numberOfPollCreated">
                {{numberOfPolls}}
            </span>
            Polls.
        </div>
        <button
            class="btn btn-showPollForm"
            @click="showForm"
        >
            Create Poll
        </button>
        <div class="formContainer" v-if="isForm">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="title">Title</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        v-model="formData.title"
                        placeholder="Type your question here..."
                        class="px-3 py-3 placeholder-blueGray-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        required
                    >
                </div>
                <div class="form-group">
                    <label for="description">Description (option)</label>
                    <textarea
                        class="px-3 py-3 placeholder-blueGray-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                        id="description"
                        name="description"
                        v-model="formData.description"
                        placeholder="Enter an introduction text..."
                    />
                </div>
                <div class="form-group">
                  <label htmlFor="answer">Answer Options</label>
                </div>
                <div class="form-group" v-for="(opt, index) in formData.answer" :key="index">
                  <input
                  type="text"
                  :name="opt.option"
                  placeholder="Choose an answer..."
                  v-model="opt.option"
                  class="px-3 py-3 placeholder-blueGray-300 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                  required
                />
              </div>
              <button
                class="btn btn-cancel"
                @click.prevent="cancelSubmit"
              >
                Cancel
              </button>
              <button
                class="btn btn-create-poll"
                type="submit"
              >
                Create Poll
              </button>
            </form>
        </div>
        <Polls/>
    </div>

</template>

<script>
import { mapState, mapMutations, mapGetters } from 'vuex'
import { format } from 'date-fns'
import Polls from '@/components/Polls.vue'
import AlertBox from '@/components/AlertBox'

export default {
  name: 'MessagePoll',
  components: {
    Polls,
    AlertBox
  },
  data () {
    return {
      isForm: false,
      formData: {
        id: '',
        title: '',
        description: '',
        answer: [
          {
            option: '',
            vote: 0
          },
          {
            option: '',
            vote: 0
          },
          {
            option: '',
            vote: 0
          },
          {
            option: '',
            vote: 0
          }
        ]
      },
      message: '',
      alertOpen: false
    }
  },
  computed: {
    ...mapState([
      'Polls'
    ]),
    ...mapGetters([
      'numberOfPolls'
    ]),
    today () {
      const day = format(new Date(), 'eeee')
      return day
    }
  },
  methods: {
    ...mapMutations([
      'HANDLE_SUBMIT'
    ]),
    showForm () {
      if (this.isForm) {
        this.isForm = false
      } else {
        this.isForm = true
        this.formData = {
          id: parseInt(new Date().getTime().toString()),
          title: '',
          description: '',
          answer: [
            {
              option: '',
              vote: 0
            },
            {
              option: '',
              vote: 0
            },
            {
              option: '',
              vote: 0
            },
            {
              option: '',
              vote: 0
            }
          ]
        }
      }
    },
    handleSubmit () {
      this.HANDLE_SUBMIT(this.formData)
      this.isForm = false
      this.message = 'Poll Was Created Successfully'
      this.alertOpen = true
    },
    closeAlert () {
      this.alertOpen = false
      this.message = ''
    },
    cancelSubmit () {
      this.isForm = false
      this.message = 'Poll Creation Operation Was Cancelled Successfully!'
      this.alertOpen = true
    }
  }
}
</script>

<style>
.messagePoll{
    text-align: center;
    padding: 10px;
}
.today {
    color: green;
}
.formContainer {
    box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
    -webkit-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
    -moz-box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.64);
    background: #ffffff;
    padding: 10px;
    border-radius: 10px;
    text-align: initial;
}
.form-group {
    display: flex;
    flex-direction: column;
    padding: 10px;
}
</style>
