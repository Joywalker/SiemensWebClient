export class URLMapper {
    public static get API_URL(): string { return "http://localhost:50161/"; }
    public static get API_GET_RECIPES_URL_PATH(): string { return "api/recipe/get"; }
    public static get API_GET_ALL_USERS(): string { return "api/user/all"; }
    public static get API_GET_USER_RIGHTS(): string { return "api/user/getPermissions"; }
    public static get API_GET_STORAGE_STATUS_URL_PATH(): string { return "api/Storage"; }
    public static get API_GET_STOCK_DATA(): string { return "api/stock/viewAll"; }
    public static get API_GET_STOCK_GRAPH_DATA(): string { return "api/stock/lastMonthEv"; }
    public static get API_DELETE_RECIPE_BY_ID(): string  { return "api/recipe/delete"; }
    public static get API_GET_STORAGE_GET_INFO(): string { return "api/Storage/getOptions"; }
    public static get API_EDIT_STORAGE_STATUS_URL_PATH(): string { return "api/editStorage"; }
    public static get API_LOGIN_USER_URL_PATH(): string { return "api/user/login"; }
    public static get API_CHECK_IF_USER_EXISTS(): string { return "api/user/recover"; }
    public static get API_UPDATE_USER_PASSWORD(): string { return "api/user/updatePassword"; }
    public static get API_REGISTER_NEW_USER(): string { return "api/user/register"; }
    public static get API_SAVE_RECIPE_URL_PATH(): string { return "api/recipe/add"; }
}