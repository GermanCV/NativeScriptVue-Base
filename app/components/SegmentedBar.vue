<template>
  <SegmentedBar dock="right" :selectedIndex="selectedIndex" @selectedIndexChange="select" :backgroundColor="theme.active.PRIMARY" :selectedBackgroundColor="theme.active.ACCENT" :color="theme.active.TEXT" borderWidth="0" isCollapsed="true">
    <SegmentedBarItem v-for="(i, key) in items" :key="key" :title="i.title" />
  </SegmentedBar>
</template>

<script>
import { mapState } from 'vuex';
import Encuesta from '../pages/Encuesta';
import Home from '../pages/Home';
export default {
  props: ['selectedIndex'],
  data: () => ({
    index: 0,
    items: [
      {
        title: 'Informacion'
      },
      {
        title: 'Encuestas'
      }
    ]
  }),
  methods: {
    select() {
      console.log(this.index);
      if (this.selectedIndex === 0) {
        //this.$router.push('/encuesta');
        this.$navigateTo(Encuesta);
      } else if (this.selectedIndex === 1) {
        //this.$router.push('/home');
        this.$navigateTo(Home);
      }
    }
  },
  computed: {
    ...mapState(['segmented', 'theme'])
  }
};
</script>

<style scoped>
</style>