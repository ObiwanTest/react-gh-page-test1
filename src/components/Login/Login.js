import { useState } from 'react';
import { Form, TextInput, Button } from 'carbon-components-react';
import { PropTypes } from 'prop-types';

async function loginUser(credentials) {
    var jsonStr = JSON.stringify(credentials);
    return jsonStr;
}

const Login = ({ setToken }) => {
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();

    const submitHandler = async e => {
        e.preventDefault();
        const token = await loginUser({username, password});
        console.log("Login.js => submitHandler => token: " + token);
        setToken(token);
    }

    return (
        <>
            <h2>Login</h2>
            <br />
            <Form onSubmit={submitHandler}>
                <TextInput
                    id="login-username"
                    labelText="Username"
                    placeholder="Username"
                    required
                    onChange={e => setUsername(e.target.value)}
                />
                <br />
                <TextInput
                    id="login-password"
                    labelText="Password"
                    placeholder="password"
                    type="password"
                    required
                    onChange={e => setPassword(e.target.value)}
                />
                <br />
                <Button className="clickableBtn" type="submit">Login</Button>
            </Form>
        </>
    );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
}

export default Login;