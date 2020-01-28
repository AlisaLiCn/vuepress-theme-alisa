<template>
  <footer class="footer">
    <ul>
      <li class="footer-item">
        {{ period }} By {{ $themeConfig.footer.author }}
      </li>
      <li class="footer-item">
        Driven - <NavLink link="https://vuepress.org"> &nbsp;Vuepress&nbsp; </NavLink> | Theme - Alisa
      </li>

    </ul>
  </footer>
</template>

<script>

export default {
  data() {
    return {
      dateNow: new Date().getFullYear(),
      footerList: [],
    }
  },
  computed: {
    period() {
      if (!this.$themeConfig) return ''
      const nowDate = new Date().getFullYear()
      return `@${this.$themeConfig.footer.since} - ${nowDate}`
    },
  },
  created() {
  },

  methods: {},
}
</script>

<style lang="stylus" scoped>
ol, ul
  list-style none
  margin 0
  padding 0

.footer
  display flex
  flex-direction column
  justify-content center
  align-items center
  height 60px
  box-sizing border-box
  background-color #2c3e50
  padding 50px 32px

  .footer-item
    display flex
    justify-content center
    align-items center
    padding 5px 10px
    line-height 12px
    font-size 14px
    color rgba(255, 255, 255, 0.75)
    transition color 0.3s

    &:last-child
      border-right none

    a
      font-size 14px
      color rgba(255, 255, 255, 0.75)
      text-decoration none
      transition color 0.3s

      &:hover
        color #fff

@media (max-width: $MQMobile)
  .footer
    .footer-item
      line-height 1
      border-right none
      text-align center
</style>
