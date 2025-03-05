import { useEffect, useState } from 'react';
import { getMessage } from './axios';
import './App.css'

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await getMessage();
        setMessage(response.data.message);
      } catch (error) {
        console.error(`Error fetching message: ${error}`);
      }
    }

    fetchMessage();
  }, []);

  return (
    <>
      <h1>{message}</h1>
    </>
  )
}

export default App
