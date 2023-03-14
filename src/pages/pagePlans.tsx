import Modules from "..";
import Footer from "../footer";
import DragAndDrop from "../scripts/dragAndDrop";

function Plans() {
    console.log("plans has been loaded")

    return (
        <div>
            <div>this is our plans </div>
            <img
                src="/src/assets/demonstration.gif" 
                alt="a mini tutorial of how to get to the page to use the application, 
                and on how to use it such as rename an item or change what column it's in"
            />
            <DragAndDrop />
        </div>
    )
}

export default Plans;