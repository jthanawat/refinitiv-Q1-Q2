import React, { useState } from 'react';
import QuestionOne from './components/QuestionOne';
import QuestionTwo from './components/QuestionTwo';
import './App.css';

function App() {
  const [toggleQuestion, setToggleQuestion] = useState(false);

  return (
    <div className="App">
      <nav>
        <ul>
          <li onClick={() => setToggleQuestion(false)}>Question 1</li>
          <li onClick={() => setToggleQuestion(true)}>Question 2</li>
        </ul>
      </nav>
      {/* <div className="Question"> */}
      {toggleQuestion ? <QuestionTwo /> : <QuestionOne />}
      {/* </div> */}
    </div>
  );
}

export default App;
