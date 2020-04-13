<template>
  <div v-if="pagination" class="pagination">
    <span class="prev" :class="{disabled: !pagination.hasPrev}" @click="handlePrev">{{ pagination.prevText }}</span>
    <!--<span :class="{active: pagination.paginationIndex === index}"-->
          <!--v-for="(page, index) in pagination._paginationPages"-->
          <!--@click="handlePageChange(page, index)">-->
      <!--{{index + 1}}-->
    <!--</span>-->
    <span class="next" :class="{disabled: !pagination.hasNext}" @click="handleNext">{{ pagination.nextText }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    pagination() {
      return this.$pagination;
    },
  },
  methods: {
    handlePageChange(page, index) {
      if (this.pagination.paginationIndex === index) return;
      this.$router.push({ path: page.path });
    },
    handlePrev() {
      const page = this.pagination;
      if (this.pagination.hasPrev) {
        this.$router.push({ path: page.prevLink });
      }
    },
    handleNext() {
      const page = this.pagination;
      if (this.pagination.hasNext) {
        this.$router.push({ path: page.nextLink });
      }
    },
  },
};
</script>

<style lang="stylus">
.pagination
  display flex
  justify-content center
  align-items center
  span
    display inline-block
    margin 20px 10px 20px 0
    color $textLightColor
    overflow hidden
    background #FFF
    padding 2px 10px
    border 1px solid #eee
    border-radius 2px
    transition all 0.3s
    font-size 14px
    cursor pointer
    &.prev, &.next {
      border 1px solid #ddd
    }

    &:hover
      color $accentColor
      border 1px solid $accentColor

    &.active {
      border 1px solid $accentColor
      color $accentColor
    }
    &.disabled {
      color #ccc
      cursor not-allowed
    }

// border 1px solid $accentColor
// background-color $accentColor
</style>
