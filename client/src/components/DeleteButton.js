import axios from "axios"

export default props => {
    const {successCallBack, authorId} = props
    const handleClick = () => {
        axios.delete(`http://localhost:8000/api/author/${authorId}`)
            .then(res => successCallBack())
            .catch(err => console.log(err))
        successCallBack()
    }
    return <button onClick={handleClick}>Delete</button>
}