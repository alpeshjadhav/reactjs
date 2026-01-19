import { useState } from "react"

const App = () => {
  const [num, setNum] = useState(0);

  const increaseNum = () => {
    setNum(num + 1);
  }

  const decreaseNum = () => {
    setNum(num - 1);
  }

  const reset = () => {
    setNum(0);
  }

  return (
    <div className="h-screen bg-slate-400 text-center">
      <h1 className="p-4 font-bold text-3xl">useState hook</h1>
      <hr className="w-100 mx-auto border-black" />
      <h1 className="p-4 font-bold text-6xl">{num}</h1>

      <button onClick={increaseNum} className="p-4 m-2 border rounded-2xl cursor-pointer bg-green-600 active:scale-95 text-white">
        Increase
      </button>
      <button onClick={decreaseNum} className="p-4 m-2 border rounded-2xl cursor-pointer bg-blue-600 active:scale-95 text-white">
        Decrease
      </button>
      <button onClick={reset} className="p-4 m-2 border rounded-2xl cursor-pointer bg-red-600 active:scale-95 text-white">
        Reset
      </button>
    </div>
  )
}

export default App
