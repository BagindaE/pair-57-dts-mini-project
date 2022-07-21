import React from "react";
import ItemContainer from "./ItemContainer";
import Social from "./Social";
import { Icons } from "./List";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white">
            <ItemContainer />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
                <span>&copy; 2022 Pair-57-dts-mini-project</span>
                <span>Terms and Privacy Policy</span>
                <Social Icons={Icons} />
            </div>
        </footer>
    )
}

export default Footer;