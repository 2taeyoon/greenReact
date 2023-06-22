//내부 json로 연결 - 실제 유튜브 API를 가져올 수가 없음(사용제한)

import axios from 'axios';

export default class FakeYoutube {
    constructor() { }

    async search(keyword) {
        return keyword ? this.#searchByKeyword(keyword) : this.#popular()
    }

    //아이디값만 수정해서 얻어옴
    async #searchByKeyword(keyword) {
        return axios
            .get(`/videos/search.json`)
            .then((res) => res.data.items)
            .then((items) => items.map((item) => ({ ...item, id: item.id.videoId })))
    }


    async #popular() {
        return axios
            .get(`/videos/popular.json`)
            .then((res) => res.data.items)
    }
}



// AIzaSyDXmdfzRkraWdRbjne2_6y-5wjhSxVTwOo
//video https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=[YOUR_API_KEY]
//search https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=[YOUR_API_KEY]
//rerated https://youtube.googleapis.com/youtube/v3/search?part=snippet&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=[YOUR_API_KEY]

/*
export async function search(keyword) {
    return axios
        .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
        .then((res)=>res.data.items)
*/