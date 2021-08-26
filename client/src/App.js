import './App.css';
import { Route, Switch } from 'react-router-dom'
import Home from './views/Home'
import Posts from './views/Posts';
import PostDetail from './views/PostDetail';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
      <Switch>
        <Route path="/posts/:slug">
          <PostDetail />
        </Route>
        <Route path="/posts">
          <Posts />
        </Route>
        <Route path="/">
          <Home />
        </Route>
        </Switch>
        </Layout>
    </div>
  );
}

export default App;
