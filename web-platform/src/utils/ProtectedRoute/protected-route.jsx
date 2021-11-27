import React, {useState, useEffect} from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RootStateOrAny, useSelector } from 'react-redux';
import { connect } from 'react-redux';

function ProtectedRoute({ component: Component, data, ...restOfProps }) {

    const [isLoggedIn, setIsLoggedIn] = useState(data.email.length > 0 ? true : false);

    useEffect(() => {
        setIsLoggedIn(data.email.length > 0 ? true : false);
    }, [data])
    
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

const mapStateToProps = state => ({data: state.userData})

export default connect(mapStateToProps, null)(ProtectedRoute);