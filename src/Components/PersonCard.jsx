import React from 'react';

const PersonCard=props=>{
    return (
        <div className="container">
            {props.data.map((person, i)=>(
                <div className = "card" key={i}>
                <div
                    className="card-header"
                    style={{ backgroundColor: "rebeccaPurple", color: "white" }}
                >
                    <p>
                        <h2>
                            {person.fName} {person.lName}
                        </h2>
                    </p>
                </div>
                <div className="card-body">
                    <p>Age: {person.age}</p>
                    <p>Hair Color: {person.hairColor}</p>
                </div>
                <button className="btn btn-info" onClick={(e) => console.log("Happy Birthday!")}
                >Birthday Button for {person.fName} {person.lName}</button>
              </div >
    
            ))}

        </div>
    )
}

export default PersonCard;