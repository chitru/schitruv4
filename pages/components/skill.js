import React from "react"

function Skill(props) {
    return (
        <div className="about_skill">
            <p>{props.skillTitle} <br/><span>{props.skillDetails}</span></p>
        </div>
    )
}

export default Skill