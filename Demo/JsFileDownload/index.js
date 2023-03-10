/**
 * 项目中使用js-file-download会遇到以下问题
 * 1、一般来说，后端传过来的流文件名会存在于响应头Content-Disposition中，需要用decodeURI解码并截取字符串
 */
// import fileDownload from 'js-file-download'

// fileDownload(data,decodeURI(response.header.get('Content-Disposition').split('=')[1]))
