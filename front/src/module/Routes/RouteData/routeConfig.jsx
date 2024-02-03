import { Login } from "../../Auth/AuthPages/Login";
import { Signup } from "../../Auth/AuthPages/Signup";
import { NavbarRouteLayout } from "../../Layouts/NavbarRouteLayout";
import { Home } from "../../components/Home";
import { LandingPage } from "../../components/LandingPage";
import { Outlet, createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { Statistics } from "../../components/StatisticalTracker";
import { Calendr } from "../../common/Calendar";
import { showToastMessage } from "../../../utils";
import Profile from "../../components/Profile/Profile";

const routerConfig = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
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
              < Statistics />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      },
      {
        path: "/profile",
        element: (
          <ProtectedRoute>
            <NavbarRouteLayout>
              < Profile />
            </NavbarRouteLayout>
          </ProtectedRoute>
        ),
      }
    ],
  },
]);

export default routerConfig;
