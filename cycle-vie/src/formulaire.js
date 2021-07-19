import React from "react";
import {LoginButton} from "./loginControl";
import {RecapView} from "./bootstrapCard";

export class Formulaire extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false
        }
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleInputValidButton = this.handleInputValidButton.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }

    handleInputChange(event){
        const target = event.target;
        const name = target.name
        this.setState({
            [name]: target.value
        })
    }

    handleInputValidButton(){
        this.setState({formValid: true})
    }

    handleOnSubmit(e){
        let nom = this.state.name
        console.log(nom)
        e.preventDefault()
    }



    render() {
        return (
            <FormAllView onChange={this.handleInputChange}
                         onClick={this.handleInputValidButton}
                         name={this.state}
                         onSubmit={this.handleOnSubmit}
                         formValid={this.state.formValid}
            />
        )
    }
}

function FormAllView(props){
    const formValid = props.formValid
    if(formValid){
        return <RecapView name={props.name} formValid={formValid}/>
    }
    return <FormulaireInput onClick={props.onClick}
                            onSubmit={props.onSubmit}
                            onChange={props.onChange}
                            formValid={props.formValid}

    />
}

function FormulaireInput(props) {
    return (
        <form onSubmit={props.onSubmit} >
            <FormInput label="Nom" type="text" name="userName" onChange={props.onChange} />
            <FormInput label="Prénom" type="text" name="userPrenom" onChange={props.onChange} />
            <FormInput label="Email" type="email" name="userEmail" onChange={props.onChange} />
            <TextResume label="Description" name="userDescription" onChange={props.onChange} />
            <LoginButton onClick={props.onClick} valueButton="Envoyé" />
        </form>
    )
}


function FormInput(props){
    return (
        <div className="mb-3">
            <label className="form-label">{props.label}</label>
            <input type={props.type}
                   name={props.name}
                   onChange={props.onChange}
                   className="form-control"
            />
        </div>
    )
}

function TextResume(props) {
    return (
        <div className="mb-3 mt-5">
            <label className="form-label">{props.label}</label>
            <textarea name={props.name}
                      id="area"
                      cols="30"
                      rows="10"
                      className="form-control"
                      onChange={props.onChange} />
        </div>
    )
}
