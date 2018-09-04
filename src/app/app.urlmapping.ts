export class URLMapper {
    public static get API_URL(): string { return "http://localhost:50161/"; }
    public static get API_SAVE_RECIPE_URL_PATH(): string { return "api/recipe/add"; }
    public static get API_GET_RECIPES_URL_PATH(): string { return "api/recipe/get"; }
    public static get API_DELETE_RECIPE_BY_ID(): string  { return "api/recipe/delete"; }
    public static get API_GET_STORAGE_STATUS_URL_PATH(): string { return "api/Storage"; }
    public static get API_EDIT_STORAGE_STATUS_URL_PATH(): string { return "api/EditStorage"; }
    public static get API_LOGIN_USER_URL_PATH(): string { return "api/User/Login"; }
}