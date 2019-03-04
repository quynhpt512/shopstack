import React, { Component } from 'react';
import TopBar from './components/TopBar/TopBar';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Contact from './components/Contact/Contact';
import Services from './components/Services/Services';
import Respo from './components/Respo/Respo';
import Times from './components/Times/Times';
import YourWork from './components/YourWork/YourWork';
import OurClients from './components/OurClients/OurClients';
import Footer from './components/Footer/Footer';

class App extends Component {
    render() {
        return (
            <div id="wrap" className="colorskin-2 dark-submenu">
                <TopBar />
                <Header />
                <Banner />
                <Contact />
                <Services />
                <Respo />
                <Times />
                <YourWork />
                <OurClients />
                <Footer />
            </div>
        );
    }
}

export default App;
