import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchGreeting } from '../redux/greetingSlice';

const Greetings = () => {
  const greeting = useSelector((state) => state.greeting.greeting);
  const dispatch = useDispatch();
  return (
    <div className="greeting">
      <h1>{greeting}</h1>
      <button
        type="button"
        onClick={() => dispatch(fetchGreeting())}
      >
        Greeting
      </button>
    </div>
  );
};

export default Greetings;
