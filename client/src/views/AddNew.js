import { Link, useNavigate } from "react-router-dom"
import AuthorForm from "../components/AuthorForm"
import axios from "axios"
import { useState } from "react"

export default () => {
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const createAuthor = author => {
        axios.post(`http://localhost:8000/api/author`, author)
            .then(res => {
                navigate("/")
            })
            .catch(err => {
                console.log(err)
                setError(err.response.data.errors.name.message)
            })
    }
    return <div>
        <h1>Favorite Authors</h1>
        <Link to="/">Home</Link>
        <p className="title">Add a new author:</p>
        {error && <>
            <p style={{color: "red"}}>{error}</p>
        </>}
        <AuthorForm onSubmitProp={createAuthor} initialData={[]}/>
    </div>
}