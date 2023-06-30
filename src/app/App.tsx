import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./App.routes";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "../shared/components";
import { Suspense } from "react";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <AppRoutes />
        </Suspense>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
