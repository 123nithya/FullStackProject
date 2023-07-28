import React from 'react';
import SideNav from './SideNav';
import Chart from './Chart';
// import Location from './Location';
// import LocationDisplay from 'C:/React/crimetrackingapplication/src/Loc.js';

const Home2 = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div>
            <SideNav />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ marginLeft: '135px', marginTop: '6%' }}>
              <Chart />
            </div>
            <div className='col-12' style={{ width: '50%', marginLeft: '40%', marginTop: '5%', position: 'fixed' }}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m19!1m8!1m3!1d4011081.3552469597!2d76.9540745!3d10.9579614!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3ba85bdeb7818fcb%3A0xbce7d490fd8f3738!2sKuniyamuthur%20Tamil%20Nadu!3m2!1d10.9579614!2d76.95407449999999!5e0!3m2!1sen!2sin!4v1689675379374!5m2!1sen!2sin"
                height="575"
                style={{ border: "0" }}
                allowfullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='w-100'
                title='map'
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home2
