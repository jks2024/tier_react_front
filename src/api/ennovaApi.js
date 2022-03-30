import axios from "axios";
axios.defaults.withCredentials = true;

const ennovaApiConfig = {
    baseURL : "https://adminsa.ennovalabs.com/rest",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
}

let ennovaApiAxios;
ennovaApiAxios = axios.create(ennovaApiConfig);

const EnnovaApi = {
    postUserLogin: async function(id, pw) {
        let headersList = {
          "Content-type": "application/json; charset=UTF-8"
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
            url: "https://adminsa.ennovalabs.com/rest",
            method: "POST",
            headers: headersList,
            data: bodyContent,
          }
          return await axios.request(reqOptions)
    }
}

export default EnnovaApi;












