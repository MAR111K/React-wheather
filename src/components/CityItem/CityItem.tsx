import "./CityItem.scss";
import { CloseCircle } from "@ricons/ionicons5";
import { deleteCity } from "../../store/features/citySlice";
import { useAppDispatch } from "../../store";

interface Props {
  item: City;
  index: number;
}

const CityItem = ({ item, ...props }: { item: City } & Props) => {
  const dispatch = useAppDispatch();
  return (
    <div className="city-item-wrapper">
      <div className="city-item-header">
        <CloseCircle
          width="25px"
          color="#ff1010"
          className="pointer"
          onClick={() => dispatch(deleteCity(props.index))}
        />
      </div>
      <div className="city-item">
        <p className="city-item__title">{item.location.name}</p>
        <div className="city-item__title-element">
          <p className="city-item__title">Температура</p>
          <p className="city-item__value">{item.current.temp_c}°C</p>
        </div>
        <div className="city-item__title-element">
          <p className="city-item__title">Ветер: </p>
          <p className="city-item__value">{item.current.wind_kph}КМ/Ч</p>
        </div>
        <div className="city-item__title-element">
          <p className="city-item__title">Осадки: </p>
          <p className="city-item__value">{item.current.condition.text}</p>
        </div>
        <img src={item.current.condition.icon} alt="" />

        <div className="city-item__title-element">
          <p className="city-item__title">Влажность: </p>
          <p className="city-item__value">{item.current.humidity}%</p>
        </div>
      </div>
    </div>
  );
};

export default CityItem;
