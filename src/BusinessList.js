import React from 'react';
import Business from './Business';

const businessData = [
  {
    id: 1,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    businessName: 'MarginOtto Pizzeria',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'NY',
    zipCode: '10101',
    category: 'Italian',
    rating: 4.5,
    reviewCount: 90
  },
  {
    id: 2,
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    businessName: 'Business Name 2',
    address: '1234 Elm Street',
    city: 'Springfield',
    state: 'IL',
    zipCode: '62701',
    category: 'American',
    rating: 3.5,
    reviewCount: 50
  }
];

function BusinessList() {
  return (
    <div className="BusinessList">
      {businessData.map(business => (
        <Business
          key={business.id}
          imageSrc={business.imageSrc}
          businessName={business.businessName}
          address={business.address}
          city={business.city}
          state={business.state}
          zipCode={business.zipCode}
          category={business.category}
          rating={business.rating}
          reviewCount={business.reviewCount}
        />
      ))}
    </div>
  );
}

export default BusinessList;