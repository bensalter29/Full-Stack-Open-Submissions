import { useState } from 'react'

const GetAverageFeedback = ({good, bad, total}) => {

    // Average is zero if there hasn't been any clicks
    if (total === 0) return 0

    return (good - bad) / total
}

const GetPositiveFeedback = ({good, total}) => {
    if (good === 0) return 0
    return good / total
}

const StatisticLine = ({text, value}) => <tr><td>{text}</td><td>{value}</td></tr>

const Statistics = ({good, neutral, bad, total}) => {

    if (total === 0) return <p>No feedback given</p>

    return (
        <div>
            <table>
                <tbody>
                    <StatisticLine text={'good'} value={good}/>
                    <StatisticLine text={'neutral'} value={neutral}/>
                    <StatisticLine text={'bad'} value={bad}/>
                    <StatisticLine text={'all'} value={total}/>
                    <StatisticLine text={'average'} value={GetAverageFeedback({good, bad, total})}/>
                    <StatisticLine text={'positive'} value={GetPositiveFeedback({good, total})}/>
                </tbody>
            </table>
        </div>
    )
}

const Header = ({text}) => <h1>{text}</h1>

const Button = ({text, handleClick}) => <button onClick={handleClick}>{text}</button>

const App = () => {
    // save clicks of each button to its own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [total, setTotal] = useState(0)

    const IncreaseGood = () => {
        setGood(good + 1)
        setTotal(total + 1)
    }

    const IncreaseNeutral = () => {
        setNeutral(neutral + 1)
        setTotal(total + 1)
    }

    const IncreaseBad = () => {
        setBad(bad + 1)
        setTotal(total + 1)
    }

    return (
        <div>
            <Header text={"give feedback"} />
            <Button text={"good"} handleClick={() => IncreaseGood()} />
            <Button text={"neutral"} handleClick={() => IncreaseNeutral()} />
            <Button text={"bad"} handleClick={() => IncreaseBad()} />

            <Header text={"statistics"} />
            <Statistics good={good} neutral={neutral} bad={bad} total={total}/>
        </div>
    )
}

export default App