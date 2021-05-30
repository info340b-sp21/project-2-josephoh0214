import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';
import SAMPLE_DATA from './nutritionData.json';

ReactDOM.render(<App data = { SAMPLE_DATA }/>, document.getElementById('root'));

