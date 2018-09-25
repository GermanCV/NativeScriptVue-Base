.<template>
  <ActionBar fontWeight="bold" :title="title" fontSize="24" :color="theme.active.TEXT" :backgroundColor="theme.active.PRIMARY" :flat="flat">
    <NavigationButton text="Go back" v-show="navigation" icon="res://ic_back" @tap="$navigateBack" />
  
    <!-- <StackLayout>
          <Label fontWeight="bold" :text="title" fontSize="24" :color="theme.active.TEXT" alignSelf="left" />
        </StackLayout> -->
    <ActionItem @tap="login" v-show="user" icon="res://account_circle" />
    <ActionItem v-for="(item, index) in Object.keys(theme.themes)" android.position="popup" :text="item.toUpperCase()" :key="index" @tap="CHANGE_THEME(item)" />
  </ActionBar>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import Login from '../pages/Login';
import Perfil from '../pages/Perfil';
export default {
  props: {
    title: {
      type: String,
      default: 'Titulo',
    },
    flat: {
      type: Boolean,
      default: false,
    },
    navigation: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Boolean,
      default: true,
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
        // this.$router.push('/perfil');
        this.$navigateTo(Perfil);
      } else {
        // this.$router.push('/login');
        this.$navigateTo(Login);
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