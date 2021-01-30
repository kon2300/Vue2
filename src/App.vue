<template>
  <div class="app">
    <div id="nav">
      <div class="columns is-vcentered has-background-grey-light mb-5">
        <router-link class="column is-size-3 is-10 p-4" to="/">Sample</router-link>
        <div class="column is-size-7">新規登録</div>
        <div class="column is-size-7">ログイン</div>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
  </div>
</template>
<script>
export default {

}
</script>
