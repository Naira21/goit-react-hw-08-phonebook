// import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
// import { getIsLoggedIn } from 'redux/auth/auth-selectors';


// export default function PrivateRoute({ children, redirectTo='/', ...routeProps }) {
//     const isLoggedIn = useSelector(getIsLoggedIn);
//     return <Route {...routeProps}>{
//         isLoggedIn ? children : <Navigate to={redirectTo} />
//     }</Route>
// }


export default function PrivateRoute({ isAuth, component: Component }) {
    return (
        <>
        {/* <Component />  */}
            {isAuth ? <Component /> : <Navigate to='/login' />} // циклит 
        </>
    )
    // const isLoggedIn = useSelector(getIsLoggedIn);
    // return (
    //     <>
    //         {isLoggedIn ? <Component />  : <Navigate to='/login' />}
    //     </>
    // );
}

