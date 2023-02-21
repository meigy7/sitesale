import {useSelector} from 'react-redux';

export function useAuth() {
  const {
    email,
    token,
    id
  } = useSelector(s => s.user);

  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}