/* eslint-disable react/prop-types */

export default function IconCard({ content }) {
  return (
    <div className=" flex flex-col justify-between items-center text-primary lg:m-0 lg:p-0 p-5 mb-5">
      <div className="pb-3 lg:w-52 flex justify-center items-center mx-auto hover:text-underLine hover:rotate-y-360 duration-200">
        {content.icon}
      </div>
      <h1 className=" text-md uppercase text-center">{content.text}</h1>
    </div>
  );
}
