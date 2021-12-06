import React, { useState } from 'react';
import { Button } from 'carbon-components-react';
import { useSessionStorageState } from '../../utils';

const LoginBtn = () => {
    const [isLogin, setIsLogin] = useSessionStorageState(false, "login");
    const [btnTxt, setBtnTxt] = useState(isLogin ? "Logout" : "Login");

    function btnClickHandler(e) {
        console.log("Prev isLogin? " + isLogin);
        setBtnTxt(!isLogin ? "Logout" : "Login");
        setIsLogin(!isLogin);
    }

    return (
        <div>
            {isLogin && <div>Currently logged in.</div>}
            <Button onClick={btnClickHandler}>{btnTxt}</Button>
        </div>
    );
};

export default LoginBtn;