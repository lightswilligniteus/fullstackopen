import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return (
    <h1>{props.heading}</h1>
  )
}

const Button = ({ onClick, text }) => (
  <button onClick={onClick}>
    {text}
  </button>
)

const Output = ({ text, num }) => (
  <p>{text} {num}</p>
)

const Statistics = (props) => {

}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [score, setScore] = useState(0)

  const headings = {
    first: 'give feedback',
    second: 'statistics'
  }

  const setToValue = (value) => setScore(value)

  const handleGoodClick = () => {
    setGood(good + 1)
    setToValue(score + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
    setToValue(score - 1)
  }

  const total = () => {
    return bad + good + neutral
  }

  const average = () => {
    if(total() === 0) {
      return 0
    }
    return score/total()
  }

  const positive = () => {
    if(total() === 0) {
      return 0 + '%'
    }
    return good/total()*100 + ' %'
  }

  return (
    <div>
      <Header heading={headings.first} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header heading={headings.second} />
      <Output text='good' num={good} />
      <Output text='neutral' num={neutral} />
      <Output text='bad' num={bad} />
      <Output text='all' num={total()} />
      <Output text='average' num={average()} />
      <Output text='positive' num={positive()} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
