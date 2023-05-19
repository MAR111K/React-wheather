import { useState } from "react";
import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./AuthPage.scss";
import { useAppDispatch } from "../../store";
import { setKey } from "../../store/features/citySlice";

const AuthPage = () => {
  const [key, setValueKey] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (localStorage.getItem("key") !== null) {
      navigate("/main");
    }
  }, []);

  const setApiKey = () => {
    localStorage.setItem("key", key);
    dispatch(setKey(key));
    navigate("/main");
  };

  return (
    <div className="auth-page-wrapper">
      <div className="auth-page">
        <AppInput
          title="API-Key"
          value={key}
          updateValue={(e: string) => setValueKey(e)}
          handlerEnter={setApiKey}
        />
        <AppButton title="Connect" handlerClick={setApiKey} />
      </div>
    </div>
  );
};

export default AuthPage;
