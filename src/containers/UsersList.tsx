import React from 'react';
import { useQuery } from 'react-fetching-library';

import User from '../components/User';

import fetchUsersList from '../API/actions/actions';
import { USER } from '../models/Pet.interface';

function UsersList(): JSX.Element {
  const { loading, payload, error } = useQuery({
    ...fetchUsersList,
  });

  return (
    <div>
      {loading && <p>Loading...</p>}
      {!loading && error && <p>{error}</p>}
      {!loading &&
        !error &&
        payload.map((user: USER) => {
          return <User key={user.firstName} {...user} />;
        })}
    </div>
  );
}

export default UsersList;
