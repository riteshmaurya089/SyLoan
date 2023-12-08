import React from 'react'
import Mainsection from '../Components/Mainsection'
import HowItWorks from '../Components/HowItWorks'
import Services from '../Components/Services'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
    <div className='homepage'>
      {/* <div className='nav1'>
        <div className='navbarComponent'>
          <Navbar/>
        </div>
      </div> */}
      <hr />
      
      <div className='mainsection'>
        <div className='mainsection1'>
          <Mainsection/>
        </div>
      </div>

      <div className='otherComponents'>
        <div className='others1'>
          {/* otherComponents */}
          <HowItWorks/>
          <Services/>
          {/* <Features/>
          <Testimonials/> */}

          
        </div>

        
      </div>

  

    </div>
    <div>
      <Footer/>
    </div>
    </div>
    
  )
}

export default Home
