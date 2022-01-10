import { useState } from 'react';
import { useRoutes } from "react-router-dom";
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import { RouteConfig } from "./RouteConfig";

export const App = () => {

  const [user, setUser] = useState({});
  let isAuth = false;

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  if (!user) {
    isAuth = false;
  } else if (user) {
    isAuth = true;
  };

  const routing = useRoutes(RouteConfig({ isAuth }));
  return routing;
}
