import { useState } from "react";
import AppInput from "../../components/AppInput/AppInput";
import AppButton from "../../components/AppButton/AppButton";
import CitiesSwiper from "../../components/CitiesSwiper/CitiesSwiper";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import "./MainPage.scss";
import { useAppDispatch, useAppSelector } from "../../store";
import { fetchCity, setKey } from "../../store/features/citySlice";

const MainPage = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cities = useAppSelector((state) => state.city.cities);

  useEffect(() => {
    let key = localStorage.getItem("key");
    key === null ? navigate("/auth") : dispatch(setKey(key));
  }, []);

  const addCity = () => {
    dispatch(fetchCity(city));
    setCity("");
  };

  return (
    <div className="main-page-wrapper">
      <div className={`main-page ${cities.length === 0 && "main-page--empty"}`}>
        <div className="main-page__input">
          <AppInput title="City" value={city} updateValue={(e: string) => setCity(e)} />
          <AppButton title="Add" handlerClick={addCity} />
        </div>
        <div className="main-page-cards">
          <CitiesSwiper />
        </div>
      </div>
    </div>
  );
};

export default MainPage;
