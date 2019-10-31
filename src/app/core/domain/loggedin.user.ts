import { UserLoginModel } from './user.login.info';

export class LoggedInUser {
    constructor(instanceData?: LoggedInUser
    ) {
        if (instanceData) {
            this.Status = instanceData["0"];
            this.CompanyId = instanceData["1"];
            this.CompanyType = instanceData["2"];
            this.Permissions = instanceData["3"];
            this.UserId = instanceData["4"];
            this.IsNeedChangePassword = instanceData["5"];
            this.UserLoginInfo = new UserLoginModel(instanceData["6"]);
            this.TimeServer = instanceData["10"];
            this.AccessToken = instanceData["11"];
            this.IsNewUser = instanceData["13"];
        }
    }
    public Status: LoginStatus;
    public CompanyId: number;
    public CompanyType: CompanyType;
    public Permissions: any;
    public UserId: string;
    public IsNeedChangePassword: boolean;
    public UserLoginInfo: UserLoginModel;
    public TimeServer: Date;
    public AccessToken: string;
    public SubCustomer: CustomerType;
    public IsNewUser: boolean;
}

export enum LoginStatus {
    None = 0,
    Success = 1,
    LoginFailed = 2,
    UpdateRequired = 3,
    Locked = 4,
    WrongAppType = 5
}

/// <summary>
/// Định nghĩa enum loại khách hàng
/// </summary>
export enum CustomerType {
    /// <summary>
    /// Khách thường
    /// </summary>
    CustomerNormal = 0,

    /// <summary>
    /// Khách lẻ
    /// </summary>
    CustomerRetail = 1
}

export enum CompanyType {
    None = 0,
    BinhAnh = 1,//Quản trị
    Partner = 2,//Đại lý
    EndUser = 3//Công ty thường
}