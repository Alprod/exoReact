import React from 'react';
import ReactDOM from 'react-dom';
import {Application} from "./clock";
import {LoginControl, capitalize} from "./loginControl";
import {TraitementFormulaire} from "./traitementFormulaire";
import {Formulaire} from "./formulaire";
import './styles.css';

const docElementRootId = document.getElementById('root')
const docElementClockId = document.getElementById('clock')
const docElementClickWithoutBindId = document.getElementById('clickWithoutBind')
const docElementButtonConnexionId = document.getElementById('buttonConnexion')
const docElementListeId = document.getElementById('liste')
const docElementFormId = document.getElementById('form')
const docElementFormlaireId = document.getElementById('formulaire')
const docElementCompteurId = document.getElementById('compteur')



//Horloge
ReactDOM.render(<Application/>, docElementClockId)

//Avec le bind
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn : true,
        }
        //Une liaison afin d'utiliser le "this"
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }))
    }

    render() {
        return (
            <div className="d-grid gap-2 col-6 mx-auto my-4">
                <button className={`btn btn-lg  ${(this.state.isToggleOn) ? 'btn-success' : 'btn-dark'}`}
                        onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Oui' : 'Non'}
                </button>
            </div>
        )
    }
}
ReactDOM.render(<Toggle/>, docElementRootId)

//Sans le bind
class ClickWithoutBind extends React.Component{
    handleClick = () => {
        alert("c'est cliqué")
    }

    render() {
        //Cela nous assure que 'this' est bien lié mais ce n'est obliger de mettre ()
        return (
            <div className="d-grid gap-2 col-6 mx-auto my-4">
                <button className="btn btn-info" onClick={this.handleClick}> clique ici </button>
            </div>
        )
    }
}

ReactDOM.render(<ClickWithoutBind/>, docElementClickWithoutBindId)

//Controle lors du submit
ReactDOM.render(<LoginControl/>,docElementButtonConnexionId)

//Mapping d'un array
const numbers = ['Alain','Julien','Marck','frank', 'julie']
function List(props) {
    const listing = props.listing
    listing.push(props.nom)
    //Assignier "key" afin de donner une valeur aux clés de votre tableau
    const itemList = listing.map((list) => <li key={list.toString()}>{capitalize(list)}</li>)
    return (
        <ul className="list-unstyled">{itemList}</ul>
    )
}
numbers.push('katrine')
ReactDOM.render(<List listing={numbers} nom="massie"/>, docElementListeId)

ReactDOM.render(<TraitementFormulaire />, docElementFormId)

ReactDOM.render(<Formulaire />, docElementFormlaireId)

class Compteur extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.newCounterValue = this.newCounterValue.bind(this)
    }

    newCounterValue(){
        this.setState( (prevState, props) => {
            return {count: prevState.count + 1}
        })
    }

    render() {
        return (
            <div className="my-5">
                <p>Nombre de click : {this.state.count}</p>
                <button className="btn btn-info" onClick={this.newCounterValue}> Appui là abruti</button>
            </div>
        )
    }
}

ReactDOM.render(<Compteur />, docElementCompteurId)