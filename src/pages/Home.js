import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import CV from "../assets/cv.pdf";
import Footer from "../components/Footer";
import cert from "../assets/cert.png";
import certi from "../assets/certi.png";
import processmaker1 from "../assets/processmaker1.png";
import processmaker2 from "../assets/processmakercertificate2.png";
import aa from "../assets/aa.jpg";
import Carousel from "../components/Carousel";

const Home = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_osmvpiw",
        "template_hamtta8",
        e.target,
        "N8CG5vp80Y6GOCZYy"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="everything">
      <div className="homepage">
        <h1>
          <b>Who is Amy?</b>
        </h1>
        <h2>
          <b>A daughter, sister and above all my girlfriend, my Ifunanya, someone I want to spend the rest of my life with</b>
        </h2>
      </div>

      <div className="rrrr">
        <img src="https://images.unsplash.com/photo-1556712691-5c39e0e32a8e?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHJvc2UlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D" />
      </div>

      <Carousel/>
    </div>
  );
};
export default Home;
