import React from "react"
import Link from "next/link"

function Social(props) {
    return(
        <Link target="_blank" href={props.url}>{props.site}</Link>
    )
}

export default Social