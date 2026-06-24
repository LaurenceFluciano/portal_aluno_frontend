import { createContext } from 'react';

const UserContext = createContext({
  user: { name: '', email: '' },
  setUser: () => {}
});

export default UserContext;