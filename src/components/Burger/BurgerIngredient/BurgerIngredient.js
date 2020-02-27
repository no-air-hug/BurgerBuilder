import React from 'react';
import classes from './BurgerIngredient.css';
import PropTypes from 'prop-types';

const burgerIngredient = (props) =>{
    let ingredient = null;
    //inspects the props types and assigns the variable ingredient to the correct css styling class
    switch(props.type){
        case('bread-bottom'):
            ingredient = <div className={classes.BreadBottom}></div>;
            break;
        case('bread-top'):
            ingredient = (
                <div className={classes.BreadTop}>
                    <div className={classes.Seeds1}></div>
                    <div className={classes.Seeds2}></div>
                </div>
            );
            break;
        case('meat'):
                ingredient = <div className={classes.Meat}></div>
            break;
        case('cheese'):
            ingredient = <div className={classes.Cheese}></div>
            break;
        case('salad'):
                ingredient = <div className={classes.Salad}></div>
            break;
        case('bacon'):
                ingredient = <div className={classes.Bacon}></div>
            break;
        default:
            ingredient = null;
    }
    return ingredient;

};
// sets the PropType to a string and in this case it is required that a string is passed otherwise it will output an error
burgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default burgerIngredient;