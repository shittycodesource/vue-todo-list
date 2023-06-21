export default {
	getColorTheme: (state) => state.colorTheme,
    getColorThemeFromLocalStorage: () => localStorage.getItem('theme_color'),
    getLocale: (state) => state.locale,
    getLocaleFromLocalStorage: () => localStorage.getItem('locale'),
}