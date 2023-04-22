import Navbar from './Navbar';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import 	Footer from './Footer';


const Second = () => {
return(
<div className="moppppppp">
<div className="first-header">
<Navbar/>
</div>
<div className="first-content">
<Link to="/thoughts"><FontAwesomeIcon icon={faArrowLeft}/>All posts</Link>
<h1>Case Study: Inline Editing</h1>
<h2><b>Introduction</b></h2>
<h2>Background:</h2>
<p>I was hired to work on a project at a company. Over time it has become unsustainable to release a new version of website builders for customers every year or two, so one of the major goals was to create an “evergreen” product that could become one of the flagship products at the company.</p>
<p>In order to compete with other products, fast iteration was essential. As a design team, we were constantly balancing the tension between designing / building new capabilities and improving the existing experience.</p>

<h2>The problem</h2>
<p>It became clear fairly early in the project that traditional “form based editing” like Wordpress created a lot of confusion for users. The typical company website builder user is a small business owner who is not very tech savvy, but needs an effective web presence for their business. In user testing studies issues related to “difficulty editing” was the top issue which made it a priority for our team to solve.</p>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605823270151_Form+Editing+Example+2.jpg"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605823270140_Form+Editing+Example+1.jpg"/>

<h2>The vision </h2>
<p>Every vision starts as a bit of a hunch, intuition if you will. As ideas start to take shape you begin to form a hypothesis. As a design team, we had intuition that a “Google Docs” like editing experience was much more intuitive than controlling fields with form inputs. When designing and editing a website, the most intuitive way to edit your content is direct manipulation. However, even though everyone (including stakeholders) loved the idea, the investment in the project was substantial and there was hesitation about diving in with so many unknowns.</p>
<p>Every quarter the company had a hackathon where engineers and designers were able to surface new ideas - full freedom to think big. So to prove out the concept, I paired with another engineer and we built a proof of concept for direct manipulation that we called “inline editing”. Winning the hackathon gave the project the momentum it needed to move forward but there were still many unknowns.</p>

<h2><b>Creating a foundation for learning:</b></h2>
<h2>User Testing Score Card</h2>
<p>When you are making big changes and working towards a big vision, you have to set up a baseline for how you will measure success. In order to do this, I worked with one of our researchers to create an “experience scorecard”. The purpose of this scorecard was to try and glean some quantitative metrics from a qualitative testing process.

Our team leverages usertest.com heavily in our user testing running both moderated and unmoderated studies. The scorecard we created measured things like:</p>
<ul>
<li>
<p>Editing text</p>
</li>

<li>
<p>Formatting text</p>
</li>

<li>
<p>Adding or removing sections to the page</p>
</li>

<li>
<p>Reordering the sections on the page</p>
</li>

<li>
<p>Adding or removing groups of content</p>
</li>
</ul>

<h2>Building to learn:</h2>
<p>One of the difficulties with highly interactive designs, is that static mockups leave far too many holes between the visual design and the actual implementation. I realized very early on that things that looked like good ideas in our design tool (Sketch at the time) didn’t always translate. The reality was that the majority of the design and interaction work that needed to be done, needed to be done in code.</p>
<p>I threw away the static mockups and stared prototyping using Codesandbox (my preferred tool for quickly getting a React application up and running). I started by building out simple, isolated experiments of the different pieces of the experience. Once these simple experiments seemed to be working and ok from an interaction standpoint, they were then assembled into the larger prototype (which got more sophisticated with each iteration).</p>
<p>Over the course of a few months I built at least 4 distinct versions of the prototype, with each version containing dozens of iterations. I would run a small batch of users through the same core editing flows (so we could compare the prototype to the experience in production. After each batch, I would fill out the scorecard, and jot down ideas for improvement, which I then quickly integrated back into the prototype.</p>
<p>At first the issues were glaring, but with each iteration we stopped seeing users fumble over the different interactions and got to something that was simple, intuitive and scored higher than production on the usability scorecard. (Lesson: you never want the first version of your design to be the thing that users get in production.)</p>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764442070_Screen+Shot+2020-11-18+at+10.36.03+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441758_Screen+Shot+2020-11-18+at+10.38.40+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441605_Screen+Shot+2020-11-18+at+10.39.39+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441508_Screen+Shot+2020-11-18+at+10.39.57+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441941_Screen+Shot+2020-11-18+at+10.36.19+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441851_Screen+Shot+2020-11-18+at+10.36.31+PM.png"/>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605764441417_Screen+Shot+2020-11-18+at+10.36.47+PM.png"/>
<h2>Building from a strong foundation:</h2>
<p>After going through the rigorous process of testing and iterating, we felt confident about what we wanted to build. However, even though we knew what we wanted to build, we still needed to sequence the changes in a way that they could be made incrementally (so the team could stay agile). Sure enough there were high priority initiatives that came up along the way, including a major company rebrand</p>
<p>The team executed on the project in waves, starting with the basic text editing functions, and moved on to the section and group level controls. I worked on this project as both a designer as well as an engineer, implementing features like the add section drawer, inline toolbar controls and more. One of the major benefits of being proficient in React.js is that some of the strategies particularly for managing nested hover and focus states were able to be leveraged by the team in production.</p>
<h2>Results</h2>
<p>It is difficult to give specific metrics on a project that was this large in scope, however there were some notable results. There is a big competition for winning DIY customers in the website builder space, and customers rely heavily on reviews to guide them in their decision making journey. The big reason that users choose a website builder (like GoDaddy or Wix) over Wordpress is because of how overwhelming it can be to build your site on that platform. Ease of use is one of the primary factors (along with price) in a users decision to purchase and continue to use a product.

In the early days of this product, it would receive less than impressive reviews in different publications citing many of the issues this project was aiming to solve. The cumulative impact of this work has helped us win in the market (surpassing Squarespace and Weebly).</p>
<h2>Product Impact</h2>
<img src="https://paper-attachments.dropbox.com/s_5456D2EE98B39AB68C34B0DCACC27CB67E6CCF724071190449377EB4FB77F6F7_1605826198548_Screen+Shot+2020-11-19+at+3.43.11+PM.png"/>
<p>We also saw statistically significant lifts in publish and conversion as we rolled out the experience</p>
<h2>Lessons Learned</h2>
<ul>
<li>
<p>Iterate early and often</p>
</li>

<li>
<p>Sometimes you need to throw away your design tool and dive into code</p>
</li>

<li>
<p>Create a baseline before you start and measure your progress</p>
</li>

<li>
<p>Grand visions always take time to realize and are the culmination of hundreds of smaller meaningful improvements</p>
</li>
</ul>
</div>
<hr/>
<Footer/>
</div>
	);
}
export default Second;