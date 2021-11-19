import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute({ component: Component, loggedIn, ...restOfProps }) {

    return (
    <React.Fragment>
        <Route
            {...restOfProps}
            render={(props) =>
            localStorage.getItem('isLoggedIn') === 'false' ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    </React.Fragment>
    );
}

export default ProtectedRoute;