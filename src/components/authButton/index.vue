<template>
  <div class="auth-button" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    autoCall: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick () {
      if (this.$store.state.user.userInfo) {
        this.$emit('onLogin')
      } else {
        this.$store.dispatch('user/showLoginPop')
      }
    }
  }
}
</script>
