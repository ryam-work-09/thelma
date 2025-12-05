// conformation.jsx
import "./App.css";
import vector3 from "./assets/vector3.png";
import { useNavigate } from "react-router-dom"; 

export default function Conformation() {
  const navigate = useNavigate();

  const goHome = () => navigate("/");

  return (
    <section className="section section-7">
      <h1 className="vector-2">
        <img src={vector3} alt="vector" />
      </h1>

      <h1 className="error-contact3">THANK YOU</h1>
      <h1 className="error-contact4">
        We will be in touch soon, with love, Chelsea x
      </h1>

      <h1 className="title-text5" onClick={goHome}>
        RETURN HOME
      </h1>
    </section>
  );
}
