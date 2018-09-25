<template>
  <Page class="page">
    <StatusBar ios:barStyle="light" :barColor="theme.active.DARK" />
    <action-bar title="Información" flat="true" />
    <GridLayout columns="*" rows="*, 55">
      <StackLayout row="0">
        <TabView :selectedIndex="selectedIndex" androidTabsPosition="top" :androidSelectedTabHighlightColor="theme.active.ACCENT" :selectedTabTextColor="theme.active.TEXT" :tabTextColor="theme.active.DIVIDER" top="0" @tabChange="changeTab" :tabBackgroundColor="theme.active.PRIMARY">
          <TabViewItem title="Proyecto" :borderBottomColor="theme.active.ACCENT">
            <ScrollView orientation="vertical">
              <TabProyecto/>
            </ScrollView>
          </TabViewItem>
          <TabViewItem title="Kaminos del Incarry">
            <ScrollView orientation="vertical">
              <TabInkarry/>
            </ScrollView>
          </TabViewItem>
        </TabView>
      </StackLayout>
      <StackLayout row="1">
        <segmented-bar :selectedIndex="0"/>
      </StackLayout>
    </GridLayout>
  
  </Page>
</template>

<script>
import TabProyecto from '../components/tabs/Proyecto';
import TabInkarry from '../components/tabs/Inkarry';
import { mapState } from 'vuex';
export default {
  components: {
    TabInkarry,
    TabProyecto,
  },
  data: () => ({
    title: 'Informacion',
    index: 0,
    selectedIndex: 0,
  }),
  mounted() {},
  methods: {
    changeTab() {},
    select() {
      if (this.index === 0) {
        //this.$router.push('/home');
      } else if (this.index === 1) {
        //this.$router.push('/encuesta');
      }
    },
  },
  computed: {
    ...mapState(['segmented', 'theme']),
  },
};
</script>

<style lang="scss">
</style>
