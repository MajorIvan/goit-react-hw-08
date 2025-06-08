import { lazy, Suspense, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useAuth } from "../../hooks";
import { refreshUser } from "../../redux/auth/operations";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { RestrictedRoute } from "../RestrictedRoute";
import { PrivateRoute } from "../PrivateRoute";
import { Toaster } from "react-hot-toast";
import { Spinner } from "../Spinner/Spinner";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const HomePage = lazy(() => import("../../pages/Home"));
const RegisterPage = lazy(() => import("../../pages/Register"));
const LoginPage = lazy(() => import("../../pages/Login"));
const ContactsPage = lazy(() => import("../../pages/Contacts"));

const theme = createTheme({
  palette: {
    primary: { main: "#007bff" },
    secondary: { main: "#ff4081" },
  },
});

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Spinner message="Refreshing user…" />
  ) : (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Suspense fallback={<Spinner message="Loading page…" />}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/contacts"
                    component={<LoginPage />}
                  />
                }
              />
              <Route
                path="/contacts"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<ContactsPage />}
                  />
                }
              />
            </Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
      <Toaster position="top-center" />
    </>
  );
}
