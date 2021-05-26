import React, {useState} from "react";
import {action} from "@storybook/addon-actions"
import {Accordion} from "./Accordion";

export default {
    title: 'Accordion',
    component: Accordion
}

const callback = action("Accordion mode change event fired");
const callbackSome = action("Some item was click");
export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} items={[]}
                                                  onClick={callbackSome}/>
export const UserUncollapsedMode = () => <Accordion titleValue={'Users'} collapsed={false} onChange={callback}
                                                    items={[{title: 'Masha', value: 1}, {title: 'Anton', value: 2}]}
                                                    onClick={callbackSome}/>

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion onClick={callbackSome} titleValue={"Users"} collapsed={value} onChange={() => setValue(!value)}
                      items={[{title: 'Masha', value: 1}, {title: 'Anton', value: 2}]}/>
}
