// App.jsx
import "./App.css";
import { motion } from "framer-motion";
import { Form, useNavigate } from "react-router-dom";

import bg from "./assets/bg1.png";
import vector1 from "./assets/vector1.png";
import vector2 from "./assets/vector2.png";
import vector3 from "./assets/vector3.png";

import img1 from "./assets/img1.png";
import img2 from "./assets/img2.png";
import img3 from "./assets/img3.png";
import img4 from "./assets/img4.png";

export default function App() {
  const navigate = useNavigate();

  const goToForm = () => navigate("/form");
  const goToBooking = () => navigate("/error");
  const goToConformation = () => navigate("/conformation");
  const goHome = () => navigate("/");

  const scrollToTopSection = () => {
    const section1 = document.querySelector(".section-1");
    if (section1) {
      section1.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="page-container">

      {/* SECTION 1 */}
      <section className="section section-1">
        <div 
          className="blurred-bg" 
          style={{ backgroundImage: `url(${bg})` }}
        ></div>

        <div className="content">
          <h1 className="vector-1" onClick={scrollToTopSection}>
            <img src={vector1} alt="vector" />
          </h1>

          <motion.h1
            className="title-text1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
          >
            A PLACE FOR ALL FLOWER THINGS
          </motion.h1>

          <h1 className="title-text2" onClick={goToForm}>ENQUIRE NOW</h1>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="section section-2">
        <h1 className="vector-2" onClick={scrollToTopSection}>
          <img src={vector2} alt="vector" />
        </h1>

        <motion.h1 
          className="next-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 4, ease: "linear" }}
        >
          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        </motion.h1>

        <h1 className="title-text2 clickable" onClick={goToForm}>
          GET IN TOUCH
        </h1>
      </section>

      {/* SECTION 3 */}
      <section className="section section-3">
        <h1 className="vector-2" onClick={scrollToTopSection}>
          <img src={vector3} alt="vector" />
        </h1>

        <div className="image-row">
          <img src={img1} alt="" className="gallery-img" />
          <img src={img2} alt="" className="gallery-img" />
          <img src={img3} alt="" className="gallery-img" />
          <img src={img4} alt="" className="gallery-img" />
        </div>

        <h1 className="title-text4" onClick={goToConformation}>SEE MORE</h1>
      </section>

      {/* SECTION 4 */}
      <section className="section section-4">
        <h1 className="vector-2" onClick={scrollToTopSection}>
          <img src={vector3} alt="vector" />
        </h1>
        <h1 className="contact">EMAIL</h1>
        <h1 className="contact">INSTAGRAM</h1>
        <h1 className="contact">MOBILE</h1>

        <h1 className="contact booking" onClick={goToBooking}>
          BOOKING
        </h1>

        <h1 className="credit">Dear Thelma 2025©</h1>
      </section>

    </div>
  );
}
