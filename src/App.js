import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShowPost from './components/ShowPost/ShowPost';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* TopNavBar component */}
        <TopNavBar></TopNavBar>
        <Switch>
          {/* Home Page component */}
          <Route exact path="/" component={HomePage}></Route>
          {/* Show Post component */}
          <Route exact path="/show-post" component={ShowPost}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
