import { format } from 'date-fns';
import { ru, en } from 'date-fns/locale';
import store from '@/vuex';

const locales = {
	'En': en,
	'Ru': ru,
}

export default function dateFilter(date) {
    return format(new Date(date), 'd MMMM yyyy', {locale: locales[store.getters.getLocale] });
}