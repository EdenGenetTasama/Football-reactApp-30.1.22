import React, { useState } from "react";

export const GameContextValue = React.createContext();

const ContextProviderCompo=({children})=>{
const [objectValueOne , setObjectValueOne] = useState({});
const [objectValueTwo , setObjectValueTwo] = useState({});
const [objectValueThree , setObjectValueThree] = useState({});

return(
<GameContextValue.Provider value={{objectValueOne , setObjectValueOne} , {objectValueTwo , setObjectValueTwo} , {objectValueThree , setObjectValueThree}}>
{children}
</GameContextValue.Provider>
)
}

export default ContextProviderCompo;