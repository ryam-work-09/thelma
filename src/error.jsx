
import "./App.css";
import vector2 from "./assets/vector2.png";
import { useNavigate } from "react-router-dom"; 
export default function Error() {
  const navigate = useNavigate();
  const goHome = () => navigate("/");
  return (
    <section className="section section-5">
      <h1 className="vector-2" onClick={goHome}>
        <img src={vector2} alt="vector" />
      </h1>

      <h1 className="error-contact">OOPS!</h1>
      <h1 className="error-contact2">Something went wrong</h1>

      <h1 className="title-text3" onClick={goHome}>RETURN HOME </h1>
    </section>
  );
}
