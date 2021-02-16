import React, { useState } from 'react';

import { USER } from '../models/Pet.interface';

const User = ({ firstName, lastName, age, image }: USER): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggle = (): void => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      style={{
        border: '2px solid black',
        width: '60vw',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
      }}
    >
      <button type="button" onClick={toggle}>
        {isOpen ? 'Close' : 'Open'}
      </button>
      {isOpen && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <div>
            <p>{firstName}</p>
            <p>{lastName}</p>
            <p>{age} ans</p>
          </div>
          <div
            style={{
              width: '20vw',
              height: '15vw',
              backgroundImage: `url(${image})`,
              backgroundSize: 'cover',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default User;
