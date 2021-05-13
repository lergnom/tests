import Accordion from "./Accordion";
import {useState} from "react";


const UncontrollerAccordion = () => {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <div onClick={() => {
                setCollapsed(!collapsed)
            }}> TOGGLE
            </div>

            {!collapsed && <Accordion/>}

        </div>
    )
}

export default UncontrollerAccordion