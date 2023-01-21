import CryptoJS from 'crypto-js'

//加密
function encrypt(word){
    var key = CryptoJS.enc.Utf8.parse("cBssbHB3ZA==HKXT");
    var srcs = CryptoJS.enc.Utf8.parse(word);
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return encrypted.toString();
}
//解密
function decrypt(word){
    var key = CryptoJS.enc.Utf8.parse("cBssbHB3ZA==HKXT");
    var decrypt = CryptoJS.AES.decrypt(word, key, {mode:CryptoJS.mode.ECB,padding: CryptoJS.pad.Pkcs7});
    return CryptoJS.enc.Utf8.stringify(decrypt).toString();
}
export default {
    encrypt,decrypt
}