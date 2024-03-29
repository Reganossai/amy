import react, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faRegistered } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import reagan from "../assets/image0.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  nav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");
  return (
    <nav className="navbar">
      <img src={reagan} alt="logo" />
      <a className="navbar-brand" href="/">
        For Amy <FontAwesomeIcon icon={faHeart} />
      </a>

      {nav ? (
        <ul id="navbarSupportedContentMobile">
          <li className="nav-link">
            <p>Hiii</p>
          </li>
          <li className="nav-link">
            <p>
              Your eyes are so captivating, they even glitter sometimes and I
              finally figured out why youre so hot, cause you probably were
              birthed on a sunday and guessing it was a sunny day. I am writing
              this informal letter to atone for not being to wish you a happy
              valentine's day early enough due to the fact that nature decided
              to bring you into my life a little bit late. Never the less, you
              know what they say, it's better late than never. I really hope you
              accept this gift from the bottom of my heart.
            </p>
          </li>
          <li className="nav-link">
            <p>Yours Sincerely,</p>
          </li>
          <li className="nav-link">
            <p>Reagan Ossai</p>
          </li>
        </ul>
      ) : null}

      <div onClick={handleNav} className="zaracho">
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
