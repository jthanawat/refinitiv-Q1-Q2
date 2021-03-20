import React, { useState, useEffect } from 'react';
import '../styles/QuestionOne.css';

const QuestionOne = () => {
  const [number, setNumber] = useState('0');
  const [type, setType] = useState('prime');
  const [output, setOutput] = useState(false);

  useEffect(() => {
    if (type === 'prime') {
      calIsPrime();
    } else if (type === 'fibonacci') {
      calIsFibonacci();
    }
  }, [number, type]);

  const handleNumber = (e) => {
    const { value } = e.target;
    if (value < 0) {
      let newValue = 1;
      return setNumber(newValue);
    }
    if (value % 1 !== 0) {
      let newValue = Math.round(value);
      return setNumber(newValue);
    }

    setNumber(value);
  };

  const calIsPrime = () => {
    if (number === '0' || number === '1') {
      return setOutput(false);
    }
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return setOutput(false);
      }
    }
    setOutput(true);
  };

  const calIsFibonacci = () => {
    if (number === '0' || number === '1') {
      return setOutput(true);
    }
    let n1 = 0;
    let n2 = 1;
    let sum = n1 + n2;

    while (sum <= number) {
      n1 = n2;
      n2 = sum;
      sum = n1 + n2;
      if (sum === Number(number)) {
        return setOutput(true);
      }
    }
    return setOutput(false);
  };

  // console.log(n1, n2, sum);
  // console.log(number, type, output);

  return (
    <div className="QuestionOne">
      <div className="QuestionOne-ColumnOne">
        <input type="number" value={number} onChange={handleNumber} />
      </div>
      <div className="QuestionOne-ColumnTwo">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value={'prime'}>isPrime</option>
          <option value={'fibonacci'}>isFibonacci</option>
        </select>
      </div>
      <div className="QuestionOne-ColumnThree">{String(output)}</div>
    </div>
  );
};

export default QuestionOne;
