import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import ShowPost from './components/ShowPost/ShowPost';
import WritePost from './components/pages/WritePost/WritePost';
import UserSetting from './components/pages/UserSetting/UserSetting';
import LoginPage from './components/pages/LoginPage/LoginPage';

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
          {/* Write Post Component */}
          <Route exact path="/write-post" component={WritePost}></Route>
          {/* User Setting Component */}
          <Route exact path="/user-setting" component={UserSetting}></Route>
          <Route exact path="/login" component={LoginPage}></Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
