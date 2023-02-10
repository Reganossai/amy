import react,{useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRegistered} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import {faXmark} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import reagan from '../assets/reagan.jpg';
  
const Navbar = () => {

const [nav,setNav]=useState(false);
const handleNav = () =>{
setNav(!nav);
  }

nav?document.body.style.overflow="hidden":document.body.style.overflow="auto"
  	return(

<nav className="navbar">
<img src={reagan} alt="logo"/>
<a className="navbar-brand" href="/">REAGAN OSSAI</a>
  <ul id="navbarSupportedContent">
           <li className="nav-link" aria-current="page"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
          <li className="nav-link"><Link to="/thoughts">Blogs</Link></li>
          <li className="nav-link"><Link to="/contact">Contact</Link></li>
  </ul>
{nav?
  <ul id="navbarSupportedContentMobile">
          <li className="nav-link"><Link to="/testimonials">Testimonials</Link></li>
          <li className="nav-link"><Link to="/thoughts">Blogs</Link></li>
          <li className="nav-link"><Link to="/contact">Contact</Link></li>
  </ul>:null}
  
      <div onClick={handleNav} className="zaracho">
{nav ? <FontAwesomeIcon icon={faXmark
}/>:<FontAwesomeIcon icon={faBars}/>}
      </div>
</nav>
		);
}

export default Navbar;