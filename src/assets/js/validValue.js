export default {
    isEmial(email) {
        const sReg = /[_a-zA-Z\d\-\.]+@[_a-zA-Z\d\-]+(\.[_a-zA-Z\d\-]+)+$/;
        if (!sReg.test(email)) {
            return false;
        }
        return true;
    },
    isMobile(phone) {
        if (!(/^1[3456789]\d{9}$/.test(phone))) {
            return false;
        } else {
            return true;
        }
    },
    isAssetTypeAnImage(ext) {
        if (!ext) {
            console.error('没有图片源');
        }

        console.info('ext', ext);

        const imgeTypeList = ['png', 'jpg', 'jpeg', 'bmp', 'gif', 'webp', 'psd', 'svg', 'tiff'];
        const existedImgTypeIndex = imgeTypeList.findIndex(item => {
            return new RegExp(item).test(ext.toLowerCase());
        });

        console.info('existedImgTypeIndex', existedImgTypeIndex);

        return existedImgTypeIndex !== -1;
    },

    //必须是数字或者空值
    isNumberOrEmptyValue() {
        return value => {
            if (value) {
                return Number(value) ? true : "请输入数字类型";
            } else {
                return true;
            }
        }
    },
    isNumber(){
        return  (value) => !!Number(value) || '请输入数字类型';
    }
}





// reCheckInputForm({ inputObj } = options) {
//     if (
//       inputObj.checkIsMobile === true &&
//       inputObj.inputValue.length === 11
//     ) {
//       inputObj.errTips = "手机号码格式输入有误，请确认";
//       return validValue.isMobile(inputObj.inputValue);
//     }

//     return true;
//   }
// },
// computed: {
//   errStateList() {
//     const userInfo_inputCenter = this.userInfo_inputCenter;
//     const _validValue = validValue;
//     const _reCheckInputForm = this.reCheckInputForm;
//     console.log(_reCheckInputForm);

//     return userInfo_inputCenter.map(item => {
//       const inputValue = item.inputValue;

//       if (inputValue === null) {
//         return null;
//       } else if (inputValue !== "") {
//         item.errTips = item.placeholder;

//         // return _reCheckInputForm({
//         //   inputObj: item
//         // });

//         // if (item.checkIsMobile === true && inputValue.length === 11) {
//         //   item.errTips = "手机号码格式输入有误，请确认";
//         //   return _validValue.isMobile(inputValue);
//         // }
//       } else {
//         return false;
//       }
//     });
//   }