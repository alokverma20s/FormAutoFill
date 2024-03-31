export default function GeneralProfile({ formData, setFormData }) {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg">
      <h1 className="text-3xl font-semibold text-center underline">
        General Profile
      </h1>
      <div className="flex gap-5  justify-between">
        <label className="gap-2 flex justify-center items-center">
          Enrollment No.
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enrollment No:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="enrollmentNo"
            value={formData.enrollmentNo}
            name="enrollmentNo"
          />
        </label>
        <label className="gap-2 flex justify-center items-center">
          {" "}
          Admission Date:
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Admission Date:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="date"
            id="admissionDate"
            value={formData.admissionDate}
            name="admissionDate"
          />
        </label>
        <label className="gap-2 flex justify-center items-center">
          {" "}
          Class:
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Class: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="class"
            value={formData.class}
            name="class"
          />
        </label>
      </div>
      <div className="flex gap-5 justify-between">
        <label className=" gap-2 flex justify-center items-center">
          Student's State code/ID:
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student's State code/ID: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="studentId"
            value={formData.studentId}
            name="studentId"
          />
        </label>
        <label className=" gap-2 flex justify-center items-center">
          PEN No.:
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Pen No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="penNo"
            value={formData.penNo}
            name="penNo"
          />
        </label>
      </div>
      <div className="flex gap-5 justify-between">
        <label className=" gap-2 flex justify-center items-center">
          Student's Name(As Per School Records):
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student's Name(As Per School Records): "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base   transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="studentName"
            value={formData.studentName}
            name="studentName"
          />
        </label>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2 ">DOB(As Per School Records):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="DOB(As Per School Records): "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="date"
            id="DOB"
            value={formData.DOB}
            name="DOB"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Gender:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Gender"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="gender"
            value={formData.gender}
            name="gender"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Father's Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Father's Name: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="fatherName"
            value={formData.fatherName}
            name="fatherName"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Father's Aadhar No.:</label>
          <input
            onChange={(e)=>handleChange(e)}
            placeholder="Father's Aadhar No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="AdhaarFather"
            value={formData.AdhaarFather}
            name="AdhaarFather"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Father's Qualification:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Father's Qualification:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="FatherQualification"
            value={formData.FatherQualification}
            name="FatherQualification"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Father's Occupation:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Father's Occupation: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="fatherOccupation"
            value={formData.fatherOccupation}
            name="fatherOccupation"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Mother's Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Mother's Name: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="motherName"
            value={formData.motherName}
            name="motherName"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Mother's Aadhar No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Mother's Aadhar No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="adhaarMother"
            value={formData.adhaarMother}
            name="adhaarMother"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Mother's Qualification:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Mother's Qualification:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="motherQualification"
            value={formData.motherQualification}
            name="motherQualification"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Mother's Occupation:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Mother's Occupation: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="motherOccupation"
            value={formData.motherOccupation}
            name="motherOccupation"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Gaurdian's Name:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Gaurdian's Name: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="gaurdianName"
            value={formData.gaurdianName}
            name="gaurdianName"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Gaurdian's Aadhar No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Gaurdian's Aadhar No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="adhaarGaurdianName"
            value={formData.adhaarGaurdianName}
            name="adhaarGaurdianName"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-full justify-between items-center">
        <label className="w-1/2">Student relation with gaurdian (Other than Father/Mother):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student relation with gaurdian (Other than Father/Mother): "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="relationWithGaurdian"
            value={formData.relationWithGaurdian}
            name="relationWithGaurdian"
          />
        </div>
      </div>
    </div>
  );
}
