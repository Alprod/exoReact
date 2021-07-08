import React from "react";
import ReactDOM from "react-dom";
import './styles.css';
import {comments} from './listesChien.mjs'
import {amisChats} from "./listesChats.mjs";

const docElementRootId = document.getElementById('root');
const docElementContentId = document.getElementById('content');
const docElementCardChienId = document.getElementById('cardChien');
const docElementCardChatId = document.getElementById('cardChat');
let lastname = 'germain';
let firstname = 'alain';
//const capitalizerFirstLetter = ([first, ...rest], local = navigator.language)=>first.toLocaleUpperCase(local) + rest.join('');
const capitalize = (word) => (word[0].toUpperCase() + word.slice(1))
const user = {
    nom: lastname,
    prenom: firstname,
    anonime: "inconnue"
};

function Formatname(props) {
    const identity = (props.name) ? capitalize(props.name.nom) + ' ' + capitalize(props.name.prenom) : capitalize(props.name.anonime);
    return <h1 className="text-center fs-1">Bonjour, {identity} ! </h1>;
}

function timer(){
    const element = (
            <div>
               <Formatname name={user}/>
               <h2 className="text-center">Il est <span className="text-danger fs-2 fst-italic fw-bold">{new Date().toLocaleTimeString()}</span></h2>
           </div>
        )
   ReactDOM.render(element, docElementRootId);
}

setInterval(timer, 1000)

function Welcome(props) {
    return <p className="text-center fs-4 mt-5">Bienvenue à toi {capitalize(props.name)}, Voici mon tuto React</p>
}

const vue = <Welcome name={user.prenom}/>
ReactDOM.render(vue,docElementContentId);


function formatDate(props) {
    return props.toLocaleDateString()
}
function Urlimage(props) {
    return (
        <div className="bg-dark">
            <img src={props.user.pictureUrl} className="card-img-top" alt={props.user.prenom}/>
            <div className="card-img-overlay text-white fst-italic fw-light">Photo prise par {capitalize(props.user.prenom)}</div>
        </div>
    );
}
function CardViews(props) {
    return (
        <div className="card">
            <Urlimage user ={props.auteur}/>
            <div className="card-body">
                <h5 className="card-title fs-5">{props.title}</h5>
                <p className="card-text">{props.text}</p>
                <p className="card-text"><small className="text-muted">{formatDate(props.date)}</small></p>
            </div>
        </div>
    );
}
function ArrayContentView(props) {
    return props.cards.map((commentaires)=>
        <div className="col">
            <CardViews
                auteur={commentaires.auteur}
                title={commentaires.titre}
                text={commentaires.texte}
                date={commentaires.date}
            />
        </div>
    )
}
function ViewsCards(props) {
    return (
        <div className="container">
            <h3 className="h2 text-center p-5">Nos amis {props.viewTitle}</h3>
            <div className="row row-cols-1 row-cols-md-4 g-2 p-5">
                <ArrayContentView cards={props.viewCard} />
            </div>
        </div>
    );
}

ReactDOM.render(<ViewsCards viewCard={comments} viewTitle="les chiens"/>, docElementCardChienId);
ReactDOM.render(<ViewsCards viewCard={amisChats} viewTitle="les chats"/>, docElementCardChatId);
