export const loadLocalStorage = (key) => {
  try {
    const serialState = localStorage.getItem(key);
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveLocalStorage = (key, value) => {
  try {
    const serialState = JSON.stringify(value);
    localStorage.setItem(key, serialState);
  } catch (err) {
    console.log(err);
  }
};
