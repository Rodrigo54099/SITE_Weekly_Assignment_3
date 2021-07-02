import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
// import axios from "axios"
import apiClient from "../../services/apiClient"
import "./CreateExercise.css"

export default function NewPostForm({ user, addPost }) {
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState({})
  const [form, setForm] = useState({
    name: "",
    category: "",
    duration: "",
    intensity: "",
    url: "",
  })

  const handleOnInputChange = (event) => {
    setForm((f) => ({ ...f, [event.target.name]: event.target.value }))
  }

  const handleOnSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)

    const { data, error } = await apiClient.createPost({
      name: form.name,
      category: form.category,
      duration: form.duration,
      intensity: form.intensity,
      url: form.url,
    })
    if (error) setErrors(error)
    if (data) {
      addPost(data.post)
    }
    setIsLoading(false)
  }

  console.log(form.duration)
  const renderForm = () => {
    return (
      <div className="form">
        <div className="input-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={form.name}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="imageUrl">Category</label>
          <input
            type="text"
            name="category"
            placeholder="Category "
            value={form.category}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="text"
            name="duration"
            placeholder="duration"
            value={form.duration}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="intensity">intensity</label>
          <input
            type="text"
            name="intensity"
            placeholder="intensity"
            value={form.intensity}
            onChange={handleOnInputChange}
          />
        </div>

        <div className="input-field">
          <label htmlFor="url">imgUrl</label>
          <input
            type="text"
            name="url"
            placeholder="The image URL for your workstation"
            value={form.url}
            onChange={handleOnInputChange}
          />
        </div>

        <button className="btn" disabled={isLoading} onClick={handleOnSubmit}>
          {isLoading ? "Loading..." : "Submit"}
        </button>
      </div>
    )
  }

  return (
    <div className="NewPostForm">
      <div className="card">
        <h2>Create a new post</h2>

        {renderForm()}
      </div>
    </div>
  )
}
