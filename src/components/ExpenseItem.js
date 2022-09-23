import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

function ExpenseItem(props) {
  let title = props.title; 

  const clickHandler = () => {
    console.log("Clicked!!!");
  }
  return (
    <Card className="expense-item">
      <div className= "expense-item__description">
        <ExpenseDate date={props.date}/>
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>change Title</button>
    </Card>
  );
}

export default ExpenseItem;
