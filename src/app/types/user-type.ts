import { RoleType } from "./role-type";

export type UserType = {
    id: number,
    firstname: string,
    lastname: string,
    role: RoleType,
    birthdate: Date,
    gender: number,
    createdAt: Date,
    updatedAt: Date,
}