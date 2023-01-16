import React from 'react';
import {signal} from "@preact/signals-react";

const count = signal(10);

function About(){
    return(
        <div>Value : {count.value}</div>
    )
}

export default About