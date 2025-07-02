
import { getAuth, signInWithEmailLink, sendSignInLinkToEmail, User } from "firebase/auth";
import { app } from "../../../../firebase.config";

export const useAuthService = () => {
    const auth = getAuth(app);
    const actionCodeSettings = {
        url: `http://${process.env.NEXT_PUBLIC_DOMAIN}/authstatus`,
        handleCodeInApp: true,
    };

    const sendEmailLinkService = async (email: string, onSuccess: () => void, onError: (error: string) => void) => {
        try {
            await sendSignInLinkToEmail(auth, email, actionCodeSettings);
            window.localStorage.setItem('emailForSignIn', email);
            onSuccess();
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to send email link';
            onError(errorMessage);
        }
    };

    const completeEmailLinkSignIn = async (emailLink: string, onSuccess: (user: User) => void, onError: (error: string) => void) => {
        try {
            const email = window.localStorage.getItem('emailForSignIn');
            if (!email) {
                onError('Email not found. Please try the registration process again.');
                return;
            }
            const result = await signInWithEmailLink(auth, email, emailLink);
            window.localStorage.removeItem('emailForSignIn');
            onSuccess(result.user);
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to complete sign-in';
            onError(errorMessage);
        }
    };

    const logout = async (onSuccess: () => void, onError: (error: string) => void) => {
        try {
            await auth.signOut();
            onSuccess();
        } catch (error: unknown) {
            const errorMessage = error instanceof Error ? error.message : 'Failed to sign out';
            onError(errorMessage);
        }
    };

    return {
        sendEmailLinkService,
        completeEmailLinkSignIn,
        logout
    }
}