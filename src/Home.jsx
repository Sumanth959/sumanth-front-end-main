import { useNavigate } from "react-router-dom"

function Home() {
   const navigate = useNavigate()

   const logout = () => {
      localStorage.removeItem("userToken")
      navigate("/login")
   }

   return (
      <>
         <h1>Welcome to Home</h1>
         <p>You are successfully logged in!</p>
         <button onClick={logout}>Logout</button>
      </>
   )
}
export default Home