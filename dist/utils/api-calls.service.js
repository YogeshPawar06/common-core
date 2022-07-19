"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiCallsService = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = require("axios");
const config = {
    method: 'get',
    url: 'https://api.github.com/users/quen2404',
    headers: {}
};
const postConfig = {
    method: 'post',
    url: 'https://reqbin.com/sample/post/json',
    headers: {}
};
let ApiCallsService = class ApiCallsService {
    getData(keyword) {
        console.log(keyword);
        return axios_1.default
            .get(config.url)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return error;
        });
    }
    postData(keyword) {
        console.log(keyword);
        return axios_1.default
            .post(postConfig.url, keyword)
            .then(function (response) {
            return response.data;
        })
            .catch(function (error) {
            return error;
        });
    }
};
ApiCallsService = __decorate([
    (0, common_1.Injectable)()
], ApiCallsService);
exports.ApiCallsService = ApiCallsService;
//# sourceMappingURL=api-calls.service.js.map