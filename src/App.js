import React from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

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

  return (
    <div>
      <NewExpense/>
      <Expenses item={expenses}/>  
    </div>
  );
}

export default App;
