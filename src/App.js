import { BrowserRouter , Route, Switch } from 'react-router-dom';
import './App.css'; 
import Merge from './Merge';
import Blogs from './Thoughts';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Contact from './Contact';
import Testimonials from './Testimonials';


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
