import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./App.routes";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "../shared/components";
import { Suspense } from "react";
import ThemeProvider from "../shared/theme";

const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <Suspense fallback={<Loader />}>
            <AppRoutes />
          </Suspense>
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;
