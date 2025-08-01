import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks";

/**
 * - If the route is private and the user is logged in, render the component
 * - Otherwise render <Navigate> to redirectTo
 */

export const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};

// export const PrivateRoute = ({ children }) => {
//   const { isLoggedIn, isRefreshing } = useAuth();
//   if (isRefreshing) return <Spinner />;
//   return isLoggedIn ? children : <Navigate to="/login" />;
// };
