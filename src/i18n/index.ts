import spanish from './es.json'
import english from './en.json'
import basque from './eus.json'

const LANGUAGES = {
  ENGLISH: 'en',
  SPANISH: 'es',
  BASQUE: 'eus'
}

export const getI18N = ({ currentLocale = 'es' }: { currentLocale: string | undefined; }) => {
  if (currentLocale === LANGUAGES.SPANISH) return spanish
  if (currentLocale === LANGUAGES.ENGLISH) return english
  if (currentLocale === LANGUAGES.BASQUE) return basque
  return spanish
}