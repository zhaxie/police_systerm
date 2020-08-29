import Exif from './exif.js';

var commom = {
    orient: -1,//记录选择方向
    imgobj: null,
    entry: null,
    name: null,
    target: null,
    isWeiXin: function () {
        //window.navigator.userAgent属性包含了浏览器类型、版本、操作系统类型、浏览器引擎类型等信息，这个属性可以用来判断浏览器类型
        var ua = window.navigator.userAgent.toLowerCase();
        //通过正则表达式匹配ua中是否含有MicroMessenger字符串
        if (ua.indexOf('micromessenger') !== -1) {
            return true;
        } else {
            return false;
        }
    },
    isApp: function () {
        if (window.plus) {
            return true;
        } else {
            return false;
        }
    },
    // app 拍照功能
    getImage: function () {
        // 隐藏选择菜单
        return new Promise((resolve, reject) => {

            plus.nativeUI.showWaiting("上传中...");
            var cmr = plus.camera.getCamera();
            cmr.captureImage((p) => {

                // 通过URL参数获取目录对象或文件对象
                plus.io.resolveLocalFileSystemURL(p, (entry) => {
                    // this.url =

                    entry.file((file) => {
                        // 文件系统中的读取文件对象，用于获取文件的内容
                        var fileReader = new plus.io.FileReader();
                        //  以URL编码格式读取文件数据内容
                        fileReader.readAsDataURL(file);
                        fileReader.onloadend = (e) => {
                            // this.ImgUrl.push(e.target.result.toString())
                            plus.nativeUI.closeWaiting();
                            var data;
                            var img = new Image();
                            img.src = e.target.result.toString();
                            img.onload = () => {
                                data = commom.compress(img);
                                resolve(data);
                            }
                        }
                    });

                }, (e) => {
                    plus.nativeUI.toast("读取拍照文件错误：" + e.message);
                    reject("fail");
                });
            }, (e) => {
                plus.nativeUI.closeWaiting();
                reject("fail");
            }, {
                filename: "_doc/camera/",
                index: 1
            });
        })

    },
    // app 获取相册
    galleryImg: function () {
        return new Promise((resolve, reject) => {
            plus.nativeUI.showWaiting("上传中...");
            plus.gallery.pick((edata) => {
                var name = edata.substr(edata.lastIndexOf('/') + 1);

                plus.io.resolveLocalFileSystemURL(edata, (entry1) => {
                    entry1.file((file) => {
                        // 文件系统中的读取文件对象，用于获取文件的内容
                        var fileReader = new plus.io.FileReader();
                        //  以URL编码格式读取文件数据内容
                        fileReader.readAsDataURL(file);
                        fileReader.onloadend = (e) => {
                            // this.ImgUrl.push(e.target.result.toString())
                            plus.nativeUI.closeWaiting();
                            var data;
                            var img = new Image();
                            img.src = e.target.result.toString();
                            img.onload = () => {

                                data = commom.compress(img);
                                resolve(data);
                            }
                        }
                    });
                });

            }, (e) => {
                plus.nativeUI.closeWaiting();
                reject("fail");
            }, {
                filter: "image"
            });
        })



    },

    // app 获取视频
    // app 获取相册
    galleryVdeio: function () {
        return new Promise((resolve, reject) => {
            plus.nativeUI.showWaiting("上传中...");
            plus.gallery.pick((edata) => {
                var name = edata.substr(edata.lastIndexOf('/') + 1);

                plus.io.resolveLocalFileSystemURL(edata, (entry1) => {
                    entry1.file((file) => {
                        // 文件系统中的读取文件对象，用于获取文件的内容
                        var fileReader = new plus.io.FileReader();
                        //  以URL编码格式读取文件数据内容
                        fileReader.readAsDataURL(file);
                        fileReader.onloadend = (e) => {
                            // this.ImgUrl.push(e.target.result.toString())
                            plus.nativeUI.closeWaiting();
                            var data;
                            var img = new Image();
                            img.src = e.target.result.toString();
                            img.onload = () => {

                                data = commom.compress(img);
                                resolve(data);
                            }
                        }
                    });
                });

            }, (e) => {
                plus.nativeUI.closeWaiting();
                reject("fail");
            }, {
                filter: "video"
            });
        })
    },

    // 网页版
    //  选择照片
    chooseimg: function (e) {
        //  拿到选中图片的信息源
        return new Promise((resolve, reject) => {
            let input = e.target
            let file = input.files[0]

            //  检测
            if (!/image\/\w+/.test(file.type)) {
                // alert('必须为图片类型')
                reject("必须为图片类型");
            }
            commom.getPhotoOrientation(file);
            let reader = new FileReader()
            // 将文件以一种特殊的url形式读入
            reader.readAsDataURL(file)
            // 将文件读取为二进制码
            reader.onload = (e) => {
                input.value = ''
                commom.imgobj = new Image();
                commom.imgobj.src = e.target.result;
                // this.test1 = e.target.result;
                //判断图片是否大于100K,是就直接上传，反之压缩图片

                let data = "";
                if (e.target.result.length <= (100 * 1024)) {

                    data = e.target.result;
                    resolve(e.target.result);

                } else {
                    commom.imgobj.onload = () => {
                        data = commom.compress(commom.imgobj);
                        resolve(data);
                    }
                }

            }

        })
    },
    getPhotoOrientation: function (img) {
        //去获取拍照时的信息，解决拍出来的照片旋转问题  
        Exif.getData(img, () => {
            commom.orient = Exif.getTag(img, 'Orientation');

        });
    },
    compress: function (img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');

        var initSize = img.src.length;
        var width = img.width;
        var height = img.height;

        // 最大尺寸限制，可通过国设置宽高来实现图片压缩程度
        var maxWidth = 1000,
            maxHeight = 1000;
        // 目标尺寸
        var targetWidth = width,
            targetHeight = height;
        // 图片尺寸超过400x400的限制
        if (width > maxWidth || height > maxHeight) {
            if (width / height > maxWidth / maxHeight) {
                // 更宽，按照宽度限定尺寸
                targetWidth = maxWidth;
                targetHeight = Math.round(maxWidth * (height / width));
            } else {
                targetHeight = maxHeight;
                targetWidth = Math.round(maxHeight * (width / height));
            }
        }
        // canvas对图片进行缩放
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        // 清除画布
        ctx.clearRect(0, 0, targetWidth, targetHeight);
        // 图片压缩
        ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
        // 修复ios上传图片的时候 被旋转的问题  
        if (commom.orient != "" && commom.orient != 1) {
            switch (commom.orient) {
                case 6://需要顺时针（向左）90度旋转  
                    // alert(commom.orient)
                    commom.rotateImg(targetWidth, targetHeight, img, 'left', canvas);
                    break;
                case 8://需要逆时针（向右）90度旋转  
                    commom.rotateImg(targetWidth, targetHeight, img, 'right', canvas);
                    break;
                case 3://需要180度旋转  
                    commom.rotateImg(targetWidth, targetHeight, img, 'right', canvas);//转两次  
                    commom.rotateImg(targetWidth, targetHeight, img, 'right', canvas);
                    break;
            }
        }

        //进行最小压缩  
        var ndata = canvas.toDataURL("image/jpeg", 0.5);
        return ndata;
    },
    compress1: function (img) {
        let canvas = document.createElement("canvas");
        let ctx = canvas.getContext('2d');
        //瓦片canvas
        let tCanvas = document.createElement("canvas");
        let tctx = tCanvas.getContext("2d");
        var initSize = img.src.length;
        var width = img.width;
        var height = img.height;

        //如果图片大于四百万像素，计算压缩比并将大小压至400万以下  
        var ratio;
        if ((ratio = width * height / 4000000) > 1) {
            ratio = Math.sqrt(ratio);
            width /= ratio;
            height /= ratio;
        } else {
            ratio = 1;
        }

        canvas.width = width;
        canvas.height = height;
        //        铺底色  
        ctx.fillStyle = "#fff";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        //如果图片像素大于100万则使用瓦片绘制  
        var count;
        if ((count = width * height / 1000000) > 1) {
            count = ~~(Math.sqrt(count) + 1); //计算要分成多少块瓦片  
            //            计算每块瓦片的宽和高  
            var nw = ~~(width / count);
            var nh = ~~(height / count);

            tCanvas.width = nw;
            tCanvas.height = nh;

            for (var i = 0; i < count; i++) {
                for (var j = 0; j < count; j++) {
                    tctx.drawImage(img, i * nw * ratio, j * nh * ratio, nw * ratio, nh * ratio, 0, 0, nw, nh);

                    ctx.drawImage(tCanvas, i * nw, j * nh, nw, nh);
                }
            }
        } else {
            ctx.drawImage(img, 0, 0, width, height);
        }


        // 修复ios上传图片的时候 被旋转的问题  
        if (commom.orient != "" && commom.orient != 1) {
            // alert(commom.orient)
            switch (commom.orient) {
                case 6://需要顺时针（向左）90度旋转  
                    commom.rotateImg(width, length, img, 'left', canvas);
                    break;
                case 8://需要逆时针（向右）90度旋转  
                    commom.rotateImg(width, length, img, 'right', canvas);
                    break;
                case 3://需要180度旋转  
                    commom.rotateImg(width, length, img, 'right', canvas);//转两次  
                    commom.rotateImg(width, length, img, 'right', canvas);
                    break;
            }
        }

        //进行最小压缩  
        var ndata = canvas.toDataURL("image/jpeg", 0.9);


        tCanvas.width = tCanvas.height = canvas.width = canvas.height = 0;

        return ndata;
    },


    //对图片旋转处理 added by lzk
    rotateImg: function (width, height, img, direction, canvas) {
        //alert(img);
        //最小与最大旋转方向，图片旋转4次后回到原方向  
        var min_step = 0;
        var max_step = 3;
        //var img = document.getElementById(pid);  
        if (img == null) return;

        var step = 2;
        if (step == null) {
            step = min_step;
        }
        if (direction == 'right') {
            step++;
            //旋转到原位置，即超过最大值  
            step > max_step && (step = min_step);
        } else {
            step--;
            step < min_step && (step = max_step);
        }

        //旋转角度以弧度值为参数  
        var degree = step * 90 * Math.PI / 180;
        var ctx = canvas.getContext('2d');
        switch (step) {
            case 0:
                canvas.width = width;
                canvas.height = height;
                ctx.drawImage(img, 0, 0);
                break;
            case 1:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, 0, -height, width, height);
                break;
            case 2:
                canvas.width = width;
                canvas.height = height;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, -height, width, height);
                break;
            case 3:
                canvas.width = height;
                canvas.height = width;
                ctx.rotate(degree);
                ctx.drawImage(img, -width, 0, width, height);
                break;
        }
    },
}
export default commom