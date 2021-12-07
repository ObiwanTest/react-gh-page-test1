import { PropTypes } from 'prop-types';
import Cookies from 'js-cookie';

const Dashboard = ({ token }) => {
    return (
        <>
            <h2>Dashboard</h2>
            <br />

            <h3>Token Info</h3>
            <dl>
                <dt>Token</dt>
                <dd>{token}</dd>

                <dt>Username</dt>
                <dd>{JSON.parse(token)["username"]}</dd>

                <dt>Password</dt>
                <dd>{JSON.parse(token)["password"]}</dd>
            </dl>
            <br />

            <h3>Cookie Info</h3>
            <pre>{JSON.stringify(Cookies.get(), null, 4)}</pre>
            <br />

            <h3>LocalStorage Info</h3>
            <pre>{JSON.stringify(localStorage, null, 4)}</pre>
        </>
    );
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired
}

export default Dashboard;