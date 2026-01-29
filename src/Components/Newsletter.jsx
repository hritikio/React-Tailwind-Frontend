const Newsletter=()=>{
    return (
      <div className=" w-full py-16 text-white p-4 ">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
          <div className="lg:col-span-2 my-4 ">
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Wants tips & tricks to optimize your flow?
            </h1>
            <p>Sign up to our newsletter and stay up to date</p>
          </div>

          <div className="my-4">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full rounded-md p-3  bg-white text-black"
              />
              <button className="bg-[#00df9a] text-black md:w-[200px] w-[170px]  rounded-md font-medium my-6 mx-auto md:mx-0 p-2 cursor-pointer hover:bg-[#00b87a] duration-300">
                Notify Me
              </button>
            </div>
            <p>We care about your  <span className="text-[#00df9a] cursor-pointer">privacy</span> and will never share your email.</p>
          </div>
        </div>
      </div>
    );

}

export default Newsletter;