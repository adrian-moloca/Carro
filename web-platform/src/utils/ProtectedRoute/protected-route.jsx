import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';

function ProtectedRoute({ component: Component, loggedIn, ...restOfProps }) {

    const isLoggedIn = useSelector((state: RootStateOrAny) => String(state.userData.email).length > 0 ? true : false);

    return (
    <React.Fragment>
        <Route
            {...restOfProps}
            render={(props) =>
                isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
            }
        />
    </React.Fragment>
    );
}

export default ProtectedRoute;