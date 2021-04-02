<template>
  <header id="header">
    <div class="header-wrapper">
      <div class="title">
        <NavLink link="/" class="home-link">{{ $site.title }}</NavLink>
      </div>
      <div class="header-right-wrap">
        <ul v-if="$themeConfig.nav" class="nav">
          <li
                  v-for="item in $themeConfig.nav"
                  :key="item.text"
                  class="nav-item"
          >
            <NavLink :link="item.link">{{ item.text }}</NavLink>
          </li>
        </ul>
        <SearchBox/>
      </div>
    </div>
  </header>
</template>

<script>
import SearchBox from '@SearchBox'

export default {
  components: { SearchBox },
}
</script>

<style lang="stylus">
@import '~@app/style/config'

#header
  position relative
  height $headerHeight
  line-height $headerHeight
  background-color #FFF
  // box-shadow 0 2px 6px 0 rgba(0, 64, 128, .05)
  border-bottom #f0f0f0
  z-index 12

  ol, ul
    list-style none
    margin 0
    padding 0

.header-wrapper
  display flex
  align-items center
  width 1200px
  margin 0 auto

  .title
    /*flex 0 0 200px */
    font-size 20px
    margin 0
    letter-spacing 2px
    display block

    a
      color $accentColor
      text-decoration none

  .header-right-wrap
    flex 1
    display flex
    justify-content flex-end

    .nav
      flex 0 0 auto
      display flex
      margin 0
      align-items center

      .nav-item
        margin-left 20px

        a
          font-size 16px
          color #555
          text-decoration none
          transition color 0.3s
          &:hover
            color $accentColor

    .search-box
      margin-left 20px
      margin-right 0

      input
        border-radius 5px
        transition all 0.5s
        border 1px solid #cecece

        &:hover
          border 1px solid $accentColor
          box-shadow 0 0 2px $accentColor

      .suggestions
        border 1px solid #333
        top 40px
        right 0

        a
          color #333
          text-decoration none

          &.focused
            color $accentColor

@media (max-width: $MQMobile)
  #header
    display none

  .header-wrapper
    flex-direction column

    .header-right-wrap
      display none
</style>
