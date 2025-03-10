import { useState } from 'react'
import NextAnecdote from '../NextAnecdote/NextAnecdote'
import Vote from '../Vote/Vote'
import Anecdote from '../Anecdote/Anecdote'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)

  const randomAnecdote = () => {
    let randomIndex;
    do {
      randomIndex = Math.floor(Math.random() * anecdotes.length);
    } while (randomIndex === selected);
    setSelected(randomIndex);
  }

  const initVotes = () => {
    const votes = new Array(anecdotes.length).fill(0)
    return votes
  }

  const [votes, setVotes] = useState(initVotes)

  const vote = (index) => {
    const copyVotes = [...votes]
    copyVotes[index] += 1
    setVotes(copyVotes)
  }

  return (
    <div>
      <Anecdote title="Anecdote of the day" anecdote={anecdotes[selected]} />
      <Vote 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]} 
        onVote={() => vote(selected)} 
        handleClick={randomAnecdote}
      />
      <Anecdote title="Anecdote with most votes" anecdote={anecdotes[votes.indexOf(Math.max(...votes))]} />
    </div>
  )
}

export default App