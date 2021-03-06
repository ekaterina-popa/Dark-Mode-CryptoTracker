import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (newValue) => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };
  return [storedValue, setValue];
};
export default useLocalStorage;
