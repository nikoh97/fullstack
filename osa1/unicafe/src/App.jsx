import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}> {text}</button>

    )
    
        

}

    const Statistics = ({good, neutral, bad}) => {
return (
    <table>
        <StatRivi text="good" arvo={good}/>
        <StatRivi text="neutral" arvo={neutral}/>
        <StatRivi text="bad" arvo={bad}/>
    </table>
)
        
    }

    const StatRivi = ({teksti,arvo}) => {
        return (
        <tr>
        <td>{teksti}</td>
        <td>{arvo}</td>
        </tr>
        )
    }



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>

      <h1>give feedback</h1>
        <Button handleClick={() => setGood(good + 1)} text="good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="bad"/>


      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad}/>    




    </div>
  )
}

export default App