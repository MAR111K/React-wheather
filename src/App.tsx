import MainPage from "./routes/MainPage/MainPage.tsx";
import AuthPage from "./routes/AuthPage/AuthPage.tsx";
import CityPage from "./routes/CityPage/CityPage.tsx";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to={"/main"} replace />} />
          <Route path="/main" element={<MainPage />} />
          <Route path=":city" element={<CityPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
