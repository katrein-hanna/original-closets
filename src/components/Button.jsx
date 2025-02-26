/* eslint-disable react/prop-types */

export default function Button({ btnName }) {
  return (
    <button className="uppercase py-3 px-6 rounded-2xl border-2 border-text-hover text-white bg-text-hover hover:bg-white buttons-hover hover:text-text-hover font-bold hover:opacity-90 transition duration-200">
      {btnName}
    </button>
  );
}
