export const loadSessionStorage = (key) => {
  try {
    const serialState = sessionStorage.getItem(key);
    if (serialState === null) {
      return undefined;
    }
    return JSON.parse(serialState);
  } catch (err) {
    return undefined;
  }
};

export const saveSessionStorage = (key, value) => {
  try {
    const serialState = JSON.stringify(value);
    sessionStorage.setItem(key, serialState);
  } catch (err) {
    console.log(err);
  }
};
