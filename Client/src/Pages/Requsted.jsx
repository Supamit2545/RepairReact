import React, { useEffect, useState } from 'react'
import Navbar from '../Components/Navbar'
import '../assets/Css/Requsted.css'

const Requsted = () => {
  const [active , setActive] = useState(1)
  const Repaired = [
    {
      id: 1 ,
      name:"Supamit",
      details:"bra bra bra bra bra brabra bra bra bra bra brabra bra bra bra bra brabra bra bra bra bra brabra bra bra bra bra brabra bra bra bra bra bra",
      status:"Successfully"
    },
    {
      id: 1 ,
      name:"Phappusa",
      details:"bra bra bra bra bra bra",
      status:"Successfully"
    },
  ]
  const getTabs = (index) =>{
    setActive(index)
    localStorage.setItem('ReTab' , index)
  }
  const SaveTab = () =>{
    const saveTab = localStorage.getItem('ReTab')
    const newtab = (saveTab ? parseInt(saveTab , 10):0)
    
    setActive(newtab)
  }
  useEffect(()=>{
    SaveTab()
  },[])
  return (
    <div className='Req-container'>
      <div className="Req-Header">
        <div className='req-cate space-x-5 text-center'>
          <button className={`tabbtn ${active === 1 ? "active":""}`} onClick={(e)=>{getTabs(1)}}>Repaired</button>
          <button className={`tabbtn ${active === 2 ? "active":""}`} onClick={(e)=>{getTabs(2)}}>Requseted</button>
        </div>
      </div>
      <div className="Req-Body">
        {active === 1 ? (
          <div className="Repaired-box">
            <div className="Repaired-Head">
              <div className='Repaired-cate'>
                <li className='Repaired-head-li1'>ID</li>
                <li className='Repaired-head-li2'>NAME</li>
                <li className='Repaired-head-li3'>DETAILS</li>
                <li className='Repaired-head-li4'>STATUS</li>
              </div>
            </div>
            <div className="Repaired-Body">
              <div className="">
                {Repaired.length > 0 ? (
                  <div>
                    {Repaired.map((list , index)=>(
                      <div className='Repaired-Show' key={index}>
                        <div className='Repaired-show-item1'>{list.id}</div>
                        <div className='Repaired-show-item2'>{list.name}</div>
                        <div className='Repaired-show-item3'>{list.details}</div>
                        <div className='Repaired-show-item4'>{list.status === "Successfully" ? (<p className='text-green-700'>Successful</p>):(<p>Watting</p>)}</div>
                      </div>
                    ))}
                  </div>
                ):(
                  <div>No Req</div>
                )
                }
              </div>
            </div>
            <div className="Repaired-Footer"></div>
          </div>
        ):(
          <div></div>
        )}
        {active === 2 ? (
          <div className="Requested-box">

          </div>
        ):(
          <div></div>
        )}
      </div>
    </div>
  )
}

export default Requsted