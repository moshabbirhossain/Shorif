import { Input } from "./components/ui/input";


const Teachers = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <h1 className="text-2xl font-bold mb-3">Add Teachers</h1>
      <form className="border p-5 rounded">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="Name" className="md:col-span-1">
            Name
            <Input type="text" id="name" placeholder="Name" />
          </label>
          <label htmlFor="Mobile Number" className="md:col-span-1">
            Mobile Number
            <Input type="number" id="mobileNumber" placeholder="Mobile Number" />
          </label>
          <label htmlFor="Present Address" className="md:col-span-1">
          Present Address
            <Input type="email" id="presentAddress" placeholder="Present Address" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="Permanent Address" className="md:col-span-1">
          Permanent Address
            <Input type="text" id="permanentAddress" placeholder="Permanent Address" />
          </label>
          <label htmlFor="Email" className="md:col-span-1">
            Email
            <Input type="email" id="email" placeholder="Email" />
          </label>
          <label htmlFor="Joining Date" className="md:col-span-1">
          Joining Date
            <Input type="date" id="joiningDate" placeholder="Joining Date" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="Salary" className="md:col-span-1">
          Salary
            <Input type="number" id="salary" placeholder="Salary" />
          </label>
          <label htmlFor="NID Number" className="md:col-span-1">
          NID Number
            <Input type="number" id="NIDNumber" placeholder="NID Number" />
          </label>
          <label htmlFor="Image" className="md:col-span-1">
          Image
            <Input type="file" id="image" placeholder="Image" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="Gender" className="md:col-span-1">
          Gender
            <Input type="text" id="gender" placeholder="Gender" />
          </label>
          <label htmlFor="Designation" className="md:col-span-1">
          Designation
            <Input type="text" id="designation" placeholder="Designation" />
          </label>
          <label htmlFor="Department" className="md:col-span-1">
          Department
            <Input type="text" id="department" placeholder="Department" />
          </label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <label htmlFor="Date of Birth" className="md:col-span-1">
          Date of Birth
            <Input type="date" id="dateOfBirth" placeholder="Date of Birth" />
          </label>
          <label htmlFor="Education" className="md:col-span-1">
          Education
            <Input type="text" id="education" placeholder="Education" />
          </label>
          <label htmlFor="Blood Group" className="md:col-span-1">
          Blood Group
            <Input type="text" id="bloodGroup" placeholder="Blood Group" />
          </label>
        </div>
      </form>
    </div>
  );
};

export default Teachers;
