<template>
  <Page>    
    <ActionBar title="Sqlite" :user="false" :navigation="true" />

    <ScrollView scrollBarIndicatorVisible="false" row="0" col="0">
      <StackLayout width="100%">
        <FlexboxLayout flexDirection="column" width="100%" justifyContent="space-around" alignItems="space-around">
          <TextField v-model="items.value1" />
          <TextField v-model="items.value2" />
          <Button @tap="SAVE(items)" text="Agregar" class="btn btn-primary" />
          <Button @tap="DELETE" text="Eliminar todo" class="btn btn-primary" />
          <FlexboxLayout flexDirection="column" width="100%" height="40" justifyContent="flex-end" alignItems="center">
            <label text="LISTA" color="#00BCD4" fontWeight="bold" />
          </FlexboxLayout>
        </FlexboxLayout>
        <ListView for="(item,index) in list" :height="21.5*list.length">
          <v-template>
            <FlexboxLayout flexDirection="column" class="list-group-item">
              <FlexboxLayout flexDirection="column" width="100%" alignItems="flex-start" justifyContent="flex-start">
                <Label :text="index+1 +' -- '+item[0] +' - '+item[1]" textWrap="false" fontSize="15" color="#8BC34A" />
              </FlexboxLayout>
            </FlexboxLayout>
          </v-template>
        </ListView>
      </StackLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import ActionBar from '../components/ActionBar';

export default {
  components: {
    ActionBar,
  },
  data: () => ({
    items: {
      value1: 'value 1',
      value2: 'value 1',
    },
  }),
  methods: {
    ...mapActions(['SAVE', 'DELETE']),
  },
  created() {
    this.$store.dispatch('ALL_ITEMS');
  },
  computed: {
    ...mapState({
      list: state => {
        return state.sqlite.list;
      },
    }),
  },
};
</script>

<style scoped>
</style>