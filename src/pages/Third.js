import Navbar from '../components/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import 	Footer from '../components/Footer';


const Third = () => {
return(
<div className="moppp">
<div className="first-header">
<Navbar/>
</div>
<div className="first-content">
<Link to="/thoughts"><FontAwesomeIcon icon={faArrowLeft}/>All posts</Link>
<h1><b>Static Site Generator Talk Links</b></h1>
<h2><b>Links & Descriptions</b></h2>
<h2>Surge.sh</h2>
<h4>A simple, single-command web publishing. Publish HTML, CSS, and JS for free, without leaving the command line. <a href="https://surge.sh/">Learn More</a></h4>
<h2>Mark down </h2>
<h4>Markdown is a text-to-HTML conversion tool for web writers. Markdown allows you to write using an easy-to-read, easy-to-write plain text format, then convert it to structurally valid XHTML (or HTML).<br/> <a href="https://daringfireball.net/projects/markdown/">Learn More</a></h4>
<h2>Jekyll</h2>
<h4>Jekyll is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter (like Markdown) and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server <br/><a href="https://jekyllrb.com/">Learn More</a></h4>
<h2>Middleman</h2>
<h4>Middleman is a static site generator using all the shortcuts and tools in modern web development.<br/> <a href="https://middlemanapp.com/">Learn More</a></h4>
<h2>Docpad</h2>
<h4>DocPad removes limitations and closes the gap between experts and beginners. Designers and developers can create websites faster than ever before. <br/> <a href="https://docpad.bevry.me/">Learn More</a></h4>
<h2>Cactus For Mac</h2>
<h4>A fast, easy and free static site generator <a href="http://cactusformac.com/">Learn More</a></h4>
<h2>Gatsby.js</h2>
<h4>Transform plain text into dynamic blogs and websites using the latest web technologies. A React.js static site generator. Supports Markdown, HTML, and React.js pages out of the box.<br/> <a href="https://github.com/gatsbyjs/gatsby">Learn More</a></h4>
<h2><b>Further Reading</b></h2>
<b><a href="https://davidwalsh.name/introduction-static-site-generators">Static Site Generators</a></b>
</div>
<hr/>
<Footer/>
</div>
     );
}
export default Third;