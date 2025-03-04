import en from '../locale/en.json'
import zhHans from '../locale/zh-Hans.json'
import zhHant from '../locale/zh-Hant.json'
import jp from '../locale/jp.json'
import {createI18n} from 'vue-i18n'

const messages = {
	jp,
	en,
	'zh-Hans': zhHans,  //简体
	'zh-Hant': zhHant   //繁体
}
let i18nConfig = {
	locale: uni.getLocale(), // 获取已设置的语言
	messages
}
const i18n = createI18n(i18nConfig)

export default i18n;