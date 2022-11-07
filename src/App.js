import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NavbarComp from './components/navbar/Navbar';
import ListCategory from './components/ListCategory';
import Hasil from './components/Hasil';
import { Row, Col, Container} from 'react-bootstrap'
import Banner from './components/banner/Banner';
import Main from './components/main/Main';
import BukuFavorit from './components/bukufavoritsection/BukuFavorit';
import SubBanner from './components/subbanner/SubBanner';
import Footer from './components/footer/footer';


function App() {
  return (
    <React.StrictMode>
    <NavbarComp/>
    <Banner/>
    <Main/>
    <BukuFavorit/>
    <SubBanner/>
    <Footer/>
  </React.StrictMode>
  );
}

export default App;
