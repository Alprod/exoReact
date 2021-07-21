import React from "react";


function CardBody(props){
    const identity = props.identity
    return (
        <div className="card-body">
            <h5 className="card-title">
                {identity.userName +' '+ identity.userPrenom}
            </h5>
            <p className="card-text">
                {identity.userEmail}
            </p>
            <p className="card-text">
                {identity.userDescription}
            </p>
        </div>
    )
}

export function RecapView(props) {
    const identity = props.name
    return (
        <div className="card text-center">
            <div className="card-header">
                Profile
            </div>
            {Object.keys(identity).length  > 1 ?
                <CardBody identity={identity}/>
                :
                <div className="card-body">
                    <p className="card-text">Pas d'info sur votre profile</p>
                </div>
            }
            <div className="card-footer text-muted">
                React
            </div>
        </div>
    )
}
