import { getActiveProfile } from "./ProfileConstant";



const baseUrl = getActiveProfile('dev');



export const Url = {
    login: baseUrl + '/login',

}