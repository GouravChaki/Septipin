import { Login } from "../../Auth/AuthPages/Login";
import { Signup } from "../../Auth/AuthPages/Signup";
import { NavbarRouteLayout } from "../../Layouts/NavbarRouteLayout";
import { Home } from "../../components/Home";
import { LandingPage } from "../../components/LandingPage";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Statistics } from "../../components/StatisticalTracker";
import Profile from "../../components/Profile/Profile";
import { AuthProvider } from "../../common/hooks/useAuth";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthProvider>
        <Outlet />
      </AuthProvider>
    ),
    children: [
      {
        path: "/",
        element: (
          <NavbarRouteLayout>
            <LandingPage />
          </NavbarRouteLayout>
        ),
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              <Home />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/statistics",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              <Statistics />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              <Profile />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export default routerConfig;
