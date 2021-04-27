
import React from 'react';
import  {Route, Link}  from 'react-router-dom';
import HomeView from './views/HomeView';
import Authors from './views/Authors';
import Books from './views/Books';


//import './App.css';

const App =()=> (
  <>
     {/* навигация - сделать ссылки, заимпортировать Link */}
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
    <li>
        <Link to="/authors">Authors</Link>
      </li>
      <li>
        <Link to="/books">Books</Link>
      </li>
    </ul>
    <Route exact path="/" component={HomeView} />
    <Route path="/authors" component={Authors} />
    <Route path="/books" component={Books} />
  </>
);


export default App;
