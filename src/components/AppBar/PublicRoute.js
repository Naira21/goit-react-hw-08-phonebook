// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';

// export default function PublicRoute({children, restricted=false, redirectTo='/', ...routeProps }) {
//     const isLoggedIn = useSelector(getIsLoggedIn);
//     const shouldRedirected = isLoggedIn && restricted;
//     return <Route {...routeProps}>{shouldRedirected ? children : <Navigate to='/contacts'/>}</Route>

// }


export default function PublicRoute({isAuth, component: Component}) {

    return (
        <>         
            {/* <Component /> */}
            {isAuth ?  <Navigate to='/'/> : <Component /> }
        </>
    );
}