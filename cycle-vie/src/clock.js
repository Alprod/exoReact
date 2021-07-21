import React from "react";


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



export function Application(){
    return (
        <div>
            <Clock/>
        </div>
    )
}
