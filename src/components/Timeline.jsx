import React from 'react'
import Chirp from './Chirp'

let Timeline = (props) => {
    return props.chirps.map((oneChirp)=><Chirp chippy={oneChirp}/>)
}
export default Timeline