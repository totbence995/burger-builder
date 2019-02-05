import React from "react"

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './checkoutSummary.css';

const checkoutSummary = (props) => {
    return (
        <div className={classes.checkoutSummary}>
            <h1>It tastes well</h1>
            <div stlye={{width:300,height:300,margin: "auto"}}>
            <Burger ingredients={props.ingredients}/>
            </div>
            <Button clicked type="danger">CANCEL</Button>
            <Button clicked type="danger">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;