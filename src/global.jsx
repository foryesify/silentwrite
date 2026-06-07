import { signal } from '@preact/signals'
import i18n from '@/assets/i18n.json'

export const lang = signal('en-US')
export const title = signal(i18n[lang.value]['title-homeview'])
