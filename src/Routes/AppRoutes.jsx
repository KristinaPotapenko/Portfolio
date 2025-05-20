import { Route, Routes } from "react-router-dom";
import { MainPage } from "../pages/main/MainPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<MainPage />} />
    </Routes>
  );
};
