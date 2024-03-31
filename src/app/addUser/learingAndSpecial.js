export default function LearningAndSpecial({formData, setFormData}) {
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }
  return (
    <div className="px-5 py-5 w-[1080px] border-2 border-black rounded-lg mt-5">
      <h1 className="text-3xl mb-5 font-semibold underline">
        Learing Standard
      </h1>
      <div className="flex gap-5 justify-around">
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="hindi"
            name="hindi"
          />
          <label className=" cursor-pointer" htmlFor="hindi">
            1. hindi
          </label>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="english"
            name="english"
          />
          <label className=" cursor-pointer" htmlFor="english">
            2. English
          </label>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="maths"
            name="maths"
          />
          <label className=" cursor-pointer" htmlFor="maths">
            3. Mathematics
          </label>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="gk"
            name="gk"
          />
          <label className=" cursor-pointer" htmlFor="gk">
            4. General Knowledge
          </label>
        </div>
      </div>
      <h1 className="text-3xl my-5 font-semibold underline">
        Special Abilities
      </h1>
      <div className="flex gap-5 justify-around">
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="dancing"
            name="dancing"
          />
          <label className=" cursor-pointer" htmlFor="dancing">
            1. Dancing
          </label>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="singing"
            name="singing"
          />
          <label className=" cursor-pointer" htmlFor="singing">
            2. Singing
          </label>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="game"
            name="game"
          />
          <label className=" cursor-pointer" htmlFor="game">
            3. Game
          </label>
          <div className="flex gap-2 justify-center items-center">
            <label className="text-[12px]">{'{'}Name of the game:</label>
            <input
                onChange={(e) => handleChange(e)}
              placeholder="Enter game name"
              className=" text-black text-[12px] placeholder-gray-600 px-1 py-1 mt-0 text-base  transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200  focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
              type="text"
              id="numberofGame"
              name="numberofGame"
            />
          </div>
          <span className="text-[12px]">{'}'}</span>
        </div>
        <div className="flex gap-2 justify-center items-center">
          <input
            onChange={(e) => handleChange(e)}
            className=" cursor-pointer"
            type="checkbox"
            id="yoga"
            name="yoga"
          />
          <label className=" cursor-pointer" htmlFor="yoga">
            4. Yoga
          </label>
        </div>
      </div>
    </div>
  );
}
