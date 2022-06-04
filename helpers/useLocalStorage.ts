
import {
  useState,
} from "react";
import { User } from "../models/user";


export function useLocalStorage(key: string, initialValue: User) {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const item = localStorage.getItem(key);

    if (item === null) {
      return initialValue;
    }

    return JSON.parse(item);
  });

  function setValue(newValue: User) {
    try {
      localStorage.setItem(key, JSON.stringify(newValue));
    } catch (error) {}
    setStoredValue({...newValue});
  }

  return [storedValue, setValue];
}
