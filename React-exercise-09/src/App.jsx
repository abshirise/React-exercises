import { useEffect } from "react"
import { useState } from "react"


function App(){

  const [searchTerm, setSearchTerm] = useState("")
  const [userData, setUserData] = useState(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    if(error){
      console.error("Error fetching GitHup user: ", error)
    }
  },[error])

  const handleUserData = async()=>{

    if(!searchTerm.trim()){
      alert("Please enter valid username")
      return
    } 
    setLoading(true)
    setError("")
    setUserData(null)

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try{
      const response = await fetch(`https://api.github.com/users/${searchTerm.toLowerCase()}`)

      if(!response.ok){
        throw new Error ("GitHup user not found")
      }

      const data = await response.json()
      setUserData(data)

    }catch (err){
      setError(err.message)
    } finally{
      setLoading(false)
    }
  }

  return(
    <div>
      <h1>Search Users</h1>
      <input type="text" 
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="GitHup user username"  
      value={searchTerm}
     />
      <button  onClick={handleUserData}>Search</button>
    
    { loading && <p style={{color: "green"}}>Loading ...</p> }

    {
      error && <p style={{color: "red"}}>Error: {error} </p>
    }

    {
      userData && (
        <div>
          <h2> {userData.name || userData.login} </h2>
          <img style={{width: 200, borderRadius: "50%"}} src={userData.avatar_url} alt="" />
          <p>Public repos: {userData.public_repos} </p>
          <p>Created at: {userData.created_at} </p>
          <p>Bio: {userData.bio} </p>
        </div>
      )
    }
    
      
    </div>
  )
}

export default App