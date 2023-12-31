const save = (key, value) => {
  try {
    const serializedData = JSON.stringify(value);
    localStorage.setItem(key, serializedData);
  } catch (err) {
    console.error(err);
  }
};

const load = key => {
  try {
    const serializedData = localStorage.getItem(key);
    return serializedData === null ? undefined : JSON.parse(serializedData);
  } catch (err) {
    console.error(err);
  }
};

const remove = key => {
  try {
    localStorage.removeItem(key);
  } catch (err) {
    console.error(err);
  }
};

const clear = () => {
  localStorage.clear();
};

export { save, load, remove, clear };
