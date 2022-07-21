import Items from "./Items";
import { FOOTERLIST, FOOTERLIST2, FOOTERLIST3, FOOTERLIST4 } from "./List";

const ItemContainer = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
            <Items Links={FOOTERLIST} />
            <Items Links={FOOTERLIST2} />
            <Items Links={FOOTERLIST3} />
            <Items Links={FOOTERLIST4} />
        </div>
    )
}

export default ItemContainer;