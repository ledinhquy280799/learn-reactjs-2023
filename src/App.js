import React from 'react';
import './App.css';

function App() {
  const name = 'Quy';
  const age = 18;
  const isMale = true;
  const student = {
    name: 'Easy Frontend',
  };
  const colorList = ['red', 'green', 'blue'];

  return (
    <div className="app">
      Learn ReactJS - Easy Frontend

      <p>Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}</p>

      {isMale ? <p>Male</p> : <p>Female</p>}

      {isMale && <p>Male</p>}
      {!isMale && <p>Female</p>}

      {isMale && (
        <div>
          <p>Male 1</p>
          <p>Male 2</p>
          <p>Male 3</p>
        </div>
      )}

      {isMale && (
        <React.Fragment>
          <p>Male 1</p>
          <p>Male 2</p>
          <p>Male 3</p>
        </React.Fragment>
      )}

      {isMale && (
        <>
          <p>Male 1</p>
          <p>Male 2</p>
          <p>Male 3</p>
        </>
      )}

      <p>{student.name}</p>

      <ul>
        {colorList.map(color => (
          <li key={color} style={{ color }}>{color}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
