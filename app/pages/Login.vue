<template>
  <Page class="page" actionBarHidden="false">
    <StatusBar ios:barStyle="light" :barColor="theme.themes.DARK" />
    <ActionBarTrans/>
    <ScrollView orientation="vertical">
  
      <FlexboxLayout flexDirection="column" class="login_content">
        <StackLayout>
          <Label text="CAMINOS DEL INCARRY" :color="theme.active.PRIMARY" class="label-login" />
          <Label text="Por favor ingrese sus credenciales" />
        </StackLayout>
        <StackLayout>
          <FloatLabel placeholder="Usuario" v-model="username" />
          <FloatLabel placeholder="Contraseña" secure="true" v-model="password" />
        </StackLayout>
        <Button ref="button" :backgroundColor="theme.active.PRIMARY" class="button" :color="theme.active.TEXT" @tap="login">INGRESAR</Button>
      </FlexboxLayout>
    </ScrollView>
  </Page>
</template>

<script>
import { mapState } from 'vuex';
import Home from '../pages/Home';
import ActionBarTrans from '../components/ActionBarTrans';
import FloatLabel from '../components/FloatLabel';

export default {
  components: {
    ActionBarTrans,
    FloatLabel,
  },
  data: () => ({
    title: 'Informacion',
    index: 0,
    username: '',
    password: '',
    selectedIndex: 0,
    barColor: '#00A7DC',
  }),
  mounted() {},
  methods: {
    login() {
      const label = this.$refs.button.nativeView;
      //label.rotate += 5;
      //label.translateY = -2;
      label.opacity = 0.7;
      label.fontSize = 17;
      label.isUserInteractionEnabled = true;
      label.isCollapsed = true;

      console.log(label.text.length);
      this.barColor = 'red';
      //label.isEnabled = false;
      setTimeout(() => {
        this.barColor = 'orange';
        label.opacity = 1;
        label.fontSize = 16;
        this.$store.commit('LOGIN');
        this.$navigateTo(Home);

        // this.$router.push('/home');
        //label.translateY = 0;
      }, 10);
    },
  },
  computed: {
    ...mapState(['segmented', 'theme']),
  },
};
</script>

<style lang="scss">
.button {
  border-radius: 50%;
  width: 60%;
}

.login_content {
  justify-content: space-around;
  align-items: center;
  padding: 30% 40% 50% 30%;
  background: #eeeeee;
  .label-login {
    font-weight: bold;
    font-size: 25px;
    text-transform: capitalize;
    font-family: Cambria, Cochin;
  }
}
</style>
