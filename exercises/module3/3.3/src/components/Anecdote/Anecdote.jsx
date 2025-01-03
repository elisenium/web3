import react from 'react'

const Anectdote = ({ title, anecdote }) => {
return (
    <div>
        <h1>{title}</h1>
        <p>{anecdote}</p>
    </div>
)
}
export default Anectdote