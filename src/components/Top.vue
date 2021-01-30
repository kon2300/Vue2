<template>
  <div id="top">
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="message">
          <div class="column message-header p-0"><span class="tag is-info m-0 p-1">STEP 1</span><p class="is-size-5 has-text-centered pb-3">お客様の情報を入力してください。</p></div>
          <div class="column"><p class="has-text-info">-性別-</p></div>
          <div class="column">
            <label>
              <input type="radio" v-model="myGender" value="男性"/>男性
            </label>
            <label>
              <input type="radio" v-model="myGender" value="女性"/>女性
            </label>
          </div>
          <div class="column"><p class="has-text-info">-生年月日-</p></div>
          <div class="select">
            <select v-model="year">
              <option v-for="myBirthYear in myBirthYears" :key="myBirthYear.year" :value="myBirthYear.label">{{ myBirthYear.label }}</option>
            </select>
          </div>
          <div class="select">
            <select v-model="month">
              <option v-for="m in 12" :key="m">{{ `${m}月` }}</option>
            </select>
          </div>
          <div class="select mb-4">
            <select v-model="date">
              <option v-for="d in 31" :key="d">{{ `${d}日` }}</option>
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
export default {
  name: 'Top',
  data () {
    return {
      myGender: null,
      year: 2000,
      month: 1,
      date: 1,
      myBirthYears: []
    }
  },
  mounted () {
    this.myBirthYears = this.genereate()
  },
  methods: {
    genereate () {
      const allBirthYears = []
      for (let y = 2020; y > 1921; y--) {
        if (y > 2018) {
          allBirthYears.push({ year: y, label: `${y}年 (令和${y - 2018}年)` })
        } else if (y > 1988) {
          allBirthYears.push({ year: y, label: `${y}年 (平成${y - 1988}年)` })
        } else if (y > 1925) {
          allBirthYears.push({ year: y, label: `${y}年 (昭和${y - 1925}年)` })
        } else if (y > 1911) {
          allBirthYears.push({ year: y, label: `${y}年 (大正${y - 1911}年)` })
        }
      }
      return allBirthYears
    }
  }
}
</script>
