import { RegisterModel } from "@/core_components/models/authModel/authModel"
import { createUserWithEmailAndPassword, getAuth, updateProfile, User } from "firebase/auth";

export const useAuthService = () => {
    const registerUserService = async (registerModel: RegisterModel, onSuccess: (user: User) => void, onError: (error: string) => void) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, registerModel.email, registerModel.password)
            .then(async (userCredential) => {
                await updateProfile(userCredential.user, {
                    displayName: registerModel.fullName
                });
                onSuccess(userCredential.user)
            })
            .catch((error) => {
                onError(error)
            })
    }
    
    return {
        registerUserService
    }
}