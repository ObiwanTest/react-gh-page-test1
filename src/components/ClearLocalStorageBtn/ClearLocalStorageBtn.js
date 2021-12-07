import { Button } from "carbon-components-react";

const clearLocalStorageHandler = () => {
    localStorage.removeItem("demoAppToken");
}

const ClearLocalStorageBtn = () => {
    return (
        <Button onClick={clearLocalStorageHandler}>Clear Local Storage</Button>
    );
}
export default ClearLocalStorageBtn;