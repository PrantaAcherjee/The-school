import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            {/* this is home page section  */}

            <Header></Header>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;