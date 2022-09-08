const user = {
  name: "Mateus",
  email: "m@m.com",
  bornAt: "2022/01/01",
  role: "student",
  active: true,
  showInfos: function () {
    console.log(this.name, this.email);
  },
};

const admin = {
  name: "Mariana",
  email: "Ma@m.com",
  role: "admin",
  createCourse() {
    console.log("Created Course!");
  },
};

Object.setPrototypeOf(admin, user)
admin.createCourse()
admin.showInfos()