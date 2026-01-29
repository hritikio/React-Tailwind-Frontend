import single from '../assets/single.png'
import double from '../assets/double.png'
import tripple from '../assets/triple.png'

const Cards=()=>{
    return (
      <div className=" w-full py-[10rem] px-4 bg-white">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4  ">
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={single}
              alt="1st image"
              className="w-20 mx-auto mt-[-3rem] bg-white "
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Single Users
            </h2>
            <p className="text-center font-bold lg:text-4xl md:text-3xl text-2xl">
              $149
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-4">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Users Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 2 GB</p>
            </div>
            <button className="bg-[#00df9a] text-black md:w-[200px] w-[170px]  rounded-md font-medium my-6 mx-auto px-6 py-2 cursor-pointer hover:bg-[#00b87a] duration-300">
              Start Trial
            </button>
          </div>

          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-16 md:my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={double}
              alt="2nd image"
              className="w-20 mx-auto mt-[-3rem] bg-white "
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Double Users
            </h2>
            <p className="text-center font-bold lg:text-4xl md:text-3xl text-2xl">
              $199
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-4">1 TB Storage</p>
              <p className="py-2 border-b mx-8">3 Users Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 10 GB</p>
            </div>
            <button className="text-[#00df9a] bg-black md:w-[200px] w-[170px]  rounded-md font-medium my-6 mx-auto px-6 py-2 cursor-pointer hover:bg-[#00b87a] duration-300">
              Start Trial
            </button>
          </div>

          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
            <img
              src={single}
              alt="1st image"
              className="w-20 mx-auto mt-[-3rem] bg-white "
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Single Users
            </h2>
            <p className="text-center font-bold lg:text-4xl md:text-3xl text-2xl">
              $299
            </p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-4">5 TB Storage</p>
              <p className="py-2 border-b mx-8">10 Users Allowed</p>
              <p className="py-2 border-b mx-8">Send up to 20 GB</p>
            </div>
            <button className="bg-[#00df9a] text-black md:w-[200px] w-[170px]  rounded-md font-medium my-6 mx-auto px-6 py-2 cursor-pointer hover:bg-[#00b87a] duration-300">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    );

}

export default Cards 