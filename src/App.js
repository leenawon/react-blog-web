import './App.css';
import TopNavBar from './components/TopNavBar/TopNavBar';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* TopNavBar component */}
        <TopNavBar></TopNavBar>
      </BrowserRouter>
    </>
  );
}

export default App;
