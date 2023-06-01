import React from 'react'
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import App from '../components/Table/HomeTable';


const Home = () => {
  return (
    <>
    <div className='home'>
      <Header/>
      <App  />
      <Footer/>
    </div>
    </>
  )
}

export default Home