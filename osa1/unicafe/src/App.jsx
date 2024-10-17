import { useState } from 'react'

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}> {text}</button>

    )
    
        

}

    const Statistics = ({good, neutral, bad}) => {
      const kaikki = good + neutral + bad
      const kaikkiKa = good - bad
      const ka = kaikkiKa / kaikki
      const posi = 100 * (good / kaikki)
return (
    <table>
        <StatRivi text="good" arvo={good}/>
        <StatRivi text="neutral" arvo={neutral}/>
        <StatRivi text="bad" arvo={bad}/>
        <StatRivi text="all" arvo={kaikki}/>
        <StatRivi text="average" arvo={ka}/>
        <StatRivi text="positive" arvo={posi + ' %'}/>

    </table>
)
        
    }

    const StatRivi = ({text,arvo}) => {
        return (
        <tr>
        <td>{text}</td>
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