import { Role } from "./role-type";

export type UserType = {
    id: number,
    firstname: string,
    lastname: string,
    role: Role,
    birthdate: Date,
    gender: number,
    createdAt: Date,
    updatedAt: Date,
}