export interface LoginModel {
    email: string
}

export interface RegisterModel extends LoginModel {
    fullName: string
}
