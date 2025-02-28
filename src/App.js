import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductPage from "./component/productpage";
import Header from './component/header';
import Footer from './component/footer';
import Detailpage from './component/detailpage';
import ProductList from './component/productlistpage';
import Aboutus from './component/Aboutus';
import Organiziaton from './component/Organiziaton';
import Result from './component/Result';
import Location from './component/Location';
import Contact from './component/contact';
import Projectpage from './component/projectpage';
import Projectmain from './component/projectmain';
import Mainhomepage from './component/Mainhomepage';

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/product" element={<ProductPage />} />
                <Route path="/detail" element={<Detailpage />} />
                <Route path="/productlist" element={<ProductList />} />
                <Route path="/about" element={<Aboutus />} />
                <Route path="/organization" element={<Organiziaton />} />
                <Route path="/result" element={<Result />} />
                <Route path="/location" element={<Location />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Projectpage />} />
                <Route path="/projectmain" element={<Projectmain />} />
                <Route path="/mainhomepage" element={<Mainhomepage />} />
            </Routes>

            <Footer/>
        </Router>
    );
}

const MainPage = () => (
    <div>
        <h1>Main Page</h1>
        <p>This is the main page rendered by React.</p>
    </div>
);


export default App;
