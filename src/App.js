import logo from './logo.svg';
import './App.css';
import FetchData from './Components/FetchData';
import Nav from './Components/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountriesDetail from './Components/Countries_detail';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={
          <>
          <Nav/>
          <FetchData/>
          </>
        }/>
        <Route path="/country/:id" Component={CountriesDetail} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
