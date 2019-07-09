import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ onClick, text }) => {
  return (
    <>
      <button onClick={onClick}>
        {text}
      </button>
    </>
  )
}

const Heading = ( props ) => {
  return (
    <>
      <h2>{props.text}</h2>
    </>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(6).fill(0))
  const [mostVoted, setMostVoted] = useState(0)

  const num = () => {
    setSelected(Math.floor(Math.random() * 6));
  }

  const setVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
    getMostVoted()
  }


  const getMostVoted = () => {
    console.log('most voted')
    const arr = Object.values(votes)
    setMostVoted(arr.indexOf(Math.max(...arr)))
  }

  return (
    <div>
      <Heading text='Anecdote of the day'/>
      {props.anecdotes[selected]}
      <br></br>
      has {votes[selected]} votes
      <br></br>
      <Button onClick={setVote} text='vote' />
      <Button onClick={num} text='next anecdote'/>
      <Heading text='Anecdote with most votes' />
      <p>{props.anecdotes[mostVoted]}</p>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
