<template>
  <Page class="page">
    <action-bar title="Perfil" :flat="true" :navigation="true" :user="false" />
    <StackLayout stretchLastChild="false" backgroundColor="#3c495e">
      <Fab @tap="exit" row="1" hideAnimationDuration="15" swipeAnimation="scale" icon="res://exit_to_app" :backgroundColor="theme.active.ACCENT" :rippleColor="theme.active.PRIMARY_TEXT" class="fab-button" />
    </StackLayout>
  </Page>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Home from '../pages/Home';

export default {
  data: () => ({
    title: 'Informacion',
    index: 0,
    selectedIndex: 0
  }),
  mounted() {},
  methods: {
    exit() {
      this.$store.commit('EXIT');
      this.$navigateTo(Home);

      // this.$router.push('/home');
    }
  },
  computed: {
    ...mapState(['theme'])
  }
};
</script>

<style lang="scss">
.fab-button {
  height: 50;
  width: 50;
  horizontal-align: left;
  margin: 10;
}
</style>
