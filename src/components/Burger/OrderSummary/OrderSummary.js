import React from 'react';

import Aux from '../../../hoc/Auxiliary';

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients.map(ingredient => {
        return <li>{ingredient}</li>
    });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
        </Aux>
    );
}

export default orderSummary;