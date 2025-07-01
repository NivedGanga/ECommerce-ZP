
import { getAuth, isSignInWithEmailLink, updateProfile } from "firebase/auth";
import { toast } from 'react-toastify/unstyled';
import { useAuthService } from '@/core_components/services/auth_service/useAuthService';
import { useDispatch } from "react-redux";
import { loginUser } from "@/core_components/redux/slices/auth_slice/authSlice";
import { extractCurrentUser } from "@/core_components/models/currentUser/currentUser";
import { useCartItems } from "../cart_items/useCartItems";
export const useAuthStatusCheck = () => {
    const auth = getAuth();
    const dispatch = useDispatch()
    const { completeEmailLinkSignIn } = useAuthService();
    const { fetchCartItems } = useCartItems()
    const completeAuthentication = () => {
        if (isSignInWithEmailLink(auth, window.location.href)) {
            completeEmailLinkSignIn(window.location.href, async (user) => {
                try {
                    const fullName = window.localStorage.getItem('userFullName');
                    if (fullName) {
                        await updateProfile(user, {
                            displayName: fullName
                        });
                        window.localStorage.removeItem('userFullName');
                    }
                    //update state
                    dispatch(loginUser(extractCurrentUser(user)))
                    fetchCartItems(extractCurrentUser(user))
                    toast.success('Email verified successfully!');
                    window.location.href = '/'
                } catch (error) {
                    console.error('Error updating profile:', error);
                    toast.error('Email verified but failed to update profile');
                }
            }, (error) => {
                toast.error(`Authentication failed: ${error}`);
            });
        }
    }
    return {
        completeAuthentication
    }
}