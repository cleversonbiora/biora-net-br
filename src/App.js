import React from 'react';
import ProgressBar from './components/ProgressBar'
import SliderItem from './components/SliderItem'
import Slider from './components/Slider'
import NavMenu from './components/NavMenu'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Services from './components/Services'
import logo from './assets/logo.png'
import './App.css';

function App() {
  const services = [
    {
      icon: 'icon-code',
      items:['Sistemas Personalizados', 'Lojas Virtuais', 'Integrações']
    },
    {
      icon: 'icon-mobile',
      items:['Apps React Native','Apps Nativos IOS/Android', 'Web Apps']
    },
    {
      icon: 'icon-layers',
      items:['Sites Responsivos','Blogs e Portfólios', 'Portais Institcionais']
    }
  ];
  const data = {
    name: 'Cleverson Biora',
    email: 'cleverson@biora.net.br',
    tel: '+5541999484325',
    socialnetwork:[
      {
        icon:'icon-linkedin',
        link:'https://www.linkedin.com/in/cleverson-biora/'
      },
      {
        icon:'icon-github',
        link:'https://github.com/cleversonbiora'
      },
      {
        icon:'icon-twitter',
        link:'https://twitter.com/cleversonbiora'
      }
    ],
    logo: logo
  }
  return (
    <React.Fragment>
      <ProgressBar />
      <div className="page">
        <NavMenu name={data.name}>
          <li className="active"><a href="index.html"><span><small>01</small>Home</span></a></li>
          <li><a href="about.html"><span><small>02</small>Resume</span></a></li>
          <li><a href="services.html"><span><small>03</small>Services</span></a></li>
          <li><a href="portfolio.html"><span><small>04</small>Portfolio</span></a></li>
          <li><a href="blog.html"><span><small>05</small>Blog</span></a></li>
          <li><a href="contact.html"><span><small>06</small>Contact</span></a></li>
        </NavMenu>
        <div id="colorlib-page">
          <Header {...data}/>
          <Slider>
            <SliderItem mainText={data.name} subText="Olá! Eu sou" />
            <SliderItem mainText=".NET Full Stack Developer" subText="Sou um" />
          </Slider>
          <About {...data}/>
          <Services services={services}/>
        </div>
        <Footer {...data} />
        <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48px" height="48px">
            <circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/>
            <circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/>
          </svg>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
