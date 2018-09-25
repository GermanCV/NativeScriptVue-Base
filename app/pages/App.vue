<template>
  <Page>
    <StatusBar ios:barStyle="light" :barColor="theme.active.DARK" />
    <ActionBar title="Welcome to NativeScript-Vue!" />
    <GridLayout colums="*" rows="*">
      <Label class="message" :text="msg" col="0" row="0" />
    </GridLayout>
  </Page>
</template>

<script>
import { mapState } from 'vuex';

export default {
  data() {
    return {
      msg: 'Hello World!, updating',
    };
  },
  computed: {
    ...mapState(['segmented', 'theme']),
  },
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
