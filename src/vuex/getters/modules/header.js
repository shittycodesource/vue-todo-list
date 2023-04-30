import router from '../../../router';

export default {
    getHeaderTitle() {
        console.log(router)
        return 'Home' + ' / ' + router.currentRoute.name;
    }
}