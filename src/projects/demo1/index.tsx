import { createRoot } from 'react-dom/client'
import styles from './index.module.scss'
import * as React from 'react'
import { useEffect, useState } from 'react'
import { add } from '../../utils/index'
const App = () => {
    const [count, setCount] = useState<number>(0)
    const [result, setResult] = useState(0)
    useEffect(() => {
        setResult(add(count))
    }, [count])
    return (
        <div className={styles.main}>
            <text>hello world!</text>
            <h1 className={styles.text}>{result}</h1>
            <button onClick={() => setCount(count + 1)} >click</button>
        </div>
    )
}

const root = document.getElementById('root') as HTMLElement
createRoot(root).render(<App />)