<template>
  <div>
    <date-picker v-model="date" format="jYYYY/jM/jD"/>
    
    <button @click="showTomorrow" :disabled="!date">فردا</button>
    
    <p v-if="tomorrow">
      تاریخ فردا: {{ formatDate(tomorrow) }}
    </p>
    
    <button @click="showEndOfDay" :disabled="!date">پایان روز</button>
    
    <p v-if="endOfDay">
      زمان باقی‌مانده تا پایان روز: {{ endTime }}
    </p>
  </div>
</template>

<script>
import VuePersianDatetimePicker from 'vue-persian-datetime-picker'
import dayjs from 'dayjs';
import jMoment from 'moment-jalaali';
import 'dayjs/locale/fa';
dayjs.locale('fa');

export default {
  data() {
    return {
      date: null,
      tomorrow: null,
      endOfDay: null
    }
  },

  methods: {
    showTomorrow() {
      if(!this.date) return

      const tomorrow = jMoment(this.date, 'jYYYY/jM/jD').add(1, 'day').toDate();
      
      this.tomorrow = tomorrow
    },
    formatDate(date) {
      return jMoment(date).format('dddd jD jMMMM jYYYY');
    },
    showEndOfDay() {
      if(!this.date) return
      
      const endOfDay = jMoment(`${this.date} 23:59:59`, 'jYYYY/jM/jD HH:mm:ss');
      const timeDiff = endOfDay.diff(jMoment(), 'hours', true);
      
      this.endOfDay = endOfDay.format('dddd jD jMMMM jYYYY');
      this.endTime = `${Math.floor(timeDiff)} ساعت و ${Math.floor((timeDiff % 1) * 60)} دقیقه`;
    }
  },

  components: {
    DatePicker: VuePersianDatetimePicker
  }
}
</script>