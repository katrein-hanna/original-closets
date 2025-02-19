/* eslint-disable react/prop-types */

export default function Container({ children }) {
  return (
    <div className="lg:w-[80%] mx-auto p-5 lg:text-xl text-md">{children}</div>
  );
}
