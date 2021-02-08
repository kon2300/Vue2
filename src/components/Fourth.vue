<template>
  <div id="fourth">
    <div class="columns is-centered">
      <div class="column is-half">
        <article class="message">
          <div class="column message-header p-0"><span class="tag is-info m-0 p-1">STEP 4</span><p class="is-size-5 has-text-centered pb-3">以下の内容をご確認ください。</p></div>
          <div class="column"><p class="has-text-info">-性別-</p></div>
          <div class="column">
            {{ $store.state.myGender }}
          </div>
          <div class="column"><p class="has-text-info">-生年月日-</p></div>
          <div class="column">
            {{ $store.state.year }} {{ $store.state.month }} 月 {{ $store.state.date }} 日
          </div>
          <div class="column"><p class="has-text-info">-現在生命保険に加入されていますか？-</p></div>
          <div class="column">
            {{ $store.state.myInsurance1 }}
          </div>
          <div class="column"><p class="has-text-info">-現在入院中ですか。または、最近３ヶ月以内に医師の診察・検査の結果、入院・手術を進められたことはありますか？-</p></div>
          <div class="column">
            {{ $store.state.myInsurance2 }}
          </div>
          <div class="column"><p class="has-text-info">-過去５年以内に、病気や怪我で手術を受うけたことまたは継続して７日以上の入院をしたことがありますか？-</p></div>
          <div class="column">
            {{ $store.state.myInsurance3 }}
          </div>
          <div class="column"><p class="has-text-info">-ご相談内容-</p></div>
          <div class="column">
            {{ $store.state.ConsultationContent }}
          </div>
        </article>
    <div class="has-text-centered">
      <span class="m-6"><router-link  class="button is-primary" to="third">前に戻る</router-link></span>
      <span class="m-6"><router-link  class="button is-primary" to="">次へ進む</router-link></span>
    </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Fourth'
}
</script>
<style>
</style>
