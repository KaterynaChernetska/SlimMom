import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
    selectPendingUserData,
} from '../redux/authorization/authSelectors';


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectPendingUserData);

    return {
        isLoggedIn,
        isRefreshing,
    };
};