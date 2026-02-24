import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home";
import { Calendar } from "./pages/Calendar";
import ViciosPage from "./pages/ViciosPageProps";
// import ViciosPage from "./pages/ViciosPage";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/viciosPageProps" element={<ViciosPage onSubmit={function (vicios: string[]): void {
          throw new Error("Function not implemented.");
        } } />} />
      </Route>
    </Routes>
  );
}
