import axios from "axios";
import apiObj from "@/assets/js/api.js";

//请求头转换
const transformHeader = async function (header) {
    const _localStorage = await localStorage;

    let headerObj = {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": _localStorage.getItem("token") || "",
        "gridsid": _localStorage.getItem("currentGridID") || "",

    }

    header && (headerObj = Object.assign(headerObj, header));

    return headerObj;
};

//请求参数转换
const transformRequest = function (data) {
    let ret = '';
    let _encodeURIComponent = encodeURIComponent;

    console.info('data', data);

    for (let key in data) {
        const item = data[key];

        if (item.__proto__.constructor === Array) {
            for (let index = 0, len = item.length; index < len; index++) {
                ret += _encodeURIComponent(key + '[]') + '=' + _encodeURIComponent(item[index]) + '&';
            }
        } else {
            ret += _encodeURIComponent(key) + '=' + _encodeURIComponent(item) + '&';
        }
    }
    return ret;
};

export default function (options) {
    return new Promise(async (resolve, reject) => {
        try {
            let {
                apiKey,                         //用来找出请求的地址
                data,                           //post数据
                type: ajaxType,
                header,
                isUploadFile,
                responseAll
            } = options || {};

            const api = apiObj[apiKey];
            if (!api) throw '请求地址有误';

            // console.info('请求的参数: ', options);

            this.$showLoading();

            //请求发送
            const ajaxRet = await axios({
                url: 'http://grids-api.0752app.cn:8888' + api,
                // url: 'http://grids.ti71.com' + api,
                method: ajaxType || 'post',
                headers: await transformHeader(header),
                transformRequest: !isUploadFile ? [transformRequest] : [],
                data,
            });

            //请求完毕：处理正常数据
            switch (ajaxRet.status) {
                case 200:
                    var requestRet = ajaxRet.data;

                    console.info('请求成功：', requestRet);

                    if (Number(requestRet.code) === - 1) {
                        throw requestRet.msg;
                    }

                    if (Number(requestRet.code) === -90001) {
                        if (!this.isToLogined) {
                            console.log('重新登录');

                            this.isToLogined = true;
                            this.$store.commit('toLogin', this);

                            throw requestRet.msg;
                        }
                        return false;
                    }

                    resolve(responseAll ? requestRet : requestRet.res);

                    break;
                case 500:
                    throw '网络欠佳';
                default:
                    throw '网络请求出错，未知错误';
            }

        } catch (error) {
            //请求完毕：处理错误
            reject(error);
            console.error('出错详情：', error);
        } finally {
            this.$hideLoading();
        }
    })
}

