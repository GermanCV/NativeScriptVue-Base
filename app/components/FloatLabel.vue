<template>
  <GridLayout rows="30, auto" marginBottom="5">
    <Label ref="label" row="1" :text="placeholder" opacity="0.4" fontSize="14" :color="theme.active.PRIMARY" />
    <TextField ref="textField" v-model="value" :secure="secure" row="1"  @focus="onFocus" @blur="onBlur" borderBottomWidth="1" :borderBottomColor="color" padding="0" :color="theme.active.SECONDARY_TEXT" focusColor="red" />
  </GridLayout>
</template>

<script>
import { mapState } from 'vuex';
const Color = require('tns-core-modules/color').Color;
export default {
  data: () => ({
    color: '#cec8c8'
  }),
  props: {
    placeholder: {
      type: String
    },
    secure: {
      type: String
    },
    value: {
      type: String
    }
  },
  computed: {
    ...mapState(['theme'])
  },
  watch: {
    value() {
      this.$emit('input', this.value);
    }
  },
  mounted() {
    if (this.value) {
      setTimeout(() => {
        this.onFocus();
      }, 10);
    }
  },
  methods: {
    onFocus() {
      // get our elments to maninpulate.
      this.color = this.theme.active.ACCENT;
      const label = this.$refs.label.nativeView;
      const textField = this.$refs.textField.nativeView;

      // animate the label sliding up and less transparent.
      label
        .animate({
          translate: {
            x: 0,
            y: -25
          },
          opacity: 1
        })
        .then(() => {}, () => {});
      console.log('askhdkjsahdkas');

      // set the border bottom color to green to indicate focus
      //textField.borderBottomColor = new Color('#00b47e');
    },
    onBlur() {
      const label = this.$refs.label.nativeView;
      const textField = this.$refs.textField.nativeView;

      // if there is text in our input then don't move the label back to it's initial position.
      if (!textField.text) {
        label
          .animate({
            translate: {
              x: 0,
              y: 0
            },
            opacity: 0.4
          })
          .then(() => {}, () => {});
      }
      // reset border bottom color.
      this.color = '#cec8c8';
      //textField.borderBottomColor = new Color('#cec8c8');
    }
  }
};
</script>

<style scoped>
</style>