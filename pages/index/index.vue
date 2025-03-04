<template>
	<view class="content">
		<div class="langbar">
			<span>日本語</span>
			<span @click="changeLang('zh-Hant')">繁體中文</span>
			<span>简体中文</span>
			<span @click="changeLang('en')">English</span>
		</div>
		<img class="logo" src="/static/logo.png"></img>
		<view class="text-area">
			<text class="title">{{ $t("waku.greet") }}</text>
		</view>

	</view>
</template>


<script>
	export default {
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {
			changeLang(lang){
				this.$i18n.locale = lang;
			}
		}
	}
</script>

<style scoped>@import url('/css/index.css');</style>
