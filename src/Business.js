import React from 'react'

const business = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    businessName: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
}

function Business() {
    return (
        <div>
            <input type="search"></input>
            <input type="number"></input>
        </div>
    )
}

export default Business;