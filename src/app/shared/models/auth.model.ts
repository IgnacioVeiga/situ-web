import { UserRole } from "./user.model"

export interface LogInForm {
    email: string,
    password: string,
    rememberMe: boolean
}

export interface SessionDTO {
    userId: number,
    companyId: number,
    logoImageURL: string,
    email: string,
    fullName: string,
    role: UserRole
}