import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRegistered} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const Footer= () =>{
return(
<div className="first-conti">
<div className="hell">
<img src="https://images-workbench.99static.com/MzfM6_JRjTlaoIBFFRNAqCnjKrE=/99designs-contests-attachments/92/92831/attachment_92831956"/>
<h1>Working with talented and driven people is my passion. P.s, I'd love to build something great together.</h1>
<Link to="/contact">Work with me</Link>
</div>
<div className="linkss">
<h6 className="jijj">CONNECT</h6>
<a href="https://wa.me/+2348108315163" target="_blank" rel="noreferrer">Whatsapp</a>
<a href="https://www.linkedin.com/in/reagan-ossai-2212971b5/" target="_blank" rel="noreferrer">LinkedIn</a>
</div>
<div className="lim">
<p><Link to="/">Home</Link></p>
<p><Link to="/testimonials">Testimonials</Link></p>
<p><Link to="/thoughts">Blogs</Link></p>
<p><Link to="/contact">Contact</Link></p>
</div>
</div>

	);

}

export default Footer;