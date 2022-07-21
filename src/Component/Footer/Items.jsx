import React from "react";

const Items = ({ Links }) => {
    return (
        <ul>
            {Links.map((link) => (
                <li key={link.nama}>
                    <a  className="text-gray-400 hover:text-teal-400 duration-300 text-sm cursor-pointer leading-6" 
                        href={link.link}>
                        {link.nama}
                    </a>
                </li>
            ))}
        </ul>
    )
}

export default Items;