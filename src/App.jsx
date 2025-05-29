import { useState } from "react";
import Count from "./components/Count";
import CounterButton from "./components/CounterButton";
import Reset from "./components/Reset";
import Title from "./components/Title";

export default function App(){
  const [count, setCount]=useState(0)
  return (
 <>
 <main>
    <div className="card">
      <Title/>
      <Count count={count}/>
      <Reset setCount={setCount}/>
      <CounterButton count={count} setCount={setCount} />
   
    </div>
 </main>
 </>
  )
}