import React from "react";
import { useRoutes } from "react-router-dom";
import Age from "./Component/Age";
import LeaderBoard from "./Component/LeaderBoard";
import Name from "./Component/Name";
import Points from "./Component/Points";
import Rank from "./Component/Rank";

const AppRoutes = () => {
  const routes = [
    { path: "/rank", element: <Rank /> },
    { path: "/points", element: <Points /> },
    { path: "/name", element: <Name /> },
    { path: "/age", element: <Age /> },
    {
      path: "/",
      element: <LeaderBoard />,
    },
  ];
  const element = useRoutes(routes);
  return <div>{element}</div>;
};

export default AppRoutes;
