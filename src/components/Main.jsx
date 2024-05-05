import React, { useEffect, useState } from 'react'
import Styles from '../components/Styles.module.css'
import Data from '../components/data.json'
import Details from '../components/Details'
// const url = 'https://course-api.com/react-tabs-project'

const Main = () => {
    const [data,setData] = useState([])
    const [bool,setBool] = useState(false)
    const [num,setNum] = useState(0)
    const [init,setInit] = useState(Data[0])

    const handleClick = (index)=>{
        setBool(!bool)
        setNum(index);
        setInit(data[index])
    }
    const getData = ()=>{
        setData(Data);
    }
    useEffect(()=>{
        getData();
    },[])
    
    if(data[num]===null)return(
      <h1>
        Loading...
      </h1>
    )
  return (
    <div>
      <main>
          <div className={Styles.container}>
              <nav>
                  <ul>
                      {data.map((itm,index)=>{
                      return <li onClick={()=>handleClick(index)} className={index===num?Styles.active:""}>
                        {itm.company}</li>
                      })} 
                  </ul>
              </nav>
              <Details {...init}/>    
          </div>
      </main>
    </div>
  )
}

export default Main