import axios from 'axios';

const publicAxiosConfig = {
    baseURL:'https://test-front-api.leo12.com',
    timeout: 30000,
    headers: {
        "Content-type": "application/json; charset=UTF-8",
        'ua': 'web'
    }
};

const publicFrontAxios = axios.create(publicAxiosConfig);

const FrontApi = {
    getPopupList: async function () {
        let response = await publicFrontAxios.get(`/open/popup/list`, { params: { cnt: 20, localeCode: 'en', page: 1 } });
        return response.data.data;
    },
    getNotice: async function (cnt, localCode, skipIdx, type) {
        let url = "/open/notice/list?&skipIdx=" + skipIdx + "&cnt=" + cnt;
        let response = await publicFrontAxios.get(url);
        return response.data;
    },
    getFaqList: async function (skipIdx, cnt, faqType, searchTxt, isMore) {
        let url = "/open/faq/list?&skipIdx=" + skipIdx + "&cnt=" + cnt + "&faqType=" + faqType + '&searchText=' + searchTxt;
        let response = await publicFrontAxios.get(url);
        return response.data;
    }
}

export default FrontApi;
