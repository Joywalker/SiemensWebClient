export class URLMapper {
    public static get API_URL(): string { return "http://localhost:50161/"; }
<<<<<<< HEAD
    public static get API_SAVE_RECIPE_URL_PATH(): string { return "recipe/add"; }
    public static get API_GET_RECIPES_URL_PATH(): string { return "recipe/get"; }
    public static get API_GET_STORAGE_STATUS_URL_PATH(): string { return "api/Storage"; }
    public static get API_EDIT_STORAGE_STATUS_URL_PATH(): string { return "api/EditStorage"; }
    public static get API_LOGIN_USER_URL_PATH(): string { return "api/User/Login"; }
    public static get API_REGISTER_USER_URL_PATH(): string { return "api/User/Register"; }
=======
    public static get API_SAVE_RECIPE_URL_PATH(): string { return "api/recipe/add"; }
    public static get API_GET_RECIPES_URL_PATH(): string { return "api/recipe/get"; }
    public static get API_DELETE_RECIPE_BY_ID(): string  { return "api/recipe/delete"; }
    public static get API_GET_STORAGE_STATUS_URL_PATH(): string { return "api/storage"; }
    public static get API_EDIT_STORAGE_STATUS_URL_PATH(): string { return "api/editStorage"; }
    public static get API_LOGIN_USER_URL_PATH(): string { return "api/user/login"; }
    public static get API_CHECK_IF_USER_EXISTS(): string { return "api/user/recover"; }
    public static get API_UPDATE_USER_PASSWORD(): string { return "api/user/updatePassword"; }
    public static get API_REGISTER_NEW_USER(): string { return "api/user/register"; }
>>>>>>> a56c50629850f7937c1239546bba9369b3f9a36a
}