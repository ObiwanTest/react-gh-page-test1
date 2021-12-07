import { useState } from "react";

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem('demoAppToken');
    console.log("tokenString: " + tokenString);

    return tokenString;
  };

  const [token, setToken] = useState(getToken());

  const saveToken = ( userToken ) => {
    localStorage.setItem('demoAppToken', userToken);

    setToken(userToken);
  };

  return { token, setToken: saveToken }
}