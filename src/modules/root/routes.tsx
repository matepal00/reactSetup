import { lazy } from "react";
import { RouteObject } from "react-router-dom";
import { paths } from "../../config";
import { ComponentLoader } from "../../shared/components";

const routes: RouteObject[] = [
  {
    path: paths.root,
    element: <ComponentLoader component={lazy(() => import("./views/Root"))} />,
  },
];

export default routes;
