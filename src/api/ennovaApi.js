import axios from "axios";
axios.defaults.withCredentials = true;
const ENNOVA_DOMAIN = "https://adminsa.ennovalabs.com/rest"
const CONTENT_TYPE = "application/json; charset=UTF-8"

const ennovaApiConfig = {
    baseURL : ENNOVA_DOMAIN,
    headers: {
        "Content-type": CONTENT_TYPE
    }
}

let ennovaApiAxios;
ennovaApiAxios = axios.create(ennovaApiConfig);

const EnnovaApi = {
	postUserLogin: async function(id, pw) {
		let headersList = {
			"Content-type": CONTENT_TYPE
		}
		let bodyContent = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_s_login",
					"Params": {
						"ID": id,
						"Pass": pw
					}
				}
			}
		}
        
		let reqOptions = {
			url: ENNOVA_DOMAIN,
			method: "POST",
			headers: headersList,
			data: bodyContent,
		}
    	return await axios.request(reqOptions)
	},

  	postUserInfoCheckId: async function(id) {
		let headersList = {
			"Content-type": CONTENT_TYPE
		}
		let bodyContent = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_s_user_info_check_id",
					"Params": {
						"ID": id
					}
				}
			}
		}
		let reqOptions = {
			url: ENNOVA_DOMAIN,
			method: "POST",
			headers: headersList,
			data: bodyContent,
		}
		return await axios.request(reqOptions)
  	}
}

export default EnnovaApi;












