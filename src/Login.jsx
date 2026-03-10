import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Login() {
   const navigate = useNavigate()
   const [data, setdata] = useState({
      email: "",
      password: ""
   })

   const changeName = (e) => {
      setdata({ ...data, [e.target.name]: e.target.value })
   }

   const submit = async () => {
      try {
         const res = await axios.post(
            "https://cabsystemsms-1.onrender.com/login",
            data
         )
         alert(res.data)
         // Store user info and navigate to home
         localStorage.setItem("userToken", res.data.token || "true")
         navigate("/home")
      }
      catch (xyz) {
         alert(xyz.response?.data || "Login Error")
      }
   }

   return (
      <>
         <h1>Login Page</h1>
         <input onChange={changeName} name="email" placeholder="enter email" />
         <input onChange={changeName} name="password" placeholder="enter password" type="password" />
         <button onClick={submit}>Login</button>
         <p>Don't have an account? <a href="/register">Register here</a></p>
      </>
   )
}
export default Login
