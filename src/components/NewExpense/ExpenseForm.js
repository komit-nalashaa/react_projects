    import React, {useState} from 'react';
    import './ExpenseForm.css'
    
    const ExpenseForm = () => {
        const [enteredTitle, setEnteredTitle] = useState(''); 
        const [enteredAmount, setEnteredAmount] = useState('');
        const [enteredDate, setEnteredDate] = useState('');
        // const [userInput, setuserInput] = useState({
        //     enteredTitle: '',
        //     enteredAmount: '',
        //     enteredDate: ''
        // })

        const titleChangeHandler = (event) =>{
            setEnteredTitle(event.target.value);
        };
        const amountChangeHandler = (event ) =>{
            setEnteredAmount(event.target.value);
        };
        const dateChangeHandler = (event) => {
            setEnteredDate(event.target.value);
        };

        const submitHandler = (event) => {
            event.preventDefault();

            const expenseData = {
                title: enteredTitle, 
                amount: enteredAmount,
                date: new Date(enteredDate)
            };
            console.log(expenseData);
        };

        return (
            <form onSubmit={submitHandler}> 
                <div className="new-expense__controls">
                    <div className="new-expense__controls"> </div>
                    <label> Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div>
                    <div className="new-expense__controls"> </div>
                    <label> Amount </label>
                    <input type='number' min= "0.01" step= "0.01" value={enteredAmount} onChange={amountChangeHandler} />
                </div>
                <div>
                    <div className="new-expense__controls"> </div>
                    <label> Date</label>
                    <input type="date" min= '01-01-2016' max= '31-12-2022' value= {enteredDate} onChange={dateChangeHandler}/>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'> Add Expenses </button>
                </div>
            </form>
        );

    };

    export default ExpenseForm;