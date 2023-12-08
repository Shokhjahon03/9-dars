import { Fragment, useRef, useState } from 'react'
import "../components/posts.css"


// useReduserga uncha tushunolmadim va chalg'ib kettim shunga uzimdan shunga yaqinroq logik yozdim

const Posts = () => {
 


 let [value,setValue]=useState({})
 let oneInput=useRef()
 let twoInput=useRef()
 let threInput=useRef() 
  console.log(value);
  let x=true
  let H=(e)=>{
    
    
    setValue([oneInput.current.value,twoInput.current.value,threInput.current.value])
    console.log (value)
    oneInput.current.value=""
    twoInput.current.value=''
    threInput.current.value=''
    
  }
  let B=()=>{
   
    oneInput.current.value=value[0]
    twoInput.current.value=value[1]
    threInput.current.value=value[2]
    
  }
  let D=()=>{
    setValue([])
    oneInput.current.value=""
    twoInput.current.value=''
    threInput.current.value=''
  }
  

  return (
    <Fragment>
      <div className='container'>
        <form action="#">
          <input ref={oneInput} type="text" placeholder='qiziqishlaringiz' />
          <input ref={twoInput} type="text" placeholder='qiziqishingizga sabab' />
          <input ref={threInput} type="text" placeholder='qachondan beri qiziqasiz' />
          <button onClick={H}>add</button>
        </form>
        <div className='posts'>
          <p>{value[0]}</p>
          <h3>{value[1]}</h3>
          <h1>{value[2]}</h1>
          <button onClick={B}>edit</button>
          <button onClick={D}>dalete</button>
        </div>
      </div>
    </Fragment>
  )
}

export default Posts