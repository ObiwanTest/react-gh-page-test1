import { PropTypes } from 'prop-types';

const Dashboard = ({ token }) => {
    return (
        <>
            <h2>Dashboard</h2>

            <dl>
                <dt>Token</dt>
                <dd>{token}</dd>

                <dt>Username</dt>
                <dd>{JSON.parse(token)["username"]}</dd>

                <dt>Password</dt>
                <dd>{JSON.parse(token)["password"]}</dd>
            </dl>
        </>
    );
}

Dashboard.propTypes = {
    token: PropTypes.string.isRequired
}

export default Dashboard;