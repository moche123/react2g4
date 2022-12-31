import React from 'react'
import CountdownTimer from '../partials/CountdownTimer'
import './concert.css'

const Concert = ({setStatus}:any) => {
  return (
    <>
        <div className='text-center container'>

          <h1>Concert</h1>

          <div className='container-img'>
            {/* <img src="https://www.svgrepo.com/show/268564/rock-and-roll-concert.svg" 
            alt="img-concert" /> */}
            
          </div>
          
          <CountdownTimer countdownDate="2022/12/31" />

          <br />
          <br />

          <button className="btnLogout" onClick={ ()=> {
              localStorage.clear()
              setStatus('no-auth')
          } }>
              logout
          </button>
        </div>
    </>
  )
}

export default Concert