import ExpenseItem from './components/ExpenseItem';

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
      <h2> Let's Get Started with our new React App!</h2>
      <ExpenseItem 
      title={expenses[0].title} 
      amount={expenses[0].amount} 
      date={expenses[0].date}
      > </ExpenseItem>
      <ExpenseItem 
      title={expenses[1].title} 
      amount={expenses[1].amount} 
      date={expenses[1].date}
      > </ExpenseItem>  
      <ExpenseItem 
      title={expenses[2].title} 
      amount={expenses[2].amount} 
      date={expenses[2].date}
      > </ExpenseItem>
      <ExpenseItem 
      title={expenses[3].title} 
      amount={expenses[3].amount} 
      date={expenses[3].date}
      > </ExpenseItem>    
      

      <p> This Paragraph is also visible!</p>
    </div>
  );
}

export default App;
