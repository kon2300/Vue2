<template>
  <div id="second">
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="message">
          <div class="column message-header p-0"><span class="tag is-info m-0 p-1">STEP 2</span><p class="is-size-5 has-text-centered pb-3">以下の質問にお答えください</p></div>
          <transition name="bounce" appear>
            <div class="column">
              <p class="has-text-info">現在生命保険に加入されていますか？</p>
              <p><label><input type="radio" name="insurance1" v-model="onChangeStateMyInsurance1" value="はい" @click="onBtn"/>はい</label></p>
              <p><label><input type="radio" name="insurance1" v-model="onChangeStateMyInsurance1" value="いいえ" @click="onBtn"/>いいえ</label></p>
            </div>
          </transition>
          <transition name="bounce">
            <div v-show="isShow" class="column">
              <p class="has-text-info">現在入院中ですか？または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</p>
              <p><label><input type="radio" name="insurance2" v-model="onChangeStateMyInsurance2" value="はい" @click="onBtn2"/>はい</label></p>
              <p><label><input type="radio" name="insurance2" v-model="$store.state.myInsurance2" value="いいえ" @click="onBtn2"/>いいえ</label></p>
            </div>
          </transition>
          <transition name="bounce">
            <div v-show="isShow2" class="column">
              <p class="has-text-info">過去５年以内に、病気や怪我で、手術を受けたことまたは継続して７日以上の入院をしたことがありますか？</p>
              <p><label><input type="radio" name="insurance3" v-model="onChangeStateMyInsurance3" value="はい"/>はい</label></p>
              <p><label><input type="radio" name="insurance3" v-model="onChangeStateMyInsurance3" value="いいえ"/>いいえ</label></p>
            </div>
          </transition>
        </article>
      </div>
    </div>
    <div class="has-text-centered">
      <span class="m-6"><router-link  class="button is-primary" to="/">前に戻る</router-link></span>
      <span class="m-6"><router-link  class="button is-primary" to="third">次へ進む</router-link></span>
    </div>
  </div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  name: 'Second',
  data () {
    return {
      isShow: false,
      isShow2: false
    }
  },
  computed: {
    ...mapGetters([
      'getStateMyInsurance1',
      'getStateMyInsurance2',
      'getStateMyInsurance3'
    ]),
    onChangeStateMyInsurance1: {
      get () {
        return this.getStateMyInsurance1
      },
      set (value) {
        this.changeStateMyInsurance1(value)
      }
    },
    onChangeStateMyInsurance2: {
      get () {
        return this.getStateMyInsurance2
      },
      set (value) {
        this.changeStateMyInsurance2(value)
      }
    },
    onChangeStateMyInsurance3: {
      get () {
        return this.getStateMyInsurance3
      },
      set (value) {
        this.changeStateMyInsurance3(value)
      }
    }
  },
  methods: {
    ...mapMutations([
      'changeStateMyInsurance1',
      'changeStateMyInsurance2',
      'changeStateMyInsurance3'
    ]),
    onBtn: function () {
      this.isShow = true
    },
    onBtn2: function () {
      this.isShow2 = true
    }
  }
}
</script>
