import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css'; 
import Merge from './components/Merge';
import Blogs from './components/Thoughts';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';


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

</Switch>
</BrowserRouter>
</div>
    );
}

export default App;
