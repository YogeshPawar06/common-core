import { Injectable } from '@nestjs/common';
import axios from 'axios';
// import { backendUrls} from './constants';

const config = {
  method: 'get',
  url: 'https://api.github.com/users/quen2404',
  headers: { }
};

const postConfig = {
  method: 'post',
  url: 'https://reqbin.com/sample/post/json',
  headers: { }
}

@Injectable()
export class ApiCallsService {
  getData(keyword: string) {
    // console.log("backendUrls", backendUrls.codes.config);
    console.log(keyword);
    return axios
      .get(config.url)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }

  postData(keyword: string) {
    console.log(keyword);
    return axios
      .post(postConfig.url, keyword)
      .then(function (response) {
        return response.data;
      })
      .catch(function (error) {
        return error;
      });
  }
}
