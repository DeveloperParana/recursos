/*! For license information please see main.a8df34bd463de6ffe97a.esm.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"+UhQ":function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},"/EoU":function(t,e,u){var r=u("R6g9");t.exports=function(t){return Object(r(t))}},0:function(t,e,u){t.exports=u("gmml")},"1GJI":function(t,e){t.exports={}},"1KtX":function(t,e,u){t.exports=function(){"use strict";function t(t,e){return t(e={exports:{}},e.exports),e.exports}var e=t((function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)})),u=t((function(t){var e=t.exports={version:"2.6.5"};"number"==typeof __e&&(__e=e)})),r=function(t){return"object"==typeof t?null!==t:"function"==typeof t},n=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t},o=function(t){try{return!!t()}catch(e){return!0}},i=!o((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),s=e.document,a=r(s)&&r(s.createElement),c=!i&&!o((function(){return 7!=Object.defineProperty(a?s.createElement("div"):{},"a",{get:function(){return 7}}).a})),l=Object.defineProperty,f={f:i?Object.defineProperty:function(t,e,u){if(n(t),e=function(t,e){if(!r(t))return t;var u,n;if("function"==typeof(u=t.toString)&&!r(n=u.call(t)))return n;if("function"==typeof(u=t.valueOf)&&!r(n=u.call(t)))return n;throw TypeError("Can't convert object to primitive value")}(e),n(u),c)try{return l(t,e,u)}catch(o){}if("get"in u||"set"in u)throw TypeError("Accessors not supported!");return"value"in u&&(t[e]=u.value),t}},d=i?function(t,e,u){return f.f(t,e,function(t,e){return{enumerable:!1,configurable:!0,writable:!0,value:e}}(0,u))}:function(t,e,u){return t[e]=u,t},D={}.hasOwnProperty,p=function(t,e){return D.call(t,e)},h=0,b=Math.random(),v=t((function(t){var r=e["__core-js_shared__"]||(e["__core-js_shared__"]={});(t.exports=function(t,e){return r[t]||(r[t]=void 0!==e?e:{})})("versions",[]).push({version:u.version,mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})}))("native-function-to-string",Function.toString),y=t((function(t){var r="Symbol(".concat("src",")_",(++h+b).toString(36)),n=(""+v).split("toString");u.inspectSource=function(t){return v.call(t)},(t.exports=function(t,u,o,i){var s="function"==typeof o;s&&(p(o,"name")||d(o,"name",u)),t[u]!==o&&(s&&(p(o,r)||d(o,r,t[u]?""+t[u]:n.join(String(u)))),t===e?t[u]=o:i?t[u]?t[u]=o:d(t,u,o):(delete t[u],d(t,u,o)))})(Function.prototype,"toString",(function(){return"function"==typeof this&&this[r]||v.call(this)}))})),E=function(t,e,u){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(u){case 1:return function(u){return t.call(e,u)};case 2:return function(u,r){return t.call(e,u,r)};case 3:return function(u,r,n){return t.call(e,u,r,n)}}return function(){return t.apply(e,arguments)}},F=function(t,r,n){var o,i,s,a,c=t&F.F,l=t&F.G,f=t&F.P,D=t&F.B,p=l?e:t&F.S?e[r]||(e[r]={}):(e[r]||{}).prototype,h=l?u:u[r]||(u[r]={}),b=h.prototype||(h.prototype={});for(o in l&&(n=r),n)s=((i=!c&&p&&void 0!==p[o])?p:n)[o],a=D&&i?E(s,e):f&&"function"==typeof s?E(Function.call,s):s,p&&y(p,o,s,t&F.U),h[o]!=s&&d(h,o,a),f&&b[o]!=s&&(b[o]=s)};e.core=u,F.F=1,F.G=2,F.S=4,F.P=8,F.B=16,F.W=32,F.U=64,F.R=128;var m=F,C=Math.ceil,A=Math.floor,g=function(t){return isNaN(t=+t)?0:(t>0?A:C)(t)};m(m.P,"String",{codePointAt:function(t){return function(t,e){var u,r,n=String(function(t){if(null==t)throw TypeError("Can't call method on  "+t);return t}(t)),o=g(e),i=n.length;return o<0||o>=i?void 0:(u=n.charCodeAt(o))<55296||u>56319||o+1===i||(r=n.charCodeAt(o+1))<56320||r>57343?u:r-56320+(u-55296<<10)+65536}(this,t)}});var w=Math.max,B=Math.min,x=function(t,e){return(t=g(t))<0?w(t+e,0):B(t,e)},_=String.fromCharCode,S=String.fromCodePoint;m(m.S+m.F*(!!S&&1!=S.length),"String",{fromCodePoint:function(t){for(var e,u=arguments,r=[],n=arguments.length,o=0;n>o;){if(e=+u[o++],x(e,1114111)!==e)throw RangeError(e+" is not a valid code point");r.push(e<65536?_(e):_(55296+((e-=65536)>>10),e%1024+56320))}return r.join("")}});var O,k,j,P,T,L,N,R,M,I,z,U,H,V,G={Space_Separator:/[\u1680\u2000-\u200A\u202F\u205F\u3000]/,ID_Start:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE83\uDE86-\uDE89\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,ID_Continue:/[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF9\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312E\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEA\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDE00-\uDE3E\uDE47\uDE50-\uDE83\uDE86-\uDE99\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0\uDFE1]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/},Y=function(t){return"string"==typeof t&&(t>="a"&&t<="z"||t>="A"&&t<="Z"||"$"===t||"_"===t||G.ID_Start.test(t))},J=function(t){return"string"==typeof t&&(t>="a"&&t<="z"||t>="A"&&t<="Z"||t>="0"&&t<="9"||"$"===t||"_"===t||"‌"===t||"‍"===t||G.ID_Continue.test(t))},Q=function(t){return"string"==typeof t&&/[0-9]/.test(t)},q=function(t){return"string"==typeof t&&/[0-9A-Fa-f]/.test(t)};function K(){for(I="default",z="",U=!1,H=1;;){V=W();var t=Z[I]();if(t)return t}}function W(){if(O[P])return String.fromCodePoint(O.codePointAt(P))}function X(){var t=W();return"\n"===t?(T++,L=0):t?L+=t.length:L++,t&&(P+=t.length),t}var Z={default:function(){switch(V){case"\t":case"\v":case"\f":case" ":case" ":case"\ufeff":case"\n":case"\r":case"\u2028":case"\u2029":return void X();case"/":return X(),void(I="comment");case void 0:return X(),$("eof")}if(!function(t){return"string"==typeof t&&G.Space_Separator.test(t)}(V))return Z[k]();X()},comment:function(){switch(V){case"*":return X(),void(I="multiLineComment");case"/":return X(),void(I="singleLineComment")}throw ot(X())},multiLineComment:function(){switch(V){case"*":return X(),void(I="multiLineCommentAsterisk");case void 0:throw ot(X())}X()},multiLineCommentAsterisk:function(){switch(V){case"*":return void X();case"/":return X(),void(I="default");case void 0:throw ot(X())}X(),I="multiLineComment"},singleLineComment:function(){switch(V){case"\n":case"\r":case"\u2028":case"\u2029":return X(),void(I="default");case void 0:return X(),$("eof")}X()},value:function(){switch(V){case"{":case"[":return $("punctuator",X());case"n":return X(),tt("ull"),$("null",null);case"t":return X(),tt("rue"),$("boolean",!0);case"f":return X(),tt("alse"),$("boolean",!1);case"-":case"+":return"-"===X()&&(H=-1),void(I="sign");case".":return z=X(),void(I="decimalPointLeading");case"0":return z=X(),void(I="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=X(),void(I="decimalInteger");case"I":return X(),tt("nfinity"),$("numeric",1/0);case"N":return X(),tt("aN"),$("numeric",NaN);case'"':case"'":return U='"'===X(),z="",void(I="string")}throw ot(X())},identifierNameStartEscape:function(){if("u"!==V)throw ot(X());X();var t=et();switch(t){case"$":case"_":break;default:if(!Y(t))throw st()}z+=t,I="identifierName"},identifierName:function(){switch(V){case"$":case"_":case"‌":case"‍":return void(z+=X());case"\\":return X(),void(I="identifierNameEscape")}if(!J(V))return $("identifier",z);z+=X()},identifierNameEscape:function(){if("u"!==V)throw ot(X());X();var t=et();switch(t){case"$":case"_":case"‌":case"‍":break;default:if(!J(t))throw st()}z+=t,I="identifierName"},sign:function(){switch(V){case".":return z=X(),void(I="decimalPointLeading");case"0":return z=X(),void(I="zero");case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":return z=X(),void(I="decimalInteger");case"I":return X(),tt("nfinity"),$("numeric",H*(1/0));case"N":return X(),tt("aN"),$("numeric",NaN)}throw ot(X())},zero:function(){switch(V){case".":return z+=X(),void(I="decimalPoint");case"e":case"E":return z+=X(),void(I="decimalExponent");case"x":case"X":return z+=X(),void(I="hexadecimal")}return $("numeric",0*H)},decimalInteger:function(){switch(V){case".":return z+=X(),void(I="decimalPoint");case"e":case"E":return z+=X(),void(I="decimalExponent")}if(!Q(V))return $("numeric",H*Number(z));z+=X()},decimalPointLeading:function(){if(Q(V))return z+=X(),void(I="decimalFraction");throw ot(X())},decimalPoint:function(){switch(V){case"e":case"E":return z+=X(),void(I="decimalExponent")}return Q(V)?(z+=X(),void(I="decimalFraction")):$("numeric",H*Number(z))},decimalFraction:function(){switch(V){case"e":case"E":return z+=X(),void(I="decimalExponent")}if(!Q(V))return $("numeric",H*Number(z));z+=X()},decimalExponent:function(){switch(V){case"+":case"-":return z+=X(),void(I="decimalExponentSign")}if(Q(V))return z+=X(),void(I="decimalExponentInteger");throw ot(X())},decimalExponentSign:function(){if(Q(V))return z+=X(),void(I="decimalExponentInteger");throw ot(X())},decimalExponentInteger:function(){if(!Q(V))return $("numeric",H*Number(z));z+=X()},hexadecimal:function(){if(q(V))return z+=X(),void(I="hexadecimalInteger");throw ot(X())},hexadecimalInteger:function(){if(!q(V))return $("numeric",H*Number(z));z+=X()},string:function(){switch(V){case"\\":return X(),void(z+=function(){switch(W()){case"b":return X(),"\b";case"f":return X(),"\f";case"n":return X(),"\n";case"r":return X(),"\r";case"t":return X(),"\t";case"v":return X(),"\v";case"0":if(X(),Q(W()))throw ot(X());return"\0";case"x":return X(),function(){var t="",e=W();if(!q(e))throw ot(X());if(t+=X(),e=W(),!q(e))throw ot(X());return t+=X(),String.fromCodePoint(parseInt(t,16))}();case"u":return X(),et();case"\n":case"\u2028":case"\u2029":return X(),"";case"\r":return X(),"\n"===W()&&X(),"";case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":case void 0:throw ot(X())}return X()}());case'"':return U?(X(),$("string",z)):void(z+=X());case"'":return U?void(z+=X()):(X(),$("string",z));case"\n":case"\r":throw ot(X());case"\u2028":case"\u2029":!function(t){console.warn("JSON5: '"+at(t)+"' in strings is not valid ECMAScript; consider escaping")}(V);break;case void 0:throw ot(X())}z+=X()},start:function(){switch(V){case"{":case"[":return $("punctuator",X())}I="value"},beforePropertyName:function(){switch(V){case"$":case"_":return z=X(),void(I="identifierName");case"\\":return X(),void(I="identifierNameStartEscape");case"}":return $("punctuator",X());case'"':case"'":return U='"'===X(),void(I="string")}if(Y(V))return z+=X(),void(I="identifierName");throw ot(X())},afterPropertyName:function(){if(":"===V)return $("punctuator",X());throw ot(X())},beforePropertyValue:function(){I="value"},afterPropertyValue:function(){switch(V){case",":case"}":return $("punctuator",X())}throw ot(X())},beforeArrayValue:function(){if("]"===V)return $("punctuator",X());I="value"},afterArrayValue:function(){switch(V){case",":case"]":return $("punctuator",X())}throw ot(X())},end:function(){throw ot(X())}};function $(t,e){return{type:t,value:e,line:T,column:L}}function tt(t){for(var e=0,u=t;e<u.length;e+=1){var r=u[e];if(W()!==r)throw ot(X());X()}}function et(){for(var t="",e=4;e-- >0;){var u=W();if(!q(u))throw ot(X());t+=X()}return String.fromCodePoint(parseInt(t,16))}var ut={start:function(){if("eof"===N.type)throw it();rt()},beforePropertyName:function(){switch(N.type){case"identifier":case"string":return R=N.value,void(k="afterPropertyName");case"punctuator":return void nt();case"eof":throw it()}},afterPropertyName:function(){if("eof"===N.type)throw it();k="beforePropertyValue"},beforePropertyValue:function(){if("eof"===N.type)throw it();rt()},beforeArrayValue:function(){if("eof"===N.type)throw it();"punctuator"!==N.type||"]"!==N.value?rt():nt()},afterPropertyValue:function(){if("eof"===N.type)throw it();switch(N.value){case",":return void(k="beforePropertyName");case"}":nt()}},afterArrayValue:function(){if("eof"===N.type)throw it();switch(N.value){case",":return void(k="beforeArrayValue");case"]":nt()}},end:function(){}};function rt(){var t;switch(N.type){case"punctuator":switch(N.value){case"{":t={};break;case"[":t=[]}break;case"null":case"boolean":case"numeric":case"string":t=N.value}if(void 0===M)M=t;else{var e=j[j.length-1];Array.isArray(e)?e.push(t):e[R]=t}if(null!==t&&"object"==typeof t)j.push(t),k=Array.isArray(t)?"beforeArrayValue":"beforePropertyName";else{var u=j[j.length-1];k=null==u?"end":Array.isArray(u)?"afterArrayValue":"afterPropertyValue"}}function nt(){j.pop();var t=j[j.length-1];k=null==t?"end":Array.isArray(t)?"afterArrayValue":"afterPropertyValue"}function ot(t){return ct(void 0===t?"JSON5: invalid end of input at "+T+":"+L:"JSON5: invalid character '"+at(t)+"' at "+T+":"+L)}function it(){return ct("JSON5: invalid end of input at "+T+":"+L)}function st(){return ct("JSON5: invalid identifier character at "+T+":"+(L-=5))}function at(t){var e={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"};if(e[t])return e[t];if(t<" "){var u=t.charCodeAt(0).toString(16);return"\\x"+("00"+u).substring(u.length)}return t}function ct(t){var e=new SyntaxError(t);return e.lineNumber=T,e.columnNumber=L,e}return{parse:function(t,e){O=String(t),k="start",j=[],P=0,T=1,L=0,N=void 0,R=void 0,M=void 0;do{N=K(),ut[k]()}while("eof"!==N.type);return"function"==typeof e?function t(e,u,r){var n=e[u];if(null!=n&&"object"==typeof n)for(var o in n){var i=t(n,o,r);void 0===i?delete n[o]:n[o]=i}return r.call(e,u,n)}({"":M},"",e):M},stringify:function(t,e,u){var r,n,o,i=[],s="",a="";if(null==e||"object"!=typeof e||Array.isArray(e)||(u=e.space,o=e.quote,e=e.replacer),"function"==typeof e)n=e;else if(Array.isArray(e)){r=[];for(var c=0,l=e;c<l.length;c+=1){var f=l[c],d=void 0;"string"==typeof f?d=f:("number"==typeof f||f instanceof String||f instanceof Number)&&(d=String(f)),void 0!==d&&r.indexOf(d)<0&&r.push(d)}}return u instanceof Number?u=Number(u):u instanceof String&&(u=String(u)),"number"==typeof u?u>0&&(u=Math.min(10,Math.floor(u)),a="          ".substr(0,u)):"string"==typeof u&&(a=u.substr(0,10)),function t(e,u){var o=u[e];switch(null!=o&&("function"==typeof o.toJSON5?o=o.toJSON5(e):"function"==typeof o.toJSON&&(o=o.toJSON(e))),n&&(o=n.call(u,e,o)),o instanceof Number?o=Number(o):o instanceof String?o=String(o):o instanceof Boolean&&(o=o.valueOf()),o){case null:return"null";case!0:return"true";case!1:return"false"}return"string"==typeof o?D(o):"number"==typeof o?String(o):"object"==typeof o?Array.isArray(o)?function(e){if(i.indexOf(e)>=0)throw TypeError("Converting circular structure to JSON5");i.push(e);var u=s;s+=a;for(var r,n=[],o=0;o<e.length;o++){var c=t(String(o),e);n.push(void 0!==c?c:"null")}if(0===n.length)r="[]";else if(""===a)r="["+n.join(",")+"]";else{var l=n.join(",\n"+s);r="[\n"+s+l+",\n"+u+"]"}return i.pop(),s=u,r}(o):function(e){if(i.indexOf(e)>=0)throw TypeError("Converting circular structure to JSON5");i.push(e);var u=s;s+=a;for(var n,o,c=[],l=0,f=r||Object.keys(e);l<f.length;l+=1){var d=f[l],D=t(d,e);if(void 0!==D){var h=p(d)+":";""!==a&&(h+=" "),c.push(h+=D)}}return 0===c.length?n="{}":""===a?n="{"+(o=c.join(","))+"}":(o=c.join(",\n"+s),n="{\n"+s+o+",\n"+u+"}"),i.pop(),s=u,n}(o):void 0}("",{"":t});function D(t){for(var e={"'":.1,'"':.2},u={"'":"\\'",'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\v","\0":"\\0","\u2028":"\\u2028","\u2029":"\\u2029"},r="",n=0;n<t.length;n++){var i=t[n];switch(i){case"'":case'"':e[i]++,r+=i;continue;case"\0":if(Q(t[n+1])){r+="\\x00";continue}}if(u[i])r+=u[i];else if(i<" "){var s=i.charCodeAt(0).toString(16);r+="\\x"+("00"+s).substring(s.length)}else r+=i}var a=o||Object.keys(e).reduce((function(t,u){return e[t]<e[u]?t:u}));return a+(r=r.replace(new RegExp(a,"g"),u[a]))+a}function p(t){if(0===t.length)return D(t);var e=String.fromCodePoint(t.codePointAt(0));if(!Y(e))return D(t);for(var u=e.length;u<t.length;u++)if(!J(String.fromCodePoint(t.codePointAt(u))))return D(t);return t}}}}()},"1uQW":function(t,e,u){var r=u("QmHw");t.exports=!r((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},"2NY6":function(t,e,u){var r=u("kd5c"),n=u("QBSY"),o=r["__core-js_shared__"]||n("__core-js_shared__",{});t.exports=o},"2ylk":function(t,e,u){var r=u("YEnO"),n=u("kEo8"),o=u("lErv").indexOf,i=u("SIxH");t.exports=function(t,e){var u,s=n(t),a=0,c=[];for(u in s)!r(i,u)&&r(s,u)&&c.push(u);for(;e.length>a;)r(s,u=e[a++])&&(~o(c,u)||c.push(u));return c}},"3/j1":function(t,e){t.exports=(t,e)=>{const u=t._malloc(e.length*Uint32Array.BYTES_PER_ELEMENT);return e.forEach((e,r)=>{const n=t._malloc(e.length+1);t.writeAsciiToMemory(e,n),t.setValue(u+Uint32Array.BYTES_PER_ELEMENT*r,n,"i32")}),[e.length,u]}},"33Wo":function(t,e,u){"use strict";var r,n,o,i=u("QmHw"),s=u("QDZz"),a=u("xEpy"),c=u("YEnO"),l=u("7Sby"),f=u("PpKG"),d=l("iterator"),D=!1;[].keys&&("next"in(o=[].keys())?(n=s(s(o)))!==Object.prototype&&(r=n):D=!0);var p=null==r||i((function(){var t={};return r[d].call(t)!==t}));p&&(r={}),f&&!p||c(r,d)||a(r,d,(function(){return this})),t.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:D}},"3fnk":function(t,e,u){var r=u("2ylk"),n=u("xC9C").concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return r(t,n)}},"5fGo":function(t,e,u){var r=u("QPwu"),n=u("MVcu"),o=r("keys");t.exports=function(t){return o[t]||(o[t]=n(t))}},"70tN":function(t,e,u){var r=u("wZF9");t.exports=function(t){if(!r(t))throw TypeError(String(t)+" is not an object");return t}},"7Sby":function(t,e,u){var r=u("kd5c"),n=u("QPwu"),o=u("YEnO"),i=u("MVcu"),s=u("c/4c"),a=u("hMsm"),c=n("wks"),l=r.Symbol,f=a?l:l&&l.withoutSetter||i;t.exports=function(t){return o(c,t)&&(s||"string"==typeof c[t])||(c[t]=s&&o(l,t)?l[t]:f("Symbol."+t)),c[t]}},"8Mcq":function(t,e){let u=!1,r=()=>{};t.exports={logging:u,setLogging:t=>{u=t},setCustomLogger:t=>{r=t},log:(t,e)=>{r({type:t,message:e}),u&&console.log(`[${t}] ${e}`)}}},"8Na9":function(t,e){let u=0,r=0;const n=t=>{const[e,u,r]=t.split(":");return 60*parseFloat(e)*60+60*parseFloat(u)+parseFloat(r)};t.exports=(t,e)=>{if("string"==typeof t)if(t.startsWith("  Duration")){const o=t.split(", ")[0].split(": ")[1],i=n(o);e({duration:i,ratio:r}),(0===u||u>i)&&(u=i)}else if(t.startsWith("frame")||t.startsWith("size")){const o=t.split("time=")[1].split(" ")[0],i=n(o);r=i/u,e({ratio:r,time:i})}else t.startsWith("video:")&&(e({ratio:1}),u=0)}},"8r2U":function(t,e){t.exports={defaultArgs:["./ffmpeg","-nostdin","-y"],baseOptions:{log:!1,logger:()=>{},progress:()=>{},corePath:""}}},"9Q/V":function(t,e,u){var r=u("wZF9");t.exports=function(t){if(!r(t)&&null!==t)throw TypeError("Can't set "+String(t)+" as a prototype");return t}},"9ShI":function(t,e,u){var r=u("OuD2");t.exports=r("document","documentElement")},Bmvx:function(t,e,u){"use strict";var r=u("ZfjD"),n=u("cwTd"),o=u("QDZz"),i=u("YAPA"),s=u("lcml"),a=u("xEpy"),c=u("fEQ0"),l=u("7Sby"),f=u("PpKG"),d=u("1GJI"),D=u("33Wo"),p=D.IteratorPrototype,h=D.BUGGY_SAFARI_ITERATORS,b=l("iterator"),v=function(){return this};t.exports=function(t,e,u,l,D,y,E){n(u,e,l);var F,m,C,A=function(t){if(t===D&&_)return _;if(!h&&t in B)return B[t];switch(t){case"keys":case"values":case"entries":return function(){return new u(this,t)}}return function(){return new u(this)}},g=e+" Iterator",w=!1,B=t.prototype,x=B[b]||B["@@iterator"]||D&&B[D],_=!h&&x||A(D),S="Array"==e&&B.entries||x;if(S&&(F=o(S.call(new t)),p!==Object.prototype&&F.next&&(f||o(F)===p||(i?i(F,p):"function"!=typeof F[b]&&a(F,b,v)),s(F,g,!0,!0),f&&(d[g]=v))),"values"==D&&x&&"values"!==x.name&&(w=!0,_=function(){return x.call(this)}),f&&!E||B[b]===_||a(B,b,_),d[e]=_,D)if(m={values:A("values"),keys:y?_:A("keys"),entries:A("entries")},E)for(C in m)(h||w||!(C in B))&&c(B,C,m[C]);else r({target:e,proto:!0,forced:h||w},m);return m}},"Cv/g":function(t,e,u){const r=u("lZ8N"),n=u("XhlT"),o=u("MPJ8");t.exports={defaultOptions:r,getCreateFFmpegCore:n,fetchFile:o}},GSo0:function(t,e,u){var r=function(t){"use strict";var e=Object.prototype,u=e.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},n=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",i=r.toStringTag||"@@toStringTag";function s(t,e,u){return Object.defineProperty(t,e,{value:u,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(B){s=function(t,e,u){return t[e]=u}}function a(t,e,u,r){var n=Object.create((e&&e.prototype instanceof f?e:f).prototype),o=new A(r||[]);return n._invoke=function(t,e,u){var r="suspendedStart";return function(n,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===n)throw o;return{value:void 0,done:!0}}for(u.method=n,u.arg=o;;){var i=u.delegate;if(i){var s=F(i,u);if(s){if(s===l)continue;return s}}if("next"===u.method)u.sent=u._sent=u.arg;else if("throw"===u.method){if("suspendedStart"===r)throw r="completed",u.arg;u.dispatchException(u.arg)}else"return"===u.method&&u.abrupt("return",u.arg);r="executing";var a=c(t,e,u);if("normal"===a.type){if(r=u.done?"completed":"suspendedYield",a.arg===l)continue;return{value:a.arg,done:u.done}}"throw"===a.type&&(r="completed",u.method="throw",u.arg=a.arg)}}}(t,u,o),n}function c(t,e,u){try{return{type:"normal",arg:t.call(e,u)}}catch(B){return{type:"throw",arg:B}}}t.wrap=a;var l={};function f(){}function d(){}function D(){}var p={};p[n]=function(){return this};var h=Object.getPrototypeOf,b=h&&h(h(g([])));b&&b!==e&&u.call(b,n)&&(p=b);var v=D.prototype=f.prototype=Object.create(p);function y(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){var r;this._invoke=function(n,o){function i(){return new e((function(r,i){!function r(n,o,i,s){var a=c(t[n],t,o);if("throw"!==a.type){var l=a.arg,f=l.value;return f&&"object"==typeof f&&u.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,s)}),(function(t){r("throw",t,i,s)})):e.resolve(f).then((function(t){l.value=t,i(l)}),(function(t){return r("throw",t,i,s)}))}s(a.arg)}(n,o,r,i)}))}return r=r?r.then(i,i):i()}}function F(t,e){var u=t.iterator[e.method];if(void 0===u){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,F(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var r=c(u,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,l;var n=r.arg;return n?n.done?(e[t.resultName]=n.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):n:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function m(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function C(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(m,this),this.reset(!0)}function g(t){if(t){var e=t[n];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(u.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:w}}function w(){return{value:void 0,done:!0}}return d.prototype=v.constructor=D,D.constructor=d,d.displayName=s(D,i,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,D):(t.__proto__=D,s(t,i,"GeneratorFunction")),t.prototype=Object.create(v),t},t.awrap=function(t){return{__await:t}},y(E.prototype),E.prototype[o]=function(){return this},t.AsyncIterator=E,t.async=function(e,u,r,n,o){void 0===o&&(o=Promise);var i=new E(a(e,u,r,n),o);return t.isGeneratorFunction(u)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},y(v),s(v,i,"Generator"),v[n]=function(){return this},v.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var u in t)e.push(u);return e.reverse(),function u(){for(;e.length;){var r=e.pop();if(r in t)return u.value=r,u.done=!1,u}return u.done=!0,u}},t.values=g,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(C),!t)for(var e in this)"t"===e.charAt(0)&&u.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(u,r){return i.type="throw",i.arg=t,e.next=u,r&&(e.method="next",e.arg=void 0),!!r}for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=u.call(o,"catchLoc"),a=u.call(o,"finallyLoc");if(s&&a){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!a)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&u.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var o=n;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=t,i.arg=e,o?(this.method="next",this.next=o.finallyLoc,l):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var u=this.tryEntries[e];if(u.finallyLoc===t)return this.complete(u.completion,u.afterLoc),C(u),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var u=this.tryEntries[e];if(u.tryLoc===t){var r=u.completion;if("throw"===r.type){var n=r.arg;C(u)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,u){return this.delegate={iterator:g(t),resultName:e,nextLoc:u},"next"===this.method&&(this.arg=void 0),l}},t}(t.exports);try{regeneratorRuntime=r}catch(n){Function("r","regeneratorRuntime = r")(r)}},"JI+r":function(t,e,u){var r=u("wZF9");t.exports=function(t,e){if(!r(t))return t;var u,n;if(e&&"function"==typeof(u=t.toString)&&!r(n=u.call(t)))return n;if("function"==typeof(u=t.valueOf)&&!r(n=u.call(t)))return n;if(!e&&"function"==typeof(u=t.toString)&&!r(n=u.call(t)))return n;throw TypeError("Can't convert object to primitive value")}},"Jb/1":function(t,e,u){var r=u("OuD2"),n=u("3fnk"),o=u("Jkym"),i=u("70tN");t.exports=r("Reflect","ownKeys")||function(t){var e=n.f(i(t)),u=o.f;return u?e.concat(u(t)):e}},Jkym:function(t,e){e.f=Object.getOwnPropertySymbols},"KG2+":function(t,e,u){var r=u("u67S"),n=Math.min;t.exports=function(t){return t>0?n(r(t),9007199254740991):0}},LdkU:function(t,e,u){var r=u("2NY6"),n=Function.toString;"function"!=typeof r.inspectSource&&(r.inspectSource=function(t){return n.call(t)}),t.exports=r.inspectSource},MEJ2:function(t,e,u){var r=u("jl4x"),n=u("SDu9"),o=u("+UhQ"),i=u("kEo8"),s=u("JI+r"),a=u("YEnO"),c=u("jhuc"),l=Object.getOwnPropertyDescriptor;e.f=r?l:function(t,e){if(t=i(t),e=s(e,!0),c)try{return l(t,e)}catch(u){}if(a(t,e))return o(!n.f.call(t,e),t[e])}},MPJ8:function(t,e,u){const r=u("ScJm");t.exports=async t=>{let e=t;if(void 0===t)return new Uint8Array;if("string"==typeof t)if(/data:_data\/([a-zA-Z]*);base64,([^"]*)/.test(t))e=atob(t.split(",")[1]).split("").map(t=>t.charCodeAt(0));else{const u=await fetch(r(t));e=await u.arrayBuffer()}else(t instanceof File||t instanceof Blob)&&(e=await(u=t,new Promise((t,e)=>{const r=new FileReader;r.onload=()=>{t(r.result)},r.onerror=({target:{error:{code:t}}})=>{e(Error("File could not be read! Code="+t))},r.readAsArrayBuffer(u)})));var u;return new Uint8Array(e)}},MVcu:function(t,e){var u=0,r=Math.random();t.exports=function(t){return"Symbol("+String(void 0===t?"":t)+")_"+(++u+r).toString(36)}},NRdK:function(t,e){var u;!function(t){!function(e){var u="object"==typeof global?global:"object"==typeof self?self:"object"==typeof this?this:Function("return this;")(),r=n(t);function n(t,e){return function(u,r){"function"!=typeof t[u]&&Object.defineProperty(t,u,{configurable:!0,writable:!0,value:r}),e&&e(u,r)}}void 0===u.Reflect?u.Reflect=t:r=n(u.Reflect,r),function(t){var e=Object.prototype.hasOwnProperty,u="function"==typeof Symbol,r=u&&void 0!==Symbol.toPrimitive?Symbol.toPrimitive:"@@toPrimitive",n=u&&void 0!==Symbol.iterator?Symbol.iterator:"@@iterator",o="function"==typeof Object.create,i={__proto__:[]}instanceof Array,s=!o&&!i,a={create:o?function(){return k(Object.create(null))}:i?function(){return k({__proto__:null})}:function(){return k({})},has:s?function(t,u){return e.call(t,u)}:function(t,e){return e in t},get:s?function(t,u){return e.call(t,u)?t[u]:void 0}:function(t,e){return t[e]}},c=Object.getPrototypeOf(Function),l="object"==typeof process&&Object({NODE_ENV:"production",NX_CLI_SET:"true",NX_INVOKED_BY_RUNNER:"true",NX_WORKSPACE_ROOT:"/home/runner/work/recursos/recursos",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/recursos/recursos/node_modules/.cache/nx/terminalOutputs/0df3d19d9cd77f49285ceb7b983cb1c508008e9fd7177ce1245843cfe48b72ae",NX_FORWARD_OUTPUT:"true",NX_TASK_TARGET_PROJECT:"recorder",NX_TASK_HASH:"0df3d19d9cd77f49285ceb7b983cb1c508008e9fd7177ce1245843cfe48b72ae"})&&"true"===Object({NODE_ENV:"production",NX_CLI_SET:"true",NX_INVOKED_BY_RUNNER:"true",NX_WORKSPACE_ROOT:"/home/runner/work/recursos/recursos",NX_TERMINAL_OUTPUT_PATH:"/home/runner/work/recursos/recursos/node_modules/.cache/nx/terminalOutputs/0df3d19d9cd77f49285ceb7b983cb1c508008e9fd7177ce1245843cfe48b72ae",NX_FORWARD_OUTPUT:"true",NX_TASK_TARGET_PROJECT:"recorder",NX_TASK_HASH:"0df3d19d9cd77f49285ceb7b983cb1c508008e9fd7177ce1245843cfe48b72ae"}).REFLECT_METADATA_USE_MAP_POLYFILL,f=l||"function"!=typeof Map||"function"!=typeof Map.prototype.entries?function(){var t={},e=[],u=function(){function t(t,e,u){this._index=0,this._keys=t,this._values=e,this._selector=u}return t.prototype["@@iterator"]=function(){return this},t.prototype[n]=function(){return this},t.prototype.next=function(){var t=this._index;if(t>=0&&t<this._keys.length){var u=this._selector(this._keys[t],this._values[t]);return t+1>=this._keys.length?(this._index=-1,this._keys=e,this._values=e):this._index++,{value:u,done:!1}}return{value:void 0,done:!0}},t.prototype.throw=function(t){throw this._index>=0&&(this._index=-1,this._keys=e,this._values=e),t},t.prototype.return=function(t){return this._index>=0&&(this._index=-1,this._keys=e,this._values=e),{value:t,done:!0}},t}();return function(){function e(){this._keys=[],this._values=[],this._cacheKey=t,this._cacheIndex=-2}return Object.defineProperty(e.prototype,"size",{get:function(){return this._keys.length},enumerable:!0,configurable:!0}),e.prototype.has=function(t){return this._find(t,!1)>=0},e.prototype.get=function(t){var e=this._find(t,!1);return e>=0?this._values[e]:void 0},e.prototype.set=function(t,e){var u=this._find(t,!0);return this._values[u]=e,this},e.prototype.delete=function(e){var u=this._find(e,!1);if(u>=0){for(var r=this._keys.length,n=u+1;n<r;n++)this._keys[n-1]=this._keys[n],this._values[n-1]=this._values[n];return this._keys.length--,this._values.length--,e===this._cacheKey&&(this._cacheKey=t,this._cacheIndex=-2),!0}return!1},e.prototype.clear=function(){this._keys.length=0,this._values.length=0,this._cacheKey=t,this._cacheIndex=-2},e.prototype.keys=function(){return new u(this._keys,this._values,r)},e.prototype.values=function(){return new u(this._keys,this._values,o)},e.prototype.entries=function(){return new u(this._keys,this._values,i)},e.prototype["@@iterator"]=function(){return this.entries()},e.prototype[n]=function(){return this.entries()},e.prototype._find=function(t,e){return this._cacheKey!==t&&(this._cacheIndex=this._keys.indexOf(this._cacheKey=t)),this._cacheIndex<0&&e&&(this._cacheIndex=this._keys.length,this._keys.push(t),this._values.push(void 0)),this._cacheIndex},e}();function r(t,e){return t}function o(t,e){return e}function i(t,e){return[t,e]}}():Map,d=l||"function"!=typeof Set||"function"!=typeof Set.prototype.entries?function(){function t(){this._map=new f}return Object.defineProperty(t.prototype,"size",{get:function(){return this._map.size},enumerable:!0,configurable:!0}),t.prototype.has=function(t){return this._map.has(t)},t.prototype.add=function(t){return this._map.set(t,t),this},t.prototype.delete=function(t){return this._map.delete(t)},t.prototype.clear=function(){this._map.clear()},t.prototype.keys=function(){return this._map.keys()},t.prototype.values=function(){return this._map.values()},t.prototype.entries=function(){return this._map.entries()},t.prototype["@@iterator"]=function(){return this.keys()},t.prototype[n]=function(){return this.keys()},t}():Set,D=new(l||"function"!=typeof WeakMap?function(){var t=a.create(),u=r();return function(){function t(){this._key=r()}return t.prototype.has=function(t){var e=n(t,!1);return void 0!==e&&a.has(e,this._key)},t.prototype.get=function(t){var e=n(t,!1);return void 0!==e?a.get(e,this._key):void 0},t.prototype.set=function(t,e){return n(t,!0)[this._key]=e,this},t.prototype.delete=function(t){var e=n(t,!1);return void 0!==e&&delete e[this._key]},t.prototype.clear=function(){this._key=r()},t}();function r(){var e;do{e="@@WeakMap@@"+i()}while(a.has(t,e));return t[e]=!0,e}function n(t,r){if(!e.call(t,u)){if(!r)return;Object.defineProperty(t,u,{value:a.create()})}return t[u]}function o(t,e){for(var u=0;u<e;++u)t[u]=255*Math.random()|0;return t}function i(){var t,e=(t=16,"function"==typeof Uint8Array?"undefined"!=typeof crypto?crypto.getRandomValues(new Uint8Array(t)):"undefined"!=typeof msCrypto?msCrypto.getRandomValues(new Uint8Array(t)):o(new Uint8Array(t),t):o(new Array(t),t));e[6]=79&e[6]|64,e[8]=191&e[8]|128;for(var u="",r=0;r<16;++r){var n=e[r];4!==r&&6!==r&&8!==r||(u+="-"),n<16&&(u+="0"),u+=n.toString(16).toLowerCase()}return u}}():WeakMap);function p(t,e,u){var r=D.get(t);if(F(r)){if(!u)return;r=new f,D.set(t,r)}var n=r.get(e);if(F(n)){if(!u)return;n=new f,r.set(e,n)}return n}function h(t,e,u){var r=p(e,u,!1);return!F(r)&&!!r.has(t)}function b(t,e,u){var r=p(e,u,!1);if(!F(r))return r.get(t)}function v(t,e,u,r){p(u,r,!0).set(t,e)}function y(t,e){var u=[],r=p(t,e,!1);if(F(r))return u;for(var o=function(t){var e=x(t,n);if(!w(e))throw new TypeError;var u=e.call(t);if(!C(u))throw new TypeError;return u}(r.keys()),i=0;;){var s=_(o);if(!s)return u.length=i,u;var a=s.value;try{u[i]=a}catch(c){try{S(o)}finally{throw c}}i++}}function E(t){if(null===t)return 1;switch(typeof t){case"undefined":return 0;case"boolean":return 2;case"string":return 3;case"symbol":return 4;case"number":return 5;case"object":return null===t?1:6;default:return 6}}function F(t){return void 0===t}function m(t){return null===t}function C(t){return"object"==typeof t?null!==t:"function"==typeof t}function A(t){var e=function(t,e){switch(E(t)){case 0:case 1:case 2:case 3:case 4:case 5:return t}var u=x(t,r);if(void 0!==u){var n=u.call(t,"string");if(C(n))throw new TypeError;return n}return function(t,e){var u,r,n=t.toString;if(w(n)&&!C(r=n.call(t)))return r;if(w(u=t.valueOf)&&!C(r=u.call(t)))return r;throw new TypeError}(t)}(t);return"symbol"==typeof e?e:function(t){return""+t}(e)}function g(t){return Array.isArray?Array.isArray(t):t instanceof Object?t instanceof Array:"[object Array]"===Object.prototype.toString.call(t)}function w(t){return"function"==typeof t}function B(t){return"function"==typeof t}function x(t,e){var u=t[e];if(null!=u){if(!w(u))throw new TypeError;return u}}function _(t){var e=t.next();return!e.done&&e}function S(t){var e=t.return;e&&e.call(t)}function O(t){var e=Object.getPrototypeOf(t);if("function"!=typeof t||t===c)return e;if(e!==c)return e;var u=t.prototype,r=u&&Object.getPrototypeOf(u);if(null==r||r===Object.prototype)return e;var n=r.constructor;return"function"!=typeof n||n===t?e:n}function k(t){return t.__=void 0,delete t.__,t}t("decorate",(function(t,e,u,r){if(F(u)){if(!g(t))throw new TypeError;if(!B(e))throw new TypeError;return function(t,e){for(var u=t.length-1;u>=0;--u){var r=(0,t[u])(e);if(!F(r)&&!m(r)){if(!B(r))throw new TypeError;e=r}}return e}(t,e)}if(!g(t))throw new TypeError;if(!C(e))throw new TypeError;if(!C(r)&&!F(r)&&!m(r))throw new TypeError;return m(r)&&(r=void 0),function(t,e,u,r){for(var n=t.length-1;n>=0;--n){var o=(0,t[n])(e,u,r);if(!F(o)&&!m(o)){if(!C(o))throw new TypeError;r=o}}return r}(t,e,u=A(u),r)})),t("metadata",(function(t,e){return function(u,r){if(!C(u))throw new TypeError;if(!F(r)&&!function(t){switch(E(t)){case 3:case 4:return!0;default:return!1}}(r))throw new TypeError;v(t,e,u,r)}})),t("defineMetadata",(function(t,e,u,r){if(!C(u))throw new TypeError;return F(r)||(r=A(r)),v(t,e,u,r)})),t("hasMetadata",(function(t,e,u){if(!C(e))throw new TypeError;return F(u)||(u=A(u)),function t(e,u,r){if(h(e,u,r))return!0;var n=O(u);return!m(n)&&t(e,n,r)}(t,e,u)})),t("hasOwnMetadata",(function(t,e,u){if(!C(e))throw new TypeError;return F(u)||(u=A(u)),h(t,e,u)})),t("getMetadata",(function(t,e,u){if(!C(e))throw new TypeError;return F(u)||(u=A(u)),function t(e,u,r){if(h(e,u,r))return b(e,u,r);var n=O(u);return m(n)?void 0:t(e,n,r)}(t,e,u)})),t("getOwnMetadata",(function(t,e,u){if(!C(e))throw new TypeError;return F(u)||(u=A(u)),b(t,e,u)})),t("getMetadataKeys",(function(t,e){if(!C(t))throw new TypeError;return F(e)||(e=A(e)),function t(e,u){var r=y(e,u),n=O(e);if(null===n)return r;var o=t(n,u);if(o.length<=0)return r;if(r.length<=0)return o;for(var i=new d,s=[],a=0,c=r;a<c.length;a++){var l=c[a];i.has(l)||(i.add(l),s.push(l))}for(var f=0,D=o;f<D.length;f++)i.has(l=D[f])||(i.add(l),s.push(l));return s}(t,e)})),t("getOwnMetadataKeys",(function(t,e){if(!C(t))throw new TypeError;return F(e)||(e=A(e)),y(t,e)})),t("deleteMetadata",(function(t,e,u){if(!C(e))throw new TypeError;F(u)||(u=A(u));var r=p(e,u,!1);if(F(r))return!1;if(!r.delete(t))return!1;if(r.size>0)return!0;var n=D.get(e);return n.delete(u),n.size>0||D.delete(e),!0}))}(r)}()}(u||(u={}))},OhKz:function(t,e,u){var r=u("jl4x"),n=u("jhuc"),o=u("70tN"),i=u("JI+r"),s=Object.defineProperty;e.f=r?s:function(t,e,u){if(o(t),e=i(e,!0),o(u),n)try{return s(t,e,u)}catch(r){}if("get"in u||"set"in u)throw TypeError("Accessors not supported");return"value"in u&&(t[e]=u.value),t}},OuD2:function(t,e,u){var r=u("YbPo"),n=u("kd5c"),o=function(t){return"function"==typeof t?t:void 0};t.exports=function(t,e){return arguments.length<2?o(r[t])||o(n[t]):r[t]&&r[t][e]||n[t]&&n[t][e]}},PpKG:function(t,e){t.exports=!1},QBSY:function(t,e,u){var r=u("kd5c"),n=u("xEpy");t.exports=function(t,e){try{n(r,t,e)}catch(u){r[t]=e}return e}},QDZz:function(t,e,u){var r=u("YEnO"),n=u("/EoU"),o=u("5fGo"),i=u("1uQW"),s=o("IE_PROTO"),a=Object.prototype;t.exports=i?Object.getPrototypeOf:function(t){return t=n(t),r(t,s)?t[s]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?a:null}},QJ3H:function(t,e,u){var r=u("QmHw"),n=u("WmU+"),o="".split;t.exports=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(t){return"String"==n(t)?o.call(t,""):Object(t)}:Object},QPwu:function(t,e,u){var r=u("PpKG"),n=u("2NY6");(t.exports=function(t,e){return n[t]||(n[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.15.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},QmHw:function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},R6g9:function(t,e){t.exports=function(t){if(null==t)throw TypeError("Can't call method on "+t);return t}},SDu9:function(t,e,u){"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},SIxH:function(t,e){t.exports={}},ScJm:function(t,e,u){var r,n;void 0===(n="function"==typeof(r=function(){return function(){var t=arguments.length;if(0===t)throw new Error("resolveUrl requires at least one argument; got none.");var e=document.createElement("base");if(e.href=arguments[0],1===t)return e.href;var u=document.getElementsByTagName("head")[0];u.insertBefore(e,u.firstChild);for(var r,n=document.createElement("a"),o=1;o<t;o++)n.href=arguments[o],e.href=r=n.href;return u.removeChild(e),r}})?r.call(e,u,e,t):r)||(t.exports=n)},TEho:function(t,e,u){var r,n=u("70tN"),o=u("YY8j"),i=u("xC9C"),s=u("SIxH"),a=u("9ShI"),c=u("riOn"),l=u("5fGo")("IE_PROTO"),f=function(){},d=function(t){return"<script>"+t+"<\/script>"},D=function(){try{r=document.domain&&new ActiveXObject("htmlfile")}catch(n){}var t,e;D=r?function(t){t.write(d("")),t.close();var e=t.parentWindow.Object;return t=null,e}(r):((e=c("iframe")).style.display="none",a.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(d("document.F=Object")),t.close(),t.F);for(var u=i.length;u--;)delete D.prototype[i[u]];return D()};s[l]=!0,t.exports=Object.create||function(t,e){var u;return null!==t?(f.prototype=n(t),u=new f,f.prototype=null,u[l]=t):u=D(),void 0===e?u:o(u,e)}},Wm2b:function(t,e,u){const{defaultArgs:r,baseOptions:n}=u("8r2U"),{setLogging:o,setCustomLogger:i,log:s}=u("8Mcq"),a=u("8Na9"),c=u("3/j1"),{defaultOptions:l,getCreateFFmpegCore:f}=u("Cv/g"),{version:d}=u("r3oq"),D=Error("ffmpeg.wasm is not ready, make sure you have completed load().");t.exports=(t={})=>{const{log:e,logger:u,progress:p,...h}={...n,...l,...t};let b=null,v=null,y=null,E=!1,F=p;const m=({type:t,message:e})=>{s(t,e),a(e,F),(t=>{"FFMPEG_END"===t&&null!==y&&(y(),y=null,E=!1)})(e)};return o(e),i(u),s("info","use ffmpeg.wasm v"+d),{setProgress:t=>{F=t},setLogger:t=>{i(t)},setLogging:o,load:async()=>{if(s("info","load ffmpeg-core"),null!==b)throw Error("ffmpeg.wasm was loaded, you should not load it again, use ffmpeg.isLoaded() to check next time.");{s("info","loading ffmpeg-core");const{createFFmpegCore:t,corePath:e,workerPath:u,wasmPath:r}=await f(h);b=await t({mainScriptUrlOrBlob:e,printErr:t=>m({type:"fferr",message:t}),print:t=>m({type:"ffout",message:t}),locateFile:(t,e)=>{if("undefined"!=typeof window){if(void 0!==r&&t.endsWith("ffmpeg-core.wasm"))return r;if(void 0!==u&&t.endsWith("ffmpeg-core.worker.js"))return u}return e+t}}),v=b.cwrap("proxy_main","number",["number","number"]),s("info","ffmpeg-core loaded")}},isLoaded:()=>null!==b,run:(...t)=>{if(s("info","run ffmpeg command: "+t.join(" ")),null===b)throw D;if(E)throw Error("ffmpeg.wasm can only run one command at a time");return E=!0,new Promise(e=>{const u=[...r,...t].filter(t=>0!==t.length);y=e,v(...c(b,u))})},exit:()=>{if(null===b)throw D;E=!1,b.exit(1),b=null,v=null,y=null},FS:(t,...e)=>{if(s("info",`run FS.${t} ${e.map(t=>"string"==typeof t?t:`<${t.length} bytes binary file>`).join(" ")}`),null===b)throw D;{let r=null;try{r=b.FS[t](...e)}catch(u){throw"readdir"===t?Error(`ffmpeg.FS('readdir', '${e[0]}') error. Check if the path exists, ex: ffmpeg.FS('readdir', '/')`):"readFile"===t?Error(`ffmpeg.FS('readFile', '${e[0]}') error. Check if the path exists`):Error("Oops, something went wrong in FS operation.")}return r}}}}},"WmU+":function(t,e){var u={}.toString;t.exports=function(t){return u.call(t).slice(8,-1)}},XSeo:function(t,e,u){var r=u("kd5c"),n=u("LdkU"),o=r.WeakMap;t.exports="function"==typeof o&&/native code/.test(n(o))},XhlT:function(t,e,u){const r=u("ScJm"),{log:n}=u("8Mcq"),o=async(t,e)=>{n("info","fetch "+t);const u=await(await fetch(t)).arrayBuffer();n("info",`${t} file size = ${u.byteLength} bytes`);const r=new Blob([u],{type:e}),o=URL.createObjectURL(r);return n("info",`${t} blob URL = ${o}`),o};t.exports=async({corePath:t})=>{if("string"!=typeof t)throw Error("corePath should be a string!");const e=r(t),u=await o(e,"application/javascript"),i=await o(e.replace("ffmpeg-core.js","ffmpeg-core.wasm"),"application/wasm"),s=await o(e.replace("ffmpeg-core.js","ffmpeg-core.worker.js"),"application/javascript");return"undefined"==typeof createFFmpegCore?new Promise(t=>{const e=document.createElement("script"),r=()=>{e.removeEventListener("load",r),n("info","ffmpeg-core.js script loaded"),t({createFFmpegCore:createFFmpegCore,corePath:u,wasmPath:i,workerPath:s})};e.src=u,e.type="text/javascript",e.addEventListener("load",r),document.getElementsByTagName("head")[0].appendChild(e)}):(n("info","ffmpeg-core.js script is loaded already"),Promise.resolve({createFFmpegCore:createFFmpegCore,corePath:u,wasmPath:i,workerPath:s}))}},YAPA:function(t,e,u){var r=u("70tN"),n=u("9Q/V");t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,u={};try{(t=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(u,[]),e=u instanceof Array}catch(o){}return function(u,o){return r(u),n(o),e?t.call(u,o):u.__proto__=o,u}}():void 0)},YEnO:function(t,e,u){var r=u("/EoU"),n={}.hasOwnProperty;t.exports=Object.hasOwn||function(t,e){return n.call(r(t),e)}},YPxC:function(t,e,u){u("GSo0");const r=u("Wm2b"),{fetchFile:n}=u("Cv/g");t.exports={createFFmpeg:r,fetchFile:n}},YY8j:function(t,e,u){var r=u("jl4x"),n=u("OhKz"),o=u("70tN"),i=u("fk5N");t.exports=r?Object.defineProperties:function(t,e){o(t);for(var u,r=i(e),s=r.length,a=0;s>a;)n.f(t,u=r[a++],e[u]);return t}},YbPo:function(t,e,u){var r=u("kd5c");t.exports=r},ZfjD:function(t,e,u){var r=u("kd5c"),n=u("MEJ2").f,o=u("xEpy"),i=u("fEQ0"),s=u("QBSY"),a=u("oRA1"),c=u("wDzU");t.exports=function(t,e){var u,l,f,d,D,p=t.target,h=t.global,b=t.stat;if(u=h?r:b?r[p]||s(p,{}):(r[p]||{}).prototype)for(l in e){if(d=e[l],f=t.noTargetGet?(D=n(u,l))&&D.value:u[l],!c(h?l:p+(b?".":"#")+l,t.forced)&&void 0!==f){if(typeof d==typeof f)continue;a(d,f)}(t.sham||f&&f.sham)&&o(d,"sham",!0),i(u,l,d,t)}}},axFd:function(t,e,u){var r=u("OuD2");t.exports=r("navigator","userAgent")||""},"c/4c":function(t,e,u){var r=u("hPQV"),n=u("QmHw");t.exports=!!Object.getOwnPropertySymbols&&!n((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},cwTd:function(t,e,u){"use strict";var r=u("33Wo").IteratorPrototype,n=u("TEho"),o=u("+UhQ"),i=u("lcml"),s=u("1GJI"),a=function(){return this};t.exports=function(t,e,u){var c=e+" Iterator";return t.prototype=n(r,{next:o(1,u)}),i(t,c,!1,!0),s[c]=a,t}},dPRI:function(t,e,u){var r,n,o,i=u("XSeo"),s=u("kd5c"),a=u("wZF9"),c=u("xEpy"),l=u("YEnO"),f=u("2NY6"),d=u("5fGo"),D=u("SIxH");if(i||f.state){var p=f.state||(f.state=new(0,s.WeakMap)),h=p.get,b=p.has,v=p.set;r=function(t,e){if(b.call(p,t))throw new TypeError("Object already initialized");return e.facade=t,v.call(p,t,e),e},n=function(t){return h.call(p,t)||{}},o=function(t){return b.call(p,t)}}else{var y=d("state");D[y]=!0,r=function(t,e){if(l(t,y))throw new TypeError("Object already initialized");return e.facade=t,c(t,y,e),e},n=function(t){return l(t,y)?t[y]:{}},o=function(t){return l(t,y)}}t.exports={set:r,get:n,has:o,enforce:function(t){return o(t)?n(t):r(t,{})},getterFor:function(t){return function(e){var u;if(!a(e)||(u=n(e)).type!==t)throw TypeError("Incompatible receiver, "+t+" required");return u}}}},fEQ0:function(t,e,u){var r=u("kd5c"),n=u("xEpy"),o=u("YEnO"),i=u("QBSY"),s=u("LdkU"),a=u("dPRI"),c=a.get,l=a.enforce,f=String(String).split("String");(t.exports=function(t,e,u,s){var a,c=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,D=!!s&&!!s.noTargetGet;"function"==typeof u&&("string"!=typeof e||o(u,"name")||n(u,"name",e),(a=l(u)).source||(a.source=f.join("string"==typeof e?e:""))),t!==r?(c?!D&&t[e]&&(d=!0):delete t[e],d?t[e]=u:n(t,e,u)):d?t[e]=u:i(e,u)})(Function.prototype,"toString",(function(){return"function"==typeof this&&c(this).source||s(this)}))},fk5N:function(t,e,u){var r=u("2ylk"),n=u("xC9C");t.exports=Object.keys||function(t){return r(t,n)}},gmml:function(t,e,u){"use strict";function r(t,e){if(null==t)return{};var u,r,n=function(t,e){if(null==t)return{};var u,r,n={},o=Object.keys(t);for(r=0;r<o.length;r++)e.indexOf(u=o[r])>=0||(n[u]=t[u]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)e.indexOf(u=o[r])>=0||Object.prototype.propertyIsEnumerable.call(t,u)&&(n[u]=t[u])}return n}function n(t){return t.content.cloneNode(!0)}function o(t,...e){return t.map((t,u)=>{var r;return t+(null!==(r=e[u])&&void 0!==r?r:"")}).join("")}u.r(e);const i=()=>null,s=t=>{var e;return null!==(e=t.prototype.connectedCallback)&&void 0!==e?e:i},a=t=>{var e;return null!==(e=t.prototype.disconnectedCallback)&&void 0!==e?e:i},c=t=>{var e;return null!==(e=t.prototype.attributeChangedCallback)&&void 0!==e?e:i};var l=u("1KtX");function f(t){const e=isNaN(+t)?t:+t;if("number"==typeof e)return e;if(function(t){return"true"===t||"false"===t}(e))return"false"!=t;try{return Object(l.parse)(t)}catch(u){return t}}const d=["selector"];function D(t){let{selector:e}=t,u=r(t,d);return function(t){const r=a(t),o=s(t),i=c(t);t.selector=e;const l=null==t?void 0:t.styles,d=null==t?void 0:t.template;t.observedAttributes=null==t?void 0:t.observed,t.prototype.attributeChangedCallback=function(t,e,u){this[t]=f(u),this.attributeChanged&&this.attributeChanged(t,e,f(u)),i.call(t,e,f(u))},t.prototype.connectedCallback=function(){var t;const e=this.attachShadow({mode:u.mode});(l||this.styles)&&e.appendChild(l||this.styles),(null!=d&&d.content||null!==(t=this.template)&&void 0!==t&&t.content)&&e.appendChild(n(d||this.template)),e.querySelectorAll("slot").forEach(({name:t})=>{const e=this.querySelector(t);e&&!e.slot&&e.setAttribute("slot",t)}),this.connected&&this.connected.call(this),o.call(this)},t.prototype.disconnectedCallback=function(){r.call(this)},customElements.define(e,t)}}const p=["selector"];function h(t){let{selector:e}=t,u=r(t,p);return function(t){const r=s(t),o=a(t),i=c(t);t.is=u.extends,t.selector=e;const l=null==t?void 0:t.styles,d=null==t?void 0:t.template;t.observedAttributes=null==t?void 0:t.observed,t.prototype.attributeChangedCallback=function(t,e,u){this[t]=f(u),this.attributeChanged&&this.attributeChanged(t,e,f(u)),i.call(t,e,f(u))},t.prototype.connectedCallback=function(){var t;(l||this.styles)&&this.appendChild(l||this.styles),(null!=d&&d.content||null!==(t=this.template)&&void 0!==t&&t.content)&&this.appendChild(n(d||this.template)),this.connected&&this.connected.call(this),r.call(this)},t.prototype.disconnectedCallback=function(){o.call(this)},customElements.define(e,t,{extends:u.extends})}}function b(t){return(e,u)=>{var r;const n=null!==(r=e.connectedCallback)&&void 0!==r?r:i;e.connectedCallback=function(){let e;const r=this;var o;e=r.querySelector(t),0==!!e&&(e=null==r||null===(o=r.shadowRoot)||void 0===o?void 0:o.querySelector(t)),this[u]=e,n.call(this)}}}function v(t,e,u){return e in t?Object.defineProperty(t,e,{value:u,enumerable:!0,configurable:!0,writable:!0}):t[e]=u,t}function y(t,e){var u=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),u.push.apply(u,r)}return u}u("NRdK");class E{constructor(t,e){this.target=t,this.eventName=e}emit(t,e){this.target.dispatchEvent(new CustomEvent(this.eventName,function(t){for(var e=1;e<arguments.length;e++){var u=null!=arguments[e]?arguments[e]:{};e%2?y(Object(u),!0).forEach((function(e){v(t,e,u[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(u)):y(Object(u)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(u,e))}))}return t}({detail:t},e)))}}u("x/6R"),u("orcL");var F=function(t,e){return(F=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var u in e)e.hasOwnProperty(u)&&(t[u]=e[u])})(t,e)};function m(t,e){function u(){this.constructor=t}F(t,e),t.prototype=null===e?Object.create(e):(u.prototype=e.prototype,new u)}function C(t){return"function"==typeof t}var A=!1,g={Promise:void 0,set useDeprecatedSynchronousErrorHandling(t){t&&new Error,A=t},get useDeprecatedSynchronousErrorHandling(){return A}};function w(t){setTimeout((function(){throw t}),0)}var B={closed:!0,next:function(t){},error:function(t){if(g.useDeprecatedSynchronousErrorHandling)throw t;w(t)},complete:function(){}},x=Array.isArray||function(t){return t&&"number"==typeof t.length},_=function(){function t(t){return Error.call(this),this.message=t?t.length+" errors occurred during unsubscription:\n"+t.map((function(t,e){return e+1+") "+t.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=t,this}return t.prototype=Object.create(Error.prototype),t}(),S=function(){function t(t){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,t&&(this._ctorUnsubscribe=!0,this._unsubscribe=t)}return t.prototype.unsubscribe=function(){var e;if(!this.closed){var u,r=this._parentOrParents,n=this._ctorUnsubscribe,o=this._unsubscribe,i=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,r instanceof t)r.remove(this);else if(null!==r)for(var s=0;s<r.length;++s)r[s].remove(this);if(C(o)){n&&(this._unsubscribe=void 0);try{o.call(this)}catch(l){e=l instanceof _?O(l.errors):[l]}}if(x(i)){s=-1;for(var a=i.length;++s<a;){var c=i[s];if(null!==(u=c)&&"object"==typeof u)try{c.unsubscribe()}catch(l){e=e||[],l instanceof _?e=e.concat(O(l.errors)):e.push(l)}}}if(e)throw new _(e)}},t.prototype.add=function(e){var u=e;if(!e)return t.EMPTY;switch(typeof e){case"function":u=new t(e);case"object":if(u===this||u.closed||"function"!=typeof u.unsubscribe)return u;if(this.closed)return u.unsubscribe(),u;if(!(u instanceof t)){var r=u;(u=new t)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+e+" added to Subscription.")}var n=u._parentOrParents;if(null===n)u._parentOrParents=this;else if(n instanceof t){if(n===this)return u;u._parentOrParents=[n,this]}else{if(-1!==n.indexOf(this))return u;n.push(this)}var o=this._subscriptions;return null===o?this._subscriptions=[u]:o.push(u),u},t.prototype.remove=function(t){var e=this._subscriptions;if(e){var u=e.indexOf(t);-1!==u&&e.splice(u,1)}},t.EMPTY=function(t){return t.closed=!0,t}(new t),t}();function O(t){return t.reduce((function(t,e){return t.concat(e instanceof _?e.errors:e)}),[])}var k="function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random(),j=function(t){function e(u,r,n){var o=t.call(this)||this;switch(o.syncErrorValue=null,o.syncErrorThrown=!1,o.syncErrorThrowable=!1,o.isStopped=!1,arguments.length){case 0:o.destination=B;break;case 1:if(!u){o.destination=B;break}if("object"==typeof u){u instanceof e?(o.syncErrorThrowable=u.syncErrorThrowable,o.destination=u,u.add(o)):(o.syncErrorThrowable=!0,o.destination=new P(o,u));break}default:o.syncErrorThrowable=!0,o.destination=new P(o,u,r,n)}return o}return m(e,t),e.prototype[k]=function(){return this},e.create=function(t,u,r){var n=new e(t,u,r);return n.syncErrorThrowable=!1,n},e.prototype.next=function(t){this.isStopped||this._next(t)},e.prototype.error=function(t){this.isStopped||(this.isStopped=!0,this._error(t))},e.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},e.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,t.prototype.unsubscribe.call(this))},e.prototype._next=function(t){this.destination.next(t)},e.prototype._error=function(t){this.destination.error(t),this.unsubscribe()},e.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},e.prototype._unsubscribeAndRecycle=function(){var t=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=t,this},e}(S),P=function(t){function e(e,u,r,n){var o,i=t.call(this)||this;i._parentSubscriber=e;var s=i;return C(u)?o=u:u&&(o=u.next,r=u.error,n=u.complete,u!==B&&(C((s=Object.create(u)).unsubscribe)&&i.add(s.unsubscribe.bind(s)),s.unsubscribe=i.unsubscribe.bind(i))),i._context=s,i._next=o,i._error=r,i._complete=n,i}return m(e,t),e.prototype.next=function(t){if(!this.isStopped&&this._next){var e=this._parentSubscriber;g.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?this.__tryOrSetError(e,this._next,t)&&this.unsubscribe():this.__tryOrUnsub(this._next,t)}},e.prototype.error=function(t){if(!this.isStopped){var e=this._parentSubscriber,u=g.useDeprecatedSynchronousErrorHandling;if(this._error)u&&e.syncErrorThrowable?(this.__tryOrSetError(e,this._error,t),this.unsubscribe()):(this.__tryOrUnsub(this._error,t),this.unsubscribe());else if(e.syncErrorThrowable)u?(e.syncErrorValue=t,e.syncErrorThrown=!0):w(t),this.unsubscribe();else{if(this.unsubscribe(),u)throw t;w(t)}}},e.prototype.complete=function(){var t=this;if(!this.isStopped){var e=this._parentSubscriber;if(this._complete){var u=function(){return t._complete.call(t._context)};g.useDeprecatedSynchronousErrorHandling&&e.syncErrorThrowable?(this.__tryOrSetError(e,u),this.unsubscribe()):(this.__tryOrUnsub(u),this.unsubscribe())}else this.unsubscribe()}},e.prototype.__tryOrUnsub=function(t,e){try{t.call(this._context,e)}catch(u){if(this.unsubscribe(),g.useDeprecatedSynchronousErrorHandling)throw u;w(u)}},e.prototype.__tryOrSetError=function(t,e,u){if(!g.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{e.call(this._context,u)}catch(r){return g.useDeprecatedSynchronousErrorHandling?(t.syncErrorValue=r,t.syncErrorThrown=!0,!0):(w(r),!0)}return!1},e.prototype._unsubscribe=function(){var t=this._parentSubscriber;this._context=null,this._parentSubscriber=null,t.unsubscribe()},e}(j),T="function"==typeof Symbol&&Symbol.observable||"@@observable";function L(t){return t}function N(t){return 0===t.length?L:1===t.length?t[0]:function(e){return t.reduce((function(t,e){return e(t)}),e)}}var R=function(){function t(t){this._isScalar=!1,t&&(this._subscribe=t)}return t.prototype.lift=function(e){var u=new t;return u.source=this,u.operator=e,u},t.prototype.subscribe=function(t,e,u){var r=this.operator,n=function(t,e,u){if(t){if(t instanceof j)return t;if(t[k])return t[k]()}return t||e||u?new j(t,e,u):new j(B)}(t,e,u);if(n.add(r?r.call(n,this.source):this.source||g.useDeprecatedSynchronousErrorHandling&&!n.syncErrorThrowable?this._subscribe(n):this._trySubscribe(n)),g.useDeprecatedSynchronousErrorHandling&&n.syncErrorThrowable&&(n.syncErrorThrowable=!1,n.syncErrorThrown))throw n.syncErrorValue;return n},t.prototype._trySubscribe=function(t){try{return this._subscribe(t)}catch(e){g.useDeprecatedSynchronousErrorHandling&&(t.syncErrorThrown=!0,t.syncErrorValue=e),function(t){for(;t;){var e=t.destination;if(t.closed||t.isStopped)return!1;t=e&&e instanceof j?e:null}return!0}(t)?t.error(e):console.warn(e)}},t.prototype.forEach=function(t,e){var u=this;return new(e=M(e))((function(e,r){var n;n=u.subscribe((function(e){try{t(e)}catch(u){r(u),n&&n.unsubscribe()}}),r,e)}))},t.prototype._subscribe=function(t){var e=this.source;return e&&e.subscribe(t)},t.prototype[T]=function(){return this},t.prototype.pipe=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return 0===t.length?this:N(t)(this)},t.prototype.toPromise=function(t){var e=this;return new(t=M(t))((function(t,u){var r;e.subscribe((function(t){return r=t}),(function(t){return u(t)}),(function(){return t(r)}))}))},t.create=function(e){return new t(e)},t}();function M(t){if(t||(t=g.Promise||Promise),!t)throw new Error("no Promise impl found");return t}var I=function(){function t(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return t.prototype=Object.create(Error.prototype),t}(),z=function(t){function e(e,u){var r=t.call(this)||this;return r.subject=e,r.subscriber=u,r.closed=!1,r}return m(e,t),e.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var t=this.subject,e=t.observers;if(this.subject=null,e&&0!==e.length&&!t.isStopped&&!t.closed){var u=e.indexOf(this.subscriber);-1!==u&&e.splice(u,1)}}},e}(S),U=function(t){function e(e){var u=t.call(this,e)||this;return u.destination=e,u}return m(e,t),e}(j),H=function(t){function e(){var e=t.call(this)||this;return e.observers=[],e.closed=!1,e.isStopped=!1,e.hasError=!1,e.thrownError=null,e}return m(e,t),e.prototype[k]=function(){return new U(this)},e.prototype.lift=function(t){var e=new V(this,this);return e.operator=t,e},e.prototype.next=function(t){if(this.closed)throw new I;if(!this.isStopped)for(var e=this.observers,u=e.length,r=e.slice(),n=0;n<u;n++)r[n].next(t)},e.prototype.error=function(t){if(this.closed)throw new I;this.hasError=!0,this.thrownError=t,this.isStopped=!0;for(var e=this.observers,u=e.length,r=e.slice(),n=0;n<u;n++)r[n].error(t);this.observers.length=0},e.prototype.complete=function(){if(this.closed)throw new I;this.isStopped=!0;for(var t=this.observers,e=t.length,u=t.slice(),r=0;r<e;r++)u[r].complete();this.observers.length=0},e.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},e.prototype._trySubscribe=function(e){if(this.closed)throw new I;return t.prototype._trySubscribe.call(this,e)},e.prototype._subscribe=function(t){if(this.closed)throw new I;return this.hasError?(t.error(this.thrownError),S.EMPTY):this.isStopped?(t.complete(),S.EMPTY):(this.observers.push(t),new z(this,t))},e.prototype.asObservable=function(){var t=new R;return t.source=this,t},e.create=function(t,e){return new V(t,e)},e}(R),V=function(t){function e(e,u){var r=t.call(this)||this;return r.destination=e,r.source=u,r}return m(e,t),e.prototype.next=function(t){var e=this.destination;e&&e.next&&e.next(t)},e.prototype.error=function(t){var e=this.destination;e&&e.error&&this.destination.error(t)},e.prototype.complete=function(){var t=this.destination;t&&t.complete&&this.destination.complete()},e.prototype._subscribe=function(t){return this.source?this.source.subscribe(t):S.EMPTY},e}(H),G=function(t){function e(e){var u=t.call(this)||this;return u._value=e,u}return m(e,t),Object.defineProperty(e.prototype,"value",{get:function(){return this.getValue()},enumerable:!0,configurable:!0}),e.prototype._subscribe=function(e){var u=t.prototype._subscribe.call(this,e);return u&&!u.closed&&e.next(this._value),u},e.prototype.getValue=function(){if(this.hasError)throw this.thrownError;if(this.closed)throw new I;return this._value},e.prototype.next=function(e){t.prototype.next.call(this,this._value=e)},e}(H);function Y(t){var e,u;return u=e=class extends t{constructor(...t){super(...t),this._state=new G(null),this.state$=this._state.asObservable()}setState(t){this._state.next(t)}get state(){return this._state.value}},e.observedAttributes=void 0,e.selector="",e.is=void 0,e.template=void 0,e.styles=void 0,u}function J(t,...e){const u=document.createElement("template");return u.innerHTML=u.innerHTML=o(t,e),u}function Q(t,...e){const u=document.createElement("style");return u.textContent=o(t,e),u}let q,K,W,X,Z,$,tt,et=t=>t;q=D({selector:"bs-icon",mode:"open"}),q((X=W=class extends(Y(HTMLElement)){constructor(...t){super(...t),this.href="assets/icons/bs-icons.svg",this._icon="",this.color=void 0,this.size=void 0,this.styles=Q(Z||(Z=et`
    :host {
      display: flex;
      width: 24px;
      height: 24px;
    }
    svg {
      width: 24px;
      height: 24px;
      fill: var(--icon-color);
    }
  `)),this.template=J($||($=et` <svg><use xlink:href=""></use></svg> `)),this.use=void 0}get icon(){return this._icon}set icon(t){this._icon=t,this.setIcon(this.icon)}connected(){this.use=this.shadowRoot.querySelector("use"),this.setIcon(this.icon)}setIcon(t){this.use&&this.use.setAttribute("xlink:href",`${this.href}#${t}`)}},W.observed=["href","icon","color","size"],K=X));class ut extends HTMLButtonElement{}const rt=Q(tt||(tt=(t=>t)`
  button[is='text-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='text-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='text-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='text-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='text-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='text-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='text-button'] {
    background-color: var(--white);
    border-color: transparent;
    color: var(--grey-05);
    fill: var(--grey-05);
  }

  button[is='text-button']:hover {
    background-color: var(--grey-01);
    border-color: var(--grey-01);
    color: var(--black);
    fill: var(--black);
  }

  /* Icon */
  button[is='text-button'] bs-icon,
  button[is='text-button']:hover bs-icon {
    border-color: transparent;
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  /* Disabled */
  button[is='text-button'][type='submit']:disabled,
  button[is='text-button'].cancel:disabled,
  button[is='text-button'].delete:disabled,
  button[is='text-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  /* Disabled / Hover */
  button[is='text-button'][type='submit']:disabled:hover,
  button[is='text-button'].cancel:disabled:hover,
  button[is='text-button'].delete:disabled:hover,
  button[is='text-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='text-button'][type='submit']:disabled bs-icon,
  button[is='text-button'].cancel:disabled bs-icon,
  button[is='text-button'].delete:disabled bs-icon,
  button[is='text-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='text-button'][type='submit'] > bs-icon,
  button[is='text-button'][type='submit']:hover > bs-icon {
    border-color: transparent;
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='text-button'].cancel > bs-icon,
  button[is='text-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='text-button'].delete > bs-icon,
  button[is='text-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));var nt,ot;let it;h({selector:"text-button",extends:"button"})((ot=nt=class extends ut{constructor(...t){super(...t),this.size="default",this.content="default",this.styles=rt}},nt.observed=["size","content"],ot));const st=Q(it||(it=(t=>t)`
  button[is='outlined-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='outlined-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='outlined-button'] > [slot='prefix'] {
    margin-right: 0;
    margin-left: 0;
    order: 0;
  }

  button[is='outlined-button'] > [slot='suffix'] {
    margin-left: 0;
    margin-right: 0;
    order: 2;
  }

  .medium,
  button[is='outlined-button'][size='medium'] {
    padding: 8px 12px;
  }

  .small,
  button[is='outlined-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='outlined-button'] {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--blue-05);
    fill: var(--blue-05);
  }

  button[is='outlined-button'] bs-icon {
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  button[is='outlined-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-grey-4dp-0-offset-x) * 1px)
        calc(var(--shadow-grey-4dp-0-offset-y) * 1px)
        calc(var(--shadow-grey-4dp-0-radius) * 1px)
        var(--shadow-grey-4dp-0-color)
    );
    background-color: var(--white);
    border-color: var(--grey-03);
    color: var(--blue-06);
    fill: var(--blue-06);
  }

  button[is='outlined-button'][type='submit']:disabled,
  button[is='outlined-button'].cancel:disabled,
  button[is='outlined-button'].delete:disabled,
  button[is='outlined-button']:disabled {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--grey-03);
    fill: var(--grey-03);
    filter: none;
  }

  button[is='outlined-button'][type='submit']:disabled:hover,
  button[is='outlined-button'].cancel:disabled:hover,
  button[is='outlined-button'].delete:disabled:hover,
  button[is='outlined-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--grey-02);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='outlined-button'][type='submit']:disabled bs-icon,
  button[is='outlined-button'].cancel:disabled bs-icon,
  button[is='outlined-button'].delete:disabled bs-icon,
  button[is='outlined-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='outlined-button'][type='submit'],
  button[is='outlined-button'][type='submit']:hover {
    color: var(--green-05);
    fill: var(--green-05);
  }

  button[is='outlined-button'][type='submit'] > bs-icon,
  button[is='outlined-button'][type='submit']:hover > bs-icon {
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='outlined-button'].cancel,
  button[is='outlined-button'].cancel:hover {
    color: var(--red-05);
    fill: var(--red-05);
  }

  button[is='outlined-button'].cancel > bs-icon,
  button[is='outlined-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='outlined-button'].delete,
  button[is='outlined-button'].delete:hover {
    color: var(--orange-05);
    fill: var(--orange-05);
  }

  button[is='outlined-button'].delete > bs-icon,
  button[is='outlined-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));var at,ct;let lt;h({selector:"outlined-button",extends:"button"})((ct=at=class extends HTMLButtonElement{constructor(...t){super(...t),this.size="default",this.content="default",this.styles=st}},at.observed=["size","content"],ct));const ft=Q(lt||(lt=(t=>t)`
  button[is='shaded-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='shaded-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='shaded-button'] > [slot='prefix'] {
    margin-left: 0;
    order: 0;
  }

  button[is='shaded-button'] > [slot='suffix'] {
    margin-right: 0;
    order: 2;
  }

  /* Size Medium */
  .medium,
  button[is='shaded-button'][size='medium'] {
    padding: 8px 12px;
  }

  /* Size Small */
  .small,
  button[is='shaded-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='shaded-button'] {
    background-color: var(--light-grey);
    border-color: transparent;
    color: var(--blue-05);
    fill: var(--blue-05);
  }

  button[is='shaded-button'] bs-icon {
    color: var(--blue-04);
    fill: var(--blue-04);
  }

  button[is='shaded-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-grey-4dp-0-offset-x) * 1px)
        calc(var(--shadow-grey-4dp-0-offset-y) * 1px)
        calc(var(--shadow-grey-4dp-0-radius) * 1px)
        var(--shadow-grey-4dp-0-color)
    );
    background-color: var(--white);
    border-color: var(--white);
    color: var(--blue-06);
    fill: var(--blue-06);
  }

  /* Disabled */
  button[is='shaded-button'][type='submit']:disabled,
  button[is='shaded-button'].cancel:disabled,
  button[is='shaded-button'].delete:disabled,
  button[is='shaded-button']:disabled {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
    filter: none;
  }

  /* Disabled / Hover */
  button[is='shaded-button'][type='submit']:disabled:hover,
  button[is='shaded-button'].cancel:disabled:hover,
  button[is='shaded-button'].delete:disabled:hover,
  button[is='shaded-button']:disabled:hover {
    background-color: var(--white);
    border-color: var(--white);
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit']:disabled bs-icon,
  button[is='shaded-button'].cancel:disabled bs-icon,
  button[is='shaded-button'].delete:disabled bs-icon,
  button[is='shaded-button']:disabled bs-icon {
    color: var(--grey-03);
    fill: var(--grey-03);
  }

  button[is='shaded-button'][type='submit'],
  button[is='shaded-button'][type='submit']:hover {
    color: var(--green-06);
    fill: var(--green-06);
  }

  button[is='shaded-button'][type='submit'] > bs-icon,
  button[is='shaded-button'][type='submit']:hover > bs-icon {
    color: var(--green-04);
    fill: var(--green-04);
  }

  button[is='shaded-button'].cancel,
  button[is='shaded-button'].cancel:hover {
    color: var(--red-06);
    fill: var(--red-06);
  }

  button[is='shaded-button'].cancel > bs-icon,
  button[is='shaded-button'].cancel:hover > bs-icon {
    color: var(--red-04);
    fill: var(--red-04);
  }

  button[is='shaded-button'].delete,
  button[is='shaded-button'].delete:hover {
    color: var(--orange-06);
    fill: var(--orange-06);
  }

  button[is='shaded-button'].delete > bs-icon,
  button[is='shaded-button'].delete:hover > bs-icon {
    color: var(--orange-04);
    fill: var(--orange-04);
  }
`));var dt,Dt;let pt;h({selector:"shaded-button",extends:"button"})((Dt=dt=class extends HTMLButtonElement{constructor(...t){super(...t),this.size="default",this.content="default",this.styles=ft}},dt.observed=["size","content"],Dt));const ht=Q(pt||(pt=(t=>t)`
  button[is='contained-button'] {
    display: inline-flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 16px;

    border-width: 1px;
    border-style: solid;
    border-color: transparent;
    border-radius: 8px;

    font-size: calc(var(--manrope-button-font-size) * 1px);
    text-decoration: var(--manrope-button-text-decoration);
    font-family: var(--manrope-button-font-family);
    font-weight: var(--manrope-button-font-weight);
    font-style: var(--manrope-button-font-style);
    font-stretch: var(--manrope-button-font-stretch);
    letter-spacing: var(--manrope-button-letter-spacing);
    line-height: calc(var(--manrope-button-line-height) * 1px);
    text-transform: var(--manrope-button-text-case);
    transition: all 100ms ease-in-out;
  }

  button[is='contained-button'] > * {
    order: 1;
    margin: 0 4px;
  }

  button[is='contained-button'] > [slot='prefix'] {
    margin-left: 0;
    margin-right: 0;
    order: 0;
  }

  button[is='contained-button'] > [slot='suffix'] {
    margin-left: 0;
    margin-right: 0;
    order: 2;
  }

  .medium,
  button[is='contained-button'][size='medium'] {
    padding: 8px 12px;
  }

  .small,
  button[is='contained-button'][size='small'] {
    padding: 4px 8px;
  }

  button[is='contained-button'] {
    background-color: var(--blue-05);
    border-color: var(--blue-05);
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'] bs-icon {
    color: var(--blue-02);
    fill: var(--blue-02);
  }

  button[is='contained-button']:hover {
    filter: drop-shadow(
      calc(var(--shadow-blue-4dp-0-offset-x) * 1px)
        calc(var(--shadow-blue-4dp-0-offset-y) * 1px)
        calc(var(--shadow-blue-4dp-0-radius) * 1px)
        var(--shadow-blue-4dp-0-color)
    );
    background-color: var(--blue-04);
    border-color: var(--blue-04);
    color: var(--white);
    fill: var(--white);
  }

  button[is='contained-button']:hover bs-icon {
    color: var(--blue-01);
    fill: var(--blue-01);
  }

  button[is='contained-button'][type='submit']:disabled,
  button[is='contained-button'].cancel:disabled,
  button[is='contained-button'].delete:disabled,
  button[is='contained-button']:disabled {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit']:disabled:hover,
  button[is='contained-button'].cancel:disabled:hover,
  button[is='contained-button'].delete:disabled:hover,
  button[is='contained-button']:disabled:hover {
    background-color: var(--grey-04);
    border-color: var(--grey-04);
    color: var(--grey-02);
    fill: var(--grey-02);
    filter: none;
  }

  button[is='contained-button'][type='submit']:disabled bs-icon,
  button[is='contained-button'].cancel:disabled bs-icon,
  button[is='contained-button'].delete:disabled bs-icon,
  button[is='contained-button']:disabled bs-icon {
    color: var(--grey-02);
    fill: var(--grey-02);
  }

  button[is='contained-button'][type='submit'],
  button[is='contained-button'][type='submit']:hover {
    color: var(--green-01);
    fill: var(--green-01);
  }

  button[is='contained-button'][type='submit'] > bs-icon,
  button[is='contained-button'][type='submit']:hover > bs-icon {
    color: var(--green-02);
    fill: var(--green-02);
  }

  button[is='contained-button'].cancel,
  button[is='contained-button'].cancel:hover {
    color: var(--red-01);
    fill: var(--red-01);
  }

  button[is='contained-button'].cancel > bs-icon,
  button[is='contained-button'].cancel:hover > bs-icon {
    color: var(--red-02);
    fill: var(--red-02);
  }

  button[is='contained-button'].delete,
  button[is='contained-button'].delete:hover {
    color: var(--orange-01);
    fill: var(--orange-01);
  }

  button[is='contained-button'].delete > bs-icon,
  button[is='contained-button'].delete:hover > bs-icon {
    color: var(--orange-02);
    fill: var(--orange-02);
  }
`));var bt,vt;h({selector:"contained-button",extends:"button"})((vt=bt=class extends HTMLButtonElement{constructor(...t){super(...t),this.size="default",this.content="default",this.styles=ht}},bt.observed=["size","content"],vt));const yt="Av2zrJE1SXXWr9LaIOd5BD2dmKCHMBCKp2nQYR/L0M/oBULOtXVlhy7GJdijAXod6gkL2r9GdTQNyQTD5rO+AQAAAAB2eyJvcmlnaW4iOiJodHRwczovL2RldnBhcmFuYS5teDo0NDMiLCJmZWF0dXJlIjoiVW5yZXN0cmljdGVkU2hhcmVkQXJyYXlCdWZmZXIiLCJleHBpcnkiOjE2Mzk1MjYzOTksImlzU3ViZG9tYWluIjp0cnVlfQ==";var Et=u("YPxC");let Ft=null;class mt{async onTranscode(t,e,u,r="mp4"){const n=new Blob(e,{type:t});null===Ft&&(Ft=Object(Et.createFFmpeg)({corePath:"assets/ffmpeg/ffmpeg-core.js",log:!0}));const o=u.querySelector("span");return async function(){const t=["-f",r];o.textContent="Convertendo",Ft.isLoaded()||await Ft.load(),Ft.FS("writeFile","video.webm",await Object(Et.fetchFile)(n));const e="gif"===r?["-t","2.0","-ss","2.0",...t]:[...t];await Ft.run("-i","video.webm",...e,"video."+r);const u=Ft.FS("readFile","video."+r),i=document.createElement("a");i.href=URL.createObjectURL(new Blob([u.buffer],{type:"video/"+r})),i.download=(()=>{const t=Date().toString().split("GMT");return null==t?void 0:t.shift().trim().replace(new RegExp(" ","g"),"-")})()+"."+r,i.click()}().then(()=>{o.textContent=r.toUpperCase()})}}let Ct,At,gt,wt,Bt=t=>t;function xt(t,e,u,r){u&&Object.defineProperty(t,e,{enumerable:u.enumerable,configurable:u.configurable,writable:u.writable,value:u.initializer?u.initializer.call(r):void 0})}function _t(t,e,u,r,n){var o={};return Object.keys(r).forEach((function(t){o[t]=r[t]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=u.slice().reverse().reduce((function(u,r){return r(t,e,u)||u}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(t,e,o),o=null),o}Ct=D({selector:"devpr-root",mode:"open"}),Ct(At=class extends HTMLElement{constructor(...t){super(...t),this.mimeType=void 0,this.stream=void 0,this.mediaRecorder=void 0,this.recordedBlobs=[],this.button=void 0,this.transcode=void 0,this.video=void 0,this.link=void 0,this.styles=Q(gt||(gt=Bt`
    :host {
      background-image: url('assets/images/pair-programming.svg');
      background-position: left bottom;
      background-repeat: no-repeat;
    }

    main {
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 800px;
      margin: 0px auto;
      flex: 1;
    }

    section {
      flex: 1;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    section video {
      position: absolute;
      width: 100%;
      max-width: 100%;
      border-radius: 8px;
      overflow: hidden;
      background: rgba(0, 0, 0, 0.1);
    }

    nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 80px;
      position: relative;
    }
    nav > div {
      gap: 16px;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      flex-direction: row;
      align-content: center;
    }
  `)),this.template=J(wt||(wt=Bt`
    <main>
      <section>
        <video id="recorder" playsinline autoplay></video>
        <video id="recorded" playsinline loop></video>
      </section>

      <!-- <video-gif></video-gif> -->

      <nav>
        <div>
          <button is="outlined-button" id="start-screen">
            <bs-icon slot="prefix" icon="cast"></bs-icon>
          </button>

          <button is="outlined-button" id="start-camera">
            <bs-icon slot="prefix" icon="video_camera_front"></bs-icon>
          </button>

          <button is="outlined-button" mode="outlined" id="record" disabled>
            <bs-icon slot="prefix" icon="record"></bs-icon>
            <span>Gravar</span>
          </button>
        </div>
        <div>
          <button is="outlined-button" id="play" disabled>
            <bs-icon slot="prefix" icon="play"></bs-icon>
            <span>Play</span>
          </button>

          <button is="outlined-button" mode="outlined" id="download" disabled>
            <bs-icon slot="prefix" icon="download"></bs-icon>
            <span>WebM</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="mp4"
            disabled
          >
            <bs-icon slot="prefix" icon="slow_motion_video"></bs-icon>
            <span>MP4</span>
          </button>

          <button
            is="outlined-button"
            mode="outlined"
            class="transcode"
            data-format="gif"
            disabled
          >
            <bs-icon slot="prefix" icon="motion_photos_auto"></bs-icon>
            <span>GIF</span>
          </button>
        </div>
      </nav>

      <a id="downlink" download></a>
      <output id="error-message"></output>
    </main>
  `))}connected(){if(this.shadowRoot){var t,e,u,r,n,o,i,s,a;this.button={play:null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("#play"),start:null===(e=this.shadowRoot)||void 0===e?void 0:e.querySelector("#start-screen"),camera:null===(u=this.shadowRoot)||void 0===u?void 0:u.querySelector("#start-camera"),record:null===(r=this.shadowRoot)||void 0===r?void 0:r.querySelector("#record"),download:null===(n=this.shadowRoot)||void 0===n?void 0:n.querySelector("#download")},this.transcode=null===(o=this.shadowRoot)||void 0===o?void 0:o.querySelectorAll(".transcode"),this.video={recorder:null===(i=this.shadowRoot)||void 0===i?void 0:i.querySelector("#recorder"),recorded:null===(s=this.shadowRoot)||void 0===s?void 0:s.querySelector("#recorded")},this.link=null===(a=this.shadowRoot)||void 0===a?void 0:a.querySelector("#downlink"),this.button.record.onclick=t=>{this.onRecord(t.currentTarget)};const c=new mt;this.transcode.forEach(t=>{t.onclick=({currentTarget:e})=>{this.toggleButtons(),c.onTranscode(this.mimeType,this.recordedBlobs,e,t.dataset.format).then(()=>{this.toggleButtons()})}}),this.button.download.onclick=this.onDownload(),this.button.start.onclick=this.onStart(),this.button.play.onclick=this.onPlay(),this.button.camera.onclick=this.onCamera(),this.video.recorder.muted=!0,this.button.start.focus(),document.head.querySelector("meta[http-equiv]").content=yt}}onStart(){return()=>{this.init({video:{width:1920,height:1080},audio:!0}).then(t=>{this.stream=t,this.button.start.disabled=!0,this.button.camera.disabled=!0,this.button.record.disabled=!1,this.video.recorder.srcObject=t}).then(()=>this.button.record.focus())}}onCamera(){return()=>{this.initCamera({video:{width:1920,height:1080},audio:!0}).then(t=>{this.stream=t,this.button.start.disabled=!0,this.button.camera.disabled=!0,this.button.record.disabled=!1,this.video.recorder.srcObject=t}).then(()=>this.button.record.focus())}}onPlay(){return()=>{const t=new Blob(this.recordedBlobs,{type:this.mimeType});this.video.recorded.src=URL.createObjectURL(t),this.video.recorded.controls=!0,this.video.recorded.play(),this.button.download.focus()}}onRecord(t){var e;const{state:u}=null!==(e=this.mediaRecorder)&&void 0!==e?e:{};u&&"recording"===u?(this.mediaRecorder.stop(),t.querySelector("bs-icon").setAttribute("icon","record")):(t.querySelector("bs-icon").setAttribute("icon","pause"),this.startRecording())}toggleButtons(){this.shadowRoot.querySelectorAll("button").forEach(t=>t.disabled=!t.disabled)}onDownload(){return()=>{const t=new Blob(this.recordedBlobs,{type:this.mimeType});this.link.href=URL.createObjectURL(t),this.link.download="video.webm",this.link.click()}}startRecording(){this.recordedBlobs=[],this.mimeType=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm","video/mp4"].find(t=>MediaRecorder.isTypeSupported(t)),this.mimeType||console.error("MediaRecorder support");try{this.mediaRecorder=new MediaRecorder(this.stream,{mimeType:this.mimeType}),this.mediaRecorder.ondataavailable=({data:t})=>{t&&t.size>0&&this.recordedBlobs.push(t)},this.mediaRecorder.start(),this.mediaRecorder.onstop=()=>{this.button.play.disabled=!1,this.button.download.disabled=!1,this.transcode.forEach(t=>t.disabled=!1),this.button.play.focus()}}catch(t){console.error("Exception while creating MediaRecorder:",t)}}async init({video:t,audio:e}){document.head.querySelector("meta[http-equiv]").content=yt;try{const u=await this.getDisplay(t),r=await this.getUser(e),[n]=r.getAudioTracks();return u.addTrack(n),u}catch(u){alert(u)}}async initCamera({video:t,audio:e}){try{return await this.getUserMedia({video:t,audio:e})}catch(u){alert(u)}}getUserMedia(t){return navigator.mediaDevices.getUserMedia(t)}getUser(t){return navigator.mediaDevices.getUserMedia({audio:t})}getDisplay(t){return navigator.mediaDevices.getDisplayMedia({video:t})}});let St,Ot,kt,jt,Pt,Tt,Lt,Nt,Rt,Mt,It,zt,Ut,Ht,Vt,Gt,Yt,Jt,Qt,qt,Kt,Wt,Xt=t=>t;const Zt=Object(Et.createFFmpeg)({corePath:"assets/ffmpeg/ffmpeg-core.js",log:!0});St=D({selector:"video-gif",mode:"open"}),Ot=b("input"),kt=Reflect.metadata("design:type","undefined"==typeof HTMLInputElement?Object:HTMLInputElement),jt=b("img"),Pt=Reflect.metadata("design:type","undefined"==typeof HTMLImageElement?Object:HTMLImageElement),Tt=b("button"),Lt=Reflect.metadata("design:type","undefined"==typeof HTMLButtonElement?Object:HTMLButtonElement),Nt=(t,e)=>{const u={get(){return new E(this,void 0!==e?e:t.key)},enumerable:!0,configurable:!0};return void 0!==e?Object.defineProperty(t,e,u):{kind:"method",placement:"prototype",key:t.key,descriptor:u}},Rt=Reflect.metadata("design:type",void 0===E?Object:E),Mt=function(t,e,u=!1){function r(r,n,o){let i;var s;i=r.querySelectorAll(t),0==!!i.length&&(i=null==r||null===(s=r.shadowRoot)||void 0===s?void 0:s.querySelectorAll(t)),i&&i.forEach(t=>{t.addEventListener(e,t=>{n[o].call(r,u?t.target:t)})})}return function(t,e,u){var n;const o=null!==(n=t.connectedCallback)&&void 0!==n?n:i;return t.connectedCallback=function(){new MutationObserver(()=>{r(this,t,e)}),r(this,t,e),o.call(this)},u}}("button","click"),It=Reflect.metadata("design:type",Function),zt=Reflect.metadata("design:paramtypes",["undefined"==typeof Event?Object:Event]),St((qt=Qt=class extends(Y(HTMLElement)){constructor(...t){var e;super(...t),e=this,this._ready=!1,this._video=void 0,this._gif=void 0,xt(this,"inputEl",Vt,this),xt(this,"imgEl",Gt,this),xt(this,"buttonEl",Yt,this),xt(this,"onClick",Jt,this),this.styles=Q(Kt||(Kt=Xt`
    :host {
      display: inline-flex;
    }
  `)),this.template=J(Wt||(Wt=Xt`
    <input type="file" name="video" />
    <img src="" />
    <button disabled>Converter</button>
  `)),this.load=async function(){await Zt.load(),e.ready=!0,e.buttonEl.disabled=!1}}set ready(t){this._ready=t}get ready(){return this._ready}set video(t){this._video=t}get video(){return this._video}set gif(t){this._gif=t}get gif(){return this._gif}setVideo(t){this.video=URL.createObjectURL(t)}onClicked(t){const e=this.shadowRoot.querySelector("input");console.log(e),this.onClick.emit(t.target)}async convertToGif(t){Zt.FS("writeFile","test.mp4",await Object(Et.fetchFile)(t)),await Zt.run("-i","test.mp4","-t","2.5","-ss","2.0","-f","gif","out.gif");const e=Zt.FS("readFile","out.gif"),u=URL.createObjectURL(new Blob([e.buffer],{type:"image/gif"}));this.imgEl.src=u}connected(){queueMicrotask(()=>{this.load()}),this.ready&&console.log("ready"),queueMicrotask(()=>{console.log(this.video),console.log(this.inputEl),console.log(this.imgEl),this.inputEl.onchange=({target:t})=>{const{files:e}=t;this.convertToGif(URL.createObjectURL(e.item(0)))}})}},Qt.observed=[],Ht=qt,Vt=_t(Ht.prototype,"inputEl",[Ot,kt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Gt=_t(Ht.prototype,"imgEl",[jt,Pt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Yt=_t(Ht.prototype,"buttonEl",[Tt,Lt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Jt=_t(Ht.prototype,"onClick",[Nt,Rt],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),_t(Ht.prototype,"onClicked",[Mt,It,zt],Object.getOwnPropertyDescriptor(Ht.prototype,"onClicked"),Ht.prototype),Ut=Ht))},hMsm:function(t,e,u){var r=u("c/4c");t.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},hPQV:function(t,e,u){var r,n,o=u("kd5c"),i=u("axFd"),s=o.process,a=s&&s.versions,c=a&&a.v8;c?n=(r=c.split("."))[0]<4?1:r[0]+r[1]:i&&(!(r=i.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=i.match(/Chrome\/(\d+)/))&&(n=r[1]),t.exports=n&&+n},jhuc:function(t,e,u){var r=u("jl4x"),n=u("QmHw"),o=u("riOn");t.exports=!r&&!n((function(){return 7!=Object.defineProperty(o("div"),"a",{get:function(){return 7}}).a}))},jl4x:function(t,e,u){var r=u("QmHw");t.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},kEo8:function(t,e,u){var r=u("QJ3H"),n=u("R6g9");t.exports=function(t){return r(n(t))}},kd5c:function(t,e){var u=function(t){return t&&t.Math==Math&&t};t.exports=u("object"==typeof globalThis&&globalThis)||u("object"==typeof window&&window)||u("object"==typeof self&&self)||u("object"==typeof global&&global)||function(){return this}()||Function("return this")()},lErv:function(t,e,u){var r=u("kEo8"),n=u("KG2+"),o=u("ljdl"),i=function(t){return function(e,u,i){var s,a=r(e),c=n(a.length),l=o(i,c);if(t&&u!=u){for(;c>l;)if((s=a[l++])!=s)return!0}else for(;c>l;l++)if((t||l in a)&&a[l]===u)return t||l||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},lZ8N:function(t,e,u){u("ScJm");const{devDependencies:r}=u("r3oq");t.exports={corePath:`https://unpkg.com/@ffmpeg/core@${r["@ffmpeg/core"].substring(1)}/dist/ffmpeg-core.js`}},lcml:function(t,e,u){var r=u("OhKz").f,n=u("YEnO"),o=u("7Sby")("toStringTag");t.exports=function(t,e,u){t&&!n(t=u?t:t.prototype,o)&&r(t,o,{configurable:!0,value:e})}},ljdl:function(t,e,u){var r=u("u67S"),n=Math.max,o=Math.min;t.exports=function(t,e){var u=r(t);return u<0?n(u+e,0):o(u,e)}},oRA1:function(t,e,u){var r=u("YEnO"),n=u("Jb/1"),o=u("MEJ2"),i=u("OhKz");t.exports=function(t,e){for(var u=n(e),s=i.f,a=o.f,c=0;c<u.length;c++){var l=u[c];r(t,l)||s(t,l,a(e,l))}}},orcL:function(t,e,u){var r=u("kd5c"),n=u("sPvm"),o=u("x/6R"),i=u("xEpy"),s=u("7Sby"),a=s("iterator"),c=s("toStringTag"),l=o.values;for(var f in n){var d=r[f],D=d&&d.prototype;if(D){if(D[a]!==l)try{i(D,a,l)}catch(h){D[a]=l}if(D[c]||i(D,c,f),n[f])for(var p in o)if(D[p]!==o[p])try{i(D,p,o[p])}catch(h){D[p]=o[p]}}}},r3oq:function(t){t.exports=JSON.parse('{"name":"@ffmpeg/ffmpeg","version":"0.10.1","description":"FFmpeg WebAssembly version","main":"src/index.js","types":"src/index.d.ts","directories":{"example":"examples"},"scripts":{"start":"node scripts/server.js","build":"rimraf dist && webpack --config scripts/webpack.config.prod.js","prepublishOnly":"npm run build","lint":"eslint src","wait":"rimraf dist && wait-on http://localhost:3000/dist/ffmpeg.dev.js","test":"npm-run-all -p -r start test:all","test:all":"npm-run-all wait test:browser:ffmpeg test:node:all","test:node":"node --experimental-wasm-threads --experimental-wasm-bulk-memory node_modules/.bin/_mocha --exit --bail --require ./scripts/test-helper.js","test:node:all":"npm run test:node -- ./tests/*.test.js","test:browser":"mocha-headless-chrome -a allow-file-access-from-files -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000","test:browser:ffmpeg":"npm run test:browser -- -f ./tests/ffmpeg.test.html"},"browser":{"./src/node/index.js":"./src/browser/index.js"},"repository":{"type":"git","url":"git+https://github.com/ffmpegwasm/ffmpeg.wasm.git"},"keywords":["ffmpeg","WebAssembly","video"],"author":"Jerome Wu <jeromewus@gmail.com>","license":"MIT","bugs":{"url":"https://github.com/ffmpegwasm/ffmpeg.wasm/issues"},"engines":{"node":">=12.16.1"},"homepage":"https://github.com/ffmpegwasm/ffmpeg.wasm#readme","dependencies":{"is-url":"^1.2.4","node-fetch":"^2.6.1","regenerator-runtime":"^0.13.7","resolve-url":"^0.2.1"},"devDependencies":{"@babel/core":"^7.12.3","@babel/preset-env":"^7.12.1","@ffmpeg/core":"^0.10.0","@types/emscripten":"^1.39.4","babel-loader":"^8.1.0","chai":"^4.2.0","cors":"^2.8.5","eslint":"^7.12.1","eslint-config-airbnb-base":"^14.1.0","eslint-plugin-import":"^2.22.1","express":"^4.17.1","mocha":"^8.2.1","mocha-headless-chrome":"^2.0.3","npm-run-all":"^4.1.5","wait-on":"^5.3.0","webpack":"^5.3.2","webpack-cli":"^4.1.0","webpack-dev-middleware":"^4.0.0"},"_resolved":"https://registry.npmjs.org/@ffmpeg/ffmpeg/-/ffmpeg-0.10.1.tgz","_integrity":"sha512-ChQkH7Rh57hmVo1LhfQFibWX/xqneolJKSwItwZdKPcLZuKigtYAYDIvB55pDfP17VtR1R77SxgkB2/UApB+Og==","_from":"@ffmpeg/ffmpeg@0.10.1"}')},riOn:function(t,e,u){var r=u("kd5c"),n=u("wZF9"),o=r.document,i=n(o)&&n(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},sPvm:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},u67S:function(t,e){var u=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:u)(t)}},wDzU:function(t,e,u){var r=u("QmHw"),n=/#|\.prototype\./,o=function(t,e){var u=s[i(t)];return u==c||u!=a&&("function"==typeof e?r(e):!!e)},i=o.normalize=function(t){return String(t).replace(n,".").toLowerCase()},s=o.data={},a=o.NATIVE="N",c=o.POLYFILL="P";t.exports=o},wZF9:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},"x/6R":function(t,e,u){"use strict";var r=u("kEo8"),n=u("x5C5"),o=u("1GJI"),i=u("dPRI"),s=u("Bmvx"),a=i.set,c=i.getterFor("Array Iterator");t.exports=s(Array,"Array",(function(t,e){a(this,{type:"Array Iterator",target:r(t),index:0,kind:e})}),(function(){var t=c(this),e=t.target,u=t.kind,r=t.index++;return!e||r>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==u?{value:r,done:!1}:"values"==u?{value:e[r],done:!1}:{value:[r,e[r]],done:!1}}),"values"),o.Arguments=o.Array,n("keys"),n("values"),n("entries")},x5C5:function(t,e,u){var r=u("7Sby"),n=u("TEho"),o=u("OhKz"),i=r("unscopables"),s=Array.prototype;null==s[i]&&o.f(s,i,{configurable:!0,value:n(null)}),t.exports=function(t){s[i][t]=!0}},xC9C:function(t,e){t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},xEpy:function(t,e,u){var r=u("jl4x"),n=u("OhKz"),o=u("+UhQ");t.exports=r?function(t,e,u){return n.f(t,e,o(1,u))}:function(t,e,u){return t[e]=u,t}}},[[0,0]]]);