import commonAPI from "./commonAPI"
import SERVERURL from "./serverUrl"

//register called by Auth.jsx
export const registerAPI = async (reqBody) => {
    return await commonAPI("POST", `${SERVERURL}/register`, reqBody)
}

//login - called by Auth
export const loginAPI = async (reqBody) => {    
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}