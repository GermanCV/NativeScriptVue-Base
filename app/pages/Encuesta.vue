<template>
  <Page class="page">
    <StatusBar ios:barStyle="light" :barColor="theme.active.DARK" />
    <action-bar title="Encuestas" :flat="true" />
    <GridLayout columns="*" rows="*, 55">
      <StackLayout row="0">
        <TabView :selectedIndex="selectedIndex" androidTabsPosition="top" :androidSelectedTabHighlightColor="theme.active.ACCENT" :selectedTabTextColor="theme.active.TEXT" :tabTextColor="theme.active.DIVIDER" top="0" @tabChange="changeTab" :tabBackgroundColor="theme.active.PRIMARY">
          <TabViewItem title="Reportes">
            <FlexboxLayout flexDirection="column">
              <CardView class="cardStyle" margin="10" elevation="5" radius="5">
                <grid-layout rows="auto, auto, auto" columns="auto, auto, *">
                  <label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="3" />
                  <button class="btn btn-primary" text="DECLINE" tap="goAway" row="2" col="1" />
                  <button class="btn btn-primary" text="ACCEPT" row="2" col="2" />
                </grid-layout>
              </CardView>
            </FlexboxLayout>
          </TabViewItem>
          <TabViewItem title="Encuestas">
            <FlexboxLayout flexDirection="column">
              <CardView ripple="true" margin="5">
                <grid-layout rows="200, auto, auto" columns="*, *">
                  <image src="~/assets/images/NativeScript-Vue.png" stretch="aspectFill" margin="10" colSpan="2" row="0" />
                  <label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="2" />
                  <button text="Decline" class="blue" row="2" col="0" />
                  <button text="Accept" class="blue" row="2" col="1" />
                </grid-layout>
              </CardView>
              <Fab tap="fabTap" row="1" hideAnimationDuration="15" swipeAnimation="scale" icon="res://account_box" :backgroundColor="theme.active.ACCENT" :rippleColor="theme.active.PRIMARY_TEXT" class="fab-button" />
            </FlexboxLayout>
          </TabViewItem>
        </TabView>
      </StackLayout>
      <StackLayout row="1">
        <segmented-bar :selectedIndex="1" />
      </StackLayout>
    </GridLayout>
  </Page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  components: {},
  data: () => ({
    title: 'Encuestas',
    index: 1,
    selectedIndex: 0,
  }),
  methods: {
    changeTab() {},
    select() {
      if (this.index === 0) {
        this.$router.push('/home');
      } else if (this.index === 1) {
        this.$router.push('/encuesta');
      }
    },
  },
  computed: {
    ...mapState(['segmented', 'theme']),
  },
};
</script>

<style scoped>
.fab-button {
  height: 60;
  width: 60;
}
</style>