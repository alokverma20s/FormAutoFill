export default function AdditionalDetails({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg mt-5">
      <h1 className="text-3xl font-semibold text-center underline">
        Additional Details
      </h1>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">
            Mother tongue of Student(Hindi or English):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Mother Tongue"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="motherTongue"
            value={formData.motherTongue}
            name="motherTongue"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Social Category(SC/ST/OBC/GEN):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Social Category"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="socialCategory"
            value={formData.socialCategory}
            name="socialCategory"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">Minority Group (or NA):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Minority Group"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="minorityGroup"
            value={formData.minorityGroup}
            name="minorityGroup"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Digitised Ration Card No.:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Ration Card No.(in 12 digits)"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="digitisedRationCardNo"
            value={formData.digitisedRationCardNo}
            name="digitisedRationCardNo"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">APL beneficiary (Yes/No):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="aplBeneficiary"
            value={formData.aplBeneficiary}
            name="aplBeneficiary"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">BPL beneficiary(Yes/No):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="bplBeneficiary"
            value={formData.bplBeneficiary}
            name="bplBeneficiary"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">
            Antyoday Anna Yojana beneficiary(Yes/No):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="aayBeneficiary"
            value={formData.aayBeneficiary}
            name="aayBeneficiary"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">None of these:</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="aayNone"
            value={formData.aayNone}
            name="aayNone"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">CWSN(Yes or No):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="CWSN"
            value={formData.CWSN}
            name="CWSN"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">
            Type of Disability(if {'"'}Yes{'"'} then fill this):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Disability Type"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="disabilityType"
            value={formData.disabilityType}
            name="disabilityType"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between">
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className=" w-1/2">
            Nationality of Student(Indian or Other):
          </label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Nationality"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base w-1/2 transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="nationality"
            value={formData.nationality}
            name="nationality"
          />
        </div>
        <div className="flex gap-2 w-1/2 justify-center items-center">
          <label className="w-1/2">Out of School(Yes/No):</label>
          <input
            onChange={(e) => handleChange(e)}
            placeholder="Enter Yes/No"
            className=" text-black placeholder-gray-600 px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
            type="text"
            id="outOfSchool"
            value={formData.outOfSchool}
            name="outOfSchool"
          />
        </div>
      </div>
      <div className="text-xs my-3">
        If Out of School is {'"'}No{'"'} then fill the following-
      </div>
      <div className="flex gap-5 justify-between">
            <div className="flex gap-2 w-full justify-between items-center">
              <label className="w-[1250px]">
                (a). In the previous class studied-Marks obtained(in percentage):
              </label>
              <input
                onChange={(e) => handleChange(e)}
                placeholder="Enter percentage(%)"
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="text"
                id="previousAttendDays2nd"
                value={formData.previousAttendDays2nd}
                name="previousAttendDays2nd"
              />
            </div>
          </div>
      <div className="flex gap-5 justify-between">
            <div className="flex gap-2 w-full justify-between items-center">
              <label className="w-[1400px]">
                (b). Number of days student attend school (in previous academic year):
              </label>
              <input
                onChange={(e) => handleChange(e)}
                placeholder="Enter in days"
                className=" text-black placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                type="text"
                id="attandanceDays"
                value={formData.attandanceDays}
                name="attandanceDays"
              />days
            </div>
          </div>
    </div>
  );
}
