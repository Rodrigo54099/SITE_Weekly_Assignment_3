//import Post from "../Exercise/Exercise"
//import NewExerciseForm from "../NewExerciseForm/NewExerciseForm"
import About from "../About/About"
//import Navbar from "../Navbar/Navbar"
import Activities from "../Activities/Activities"

import "./Home.css"

export default function Home({ user, isFetching, posts, addPost, error }) {
  return (
    <div className="Home">
      <About />
      <Activities />
    </div>
  )
}
