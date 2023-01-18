import Apple from "./Apple"
import Basket from "./Basket"

export const ItemTypes = {APPLE: "apple"}

export const Container = () => {
    return (
        <div className="fruits">
            <Basket />
            <Apple />
            <Apple value={5} />
        </div>
    );
}

export default Container;