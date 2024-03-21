import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import CadastroDeMdico from "./pages/CadastroDeMdico";
import CadastroDeUsurio from "./pages/CadastroDeUsurio";
import Login from "./pages/Login";
import LandingPage from "./pages/LandingPage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/cadastro-de-usurio":
        title = "";
        metaDescription = "";
        break;
      case "/login":
        title = "";
        metaDescription = "";
        break;
      case "/landing-page":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]',
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<CadastroDeMdico />} />
      <Route path="/cadastro-de-usurio" element={<CadastroDeUsurio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/landing-page" element={<LandingPage />} />
    </Routes>
  );
}
export default App;
