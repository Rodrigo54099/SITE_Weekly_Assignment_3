import { useState, useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios"
import Navbar from "../Navbar/Navbar"
import Home from "../Home/Home"
import Signup from "../Signup/Signup"
import Login from "../Login/Login"
import Exercise from "../Exercise/Exercise"
//import NotFound from "../NotFound/NotFound"
import CreateExercise from "../CreateExercise/CreateExercise"
import "./App.css"

export default function App() {
  const [user, setUser] = useState({})
  const [posts, setPosts] = useState([])
  const [error, setError] = useState(null)
  const [isFetching, setIsFetching] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true)

      try {
        const res = await axios.get("http://localhost:3001/exercise")
        if (res?.data?.posts) {
          setError(null)
          setPosts(res.data.posts)
        }
      } catch (err) {
        console.log(err)
        const message = err?.response?.data?.error?.message
        setError(message ?? String(err))
      } finally {
        setIsFetching(false)
      }
    }

    fetchPosts()
  }, [])

  const addPost = (newPost) => {
    setPosts((oldPosts) => [newPost, ...oldPosts])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                user={user}
                error={error}
                posts={posts}
                addPost={addPost}
                isFetching={isFetching}
              />
            }
          />
          <Route
            path="/login"
            element={<Login user={user} setUser={setUser} />}
          />
          <Route
            path="/signup"
            element={<Signup user={user} setUser={setUser} />}
          />
          <Route
            path="/exercise"
            element={<Exercise user={user} setUser={setUser} />}
          />
          <Route
            path="/exercise/create"
            element={<CreateExercise user={user} setUser={setUser} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
