import React from "react";

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
        submit.preventDefault();

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
        this.state = {value : 'Écrire votre message...'};

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

class FormSelect extends React.Component{
    constructor(props) {
        super(props);
        this.state = {value : 'Pomme'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({value : event.target.value})
    }
    handleSubmit(event) {
        const area = this.state.value;
        alert('Votre parfum favori est : ' + area);
        event.preventDefault()
    }
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="mb-3 mt-5">
                    <select className="form-select" value={this.state.value} onChange={this.handleChange} aria-label="Default select example">
                        <option value="pomme">Pomme</option>
                        <option value="fraise">Fraise</option>
                        <option value="framboise">Framboise</option>
                        <option value="murs">murs</option>
                    </select>
                </div>
                <input type="submit" className="btn btn-primary" value="Envoyé"/>
            </form>
        )
    }
}

export function TraitementFormulaire(){
    return  (
        <div>
            <NomForm />
            <TextArea />
            <FormSelect />
        </div>
    )
}
