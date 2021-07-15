import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const docElementRootId = document.getElementById('root')
const docElementClockId = document.getElementById('clock')
const docElementClickWithoutBindId = document.getElementById('clickWithoutBind')
const docElementButtonConnexionId = document.getElementById('buttonConnexion')
const docElementListeId = document.getElementById('liste')
const docElementFormId = document.getElementById('form')
const docElementFormAreaId = document.getElementById('formArea')

function FormatDate(props) {
    return <h2 className="text-center"><span className="text-danger fst-italic fw-light">{props.date.toLocaleTimeString()}</span></h2>
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick(){
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1 className="text-center">Bonjour, tout le monde</h1>
                <FormatDate date={this.state.date}/>
            </div>
        )
    }
}



function Application(){
    return (
        <div>
            <Clock/>
        </div>
    )
}

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

ReactDOM.render(
    <ClickWithoutBind/>,
    docElementClickWithoutBindId
)

const capitalize = (word) => ((word) ? word[0].toUpperCase() + word.slice(1) : 'inconnu')
const nomUser = 'marie'

function UserGreeting(props) {
    return <div className="alert alert-success d-grid gap-2 col-8 mx-auto my-4" role="alert">
                <h1 className="text-center fst-italic fw-light">Bienvenue {capitalize(props.user)} !</h1>
            </div>
}

function GuestGreeting(props) {
    return <div className="d-grid gap-2 col-8 mx-auto my-4">
                <div className="alert alert-secondary" role="alert">
                    <h1 className="text-center fst-italic fw-light">Veuillez vous connectez {capitalize(props.user)}.</h1>
                </div>
             <FormConnection/>
            </div>
}

function FormConnection() {
    return <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text fs-6">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Mot de passe</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
            </div>
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if(isLoggedIn) {
        return <UserGreeting user={props.nom}/>
    }
    return <GuestGreeting user={props.nom}/>
}

function LoginButton(props){
    return <button type="submit" className="btn btn-primary" onClick={props.onClick}>
            Connexion
        </button>
}
function LogoutButton(props){
    return <button className="btn btn-success" onClick={props.onClick}>
            Déconnexion
        </button>
}

class LoginControl extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoggeIn: false
        }
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick() {
        this.setState({isLoggeIn: true})
    }

    handleLogoutClick() {
        this.setState({isLoggeIn: false})
    }

    render() {
        const isLoggeIn = this.state.isLoggeIn;
        let  button;
        if(isLoggeIn) {
           button = <LogoutButton onClick={this.handleLogoutClick}/>
        }else {
           button = <LoginButton onClick={this.handleLoginClick} />
        }
        return (
            <form>
                <Greeting isLoggedIn={isLoggeIn} nom={nomUser}/>
                <div className="d-grid col-6 mx-auto">
                    {button}
                </div>
            </form>
        )
    }
}

ReactDOM.render(<LoginControl/>,docElementButtonConnexionId)

const numbers = ['Alain','Julien','Marck','frank', 'julie']
function List(props) {
    const listing = props.listing
    listing.push(props.nom)
    const itemList = listing.map((list) => <li key={list.toString()}>{capitalize(list)}</li>)
    return (
        <ul className="list-unstyled">{itemList}</ul>
    )
}
numbers.push('katrine')
ReactDOM.render(<List listing={numbers} nom="massie"/>, docElementListeId)


class NomForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(change) {
        this.setState({value: change.target.value})
    }

    handleSubmit(submit) {
        const input = this.state.value
        alert((!input) ? 'Veuillez entrer un nom'  : `Le nom a été soumis : ${input}`)
        //submit.preventDefault();

    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Votre nom</label>
                    <input type="text"
                           onChange={this.handleChange}
                           className="form-control"
                           value={this.state.value}
                           id="exampleInputEmail1" />
                </div>
                <input type="submit" className="btn btn-primary" value="Envoyer"/>
            </form>

        )
    }
}

class TextArea extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value : ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value : event.target.value})
    }
    handleSubmit(event) {
        const area = this.state.value;
        alert((!area) ? 'Aucun message envoyé' : 'Un essai à été envoyer il dit : ' + area);
        event.preventDefault()
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3 mt-5">
                    <label htmlFor="textarea" className="form-label">Message</label>
                    <textarea name="textarea"
                              id="area"
                              cols="30"
                              rows="10"
                              className="form-control"
                              value={this.state.value}
                              onChange={this.handleChange} />
                </div>
                <input type="submit" className="btn btn-primary" value="Envoyer"/>
            </form>
        )
    }
}

ReactDOM.render(<NomForm />, docElementFormId)
ReactDOM.render(<TextArea />, docElementFormAreaId)