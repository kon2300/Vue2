<template>
  <div id="third">
    <div class="columns is-centered is-variable is-5">
      <div class="column is-half">
        <article class="message">
          <div class="column message-header p-0"><span class="tag is-info m-0 p-1">STEP 3</span><p class="is-size-5 has-text-centered pb-3">ご相談内容をご記入ください</p></div>
          <transition name="bounce" appear>
            <div class="column pb-0"><p class="has-text-info">-ご相談内容-</p></div>
          </transition>
          <div class="colmun has-text-centered p-4"><textarea class="textarea is-large is-info"></textarea></div>
        </article>
      </div>
    </div>
    <div class="has-text-centered">
      <span class="m-6"><router-link  class="button is-primary" to="second">前に戻る</router-link></span>
      <span class="m-6"><router-link  class="button is-primary" to="">次へ進む</router-link></span>
    </div>
  </div>
</template>
<script>
export default {
  neme: 'Third'
}
</script>
