.<template>
  <ActionBar fontWeight="bold" :title="title" fontSize="24" :color="color" :backgroundColor="background" :flat="flat">
    <NavigationButton text="Go back" v-show="navigation" :icon="'res://back_'+theme.active.NAME" @tap="$navigateBack" />
    <ActionItem @tap="login" v-show="user" icon="res://account_circle" />
    <ActionItem v-for="(item, index) in Object.keys(theme.themes)" android.position="popup" :text="item.toUpperCase()" :key="index" @tap="CHANGE_THEME(item)" />
  </ActionBar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    color: {
      type: String,
      default: 'red',
    },
    background: {
      type: String,
      default: '#eee',
    },
    flat: {
      type: Boolean,
      default: true,
    },
    navigation: {
      type: Boolean,
      default: true,
    },
    user: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({}),
  created() {
    console.log(this.theme);
  },
  methods: {
    login() {
      console.log(this.component);
      if (this.component.status) {
        this.$router.push('/perfil');
      } else {
        this.$router.push('/login');
      }
    },
    ...mapMutations(['CHANGE_THEME']),
  },
  computed: {
    ...mapState(['theme', 'component']),
  },
};
</script>

<style scoped>
</style>