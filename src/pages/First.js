import Navbar from '../components/Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import 	Footer from '../components/Footer';
const First = () => {
	return(
<div className="mopppppp">
<div className="first-header">
<Navbar/>
</div>
<div className="first-content">
<Link to="/thoughts"><FontAwesomeIcon icon={faArrowLeft}/>All posts</Link>
<h1>The "best" way to manage icons in React.js</h1>
<h2>Icon Rendering Techniques</h2>
<p>If you have been building user interfaces for any amount of time, you know that icons are, well, they are everywhere. I have spent the last 7 years building UIs with React.js and I have tried a number of different techniques for managing icons. Each technique has different tradeoffs. The main techniques I have used are:</p>
<ol>
<li>
<h2><i>Image + SVG</i></h2>
<p>img src="icon.svg"</p>
</li>
<li>
<h2>Inline SVG</h2>
</li>
<li>
<h2>Inline SVG using SVG Sprites</h2>
</li>
</ol>
<h2><b>Tradeoffs</b></h2>
<p>The big tradeoffs we are evaluating are performance vs. user experience. Before you hit me with a "well ackchyually, performance is a part of user experience", I know ( I agree), let's keep moving.</p>

<h2>Technique 1: Image + SVG</h2>
<p>When using the first approach I mentioned, an image tag referencing an image asset (png, svg, etc.), the first time the page is downloaded there is a flicker before the icons render. This happens because of a request waterfall. First the Browser downloads the HTML document. It then makes the subsequent requests to fetch all the assets for the page (images, scripts, stylesheets, etc). The benefit of referencing an external asset is caching. The browser (or CDN) can cache the asset and reference it on subsequent requests. The technique is optimized for subsequent requests, but the initial loading experience is less than desireable. The other downside of this technique is that we can't style the svg using CSS when it is referenced in an image tag 😢.When using the first approach I mentioned, an image tag referencing an image asset (png, svg, etc.), the first time the page is downloaded there is a flicker before the icons render. This happens because of a request waterfall. First the Browser downloads the HTML document. It then makes the subsequent requests to fetch all the assets for the page (images, scripts, stylesheets, etc). The benefit of referencing an external asset is caching. The browser (or CDN) can cache the asset and reference it on subsequent requests. The technique is optimized for subsequent requests, but the initial loading experience is less than desireable. The other downside of this technique is that we can't style the svg using CSS when it is referenced in an image tag .</p>

<h2>Technique 2: Inline SVG</h2>
<p>The second technique, which is often used to combat the issues I just mentioned is inlining the svg into the HTML document. When the Browser downloads the HTML document, it doesn't need to make a secondary request for the image asset, it is there immediately (no flicker). The other benefit is that the content is now able to be accessed and styled with CSS (win + win). But this approach is not without its pitfalls. Inlining the SVG into your HTML document makes your document significantly larger, and adds elements to the page (which slows down memory performance).</p>
<p>The second pitfall, is that the SVG bloats your JavaScript bundle size. The browser has to download, parse, and evaluate the JavaScript on the page before anything renders. Including SVG in your bundle makes you pay this cost twice. You have a larger bundle to download and parse (path data can be large for some icons especially if they are more intricate), and then the rendered HTML adds lots of additional elements to the page (slowing down DOM traversal). The vast majority of React applications use this second technique (I have been a big proponent of it in the past), but after battling with react-icons bloating the bundle size of a relatively simple page, I knew there had to be a better way.</p>
<p>Note: There are ways to treeshake unused icons out of the bundle, but if you aren't careful react-icons used out of the box will give you a 5mb bundle of JavaScript .</p>

<h2>Technique 3: Rendering Icons using SVG Sprites</h2>
<p>Well if you made this far, congratulations, you are about to have your life changed. There is a third option: SVG Sprites, which rememedy the majority of the issues I have mentioned with the two approaches.

You might not be old enough to remember image sprites (you probably aren't let's be honest), but essentially you would put all your image assets into a single image and then reference the specific image using coordinates (for where the icon was laid out on the sprite). This was a performance technique used to avoid lots of image requests (an issue which HTTP 2 has largely solved now). This technique is similar, but different.</p>
<h2>The symbol element</h2>

<p>Let me introduce you to the symbol element. The symbol element "is used to define graphical template objects which can be instantiated by a use element." - MDN. When combined with the defs element, we can construct a svg sprite with our icons.

First, we create a file sprite.svg, and add an svg element that wraps a defs element and a symbol. Next, we take the icon (that we would have inlined), swap the svg for a symbol element, and give it an id. The id is important! Finally, we'll add a second icon to the sprite by adding it as a symbol.You can keep defining all your icons as symbols in this file (although be conscious of the file size aka keep it under 125kb). Next, we will create a React component that will reference our sprite.</p>
<h2>The Use Element</h2>
<p>In the example above, the magic happens in the use element which links to the "Fragment Identifier" (aka the id that we defined on the symbol). Now, we have an icon component that lets us do all the things we could do with inline SVGs (like defining the height, width, and color of the icon), but all of the path data lives in an external asset (and not in the JavaScript bundle).</p>
<h2>Bonus Tip</h2>
<p>You can preload the sprite.svg file (and then cache it) to improve performance. By preloading a certain resource, you are telling the browser that you would like to fetch it sooner than the browser would otherwise discover it because you are certain that it is important for the current page. To preload the sprite, you add a link tag to the head of the document.Depending on your server's configuration, you might need to make sure the proper cache-headers are set on your sprite.svg so the browser can cache it appropriately.</p>
<h2>That's it! Hope this was helpful.</h2>
</div>
<hr/>
<Footer/>
</div>
		);
}

export default First;