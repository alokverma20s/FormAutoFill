export default function StudentAadhar({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg mt-5">
      <h1 className="text-3xl font-semibold text-center underline">
        Student{"'"}s Aadhar Details
      </h1>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Student{"'"}s Aadhar No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student's Aadhar No.:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="studentAdhaar"
            value={formData.studentAdhaar}
            name="studentAdhaar"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Student{"'"}s Name as per Aadhar:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student's Name as per Aadhar:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="adhaarStudentName"
            value={formData.adhaarStudentName}
            name="adhaarStudentName"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">DOB(As per Aadhar):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Student's Aadhar No.:"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="date"
            id="adhaarDOB"
            value={formData.adhaarDOB}
            name="adhaarDOB"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">(S/O or D/O or C/O):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="(S/O or D/O or C/O):"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="SOid"
            value={formData.SOid}
            name="SOid"
          />
        </div>
      </div>
    </div>
  );
}
