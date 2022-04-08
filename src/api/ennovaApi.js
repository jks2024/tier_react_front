import axios from "axios";
import * as config from '../config'
axios.defaults.withCredentials = true;
const HEADER = {"Content-type": "application/json; charset=UTF-8"};

// 로그인
const EnnovaApi = {	
	userLogin: async function(id, pw) {
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
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: bodyContent,}
    	return await axios.request(reqOptions)
	},

	// 가입된 회원인지 확인
  	userInfoCheckId: async function(id) {
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
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: bodyContent,}
    	return await axios.request(reqOptions)
  	},
	// 가입된 Phone인지 확인
	userInfoCheckPhone: async function(id, phone) {
		let bodyContent = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_s_user_info_check_phone",
					"Params": {
						"ID": phone
					}
				}
			}
		}
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: bodyContent,}
    	return await axios.request(reqOptions)
	},
	// 가입 정보 추가
	joinUserInfoInsert: async function(id, pw, phone, fName, lName) {
		let BODY = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_i_user_info",
					"Params": {
						"ID": id,
						"PhoneNumber": phone,
						"Pass": pw,
						"UserType": 0,
						"FirstName": fName,
						"LastName": lName,
						"RecommendUserID": "",
						"EmailID": ""
					}
				}
			}
		}
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: BODY,}
    	return await axios.request(reqOptions)
	},
	// 회원 정보 삭제
	delUserInfo: async function(id) {
		let BODY = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_d_user_info",
					"Params": {
						"ID": id,
						"Type": 0
					}
				}
			}
		}
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: BODY,}
    	return await axios.request(reqOptions)
	},

	// 회원 정보 조회
	userInfoGet: async function(id) {
		let BODY = {
			"Query": {
				"UserInfo": {
				"id": id
				},
				"ApiInfo": {
					"ApiName": "api_s_user_info",
					"Params": {
						"ID": id
					}
				}
			}
		}
		let reqOptions = {url: config.ENNOVA_DOMAIN, method: "POST", headers:HEADER, data: BODY,}
    	return await axios.request(reqOptions)
	}
}

export default EnnovaApi;












