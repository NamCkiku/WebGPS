export class ApiUri {

    public static  GET_LOGIN = "/api/v2/authentcation/loginaccount";

    public static  POST_CHANGE_PASS = "api/authentcation/changepassword";

    public static  POST_LOGOUT = "api/authentcation/logout";

    public static  GET_MOBILEVERSION = "api/v2/version/getbyos";

    public static  GET_DATABASEVERSION = "api/v2/menu/getdatabaseversions";

    public static  GET_MOBILERESOURCE = "api/menu/getresourcebyculture";

    public static  GET_LANGUAGETYPE = "api/language/getalllanguage";

    public static  POST_UPDATELANGUAGEUSER = "api/language/updatelanguagebyuser";

    public static  GET_MOBILECONFIG = "api/mobileconfigurations/getall";


    public static  GET_VEHICLE_LIST = "api/vehicles/getlistvehicleplate";

    public static  GET_VEHICLEONLINE = "api/v2/vehicles/getlistvehicleonline";

    public static  GET_VEHICLE_GROUP = "api/vehicles/getlistgroups";

    public static  GET_VEHICLE_COMPANY = "api/vehicles/getlistcompanyid";

    public static  GET_VEHICLE_ROUTE_HISTORY = "api/v2/route/gethistoryroute";

    public static  GET_VALIDATE_USER_CONFIG_ROUTE_HISTORY = "api/route/validationuserconfiggethistoryroute";

    public static  GET_LIST_POLYGON = "api/landmark/polygon";



    // Đổi thành post vì quá nhiều xe => url quá dài, dài quá 2000 ký tự thì sẽ ko xử lý được
    // Đổi thành phương thức post
    public static  GET_ALERT_ONLINE = "api/alerts/getalert";

    public static  GET_COUNT_ALERT_ONLINE = "api/v2/alerts/countalert";

    public static  GET_ALERT_TYPE = "api/alerts/getalerttype";

    public static  POST_ALERT_HANDLE = "api/alerts/handlealert";


    public static  GET_HOME_MENU = "/api/v2/menu/getmenubyculture";
    public static  POST_SAVE_CONFIG_HOME_MENU = "api/menu/insertupdateusersettingmenu";


    public static  POST_SAVE_FEEDBACK = "api/admin/feedback";
    public static  GET_FEEDBACK_TYPE = "api/category/getcategoryfeedbacktype";



    public static  GET_GETADDRESSBYLATLNG = "api/geocode/getaddressbylatlng";


    public static  REGISTERCONSULT = "api/support/register";

    public static  GET_LISTTRANSPORTTYPES = "api/category/getlisttransporttypes";

    public static  GET_LISTPROVINCES = "api/category/getlistprovinces";



    public static  VALIDATEPHONEBYUSER = "api/authentcation/validatephonebyuser";

    public static  SENDVERIFYCODE = "api/sms/sendverifycode";

    public static  CHECKVERIFYCODE = "api/sms/checkverifycode";

    public static  CHANGEPASSWORDFORGET = "api/authentcation/changepasswordforget";



    public static  CATEGORY_LIST_GENDER = "api/category/getcategorygender";
    public static  CATEGORY_LIST_RELIGION = "api/category/getcategoryreligion";



    public static  USER_UPDATE_AVATAR = "api/image/uploadimageuser";
    public static  USER_UPDATE_INFO = "api/user/updateuserinfor";
    public static  USER_SET_SETTINGS = "api/user/setusersetting";
    public static  ADMIN_USER_SET_SETTINGS = "api/user/userconfiguration";


    public static  GET_VEHICLEPLATEDEBTMONEY_AUTOCOMPLETE = "api/vehicles/getlistexpired";
    public static  GET_LISTVEHICLEDEBTMONEY = "api/vehicles/getlistexpired";


    public static  GET_VEHICLEDETAIL = "api/v2/vehicles/getvehicledetail";

    public static  GET_ADDRESSESBYLATLNG = "api/address/batchaddress";



    public static  GET_REPORTTEMPERATURE = "api/reports/temperature";
    public static  GET_REPORTADDRESS = "api/reports/address";
    public static  GET_MACHINEVEHICLE = "api/reports/machine";
    public static  GET_FUELVEHICLE = "api/reports/fuel";
    public static  GET_FUELCHART = "api/reports/fuelchart";


    public static  GET_CAMERAIMAGE = "api/v2/cameras/getcameraimage";



    public static  GET_GUIDE = "api/guide/getguides";


    public static  GET_LIST_FISH = "api/fishingvessel/getlistkindoffish";
    public static  SEND_FISH_TRIP = "api/fishingvessel/insertdatatofishtrip";
    public static  GET_SHIPDETAIL = "api/fishingvessel/getshipdetail";


    public static  POST_SEND_MESSAGE = "api/fishingvesselsms/sendsms";

}