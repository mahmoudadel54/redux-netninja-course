import React, {useState, createContext} from 'react'

export const EditContext = createContext();
export default function EditBtn(props) {
    const [disableOption, setDisableOption] = useState(true);

    return (
        <EditContext.Provider value={{disableOption, setDisableOption}}>
            
        <div>
            <button onClick={()=>setDisableOption(disableOption=>!disableOption)}>
                Click here to active edit
            </button>
        </div>
            {props.children}
         </EditContext.Provider>
    )
}
