export interface LoginModel {
    email: string | null,
}

export interface RegisterModel extends LoginModel {
    fullName: string | null
}
