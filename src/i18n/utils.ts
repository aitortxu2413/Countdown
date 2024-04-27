const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es'
}

export const getLang = ({ currentLocale = 'es' }: { currentLocale: string | undefined }) => {
  if (currentLocale === LANGUAGES.SPANISH) return LANGUAGES.SPANISH
  if (currentLocale === LANGUAGES.ENGLISH) return LANGUAGES.ENGLISH
  return LANGUAGES.SPANISH
}