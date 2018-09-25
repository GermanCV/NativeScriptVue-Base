<template>
  <FlexboxLayout flexWrap="wrap" flexDirection="row" justifyContent="flex-start">
    <Button class="btn" width="50%" height="50" :backgroundColor="theme.active.ACCENT" :color="theme.active.TEXT" @tap="save">SQlite</Button>
    <Button class="btn" width="50%" height="50" :backgroundColor="theme.active.ACCENT" :color="theme.active.TEXT" @tap="save">SQlite</Button>
    <Button class="btn" width="50%" height="50" :backgroundColor="theme.active.ACCENT" :color="theme.active.TEXT" @tap="save1">Counter</Button>
  
  </FlexboxLayout>
</template>

<script>
import { mapState } from 'vuex';
import HelloWorld from '../../pages/HelloWorld';
import Counter from '../../pages/Counter';

export default {
  data: () => ({}),
  mounted() {},
  methods: {
    save() {
      this.$navigateTo(HelloWorld);
    },
    save1() {
      this.$navigateTo(Counter);
    },
  },
  computed: {
    ...mapState(['theme']),
  },
};
</script>

<style scoped>
</style>