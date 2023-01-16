import {useStore} from "./index";
import React from "react";

export default function Home(){
    const [bears, increasePopulation, removeAllBears] = useStore((state) => [state.bears, state.increasePopulation, state.removeAllBears]);
    return (
        <>
       <div>There are {bears} here</div>
        <button onClick={increasePopulation}>Increase</button>
            <button onClick={removeAllBears}>Remove</button>
        </>
)
}