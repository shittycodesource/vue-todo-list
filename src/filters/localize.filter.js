import store from '@/vuex';
import ru from '@/locales/ru.json';
import en from '@/locales/en.json';

const locales = {
    'En': en,
    'Ru': ru,
}

export default function localizeFilter(key, error = true) {
	const errorMessage = error ? `[Localize error]: key ${key} not found` : key;
    const locale = store.getters.getLocale || 'En';
    return locales[locale][key] || errorMessage;
}