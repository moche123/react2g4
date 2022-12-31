// import { useNavigate } from "react-router-dom";

export const useAuthState = () => {

    // const navigate = useNavigate();

    const checkAuthToken = () => {

        const token = localStorage.getItem('token');
        if ( !token ){
            console.log('NO TOKEN')
            // navigate('/auth/login')
            return 'no-auth'
        }
        console.log('YES TOKEN')
        return 'auth'
    }

    return {
        checkAuthToken
    }


}