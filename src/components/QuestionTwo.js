import React, { useState, useEffect } from 'react';
import '../styles/QuestionTwo.css';
import axios from 'axios';

const QuestionTwo = () => {
  const [categories, setCategories] = useState([]);
  const [results, setResults] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const { data } = await axios.get('https://api.publicapis.org/categories');
    setResults(data);
    setCategories(data);
  };

  const handleFilter = (e) => {
    const { value } = e.target;
    setText(value);
    const updatedResult = categories.filter((category) => {
      return category.toLowerCase().includes(value.toLowerCase());
    });
    setResults(updatedResult);
  };

  // console.log('results: ', results);
  // console.log('categories: ', categories);
  return (
    <div className="QuestionTwo">
      <input type="text" value={text} onChange={handleFilter} />
      <table>
        {results &&
          results.map((result, index) => <tr key={index}>{result}</tr>)}
      </table>
    </div>
  );
};

export default QuestionTwo;
