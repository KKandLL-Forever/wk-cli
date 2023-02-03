export const storagePrefix = 'tm_react_';

const storage = {
  getItem: (key: string) => {
    if (key === 'token') {
      return JSON.parse(window.sessionStorage.getItem(`${ storagePrefix }token`) as string);
    } else {
      return JSON.parse(window.sessionStorage.getItem(key) as string)
    }
  },
  setItem: (key: string,data:string) => {
    if (key === 'token') {
      window.sessionStorage.setItem(`${ storagePrefix }token`, JSON.stringify(data));
    }else {
      window.sessionStorage.setItem(key, JSON.stringify(data));
    }
  },
  clearToken: () => {
    window.sessionStorage.removeItem(`${ storagePrefix }token`);
  },
};

export default storage;
