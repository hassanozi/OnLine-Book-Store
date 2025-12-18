import { createContext, useEffect, useState, type PropsWithChildren } from "react";
import { jwtDecode } from "jwt-decode";


export let AuthContext = createContext<any>(null);

export default function AuthContextProvider(props:PropsWithChildren) {

    const [loginData, setLoginData] = useState<any>(null);
    const saveLoginData = () => {
    let encodedToken = localStorage.getItem('accessToken');
    if (encodedToken) {
      const decodedToken = jwtDecode(encodedToken);
      setLoginData(decodedToken);
      console.log(decodedToken);
    }
    // setLoginData(decodedToken);
  }

  useEffect(() => {
    if (localStorage.getItem('accessToken')) {
      saveLoginData();
    }

    }, [])
    return <AuthContext.Provider value={{saveLoginData,loginData}}>
            {props.children}
        </AuthContext.Provider>
}