export default class Common {
    checkValueByRules(inputCenter) {
        let valueObj = {};

        inputCenter.forEach(item => {
            const {
                id,
                value: inputValue,
                emptyValueTips,
                placeholder,
                mapKey,
                rules,
            } = item;

            if (emptyValueTips && (!inputValue || !inputValue.toString().trim())) {
                valueObj = null;
                throw emptyValueTips || '输入不能为空';
            };

            if (rules) {
                rules.forEach(ruleItem => {
                    const checkRuleRet = ruleItem(inputValue);

                    if (typeof checkRuleRet === 'string') {
                        valueObj = null;
                        throw checkRuleRet;
                    }
                });
            }

            valueObj[mapKey] = id || inputValue || '';
        });

        return valueObj;
    };


    // 使用手册：
    // formatDate(
    //     new Date( '时间戳' ),
    //     "yyyy-MM-dd hh:mm" 
    // );
    formatDate(date, fmt) {
        let o = {
            "M+": date.getMonth() + 1, //月份
            "d+": date.getDate(), //日
            "h+": date.getHours(), //小时
            "m+": date.getMinutes(), //分
            "s+": date.getSeconds(), //秒
            "q+": Math.floor((date.getMonth() + 3) / 3), //季度
            S: date.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) {
            //年份
            fmt = fmt.replace(
                RegExp.$1,
                (date.getFullYear() + "").substr(4 - RegExp.$1.length)
            );
        }
        for (let k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) {
                let str = o[k] + "";
                fmt = fmt.replace(
                    RegExp.$1,
                    RegExp.$1.length === 1 ? str : padLeftZero(str)
                );
            }
        }

        function padLeftZero(str) {
            return ("00" + str).substr(str.length);
        }
        return fmt;
    }
}