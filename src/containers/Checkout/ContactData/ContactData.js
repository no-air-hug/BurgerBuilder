import React,{ Component } from "react";
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component{
    state={
        orderForm:{
            name:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder:'Your Name'
                },
                value:'',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            street:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder:'Street'
                },
                value:'',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            zip:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder:'ZIP Code'
                },
                value:'',
                validation:{
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false,
                touched: false
            },
            country:{
                elementType: 'input',
                elementConfig: {
                    type:'text',
                    placeholder:'Country'
                },
                value:'',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            email:{
                elementType: 'input',
                elementConfig: {
                    type:'email',
                    placeholder:'E-Mail'
                },
                value:'',
                validation:{
                    required: true
                },
                valid: false,
                touched: false
            },
            deliveryMethod:{
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'cheapest', displayValue: 'Cheapest'},
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'fattest', displayValue: 'Construction Crane'}]
                },
                value:'cheapest',
                valid: true,
                validation:{}
            },
        },
        formIsValid: false,
        loading: false
    }

    orderHandler = (event) =>{
        event.preventDefault();
        this.setState({loading: true});
        const formData = {};
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price, // should be calculated on the server to prevent user data manipulation
            orderData: formData
        }
        axios.post('/orders.json', order)
            .then( response => {
                this.setState({loading: false});
                this.props.history.push('/');
            })
            .catch(error => {
                this.setState({loading: false});
            }); // adding json 'endpoint' for firebase
    }

    checkValidity(value, rules){
        let isValid = true;
        if(rules.required){
            isValid= value.trim() !== '' && isValid;  // if its = to an empty string it will not be valid
        }

    if(rules.minLength){
        isValid = value.length >= rules.minLength && isValid;
    }
    if(rules.maxLength){
        isValid = value.length <= rules.maxLength && isValid;
    }
        return isValid;
    }

    inputChangedHandler = (event, inputIdentifier) => {
        const updatedOrderForm ={
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        
        let formIsValid = true;
        for(let inputIdentifier in updatedOrderForm){
            formIsValid = (updatedOrderForm[inputIdentifier].valid && formIsValid);
        }
        console.log(formIsValid);

        this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
    }
    
    render(){
        const formElementsArray=[];
        for(let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }

        let form = (
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id} 
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)}
                    />
                ))}
                <Button btnType="Success" disabled={!this.state.formIsValid}>Order</Button>
            </form>
        );
        if (this.state.loading){
            form = <Spinner/>;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter your contact details</h4>
                {form}
            </div>
        )
    }
}

export default ContactData;