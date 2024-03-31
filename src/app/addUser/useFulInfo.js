export default function UsefulInfo({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg mt-5">
      <h1 className="text-3xl font-semibold text-center underline">
        Useful Information
      </h1>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">
            Number of days Student attend school in previous academic
            Year(days):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter in days "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="previousYearAttendDays"
            value={formData.previousYearAttendDays}
            name="previousYearAttendDays"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">
            In the previous class studied mark-obtained percent:
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter percentage(%)"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="marksPercent"
            value={formData.marksPercent}
            name="marksPercent"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Special Category:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Special Category"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="specialCategory"
            value={formData.specialCategory}
            name="specialCategory"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">CWSN Details:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="CWSN Details"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="CWSNDetail"
            value={formData.CWSNDetail}
            name="CWSNDetail"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Ration Card Type:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Ration Card Type"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="rationCardType"
            value={formData.rationCardType}
            name="rationCardType"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Ration Card No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Ration Card No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="RationCardNo"
            value={formData.RationCardNo}
            name="RationCardNo"
          />
        </div>
      </div>
    </div>
  );
}
