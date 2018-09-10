export class User {
    Username: string;
    Role: string;
    constructor(public username: string, public role: string)
    {
        this.Username = username;
        this.Role = role;
    }
}
export enum UserTypes
{
    "ADMIN",
    "OPERATOR",
    "ENGINEER"
}

export enum PermissionsEnum
{
    CAN_VIEW_PRODUCT_STOCK,
    CAN_VIEW_STORAGE,
    CAN_VIEW_FEEDSTOCK,
    CAN_DO_ORDERS,
    CAN_RESSUPLY,
    CAN_EDIT_FEEDSTOCK,
    CAN_EDIT_STORAGE,
    CAN_EDIT_PRODUCT_STOCK,
    CAN_EDIT_ORDERS,
    CAN_VIEW_STOCK_GRAPH,
    CAN_VIEW_SOLD_PRODUCTS_GRAPH,
    CAN_CREATE_USERS,
    CAN_EDIT_USER_RIGHTS
}

