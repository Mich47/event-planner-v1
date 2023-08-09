import { Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout/MainLayout";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("./pages/Home/Home"));
const Create = lazy(() => import("./pages/Create/Create"));
const Event = lazy(() => import("./pages/Event/Event"));
const Edit = lazy(() => import("./pages/Edit/Edit"));

function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<MainLayout />}>
          <Route
            index
            element={
              // <Suspense fallback={<PageLoader />}>
              <Suspense fallback={"..."}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="create"
            element={
              <Suspense fallback={"..."}>
                <Create />
              </Suspense>
            }
          />
          <Route
            path="event/:id"
            element={
              <Suspense fallback={"..."}>
                <Event />
              </Suspense>
            }
          />
          <Route
            path="edit"
            element={
              <Suspense fallback={"..."}>
                <Edit />
              </Suspense>
            }
          />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
