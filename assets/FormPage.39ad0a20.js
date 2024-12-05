import{a9 as J,r as D,aa as E,aV as k,ag as $,ah as O,f as F,ad as N,ae as W,ab as H,aS as oe,aT as ie,ai as h,d as le,ac as j,af as Q,aU as X,a5 as ue,bc as ce}from"./index.9479d432.js";import{Q as de}from"./api.56a45dbe.js";import{F as me}from"./FormPage.f9e56d6a.js";import{Q as fe}from"./QImg.12dfbfd2.js";import"./format.b1432f7b.js";import"./axios.f7d2ff76.js";import"./QForm.37b94d7f.js";var xe=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},q={exports:{}};(function(d,a){(function(){var f=!1,o=function(e){if(e instanceof o)return e;if(!(this instanceof o))return new o(e);this.EXIFwrapped=e};d.exports&&(a=d.exports=o),a.EXIF=o;var x=o.Tags={36864:"ExifVersion",40960:"FlashpixVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",37121:"ComponentsConfiguration",37122:"CompressedBitsPerPixel",37500:"MakerNote",37510:"UserComment",40964:"RelatedSoundFile",36867:"DateTimeOriginal",36868:"DateTimeDigitized",37520:"SubsecTime",37521:"SubsecTimeOriginal",37522:"SubsecTimeDigitized",33434:"ExposureTime",33437:"FNumber",34850:"ExposureProgram",34852:"SpectralSensitivity",34855:"ISOSpeedRatings",34856:"OECF",37377:"ShutterSpeedValue",37378:"ApertureValue",37379:"BrightnessValue",37380:"ExposureBias",37381:"MaxApertureValue",37382:"SubjectDistance",37383:"MeteringMode",37384:"LightSource",37385:"Flash",37396:"SubjectArea",37386:"FocalLength",41483:"FlashEnergy",41484:"SpatialFrequencyResponse",41486:"FocalPlaneXResolution",41487:"FocalPlaneYResolution",41488:"FocalPlaneResolutionUnit",41492:"SubjectLocation",41493:"ExposureIndex",41495:"SensingMethod",41728:"FileSource",41729:"SceneType",41730:"CFAPattern",41985:"CustomRendered",41986:"ExposureMode",41987:"WhiteBalance",41988:"DigitalZoomRation",41989:"FocalLengthIn35mmFilm",41990:"SceneCaptureType",41991:"GainControl",41992:"Contrast",41993:"Saturation",41994:"Sharpness",41995:"DeviceSettingDescription",41996:"SubjectDistanceRange",40965:"InteroperabilityIFDPointer",42016:"ImageUniqueID"},w=o.TiffTags={256:"ImageWidth",257:"ImageHeight",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer",40965:"InteroperabilityIFDPointer",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",274:"Orientation",277:"SamplesPerPixel",284:"PlanarConfiguration",530:"YCbCrSubSampling",531:"YCbCrPositioning",282:"XResolution",283:"YResolution",296:"ResolutionUnit",273:"StripOffsets",278:"RowsPerStrip",279:"StripByteCounts",513:"JPEGInterchangeFormat",514:"JPEGInterchangeFormatLength",301:"TransferFunction",318:"WhitePoint",319:"PrimaryChromaticities",529:"YCbCrCoefficients",532:"ReferenceBlackWhite",306:"DateTime",270:"ImageDescription",271:"Make",272:"Model",305:"Software",315:"Artist",33432:"Copyright"},S=o.GPSTags={0:"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude",5:"GPSAltitudeRef",6:"GPSAltitude",7:"GPSTimeStamp",8:"GPSSatellites",9:"GPSStatus",10:"GPSMeasureMode",11:"GPSDOP",12:"GPSSpeedRef",13:"GPSSpeed",14:"GPSTrackRef",15:"GPSTrack",16:"GPSImgDirectionRef",17:"GPSImgDirection",18:"GPSMapDatum",19:"GPSDestLatitudeRef",20:"GPSDestLatitude",21:"GPSDestLongitudeRef",22:"GPSDestLongitude",23:"GPSDestBearingRef",24:"GPSDestBearing",25:"GPSDestDistanceRef",26:"GPSDestDistance",27:"GPSProcessingMethod",28:"GPSAreaInformation",29:"GPSDateStamp",30:"GPSDifferential"},V=o.IFD1Tags={256:"ImageWidth",257:"ImageHeight",258:"BitsPerSample",259:"Compression",262:"PhotometricInterpretation",273:"StripOffsets",274:"Orientation",277:"SamplesPerPixel",278:"RowsPerStrip",279:"StripByteCounts",282:"XResolution",283:"YResolution",284:"PlanarConfiguration",296:"ResolutionUnit",513:"JpegIFOffset",514:"JpegIFByteCount",529:"YCbCrCoefficients",530:"YCbCrSubSampling",531:"YCbCrPositioning",532:"ReferenceBlackWhite"},v=o.StringValues={ExposureProgram:{0:"Not defined",1:"Manual",2:"Normal program",3:"Aperture priority",4:"Shutter priority",5:"Creative program",6:"Action program",7:"Portrait mode",8:"Landscape mode"},MeteringMode:{0:"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{0:"Unknown",1:"Daylight",2:"Fluorescent",3:"Tungsten (incandescent light)",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",13:"Day white fluorescent (N 4600 - 5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{0:"Flash did not fire",1:"Flash fired",5:"Strobe return light not detected",7:"Strobe return light detected",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},SensingMethod:{1:"Not defined",2:"One-chip color area sensor",3:"Two-chip color area sensor",4:"Three-chip color area sensor",5:"Color sequential area sensor",7:"Trilinear sensor",8:"Color sequential linear sensor"},SceneCaptureType:{0:"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},SceneType:{1:"Directly photographed"},CustomRendered:{0:"Normal process",1:"Custom process"},WhiteBalance:{0:"Auto white balance",1:"Manual white balance"},GainControl:{0:"None",1:"Low gain up",2:"High gain up",3:"Low gain down",4:"High gain down"},Contrast:{0:"Normal",1:"Soft",2:"Hard"},Saturation:{0:"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{0:"Normal",1:"Soft",2:"Hard"},SubjectDistanceRange:{0:"Unknown",1:"Macro",2:"Close view",3:"Distant view"},FileSource:{3:"DSC"},Components:{0:"",1:"Y",2:"Cb",3:"Cr",4:"R",5:"G",6:"B"}};function y(e){return!!e.exifdata}function p(e,t){t=t||e.match(/^data\:([^\;]+)\;base64,/mi)[1]||"",e=e.replace(/^data\:([^\;]+)\;base64,/gmi,"");for(var s=atob(e),u=s.length,r=new ArrayBuffer(u),l=new Uint8Array(r),i=0;i<u;i++)l[i]=s.charCodeAt(i);return r}function P(e,t){var s=new XMLHttpRequest;s.open("GET",e,!0),s.responseType="blob",s.onload=function(u){(this.status==200||this.status===0)&&t(this.response)},s.send()}function b(e,t){function s(i){var c=T(i);e.exifdata=c||{};var A=G(i);if(e.iptcdata=A||{},o.isXmpEnabled){var m=ne(i);e.xmpdata=m||{}}t&&t.call(e)}if(e.src)if(/^data\:/i.test(e.src)){var u=p(e.src);s(u)}else if(/^blob\:/i.test(e.src)){var r=new FileReader;r.onload=function(i){s(i.target.result)},P(e.src,function(i){r.readAsArrayBuffer(i)})}else{var l=new XMLHttpRequest;l.onload=function(){if(this.status==200||this.status===0)s(l.response);else throw"Could not load image";l=null},l.open("GET",e.src,!0),l.responseType="arraybuffer",l.send(null)}else if(self.FileReader&&(e instanceof self.Blob||e instanceof self.File)){var r=new FileReader;r.onload=function(c){s(c.target.result)},r.readAsArrayBuffer(e)}}function T(e){var t=new DataView(e);if(t.getUint8(0)!=255||t.getUint8(1)!=216)return!1;for(var s=2,u=e.byteLength,r;s<u;){if(t.getUint8(s)!=255)return!1;if(r=t.getUint8(s+1),r==225)return re(t,s+4,t.getUint16(s+2)-2);s+=2+t.getUint16(s+2)}}function G(e){var t=new DataView(e);if(t.getUint8(0)!=255||t.getUint8(1)!=216)return!1;for(var s=2,u=e.byteLength,r=function(A,m){return A.getUint8(m)===56&&A.getUint8(m+1)===66&&A.getUint8(m+2)===73&&A.getUint8(m+3)===77&&A.getUint8(m+4)===4&&A.getUint8(m+5)===4};s<u;){if(r(t,s)){var l=t.getUint8(s+7);l%2!==0&&(l+=1),l===0&&(l=4);var i=s+8+l,c=t.getUint16(s+6+l);return Z(e,i,c)}s++}}var M={120:"caption",110:"credit",25:"keywords",55:"dateCreated",80:"byline",85:"bylineTitle",122:"captionWriter",105:"headline",116:"copyright",15:"category"};function Z(e,t,s){for(var u=new DataView(e),r={},l,i,c,A,m=t;m<t+s;)u.getUint8(m)===28&&u.getUint8(m+1)===2&&(A=u.getUint8(m+2),A in M&&(c=u.getInt16(m+3),i=M[A],l=R(u,m+5,c),r.hasOwnProperty(i)?r[i]instanceof Array?r[i].push(l):r[i]=[r[i],l]:r[i]=l)),m++;return r}function _(e,t,s,u,r){var l=e.getUint16(s,!r),i={},c,A,m;for(m=0;m<l;m++)c=s+m*12+2,A=u[e.getUint16(c,!r)],!A&&f&&console.log("Unknown tag: "+e.getUint16(c,!r)),i[A]=ee(e,c,t,s,r);return i}function ee(e,t,s,u,r){var l=e.getUint16(t+2,!r),i=e.getUint32(t+4,!r),c=e.getUint32(t+8,!r)+s,A,m,B,g,I,C;switch(l){case 1:case 7:if(i==1)return e.getUint8(t+8,!r);for(A=i>4?c:t+8,m=[],g=0;g<i;g++)m[g]=e.getUint8(A+g);return m;case 2:return A=i>4?c:t+8,R(e,A,i-1);case 3:if(i==1)return e.getUint16(t+8,!r);for(A=i>2?c:t+8,m=[],g=0;g<i;g++)m[g]=e.getUint16(A+2*g,!r);return m;case 4:if(i==1)return e.getUint32(t+8,!r);for(m=[],g=0;g<i;g++)m[g]=e.getUint32(c+4*g,!r);return m;case 5:if(i==1)return I=e.getUint32(c,!r),C=e.getUint32(c+4,!r),B=new Number(I/C),B.numerator=I,B.denominator=C,B;for(m=[],g=0;g<i;g++)I=e.getUint32(c+8*g,!r),C=e.getUint32(c+4+8*g,!r),m[g]=new Number(I/C),m[g].numerator=I,m[g].denominator=C;return m;case 9:if(i==1)return e.getInt32(t+8,!r);for(m=[],g=0;g<i;g++)m[g]=e.getInt32(c+4*g,!r);return m;case 10:if(i==1)return e.getInt32(c,!r)/e.getInt32(c+4,!r);for(m=[],g=0;g<i;g++)m[g]=e.getInt32(c+8*g,!r)/e.getInt32(c+4+8*g,!r);return m}}function te(e,t,s){var u=e.getUint16(t,!s);return e.getUint32(t+2+u*12,!s)}function ae(e,t,s,u){var r=te(e,t+s,u);if(r){if(r>e.byteLength)return{}}else return{};var l=_(e,t,t+r,V,u);if(l.Compression)switch(l.Compression){case 6:if(l.JpegIFOffset&&l.JpegIFByteCount){var i=t+l.JpegIFOffset,c=l.JpegIFByteCount;l.blob=new Blob([new Uint8Array(e.buffer,i,c)],{type:"image/jpeg"})}break;case 1:console.log("Thumbnail image format is TIFF, which is not implemented.");break;default:console.log("Unknown thumbnail image format '%s'",l.Compression)}else l.PhotometricInterpretation==2&&console.log("Thumbnail image format is RGB, which is not implemented.");return l}function R(e,t,s){var u="";for(n=t;n<t+s;n++)u+=String.fromCharCode(e.getUint8(n));return u}function re(e,t){if(R(e,t,4)!="Exif")return!1;var s,u,r,l,i,c=t+6;if(e.getUint16(c)==18761)s=!1;else if(e.getUint16(c)==19789)s=!0;else return!1;if(e.getUint16(c+2,!s)!=42)return!1;var A=e.getUint32(c+4,!s);if(A<8)return!1;if(u=_(e,c,c+A,w,s),u.ExifIFDPointer){l=_(e,c,c+u.ExifIFDPointer,x,s);for(r in l){switch(r){case"LightSource":case"Flash":case"MeteringMode":case"ExposureProgram":case"SensingMethod":case"SceneCaptureType":case"SceneType":case"CustomRendered":case"WhiteBalance":case"GainControl":case"Contrast":case"Saturation":case"Sharpness":case"SubjectDistanceRange":case"FileSource":l[r]=v[r][l[r]];break;case"ExifVersion":case"FlashpixVersion":l[r]=String.fromCharCode(l[r][0],l[r][1],l[r][2],l[r][3]);break;case"ComponentsConfiguration":l[r]=v.Components[l[r][0]]+v.Components[l[r][1]]+v.Components[l[r][2]]+v.Components[l[r][3]];break}u[r]=l[r]}}if(u.GPSInfoIFDPointer){i=_(e,c,c+u.GPSInfoIFDPointer,S,s);for(r in i){switch(r){case"GPSVersionID":i[r]=i[r][0]+"."+i[r][1]+"."+i[r][2]+"."+i[r][3];break}u[r]=i[r]}}return u.thumbnail=ae(e,c,A,s),u}function ne(e){if("DOMParser"in self){var t=new DataView(e);if(t.getUint8(0)!=255||t.getUint8(1)!=216)return!1;for(var s=2,u=e.byteLength,r=new DOMParser;s<u-4;)if(R(t,s,4)=="http"){var l=s-1,i=t.getUint16(s-2)-1,c=R(t,l,i),A=c.indexOf("xmpmeta>")+8;c=c.substring(c.indexOf("<x:xmpmeta"),A);var m=c.indexOf("x:xmpmeta")+10;c=c.slice(0,m)+'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:tiff="http://ns.adobe.com/tiff/1.0/" xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" xmlns:exif="http://ns.adobe.com/exif/1.0/" xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '+c.slice(m);var B=r.parseFromString(c,"text/xml");return se(B)}else s++}}function L(e){var t={};if(e.nodeType==1){if(e.attributes.length>0){t["@attributes"]={};for(var s=0;s<e.attributes.length;s++){var u=e.attributes.item(s);t["@attributes"][u.nodeName]=u.nodeValue}}}else if(e.nodeType==3)return e.nodeValue;if(e.hasChildNodes())for(var r=0;r<e.childNodes.length;r++){var l=e.childNodes.item(r),i=l.nodeName;if(t[i]==null)t[i]=L(l);else{if(t[i].push==null){var c=t[i];t[i]=[],t[i].push(c)}t[i].push(L(l))}}return t}function se(e){try{var t={};if(e.children.length>0)for(var s=0;s<e.children.length;s++){var u=e.children.item(s),r=u.attributes;for(var l in r){var i=r[l],c=i.nodeName,A=i.nodeValue;c!==void 0&&(t[c]=A)}var m=u.nodeName;if(typeof t[m]=="undefined")t[m]=L(u);else{if(typeof t[m].push=="undefined"){var B=t[m];t[m]=[],t[m].push(B)}t[m].push(L(u))}}else t=e.textContent;return t}catch(g){console.log(g.message)}}o.enableXmp=function(){o.isXmpEnabled=!0},o.disableXmp=function(){o.isXmpEnabled=!1},o.getData=function(e,t){return(self.Image&&e instanceof self.Image||self.HTMLImageElement&&e instanceof self.HTMLImageElement)&&!e.complete?!1:(y(e)?t&&t.call(e):b(e,t),!0)},o.getTag=function(e,t){if(!!y(e))return e.exifdata[t]},o.getIptcTag=function(e,t){if(!!y(e))return e.iptcdata[t]},o.getAllTags=function(e){if(!y(e))return{};var t,s=e.exifdata,u={};for(t in s)s.hasOwnProperty(t)&&(u[t]=s[t]);return u},o.getAllIptcTags=function(e){if(!y(e))return{};var t,s=e.iptcdata,u={};for(t in s)s.hasOwnProperty(t)&&(u[t]=s[t]);return u},o.pretty=function(e){if(!y(e))return"";var t,s=e.exifdata,u="";for(t in s)s.hasOwnProperty(t)&&(typeof s[t]=="object"?s[t]instanceof Number?u+=t+" : "+s[t]+" ["+s[t].numerator+"/"+s[t].denominator+`]\r
`:u+=t+" : ["+s[t].length+` values]\r
`:u+=t+" : "+s[t]+`\r
`);return u},o.readFromBinaryFile=function(e){return T(e)}}).call(xe)})(q,q.exports);function pe(d){return new Promise((a,f)=>{const o=new FileReader;o.onload=x=>a(x.target.result),o.onerror=x=>f(x),o.readAsDataURL(d)})}async function ge(d){return await Promise.all(Array.from(d).map(a=>pe(a)))}function K(d){const a=new Image;return new Promise((f,o)=>{a.onload=()=>f(a),a.onerror=x=>o(x),a.src=d})}const z={maxSize:720,quality:void 0,type:"image/jpeg"};async function he(d){const a=await ge(d);return await Promise.all(a.map(f=>K(f)))}function Y(d,a,f=z.maxSize){const o=f<d?f:d,x=f<a?f:a;return d>a?{width:o,height:a*(o/d)}:a>d?{width:d*(x/a),height:x}:{width:o,height:x}}function Ae(d){let a=1;return q.exports.getData(d,()=>{a=q.exports.getTag(d,"Orientation")}),a}function ve(d,a,f){const o={translate:{x:0,y:0},scale:{x:1,y:1},rotate:{angle:0}};switch(f){case 2:return{...o,translate:{...o.translate,x:d},scale:{...o.scale,x:-1}};case 3:return{...o,translate:{x:d,y:a},rotate:{angle:Math.PI}};case 4:return{...o,translate:{...o.translate,y:a},scale:{...o.scale,y:-1}};case 5:return{...o,scale:{...o.scale,x:-1},rotate:{angle:90*Math.PI/180}};case 6:return{...o,translate:{...o.translate,x:d},rotate:{angle:90*Math.PI/180}};case 7:return{...o,translate:{x:d,y:a},rotate:{angle:90*Math.PI/180},scale:{...o.scale,y:-1}};case 8:return{...o,translate:{...o.translate,y:a},rotate:{angle:-(90*Math.PI)/180}};default:return o}}async function ye(){const a=await K("data:image/jpeg;base64,/9j/4QAiRXhpZgAATU0AKgAAAAgAAQESAAMAAAABAAYAAAAAAAD/2wCEAAEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAf/AABEIAAEAAgMBEQACEQEDEQH/xABKAAEAAAAAAAAAAAAAAAAAAAALEAEAAAAAAAAAAAAAAAAAAAAAAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwA/8H//2Q==");return a.width===1&&a.height===2}const we=async(d,{maxSize:a=z.maxSize,quality:f=z.quality,type:o=z.type}={})=>{const x=document.createElement("canvas"),w=x.getContext("2d");if(!w)throw new Error("canvas can not created");const S=await he(d);return await ye()?S.map(p=>{const{width:P,height:b}=Y(p.width,p.height,a);return x.setAttribute("width",`${P}px`),x.setAttribute("height",`${b}px`),w.drawImage(p,0,0,P,b),x.toDataURL(o,f)}):S.map(y=>{const p=Ae(y),{width:P,height:b}=Y(p>4?y.height:y.width,p>4?y.width:y.height,a);x.setAttribute("width",`${P}px`),x.setAttribute("height",`${b}px`);const{translate:T,scale:G,rotate:M}=ve(P,b,p);return w.translate(T.x,T.y),w.scale(G.x,G.y),w.rotate(M.angle),p>4?w.drawImage(y,0,0,b,P):w.drawImage(y,0,0,P,b),x.toDataURL(o,f)})};class U{static toBase64(a){return new Promise((f,o)=>{const x=new FileReader;x.readAsDataURL(a),x.onload=()=>f(x.result),x.onerror=w=>o(w)})}static async imgToBase64(a){try{return(await we([a]))[0]}catch(f){throw console.error("Error processing image with EXIF rotation:",f),f}}static async setFile(a,f=[]){const o=await U.toBase64(a),x=a.name.split(".").pop().toLowerCase();if(f.length>0&&!f.includes(x))throw new Error(`Extension "${x}" is not allowed. Allowed extensions: ${f.join(", ")}`);return{name:a.name,size:a.size,sizeSerialize:U.bytesToSize(a.size),ext:x,mime:a.type,base64:o}}static async setImage(a,f=[]){const o=await U.imgToBase64(a),x=a.name.split(".").pop().toLowerCase();if(f.length>0&&!f.includes(x))throw new Error(`Extension "${x}" is not allowed. Allowed extensions: ${f.join(", ")}`);return{name:a.name,size:a.size,sizeSerialize:U.bytesToSize(a.size),ext:x,mime:a.type,base64:o}}static bytesToSize(a){const f=["Bytes","KB","MB","GB","TB"];if(a===0)return"0 Bytes";const o=Math.floor(Math.log(a)/Math.log(1024));return`${(a/Math.pow(1024,o)).toFixed(2)} ${f[o]}`}}class Se{static get File(){return U}}const Pe={name:"ProfileImage",props:{modelValue:{type:[String,Object],default:null},path:{type:String,default:{}.RESOURCES||"http://34.230.72.217:7000//resource/"},placeholder:{type:String,default:"images/blank_profile.png"},label:{type:String},disable:{type:Boolean},round:{type:Boolean,default:!1},ratio:{type:String,default:"1"},width:{type:String,default:"200px"},height:{type:String,default:"200px"}},setup(){const d=["image/apng","image/bmp","image/gif	","image/x-icon","image/jpeg","image/png","image/svg+xml","image/webp"],a=["apng","bmp","gif","ico","cur","jpg","jpeg","jfif","pjpeg","pjp","png","svg","webp"];return{error:D(null),imageMimes:d,imageExts:a,imgError:D(null)}},methods:{isImagesByExt(d){return this.imageExts.some(a=>d===a)},isImagesByMime(d){return this.imageMimes.some(a=>d===a)},isImage(d){if(d.mime)return this.isImagesByMime(d.mime);if(d.name){const a=d.name.split(".").pop().toLowerCase();return this.isImagesByExt(a)}return!1},getSrc(){return this.modelValue&&this.modelValue.base64?this.modelValue.base64:this.imgError?"images/blank_profile.png":this.modelValue?this.path+this.modelValue:this.placeholder},selectFile(d){this.error=null,this.$refs.inputFile.click()},async getFile(d){const f=d.target.files[0];if(typeof f=="object")if(this.isImagesByMime(f.type))try{const x=await Se.File.setImage(f);this.$emit("update:modelValue",x)}catch(x){this.error=x.message?x.message:"Unknown Error!"}else this.error="Only image allowed!";d.target.value=""}}},be={class:"input-image"},Fe={key:0,class:"txt-label q-mb-xs"},Be={key:0,class:"absolute-bottom text-center"},Ie={key:1,class:"error-container absolute-full text-subtitle flex flex-center text-negative text-center"};function Ce(d,a,f,o,x,w){return E(),k("div",be,[f.label?(E(),k("div",Fe,$(f.label),1)):O("",!0),F(fe,{class:oe(f.round?"round":""),src:w.getSrc(),ratio:f.ratio,style:ie("width:"+f.width+";height:"+f.height),onError:a[1]||(a[1]=S=>o.imgError=!0)},{default:N(()=>[f.disable?O("",!0):(E(),k("div",Be,[F(W,{round:"",size:"sm",color:"positive",icon:"photo_camera",onClick:w.selectFile},null,8,["onClick"]),f.modelValue?(E(),H(W,{key:0,class:"q-ml-sm",round:"",size:"sm",color:"negative",icon:"delete",onClick:a[0]||(a[0]=S=>d.$emit("update:modelValue",null))})):O("",!0)])),o.error?(E(),k("div",Ie,$(o.error),1)):O("",!0)]),_:1},8,["class","src","ratio","style"]),h("input",{ref:"inputFile",type:"file",onChange:a[2]||(a[2]=(...S)=>w.getFile&&w.getFile(...S)),accept:"image/*",style:{display:"none"}},null,544)])}var Ee=J(Pe,[["render",Ce],["__scopeId","data-v-da7743ae"]]);const De=le({name:"FormAccountPage",components:{FormPage:me,ProfileImage:Ee},setup(){return{endpoint:"accounts",title:D("Account"),data:D({isActive:"false"}),isPwd:D(!0),editMod:D(!0)}}}),Ue={class:"row"},Te={class:"col-12 q-mb-md text-center"},Re={class:"col-12 q-mb-md"},Qe={class:"row items-center"},Ve={class:"col-md-9 col-xs-12"},Ge={class:"col-12 q-mb-md"},Me={class:"row items-center"},_e={class:"col-md-9 col-xs-12"},Le={class:"col-12 q-mb-md"},ke={class:"row items-center"},Oe={class:"col-md-9 col-xs-12"},ze={class:"col-12 q-mb-md"},qe={class:"row items-center"},Xe={class:"col-md-9 col-xs-12"},Ne={class:"col-12 q-mb-md"},$e={class:"row items-center"},We={class:"col-md-9 col-xs-12"};function je(d,a,f,o,x,w){const S=j("ProfileImage"),V=j("FormPage",!0);return E(),H(V,{endpoint:d.endpoint,"title-value":d.title,"model-value":d.data,"edit-value":d.editMod,ref:"form","icon-value":"person"},{body:N(({model:v,edit:y})=>[h("div",Ue,[h("div",Te,[F(S,{disable:!y,modelValue:v.profileImage,"onUpdate:modelValue":p=>v.profileImage=p,"onUpdate:value":p=>{v.profileImage=p}},null,8,["disable","modelValue","onUpdate:modelValue","onUpdate:value"])]),h("div",Re,[h("div",Qe,[a[1]||(a[1]=h("div",{class:"col-md-3 col-xs-12"},[h("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[Q(" Username"),h("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),h("div",Ve,[F(X,{disable:!y,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Username",rules:[p=>p&&p.length>1||"This field is required!"],modelValue:v.username,"onUpdate:modelValue":p=>v.username=p},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),h("div",Ge,[h("div",Me,[a[2]||(a[2]=h("div",{class:"col-md-3 col-xs-12"},[h("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[Q(" Email"),h("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),h("div",_e,[F(X,{disable:!y,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Email",type:"email",rules:[p=>p&&p.length>1||"This field is required!"],modelValue:v.email,"onUpdate:modelValue":p=>v.email=p},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),h("div",Le,[h("div",ke,[a[3]||(a[3]=h("div",{class:"col-md-3 col-xs-12"},[h("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[Q(" Password"),h("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),h("div",Oe,[F(X,{disable:!y,dense:"",outlined:"","lazy-rules":"","hide-bottom-space":"",label:"Password",color:"dark",type:d.isPwd?"password":"text",rules:v.id?null:[p=>p&&p.length>1||"This field is required!"],modelValue:v.password,"onUpdate:modelValue":p=>v.password=p},{append:N(()=>[F(ue,{name:d.isPwd?"visibility_off":"visibility",class:"cursor-pointer",onClick:a[0]||(a[0]=p=>d.isPwd=!d.isPwd)},null,8,["name"])]),_:2},1032,["disable","type","rules","modelValue","onUpdate:modelValue"])])])]),h("div",ze,[h("div",qe,[a[4]||(a[4]=h("div",{class:"col-md-3 col-xs-12"},[h("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[Q(" Roles"),h("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),h("div",Xe,[F(de,{disable:!y,dense:"",outlined:"",label:"Roles","lazy-rules":"","hide-bottom-space":"",options:["admin","user"],rules:[p=>p&&p.length>1||"This field is required!"],modelValue:v.role,"onUpdate:modelValue":p=>v.role=p},null,8,["disable","rules","modelValue","onUpdate:modelValue"])])])]),h("div",Ne,[h("div",$e,[a[5]||(a[5]=h("div",{class:"col-md-3 col-xs-12"},[h("div",{class:"self-center full-width no-outline text-left q-pr-md",tabindex:"0"},[Q(" Status"),h("span",{class:"text-red text-right",style:{"font-size":"14px"}}," * ")])],-1)),h("div",We,[F(ce,{disable:!y,label:v.isActive==="true"?"Active":"Inactive",color:"positive","false-value":"false","true-value":"true",modelValue:v.isActive,"onUpdate:modelValue":p=>v.isActive=p},null,8,["disable","label","modelValue","onUpdate:modelValue"])])])])])]),_:1},8,["endpoint","title-value","model-value","edit-value"])}var at=J(De,[["render",je]]);export{at as default};
