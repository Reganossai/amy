import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css'; 
import Merge from './pages/Merge';
import Blogs from './pages/Thoughts';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Fourth from './pages/Fourth';
import Fifth from './pages/Fifth';
import Contact from './pages/Contact';
import Testimonials from './pages/Testimonials';
import Projects from './pages/Projects';


function App() {
  return (
<div className="hyy">
<BrowserRouter>
<Switch>
<Route exact path="/">
<Merge/>
</Route>
<Route path="/thoughts">
<Blogs/>
</Route>
<Route path="/first">
<First />
</Route>
<Route path="/second">
<Second />
</Route>
<Route path="/third">
<Third />
</Route>
<Route path="/fourth">
<Fourth />
</Route>
<Route path="/fifth">
<Fifth />
</Route>
<Route path="/contact">
<Contact />
</Route>
<Route path="/testimonials">
<Testimonials />
</Route>
<Route path="/projects">
<Projects />
</Route>

</Switch>
</BrowserRouter>
</div>
    );
}

export default App;
