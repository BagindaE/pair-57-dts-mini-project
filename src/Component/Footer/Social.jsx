import React from "react";

const Social = ({ Icons }) => {
    return <div className="text-teal-500">
        {Icons.map((icon) => (
        <span
          key={icon.nama}
          className="p-2 cursor-pointer inline-flex items-center rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500 duration-300 " >
          <ion-icon name={icon.nama}></ion-icon>
        </span>
      ))}
    </div>
}

export default Social