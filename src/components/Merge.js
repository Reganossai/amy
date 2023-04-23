import Navbar from "./Navbar";
import Home from "./Home";
import Contact from "./Contact";
import Footer from "./Footer";

const Merge = () => {
  return (
    <div className="mop">
      <Navbar />
      <div className="firsthand">
      <hr />
      </div>
      <Home />
      <hr className="sca" style={{position:'absolute',top:'4190px'}}/>
      <Footer />
    </div>
  );
};
export default Merge;
