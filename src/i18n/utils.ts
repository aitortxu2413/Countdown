import { LANGUAGES } from '@/constants/i18n-languages'

export const getLang = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
  if (currentLocale === LANGUAGES.SPANISH) return LANGUAGES.SPANISH
  if (currentLocale === LANGUAGES.ENGLISH) return LANGUAGES.ENGLISH
  if (currentLocale === LANGUAGES.BASQUE) return LANGUAGES.BASQUE
  return LANGUAGES.SPANISH
}