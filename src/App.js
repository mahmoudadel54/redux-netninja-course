import { Switch, Route, Redirect } from 'react-router';
import './App.css';
import PostComponent from './components/postsComponents/postComponent';
import PostsListComponent from './components/postsComponents/postsListComponent';
import Home from './components/Home'
// import Home from './components/Reha/home'
import NotFoundPage from './components/NotFoundPage';
function App() {
  return (
    <div className="App">
        <main>
        <Switch>
        <Route exact path="/posts/:post_id" component={PostComponent} />
        <Route exact path="/posts" component={PostsListComponent} />
        <Route path='/notfound' component={NotFoundPage} />
        <Route exact path="/" component={Home} />
        
        <Redirect to="/notFound" />
        {/* <Route path="/posts/:post_id" component={Post} /> */}
        </Switch>
      </main>
    </div>
  );
}

export default App;
