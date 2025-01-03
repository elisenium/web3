import React from 'react'
import NextAnecdote from '../NextAnecdote/NextAnecdote'

const Vote = ({ anecdote, votes, onVote, handleClick }) => {
  return (
    <div>
      <p>has {votes} votes</p>
      <button onClick={onVote}>vote</button>
      <NextAnecdote handleClick={handleClick} />
    </div>
  )
}

export default Vote