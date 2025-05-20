import { AppRoutes } from "./Routes/AppRoutes";
import { Header } from "./components/layouts/header/Header";
import { Footer } from "./components/layouts/footer/Footer";

function App() {
  return (
    <div>
      <div className="wrapper">
        <Header />
        <AppRoutes />
        <Footer />
      </div>
    </div>
  );
}

export default App;
