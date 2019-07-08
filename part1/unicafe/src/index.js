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

const Statistic = ({ text, value }) => (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
)

const Statistics = (props) => {
    const total = () => {
      return props.bad + props.good + props.neutral
    }

    const average = () => {
      if(total() === 0) {
        return 0
      }
      return props.score/total()
    }

    const positive = () => {
      if(total() === 0) {
        return 0 + '%'
      }
      return props.good/total()*100 + ' %'
    }

    if (total() === 0) {
      return (
        <>
          <Statistic text='No feedback given' />
        </>
      )
    }

    return (
      <div>
        <table>
          <Statistic text='good' value={props.good} />
          <Statistic text='neutral' value={props.neutral} />
          <Statistic text='bad' value={props.bad} />
          <Statistic text="all" value={total()} />
          <Statistic text='average' value={average()} />
          <Statistic text='positive' value={positive()} />
        </table>
      </div>
    )
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

  return (
    <div>
      <Header heading={headings.first} />
      <Button onClick={handleGoodClick} text='good' />
      <Button onClick={handleNeutralClick} text='neutral' />
      <Button onClick={handleBadClick} text='bad' />
      <Header heading={headings.second} />
      <Statistics good={good} bad={bad} neutral={neutral} score={score} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
