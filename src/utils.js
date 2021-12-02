import { useState, useEffect } from 'react';

function useStorageState(defaultValue, key, storageType) {
  const [value, setValue] = useState(() => {
    const stickyValue = storageType.getItem(key);
    return stickyValue !== null
      ? JSON.parse(stickyValue)
      : defaultValue;
  });
  useEffect(() => {
    storageType.setItem(key, JSON.stringify(value));
  }, [key, value]);
  return [value, setValue];
}

export function useLocalStorageState(defaultValue, key) {
  return useStorageState(defaultValue, key, window.localStorage);
}

export function useSessionStorageState(defaultValue, key) {
  return useStorageState(defaultValue, key, window.sessionStorage);
}