// Use of Axios :- is basically use to send the request and we don't need to convert the Data into JSON or PARSE
                // it Automatically  Convert it and send the response

import { useEffect,useState} from 'react'
import './App.css'
import axios from 'axios' //to send the request it is advance version of (app.get(-----))

function App() {
 const [jokes,setJokes] = useState([])

useEffect(()=>{
  axios.get('/api/jokes')
  .then((response)=>{ // agr axios.get se data mil jata hai to error handling ka liye .then and .catch use krna hoga
      setJokes(response.data);// .then mai response Call Back fire krenge jisse we know API se Response miljyga and respone.data se Total data Find Hojyga
  })
  .catch((error)=>{
    console.log(error);
  })
})
  return (
    <>
      <h1>React App Created</h1>
      <h1>Jokes :{jokes.length}</h1>
      {
        jokes.map((joke,index)=>(
          <div key = {joke.id}>
             <h3>{joke.title}</h3>
             <p>{joke.content}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
