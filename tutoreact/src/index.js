import React from "react";
import ReactDOM from "react-dom";
import './styles.css';

const docElementRootId = document.getElementById('root');
const docElementContentId = document.getElementById('content');
let lastname = 'doe';
let firstname = 'john';
const capitalizerFirstLetter = ([first, ...rest], local = navigator.language)=>first.toLocaleUpperCase(local) + rest.join('')
const user = {
    nom: lastname,
    prenom: firstname,
    anonimyze: "inconnue"
};

function formatName(props) {
    if(props.nom && props.prenom){
        return <h1 className="text-center">Bonjour, {capitalizerFirstLetter(props.nom)} {capitalizerFirstLetter(props.prenom)} !</h1>
    }
    return props.anonimyze
}

function timer(){
    const element = (
        <div>
            {formatName(user)}
            <h2 className="text-center">Il est <span className="text-danger fs-2 fst-italic fw-bold">{new Date().toLocaleTimeString()}</span></h2>
        </div>
    )
   return ReactDOM.render(element, docElementRootId);
}

setInterval(timer, 1000)

function Welcome(props) {
    return <h1  className="text-center mt-5">Bienvenue à toi, {props.name} sur mon test React</h1>
}

const vue = <Welcome name={user.prenom}/>
ReactDOM.render(vue,docElementContentId);