import React from 'react';
import Auxilary from '../../../hoc/Auxiliary/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) =>{

        const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>);
            });
        return(
        <Auxilary>
            <h3>Your Order</h3>
            <p>A burger with the freshest of the follow ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total price: {props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button 
                btnType="Danger"
                clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button 
                btnType="Success"
                clicked={props.purchaseContinued}>CONTINUE</Button>
        </Auxilary>
        );
    }
    


export default orderSummary;