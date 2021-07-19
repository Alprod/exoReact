import React from "react";

export const capitalize = (word) => ((word) ? word[0].toUpperCase() + word.slice(1) : 'inconnu')
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
            <div id="emailHelp" className="form-text text-muted fst-italic fs-6">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre.</div>
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

export function LoginButton(props){
    return <input type="submit" className="btn btn-primary" onClick={props.onClick} defaultValue={props.valueButton}/>

}
export function LogoutButton(props){
    return <input type="submit" className="btn btn-success" onClick={props.onClick} defaultValue={props.valueButton} />
}

export class LoginControl extends React.Component{

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
            button = <LogoutButton onClick={this.handleLogoutClick} valueButton="Déconexion"/>
        }else {
            button = <LoginButton onClick={this.handleLoginClick} valueButton="Connexion" />
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
