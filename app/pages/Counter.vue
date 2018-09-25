<template>
	<Page class="page">
		<ActionBar title="My App">
			<ActionItem @tap="onTapSave"  ios.systemIcon="3" ios.position="right" android.systemIcon="ic_menu_save" />
			<ActionItem @tap="onTapCancel" ios.systemIcon="1" android.systemIcon="ic_menu_close_clear_cancel" />
		</ActionBar>
		<scroll-view>
			<stack-layout>
				<CardView ripple="true" margin="5" id="batCard" class="whiteCard">
					<grid-layout rows="200, auto, auto" columns="*, *">
						<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" margin="10" colSpan="2" row="0" />
						<label text="Batman wants to be friends?" class="info" textWrap="true" row="1" colSpan="2" />
						<button text="Decline" class="blue" row="2" col="0" />
						<button text="Accept" class="blue" row="2" col="1" />
					</grid-layout>
				</CardView>
				<grid-layout rows="*, *" columns="*">
					<CardView class="blueCard" margin="10" col="0" elevation="20">
						<grid-layout rows="auto, auto" columns="*, *, *">
							<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" colSpan="3" row="0" />
							<button text="btn" class="btn btn-primary" row="1" col="0" />
							<button text="btn" class="btn btn-primary" row="1" col="1" />
							<button text="btn" class="btn btn-primary" row="1" col="2" />
						</grid-layout>
					</CardView>
					<CardView backgroundColor="purple" radius="30" margin="10" col="1" elevation="20">
						<grid-layout rows="auto, auto" columns="*, *, *">
							<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" colSpan="3" row="0" />
							<button text="btn" class="btn btn-primary" row="1" col="0" />
							<button text="btn" class="btn btn-primary" row="1" col="1" />
							<button text="btn" class="btn btn-primary" row="1" col="2" />
						</grid-layout>
					</CardView>
				</grid-layout>
				<CardView margin="10" class="whiteCard">
					<grid-layout rows="auto" columns="*" padding="5">
						<label text="The following display options:" class="info" textWrap="true" row="0" col="0" />
					</grid-layout>
				</CardView>
				<CardView margin="10" id="jokerCard" class="jokerCard" elevation="50" shadowColor="#FE00FC" shadowOpacity="1">
					<grid-layout rows="200, auto, auto" columns="auto, auto, *">
						<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" colSpan="3" row="0" />
						<label text="Joker wants to talk?" class="info" textWrap="true" row="1" colSpan="3" />
						<button text="DECLINE" class="clear-btn blue" row="2" col="0" />
						<button text="ACCEPT" class="clear-btn blue" row="2" col="1" />
					</grid-layout>
				</CardView>
				<grid-layout rows="*" columns="*, *">
					<CardView col="0" margin="10" radius="20" class="whiteCard">
						<grid-layout rows="auto, auto" columns="auto" padding="8">
							<label text="Budget" textWrap="true" class="size16" row="0" />
							<label text="123.4M" textWrap="true" class="title" row="1" />
						</grid-layout>
					</CardView>
					<CardView col="1" margin="10" elevation="25" class="whiteCard">
						<grid-layout rows="auto, auto" columns="auto">
							<label text="Sales" textWrap="true" class="size16" row="0" />
							<label text="345.8M" textWrap="true" class="title" row="1" />
						</grid-layout>
					</CardView>
				</grid-layout>
				<CardView margin="5" id="facebookCard" radius="30" elevation="15" class="whiteCard">
					<grid-layout rows="auto, auto, 250, auto" columns="60, auto, *">
						<label text="B" class="avatar-circle" row="0" col="0" />
						<label text="Brad Martin" textWrap="true" margin="10" class="size16 align-center" row="0" col="1" />
						<label text="I like long walks on the beach and candlelit dinners..." textWrap="true" margin="10" class="size16" row="1" colSpan="3" />
						<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" row="2" colSpan="3" />
						<grid-layout row="3" colSpan="3" rows="auto" columns="auto, auto, auto">
							<button text="btn" class="btn btn-primary" col="0" />
							<button text="btn" class="btn btn-primary" col="1" />
							<button text="btn" class="btn btn-primary" col="2" />
						</grid-layout>
					</grid-layout>
				</CardView>
				<CardView margin="10" radius="10" elevation="15" shadowOffsetWidth="10" shadowOffsetHeight="10" class="whiteCard">
					<grid-layout rows="auto, auto, 250, auto" columns="60, auto, *">
						<label text="N" class="avatar-circle" row="0" col="0" />
						<label text="Nathanael Anderson" textWrap="true" margin="10" class="size16 align-center" row="0" col="1" />
						<label text="If you know what load &#8220;*&#8221;,8,1 is; you might have a clue as to how long I've been programming." textWrap="true" margin="10" class="size16" row="1" colSpan="3" />
						<image src="~/images/NativeScript-Vue.png" stretch="aspectFill" row="2" colSpan="3" />
						<grid-layout row="3" colSpan="3" rows="auto" columns="auto, auto, auto">
							<button text="btn" class="btn btn-primary" col="0" />
							<button text="btn" class="btn btn-primary" col="1" />
							<button text="btn" class="btn btn-primary" col="2" />
						</grid-layout>
					</grid-layout>
				</CardView>
			</stack-layout>
		</scroll-view>
	</Page>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  computed: {
    message() {
      return this.$store.state.counter.count.toString();
    },
    surprise() {
      return this.$store.state.counter.count >= 5;
    }
  },
  methods: mapActions(['decrement', 'increment', 'login'])
};
</script>
