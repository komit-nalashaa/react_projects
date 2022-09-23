import React from 'react';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { id: 'e1', 
      title: 'Pager', 
      amount: 30.3, 
      date: new Date(2022, 1, 15)
    },
    { id: 'e2', 
      title: 'Car Insurance', 
      amount: 340.3, 
      date: new Date(2022, 2, 25)
    },
    { id: 'e4', 
      title: 'Furniture', 
      amount: 540.3, 
      date: new Date(2022, 4, 13)
    },
    { id: 'e5', 
      title: 'Utensils', 
      amount: 2340.3, 
      date: new Date(2022, 5, 34)
    },
  ];

  // return React.createElement(
  //   'div',
  //   {},
  //   React.createElement('h2', {}, "Let's Get Started!"),
  //   React.createElement(Expenses, {items: expenses })
  // );

  return (
    <div>
      <h2> Let's Get Started with our new React App!</h2>
      <Expenses item={expenses}/>  
    </div>
  );
}

export default App;
