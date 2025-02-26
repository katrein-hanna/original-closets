/* eslint-disable react/prop-types */

export default function IconCard({ content }) {
  return (
    <div className=" flex flex-col justify-between items-center text-primary lg:m-0 lg:p-0 p-2 mb-5">
      <div className="pb-3 lg:w-52  flex justify-center items-center mx-auto hover:text-text-hover hover:rotate-y-360 duration-200">
        {content.icon}
      </div>
      <p className="uppercase  md:w-80 w-30">{content.text}</p>
    </div>
  );
}
