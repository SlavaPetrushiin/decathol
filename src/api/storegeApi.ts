

const KEYS = {
    isViewSidebar: 'isViewSidebar',
    isAuth: 'isAuth',
    Report: 'report'
}

const storageApi = {
    KEYS,

    getStorage(key: keyof typeof KEYS) {
        let storage = localStorage.getItem(key) || '';
        return JSON.parse(storage);
    },

    setStorage(key: string, value: any) {
        localStorage.setItem(key, JSON.stringify(value));
    },

    removeStorage(key: string) {

    }
};

export default storageApi;