import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { showGreetings } from './redux/Greeting/greeting';

const Greetings = () => {
  const { greetings, loading } = useSelector((state) => state.message);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(showGreetings());
  }, []);

  const randomGreeting =
    greetings[Math.floor(Math.random() * greetings.length)];

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <h1>
          {randomGreeting ? randomGreeting.content : 'No greetings found'}
        </h1>
      )}
    </div>
  );
};

export default Greetings;
