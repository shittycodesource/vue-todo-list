import { format } from 'date-fns';

export default function dateToHours(date) {
    return format(new Date(date), 'H:mm');
}