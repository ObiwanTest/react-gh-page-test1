import { useState } from 'react';
import Cookies from 'js-cookie';
import { TOKEN } from '../constants.js';

const useCookie = true;

export default function useToken() {
  Cookies.set("samesite", "None");
  Cookies.set("secure", true);

  const getToken = () => {
    const tokenString = (useCookie ? Cookies.get(TOKEN) : localStorage.getItem(TOKEN));
    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = ( userToken ) => {
    // For "persistence".
    useCookie ? 
      Cookies.set(TOKEN, userToken) : 
      localStorage.setItem(TOKEN, userToken);
    
    // For React app.
    setToken(userToken);
  };

  return { token, setToken: saveToken }
}