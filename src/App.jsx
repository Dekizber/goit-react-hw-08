import { useDispatch, useSelector } from "react-redux";
import { lazy, useEffect } from "react";
import { PacmanLoader } from "react-spinners";
import { selectIsRefreshing } from "./redux/auth/selectors";
import { refreshUserThunk } from "./redux/auth/operations";
import { Layout } from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import { RestrictedRoute } from "./components/RestrictedRoute";
import { PrivateRoute } from "./components/PrivateRoute";

const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useSelector(selectIsRefreshing);

  const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
  const RegistrationPage = lazy(() =>
    import("./pages/RegistrationPage/RegistrationPage")
  );
  const LoginPage = lazy(() => import("./pages/LoginPage/LoginPage"));
  const ContactsPage = lazy(() => import("./pages/ContactsPage/ContactsPage"));

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefreshing ? (
    <PacmanLoader color="#ffd600" />
  ) : (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute
              redirectTo="/contacts"
              component={<RegistrationPage />}
            />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
          }
        />
      </Routes>
    </Layout>
  );
};

export default App;
