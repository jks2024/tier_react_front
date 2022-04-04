import axios from "axios";
axios.defaults.withCredentials = true;
const HEADER = {"Content-type": "application/json; charset=UTF-8"};
const NEDBANK_DOMAIN = "https://sa.ennovalabs.com/ned";

const NedBankApi = {
    accoutAuth: async function(id, pw) {
		let bodyContent = {
            "Query": {
                "UserInfo": {
                    "id": "xfilecom@gmail.com"
                },
                "NedInfo": {
                    "Body": {
                        "Data": {
                            "Permissions": [
                                "ReadAccountsDetail",
                                "ReadBalances",
                                "ReadBeneficiariesDetail",
                                "ReadDirectDebits",
                                "ReadProducts",
                                "ReadStandingOrdersDetail",
                                "ReadTransactionsCredits",
                                "ReadTransactionsDebits",
                                "ReadTransactionsDetail"
                            ],
                            "ExpirationDateTime": "2022-05-02T00:00:00-00:00",
                            "TransactionFromDateTime": "2021-07-16T17:00:00-00:00",
                            "TransactionToDateTime": "2021-07-16T18:00:00-00:00"          
                        },
                        "Risk":{}
                    }
                }
            }
		}
		let reqOptions = {url: NEDBANK_DOMAIN+"/v2/account/auth", method: "POST", headers:HEADER, data: bodyContent,}
    	return await axios.request(reqOptions)
	},
}
export default NedBankApi;