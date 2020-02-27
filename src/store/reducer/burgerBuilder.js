import * as actionTypes from '../actions/actionTypes';
import updatedObject from '../utility';

const initialState={
    ingredients: {
        salad:0,
        bacon:0,
        cheese:0,
        meat:0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES ={
    salad:0.5,
    cheese:0.4,
    meat:1.3,
    bacon:0.7
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.ADD_INGREDIENT:
            // return updatedObject(state, {ingredients: state.ingredients.concat({id: ingName})
            //     ...state.ingredients,
            //     [action.ingredientName]: state.ingredients[action.ingredientName] + 1
            // } )
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return{
                ...state,
                ingredients:{
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName] //takes old price state and updates according to the ingredient name
            };
        default:
            return state;
    }
    return state;
};

export default reducer;