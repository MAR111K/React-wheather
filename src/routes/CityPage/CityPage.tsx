import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
const CityPage = () => {
  let params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    let key = localStorage.getItem("key");
    if (key === null) {
      navigate("/main");
    }
  }, []);
  return (
    <div>
      <p>{params.city}</p>
    </div>
  );
};

export default CityPage;
