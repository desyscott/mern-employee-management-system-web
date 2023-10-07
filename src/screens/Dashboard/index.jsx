import  {Fragment,useState} from 'react'
import {Link} from "react-router-dom"




export default  function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
       <Link to="/employees" className="text-3xl font-bold ">Employees</Link>
       
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        </div>
    </Fragment>
  )
}






