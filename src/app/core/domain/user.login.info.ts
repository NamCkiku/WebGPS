export class UserLoginModel {
    constructor(instanceData?: UserLoginModel) {
        if (instanceData) {
            this.UserName = instanceData["0"];
            this.AvatarUrl = instanceData["1"];
            this.FullName = instanceData["2"];
            this.PhoneNumber = instanceData["3"];
            this.Email = instanceData["4"];
            this.DateOfBirth = instanceData["5"];
            this.GenderId = instanceData["6"];
            this.Career = instanceData["7"];
            this.Role = instanceData["8"];
            this.ReligionId = instanceData["9"];
            this.Address = instanceData["10"];
            this.Facebook = instanceData["11"];
            this.UserType = instanceData["12"];
            this.XNCode = instanceData["13"];
        }
    }


    public UserName: string;
    public AvatarUrl: string;
    public FullName: string;
    public PhoneNumber: string;
    public Email: string;
    public DateOfBirth: Date;
    public GenderId: number;
    public Career: string;
    public Role: string;
    public ReligionId: number;
    public Address: string;
    public Facebook: string;
    public UserType: UserType;
    public XNCode: number
}


export enum UserType {
    Unknow = 0,
    CustomerAdmin = 1,//Người dùng Admin
    SupportUser = 2,
    BusinessUser = 3,
    CustomerUser = 4//Người dùng Thường
}