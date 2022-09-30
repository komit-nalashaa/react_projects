import React,{useState} from 'react'

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  //function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log('Expense Item is evaluated by react!');

  const clickHandler = () => {
    setTitle('Title Update Successfully!');
    console.log(title);
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className= "expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
}

export default ExpenseItem;
