import { Action } from 'react-fetching-library';
import { USER } from '../../models/Pet.interface';

const fetchUsersList: Action<USER[]> = {
  method: 'GET',
  endpoint: '/data.json',
};

export default fetchUsersList;
