<template>
  <div class="border p-5 shadow">
    <div class="w-75 mx-auto shadow-lg rounded p-2">
      <date-picker class="" v-model="date" format="jYYYY/jM/jD" />
    </div>

    <div class="d-flex flex-column align-items-center">
      <button class="btn btn-info btn-sm shadow-sm mt-2" @click="tomorrow">
        Tomorrow
      </button>
      <p v-if="tomorrowDate">Tomorrow's date :{{ formatDate(tomorrowDate) }}</p>
      <button class="btn btn-success btn-sm shadow-sm my-2" @click="endOfDay">
        End of day
      </button>
      <p v-if="endTimeString">
        Remaining time until the end of the day: {{ endTimeString }}
      </p>
      <button class="btn btn-danger btn-sm shadow-sm" @click="lastDay">
        LastDay
      </button>
      <p v-if="lastday">The day before the date: {{ formatDate(lastday) }}</p>
      <button class="btn btn-warning my-2 btn-sm shadow-sm" @click="startOfDay">
        Start of day
      </button>
      <p v-if="startTimeString">
        The start of the picked date is: {{ startTimeString }}
      </p>
    
    </div>
  </div>
</template>

<script>
import VuePersianDatetimePicker from "vue-persian-datetime-picker"
import dayjs from "dayjs"
import Moment from "moment-jalaali"
import "dayjs/locale/fa"

dayjs.locale("fa")

export default {
  components: { DatePicker: VuePersianDatetimePicker },

  data() {
    return {
      date: null,
      tomorrowDate: null,
      endTimeString: null,
      lastday: null,
      startTimeString: null,
    }
  },

  methods: {
    tomorrow() {
      if (!this.date) {
        return
      }

      const selectedDate = Moment(this.date, "jYYYY/jM/jD")
      const tomorrowDate = selectedDate.add(1, "day").toDate()
      this.tomorrowDate = tomorrowDate
    },
    lastDay() {
      if (!this.date) {
        return
      }
      const selectedDate = Moment(this.date, "jYYYY/jM/jD")
      const lastdayDate = selectedDate.add(-1, "day").toDate()
      this.lastday = lastdayDate
    },

    endOfDay() {
      if (!this.date) {
        return
      }

      const selectedDate = Moment(this.date, "jYYYY/jM/jD HH:mm:ss")
      const endOfDay = selectedDate.endOf("day").toDate()
      this.endTimeString = Moment(endOfDay).format(
        "dddd jD jMMMM jYYYY HH:mm:ss"
      )
      console.log(this.endTimeString)
    },
    startOfDay() {
      if (!this.date) {
        return
      }

      const selectedDate = Moment(this.date, "jYYYY/jM/jD HH:mm:ss")
      const startOfDay = selectedDate.startOf("day").toDate()
      this.startTimeString = Moment(startOfDay).format(
        "dddd jD jMMMM jYYYY HH:mm:ss"
      )
    },

    formatDate(date) {
      return Moment(date).format("dddd jD jMMMM jYYYY")
    },
  },
}
</script>
