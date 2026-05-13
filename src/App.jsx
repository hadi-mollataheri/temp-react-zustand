import './App.css';
import { useState } from 'react';
import { useCountStore } from './store/count-store';

function App() {
  const [userInput, setUserInput] = useState('0');

  const count = useCountStore((state) => state.count);
  const incrementCount = useCountStore((state) => state.incrementCount);

  const theArray = useCountStore((state) => state.theArray);
  const addToArray = useCountStore((state) => state.addToArray);

  const handleSubmit = (event) => {
    event.preventDefault();

    addToArray(userInput);
  };

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className='app-container flex flex-col items-center justify-center h-250 m-5'>
      <header>
        <h2 className='text-2xl font-bold'>Tasbih</h2>
      </header>
      <main className='text-center'>
        <button
          className='p-5 mb-32 bg-blue-950 rounded-md m-5 active:bg-blue-900 hover:border-3 hover:border-blue-400 transition-colors delay-75 font-bold'
          onClick={incrementCount}
        >
          Count: {count}
        </button>

        {/* Input for getting user input and adding it to an array */}
        <div>
          <form
            className='mb-5 flex flex-col items-center justify-between'
            onSubmit={handleSubmit}
          >
            <label htmlFor='number' className='font-bold'>
              Enter a number for adding to the array:{' '}
            </label>
            <input
              id='number'
              type='number'
              value={userInput}
              onChange={handleChange}
              className='bg-blue-950 my-5 p-2 w-16 font-bold'
            />
            <input
              type='submit'
              value='ENTER'
              className='w-16 p-2 mb-5 delay-75  bg-blue-950 active:bg-blue-900 rounded hover:border-3 hover:border-blue-400 transition block'
            />
          </form>
          <h3 className='my-5 font-bold'>
            The ARRAY OF NUMBERS: {JSON.stringify(theArray)}
          </h3>
        </div>
      </main>
    </div>
  );
}

export default App;

