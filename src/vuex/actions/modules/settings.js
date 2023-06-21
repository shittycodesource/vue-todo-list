export default {
	changeColorTheme({commit}, name) {
        
        if (name == 'Dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme', 'dark');
        }

        localStorage.setItem('theme_color', name);
        commit('CHANGE_COLOR_THEME', name);
    },
    applyColorTheme({dispatch, getters}) {
        const theme = getters.getColorThemeFromLocalStorage;
        console.log(theme)

        if (theme) {
            dispatch('changeColorTheme', theme);
        }
    },
    
    changeLocale({commit}, name) {
    	localStorage.setItem('locale', name);
    	commit('CHANGE_LOCALE', name);
    },
    applyLocale({commit, getters}) {
        const locale = getters.getLocaleFromLocalStorage;
        console.log(locale)

        if (locale) {
            commit('CHANGE_LOCALE', locale);
        }
    },
}