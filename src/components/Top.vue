<template>
  <div id="top">
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="message">
          <div class="column message-header p-0"><span class="tag is-info m-0 p-1">STEP 1</span><p class="is-size-5 has-text-centered pb-3">お客様の情報を入力してください。</p></div>
          <div class="column"><p class="has-text-info">-性別-</p></div>
          <div class="column">
            <label>
              <input type="radio" v-model="onChangeStateMyGender" value="男性"/>男性
            </label>
            <label>
              <input type="radio" v-model="onChangeStateMyGender" value="女性"/>女性
            </label>
          </div>
          <div class="column"><p class="has-text-info">-生年月日-</p></div>
          <div class="select ml-2">
            <select v-model="onChangeStateMyYear">
              <option v-for="myBirthYear in myBirthYears" :key="myBirthYear.year" :value="myBirthYear.label">{{ myBirthYear.label }}</option>
            </select>
          </div>
          <div class="select">
            <select v-model="onChangeStateMyMonth" @change="getDate()">
              <option v-for="m in 12" :key="m" :value="m">{{ `${m}月` }}</option>
            </select>
          </div>
          <div class="select mb-4">
            <select v-model="onChangeStateMyDate">
              <option v-for="date in dateMax" :key="date" :value="date">{{ `${date}日` }}</option>
            </select>
           </div>
        </article>
        <div class="column has-text-centered">
          <router-link  class="button is-primary" to="/second">次へ進む</router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { generate } from '@/helpers/definition.js'
import { mapGetters, mapMutations } from 'vuex'
export default {
  name: 'Top',
  data () {
    return {
      myBirthYears: [],
      dateMax: null
    }
  },
  computed: {
    ...mapGetters([
      'getStateMyGender',
      'getStateMyYear',
      'getStateMyMonth',
      'getStateMyDate'
    ]),
    onChangeStateMyGender: {
      get () {
        return this.getStateMyGender
      },
      set (value) {
        this.changeStateMyGender(value)
      }
    },
    onChangeStateMyYear: {
      get () {
        return this.getStateMyYear
      },
      set (value) {
        this.changeStateMyYear(value)
      }
    },
    onChangeStateMyMonth: {
      get () {
        return this.getStateMyMonth
      },
      set (value) {
        this.changeStateMyMonth(value)
      }
    },
    onChangeStateMyDate: {
      get () {
        return this.getStateMyDate
      },
      set (value) {
        this.changeStateMyDate(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeStateMyGender',
      'changeStateMyYear',
      'changeStateMyMonth',
      'changeStateMyDate'
    ]),
    getDate: function () {
      if (this.getStateMyMonth === 1 || this.getStateMyMonth === 3 || this.getStateMyMonth === 5 || this.getStateMyMonth === 7 || this.getStateMyMonth === 8 || this.getStateMyMonth === 10 || this.getStateMyMonth === 12) {
        this.dateMax = 31
      } else if (this.getStateMyMonth === 2) {
        this.dateMax = 28
      } else {
        this.dateMax = 30
      }
    }
  },
  created () {
    this.getDate()
  },
  mounted () {
    this.myBirthYears = generate()
  }
}
</script>
