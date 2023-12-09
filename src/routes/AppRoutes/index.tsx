import { lazy } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import { ROUTER_PATH } from "helpers/constants";
import { ErrorBoundary } from "layout/ErrorBoundary";
import { MainLayout } from "layout/MainLayout";

const GamePage = lazy(() => import("pages/GamePage"));
const PageNotFound = lazy(() => import("routes/PageNotFound"));

export const AppRoutes = () => {
  const location = useLocation();

  const routes = useRoutes([
    {
      element: <MainLayout />,
      children: [
        {
          path: ROUTER_PATH.GAME,
          element: <GamePage />
        }
      ]
    },
    {
      path: ROUTER_PATH.NOT_FOUND,
      element: <PageNotFound />
    }
  ]);

  return <ErrorBoundary key={location.pathname}>{routes}</ErrorBoundary>;
};
