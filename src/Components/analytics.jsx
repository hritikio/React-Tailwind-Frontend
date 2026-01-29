import laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="text-black max-w-[1240px] mx-auto grid md:grid-cols-2 ">
        <img src={laptop} alt="laptop" className="w-[500px] mx-auto my-4" />
        <div className="flex flex-col justify-center">
          <p className=" text-[#00df9a] font-bold ">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. In
            assumenda accusamus molestias distinctio rerum facere quos ex
            explicabo, itaque aliquid optio incidunt maiores, ipsam temporibus
            iste dolore neque! Accusantium, suscipit.
          </p>
          <button className="text-[#00df9a] bg-black md:w-[200px] w-[170px] rounded-md font-medium my-6 mx-auto md:mx-0 p-2 cursor-pointer ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
