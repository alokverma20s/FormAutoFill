export default function ContactDetails({formData, setFormData}) {
  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    });
}
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg mt-5">
      <h1 className="text-3xl font-semibold text-center underline">
        Contact Details
      </h1>
      <h3 className="text-2xl font-semibold underline">Address:</h3>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Village:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Village: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="village"
            value={formData.village}
            name="village"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Post:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Post"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="post"
            value={formData.post}
            name="post"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">District:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="District: "
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="dist"
            value={formData.dist}
            name="dist"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">State:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="State"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="stateName"
            value={formData.stateName}
            name="stateName"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Pin Code:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Pin Code"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="pinCode"
            value={formData.pinCode}
            name="pinCode"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Vill Panchayat/Ward:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Vill Panchayat/Ward"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="villagePanchayat"
            value={formData.villagePanchayat}
            name="villagePanchayat"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Mother's Mobile No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Mother's Mobile No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="motherMobile"
            value={formData.motherMobile}
            name="motherMobile"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Father's Mobile No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Father's Mobile No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="fatherMobile"
            value={formData.fatherMobile}
            name="fatherMobile"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
      <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Whatsapp No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Whatsapp No."
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="whatsappNo"
            value={formData.whatsappNo}
            name="whatsappNo"
          />
        </div>
            <div className="flex gap-2 w-1/2 justify-between items-center">
              <label className="w-1/2">
                Enter your Email ID:
              </label>
              <input
                onChange={(e) => handleChange(e)}
                placeholder="Enter Email ID"
                className=" text-black placeholder-gray-600 w-1/2 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="text"
                id="email"
                value={formData.email}
                name="email"
              />
            </div>
          </div>
    </div>
  );
}
