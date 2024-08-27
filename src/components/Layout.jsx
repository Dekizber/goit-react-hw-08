import { Suspense } from "react";

import { AppBar } from "./AppBar/AppBar";
import { PacmanLoader } from "react-spinners";

export const Layout = ({ children }) => {
  return (
    <div>
      <AppBar />
      <Suspense fallback={<PacmanLoader color="#ffd600" />}>
        {children}
      </Suspense>
    </div>
  );
};
