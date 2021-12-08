import { Form, Button } from 'carbon-components-react';
import { PropTypes } from 'prop-types';

const LogoutBtn = ({ token, setToken }) => {
    async function logoutUser() {
        setToken('');
    }

    const submitHandler = async e => {
        e.preventDefault();
        logoutUser();
        console.log("LogoutBtn => submitHandler => token: " + token);
    }

    return (
        <>
            <Form onSubmit={submitHandler}>
                <Button className="clickableBtn" type="submit">Logout</Button>
            </Form>
        </>
    );
}

LogoutBtn.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default LogoutBtn;