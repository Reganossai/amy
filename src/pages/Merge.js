import Navbar from "../components/Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "../components/Footer";

const Merge = () => {
  return (
    <div className="mop">
      <Navbar />
      <div className="firsthand">
      <hr />
      </div>
      <Home />
      <hr className="sca" style={{position:'absolute',top:'5350px'}}/>
      <Footer />
    </div>
  );
};
export default Merge;
