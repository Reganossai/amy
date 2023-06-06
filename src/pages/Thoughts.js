import Navbar from '../components/Navbar';
import {Link} from 'react-router-dom';
const Blogs = () => {
	return(
		<div className="thoughts">
		<div className="contact-header">
		<Navbar/>  
		</div>
		<div className="thoughts-content">
		<ul>
		<li>
		<p>6/12/22</p>
		<Link to="/first">The "best" way to manage icons in React.js</Link>
		</li>		
		<li>
		<p>1/29/22</p>
		<Link to="/second">Case Study: Inline Editing</Link>
		</li>

		<li>
		<p>9/30/22</p>
		<Link to="/third">Static Site Generator Talk Links</Link>
		</li>
		
		<li>
		<p>8/21/22</p>
		<Link to="/fourth">Struggling to Believe Greatness is Worth It</Link>
		</li>
		
		<li>
		<p>1/28/22</p>
		<Link to="/fifth">A Guide to Creativity for the Left Brained</Link>
		</li>
		</ul>
		</div>
		</div>
		);
}
export default Blogs;