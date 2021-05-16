<template>
  <div class="PollResults">
    <div v-if="isID">
      <div class="resultsTitle">
        {{poll.title}}
      </div>
      <div class="noOfPeopleVoted">
        Total Votes Casted
        <span class="castedNo">
          {{totalVotes}}
        </span>
      </div>
      <div class="resultsWrapper">
        <ul class="px-0 pollResults">
          <li
            class="border list-none rounded-sm px-3 py-3"
            style="border-bottom-width:1px solid black"
            v-for="(ans, index) in poll.answer"
            :key="index"
          >
            <div
              class="relative pt-1"
            >
              <div class="flex mb-2 items-center justify-between">
                <div>
                  <span class="text-xs font-semibold inline-block py-1 px-2 rounded text-pink-600 bg-pink-200">
                    {{ans.option}}
                  </span>
                </div>
                <div class="text-right">
                  <span class="text-xs font-semibold inline-block text-pink-600 mx-1">
                    {{totalVotes == 0 ? 0 :Math.floor((ans.vote / totalVotes) * 100)}}%
                  </span>
                  <span class="text-xs font-semibold inline-block py-1 px-2 rounded text-pink-600 bg-pink-200">
                    {{ans.vote > 0 ? 'Votes': 'Vote'}} {{ans.vote}}
                  </span>
                </div>
              </div>
              <div
                class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-pink-200"
              >
                <div
                  :style="handlePercentage(ans.vote, ans.option)"
                  class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-pink-500"
                >
                </div>
              </div>
            </div>
          </li>
        </ul>
      <div class="chartTitle">Doughnut Chart Data</div>
      <bar-chart :chartData="chartData" :options="options" class="chart"/>
      </div>
      <div class="justify-center flex buttonGroup">
        <router-link to="/" class="btn btn-back-polls">
          Back To Polls
        </router-link>
        <router-link :to="`/${poll.id}/vote`" class="btn btn-vote-again">
          Vote Again?
        </router-link>
      </div>
    </div>
    <div v-else>
      No Matching ID
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BarChart from '@/components/ResultsChart.vue'

export default {
  name: 'PollResults',
  components: {
    BarChart
  },
  data () {
    return {
      isID: false,
      poll: {},
      chartData: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [
          {
            label: '',
            backgroundColor: [],
            data: []
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'right'
        }
      }
    }
  },
  computed: {
    ...mapState([
      'Polls'
    ]),
    totalVotes () {
      const total = this.poll.answer.reduce((total, ans) => {
        return total + ans.vote
      }, 0)
      return total
    },
    colors () {
      const colors = this.poll.answer.map(() => {
        const numbers = ['0', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f']
        let color = '#'
        for (let x = 1; x <= 6; x++) {
          color += numbers[Math.floor(Math.random() * 15)]
        }
        return color
      })
      return colors
    }
  },
  mounted () {
    const id = this.$route.params.id
    this.poll = this.Polls.find((polls) => {
      this.isID = true
      return polls.id === parseInt(id)
    })
    const dataChart = this.poll.answer.map((ans) => ans.vote)
    const chartLabel = this.poll.answer.map((ans) => ans.option)
    this.chartData.datasets[0].label = this.poll.title
    this.chartData.datasets[0].backgroundColor = this.colors
    this.chartData.datasets[0].data = dataChart
    this.chartData.labels = chartLabel
  },
  methods: {
    handlePercentage (vote, option) {
      const totalPercentage = Math.floor((vote / this.totalVotes) * 100)
      const index = this.poll.answer.findIndex((ans) => ans.option === option)
      const style = `width: ${totalPercentage}%; background: ${this.colors[index]}`
      return style
    }
  }
}
</script>

<style>
.PollResults {
  position: relative;
}
.resultsTitle {
  text-align: center;
  font-size: 24px;
  font-family: 'Texturina', serif;
  margin-bottom: 10px;
}
.noOfPeopleVoted {
  font-family: 'Chela One', cursive;
  font-size: 24px;
  margin-bottom: 15px;
}
.resultsWrapper {
  display: flex;
}
.pollResults {
  width: 22rem;
}
.chart {
  width: 22rem;
  margin-left: 10px;
  padding: 15px;
}
.castedNo {
  color: green;
}
.chartTitle {
  position: absolute;
  top: 100px;
  right: 70px;
  font-family: 'Permanent Marker', cursive;
  font-size: 25px;
}
@media screen and (max-width: 480px) {
  .resultsWrapper {
    flex-direction: column;
  }
  .pollResults {
    width: 20.5rem;
  }
  .chart {
    width: 20.5rem;
  }
  .chartTitle {
    font-size: 25px;
    top: 490px;
    left: 30px;
    right: 0px;
  }
  .noOfPeopleVoted {
    text-align: center;
  }
  .buttonGroup {
    flex-direction: column;
  }
  .btn-back-polls, .btn-vote-again {
    width: 100%;
    text-align: center;
  }
}
</style>
