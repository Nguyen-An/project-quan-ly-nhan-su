export interface Employee {
    userName: string;                   // Tên nhân viên
    userCode: string;                   // Mã nhân viên
    gender: string;                     // Giới tính
    genderView?: string;                // Giới tính View
    dateOfBirth: string;                // Ngày/tháng/năm sinh
    phone: string;                      // Số điện thoại
    address: string;                    // Địa chỉ
    email: string;                      // Email
    identityCard: string;               // CCCD
    status: string;                     // Trạng thái
    statusView?: string;                // Trạng thái View
    position: string;                   // Chức vụ
    positionView?: string;              // Chức vụ View
    laborContract: string;              //  Mã hợp đồng lao động
    salary: string;                     // Mức lương
    dateEnd: string;                    // gày nghỉ
    dateStart: string;                  // Ngày vào làm
} 

export interface Account {
    name: string;
    email: string;
    positionView: string;
}

export const accountFakeData: Account[] = [
    {
        name: 'Phạm Tuyết Nhung',
        email: 'nhung@hanoisky.com',
        positionView: 'Quản lý'
    },
    {
        name: 'Vũ Hồng han',
        email: 'hanvu@hanoisky.com',
        positionView: 'Quản lý'
    }, 
    {
        name: 'Lê Thanh Hiếu',
        email: 'hieu@hanoidky.com',
        positionView: 'Giám đốc'
    }
]

export const employeeFakeData:Employee[] = [
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
    {
        userName: "Nguyễn Văn A",
        userCode: "NV001",
        gender: "0",
        dateOfBirth: "01/01/1990",
        phone: "0987654321",
        address: "123 Đường ABC, Quận XYZ, TP HCM",
        email: "nguyenvana@example.com",
        identityCard: "123456789",
        status: "working",
        position: "director",
        laborContract: "LD001",
        salary: "10000000",
        dateEnd: "01/01/2022",
        dateStart: "01/01/2010"
    },
    {
        userName: "Trần Thị B",
        userCode: "NV002",
        gender: "1",
        dateOfBirth: "02/02/1995",
        phone: "0123456789",
        address: "456 Đường XYZ, Quận ABC, Hà Nội",
        email: "tranthib@example.com",
        identityCard: "987654321",
        status: "onLeave",
        position: "manager",
        laborContract: "LD002",
        salary: "15000000",
        dateEnd: "",
        dateStart: "01/01/2010"
    },
]