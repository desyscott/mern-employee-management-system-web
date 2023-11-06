import  {Fragment,useState} from 'react'





export default  function Dashboard() {
  const [count, setCount] = useState(0)

  return (
    <Fragment>
       <h3>Dashboard</h3>
       
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count} 
        </button>
        </div>
    </Fragment>
  )
}






