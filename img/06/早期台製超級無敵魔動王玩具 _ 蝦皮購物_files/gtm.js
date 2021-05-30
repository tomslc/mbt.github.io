
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"261",
  
  "macros":[{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.targetType"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"environment"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.action"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hostname"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.userid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a;",["escape",["macro",9],8,16],"?a=",["escape",["macro",9],8,16],":",["escape",["macro",10],8,16],"?a=",["escape",["macro",10],8,16],":",["escape",["macro",11],8,16],"\u0026\u0026(a=",["escape",["macro",11],8,16],");if(a)return a=a.toString(),a=sha256(a)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.href"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.is_seller"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(b,a){var c=b.split(\"?\");if(2\u003C=c.length){b=encodeURIComponent(a)+\"\\x3d\";a=c[1].split(\/[\u0026;]\/g);for(var d=a.length;0\u003Cd--;)-1!==a[d].lastIndexOf(b,0)\u0026\u0026a.splice(d,1);b=c[0]+\"?\"+a.join(\"\\x26\")}return b}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.dclid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",13],8,16],"||",["escape",["macro",14],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=",["escape",["macro",19],8,16],";-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));var b=document.createElement(\"a\");b.href=a;if(b.search){a=b.search.replace(\"?\",\"\\x26\");var c;for(c=0;c\u003Ce.length;c++){var d=e[c];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";b.search=a}return b.href})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.origin"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",22],8,16],",b=",["escape",["macro",23],8,16],"+",["escape",["macro",21],8,16],";return a=a.split(b)[1]||\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",21],8,16],"||",["escape",["macro",7],8,16],";a+=",["escape",["macro",24],8,16],";\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",16],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"gclid\"));\"true\"==",["escape",["macro",15],8,16],"\u0026\u0026",["escape",["macro",18],8,16],"\u0026\u0026(a=",["escape",["macro",17],8,16],"(a,\"dclid\"));return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=[\"email\",\"loginKey\"],a=",["escape",["macro",25],8,16],";if(a){-1!==a.indexOf(\"undefined\")\u0026\u0026(a=a.replace(\"undefined\",\"\"));a=a.replace(\"?\",\"\\x26\");var b;for(b=0;b\u003Cc.length;b++){var d=c[b];d=new RegExp(\"\\x26\"+d+\"\\x3d[^\\x26]*(\\x26|$)\",\"gi\");a=a.replace(d,\"\\x26\")}\"\\x26\"===a[0]?a=a.slice(1):\"\";a=a.replace(\"\\x26\",\"?\")}return c=a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userGroup"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return ",["escape",["macro",16],8,16],";if(",["escape",["macro",18],8,16],")return ",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(",["escape",["macro",16],8,16],")return\"gclid\";if(",["escape",["macro",18],8,16],")return\"dclid\"})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",30],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"info.initial"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"country"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.tw","value","34651"],["map","key","shopee.vn","value","34657"],["map","key","shopee.co.id","value","34652"],["map","key","shopee.com.my","value","32773"],["map","key","shopee.ph","value","34655"],["map","key","shopee.co.th","value","34654"],["map","key","shopee.sg","value","32772"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"info.impressions.0.targetData.accountInfo.email"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 767\u003E=window.innerWidth?\"m\":980\u003C=window.innerWidth?\"d\":\"t\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.items"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[];a=",["escape",["macro",39],8,16],"||[];return a=a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.checkoutid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.orders"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity});return d})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","SGD"],["map","key","shopee.com.my","value","MYR"],["map","key","shopee.co.th","value","THB"],["map","key","shopee.tw","value","TWD"],["map","key","shopee.co.id","value","IDR"],["map","key","shopee.vn","value","VND"],["map","key","shopee.ph","value","PHP"],["map","key","shopee.com.br","value","BRL"],["map","key","shopee.com.mx","value","MXN"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"*",["escape",["macro",49],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{currencyCode:\"",["escape",["macro",45],7],"\",add:{products:[{name:\"",["escape",["macro",46],7],"\",id:\"",["escape",["macro",47],7],"\",price:\"",["escape",["macro",50],7],"\",category:\"",["escape",["macro",51],7],"\",variant:\"",["escape",["macro",52],7],"\",quantity:",["escape",["macro",49],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.operation"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.register_channel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",c=0,a=0;a\u003Cb.length;a++)c+=b[a].total_without_shipping;return c\/1E5})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var a=",["escape",["macro",43],8,16],",d=0,e=[],b=0;b\u003Ca.length;b++){for(var c=0;c\u003Ca[b].items.length;c++)try{e.push({id:a[b].items[c].itemid,price:a[b].items[c].price\/1E5,name:a[b].items[c].name,quantity:a[b].items[c].quantity,category:a[b].items[c].categories[0].catids.join(\".\")})}catch(f){console.warn(f)}d+=a[b].shipping_fee}a={ecommerce:{purchase:{actionField:{id:\"",["escape",["macro",42],7],"\",revenue:\"",["escape",["macro",56],7],"\",shipping:d\/1E5},products:e}}};str=JSON.stringify(a);return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response.orderids"
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__k",
      "vtp_decodeCookie":true,
      "vtp_name":"_med"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","1011l628"],["map","key","shopee.co.th","value","1100l551"],["map","key","shopee.vn","value","1100l682"],["map","key","shopee.ph","value","1100l720"],["map","key","shopee.com.my","value","1100l721"],["map","key","shopee.tw","value","1011l795"],["map","key","shopee.co.id","value","1101l712"],["map","key","shopee.com.br","value","1011l971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",e=",["escape",["macro",42],8,16],",f=",["escape",["macro",58],8,16],",g=",["escape",["macro",43],8,16],",c=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+e+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";b=g.filter(function(d){return d.hasOwnProperty(\"items\")});console.log(\"check \"+b);b.forEach(function(d,h){d.items.forEach(function(a){var k=a.itemid,l=a.price\/1E5,m=a.quantity,n=a.shopid;a=a.categories[0].catids[0];c+=\"[category:\"+a+\"\/sku:\"+k+\"\/value:\"+l+\n\"\/quantity:\"+m+\"\/shop_id:\"+n+\"\/order_id:\"+f[h]+\"\/]\"})});console.log(\"::: \"+c);return c})();"]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",8]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_useEcommerceDataLayer":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",11]],["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":true,
      "vtp_trackingId":"UA-125099498-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_ecommerceIsEnabled":true,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostAuthor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pageCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"pagePostType2"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"gclid",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com.br","value","UA-149843394-1"]]
    },{
      "function":"__gas",
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",64]],["map","index","2","group",["macro",65]],["map","index","3","group",["macro",66]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]]],
      "vtp_trackerName":"",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",67]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",68],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",73],8,16],";switch(a){case \"start\":return\"Start playing\";case \"pause\":return\"Pause\";case \"buffering\":return\"Buffering\";case \"progress\":return\"Reached \"+",["escape",["macro",74],8,16],"+\"%\";case \"complete\":return\"Reached the end\"}})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-8"],["map","key","shopee.sg","value","UA-61921742-7"],["map","key","shopee.com.my","value","UA-61915055-6"],["map","key","shopee.tw","value","UA-61915057-6"],["map","key","shopee.co.th","value","UA-61914165-6"],["map","key","shopee.vn","value","UA-61914164-6"],["map","key","shopee.ph","value","UA-61918643-6"],["map","key","shopee.com","value","UA-132684032-1"],["map","key","shopee.com.br","value","UA-149843394-1"],["map","key","shopee.com.mx","value","UA-188791374-1"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",76],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.itemid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.quantity"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",82],8,16],"*",["escape",["macro",83],8,16],"\/1E5;return a})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.catid_be"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.modelId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={ecommerce:{remove:{products:[{name:\"",["escape",["macro",80],7],"\",id:\"",["escape",["macro",81],7],"\",price:",["escape",["macro",84],8,16],",category:\"",["escape",["macro",85],7],"\",variant:\"",["escape",["macro",86],7],"\",quantity:",["escape",["macro",83],8,16],"}]}}};return a})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.type"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.login_option"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","2599"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var g=",["escape",["macro",91],8,16],",h=",["escape",["macro",42],8,16],",a=",["escape",["macro",43],8,16],",k=",["escape",["macro",56],8,16],",l=",["escape",["macro",58],8,16],",d=[],e=[],f=[];(a||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){})});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].shopid),e.push(a[b].items[c].itemid),f.push(a[b].items[c].categories[0].catids[0]);d=d.join(\"|\");e=e.join(\"|\");f=f.join(\"|\");a=[];a=l.join(\"|\");return g=\"https:\/\/shopback.go2cloud.org\/aff_l?offer_id\\x3d\"+\ng+\"\\x26adv_sub\\x3d\"+h+\"\\x26adv_sub2\\x3d\"+d+\"\\x26adv_sub3\\x3d\"+e+\"\\x26adv_sub4\\x3d\"+a+\"\\x26adv_sub5\\x3d\"+f+\"\\x26amount\\x3d\"+k})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-9"],["map","key","shopee.sg","value","UA-61921742-12"],["map","key","shopee.com.my","value","UA-61915055-10"],["map","key","shopee.tw","value","UA-61915057-10"],["map","key","shopee.co.th","value","UA-61914165-10"],["map","key","(giaitri|nhasach).shopee.vn","value","UA-61914164-10"],["map","key","shopee.ph","value","UA-61918643-10"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","2","dimension",["macro",27]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",93],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__r"
    },{
      "function":"__u",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"keyword",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",39],8,16],";return a.map(function(a){return a.targetData.item.itemid})})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var e=[\"email\",\"loginKey\"],a=location.pathname+location.search,b=document.createElement(\"a\"),d;b.href=a;if(b.search){a=\"\\x26\"+b.search.replace(\"?\",\"\")+\"\\x26\";for(d=0;d\u003Ce.length;d++){var c=e[d];c=a.indexOf(\"\\x26\"+c+\"\\x3d\");if(-1\u003Cc){var f=a.indexOf(\"\\x26\",c+1);a=a.slice(0,c)+a.slice(f,a.length)}}b.search=a.slice(1,a.length-1)}return b.href.replace(location.origin,\"\")})();"]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ecommerce.purchase.actionField.id"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","UA-61904553-14"],["map","key","shopee.sg","value","UA-61921742-14"],["map","key","shopee.com.my","value","UA-61915055-12"],["map","key","shopee.tw","value","UA-61915057-13"],["map","key","shopee.co.th","value","UA-61914165-12"],["map","key","shopee.vn","value","UA-61914164-12"],["map","key","shopee.ph","value","UA-61918643-12"],["map","key","shopee.com.br","value","UA-149843394-3"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",103],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value","G-4572B3WZ33"],["map","key","shopee.com.my","value","G-H06K3499BD"],["map","key","shopee.tw","value","G-RPSBE3TQZZ"],["map","key","shopee.co.th","value","G-L4QXS6R7YG"],["map","key","shopee.vn","value","G-M32T05RVZT"],["map","key","shopee.ph","value","G-CB0044GVTM"],["map","key","shopee.com.br","value","G-0GS478VKB8"],["map","key","shopee.com.mx","value","G-FYC06KL06Z"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/seller.shopee.co.id\/edu\/","value","UA-61904553-16"],["map","key","https:\/\/seller.shopee.sg\/edu\/","value","UA-61921742-15"],["map","key","https:\/\/seller.shopee.com.my\/edu\/","value","UA-61915055-13"],["map","key","https:\/\/seller.shopee.tw\/edu\/","value","UA-61915057-14"],["map","key","https:\/\/seller.shopee.co.th\/edu\/","value","UA-61914165-13"],["map","key","https:\/\/banhang.shopee.vn\/edu\/","value","UA-61914164-13"],["map","key","https:\/\/seller.shopee.ph\/edu\/","value","UA-61918643-13"],["map","key","https:\/\/seller.shopee.com.br\/edu\/","value","UA-149843394-4"]]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","true"],["map","fieldName","userId","value",["macro",12]],["map","fieldName","location","value",["macro",20]],["map","fieldName","page","value",["macro",26]]],
      "vtp_trackerName":"",
      "vtp_useHashAutoLink":false,
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","3","dimension",["macro",12]],["map","index","4","dimension",["macro",28]],["map","index","6","dimension",["macro",29]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableGA4Schema":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"pc\"===",["escape",["macro",2],8,16],")return\"pc\";if(\"rweb\"===",["escape",["macro",2],8,16],"||\"rweb_android\"===",["escape",["macro",2],8,16],"||\"mweb\"===",["escape",["macro",2],8,16],")return\"mobile\"})();"]
    },{
      "function":"__cid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return google_tag_manager[",["escape",["macro",110],8,16],"].dataLayer})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.catid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.subcategory"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return void 0===",["escape",["macro",113],8,16],"?\"cat1\":\"cat2\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",48],8,16],"\/1E5;return a})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","100188"],["map","key","shopee.com.my","value","100126"],["map","key","shopee.co.th","value","100245"],["map","key","shopee.sg","value","100376"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","139835196351422"],["map","key","shopee.com.my","value","757894527666013"],["map","key","shopee.co.th","value","905703166183408"],["map","key","shopee.tw","value","503280033161781"],["map","key","shopee.co.id","value","466924370133774"],["map","key","shopee.vn","value","1457130904612161"],["map","key","shopee.ph","value","1478059392491608"],["map","key","shopee.com.br","value","703307166810792"],["map","key","shopee.com.mx","value","850328915514180"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",119],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d.join(\",\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.categoryName"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a={cookieName:\"_med\",cookieTime:30,keyToGet:\"utm_medium\",keyToSearch:{gclid:\"cpc\"},shopee_refer:\"^((http(s?):\/\/)(([a-z0-9_]+.)?)(shopee.(sg|com.my|co.th|tw|co.id|vn|ph)\/))\",path:\"\/\",domain:\".\"+location.hostname.replace(\/^www\\.\/i,\"\")};return a})();"]
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__t"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.sg","value","11"],["map","key","shopee.com.my","value","8"],["map","key","shopee.co.id","value","14"],["map","key","shopee.vn","value","9"],["map","key","shopee.ph","value","15"],["map","key","shopee.tw","value","13"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",43],8,16],",d=[];a=a.filter(function(a){return a.hasOwnProperty(\"items\")});for(var b=0;b\u003Ca.length;b++)for(var c=0;c\u003Ca[b].items.length;c++)d.push(a[b].items[c].itemid);return d.join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var c=",["escape",["macro",43],8,16],",d=[],e=c.filter(function(a){return a.hasOwnProperty(\"items\")}),a=0;a\u003Ce.length;a++)for(var b=0;b\u003Ce[a].items.length;b++)d.push(c[a].items[b].price\/1E5*c[a].items[b].quantity);return d.join(\"|\")})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.vn","value","ICay2JfBmbeRc1R5Enp1"],["map","key","shopee.co.id","value","IfdkwXB0UU0fVf5tq0DM"],["map","key","shopee.com.my","value","zlDYA9jJjHq1nyHyCLaU"],["map","key","shopee.ph","value","l7fVkOg4vYLmM3fayfyy"],["map","key","shopee.co.th","value","zXiY0VQ8H0VLkoIzoC80"],["map","key","shopee.sg","value","bQSfrGqH6d5VMoTaldIA"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],b=[],c;for(c in a)b.push(a[c].itemid);return b.join(\",\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","AW-692053728"],["map","key","40867978","value","AW-608738266"],["map","key","119485441","value","AW-611398152"],["map","key","75422406","value","AW-573532228"],["map","key","53892420","value","AW-671893767"],["map","key","37251933","value","AW-627492082"],["map","key","29668384","value","AW-620288715"],["map","key","29667634","value","AW-603702153"],["map","key","29668843","value","AW-408024625"],["map","key","91799978","value","AW-443061445"],["map","key","39401693","value","AW-389061488"],["map","key","55027948","value","AW-388991082"],["map","key","51678844","value","AW-389059076"],["map","key","59860978","value","AW-618568444"],["map","key","83276818","value","AW-415164151"],["map","key","43416591","value","AW-388561066"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","XI9KCPjfkPkBEODN_8kC"],["map","key","40867978","value","BwtQCLqckfkBENq3oqIC"],["map","key","119485441","value","m4CJCMqGtPkBEIjkxKMC"],["map","key","75422406","value","0bLqCO30pvkBEMTQvZEC"],["map","key","53892420","value","In_dCJy6kfkBEIeSscAC"],["map","key","37251933","value","Gx6hCOKHp_kBEPKJm6sC"],["map","key","29668384","value","TIaVCPektPkBEMu146cC"],["map","key","29667634","value","nJPNCPqqtPkBEImH758C"],["map","key","29668843","value","16QSCNPh3PoBELHsx8IB"],["map","key","91799978","value","mgeuCN-2kfEBEMWpotMB"],["map","key","39401693","value","u7dMCOOO-P8BEPC2wrkB"],["map","key","55027948","value","_tejCJGN4f8BEOqQvrkB"],["map","key","51678844","value","txW6COeO__8BEISkwrkB"],["map","key","59860978","value","_xy2CPWd-P8BEPy1-qYC"],["map","key","83276818","value","LTjOCJ6j-P8BEPfN-8UB"],["map","key","43416591","value","OxrmCIHx8v8BEKrxo7kB"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopId"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",133],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","58418206|16621457","value","Bua5CJ-spvkBEODN_8kC"],["map","key","40867978","value","_qDFCLyhkfkBENq3oqIC"],["map","key","119485441","value","bTY-CNrtpvkBEIjkxKMC"],["map","key","75422406","value","9LuNCPmukfkBEMTQvZEC"],["map","key","53892420","value","s6R2CPCgtPkBEIeSscAC"],["map","key","37251933","value","e_jFCJyjtPkBEPKJm6sC"],["map","key","29668384","value","Smq9COWqtPkBEMu146cC"],["map","key","29667634","value","Fdt5CNvSkfkBEImH758C"],["map","key","29668843","value","4-T1COzz8voBELHsx8IB"],["map","key","91799978","value","2LF0CJjX8fABEMWpotMB"],["map","key","39401693","value","xRfRCMuI-P8BEPC2wrkB"],["map","key","55027948","value","i_bpCIKN4f8BEOqQvrkB"],["map","key","51678844","value","Q0iTCMKH__8BEISkwrkB"],["map","key","59860978","value","kmcsCNKb-P8BEPy1-qYC"],["map","key","83276818","value","ytDmCI6f-P8BEPfN-8UB"],["map","key","43416591","value","NUqBCOzt8v8BEKrxo7kB"]]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",21],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","(\/unilever_householdcare)|(\/unilever_beautyhotpro)","value","AW-692053728"],["map","key","\/unilever_personalcare","value","AW-608738266"],["map","key","\/realmeofficialstore","value","AW-611398152"],["map","key","\/nutrilonofficialstore","value","AW-573532228"],["map","key","\/oppo_official_store","value","AW-671893767"],["map","key","\/lorealparis_officialstore","value","AW-627492082"],["map","key","\/garnier_thailand","value","AW-620288715"],["map","key","\/lorealparis","value","AW-603702153"],["map","key","\/maybelline_thailand","value","AW-408024625"],["map","key","\/smartsg","value","AW-443061445"],["map","key","\/mobilehubsg","value","AW-389061488"],["map","key","\/absolutepiano","value","AW-388991082"],["map","key","\/atrixofficial","value","AW-389059076"],["map","key","\/foremost_official_shop","value","AW-618568444"],["map","key","\/samsung_thailand","value","AW-415164151"],["map","key","\/movingpeach.sg","value","AW-388561066"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.name"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",33],8,16],"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.isOfficialShopTheme"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.pageParams.keyword"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","ICM-39-1334"],["map","key","shopee.com.my","value","ICM-11-1270"],["map","key","shopee.co.th","value","ICM-49-1393"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"crto.products"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",145],8,16],",c=[],a=0;a\u003Cb.length\u0026\u00263\u003Ea;a++)\"object\"==typeof b[a]?b[a].hasOwnProperty(\"id\")\u0026\u0026c.push(b[a].id):(\"number\"==typeof b[a]||\"number\"==typeof b[a])\u0026\u0026c.push(b[a]);return c})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/iPad\/.test(navigator.userAgent)?\"t\":\/Mobile|iP(hone|od)|Android|BlackBerry|IEMobile|Silk\/.test(navigator.userAgent)?\"m\":\"d\"})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.item.itemid"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",37],8,16],"||[],c=[],b;for(b in a)c.push({id:a[b].itemid,price:parseFloat(a[b].price)\/1E5,quantity:a[b].quantity});return c})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.impressions.0.targetData.cart.totalPrice"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",150],8,16],"\/1E5;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push(b[a].items[c].itemid);return d})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}];return a.map(function(a){return a.items.map(function(a){return a.itemid}).join(\"|\")}).join(\"|\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=[{items:{0:{itemid:15014125,status:1,quantity:2,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",stock:6,image:\"620beb14b85b2d9a069b10cdd41575be\",\nnone_shippable_reason:null,source:\"null\",modelid:6993834,checkout:!0,model_name:\"i6\/6s \\u8edf\\u6bbc\",addin_time:1529553717,service_by_shopee_flag:0},1:{itemid:15014125,status:1,quantity:5,none_shippable_full_reason:null,price:3E7,donot_add_quantity:!1,shopid:3905134,currency:\"TWD\",item_discount:0,is_flash_sale:!1,mtime:1528495159,free_return_days:null,condition:1,shippable:!0,name:\"\\u9810\\u8cfc iPhoneX \\u5b9a\\u5236 \\u65e5\\u97d3\\u6587\\u85dd\\u6e05\\u65b0\\u5c0f\\u788e\\u82b1 \\u786c\\u6bbc\\u534a\\u5305\/\\u8edf\\u6bbc\\u5168\\u5305 \\u860b\\u679c i8X i7 i6 Plus i5se \\u624b\\u6a5f\\u6bbc\",\nstock:8,image:\"620beb14b85b2d9a069b10cdd41575be\",none_shippable_reason:null,source:\"null\",modelid:6993832,checkout:!0,model_name:\"i8\/i7Plus \\u8edf\\u6bbc\",addin_time:1529553755,service_by_shopee_flag:0}},shop:{is_official_shop:!1,shopid:3905134,shop_name:\"\\u5b8c\\u7f8e\\u5c0f\\u59d0\\u624b\\u6a5f\\u6bbc\\u5c08\\u8ce3\",support_ereceipt:!1,images:\"\",cb_option:!1},shipping_fee:3E6,total_without_shipping:21E7}],d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)d.push({id:\"\"+b[a].items[c].itemid,item_price:b[a].items[c].price\/\n1E5,quantity:b[a].items[c].quantity,category:b[a].items[c].categories[0].catids.join(\"\\x3e\")});return d})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.price"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",128],8,16],",b=a.shipping_subtotal\/1E5,c=a.tax_payable\/1E5;return a=a.total_payable\/1E5-b-c})();"]
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",14],
      "vtp_fullMatch":true,
      "vtp_replaceAfterMatch":true,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","https:\/\/shopee.vn\/m\/99","value","1005975"],["map","key","https:\/\/shopee.co.id\/m\/super-shopping-day-129","value","1005969"],["map","key","https:\/\/shopee.co.th\/m\/99","value","1005972"],["map","key","https:\/\/shopee.com.my\/m\/99","value","1005973"],["map","key","https:\/\/shopee.ph\/m\/99","value","953969"],["map","key","https:\/\/shopee.sg\/m\/99","value","1005974"],["map","key","https:\/\/shopee.tw\/m\/99","value","1005971"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=",["escape",["macro",61],8,16],",n=",["escape",["macro",42],8,16],",p=",["escape",["macro",58],8,16],",c=",["escape",["macro",43],8,16],";b=\"https:\/\/prf.hn\/conversion\/campaign:\"+b+\"\/conversionref:\"+n+\"\/country:\"+",["escape",["macro",33],8,16],"+\"\/currency:\"+",["escape",["macro",45],8,16],"+\"\/\";var f=[];(c||[]).forEach(function(a){(Object.values(a.items)||[]).forEach(function(a){var b=a.itemid,c=a.price\/1E5,d=a.quantity,e=a.shopid;a=a.categories[0].catids[0];f.push({itemId:b,itemPrice:c,quantity:d,shopId:e,categoryL1:a})})});var d,e,g,h,k,l=[];\n(Object.values(f)||[]).forEach(function(a){d=a.itemId;e=a.itemPrice;g=a.quantity;h=a.categoryL1;k=a.shopId;l.push(\"[category:\"+h+\"\/sku:\"+d+\"\/value:\"+e+\"\/quantity:\"+g+\"\/shop_id:\"+k+\"\/order_id:\"+p+\"\/]\")});var m=\"\";(Object.values(l)||[]).forEach(function(a){m+=a});return c=b+m})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.scrollThreshold",
      "vtp_dataLayerVersion":1
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",159],
      "vtp_map":["list",["map","key","0","value","Baseline"],["map","key","10","value","10%"],["map","key","25","value","25%"],["map","key","50","value","50%"],["map","key","75","value","75%"],["map","key","90","value","90%"],["map","key","100","value","100%"]]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=document.location.pathname.split(\"\/\");return a[1].toLowerCase()})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.shopid"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"info.data.response"
    },{
      "function":"__remm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",4],
      "vtp_fullMatch":false,
      "vtp_replaceAfterMatch":false,
      "vtp_ignoreCase":true,
      "vtp_map":["list",["map","key","shopee.co.id","value","G-SW6D8G0HXK"],["map","key","shopee.sg","value",""],["map","key","shopee.com.my","value",""],["map","key","shopee.tw","value",""],["map","key","shopee.co.th","value",""],["map","key","shopee.vn","value",""],["map","key","shopee.ph","value",""],["map","key","shopee.com.br","value",""]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.current.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.protocol"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.title"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_campaign"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_content"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_medium"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hash"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.gclsrc"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.first.search.utm_term"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.href"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.host"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.hostname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.origin"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.pathname"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"data.prev.title"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",168],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",187],8,16],";if(0\u003Ca.length)return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){for(var b=",["escape",["macro",43],8,16],",d=[],a=0;a\u003Cb.length;a++)for(var c=0;c\u003Cb[a].items.length;c++)try{\"undefined\"===typeof d[b[a].items[c].shopid]?d[b[a].items[c].shopid]={shopId:b[a].items[c].shopid,conversionId:\"",["escape",["macro",134],7],"\",conversionLabel:\"",["escape",["macro",135],7],"\",quantity:b[a].items[c].quantity,totalValue:b[a].items[c].price\/1E5*b[a].items[c].quantity}:(d[b[a].items[c].shopid].quantity+=b[a].items[c].quantity,d[b[a].items[c].shopid].totalValue+=b[a].items[c].price\/1E5*b[a].items[c].quantity)}catch(e){console.warn(e)}console.log(\"*****\"+\nObject.values(d));return Object.values(d)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"session_id"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newHistoryState",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.oldHistoryState",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__ua",
      "priority":50,
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":68
    },{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar p=",["escape",["macro",124],8,16],";document.cookie=p.cookieName+\"\\x3d; expires\\x3dThu, 01 Jan 1970 00:00:01 GMT; path\\x3d\"+p.path+\";domain\\x3d\"+p.domain;\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":79
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":2
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":3
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":4
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":5
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":6
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":8
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":15
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":21
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":28
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":30
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"868286",
      "tag_id":32
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":37
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":38
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"BASKET_TAG",
      "vtp_siteType":["macro",36],
      "vtp_basketArray":["macro",38],
      "tag_id":50
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"HOME_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":51
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"LISTING_TAG",
      "vtp_listingID":["macro",40],
      "vtp_siteType":["macro",36],
      "tag_id":52
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_productID":["macro",41],
      "vtp_tagType":"PRODUCT_TAG",
      "vtp_siteType":["macro",36],
      "tag_id":53
    },{
      "function":"__crto",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_accountId":["macro",34],
      "vtp_hashedEmail":["macro",35],
      "vtp_tagType":"TRANSACTION_TAG",
      "vtp_siteType":["macro",36],
      "vtp_TransactionID":["macro",42],
      "vtp_TransactionArray":["macro",44],
      "tag_id":54
    },{
      "function":"__gclidw",
      "once_per_event":true,
      "vtp_enableCookieOverrides":false,
      "vtp_enableCrossDomainFeature":true,
      "vtp_enableCookieUpdateFeature":false,
      "vtp_enableCookieFlagsFeature":true,
      "tag_id":57
    },{
      "function":"__hjtc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_hotjar_site_id":"955851",
      "tag_id":63
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":64
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":65
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":66
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":67
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":69
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":71
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",31],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":72
    },{
      "function":"__paused",
      "vtp_originalTagType":"hjtc",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":76
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",62],14,3],
      "tag_id":77
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",53],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"add_to_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":81
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":82
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":83
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",63],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":84
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",57],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",58],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":85
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":86
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"register",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":["macro",55],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":87
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":88
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":89
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":90
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":91
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":92
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",69],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":93
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"video-playing",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["template",["macro",71]," - ",["macro",72]],
      "vtp_eventLabel":["macro",75],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":94
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"blog-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",69],
      "vtp_eventAction":["macro",78],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":99
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":false,
      "vtp_ecommerceMacroData":["macro",87],
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"remove_from_cart",
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":100
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",77],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":106
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",89],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":107
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"login",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":["macro",90],
      "vtp_eventLabel":["macro",12],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",12]]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":108
    },{
      "function":"__img",
      "metadata":["map"],
      "teardown_tags":["list",["tag",1,0]],
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":["escape",["macro",92],14,3],
      "tag_id":118
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":120
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":121
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":123
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":124
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":125
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":126
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":127
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":128
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":129
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"id-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9469210",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":130
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":131
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":134
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":135
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":136
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":137
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":138
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":139
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":140
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"my-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526848",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":141
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":142
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":143
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":144
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":145
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":146
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":147
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":148
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":149
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"ph-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9554009",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":150
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":151
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":152
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":153
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":154
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":155
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":156
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":157
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":158
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"sg-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9555544",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":159
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":160
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":161
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":163
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":164
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":165
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":166
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":167
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":168
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"th-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9527148",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":169
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":170
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":171
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":172
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":173
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":174
    },{
      "function":"__fls",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":175
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":176
    },{
      "function":"__flc",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":177
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"sconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"vn-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9526557",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":178
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":179
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":"G-KK6LLGGZNQ",
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":180
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",94],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":184
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",63],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",102],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":185
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":186
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":187
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":188
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":189
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":190
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":191
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":192
    },{
      "function":"__paused",
      "vtp_originalTagType":"cvt_7691473_357",
      "tag_id":193
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":true,
      "vtp_useEcommerceDataLayer":true,
      "vtp_eventCategory":"tracking",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",31],
      "vtp_eventAction":"purchase",
      "vtp_eventLabel":["macro",102],
      "vtp_enableEcommerce":true,
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_ecommerceIsEnabled":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":194
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",104],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":195
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",104],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":196
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"myads-link-clicked",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",104],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["macro",79],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "vtp_enableGA4Schema":false,
      "tag_id":197
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "unlimited":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]],["map","name","page","value",["macro",26]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",106],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":392
    },{
      "function":"__gaawc",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_fieldsToSet":["list",["map","name","allowLinker","value","true"],["map","name","useAmpClientId","value","true"],["map","name","userId","value",["macro",12]],["map","name","location","value",["macro",20]]],
      "vtp_sendPageView":true,
      "vtp_measurementId":["macro",106],
      "vtp_enableUserProperties":true,
      "vtp_enableMoreSettings":false,
      "vtp_enableEuid":false,
      "tag_id":393
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":480
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u28","value",["macro",99]],["map","key","u29","value",["macro",59]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pg",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":510
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u30","value",["macro",55]],["map","key","u31","value",["macro",12]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ss",
      "vtp_ordinalType":"UNIQUE",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalUnique":"1",
      "vtp_number":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":511
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u40","value",["macro",80]],["map","key","u41","value",["macro",81]],["map","key","u42","value",["macro",84]],["map","key","u43","value",["macro",85]],["map","key","u44","value",["macro",86]],["map","key","u45","value",["macro",83]]],
      "vtp_revenue":["macro",84],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",81],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-rc",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":512
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u46","value",["macro",58]],["map","key","u47","value",["macro",42]],["map","key","u48","value",["macro",56]]],
      "vtp_revenue":["macro",56],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",58],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"fconv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-po",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":513
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u32","value",["macro",90]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ld",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":514
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-pv",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":515
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u31","value",["macro",12]],["map","key","u33","value",["macro",89]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-lm",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":516
    },{
      "function":"__fls",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u34","value",["macro",46]],["map","key","u35","value",["macro",47]],["map","key","u36","value",["macro",50]],["map","key","u37","value",["macro",51]],["map","key","u38","value",["macro",52]],["map","key","u39","value",["macro",49]]],
      "vtp_revenue":["macro",50],
      "vtp_enableConversionLinker":true,
      "vtp_countingMethod":"TRANSACTIONS",
      "vtp_orderId":["macro",47],
      "vtp_enableProductReporting":false,
      "vtp_groupTag":"s-conv",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-ac",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_countingMethodIsTransactions":true,
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "tag_id":517
    },{
      "function":"__flc",
      "metadata":["map"],
      "vtp_customVariable":["list",["map","key","u49","value",["macro",97]],["map","key","u50","value",["macro",98]]],
      "vtp_enableConversionLinker":true,
      "vtp_groupTag":"eng",
      "vtp_useImageTag":false,
      "vtp_activityTag":"br-w-sit",
      "vtp_ordinalType":"STANDARD",
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_advertiserId":"9895457",
      "vtp_ordinalStandard":["macro",95],
      "vtp_url":["macro",96],
      "vtp_enableGoogleAttributionOptions":false,
      "vtp_showConversionLinkingControls":true,
      "vtp_enableEuid":false,
      "tag_id":518
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":522
    },{
      "function":"__ua",
      "metadata":["map"],
      "unlimited":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","title","value",["macro",59]]],
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",108],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_enableGA4Schema":false,
      "tag_id":525
    },{
      "function":"__hl",
      "tag_id":535
    },{
      "function":"__tl",
      "vtp_eventName":"pageState",
      "vtp_interval":"3000",
      "vtp_uniqueTriggerId":"7691473_172",
      "tag_id":536
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"10, 25, 50, 75, 90",
      "vtp_captureComplete":true,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"7691473_229",
      "vtp_enableTriggerStartOption":true,
      "tag_id":537
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_263",
      "tag_id":538
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"7691473_264",
      "tag_id":539
    },{
      "function":"__hl",
      "tag_id":540
    },{
      "function":"__hl",
      "tag_id":541
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"5000",
      "vtp_uniqueTriggerId":"7691473_360",
      "tag_id":542
    },{
      "function":"__hl",
      "tag_id":543
    },{
      "function":"__hl",
      "tag_id":544
    },{
      "function":"__hl",
      "tag_id":545
    },{
      "function":"__cl",
      "tag_id":546
    },{
      "function":"__hl",
      "tag_id":547
    },{
      "function":"__hl",
      "tag_id":548
    },{
      "function":"__hl",
      "tag_id":549
    },{
      "function":"__hl",
      "tag_id":550
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"item_m\":\"item\",data=",["escape",["macro",111],8,16],";(window._bwtm=window._bwtm||[]).push({ch:",["escape",["macro",112],8,16],",iid:",["escape",["macro",41],8,16],",uid:",["escape",["macro",11],8,16],",pid:pid,mid:422});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":7
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"home_m\":\"home\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E\"cat2\"===",["escape",["macro",114],8,16],"?(pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cat2_m\":\"cat2\",ch=",["escape",["macro",113],8,16],"):(pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cat1_m\":\"cat1\",ch=",["escape",["macro",115],8,16],");(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,ch:ch,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":10
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"cart_m\":\"cart\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,carts:[{itemid:",["escape",["macro",47],8,16],",price:",["escape",["macro",116],8,16],",count:",["escape",["macro",49],8,16],"}],uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var pid=\"mobile\"===",["escape",["macro",109],8,16],"?\"buy_m\":\"buy\",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push({itemid:orders[i].items[j].itemid,price:orders[i].items[j].price\/1E5,count:orders[i].items[j].quantity});(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,bitem:orderItems,uid:",["escape",["macro",11],8,16],",order:",["escape",["macro",42],8,16],"});\u003C\/script\u003E\n\u003Cscript async data-gtmsrc=\"\/\/rec.scupio.com\/recweb\/js\/rec.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efor(var orderItems=",["escape",["macro",43],8,16],",totalPrice=0,i=0;i\u003CorderItems.length;i++)ga(\"gtm.ec:addProduct\",{id:orderItems[i].itemid,quantity:orderItems[i].quantity}),totalPrice+=orderItems[i].price\/1E5;ga(\"gtm.ec:setAction\",\"purchase\",{id:",["escape",["macro",42],8,16],"+\"\",revenue:totalPrice});ga(\"gtm.send\",\"event\",\"tracking\",\"purchase\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":13
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar pid=\"ios\"===",["escape",["macro",109],8,16],"||\"android\"===",["escape",["macro",109],8,16],"?\"search_m\":\"search\";(window._bwtm=window._bwtm||[]).push({mid:422,pid:pid,kw:",["escape",["macro",97],8,16],",uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript language=\"javascript\" type=\"text\/gtmscript\"\u003Efor(var cookieName=\"icm-ssid\",iaTransactionId=getCookie(cookieName),iaOfferID=",["escape",["macro",117],8,16],",iaCheckoutId=",["escape",["macro",42],8,16],",orders=",["escape",["macro",43],8,16],",orderItems=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)orderItems.push(orders[i].items[j]);var iaItemId,iaItemPrice,iaQuantity,iaModelId,iaShopId,iaSubTotal=0;\nfor(i=0;i\u003CorderItems.length;i++){iaItemId=orderItems[i].itemid;iaItemPrice=orderItems[i].price\/1E5;iaQuantity=orderItems[i].quantity;iaModelId=orderItems[i].modelid;iaShopId=orderItems[i].shopid;iaSubTotal=iaItemPrice*iaQuantity;var iaConvesionPixelUrl=\"https:\/\/invol.co\/aff_l?offer_id\\x3d\"+iaOfferID+\"\\x26adv_sub\\x3d\"+iaCheckoutId+\"\\x26adv_sub2\\x3d\"+iaItemId+\"\\x26adv_sub3\\x3d\"+iaModelId+\"\\x26adv_sub4\\x3d\"+iaShopId+\"\\x26amount\\x3d\"+iaSubTotal;\"\"!==iaTransactionId\u0026\u0026(iaConvesionPixelUrl+=\"\\x26transaction_id\\x3d\"+\niaTransactionId);var iaImgPixel=new Image(1,1);iaImgPixel.src=iaConvesionPixelUrl}function getCookie(b){b+=\"\\x3d\";for(var d=document.cookie.split(\";\"),c=0;c\u003Cd.length;c++){for(var a=d[c];\" \"==a.charAt(0);)a=a.substring(1);if(0==a.indexOf(b))return a.substring(b.length,a.length)}return\"\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":34
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/static.masoffer.net\/php\/tracking_js.php?type=general\" async\u003E\u003C\/script\u003E\n\t",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":36
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",",["escape",["macro",118],8,16],");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=",["escape",["macro",118],12],"\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":39
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Search\",{search_string:\"",["escape",["macro",97],7],"\",content_ids:\"",["escape",["macro",98],7],"\",content_type:\"product\",content_category:\"Internal Site Search\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":40
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"ViewContent\",{value:",["escape",["macro",120],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",41],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":41
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddToCart\",{value:",["escape",["macro",50],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",47],7],"\",content_type:\"product\",contents:[{id:\"",["escape",["macro",47],7],"\",quantity:",["escape",["macro",49],8,16],",item_price:",["escape",["macro",116],8,16],"}]});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"Purchase\",{value:1*",["escape",["macro",56],8,16],",currency:\"",["escape",["macro",45],7],"\",content_ids:\"",["escape",["macro",121],7],"\",content_type:\"product\",contents:",["escape",["macro",122],8,16],"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":43
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"trackCustom\",\"ViewCategory\",{content_name:\"",["escape",["macro",123],7],"\",content_category:\"",["escape",["macro",115],7],"\",content_ids:\"",["escape",["macro",40],7],"\",content_type:\"product\"});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"CompleteRegistration\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":58
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"AddPaymentInfo\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":59
    },{
      "function":"__html",
      "setup_tags":["list",["tag",170,1]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Efbq(\"track\",\"InitiateCheckout\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E(window._bwtm=window._bwtm||[]).push({mid:422,uid:",["escape",["macro",11],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":70
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},\nset_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,d.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\n\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":73
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Etry{var AT={cookie_duration:30,aff_utm_source:\"accesstrade\",aff_source_param:\"utm_source\",aff_utm_sources:[\"accesstrade\"],aff_source_params:[\"utm_source\",\"aff_source\"],aff_sid_param:\"aff_sid\",aff_sid_params:[\"aff_sid\",\"aff_sub\"],check_scope:function(){var a=this.get_utm_source()||this.get_param(this.aff_source_param);return a==this.aff_utm_source?!0:!1},track:function(){var a=this.get_param(this.aff_sid_param),b=this.get_param(this.aff_source_param);b==this.aff_utm_source?(this.set_cookie(\"_aff_network\",\nthis.aff_utm_source,this.cookie_duration),a\u0026\u0026this.set_cookie(\"_aff_sid\",a,this.cookie_duration)):void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim()\u0026\u0026this.set_cookie(\"_aff_network\",b,0)},tracks:function(){var a=0,b=\"\",e=\"\";for(c in this.aff_source_params){b=this.aff_source_params[c];var d=this.get_param(b);b=d;if(-1!=this.aff_utm_sources.indexOf(d)){a=1;break}}for(var g in this.aff_sid_params){var c=this.aff_sid_params[g];c=this.get_param(c);if(\"\"!==c){e=c;break}}a\u0026\u0026\"\"!==b?(this.set_cookie(\"_aff_network\",b,this.cookie_duration),\ne\u0026\u0026this.set_cookie(\"_aff_sid\",e,this.cookie_duration)):(!a||void 0!==b\u0026\u0026null!==b\u0026\u0026\"\"!==b.trim())\u0026\u0026this.set_cookie(\"_aff_network\",\"\",0)},track_shopee_order:function(){var a=",["escape",["macro",43],8,16],",b=",["escape",["macro",42],8,16],",e=\"\",d=AT.get_utm_source(),g=AT.get_session_id();if(void 0!==a\u0026\u00260\u003Ca.length\u0026\u0026(\"shopid\"in a[0]||\"catid\"in a[0]))for(var c=0;c\u003Ca.length;c++){var k=a[c].itemid,l=a[c].quantity,m=a[c].price\/1E5,h=a[c].shopid,n=a[c].catid,p=a[c].modelid;e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+\nm+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}else{var q=Object.keys(shoporders);for(c=0;c\u003Cq.length;c++){h=q[c];a=shoporders[h].items;for(var f=0;f\u003Ca.length;f++)k=a[f].itemid,l=a[f].quantity,m=a[f].price\/1E5,n=a[f].catid,p=a[f].modelid,e+=\"\\x26product[]\\x3d$id:\"+k+\"$quantity:\"+l+\"$price:\"+m+\"$category_id:\"+n+\"$e__shop_id:\"+h+\"$e__model_id:\"+p}}navigator.sendBeacon?(b=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+\ne,navigator.sendBeacon(b),console.log(\"[AT] Postback tracking url: \"+b)):(a=document.createElement(\"img\"),a.width=1,a.height=1,a.border=0,a.src=\"https:\/\/track.accesstrade.vn\/track\/collector?transaction_id\\x3d\"+b+\"\\x26tracking_id\\x3d\"+g+\"\\x26aff_source\\x3d\"+d+\"\\x26campaign_id\\x3d329\\x26result_id\\x3d30\"+e,document.body.appendChild(a),console.log(\"[AT] Pixel tracking url: \"+a.src));AT.set_cookie(\"_aff_network\",d,0)},get_param:function(a,b){b||(b=location.href);a=a.replace(\/[\\[]\/,\"\\\\[\").replace(\/[\\]]\/,\n\"\\\\]\");a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);b=a.exec(b);return null==b?null:b[1]},set_cookie:function(a,b,e){var d=new Date;d.setTime(d.getTime()+864E5*e);e=\"expires\\x3d\"+d.toUTCString();cookie_domain=this.cookie_domain||window.location.hostname;document.cookie=a+\"\\x3d\"+b+\"; \"+e+\";domain\\x3d\"+cookie_domain+\"; path\\x3d\/\"},get_cookie:function(a){a+=\"\\x3d\";for(var b=document.cookie.split(\";\"),e=0;e\u003Cb.length;e++){for(var d=b[e];\" \"==d.charAt(0);)d=d.substring(1);if(0==d.indexOf(a))return d.substring(a.length,\nd.length)}},get_session_id:function(){return this.get_cookie(\"_aff_sid\")||\"\"},get_utm_source:function(){return this.get_cookie(\"_aff_network\")||\"\"}};AT.tracks();AT.track_shopee_order()}catch(a){console.warn(a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":74
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Efunction track_keyToGet(){try{var a=get_key(p.keyToGet);null!==a?setCookie(p.cookieName,a):track_keyToSearch()}catch(b){console.warn(\"[medium_cookie_create][track_keyToGet]\",b)}}function track_keyToSearch(){try{var a=Object.entries(p.keyToSearch),b=!0;for(i=0;i\u003Ca.length;i++){var c=a[i],d=get_key(c[0]);if(null!==d){setCookie(p.cookieName,c[1]);b=!1;break}}b\u0026\u0026get_refer()}catch(e){console.warn(\"[medium_cookie_create][track_keyToSearch]\",e)}}\nfunction get_refer(){try{refer\u0026\u0026!shopee_refer_check.test(refer)\u0026\u0026setCookie(p.cookieName,\"refer\")}catch(a){console.warn(\"[medium_cookie_create][get_refer]\",a)}}function get_key(a){try{var b=window.location.href;a=\"[\\\\?\\x26]\"+a+\"\\x3d([^\\x26#]*)\";a=new RegExp(a);a=a.exec(b);return null==a?null:a[1]}catch(c){return console.warn(\"[medium_cookie_create][get_key]\",c),null}}\nfunction setCookie(a,b){try{var c=new Date;c.setTime(c.getTime()+864E5*p.cookieTime);var d=\";expires\\x3d\"+c.toUTCString();document.cookie=a+\"\\x3d\"+b+d+\";path\\x3d\"+p.path+\";domain\\x3d\"+p.domain}catch(e){return console.warn(\"[medium_cookie_create][setCookie]\",e),null}}try{var p=",["escape",["macro",124],8,16],",refer=",["escape",["macro",125],8,16],",shopee_refer_check=new RegExp(p.shopee_refer,\"i\");track_keyToGet()}catch(a){console.warn(\"[medium_cookie_create]\",a)};\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{var timestamp=(new Date).getTime();(function(a){var b=a.createElement(\"script\");b.src=\"https:\/\/click.accesstra.de\/js\/nct\/lp.js?cb\\x3d\"+timestamp;b.async=!0;a=a.getElementsByTagName(\"script\")[0];a.parentNode.insertBefore(b,a)})(document)}catch(a){console.warn(a)};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":101
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"d64a340bcb633f536d56e51874281454\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});var timestamp=(new Date).getTime();\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstra.de\/js\/nct\/cv_global.js?cb\\x3d\"+timestamp;a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":102
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function k(a,b){b?(l[0]=l[16]=l[1]=l[2]=l[3]=l[4]=l[5]=l[6]=l[7]=l[8]=l[9]=l[10]=l[11]=l[12]=l[13]=l[14]=l[15]=0,this.blocks=l):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];a?(this.h0=3238371032,this.h1=914150663,this.h2=812702999,this.h3=4144912697,this.h4=4290775857,this.h5=1750603025,this.h6=1694076839,this.h7=3204075428):(this.h0=1779033703,this.h1=3144134277,this.h2=1013904242,this.h3=2773480762,this.h4=1359893119,this.h5=2600822924,this.h6=528734635,this.h7=1541459225);this.block=\nthis.start=this.bytes=this.hBytes=0;this.finalized=this.hashed=!1;this.first=!0;this.is224=a}function x(a,b,c){var f=typeof a;if(\"string\"===f){var e,m=[],d=a.length,g=0;for(f=0;f\u003Cd;++f)128\u003E(e=a.charCodeAt(f))?m[g++]=e:2048\u003Ee?(m[g++]=192|e\u003E\u003E6,m[g++]=128|63\u0026e):55296\u003Ee||57344\u003C=e?(m[g++]=224|e\u003E\u003E12,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e):(e=65536+((1023\u0026e)\u003C\u003C10|1023\u0026a.charCodeAt(++f)),m[g++]=240|e\u003E\u003E18,m[g++]=128|e\u003E\u003E12\u002663,m[g++]=128|e\u003E\u003E6\u002663,m[g++]=128|63\u0026e);a=m}else{if(\"object\"!==f)throw Error(u);if(null===\na)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);}64\u003Ca.length\u0026\u0026(a=(new k(b,!0)).update(a).array());e=[];m=[];for(f=0;64\u003Ef;++f)d=a[f]||0,e[f]=92^d,m[f]=54^d;k.call(this,b,c);this.update(m);this.oKeyPad=e;this.inner=!0;this.sharedMemory=c}var u=\"input is invalid type\",v=\"object\"==typeof window,p=v?window:{};p.JS_SHA256_NO_WINDOW\u0026\u0026(v=!1);v=!v\u0026\u0026\"object\"==typeof self;var A=!p.JS_SHA256_NO_NODE_JS\u0026\u0026\"object\"==typeof process\u0026\u0026\nprocess.versions\u0026\u0026process.versions.node;A?p=global:v\u0026\u0026(p=self);v=!p.JS_SHA256_NO_COMMON_JS\u0026\u0026\"object\"==typeof module\u0026\u0026module.exports;var F=\"function\"==typeof define\u0026\u0026define.amd,w=!p.JS_SHA256_NO_ARRAY_BUFFER\u0026\u0026\"undefined\"!=typeof ArrayBuffer,c=\"0123456789abcdef\".split(\"\"),G=[-2147483648,8388608,32768,128],n=[24,16,8,0],y=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,\n4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],\nz=[\"hex\",\"array\",\"digest\",\"arrayBuffer\"],l=[];!p.JS_SHA256_NO_NODE_JS\u0026\u0026Array.isArray||(Array.isArray=function(a){return\"[object Array]\"===Object.prototype.toString.call(a)});!w||!p.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW\u0026\u0026ArrayBuffer.isView||(ArrayBuffer.isView=function(a){return\"object\"==typeof a\u0026\u0026a.buffer\u0026\u0026a.buffer.constructor===ArrayBuffer});var B=function(a,b){return function(m){return(new k(b,!0)).update(m)[a]()}},C=function(a){var b=B(\"hex\",a);A\u0026\u0026(b=H(b,a));b.create=function(){return new k(a)};b.update=\nfunction(a){return b.create().update(a)};for(var m=0;m\u003Cz.length;++m){var c=z[m];b[c]=B(c,a)}return b},H=function(a,b){var c=eval(\"require('crypto')\"),f=eval(\"require('buffer').Buffer\"),e=b?\"sha224\":\"sha256\",h=function(b){if(\"string\"==typeof b)return c.createHash(e).update(b,\"utf8\").digest(\"hex\");if(null===b||void 0===b)throw Error(u);return b.constructor===ArrayBuffer\u0026\u0026(b=new Uint8Array(b)),Array.isArray(b)||ArrayBuffer.isView(b)||b.constructor===f?c.createHash(e).update(new f(b)).digest(\"hex\"):a(b)};\nreturn h},D=function(a,b){return function(c,f){return(new x(c,b,!0)).update(f)[a]()}},E=function(a){var b=D(\"hex\",a);b.create=function(b){return new x(b,a)};b.update=function(a,c){return b.create(a).update(c)};for(var c=0;c\u003Cz.length;++c){var f=z[c];b[f]=D(f,a)}return b};k.prototype.update=function(a){if(!this.finalized){var b=typeof a;if(\"string\"!==b){if(\"object\"!==b)throw Error(u);if(null===a)throw Error(u);if(w\u0026\u0026a.constructor===ArrayBuffer)a=new Uint8Array(a);else if(!(Array.isArray(a)||w\u0026\u0026ArrayBuffer.isView(a)))throw Error(u);\nvar c=!0}for(var f,e=0,h=a.length,d=this.blocks;e\u003Ch;){if(this.hashed\u0026\u0026(this.hashed=!1,d[0]=this.block,d[16]=d[1]=d[2]=d[3]=d[4]=d[5]=d[6]=d[7]=d[8]=d[9]=d[10]=d[11]=d[12]=d[13]=d[14]=d[15]=0),c)for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)d[b\u003E\u003E2]|=a[e]\u003C\u003Cn[3\u0026b++];else for(b=this.start;e\u003Ch\u0026\u002664\u003Eb;++e)128\u003E(f=a.charCodeAt(e))?d[b\u003E\u003E2]|=f\u003C\u003Cn[3\u0026b++]:2048\u003Ef?(d[b\u003E\u003E2]|=(192|f\u003E\u003E6)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]):55296\u003Ef||57344\u003C=f?(d[b\u003E\u003E2]|=(224|f\u003E\u003E12)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003C\nn[3\u0026b++]):(f=65536+((1023\u0026f)\u003C\u003C10|1023\u0026a.charCodeAt(++e)),d[b\u003E\u003E2]|=(240|f\u003E\u003E18)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E12\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|f\u003E\u003E6\u002663)\u003C\u003Cn[3\u0026b++],d[b\u003E\u003E2]|=(128|63\u0026f)\u003C\u003Cn[3\u0026b++]);this.lastByteIndex=b;this.bytes+=b-this.start;64\u003C=b?(this.block=d[16],this.start=b-64,this.hash(),this.hashed=!0):this.start=b}return 4294967295\u003Cthis.bytes\u0026\u0026(this.hBytes+=this.bytes\/4294967296\u003C\u003C0,this.bytes%=4294967296),this}};k.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var a=this.blocks,\nb=this.lastByteIndex;a[16]=this.block;a[b\u003E\u003E2]|=G[3\u0026b];this.block=a[16];56\u003C=b\u0026\u0026(this.hashed||this.hash(),a[0]=this.block,a[16]=a[1]=a[2]=a[3]=a[4]=a[5]=a[6]=a[7]=a[8]=a[9]=a[10]=a[11]=a[12]=a[13]=a[14]=a[15]=0);a[14]=this.hBytes\u003C\u003C3|this.bytes\u003E\u003E\u003E29;a[15]=this.bytes\u003C\u003C3;this.hash()}};k.prototype.hash=function(){var a,b,c,f,e=this.h0,h=this.h1,d=this.h2,g=this.h3,k=this.h4,l=this.h5,r=this.h6,q=this.h7,n=this.blocks;for(a=16;64\u003Ea;++a){var p=((c=n[a-15])\u003E\u003E\u003E7|c\u003C\u003C25)^(c\u003E\u003E\u003E18|c\u003C\u003C14)^c\u003E\u003E\u003E3;var t=((c=n[a-2])\u003E\u003E\u003E\n17|c\u003C\u003C15)^(c\u003E\u003E\u003E19|c\u003C\u003C13)^c\u003E\u003E\u003E10;n[a]=n[a-16]+p+n[a-7]+t\u003C\u003C0}var u=h\u0026d;for(a=0;64\u003Ea;a+=4)this.first?(this.is224?(f=300032,q=(c=n[0]-1413257819)-150054599\u003C\u003C0,g=c+24177077\u003C\u003C0):(f=704751109,q=(c=n[0]-210244248)-1521486534\u003C\u003C0,g=c+143694565\u003C\u003C0),this.first=!1):(p=(e\u003E\u003E\u003E2|e\u003C\u003C30)^(e\u003E\u003E\u003E13|e\u003C\u003C19)^(e\u003E\u003E\u003E22|e\u003C\u003C10),b=(f=e\u0026h)^e\u0026d^u,q=g+(c=q+((k\u003E\u003E\u003E6|k\u003C\u003C26)^(k\u003E\u003E\u003E11|k\u003C\u003C21)^(k\u003E\u003E\u003E25|k\u003C\u003C7))+(k\u0026l^~k\u0026r)+y[a]+n[a])\u003C\u003C0,g=c+(p+b)\u003C\u003C0),p=(g\u003E\u003E\u003E2|g\u003C\u003C30)^(g\u003E\u003E\u003E13|g\u003C\u003C19)^(g\u003E\u003E\u003E22|g\u003C\u003C10),b=(u=g\u0026e)^g\u0026h^f,r=d+(c=r+((q\u003E\u003E\u003E6|q\u003C\u003C26)^(q\u003E\u003E\u003E11|\nq\u003C\u003C21)^(q\u003E\u003E\u003E25|q\u003C\u003C7))+(q\u0026k^~q\u0026l)+y[a+1]+n[a+1])\u003C\u003C0,p=((d=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|d\u003C\u003C30)^(d\u003E\u003E\u003E13|d\u003C\u003C19)^(d\u003E\u003E\u003E22|d\u003C\u003C10),b=(t=d\u0026g)^d\u0026e^u,l=h+(c=l+((r\u003E\u003E\u003E6|r\u003C\u003C26)^(r\u003E\u003E\u003E11|r\u003C\u003C21)^(r\u003E\u003E\u003E25|r\u003C\u003C7))+(r\u0026q^~r\u0026k)+y[a+2]+n[a+2])\u003C\u003C0,p=((h=c+(p+b)\u003C\u003C0)\u003E\u003E\u003E2|h\u003C\u003C30)^(h\u003E\u003E\u003E13|h\u003C\u003C19)^(h\u003E\u003E\u003E22|h\u003C\u003C10),b=(u=h\u0026d)^h\u0026g^t,k=e+(c=k+((l\u003E\u003E\u003E6|l\u003C\u003C26)^(l\u003E\u003E\u003E11|l\u003C\u003C21)^(l\u003E\u003E\u003E25|l\u003C\u003C7))+(l\u0026r^~l\u0026q)+y[a+3]+n[a+3])\u003C\u003C0,e=c+(p+b)\u003C\u003C0;this.h0=this.h0+e\u003C\u003C0;this.h1=this.h1+h\u003C\u003C0;this.h2=this.h2+d\u003C\u003C0;this.h3=this.h3+g\u003C\u003C0;this.h4=this.h4+k\u003C\u003C0;this.h5=this.h5+\nl\u003C\u003C0;this.h6=this.h6+r\u003C\u003C0;this.h7=this.h7+q\u003C\u003C0};k.prototype.hex=function(){this.finalize();var a=this.h0,b=this.h1,m=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=c[a\u003E\u003E28\u002615]+c[a\u003E\u003E24\u002615]+c[a\u003E\u003E20\u002615]+c[a\u003E\u003E16\u002615]+c[a\u003E\u003E12\u002615]+c[a\u003E\u003E8\u002615]+c[a\u003E\u003E4\u002615]+c[15\u0026a]+c[b\u003E\u003E28\u002615]+c[b\u003E\u003E24\u002615]+c[b\u003E\u003E20\u002615]+c[b\u003E\u003E16\u002615]+c[b\u003E\u003E12\u002615]+c[b\u003E\u003E8\u002615]+c[b\u003E\u003E4\u002615]+c[15\u0026b]+c[m\u003E\u003E28\u002615]+c[m\u003E\u003E24\u002615]+c[m\u003E\u003E20\u002615]+c[m\u003E\u003E16\u002615]+c[m\u003E\u003E12\u002615]+c[m\u003E\u003E8\u002615]+c[m\u003E\u003E4\u002615]+c[15\u0026m]+c[f\u003E\u003E28\u002615]+c[f\u003E\u003E24\u002615]+c[f\u003E\u003E20\u002615]+c[f\u003E\u003E16\u002615]+c[f\u003E\u003E12\u0026\n15]+c[f\u003E\u003E8\u002615]+c[f\u003E\u003E4\u002615]+c[15\u0026f]+c[e\u003E\u003E28\u002615]+c[e\u003E\u003E24\u002615]+c[e\u003E\u003E20\u002615]+c[e\u003E\u003E16\u002615]+c[e\u003E\u003E12\u002615]+c[e\u003E\u003E8\u002615]+c[e\u003E\u003E4\u002615]+c[15\u0026e]+c[h\u003E\u003E28\u002615]+c[h\u003E\u003E24\u002615]+c[h\u003E\u003E20\u002615]+c[h\u003E\u003E16\u002615]+c[h\u003E\u003E12\u002615]+c[h\u003E\u003E8\u002615]+c[h\u003E\u003E4\u002615]+c[15\u0026h]+c[d\u003E\u003E28\u002615]+c[d\u003E\u003E24\u002615]+c[d\u003E\u003E20\u002615]+c[d\u003E\u003E16\u002615]+c[d\u003E\u003E12\u002615]+c[d\u003E\u003E8\u002615]+c[d\u003E\u003E4\u002615]+c[15\u0026d];return this.is224||(a+=c[g\u003E\u003E28\u002615]+c[g\u003E\u003E24\u002615]+c[g\u003E\u003E20\u002615]+c[g\u003E\u003E16\u002615]+c[g\u003E\u003E12\u002615]+c[g\u003E\u003E8\u002615]+c[g\u003E\u003E4\u002615]+c[15\u0026g]),a};k.prototype.toString=k.prototype.hex;k.prototype.digest=function(){this.finalize();\nvar a=this.h0,b=this.h1,c=this.h2,f=this.h3,e=this.h4,h=this.h5,d=this.h6,g=this.h7;a=[a\u003E\u003E24\u0026255,a\u003E\u003E16\u0026255,a\u003E\u003E8\u0026255,255\u0026a,b\u003E\u003E24\u0026255,b\u003E\u003E16\u0026255,b\u003E\u003E8\u0026255,255\u0026b,c\u003E\u003E24\u0026255,c\u003E\u003E16\u0026255,c\u003E\u003E8\u0026255,255\u0026c,f\u003E\u003E24\u0026255,f\u003E\u003E16\u0026255,f\u003E\u003E8\u0026255,255\u0026f,e\u003E\u003E24\u0026255,e\u003E\u003E16\u0026255,e\u003E\u003E8\u0026255,255\u0026e,h\u003E\u003E24\u0026255,h\u003E\u003E16\u0026255,h\u003E\u003E8\u0026255,255\u0026h,d\u003E\u003E24\u0026255,d\u003E\u003E16\u0026255,d\u003E\u003E8\u0026255,255\u0026d];return this.is224||a.push(g\u003E\u003E24\u0026255,g\u003E\u003E16\u0026255,g\u003E\u003E8\u0026255,255\u0026g),a};k.prototype.array=k.prototype.digest;k.prototype.arrayBuffer=function(){this.finalize();var a=new ArrayBuffer(this.is224?\n28:32),b=new DataView(a);return b.setUint32(0,this.h0),b.setUint32(4,this.h1),b.setUint32(8,this.h2),b.setUint32(12,this.h3),b.setUint32(16,this.h4),b.setUint32(20,this.h5),b.setUint32(24,this.h6),this.is224||b.setUint32(28,this.h7),a};x.prototype=new k;x.prototype.finalize=function(){if(k.prototype.finalize.call(this),this.inner){this.inner=!1;var a=this.array();k.call(this,this.is224,this.sharedMemory);this.update(this.oKeyPad);this.update(a);k.prototype.finalize.call(this)}};var t=C();t.sha256=\nt;t.sha224=C(!0);t.sha256.hmac=E();t.sha224.hmac=E(!0);v?module.exports=t:(p.sha256=t.sha256,p.sha224=t.sha224,F\u0026\u0026define(function(){return t}))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":105
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/click.accesstrade.co.id\/js\/nct\/lp.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":109
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar orders=",["escape",["macro",43],8,16],",itemInfo=[],orderInfo=[];(orders||[]).forEach(function(b){(Object.values(b.items)||[]).forEach(function(a){var c=a.itemid,d=a.price\/1E5,e=a.quantity;a=a.categories[0].catids[0];itemInfo.push({id:c,category_id:a,price:d,quantity:e})})});var __atw=__atw||[];__atw.push({mcn:\"c3c59e5f8b3e9753913f4d435b53c308\",param:{result_id:\"30\",identifier:\"",["escape",["macro",42],7],"\",products:itemInfo}});\n(function(b){var a=b.createElement(\"script\");a.src=\"https:\/\/cv.accesstrade.co.id\/js\/nct\/cv.js\";a.async=!0;b=b.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(document);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":110
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",productId:\"",["escape",["macro",129],7],"\",value:\"",["escape",["macro",130],7],"\",data:\"",["escape",["macro",42],7],"\",filter:\"payment method\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":181
    },{
      "function":"__html",
      "metadata":["map"],
      "setup_tags":["list",["tag",190,0]],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.pzConvData=window.pzConvData||[];window.pzConvData.push({type:\"purchase\",merchantId:\"7077\",filter:\"MEMBER-SIGNUP\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":182
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/mstatic.priceza.com\/js\/tracking-3.0.js\" async type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":183
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_home\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":381
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_category2_",["escape",["macro",115],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":382
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_offer_",["escape",["macro",41],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":383
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_listing_",["escape",["macro",98],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":384
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_basketstatus_",["escape",["macro",132],12],"\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":385
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_startorder\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":386
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"\u0026amp;ncm=1\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":387
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Ciframe src=\"https:\/\/asia.creativecdn.com\/tags?id=pr_",["escape",["macro",131],12],"_orderstatus2_",["escape",["macro",56],12],"_",["escape",["macro",42],12],"_",["escape",["macro",121],12],"\u0026amp;cd=default\u0026amp;id=pr_",["escape",["macro",131],12],"_uid_",["escape",["macro",12],12],"\" width=\"1\" height=\"1\" scrolling=\"no\" frameborder=\"0\" style=\"display: none;\"\u003E\u003C\/iframe\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":388
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);\nfor(var transactionId=",["escape",["macro",42],8,16],",transactionCurrency=\"",["escape",["macro",45],7],"\",orders=",["escape",["macro",43],8,16],",purchaseInfo=[],i=0;i\u003Corders.length;i++)for(var j=0;j\u003Corders[i].items.length;j++)try{\"undefined\"===typeof purchaseInfo[orders[i].items[j].shopid]?purchaseInfo[orders[i].items[j].shopid]={shopId:orders[i].items[j].shopid,conversionId:\"",["escape",["macro",134],7],"\",conversionLabel:\"",["escape",["macro",135],7],"\",quantity:orders[i].items[j].quantity,totalValue:orders[i].items[j].price\/1E5*orders[i].items[j].quantity}:\n(purchaseInfo[orders[i].items[j].shopid].quantity+=orders[i].items[j].quantity,purchaseInfo[orders[i].items[j].shopid].totalValue+=orders[i].items[j].price\/1E5*orders[i].items[j].quantity)}catch(a){console.warn(a)}var shopPurchases=Object.values(purchaseInfo);\nfor(i=0;i\u003CshopPurchases.length;i++){var shopPurchase=shopPurchases[i],shopId=shopPurchase.shopId,conversionId=shopPurchase.conversionId,conversionLabel=shopPurchase.conversionLabel,conversionValue=shopPurchase.totalValue;gtag(\"config\",conversionId,{allow_ad_personalization_signals:!1});gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:conversionValue,currency:transactionCurrency,transaction_id:transactionId+\"_\"+shopId})};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":479
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",134],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":485
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",134],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",134],8,16],",{allow_ad_personalization_signals:!1});var conversionId=\"",["escape",["macro",134],7],"\",conversionLabel=\"",["escape",["macro",137],7],"\",addToCartCurrency=\"",["escape",["macro",45],7],"\";gtag(\"event\",\"conversion\",{send_to:conversionId+\"\/\"+conversionLabel,value:.0555*",["escape",["macro",50],8,16],",currency:addToCartCurrency});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":492
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript async data-gtmsrc=\"https:\/\/www.googletagmanager.com\/gtag\/js?id=",["escape",["macro",138],12],"\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag(\"js\",new Date);gtag(\"config\",",["escape",["macro",138],8,16],",{allow_ad_personalization_signals:!1});\u003C\/script\u003E  \n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":534
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ProductPage.Self"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"impression"
    },{
      "function":"_eq",
      "arg0":["macro",2],
      "arg1":"pc"
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":".*"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"test"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"test.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"uat"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"uat.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.js"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"ItemCard",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"ItemCard"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"click"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"addToCart"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"action"
    },{
      "function":"_cn",
      "arg0":["macro",2],
      "arg1":"mweb"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/produk-digital\/"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"HomePage"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"pageState"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"CategoryPage"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"buyNow"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"ShopPage.Self"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"OfficialShopLandingPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CollectionPage"
    },{
      "function":"_cn",
      "arg0":["macro",8],
      "arg1":"FlashSale"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"PageMicroSite"
    },{
      "function":"_cn",
      "arg0":["macro",0],
      "arg1":"MallPage.Self"
    },{
      "function":"_re",
      "arg0":["macro",21],
      "arg1":"\/search",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",1],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"tw"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"sg"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"ph"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"vn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.dom"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"placeOrder"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"my"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"id"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"th"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"br"
    },{
      "function":"_eq",
      "arg0":["macro",33],
      "arg1":"mx"
    },{
      "function":"_re",
      "arg0":["macro",8],
      "arg1":"Search(Result|)Page"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CartPage"
    },{
      "function":"_eq",
      "arg0":["macro",8],
      "arg1":"CheckoutPage"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_sign_up_success"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"v3"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(uat|test|live-test|staging|lite).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.(vn|co.th|com.my|ph|sg|tw)\/m\/99",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"(http|https):\/\/shopee.co.id\/m\/super-shopping-day-129",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",60],
      "arg1":"(affiliate|affiliates)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"live"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"^shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",21],
      "arg1":"produk-digital"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"lite.(uat|test|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(test|uat|live-test|staging).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br|com.mx)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"\/web$",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"https:\/\/shopee.(sg|tw|co.id|vn|co.th|ph|com.my|com.br)\/(blog|inspirasi-shopee)($|.*)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"single-post"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_229($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",66],
      "arg1":"(single-post|single-page)",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"shopee.com"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"sho.pe"
    },{
      "function":"_cn",
      "arg0":["macro",7],
      "arg1":"\/blog\/"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_263($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",78],
      "arg1":"https:\/\/shopee."
    },{
      "function":"_re",
      "arg0":["macro",70],
      "arg1":"(^$|((^|,)7691473_264($|,)))"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"action_delete_shopping_cart_item"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"popstate"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"(event|doitac).shopee.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"login_success"
    },{
      "function":"_eq",
      "arg0":["macro",54],
      "arg1":"action_login_success"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(giaitri|nhasach).shopee.vn",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"nhasach.shopee.vn",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",101],
      "arg1":"^(undefined|null|NaN|0|false)?$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"purchase"
    },{
      "function":"_re",
      "arg0":["macro",4],
      "arg1":"(myads|iklanku|muatukhoa|ads).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",105],
      "arg1":"btn"
    },{
      "function":"_eq",
      "arg0":["macro",1],
      "arg1":"gtm.click"
    },{
      "function":"_re",
      "arg0":["macro",14],
      "arg1":"(seller|banhang).shopee.(sg|com.my|co.th|tw|co.id|vn|ph|com.br)\\\/edu\\\/",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"pageState"
    },{
      "function":"_eq",
      "arg0":["macro",100],
      "arg1":"impressions"
    },{
      "function":"_eq",
      "arg0":["macro",4],
      "arg1":"localhost"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"registration"
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",133],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",136],
      "arg1":"91799978|58418206|16621457|40867978|119485441|75422406|53892420|37251933|29668384|29667634|29668843",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",136],
      "arg1":"39401693|55027948|51678844|59860978|83276818|43416591",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(smartsg|unilever_householdcare|unilever_beautyhotpro|unilever_personalcare|realmeofficialstore|nutrilonofficialstore|oppo_official_store|lorealparis_officialstore|garnier_thailand|lorealparis|maybelline_thailand)",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",22],
      "arg1":"\\\/(mobilehubsg|absolutepiano|atrixofficial|samsung_thailand|movingpeach.sg|foremost_official_shop)",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1],["add",2,9,11,13,14,21,24,30,120,160,172,180,183,186,193]],
    [["if",9],["unless",10],["add",3,161],["block",9]],
    [["if",12],["unless",11],["add",4]],
    [["if",13],["unless",10],["add",4]],
    [["if",1,14],["add",5,29,36]],
    [["if",15,16],["add",6,26,40]],
    [["if",17,18],["add",7,9,11,14,27,30,35,67,71,85,87,102,110,140,164,173,180,183,186]],
    [["if",3,19],["unless",20],["add",8,65,69,84,90,101,111,131,138]],
    [["if",9,21],["add",8,38,131]],
    [["if",9,22],["add",8,38,131]],
    [["if",23,24,25],["add",9,11,13,14,19,24,30,118,162,180,183,186,191]],
    [["if",24,25,26],["add",9,11,13,14,20,24,30,119,163,175,180,183,186,192]],
    [["if",18,27],["add",9,11,30,164,180,183,186]],
    [["if",1,28],["add",9,11,13,14,24,30,125,180,183,186,197]],
    [["if",25,29],["add",9,11,13,14,24,30,180,183,186]],
    [["if",25,30],["add",9,11,13,14,20,24,30,125,180,183,186,197]],
    [["if",25,31],["add",9,11,13,14,24,30,125,180,183,186,197]],
    [["if",25,32],["add",9,11,13,14,24,30,125,179,180,183,186,197]],
    [["if",1,33],["add",9,11,13,14,24,30,180,183,186]],
    [["if",24,34,35],["add",9,11,13,20,24,30,63,73,83,88,100,107,121,141,167,171,180,183,186,194]],
    [["if",18,41],["add",10,12,15,16,17,22,25,0,33,39,42,43,44,45,46,68,75,82,94,97,106,124,132,136,165,166,168,169,174,181,1,184,187,198,199],["block",138]],
    [["if",24,25,47],["add",14]],
    [["if",25,48],["add",18,122,178,195]],
    [["if",9],["add",23,170,182,185,190,144,146,147,148,149,150,152,153,154,155,156,157,158,159]],
    [["if",25,49],["add",24,123,177,196]],
    [["if",50,51],["add",28,41,61,74,79,91,98,108,134,176]],
    [["if",25,52],["unless",53],["add",31,64,76,78,95,103,109,130,133,170]],
    [["if",12,54],["unless",55],["add",31,130]],
    [["if",12,56],["unless",57],["add",31,130]],
    [["if",9,58],["add",32]],
    [["if",9,59],["add",32]],
    [["if",18,41,60],["add",34,58,188]],
    [["if",25,64],["add",37,115]],
    [["if",12,64,65],["add",37,115]],
    [["if",12,64],["add",37,115]],
    [["if",12,66],["add",37,115]],
    [["if",3,19,67],["add",38,114]],
    [["if",9,68],["add",38,50,114]],
    [["if",8,9],["add",38,114],["block",2,3,4,5,6,7,8,10,11,13,16,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,160,161,162,163,164,165,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",9,69],["add",47]],
    [["if",70,71,72],["add",48]],
    [["if",9,73,74],["add",49]],
    [["if",9,75],["add",50]],
    [["if",3,4,5],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,24,25,26,27,28,0,29,30,31,32,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,168,170,171,172,173,174,175,176,177,178,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,6,7],["add",51],["block",2,3,4,5,6,7,8,9,10,11,12,13,14,16,17,18,19,20,21,22,25,26,27,28,0,29,30,31,34,42,43,44,50,53,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,116,118,119,120,121,122,123,124,125,126,127,128,133,134,135,136,137,138,139,140,141,142,143,168,170,171,172,173,174,175,176,177,178,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",76,77,78,79],["add",52]],
    [["if",77,78,80,81],["add",52]],
    [["if",18,82],["add",53,54,66,77,86,89,99,113,135]],
    [["if",12,83,84],["add",55]],
    [["if",9,84],["add",55]],
    [["if",18,85],["add",56,60,72,81,93,96,105,139]],
    [["if",51,86],["add",57,62,70,80,92,104,112,137]],
    [["if",9,87],["add",59],["block",161,190]],
    [["if",12,88],["unless",8],["add",116,170]],
    [["if",89,91],["unless",90],["add",117,126]],
    [["if",12,92],["add",127]],
    [["if",9,92],["add",128]],
    [["if",93,94],["add",129]],
    [["if",9,95],["add",142]],
    [["if",12,95],["add",143]],
    [["if",9,96],["add",145]],
    [["if",9,97],["add",151]],
    [["if",18,60,99],["add",189]],
    [["if",25,100],["add",200]],
    [["if",25,101],["add",200]],
    [["if",17,18,102],["add",201]],
    [["if",17,18,103],["add",201]],
    [["if",25,104],["add",202]],
    [["if",25,105],["add",202]],
    [["if",2,3],["block",2,3,4,5,6,7,16,166]],
    [["if",3,36],["block",9,10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,133,134,135,136,137,138,139,140,141,166,168,169,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,37],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,186,187,188,189,190]],
    [["if",3,38],["block",9,10,11,12,13,14,15,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,169,179,180,181,183,184,186,187,188,189,190]],
    [["if",3,39],["block",9,14,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,168,179,183,184,186,187,188,189,190]],
    [["if",40],["block",9]],
    [["if",3,42],["block",10,11,13,14,15,17,24,25,30,58,60,61,62,63,64,65,66,67,68,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,186,187,188,189,190]],
    [["if",3,43],["block",10,11,13,15,17,25,30,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,188,189,190]],
    [["if",3,44],["block",10,11,13,14,15,17,24,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,166,167,169,179,180,181,183,184,186,187]],
    [["if",3,45],["block",10,11,13,18,19,20,21,22,24,25,30,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,118,119,120,121,122,123,124,125,160,161,162,163,164,165,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,46],["block",13,18,19,20,21,22,24,34,58,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,133,134,135,136,137,138,139,140,141,160,161,162,163,164,165,167,168,169,179,180,181,183,184,186,187,188,189,190,191,192,193,194,195,196,197,198]],
    [["if",3,61,62],["block",35,36,37,38,39,40,41,45,46,54,86,114,115,117]],
    [["if",9],["unless",63],["block",35,36,37,38,39,40,41,45,46,54,114,115,117]],
    [["if",3,98],["block",186]]]
},
"runtime":[[50,"__crto",[46,"a"],[52,"b",["require","createQueue"]],[52,"c",["require","injectScript"]],[52,"d","https://static.criteo.net/js/ld/ld.js"],[52,"e",["b","criteo_q"]],[41,"f"],[3,"f",[8,"event","viewHome"]],[38,[17,[15,"a"],"tagType"],[46,"LISTING_TAG","PRODUCT_TAG","BASKET_TAG","TRANSACTION_TAG"],[46,[5,[46,[3,"f",[8,"event","viewList","item",[17,[15,"a"],"listingID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewItem","item",[17,[15,"a"],"productID"]]],[4]]],[5,[46,[3,"f",[8,"event","viewBasket","item",[17,[15,"a"],"basketArray"]]],[4]]],[5,[46,[3,"f",[8,"event","trackTransaction","id",[30,[17,[15,"a"],"TransactionID"],""],"item",[17,[15,"a"],"TransactionArray"]]],[4]]]]],["e",[8,"event","setAccount","account",[17,[15,"a"],"accountId"]],[8,"event","setHashedEmail","email",[30,[17,[15,"a"],"hashedEmail"],""]],[8,"event","setSiteType","type",[30,[17,[15,"a"],"siteType"],"d"]],[15,"f"]],["c",[15,"d"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"],"criteoStatic"]],[50,"__hjtc",[46,"a"],[52,"b",["require","createArgumentsQueue"]],[52,"c",["require","encodeUriComponent"]],[52,"d",["require","injectScript"]],[52,"e",["require","makeString"]],[52,"f",["require","setInWindow"]],["b","hj","hj.q"],[52,"g",[17,[15,"a"],"hotjar_site_id"]],["f","_hjSettings",[8,"hjid",[15,"g"],"hjsv",7,"scriptSource","gtm"]],["d",[0,[0,"https://static.hotjar.com/c/hotjar-",["c",["e",[15,"g"]]]],".js?sv\u003d7"],[17,[15,"a"],"gtmOnSuccess"],[17,[15,"a"],"gtmOnFailure"]]]]
,"permissions":{"__crto":{"access_globals":{"keys":[{"key":"criteo_q","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.criteo.net\/js\/ld\/ld.js"]}},"__hjtc":{"access_globals":{"keys":[{"key":"hj","read":true,"write":true,"execute":false},{"key":"hj.q","read":true,"write":true,"execute":false},{"key":"_hjSettings","read":true,"write":true,"execute":false}]},"inject_script":{"urls":["https:\/\/static.hotjar.com\/c\/hotjar-*"]}}}

,"security_groups":{
"nonGoogleScripts":["__crto","__hjtc"]}

};

/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var k,aa=function(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}},da=function(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}},ha="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ja;
if("function"==typeof Object.setPrototypeOf)ja=Object.setPrototypeOf;else{var ka;a:{var la={a:!0},ma={};try{ma.__proto__=la;ka=ma.a;break a}catch(a){}ka=!1}ja=ka?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var na=ja,oa=function(a,b){a.prototype=ha(b.prototype);a.prototype.constructor=a;if(na)na(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.Ti=b.prototype},pa=this||self,qa=function(a){return a};var ra=function(a,b){this.g=a;this.s=b};var sa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ta=function(){this.B={};this.F=!1;this.O={}},ua=function(a,b){var c=[],d;for(d in a.B)if(a.B.hasOwnProperty(d))switch(d=d.substr(5),b){case 1:c.push(d);break;case 2:c.push(a.get(d));break;case 3:c.push([d,a.get(d)])}return c};ta.prototype.get=function(a){return this.B["dust."+a]};ta.prototype.set=function(a,b){this.F||(a="dust."+a,this.O.hasOwnProperty(a)||(this.B[a]=b))};
ta.prototype.has=function(a){return this.B.hasOwnProperty("dust."+a)};var va=function(a,b){b="dust."+b;a.F||a.O.hasOwnProperty(b)||delete a.B[b]};ta.prototype.hb=function(){this.F=!0};var n=function(a){this.s=new ta;this.g=[];this.B=!1;a=a||[];for(var b in a)a.hasOwnProperty(b)&&(sa(b)?this.g[Number(b)]=a[Number(b)]:this.s.set(b,a[b]))};k=n.prototype;k.toString=function(a){if(a&&0<=a.indexOf(this))return"";for(var b=[],c=0;c<this.g.length;c++){var d=this.g[c];null===d||void 0===d?b.push(""):d instanceof n?(a=a||[],a.push(this),b.push(d.toString(a)),a.pop()):b.push(d.toString())}return b.join(",")};
k.set=function(a,b){if(!this.B)if("length"===a){if(!sa(b))throw Error("RangeError: Length property must be a valid integer.");this.g.length=Number(b)}else sa(a)?this.g[Number(a)]=b:this.s.set(a,b)};k.get=function(a){return"length"===a?this.length():sa(a)?this.g[Number(a)]:this.s.get(a)};k.length=function(){return this.g.length};k.fb=function(){for(var a=ua(this.s,1),b=0;b<this.g.length;b++)a.push(b+"");return new n(a)};var wa=function(a,b){sa(b)?delete a.g[Number(b)]:va(a.s,b)};k=n.prototype;
k.pop=function(){return this.g.pop()};k.push=function(a){return this.g.push.apply(this.g,Array.prototype.slice.call(arguments))};k.shift=function(){return this.g.shift()};k.splice=function(a,b,c){return new n(this.g.splice.apply(this.g,arguments))};k.unshift=function(a){return this.g.unshift.apply(this.g,Array.prototype.slice.call(arguments))};k.has=function(a){return sa(a)&&this.g.hasOwnProperty(a)||this.s.has(a)};k.hb=function(){this.B=!0;Object.freeze(this.g);this.s.hb()};var Aa=function(){function a(f,g){if(b[f]){if(b[f].Xc+g>b[f].max)throw Error("Quota exceeded");b[f].Xc+=g}}var b={},c=void 0,d=void 0,e={di:function(f){c=f},Sf:function(){c&&a(c,1)},fi:function(f){d=f},ib:function(f){d&&a(d,f)},xi:function(f,g){b[f]=b[f]||{Xc:0};b[f].max=g},Kh:function(f){return b[f]&&b[f].Xc||0},reset:function(){b={}},yh:a};e.onFnConsume=e.di;e.consumeFn=e.Sf;e.onStorageConsume=e.fi;e.consumeStorage=e.ib;e.setMax=e.xi;e.getConsumed=e.Kh;e.reset=e.reset;e.consume=e.yh;return e};var Ba=function(a,b){this.B=a;this.S=function(c,d,e){return c.apply(d,e)};this.F=b;this.s=new ta;this.g=this.O=void 0};Ba.prototype.add=function(a,b){Ca(this,a,b,!1)};var Ca=function(a,b,c,d){if(!a.s.F)if(a.B.ib(("string"===typeof b?b.length:1)+("string"===typeof c?c.length:1)),d){var e=a.s;e.set(b,c);e.O["dust."+b]=!0}else a.s.set(b,c)};
Ba.prototype.set=function(a,b){this.s.F||(!this.s.has(a)&&this.F&&this.F.has(a)?this.F.set(a,b):(this.B.ib(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.s.set(a,b)))};Ba.prototype.get=function(a){return this.s.has(a)?this.s.get(a):this.F?this.F.get(a):void 0};Ba.prototype.has=function(a){return!!this.s.has(a)||!(!this.F||!this.F.has(a))};var Da=function(a){var b=new Ba(a.B,a);a.O&&(b.O=a.O);b.S=a.S;b.g=a.g;return b};var Ea={},Fa=function(a,b){Ea[a]=Ea[a]||[];Ea[a][b]=!0},Ga=function(a){for(var b=[],c=Ea[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};var Ja=function(){},Ka=function(a){return"function"==typeof a},A=function(a){return"string"==typeof a},La=function(a){return"number"==typeof a&&!isNaN(a)},Ma=function(a){var b="[object Array]"==Object.prototype.toString.call(Object(a));Array.isArray?Array.isArray(a)!==b&&Fa("TAGGING",4):Fa("TAGGING",5);return b},Oa=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Qa=function(a,b){if(a&&Ma(a))for(var c=
0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},Ra=function(a,b){if(!La(a)||!La(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Ua=function(a,b){for(var c=new Ta,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},Va=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Wa=function(a){return!!a&&("[object Arguments]"==Object.prototype.toString.call(a)||Object.prototype.hasOwnProperty.call(a,"callee"))},Ya=
function(a){return Math.round(Number(a))||0},Za=function(a){return"false"==String(a).toLowerCase()?!1:!!a},$a=function(a){var b=[];if(Ma(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},ab=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},bb=function(){return(new Date).getTime()},Ta=function(){this.prefix="gtm.";this.values={}};Ta.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ta.prototype.get=function(a){return this.values[this.prefix+a]};
var cb=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},db=function(a){var b=a;return function(){if(b){var c=b;b=void 0;try{c()}catch(d){}}}},fb=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},hb=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},ib=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},jb=function(a,b){var c=F;b=b||[];for(var d=c,e=0;e<a.length-1;e++){if(!d.hasOwnProperty(a[e]))return;d=d[a[e]];if(0<=
Oa(b,d))return}return d},kb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},lb=/^\w{1,9}$/,mb=function(a){var b=[];Va(a,function(c,d){lb.test(c)&&d&&b.push(c)});return b.join(",")};var nb=function(a,b){ta.call(this);this.S=a;this.Pa=b};oa(nb,ta);nb.prototype.toString=function(){return this.S};nb.prototype.fb=function(){return new n(ua(this,1))};nb.prototype.g=function(a,b){a.B.Sf();return this.Pa.apply(new ob(this,a),Array.prototype.slice.call(arguments,1))};nb.prototype.s=function(a,b){try{return this.g.apply(this,Array.prototype.slice.call(arguments,0))}catch(c){}};
var qb=function(a,b){for(var c,d=0;d<b.length&&!(c=pb(a,b[d]),c instanceof ra);d++);return c},pb=function(a,b){try{var c=a.get(String(b[0]));if(!(c&&c instanceof nb))throw Error("Attempting to execute non-function "+b[0]+".");return c.g.apply(c,[a].concat(b.slice(1)))}catch(e){var d=a.O;d&&d(e,b.context?{id:b[0],line:b.context.line}:null);throw e;}},ob=function(a,b){this.s=a;this.g=b},H=function(a,b){var c=a.g;return Ma(b)?pb(c,b):b},I=function(a){return a.s.S};var rb=function(){ta.call(this)};oa(rb,ta);rb.prototype.fb=function(){return new n(ua(this,1))};var vb={control:function(a,b){return new ra(a,H(this,b))},fn:function(a,b,c){var d=this.g,e=H(this,b);if(!(e instanceof n))throw Error("Error: non-List value given for Fn argument names.");var f=Array.prototype.slice.call(arguments,2);this.g.B.ib(a.length+f.length);return new nb(a,function(){return function(g){var h=Da(d);void 0===h.g&&(h.g=this.g.g);for(var l=Array.prototype.slice.call(arguments,0),m=0;m<l.length;m++)if(l[m]=H(this,l[m]),l[m]instanceof ra)return l[m];for(var p=e.get("length"),r=
0;r<p;r++)r<l.length?h.add(e.get(r),l[r]):h.add(e.get(r),void 0);h.add("arguments",new n(l));var q=qb(h,f);if(q instanceof ra)return"return"===q.g?q.s:q}}())},list:function(a){var b=this.g.B;b.ib(arguments.length);for(var c=new n,d=0;d<arguments.length;d++){var e=H(this,arguments[d]);"string"===typeof e&&b.ib(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.g.B,c=new rb,d=0;d<arguments.length-1;d+=2){var e=H(this,arguments[d])+"",f=H(this,arguments[d+1]),g=e.length;g+="string"===
typeof f?f.length:1;b.ib(g);c.set(e,f)}return c},undefined:function(){}};var wb=function(){this.B=Aa();this.g=new Ba(this.B)},xb=function(a,b,c){var d=new nb(b,c);d.hb();a.g.set(b,d)};wb.prototype.ad=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.s(c)};wb.prototype.s=function(a){for(var b,c=0;c<arguments.length;c++)b=pb(this.g,arguments[c]);return b};wb.prototype.F=function(a,b){var c=Da(this.g);c.g=a;for(var d,e=1;e<arguments.length;e++)d=d=pb(c,arguments[e]);return d};var yb=function(a){if(a instanceof yb)return a;this.Ia=a};yb.prototype.toString=function(){return String(this.Ia)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Bb=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Cb=function(a){if(null==a)return String(a);var b=Bb.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Db=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Eb=function(a){if(!a||"object"!=Cb(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Db(a,"constructor")&&!Db(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Db(a,b)},J=function(a,b){var c=b||("array"==Cb(a)?[]:{}),d;for(d in a)if(Db(a,d)){var e=a[d];"array"==Cb(e)?("array"!=Cb(c[d])&&(c[d]=[]),c[d]=J(e,c[d])):Eb(e)?(Eb(c[d])||(c[d]={}),c[d]=J(e,c[d])):c[d]=e}return c};var Gb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m=ua(h,1),p=0;p<m.length;p++)l[m[p]]=g(h.get(m[p]))},g=function(h){var l=Oa(d,h);if(-1<l)return e[l];if(h instanceof n){var m=[];d.push(h);e.push(m);for(var p=h.fb(),r=0;r<p.length();r++)m[p.get(r)]=g(h.get(p.get(r)));return m}if(h instanceof rb){var q={};d.push(h);e.push(q);f(h,q);return q}if(h instanceof nb){var t=function(){for(var u=Array.prototype.slice.call(arguments,0),v=0;v<u.length;v++)u[v]=Fb(u[v],b,!!c);var x=b?b.B:Aa(),y=new Ba(x);
b&&(y.g=b.g);return g(h.g.apply(h,[y].concat(u)))};d.push(h);e.push(t);f(h,t);return t}switch(typeof h){case "boolean":case "number":case "string":case "undefined":return h;case "object":if(null===h)return null}};return g(a)},Fb=function(a,b,c){var d=[],e=[],f=function(h,l){for(var m in h)h.hasOwnProperty(m)&&l.set(m,g(h[m]))},g=function(h){var l=Oa(d,
h);if(-1<l)return e[l];if(Ma(h)||Wa(h)){var m=new n([]);d.push(h);e.push(m);for(var p in h)h.hasOwnProperty(p)&&m.set(p,g(h[p]));return m}if(Eb(h)){var r=new rb;d.push(h);e.push(r);f(h,r);return r}if("function"===typeof h){var q=new nb("",function(u){for(var v=Array.prototype.slice.call(arguments,0),x=0;x<v.length;x++)v[x]=Gb(H(this,v[x]),b,!!c);return g((0,this.g.S)(h,h,v))});d.push(h);e.push(q);f(h,q);return q}var t=typeof h;if(null===h||"string"===t||"number"===t||"boolean"===t)return h;};return g(a)};var Hb=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b},Ib=function(a){if(void 0===a||Ma(a)||Eb(a))return!0;switch(typeof a){case "boolean":case "number":case "string":case "function":return!0}return!1};var Jb={supportedMethods:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(var e=1;e<arguments.length;e++)if(arguments[e]instanceof n)for(var f=arguments[e],g=0;g<f.length();g++)c.push(f.get(g));else c.push(arguments[e]);return new n(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&
d<c;d++)if(this.has(d)&&!b.g(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.g(a,this.get(e),e,this)&&d.push(this.get(e));return new n(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.g(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&
this.get(f)===b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.g(a,this.get(e),e,this));return new n(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,
Array.prototype.slice.call(arguments,1))},reduce:function(a,b,c){var d=this.length(),e,f=0;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: Reduce on List with no elements.");for(var g=0;g<d;g++)if(this.has(g)){e=this.get(g);f=g+1;break}if(g===d)throw Error("TypeError: Reduce on List with no elements.");}for(var h=f;h<d;h++)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f=d-1;if(void 0!==c)e=c;else{if(0===d)throw Error("TypeError: ReduceRight on List with no elements.");
for(var g=1;g<=d;g++)if(this.has(d-g)){e=this.get(d-g);f=d-(g+1);break}if(g>d)throw Error("TypeError: ReduceRight on List with no elements.");}for(var h=f;0<=h;h--)this.has(h)&&(e=b.g(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Hb(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):wa(this,c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?
Math.max(d+c,0):Math.min(c,d);c=Math.max(b,c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new n(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.g(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Hb(this);void 0===b?c.sort():c.sort(function(e,f){return Number(b.g(a,e,f))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):wa(this,d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,
1,arguments.length-1))},toString:function(){return this.toString()},unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var Kb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),Lb=new ra("break"),Mb=new ra("continue"),Nb=function(a,b){return H(this,a)+H(this,b)},Ob=function(a,b){return H(this,a)&&H(this,b)},Pb=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(!(c instanceof n))throw Error("Error: Non-List argument given to Apply instruction.");if(null===a||void 0===a)throw Error("TypeError: Can't read property "+
b+" of "+a+".");if("boolean"===typeof a||"number"===typeof a){if("toString"===b)return a.toString();throw Error("TypeError: "+a+"."+b+" is not a function.");}if("string"===typeof a){if(0<=Oa(Kb,b)){var d=Gb(c);return Fb(a[b].apply(a,d),this.g)}throw Error("TypeError: "+b+" is not a function");}if(a instanceof n){if(a.has(b)){var e=a.get(b);if(e instanceof nb){var f=Hb(c);f.unshift(this.g);return e.g.apply(e,f)}throw Error("TypeError: "+b+" is not a function");}if(0<=Oa(Jb.supportedMethods,b)){var g=
Hb(c);g.unshift(this.g);return Jb[b].apply(a,g)}}if(a instanceof nb||a instanceof rb){if(a.has(b)){var h=a.get(b);if(h instanceof nb){var l=Hb(c);l.unshift(this.g);return h.g.apply(h,l)}throw Error("TypeError: "+b+" is not a function");}if("toString"===b)return a instanceof nb?a.S:a.toString();if("hasOwnProperty"===b)return a.has.apply(a,Hb(c))}if(a instanceof yb&&"toString"===b)return a.toString();throw Error("TypeError: Object has no '"+b+"' property.");},Sb=function(a,b){a=H(this,a);if("string"!==
typeof a)throw Error("Invalid key name given for assignment.");var c=this.g;if(!c.has(a))throw Error("Attempting to assign to undefined value "+b);var d=H(this,b);c.set(a,d);return d},Tb=function(a){var b=Da(this.g),c=qb(b,Array.prototype.slice.apply(arguments));if(c instanceof ra)return c},Ub=function(){return Lb},Vb=function(a){for(var b=H(this,a),c=0;c<b.length;c++){var d=H(this,b[c]);if(d instanceof ra)return d}},Wb=function(a){for(var b=this.g,c=0;c<arguments.length-1;c+=2){var d=arguments[c];
if("string"===typeof d){var e=H(this,arguments[c+1]);Ca(b,d,e,!0)}}},Xb=function(){return Mb},Yb=function(a,b,c){var d=new n;b=H(this,b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[51,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.g.add(a,H(this,f))},Zb=function(a,b){return H(this,a)/H(this,b)},$b=function(a,b){a=H(this,a);b=H(this,b);var c=a instanceof yb,d=b instanceof yb;return c||d?c&&d?a.Ia==b.Ia:!1:a==b},ac=function(a){for(var b,c=0;c<arguments.length;c++)b=
H(this,arguments[c]);return b};function bc(a,b,c,d){for(var e=0;e<b();e++){var f=a(c(e)),g=qb(f,d);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}}}function cc(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(f){return f},c);if(b instanceof rb||b instanceof n||b instanceof nb){var d=b.fb(),e=d.length();return bc(a,function(){return e},function(f){return d.get(f)},c)}}
var dc=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return cc(function(e){d.set(a,e);return d},b,c)},ec=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return cc(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},fc=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return cc(function(e){var f=Da(d);f.add(a,e);return f},b,c)},jc=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return ic(function(e){d.set(a,e);return d},b,c)},kc=
function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return ic(function(e){var f=Da(d);Ca(f,a,e,!0);return f},b,c)},lc=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);var d=this.g;return ic(function(e){var f=Da(d);f.add(a,e);return f},b,c)};
function ic(a,b,c){if("string"===typeof b)return bc(a,function(){return b.length},function(d){return b[d]},c);if(b instanceof n)return bc(a,function(){return b.length()},function(d){return b.get(d)},c);throw new TypeError("The value is not iterable.");}
var mc=function(a,b,c,d){function e(p,r){for(var q=0;q<f.length();q++){var t=f.get(q);r.add(t,p.get(t))}}var f=H(this,a);if(!(f instanceof n))throw Error("TypeError: Non-List argument given to ForLet instruction.");var g=this.g;d=H(this,d);var h=Da(g);for(e(g,h);pb(h,b);){var l=qb(h,d);if(l instanceof ra){if("break"===l.g)break;if("return"===l.g)return l}var m=Da(g);e(h,m);pb(m,c);h=m}},nc=function(a){a=H(this,a);var b=this.g,c=!1;if(c&&!b.has(a))throw new ReferenceError(a+" is not defined.");return b.get(a)},oc=function(a,b){var c;a=H(this,a);b=H(this,b);if(void 0===a||null===a)throw Error("TypeError: cannot access property of "+a+".");if(a instanceof rb||a instanceof n||a instanceof nb)c=a.get(b);else if("string"===typeof a)"length"===b?c=a.length:sa(b)&&(c=a[b]);else if(a instanceof yb)return;return c},pc=function(a,b){return H(this,a)>H(this,
b)},qc=function(a,b){return H(this,a)>=H(this,b)},rc=function(a,b){a=H(this,a);b=H(this,b);a instanceof yb&&(a=a.Ia);b instanceof yb&&(b=b.Ia);return a===b},sc=function(a,b){return!rc.call(this,a,b)},tc=function(a,b,c){var d=[];H(this,a)?d=H(this,b):c&&(d=H(this,c));var e=qb(this.g,d);if(e instanceof ra)return e},uc=function(a,b){return H(this,a)<H(this,b)},vc=function(a,b){return H(this,a)<=H(this,b)},wc=function(a,b){return H(this,a)%H(this,b)},xc=function(a,b){return H(this,a)*H(this,b)},yc=function(a){return-H(this,
a)},Bc=function(a){return!H(this,a)},Cc=function(a,b){return!$b.call(this,a,b)},Dc=function(){return null},Ec=function(a,b){return H(this,a)||H(this,b)},Fc=function(a,b){var c=H(this,a);H(this,b);return c},Gc=function(a){return H(this,a)},Hc=function(a){return Array.prototype.slice.apply(arguments)},Ic=function(a){return new ra("return",H(this,a))},Jc=function(a,b,c){a=H(this,a);b=H(this,b);c=H(this,c);if(null===a||void 0===a)throw Error("TypeError: Can't set property "+b+" of "+a+".");(a instanceof
nb||a instanceof n||a instanceof rb)&&a.set(b,c);return c},Kc=function(a,b){return H(this,a)-H(this,b)},Oc=function(a,b,c){a=H(this,a);var d=H(this,b),e=H(this,c);if(!Ma(d)||!Ma(e))throw Error("Error: Malformed switch instruction.");for(var f,g=!1,h=0;h<d.length;h++)if(g||a===H(this,d[h]))if(f=H(this,e[h]),f instanceof ra){var l=f.g;if("break"===l)return;if("return"===l||"continue"===l)return f}else g=!0;if(e.length===d.length+1&&(f=H(this,e[e.length-1]),f instanceof ra&&("return"===f.g||"continue"===
f.g)))return f},Pc=function(a,b,c){return H(this,a)?H(this,b):H(this,c)},Qc=function(a){a=H(this,a);return a instanceof nb?"function":typeof a},Rc=function(a){for(var b=this.g,c=0;c<arguments.length;c++){var d=arguments[c];"string"!==typeof d||b.add(d,void 0)}},Sc=function(a,b,c,d){var e=H(this,d);if(H(this,c)){var f=qb(this.g,e);if(f instanceof ra){if("break"===f.g)return;if("return"===f.g)return f}}for(;H(this,a);){var g=qb(this.g,e);if(g instanceof ra){if("break"===g.g)break;if("return"===g.g)return g}H(this,
b)}},Tc=function(a){return~Number(H(this,a))},Uc=function(a,b){return Number(H(this,a))<<Number(H(this,b))},Vc=function(a,b){return Number(H(this,a))>>Number(H(this,b))},Wc=function(a,b){return Number(H(this,a))>>>Number(H(this,b))},Xc=function(a,b){return Number(H(this,a))&Number(H(this,b))},Yc=function(a,b){return Number(H(this,a))^Number(H(this,b))},Zc=function(a,b){return Number(H(this,a))|Number(H(this,b))};var ad=function(){this.g=new wb;$c(this)};ad.prototype.ad=function(a){return bd(this.g.s(a))};
var dd=function(a,b){return bd(cd.g.F(a,b))},$c=function(a){var b=function(d,e){var f=a.g,g=String(e);vb.hasOwnProperty(d)&&xb(f,g||d,vb[d])};b("control",49);b("fn",51);b("list",7);b("map",8);b("undefined",44);var c=function(d,e){xb(a.g,String(d),e)};c(0,Nb);c(1,Ob);c(2,Pb);c(3,Sb);c(53,Tb);c(4,Ub);c(5,Vb);c(52,Wb);c(6,Xb);c(9,Vb);c(50,Yb);c(10,Zb);c(12,$b);c(13,ac);c(47,dc);c(54,ec);c(55,fc);c(63,mc);c(64,jc);c(65,kc);c(66,lc);c(15,nc);c(16,oc);c(17,oc);c(18,pc);c(19,qc);c(20,rc);c(21,sc);c(22,tc);
c(23,uc);c(24,vc);c(25,wc);c(26,xc);c(27,yc);c(28,Bc);c(29,Cc);c(45,Dc);c(30,Ec);c(32,Fc);c(33,Fc);c(34,Gc);c(35,Gc);c(46,Hc);c(36,Ic);c(43,Jc);c(37,Kc);c(38,Oc);c(39,Pc);c(40,Qc);c(41,Rc);c(42,Sc);c(58,Tc);c(57,Uc);c(60,Vc);c(61,Wc);c(56,Xc);c(62,Yc);c(59,Zc)},fd=function(){var a=cd,b=ed();xb(a.g,"require",b)},gd=function(a,b){a.g.g.S=b};
function bd(a){if(a instanceof ra||a instanceof nb||a instanceof n||a instanceof rb||a instanceof yb||null===a||void 0===a||"string"===typeof a||"number"===typeof a||"boolean"===typeof a)return a};var hd=function(){var a=function(b){return{toString:function(){return b}}};return{vg:a("consent"),qd:a("consent_always_fire"),Se:a("convert_case_to"),Te:a("convert_false_to"),Ue:a("convert_null_to"),Ve:a("convert_true_to"),We:a("convert_undefined_to"),Fi:a("debug_mode_metadata"),eb:a("function"),eh:a("instance_name"),gh:a("live_only"),hh:a("malware_disabled"),ih:a("metadata"),Ii:a("original_activity_id"),Ji:a("original_vendor_template_id"),kh:a("once_per_event"),Cf:a("once_per_load"),Li:a("priority_override"),
Mi:a("respected_consent_types"),Jf:a("setup_tags"),Lf:a("tag_id"),Mf:a("teardown_tags")}}();
var id=[],jd={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},kd=function(a){return jd[a]},ld=/[\x00\x22\x26\x27\x3c\x3e]/g;id[3]=function(a){return String(a).replace(ld,kd)};var ud=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,vd={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},wd=function(a){return vd[a]};id[7]=function(a){return String(a).replace(ud,wd)};
id[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(ud,wd)+"'"}};var Cd=/['()]/g,Dd=function(a){return"%"+a.charCodeAt(0).toString(16)};id[12]=function(a){var b=
encodeURIComponent(String(a));Cd.lastIndex=0;return Cd.test(b)?b.replace(Cd,Dd):b};var Ed=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,Fd={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},Gd=function(a){return Fd[a]};var Hd=
/^(?:(?:https?|mailto):|[^&:\/?#]*(?:[\/?#]|$))/i;id[14]=function(a){var b=String(a);return Hd.test(b)?b.replace(Ed,Gd):"#zSoyz"};id[16]=function(a){return a};var Id;
var Jd=[],Kd=[],Ld=[],Md=[],Nd=[],Od={},Pd,Qd,Rd,Sd=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Td=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=Od[c],e={},f;for(f in a)if(a.hasOwnProperty(f))if(0===f.indexOf("vtp_"))d&&b&&b.Rf&&b.Rf(a[f]),e[void 0!==d?f:f.substr(4)]=a[f];else if(f===hd.qd.toString()&&a[f]){}d&&b&&b.Qf&&(e.vtp_gtmCachedValues=b.Qf);return void 0!==d?d(e):Id(c,e,b)},Vd=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Ud(a[e],b,c));return d},Ud=function(a,b,c){if(Ma(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Ud(a[e],b,c));return d;case "macro":var f=
a[1];if(c[f])return;var g=Jd[f];if(!g||b.ve(g))return;c[f]=!0;try{var h=Vd(g,b,c);h.vtp_gtmEventId=b.id;d=Td(h,b);Rd&&(d=Rd.zh(d,h))}catch(y){b.dg&&b.dg(y,Number(f)),d=!1}c[f]=!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Ud(a[l],b,c)]=Ud(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,p=1;p<a.length;p++){var r=Ud(a[p],b,c);Qd&&(m=m||r===Qd.Oc);d.push(r)}return Qd&&m?Qd.Ch(d):d.join("");case "escape":d=Ud(a[1],b,c);if(Qd&&Ma(a[1])&&"macro"===a[1][0]&&Qd.Sh(a))return Qd.ii(d);d=
String(d);for(var q=2;q<a.length;q++)id[a[q]]&&(d=id[a[q]](d));return d;case "tag":var t=a[1];if(!Md[t])throw Error("Unable to resolve tag reference "+t+".");return d={Yf:a[2],index:t};case "zb":var u={arg0:a[2],arg1:a[3],ignore_case:a[5]};u["function"]=a[1];var v=Wd(u,b,c),x=!!a[4];return x||2!==v?x!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Wd=function(a,b,c){try{return Pd(Vd(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Xd=function(a,b,c){var d;d=Error.call(this);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.s=a;this.g=c};oa(Xd,Error);function ae(a,b){if(Ma(a)){Object.defineProperty(a,"context",{value:{line:b[0]}});for(var c=1;c<a.length;c++)ae(a[c],b[c])}};var be=function(a,b){var c;c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.B=a;this.s=b;this.g=[]};oa(be,Error);var de=function(){return function(a,b){a instanceof be||(a=new be(a,ce));b&&a.g.push(b);throw a;}};function ce(a){if(!a.length)return a;a.push({id:"main",line:0});for(var b=a.length-1;0<b;b--)La(a[b].id)&&a.splice(b++,1);for(var c=a.length-1;0<c;c--)a[c].line=a[c-1].line;a.splice(0,1);return a};var ge=function(a){function b(q){for(var t=0;t<q.length;t++)d[q[t]]=!0}for(var c=[],d=[],e=ee(a),f=0;f<Kd.length;f++){var g=Kd[f],h=fe(g,e);if(h){for(var l=g.add||[],m=0;m<l.length;m++)c[l[m]]=!0;b(g.block||[])}else null===h&&b(g.block||[]);}for(var p=[],r=0;r<Md.length;r++)c[r]&&!d[r]&&(p[r]=!0);return p},fe=function(a,b){for(var c=a["if"]||[],d=0;d<c.length;d++){var e=b(c[d]);if(0===e)return!1;if(2===e)return null}for(var f=
a.unless||[],g=0;g<f.length;g++){var h=b(f[g]);if(2===h)return null;if(1===h)return!1}return!0},ee=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Wd(Ld[c],a));return b[c]}};var he={zh:function(a,b){b[hd.Se]&&"string"===typeof a&&(a=1==b[hd.Se]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(hd.Ue)&&null===a&&(a=b[hd.Ue]);b.hasOwnProperty(hd.We)&&void 0===a&&(a=b[hd.We]);b.hasOwnProperty(hd.Ve)&&!0===a&&(a=b[hd.Ve]);b.hasOwnProperty(hd.Te)&&!1===a&&(a=b[hd.Te]);return a}};var ie=function(){this.g={}};function je(a,b,c,d){if(a)for(var e=0;e<a.length;e++){var f=void 0,g="A policy function denied the permission request";try{f=a[e].call(void 0,b,c,d),g+="."}catch(h){g="string"===typeof h?g+(": "+h):h instanceof Error?g+(": "+h.message):g+"."}if(!f)throw new Xd(c,d,g);}}function ke(a,b,c){return function(){var d=arguments[0];if(d){var e=a.g[d],f=a.g.all;if(e||f){var g=c.apply(void 0,Array.prototype.slice.call(arguments,0));je(e,b,d,g);je(f,b,d,g)}}}};var oe=function(a){var b=le.K,c=this;this.s=new ie;this.g={};var d={},e=ke(this.s,b,function(){var f=arguments[0];return f&&d[f]?d[f].apply(void 0,Array.prototype.slice.call(arguments,0)):{}});Va(a,function(f,g){var h={};Va(g,function(l,m){var p=me(l,m);h[l]=p.assert;d[l]||(d[l]=p.T)});c.g[f]=function(l,m){var p=h[l];if(!p)throw ne(l,{},"The requested permission "+l+" is not configured.");var r=Array.prototype.slice.call(arguments,0);p.apply(void 0,r);e.apply(void 0,r)}})},qe=function(a){return pe.g[a]||
function(){}};function me(a,b){var c=Sd(a,b);c.vtp_permissionName=a;c.vtp_createPermissionError=ne;try{return Td(c)}catch(d){return{assert:function(e){throw new Xd(e,{},"Permission "+e+" is unknown.");},T:function(){for(var e={},f=0;f<arguments.length;++f)e["arg"+(f+1)]=arguments[f];return e}}}}function ne(a,b,c){return new Xd(a,b,c)};var re=!1;var se={};se.Ei=Za('');se.Fh=Za('');var te=re,ue=se.Fh,ve=se.Ei;
var Ke=function(a,b){return a.length&&b.length&&a.lastIndexOf(b)===a.length-b.length},Le=function(a,b){var c="*"===b.charAt(b.length-1)||"/"===b||"/*"===b;Ke(b,"/*")&&(b=b.slice(0,-2));Ke(b,"?")&&(b=b.slice(0,-1));var d=b.split("*");if(!c&&1===d.length)return a===d[0];for(var e=-1,f=0;f<d.length;f++){var g=d[f];if(g){e=a.indexOf(g,e);if(-1===e||0===f&&0!==e)return!1;e+=g.length}}if(c||e===a.length)return!0;var h=d[d.length-1];return a.lastIndexOf(h)===a.length-h.length},Me=/^[a-z0-9-]+$/i,Ne=/^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
Pe=function(a,b){var c;if(!(c=!Oe(a))){var d;a:{var e=a.hostname.split(".");if(2>e.length)d=!1;else{for(var f=0;f<e.length;f++)if(!Me.exec(e[f])){d=!1;break a}d=!0}}c=!d}if(c)return!1;for(var g=0;g<b.length;g++){var h;var l=a,m=b[g];if(!Ne.exec(m))throw Error("Invalid Wildcard");var p=m.slice(8),r=p.slice(0,p.indexOf("/")),q;var t=l.hostname,u=r;if(0!==u.indexOf("*."))q=t.toLowerCase()===u.toLowerCase();else{u=u.slice(2);var v=t.toLowerCase().indexOf(u.toLowerCase());q=-1===v?!1:t.length===u.length?
!0:t.length!==u.length+v?!1:"."===t[v-1]}if(q){var x=p.slice(p.indexOf("/"));h=Le(l.pathname+l.search,x)?!0:!1}else h=!1;if(h)return!0}return!1},Oe=function(a){return"https:"===a.protocol&&(!a.port||"443"===a.port)};var Qe=/^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,Re={Fn:"function",DustMap:"Object",List:"Array"},K=function(a,b,c){for(var d=0;d<b.length;d++){var e=Qe.exec(b[d]);if(!e)throw Error("Internal Error in "+a);var f=e[1],g="!"===e[2],h=e[3],l=c[d],m=typeof l;if(null===l||"undefined"===m){if(g)throw Error("Error in "+a+". Required argument "+f+" not supplied.");}else if("*"!==h){var p=typeof l;l instanceof nb?p="Fn":l instanceof n?p="List":l instanceof rb?p="DustMap":
l instanceof yb&&(p="OpaqueValue");if(p!=h)throw Error("Error in "+a+". Argument "+f+" has type "+p+", which does not match required type "+(Re[h]||h)+".");}}};function Se(a){return""+a}
function Te(a,b){var c=[];return c};var Ue=function(a,b){var c=new nb(a,function(){for(var d=Array.prototype.slice.call(arguments,0),e=0;e<d.length;e++)d[e]=H(this,d[e]);return b.apply(this,d)});c.hb();return c},Ve=function(a,b){var c=new rb,d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d];Ka(e)?c.set(d,Ue(a+"_"+d,e)):(La(e)||A(e)||"boolean"==typeof e)&&c.set(d,e)}c.hb();return c};var We=function(a,b){K(I(this),["apiName:!string","message:?string"],arguments);var c={},d=new rb;return d=Ve("AssertApiSubject",c)};var Xe=function(a,b){K(I(this),["actual:?*","message:?string"],arguments);var c={},d=new rb;
return d=Ve("AssertThatSubject",c)};function Ye(a){return function(){for(var b=[],c=this.g,d=0;d<arguments.length;++d)b.push(Gb(arguments[d],c));return Fb(a.apply(null,b))}}var $e=function(){for(var a=Math,b=Ze,c={},d=0;d<b.length;d++){var e=b[d];a.hasOwnProperty(e)&&(c[e]=Ye(a[e].bind(a)))}return c};var af=function(a){var b;return b};var bf=function(a){var b;return b};var cf=function(a){K(I(this),["uri:!string"],arguments);return encodeURI(a)};var gf=function(a){K(I(this),["uri:!string"],arguments);return encodeURIComponent(a)};var hf=function(a){K(I(this),["message:?string"],arguments);};var jf=function(a,b){K(I(this),["min:!number","max:!number"],arguments);return Ra(a,b)};var kf=function(a,b,c){var d=a.g.g;if(!d)throw Error("Missing program state.");d.uh.apply(null,Array.prototype.slice.call(arguments,1))};var lf=function(){kf(this,"read_container_data");var a=new rb;a.set("containerId",'GTM-WJZQSJF');a.set("version",'261');a.set("environmentName",'');a.set("debugMode",te);a.set("previewMode",ve);a.set("environmentMode",ue);a.hb();return a};var mf=function(){return(new Date).getTime()};var nf=function(a){if(null===a)return"null";if(a instanceof n)return"array";if(a instanceof nb)return"function";if(a instanceof yb){a=a.Ia;if(void 0===a.constructor||void 0===a.constructor.name){var b=String(a);return b.substring(8,b.length-1)}return String(a.constructor.name)}return typeof a};var of=function(a){function b(c){return function(d){try{return c(d)}catch(e){(te||ve)&&a.call(this,e.message)}}}return{parse:b(function(c){return Fb(JSON.parse(c))}),stringify:b(function(c){return JSON.stringify(Gb(c))})}};var pf=function(a){return Ya(Gb(a,this.g))};var qf=function(a){return Number(Gb(a,this.g))};var rf=function(a){return null===a?"null":void 0===a?"undefined":a.toString()};var sf=function(a,b,c){var d=null,e=!1;return e?d:null};var Ze="floor ceil round max min abs pow sqrt".split(" ");var tf=function(){var a={};return{Lh:function(b){return a.hasOwnProperty(b)?a[b]:void 0},yi:function(b,c){a[b]=c},reset:function(){a={}}}},uf=function(a,b){K(I(this),["apiName:!string","mock:?*"],arguments);};var vf={};
vf.keys=function(a){return new n};
vf.values=function(a){return new n};
vf.entries=function(a){return new n};vf.freeze=function(a){return a};var xf=function(){this.g={};this.s={};};xf.prototype.get=function(a,b){var c=this.g.hasOwnProperty(a)?this.g[a]:void 0;return c};
xf.prototype.add=function(a,b,c){if(this.g.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";if(this.s.hasOwnProperty(a))throw"Attempting to add an API with an existing private API name: "+a+".";this.g[a]=c?void 0:Ka(b)?Ue(a,b):Ve(a,b)};
var zf=function(a,b,c){if(a.s.hasOwnProperty(b))throw"Attempting to add a private function which already exists: "+b+".";if(a.g.hasOwnProperty(b))throw"Attempting to add a private function with an existing API name: "+b+".";a.s[b]=Ka(c)?Ue(b,c):Ve(b,c)};function yf(a,b){var c=void 0;return c};function Af(){var a={};return a};var M={Sb:"_ee",Tc:"_syn_or_mod",Ni:"_uei",Rd:"_eu",Ki:"_pci",Gd:"event_callback",Gc:"event_timeout",va:"gtag.config",Fa:"gtag.get",ja:"purchase",sb:"refund",Ya:"begin_checkout",qb:"add_to_cart",rb:"remove_from_cart",Eg:"view_cart",$e:"add_to_wishlist",Ea:"view_item",Ze:"view_promotion",Ye:"select_promotion",td:"select_item",Ac:"view_item_list",Xe:"add_payment_info",Dg:"add_shipping_info",Ra:"value_key",Qa:"value_callback",wa:"allow_ad_personalization_signals",Ob:"restricted_data_processing",Kb:"allow_google_signals",
za:"cookie_expires",Lb:"cookie_update",Qb:"session_duration",Jc:"session_engaged_time",Ha:"user_properties",la:"transport_url",P:"ads_data_redaction",yb:"user_data",Mb:"first_party_collection",D:"ad_storage",I:"analytics_storage",rd:"region",Re:"wait_for_update",ya:"conversion_linker",xa:"conversion_cookie_prefix",ba:"value",aa:"currency",uf:"trip_type",X:"items",lf:"passengers"};M.xf=[M.ja,M.sb,M.Ya,M.qb,M.rb,M.Eg,M.$e,M.Ea,M.Ze,M.Ye,M.Ac,M.td,M.Xe,M.Dg];
M.wf=[M.wa,M.Kb,M.Lb];M.yf=[M.za,M.Gc,M.Qb,M.Jc];var Cf=function(a){Fa("GTM",a)};var Df=function(a,b){this.g=a;this.defaultValue=void 0===b?!1:b};var Ef=new Df(1936,!0),Ff=new Df(1933),Gf=new Df(373442741);var Hf,If=function(){if(void 0===Hf){var a=null,b=pa.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:qa,createScript:qa,createScriptURL:qa})}catch(c){pa.console&&pa.console.error(c.message)}Hf=a}else Hf=a}return Hf};var Kf=function(a,b){this.g=b===Jf?a:""};Kf.prototype.toString=function(){return this.g+""};var Jf={},Lf=function(a){var b=If(),c=b?b.createScriptURL(a):a;return new Kf(c,Jf)};var Mf=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Nf;a:{var Of=pa.navigator;if(Of){var Pf=Of.userAgent;if(Pf){Nf=Pf;break a}}Nf=""}var Qf=function(a){return-1!=Nf.indexOf(a)};var Sf=function(a,b,c){this.g=c===Rf?a:""};Sf.prototype.toString=function(){return this.g.toString()};var Tf=function(a){return a instanceof Sf&&a.constructor===Sf?a.g:"type_error:SafeHtml"},Rf={},Uf=function(a){var b=If(),c=b?b.createHTML(a):a;return new Sf(c,null,Rf)},Vf=new Sf(pa.trustedTypes&&pa.trustedTypes.emptyHTML||"",0,Rf);var Wf=function(a,b){a.src=b instanceof Kf&&b.constructor===Kf?b.g:"type_error:TrustedResourceUrl";var c,d,e=(a.ownerDocument&&a.ownerDocument.defaultView||window).document,f=null===(d=e.querySelector)||void 0===d?void 0:d.call(e,"script[nonce]");(c=f?f.nonce||f.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)};var Xf=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d},Yf=function(a){var b=a;return function(){if(b){var c=b;b=null;c()}}};var Zf=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);var c=a.firstChild.firstChild;a.innerHTML=Tf(Vf);return!c.parentElement}),$f=function(a,b){if(Zf())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Tf(b)};var F=window,N=document,ag=navigator,bg=N.currentScript&&N.currentScript.src,cg=function(a,b){var c=F[a];F[a]=void 0===c?b:c;return F[a]},dg=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},eg=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},fg={async:1,nonce:1,onerror:1,onload:1,src:1,type:1},gg=function(a,b,c,d){var e=N.createElement("script");
d&&Va(d,function(f,g){f=f.toLowerCase();fg.hasOwnProperty(f)||e.setAttribute(f,g)});e.type="text/javascript";e.async=!0;Wf(e,Lf(a));eg(e,b);c&&(e.onerror=c);dg(e);return e},hg=function(){if(bg){var a=bg.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},ig=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=N.body&&N.body.lastChild||N.body||N.head;d.parentNode.insertBefore(c,
d);eg(c,b);void 0!==a&&(c.src=a);return c},jg=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},kg=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},lg=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},O=function(a){F.setTimeout(a,0)},mg=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:
null},ng=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},og=function(a){var b=N.createElement("div"),c=Uf("A<div>"+a+"</div>");$f(b,c);b=b.lastChild;for(var d=[];b.firstChild;)d.push(b.removeChild(b.firstChild));return d},pg=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,g=0;f&&g<=c;g++){if(d[String(f.tagName).toLowerCase()])return f;f=f.parentElement}return null},
qg=function(a){ag.sendBeacon&&ag.sendBeacon(a)||jg(a)},rg=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c},sg=function(a){var b=N.featurePolicy;return b&&Ka(b.features)?-1!==b.features().indexOf(a):!1};var tg=function(){var a={};this.g=function(b,c){return null!=a[b]?a[b]:c};this.s=function(){a[Ff.g]=!0}};tg.g=void 0;tg.s=function(){return tg.g?tg.g:tg.g=new tg};var ug=function(a){return tg.s().g(a.g,a.defaultValue)};var vg=[];function wg(){var a=cg("google_tag_data",{});a.ics||(a.ics={entries:{},set:xg,update:yg,addListener:zg,notifyListeners:Ag,active:!1,usedDefault:!1});return a.ics}
function xg(a,b,c,d,e,f){var g=wg();g.active=!0;g.usedDefault=!0;if(void 0!=b){var h=g.entries,l=h[a]||{},m=l.region,p=c&&A(c)?c.toUpperCase():void 0;d=d.toUpperCase();e=e.toUpperCase();if(""===d||p===e||(p===d?m!==e:!p&&!m)){var r=!!(f&&0<f&&void 0===l.update),q={region:p,initial:"granted"===b,update:l.update,quiet:r};if(""!==d||!1!==l.initial)h[a]=q;r&&F.setTimeout(function(){h[a]===q&&q.quiet&&(q.quiet=!1,Bg(a),Ag(),Fa("TAGGING",2))},f)}}}
function yg(a,b){var c=wg();c.active=!0;if(void 0!=b){var d=Cg(a),e=c.entries,f=e[a]=e[a]||{};f.update="granted"===b;var g=Cg(a);f.quiet?(f.quiet=!1,Bg(a)):g!==d&&Bg(a)}}function zg(a,b){vg.push({fe:a,Hh:b})}function Bg(a){for(var b=0;b<vg.length;++b){var c=vg[b];Ma(c.fe)&&-1!==c.fe.indexOf(a)&&(c.fg=!0)}}function Ag(a){for(var b=0;b<vg.length;++b){var c=vg[b];if(c.fg){c.fg=!1;try{c.Hh({xh:a})}catch(d){}}}}
var Cg=function(a){var b=wg().entries[a]||{};return void 0!==b.update?b.update:b.initial},Dg=function(a){return(wg().entries[a]||{}).initial},Eg=function(a){return!(wg().entries[a]||{}).quiet},Fg=function(){return ug(Ff)?wg().active:!1},Gg=function(){return wg().usedDefault},Hg=function(a,b){wg().addListener(a,b)},Ig=function(a,b){function c(){for(var e=0;e<b.length;e++)if(!Eg(b[e]))return!0;return!1}if(c()){var d=!1;Hg(b,function(e){d||c()||(d=!0,a(e))})}else a({})},Mg=function(a,b){function c(){for(var f=
[],g=0;g<d.length;g++){var h=d[g];!1===Cg(h)||e[h]||(f.push(h),e[h]=!0)}return f}var d=A(b)?[b]:b,e={};c().length!==d.length&&Hg(d,function(f){var g=c();0<g.length&&(f.fe=g,a(f))})};function Ng(a){for(var b=[],c=0;c<Og.length;c++){var d=a(Og[c]);b[c]=!0===d?"1":!1===d?"0":"-"}return b.join("")}
var Og=[M.D,M.I],Pg=function(a){var b=a[M.rd];b&&Cf(40);var c=a[M.Re];c&&Cf(41);for(var d=Ma(b)?b:[b],e=0;e<d.length;++e)for(var f in a)if(a.hasOwnProperty(f)&&f!==M.rd&&f!==M.Re)if(-1<Oa(Og,f)){var g=f,h=a[f],l=d[e];wg().set(g,h,l,"TW","TW-TAO",c)}else{}},Qg=function(a,
b){for(var c in a)if(a.hasOwnProperty(c))if(-1<Oa(Og,c)){var d=c,e=a[c];wg().update(d,e)}else{}wg().notifyListeners(b)},Rg=function(a){var b=Cg(a);return void 0!=b?b:!0},Sg=function(){return"G1"+Ng(Cg)},Tg=function(a,b){Hg(a,b)},Ug=function(a,b){Mg(a,b)},Vg=function(a,b){Ig(a,b)};var Xg=function(a){return Wg?N.querySelectorAll(a):null},Yg=function(a,b){if(!Wg)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!N.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},Zg=!1;if(N.querySelectorAll)try{var $g=N.querySelectorAll(":root");$g&&1==$g.length&&$g[0]==N.documentElement&&(Zg=!0)}catch(a){}var Wg=Zg;var ah=function(a){if(N.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!F.getComputedStyle)return!0;var c=F.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,g=e.filter;if(g){var h=g.indexOf("opacity(");0<=h&&(g=g.substring(h+8,g.indexOf(")",h)),"%"==g.charAt(g.length-1)&&(g=g.substring(0,g.length-1)),f=Math.min(g,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=F.getComputedStyle(d,
null))}return!1};
var bh=function(){var a=N.body,b=N.documentElement||a&&a.parentElement,c,d;if(N.compatMode&&"BackCompat"!==N.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,g){return f&&g?Math.min(f,g):Math.max(f,g)};Cf(7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},ch=function(a){var b=bh(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,g=e.right-e.left;return f&&g?(1-Math.min((Math.max(0-e.left,0)+Math.max(e.right-
d,0))/g,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0};var jh=/:[0-9]+$/,kh=function(a,b,c,d){for(var e=[],f=a.split("&"),g=0;g<f.length;g++){var h=f[g].split("=");if(decodeURIComponent(h[0]).replace(/\+/g," ")===b){var l=h.slice(1).join("=");if(!c)return d?l:decodeURIComponent(l).replace(/\+/g," ");e.push(d?l:decodeURIComponent(l).replace(/\+/g," "))}}return c?e:void 0},nh=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=lh(a.protocol)||lh(F.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:
F.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&(a.hostname=(a.hostname||F.location.hostname).replace(jh,"").toLowerCase());return mh(a,b,c,d,e)},mh=function(a,b,c,d,e){var f,g=lh(a.protocol);b&&(b=String(b).toLowerCase());switch(b){case "url_no_fragment":f=oh(a);break;case "protocol":f=g;break;case "host":f=a.hostname.replace(jh,"").toLowerCase();if(c){var h=/^www\d*\./.exec(f);h&&h[0]&&(f=f.substr(h[0].length))}break;case "port":f=String(Number(a.port)||("http"==
g?80:"https"==g?443:""));break;case "path":a.pathname||a.hostname||Fa("TAGGING",1);f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=Oa(d||[],l[l.length-1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");e&&(f=kh(f,e,!1,void 0));break;case "extension":var m=a.pathname.split(".");f=1<m.length?m[m.length-1]:"";f=f.split("/")[0];break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},lh=function(a){return a?a.replace(":",
"").toLowerCase():""},oh=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},ph=function(a){var b=N.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||Fa("TAGGING",1),c="/"+c);var d=b.hostname.replace(jh,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}},qh=function(a){function b(m){var p=m.split("=")[0];return 0>d.indexOf(p)?m:p+"=0"}function c(m){return m.split("&").map(b).filter(function(p){return void 0!=
p}).join("&")}var d="gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "),e=ph(a),f=a.split(/[?#]/)[0],g=e.search,h=e.hash;"?"===g[0]&&(g=g.substring(1));"#"===h[0]&&(h=h.substring(1));g=c(g);h=c(h);""!==g&&(g="?"+g);""!==h&&(h="#"+h);var l=""+f+g+h;"/"===l[l.length-1]&&(l=l.substring(0,l.length-1));return l};var rh=new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i),sh=new RegExp(/@(gmail|googlemail)\./i),th=new RegExp(/support|noreply/i),uh="SCRIPT STYLE IMG SVG PATH BR".split(" "),vh=["BR"];function wh(a){var b;if(a===N.body)b="body";else{var c;if(a.id)c="#"+a.id;else{var d;if(a.parentElement){var e;a:{var f=a.parentElement;if(f){for(var g=0;g<f.childElementCount;g++)if(f.children[g]===a){e=g+1;break a}e=-1}else e=1}d=wh(a.parentElement)+">:nth-child("+e+")"}else d="";c=d}b=c}return b}
function xh(a,b){if(1>=a.length)return a;var c=a.filter(b);return 0==c.length?a:c}function yh(a){if(0==a.length)return null;var b;b=xh(a,function(c){return!th.test(c.sa)});b=xh(b,function(c){return"INPUT"===c.element.tagName.toUpperCase()});b=xh(b,function(c){return!ah(c.element)});return b[0]}
var zh=function(){var a;var b=[],c=N.body;if(c){for(var d=c.querySelectorAll("*"),e=0;e<d.length&&1E4>e;e++){var f=d[e];if(!(0<=uh.indexOf(f.tagName.toUpperCase()))){for(var g=!1,h=0;h<f.childElementCount&&1E4>h;h++)if(!(0<=vh.indexOf(f.children[h].tagName.toUpperCase()))){g=!0;break}g||b.push(f)}}a={elements:b,status:1E4<d.length?"2":"1"}}else a={elements:b,status:"4"};for(var l=a,m=l.elements,p=[],r=0;r<m.length;r++){var q=m[r],t=q.textContent;q.value&&(t=q.value);if(t){var u=t.match(rh);if(u){var v=
u[0],x;if(F.location){var y=mh(F.location,"host",!0);x=0<=v.toLowerCase().indexOf(y)}else x=!1;x||p.push({element:q,sa:v})}}}var w=yh(p),z=[];if(w){var B=w.element,C={sa:w.sa,tagName:B.tagName,type:1};C.querySelector=wh(B);C.isVisible=!ah(B);z.push(C)}return{elements:z,status:10<p.length?"3":l.status}},Ah=function(a){return a.tagName+":"+a.isVisible+":"+a.sa.length+":"+sh.test(a.sa)};var le={},Rh=null,Sh=Math.random();le.K="GTM-WJZQSJF";le.Sc="5q1";le.Hi="";le.xg="ChAI8MzHhQYQyvfdz/qz6oVxEiQAJD4K7Fbii99LcqAiJ/IzfKOUim9wr+wz9M6bgG9s8V2cQ00aApkH";var Th={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},Uh={__paused:!0,__tg:!0},Vh;for(Vh in Th)Th.hasOwnProperty(Vh)&&(Uh[Vh]=!0);var Wh="www.googletagmanager.com/gtm.js";
var Xh=Wh,Yh=Za(""),Zh=null,$h=null,ai="https://www.googletagmanager.com/a?id="+le.K+"&cv=261",bi={},ci={},di=function(){var a=Rh.sequence||1;Rh.sequence=a+1;return a};le.wg="";var ei={},fi=new Ta,gi={},hi={},ki={name:"dataLayer",set:function(a,b){J(kb(a,b),gi);ii()},get:function(a){return ji(a,2)},reset:function(){fi=new Ta;gi={};ii()}},ji=function(a,b){return 2!=b?fi.get(a):li(a)},li=function(a,b){var c=a.split(".");b=b||[];for(var d=gi,e=0;e<c.length;e++){if(null===d)return!1;if(void 0===d)break;d=d[c[e]];if(-1!==Oa(b,d))return}return d},mi=function(a,b){hi.hasOwnProperty(a)||(fi.set(a,b),J(kb(a,b),gi),ii())},ni=function(){for(var a=["gtm.allowlist","gtm.blocklist",
"gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],b=0;b<a.length;b++){var c=a[b],d=ji(c,1);if(Ma(d)||Eb(d))d=J(d);hi[c]=d}},ii=function(a){Va(hi,function(b,c){fi.set(b,c);J(kb(b,void 0),gi);J(kb(b,c),gi);a&&delete hi[b]})},pi=function(a,b,c){ei[a]=ei[a]||{};ei[a][b]=oi(b,c)},oi=function(a,b){var c,d=1!==(void 0===b?2:b)?li(a):fi.get(a);"array"===Cb(d)||"object"===Cb(d)?c=J(d):c=d;return c},qi=function(a,b){if(ei[a])return ei[a][b]},ri=function(a,b){ei[a]&&delete ei[a][b]};var ui={},vi=function(a,b){if(F._gtmexpgrp&&F._gtmexpgrp.hasOwnProperty(a))return F._gtmexpgrp[a];void 0===ui[a]&&(ui[a]=Math.floor(Math.random()*b));return ui[a]};function wi(a,b,c){for(var d=[],e=b.split(";"),f=0;f<e.length;f++){var g=e[f].split("="),h=g[0].replace(/^\s*|\s*$/g,"");if(h&&h==a){var l=g.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d};function xi(a){return ug(Gf)&&!a.navigator.cookieEnabled?!1:"null"!==a.origin};var Ai=function(a,b,c,d){return yi(d)?wi(a,String(b||zi()),c):[]},Di=function(a,b,c,d,e){if(yi(e)){var f=Bi(a,d,e);if(1===f.length)return f[0].id;if(0!==f.length){f=Ci(f,function(g){return g.$c},b);if(1===f.length)return f[0].id;f=Ci(f,function(g){return g.kc},c);return f[0]?f[0].id:void 0}}};function Ei(a,b,c,d){var e=zi(),f=window;xi(f)&&(f.document.cookie=a);var g=zi();return e!=g||void 0!=c&&0<=Ai(b,g,!1,d).indexOf(c)}
var Ii=function(a,b,c,d){function e(x,y,w){if(null==w)return delete h[y],x;h[y]=w;return x+"; "+y+"="+w}function f(x,y){if(null==y)return delete h[y],x;h[y]=!0;return x+"; "+y}if(!yi(c.Na))return 2;var g;void 0==b?g=a+"=deleted; expires="+(new Date(0)).toUTCString():(c.encode&&(b=encodeURIComponent(b)),b=Fi(b),g=a+"="+b);var h={};g=e(g,"path",c.path);var l;c.expires instanceof Date?l=c.expires.toUTCString():null!=c.expires&&(l=""+c.expires);g=e(g,"expires",l);g=e(g,"max-age",c.bi);g=e(g,"samesite",
c.si);c.vi&&(g=f(g,"secure"));var m=c.domain;if("auto"===m){for(var p=Gi(),r=void 0,q=!1,t=0;t<p.length;++t){var u="none"!==p[t]?p[t]:void 0,v=e(g,"domain",u);v=f(v,c.flags);try{d&&d(a,h)}catch(x){r=x;continue}q=!0;if(!Hi(u,c.path)&&Ei(v,a,b,c.Na))return 0}if(r&&!q)throw r;return 1}m&&"none"!==m&&(g=e(g,"domain",m));g=f(g,c.flags);d&&d(a,h);return Hi(m,c.path)?1:Ei(g,a,b,c.Na)?0:1},Ji=function(a,b,c){null==c.path&&(c.path="/");c.domain||(c.domain="auto");return Ii(a,b,c)};
function Ci(a,b,c){for(var d=[],e=[],f,g=0;g<a.length;g++){var h=a[g],l=b(h);l===c?d.push(h):void 0===f||l<f?(e=[h],f=l):l===f&&e.push(h)}return 0<d.length?d:e}function Bi(a,b,c){for(var d=[],e=Ai(a,void 0,void 0,c),f=0;f<e.length;f++){var g=e[f].split("."),h=g.shift();if(!b||-1!==b.indexOf(h)){var l=g.shift();l&&(l=l.split("-"),d.push({id:g.join("."),$c:1*l[0]||1,kc:1*l[1]||1}))}}return d}
var Fi=function(a){a&&1200<a.length&&(a=a.substring(0,1200));return a},Ki=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Li=/(^|\.)doubleclick\.net$/i,Hi=function(a,b){return Li.test(window.document.location.hostname)||"/"===b&&Ki.test(a)},zi=function(){return xi(window)?window.document.cookie:""},Gi=function(){var a=[],b=window.document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));
var e=window.document.location.hostname;Li.test(e)||Ki.test(e)||a.push("none");return a},yi=function(a){if(!ug(Ff)||!a||!Fg())return!0;if(!Eg(a))return!1;var b=Cg(a);return null==b?!0:!!b};var Mi=function(){return[Math.round(2147483647*Math.random()),Math.round(bb()/1E3)].join(".")},Pi=function(a,b,c,d,e){var f=Ni(b);return Di(a,f,Oi(c),d,e)},Qi=function(a,b,c,d){var e=""+Ni(c),f=Oi(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Ni=function(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Oi=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};function Ri(a,b,c){var d,e=Number(null!=a.lb?a.lb:void 0);0!==e&&(d=new Date((b||bb())+1E3*(e||7776E3)));return{path:a.path,domain:a.domain,flags:a.flags,encode:!!c,expires:d}};var Si=["1"],Ti={},Xi=function(a){var b=Ui(a.prefix);if(!Ti[b]&&!Vi(b,a.path,a.domain)){var c=Mi();if(0===Wi(b,c,a)){var d=cg("google_tag_data",{});d._gcl_au?Fa("GTM",57):d._gcl_au=c}Vi(b,a.path,a.domain)}};function Wi(a,b,c){var d=Qi(b,"1",c.domain,c.path),e=Ri(c);e.Na="ad_storage";return Ji(a,d,e)}function Vi(a,b,c){var d=Pi(a,b,c,Si,"ad_storage");d&&(Ti[a]=d);return d}function Ui(a){return(a||"_gcl")+"_au"};var Yi=function(a){for(var b=[],c=N.cookie.split(";"),d=new RegExp("^\\s*"+(a||"_gac")+"_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"),e=0;e<c.length;e++){var f=c[e].match(d);f&&b.push({Ne:f[1],value:f[2],timestamp:Number(f[2].split(".")[1])||0})}b.sort(function(g,h){return h.timestamp-g.timestamp});return b};
function Zi(a,b){var c=Yi(a),d={};if(!c||!c.length)return d;for(var e=0;e<c.length;e++){var f=c[e].value.split(".");if(!("1"!==f[0]||b&&3>f.length||!b&&3!==f.length)&&Number(f[1])){d[c[e].Ne]||(d[c[e].Ne]=[]);var g={version:f[0],timestamp:1E3*Number(f[1]),oa:f[2]};b&&3<f.length&&(g.labels=f.slice(3));d[c[e].Ne].push(g)}}return d};function $i(){for(var a=aj,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function bj(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var aj,cj;
function dj(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),p=cj[m];if(null!=p)return p;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}aj=aj||bj();cj=cj||$i();for(var c="",d=0;;){var e=b(-1),f=b(0),g=b(64),h=b(64);if(64===h&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=g&&(c+=String.fromCharCode(f<<4&240|g>>2),64!=h&&(c+=String.fromCharCode(g<<6&192|h)))}};var ej;var ij=function(){var a=fj,b=gj,c=hj(),d=function(g){a(g.target||g.srcElement||{})},e=function(g){b(g.target||g.srcElement||{})};if(!c.init){kg(N,"mousedown",d);kg(N,"keyup",d);kg(N,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},jj=function(a,b,c,d,e){var f={callback:a,domains:b,fragment:2===c,placement:c,forms:d,sameHost:e};hj().decorators.push(f)},kj=function(a,b,c){for(var d=hj().decorators,e={},f=0;f<d.length;++f){var g=
d[f],h;if(h=!c||g.forms)a:{var l=g.domains,m=a,p=!!g.sameHost;if(l&&(p||m!==N.location.hostname))for(var r=0;r<l.length;r++)if(l[r]instanceof RegExp){if(l[r].test(m)){h=!0;break a}}else if(0<=m.indexOf(l[r])||p&&0<=l[r].indexOf(m)){h=!0;break a}h=!1}if(h){var q=g.placement;void 0==q&&(q=g.fragment?2:1);q===b&&fb(e,g.callback())}}return e},hj=function(){var a=cg("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var lj=/(.*?)\*(.*?)\*(.*)/,mj=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,nj=/^(?:www\.|m\.|amp\.)+/,oj=/([^?#]+)(\?[^#]*)?(#.*)?/;function pj(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var rj=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];if(void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()){b.push(c);var e=b,f=e.push,g,h=String(d);aj=aj||bj();cj=cj||$i();for(var l=[],m=0;m<h.length;m+=3){var p=m+1<h.length,r=m+2<h.length,q=h.charCodeAt(m),t=p?h.charCodeAt(m+1):0,u=r?h.charCodeAt(m+2):0,v=q>>2,x=(q&3)<<4|t>>4,y=(t&15)<<2|u>>6,w=u&63;r||(w=64,p||(y=64));l.push(aj[v],aj[x],aj[y],aj[w])}g=l.join("");f.call(e,g)}}var z=b.join("*");return["1",qj(z),
z].join("*")},qj=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ej)){for(var e=Array(256),f=0;256>f;f++){for(var g=f,h=0;8>h;h++)g=g&1?g>>>1^3988292384:g>>>1;e[f]=g}d=e}ej=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ej[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},tj=function(){return function(a){var b=ph(F.location.href),
c=b.search.replace("?",""),d=kh(c,"_gl",!1,!0)||"";a.query=sj(d)||{};var e=nh(b,"fragment").match(pj("_gl"));a.fragment=sj(e&&e[3]||"")||{}}},uj=function(a){var b=tj(),c=hj();c.data||(c.data={query:{},fragment:{}},b(c.data));var d={},e=c.data;e&&(fb(d,e.query),a&&fb(d,e.fragment));return d},sj=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=lj.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var g=c;if(g&&"1"===g[1]){var h=g[3],l;a:{for(var m=g[2],p=
0;p<b;++p)if(m===qj(h,p)){l=!0;break a}l=!1}if(l){for(var r={},q=h?h.split("*"):[],t=0;t<q.length;t+=2)r[q[t]]=dj(q[t+1]);return r}}}}catch(u){}};function vj(a,b,c,d){function e(p){var r=p,q=pj(a).exec(r),t=r;if(q){var u=q[2],v=q[4];t=q[1];v&&(t=t+u+v)}p=t;var x=p.charAt(p.length-1);p&&"&"!==x&&(p+="&");return p+m}d=void 0===d?!1:d;var f=oj.exec(c);if(!f)return"";var g=f[1],h=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):h="?"+e(h.substring(1));return""+g+h+l}
function wj(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=kj(b,1,c),e=kj(b,2,c),f=kj(b,3,c);if(hb(d)){var g=rj(d);c?xj("_gl",g,a):yj("_gl",g,a,!1)}if(!c&&hb(e)){var h=rj(e);yj("_gl",h,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,p=f[l],r=a;if(r.tagName){if("a"===r.tagName.toLowerCase()){yj(m,p,r,void 0);break a}if("form"===r.tagName.toLowerCase()){xj(m,p,r);break a}}"string"==typeof r&&vj(m,p,r,void 0)}}
function yj(a,b,c,d){if(c.href){var e=vj(a,b,c.href,void 0===d?!1:d);Mf.test(e)&&(c.href=e)}}
function xj(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,g=0;g<e.length;g++){var h=e[g];if(h.name===a){h.setAttribute("value",b);f=!0;break}}if(!f){var l=N.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=vj(a,b,c.action);Mf.test(m)&&(c.action=m)}}}
var fj=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||wj(e,e.hostname)}}catch(g){}},gj=function(a){try{if(a.action){var b=nh(ph(a.action),"host");wj(a,b)}}catch(c){}},zj=function(a,b,c,d){ij();jj(a,b,"fragment"===c?2:1,!!d,!1)},Aj=function(a,b){ij();jj(a,[mh(F.location,"host",!0)],b,!0,!0)},Bj=function(){var a=N.location.hostname,b=mj.exec(N.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),g=f[1];e="s"===g?decodeURIComponent(f[2]):decodeURIComponent(g)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var h=a.replace(nj,""),l=e.replace(nj,""),m;if(!(m=h===l)){var p="."+l;m=h.substring(h.length-p.length,h.length)===p}return m},Cj=function(a,b){return!1===a?!1:a||b||Bj()};var Gj={};var Hj=/^\w+$/,Ij=/^[\w-]+$/,Jj={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp",gb:"_gb"},Kj=function(){if(!ug(Ff)||!Fg())return!0;var a=Cg("ad_storage");return null==a?!0:!!a},Lj=function(a,b){Eg("ad_storage")?Kj()?a():Mg(a,"ad_storage"):b?Fa("TAGGING",3):Ig(function(){Lj(a,!0)},["ad_storage"])},Nj=function(a){return Mj(a).map(function(b){return b.oa})},Mj=function(a){var b=[];if(!xi(F)||!N.cookie)return b;var c=Ai(a,N.cookie,void 0,"ad_storage");if(!c||0==c.length)return b;for(var d={},e=0;e<c.length;d=
{wc:d.wc},e++){var f=Oj(c[e]);if(null!=f){var g=f,h=g.version;d.wc=g.oa;var l=g.timestamp,m=g.labels,p=Qa(b,function(r){return function(q){return q.oa===r.wc}}(d));p?(p.timestamp=Math.max(p.timestamp,l),p.labels=Pj(p.labels,m||[])):b.push({version:h,oa:d.wc,timestamp:l,labels:m})}}b.sort(function(r,q){return q.timestamp-r.timestamp});return Qj(b)};function Pj(a,b){for(var c={},d=[],e=0;e<a.length;e++)c[a[e]]=!0,d.push(a[e]);for(var f=0;f<b.length;f++)c[b[f]]||d.push(b[f]);return d}
function Rj(a){return a&&"string"==typeof a&&a.match(Hj)?a:"_gcl"}
var Tj=function(){var a=ph(F.location.href),b=nh(a,"query",!1,void 0,"gclid"),c=nh(a,"query",!1,void 0,"gclsrc"),d=nh(a,"query",!1,void 0,"wbraid"),e=nh(a,"query",!1,void 0,"dclid");if(!b||!c||!d){var f=a.hash.replace("#","");b=b||kh(f,"gclid",!1,void 0);c=c||kh(f,"gclsrc",!1,void 0);d=d||kh(f,"wbraid",!1,void 0)}return Sj(b,c,e,d)},Sj=function(a,b,c,d){var e={},f=function(g,h){e[h]||(e[h]=[]);e[h].push(g)};e.gclid=a;e.gclsrc=b;e.dclid=c;void 0!==d&&Ij.test(d)&&(e.gbraid=d,f(d,"gb"));if(void 0!==
a&&a.match(Ij))switch(b){case void 0:f(a,"aw");break;case "aw.ds":f(a,"aw");f(a,"dc");break;case "ds":f(a,"dc");break;case "3p.ds":f(a,"dc");break;case "gf":f(a,"gf");break;case "ha":f(a,"ha")}c&&f(c,"dc");return e},Uj=function(a,b){switch(a){case void 0:case "aw":return"aw"===b;case "aw.ds":return"aw"===b||"dc"===b;case "ds":case "3p.ds":return"dc"===b;case "gf":return"gf"===b;case "ha":return"ha"===b}return!1},Wj=function(a){var b=Tj();Lj(function(){Vj(b,a)})};
function Vj(a,b,c,d){function e(p,r){var q=Xj(p,f);q&&(Ji(q,r,g),h=!0)}b=b||{};d=d||[];var f=Rj(b.prefix);c=c||bb();var g=Ri(b,c,!0);g.Na="ad_storage";var h=!1,l=Math.round(c/1E3),m=function(p){var r=["GCL",l,p];0<d.length&&r.push(d.join("."));return r.join(".")};a.aw&&e("aw",m(a.aw[0]));a.dc&&e("dc",m(a.dc[0]));a.gf&&e("gf",m(a.gf[0]));a.ha&&e("ha",m(a.ha[0]));a.gp&&e("gp",m(a.gp[0]));(void 0==Gj.enable_gbraid_cookie_write?0:Gj.enable_gbraid_cookie_write)&&!h&&a.gb&&e("gb",m(a.gb[0]))}
var Zj=function(a,b){var c=uj(!0);Lj(function(){for(var d=Rj(b.prefix),e=0;e<a.length;++e){var f=a[e];if(void 0!==Jj[f]){var g=Xj(f,d),h=c[g];if(h){var l=Math.min(Yj(h),bb()),m;b:{var p=l,r=g;if(xi(F))for(var q=Ai(r,N.cookie,void 0,"ad_storage"),t=0;t<q.length;++t)if(Yj(q[t])>p){m=!0;break b}m=!1}if(!m){var u=Ri(b,l,!0);u.Na="ad_storage";Ji(g,h,u)}}}}Vj(Sj(c.gclid,c.gclsrc),b)})},Xj=function(a,b){var c=Jj[a];if(void 0!==c)return b+c},Yj=function(a){return 0!==ak(a.split(".")).length?1E3*(Number(a.split(".")[1])||
0):0};function Oj(a){var b=ak(a.split("."));return 0===b.length?null:{version:b[0],oa:b[2],timestamp:1E3*(Number(b[1])||0),labels:b.slice(3)}}function ak(a){return 3>a.length||"GCL"!==a[0]&&"1"!==a[0]||!/^\d+$/.test(a[1])||!Ij.test(a[2])?[]:a}
var bk=function(a,b,c,d,e){if(Ma(b)&&xi(F)){var f=Rj(e),g=function(){for(var h={},l=0;l<a.length;++l){var m=Xj(a[l],f);if(m){var p=Ai(m,N.cookie,void 0,"ad_storage");p.length&&(h[m]=p.sort()[p.length-1])}}return h};Lj(function(){zj(g,b,c,d)})}},Qj=function(a){return a.filter(function(b){return Ij.test(b.oa)})},ck=function(a,b){if(xi(F)){for(var c=Rj(b.prefix),d={},e=0;e<a.length;e++)Jj[a[e]]&&(d[a[e]]=Jj[a[e]]);Lj(function(){Va(d,function(f,g){var h=Ai(c+g,N.cookie,void 0,"ad_storage");h.sort(function(t,
u){return Yj(u)-Yj(t)});if(h.length){var l=h[0],m=Yj(l),p=0!==ak(l.split(".")).length?l.split(".").slice(3):[],r={},q;q=0!==ak(l.split(".")).length?l.split(".")[2]:void 0;r[f]=[q];Vj(r,b,m,p)}})})}};function dk(a,b){for(var c=0;c<b.length;++c)if(a[b[c]])return!0;return!1}
var ek=function(a){function b(e,f,g){g&&(e[f]=g)}if(Fg()){var c=Tj();if(dk(c,a)){var d={};b(d,"gclid",c.gclid);b(d,"dclid",c.dclid);b(d,"gclsrc",c.gclsrc);b(d,"wbraid",c.gbraid);Aj(function(){return d},3);Aj(function(){var e={};return e._up="1",e},1)}}};function fk(a,b){var c=Rj(b),d=Xj(a,c);if(!d)return 0;for(var e=Mj(d),f=0,g=0;g<e.length;g++)f=Math.max(f,e[g].timestamp);return f}
function gk(a){var b=0,c;for(c in a)for(var d=a[c],e=0;e<d.length;e++)b=Math.max(b,Number(d[e].timestamp));return b};var hk=/^\d+\.fls\.doubleclick\.net$/;function ik(a,b){Eg(M.D)?Rg(M.D)?a():Mg(a,M.D):b?Cf(42):Vg(function(){ik(a,!0)},[M.D])}function jk(a){var b=ph(F.location.href),c=nh(b,"host",!1);if(c&&c.match(hk)){var d=nh(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function kk(a,b,c){if("aw"===a||"dc"===a||"gb"===a){var d=jk("gcl"+a);if(d)return d.split(".")}var e=Rj(b);if("_gcl"==e){c=void 0===c?!0:c;var f=!Rg(M.D)&&c,g;g=Tj()[a]||[];if(0<g.length)return f?["0"]:g}var h=Xj(a,e);return h?Nj(h):[]}function lk(a){var b=[];Va(a,function(c,d){d=Qj(d);for(var e=[],f=0;f<d.length;f++)e.push(d[f].oa);e.length&&b.push(c+":"+e.join(","))});return b.join(";")}
var mk=function(a){var b=jk("gac");return b?!Rg(M.D)&&a?"0":decodeURIComponent(b):lk(Kj()?Zi():{})},nk=function(a){var b=jk("gacgb");return b?!Rg(M.D)&&a?"0":decodeURIComponent(b):lk(Kj()?Zi("_gac_gb",!0):{})},ok=function(a,b,c){var d=Tj(),e=[],f=d.gclid,g=d.dclid,h=d.gclsrc||"aw";!f||"aw.ds"!==h&&"aw"!==h&&"ds"!==h||c&&!Uj(h,c)||e.push({oa:f,oe:h});!g||c&&"dc"!==c||e.push({oa:g,oe:"ds"});ik(function(){Xi(b);var l=Ti[Ui(b.prefix)],m=!1;if(l&&0<e.length)for(var p=Rh.joined_auid=Rh.joined_auid||{},r=0;r<e.length;r++){var q=e[r],t=q.oa,u=q.oe,v=(b.prefix||"_gcl")+"."+u+"."+t;if(!p[v]){var x="https://adservice.google.com/pagead/regclk";x="gb"===u?x+"?gbraid="+t+"&auid="+l:x+"?gclid="+t+"&auid="+l+"&gclsrc="+u;qg(x);m=p[v]=!0}}null==a&&(a=
m);if(a&&l){var y=Ui(b.prefix),w=Ti[y];w&&Wi(y,w,b)}})},pk=function(a){var b;if(jk("gclaw")||jk("gac")||0<(Tj().aw||[]).length)b=!1;else{var c;if(0<(Tj().gb||[]).length)c=!0;else{var d=Math.max(fk("aw",a),gk(Kj()?Zi():{}));c=Math.max(fk("gb",a),gk(Kj()?Zi("_gac_gb",!0):{}))>d}b=c}return b};var qk=/[A-Z]+/,rk=/\s/,sk=function(a){if(A(a)&&(a=ab(a),!rk.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(qk.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],L:d}}}}},uk=function(a){for(var b={},c=0;c<a.length;++c){var d=sk(a[c]);d&&(b[d.id]=d)}tk(b);var e=[];Va(b,function(f,g){e.push(g)});return e};
function tk(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.L[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var vk=function(){var a=!1;return a};var xk=function(a,b,c,d){return(2===wk()||d||"http:"!=F.location.protocol?a:b)+c},wk=function(){var a=hg(),b;if(1===a)a:{var c=Xh;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,g=N.getElementsByTagName("script"),h=0;h<g.length&&100>h;h++){var l=g[h].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};
var Kk=function(a){if(Rg(M.D))return a;a=a.replace(/&url=([^&#]+)/,function(b,c){var d=qh(decodeURIComponent(c));return"&url="+encodeURIComponent(d)});a=a.replace(/&ref=([^&#]+)/,function(b,c){var d=qh(decodeURIComponent(c));return"&ref="+encodeURIComponent(d)});return a},Lk=function(){var a;if(!(a=Yh)){var b;if(!0===F._gtmdgs)b=!0;else{var c=ag&&ag.userAgent||"";b=0>c.indexOf("Safari")||/Chrome|Coast|Opera|Edg|Silk|Android/.test(c)||
11>((/Version\/([\d]+)/.exec(c)||[])[1]||"")?!1:!0}a=!b}if(a)return-1;var d=Ya("1");return vi(1,100)<d?vi(2,2):-1},Mk=function(a){var b;if(!a||!a.length)return;for(var c=[],d=0;d<a.length;++d){var e=a[d];e&&e.estimated_delivery_date?c.push(""+e.estimated_delivery_date):c.push("")}b=c.join(",");return b};var Nk=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),Ok={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},Pk={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},Qk="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var Rk=function(){var a=!1;return a},Tk=function(a){var b=ji("gtm.allowlist")||ji("gtm.whitelist");b&&Cf(9);Rk()&&(b="google gtagfl lcl zone oid op".split(" "));var c=b&&ib($a(b),Ok),d=ji("gtm.blocklist")||
ji("gtm.blacklist");d||(d=ji("tagTypeBlacklist"))&&Cf(3);d?Cf(8):d=[];Sk()&&(d=$a(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=Oa($a(d),"google")&&Cf(2);var e=d&&ib($a(d),Pk),f={};return function(g){var h=g&&g[hd.eb];if(!h||"string"!=typeof h)return!0;h=h.replace(/^_*/,"");if(void 0!==f[h])return f[h];var l=ci[h]||[],m=a(h,l);if(b){var p;if(p=
m)a:{if(0>Oa(c,h))if(l&&0<l.length)for(var r=0;r<l.length;r++){if(0>Oa(c,l[r])){Cf(11);p=!1;break a}}else{p=!1;break a}p=!0}m=p}var q=!1;if(d){var t=0<=Oa(e,h);if(t)q=t;else{var u=Ua(e,l||[]);u&&Cf(10);q=u}}var v=!m||q;v||!(0<=Oa(l,"sandboxedScripts"))||c&&-1!==Oa(c,"sandboxedScripts")||(v=Ua(e,Qk));return f[h]=v}},Sk=function(){return Nk.test(F.location&&F.location.hostname)};var Uk={active:!0,isAllowed:function(){return!0}},Vk=function(a){var b=Rh.zones;return b?b.checkState(le.K,a):Uk},Wk=function(a){var b=Rh.zones;!b&&a&&(b=Rh.zones=a());return b};var Xk=function(){},Yk=function(){};var Zk=!1,$k=0,al=[];function bl(a){if(!Zk){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){Zk=!0;for(var e=0;e<al.length;e++)O(al[e])}al.push=function(){for(var f=0;f<arguments.length;f++)O(arguments[f]);return 0}}}function cl(){if(!Zk&&140>$k){$k++;try{N.documentElement.doScroll("left"),bl()}catch(a){F.setTimeout(cl,50)}}}var dl=function(a){Zk?a():al.push(a)};var fl=function(a,b){this.g=!1;this.F=[];this.O={tags:[]};this.S=!1;this.s=this.B=0;el(this,a,b)},gl=function(a,b,c,d){if(Uh.hasOwnProperty(b)||"__zone"===b)return-1;var e={};Eb(d)&&(e=J(d,e));e.id=c;e.status="timeout";return a.O.tags.push(e)-1},hl=function(a,b,c,d){var e=a.O.tags[b];e&&(e.status=c,e.executionTime=d)},il=function(a){if(!a.g){for(var b=a.F,c=0;c<b.length;c++)b[c]();a.g=!0;a.F.length=0}},el=function(a,b,c){Ka(b)&&a.Xb(b);c&&F.setTimeout(function(){return il(a)},Number(c))};
fl.prototype.Xb=function(a){var b=this,c=db(function(){return O(function(){a(le.K,b.O)})});this.g?c():this.F.push(c)};var jl=function(a){a.B++;return db(function(){a.s++;a.S&&a.s>=a.B&&il(a)})};var kl=function(){function a(d){return!La(d)||0>d?0:d}if(!Rh._li&&F.performance&&F.performance.timing){var b=F.performance.timing.navigationStart,c=La(ki.get("gtm.start"))?ki.get("gtm.start"):0;Rh._li={cst:a(c-b),cbt:a($h-b)}}},ll=function(a){F.performance&&F.performance.mark(le.K+"_"+a+"_start")},ml=function(a){if(F.performance){var b=le.K+"_"+a+"_start",c=le.K+"_"+a+"_duration";F.performance.measure(c,b);var d=F.performance.getEntriesByName(c)[0];F.performance.clearMarks(b);F.performance.clearMeasures(c);
var e=Rh._p||{};void 0===e[a]&&(e[a]=d.duration,Rh._p=e);return d.duration}},nl=function(){if(F.performance&&F.performance.now){var a=Rh._p||{};a.PAGEVIEW=F.performance.now();Rh._p=a}};var ol={},pl=function(){return F.GoogleAnalyticsObject&&F[F.GoogleAnalyticsObject]},ql=!1;
var rl=function(a){F.GoogleAnalyticsObject||(F.GoogleAnalyticsObject=a||"ga");var b=F.GoogleAnalyticsObject;if(F[b])F.hasOwnProperty(b)||Cf(12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);F[b]=c}kl();return F[b]},sl=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=pl();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)},tl=function(a){if(!Fg())return;var b=pl();b(a+"require","linker");b(a+
"linker:passthrough",!0);};
var vl=function(a){},ul=function(){return F.GoogleAnalyticsObject||"ga"},wl=function(a,b){return function(){var c=pl(),d=c&&c.getByName&&c.getByName(a);if(d){var e=d.get("sendHitTask");d.set("sendHitTask",function(f){var g=f.get("hitPayload"),h=f.get("hitCallback"),l=0>g.indexOf("&tid="+b);l&&(f.set("hitPayload",g.replace(/&tid=UA-[0-9]+-[0-9]+/,"&tid="+
b),!0),f.set("hitCallback",void 0,!0));e(f);l&&(f.set("hitPayload",g,!0),f.set("hitCallback",h,!0),f.set("_x_19",void 0,!0),e(f))})}}};
var El=function(a){},Fl=function(){return"&tc="+Md.filter(function(a){return a}).length},Il=function(){2022<=Gl().length&&Hl()},Kl=function(){Jl||(Jl=F.setTimeout(Hl,500))},Hl=function(){Jl&&(F.clearTimeout(Jl),Jl=void 0);void 0===Ll||Ml[Ll]&&!Nl&&!Ol||(Pl[Ll]||Ql.Th()||
0>=Rl--?(Cf(1),Pl[Ll]=!0):(Ql.mi(),jg(Gl(!0)),Ml[Ll]=!0,Sl=Tl=Ul=Ol=Nl=""))},Gl=function(a){var b=Ll;if(void 0===b)return"";var c=Ga("GTM"),d=Ga("TAGGING");return[Vl,Ml[b]?"":"&es=1",Wl[b],c?"&u="+c:"",d?"&ut="+d:"",Fl(),Nl,Ol,Ul,Tl,El(a),Sl,"&z=0"].join("")},Yl=function(){Vl=Xl()},Xl=function(){return[ai,"&v=3&t=t","&pid="+Ra(),"&rv="+le.Sc].join("")},Dl=["L","S","Y"],Zl="0.005000">Math.random(),Vl=Xl(),Ml={},Nl="",Ol="",Sl="",Tl="",Cl={},Bl=!1,Ul="",Ll=void 0,Wl={},Pl={},Jl=void 0,
Ql=function(a,b){var c=0,d=0;return{Th:function(){if(c<a)return!1;bb()-d>=b&&(c=0);return c>=a},mi:function(){bb()-d>=b&&(c=0);c++;d=bb()}}}(2,1E3),Rl=1E3,$l=function(a,b,c,d){if(Zl&&!Pl[a]&&b){a!==Ll&&(Hl(),Ll=a);var e,f=String(b[hd.eb]||"").replace(/_/g,"");0===f.indexOf("cvt")&&(f="cvt");e=f;var g=c+e;Nl=Nl?Nl+"."+g:"&tr="+
g;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var l=(Od[h]?"1":"2")+e;Sl=Sl?Sl+"."+l:"&ti="+l;Kl();Il()}};var bm=function(a,b,c){if(Zl&&!Pl[a]){a!==Ll&&(Hl(),
Ll=a);var d=c+b;Ol=Ol?Ol+"."+d:"&epr="+d;Kl();Il()}},cm=function(a,b,c){};function dm(a,b,c,d){var e=Md[a],f=em(a,b,c,d);if(!f)return null;var g=Ud(e[hd.Jf],c,[]);if(g&&g.length){var h=g[0];f=dm(h.index,{onSuccess:f,onFailure:1===h.Yf?b.terminate:f,terminate:b.terminate},c,d)}return f}
function em(a,b,c,d){function e(){if(f[hd.hh])h();else{var x=Vd(f,c,[]);var y=x[hd.vg];if(null!=y)for(var w=0;w<y.length;w++)if(!Rg(y[w])){h();return}var z=gl(c.Va,String(f[hd.eb]),Number(f[hd.Lf]),x[hd.ih]),B=!1;x.vtp_gtmOnSuccess=function(){if(!B){B=!0;var G=bb()-E;$l(c.id,Md[a],"5",G);hl(c.Va,z,"success",
G);g()}};x.vtp_gtmOnFailure=function(){if(!B){B=!0;var G=bb()-E;$l(c.id,Md[a],"6",G);hl(c.Va,z,"failure",G);h()}};x.vtp_gtmTagId=f.tag_id;x.vtp_gtmEventId=c.id;$l(c.id,f,"1");var C=function(){var G=bb()-E;$l(c.id,f,"7",G);hl(c.Va,z,"exception",G);B||(B=!0,h())};var E=bb();try{Td(x,c)}catch(G){C(G)}}}var f=Md[a],g=b.onSuccess,h=b.onFailure,l=b.terminate;if(c.ve(f))return null;var m=Ud(f[hd.Mf],c,[]);if(m&&m.length){var p=m[0],r=dm(p.index,{onSuccess:g,onFailure:h,terminate:l},c,d);if(!r)return null;g=r;h=2===p.Yf?l:r}if(f[hd.Cf]||f[hd.kh]){var q=f[hd.Cf]?Nd:
c.zi,t=g,u=h;if(!q[a]){e=db(e);var v=fm(a,q,e);g=v.onSuccess;h=v.onFailure}return function(){q[a](t,u)}}return e}function fm(a,b,c){var d=[],e=[];b[a]=gm(d,e,c);return{onSuccess:function(){b[a]=hm;for(var f=0;f<d.length;f++)d[f]()},onFailure:function(){b[a]=im;for(var f=0;f<e.length;f++)e[f]()}}}function gm(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hm(a){a()}function im(a,b){b()};var lm=function(a,b){for(var c=[],d=0;d<Md.length;d++)if(a[d]){var e=Md[d];var f=jl(b.Va);try{var g=dm(d,{onSuccess:f,onFailure:f,terminate:f},b,d);if(g){var h=c,l=h.push,m=d,p=e["function"];if(!p)throw"Error: No function name given for function call.";var r=Od[p];l.call(h,{og:m,gg:r?r.priorityOverride||0:0,ad:g})}else jm(d,b),f()}catch(u){f()}}var q=b.Va;q.S=!0;q.s>=q.B&&il(q);c.sort(km);for(var t=0;t<c.length;t++)c[t].ad();
return 0<c.length};function km(a,b){var c,d=b.gg,e=a.gg;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var g=a.og,h=b.og;f=g>h?1:g<h?-1:0}return f}function jm(a,b){if(!Zl)return;var c=function(d){var e=b.ve(Md[d])?"3":"4",f=Ud(Md[d][hd.Jf],b,[]);f&&f.length&&c(f[0].index);$l(b.id,Md[d],e);var g=Ud(Md[d][hd.Mf],b,[]);g&&g.length&&c(g[0].index)};c(a);}
var mm=!1,sm=function(a){var b=a["gtm.uniqueEventId"],c=a.event;if("gtm.js"===c){if(mm)return!1;mm=!0;}var f=Vk(b),g=!1;if(!f.active){if("gtm.js"!==c)return!1;g=!0;f=Vk(Number.MAX_SAFE_INTEGER)}Zl&&
!Pl[b]&&Ll!==b&&(Hl(),Ll=b,Sl=Nl="",Wl[b]="&e="+(0===c.indexOf("gtm.")?encodeURIComponent(c):"*")+"&eid="+b,Kl());var h=a.eventCallback,l=a.eventTimeout,m={id:b,name:c,ve:Tk(f.isAllowed),zi:[],dg:function(){Cf(6)},Rf:nm(b),Va:new fl(h,l)};m.Qf=om();pm(b,m.Va);var p=ge(m);
g&&(p=qm(p));var r=lm(p,m);"gtm.js"!==c&&"gtm.sync"!==c||vl(le.K);switch(c){case "gtm.init":r&&Cf(20)}return rm(p,r)};function nm(a){return function(b){Zl&&(Ib(b)||cm(a,"input",b))}}function pm(a,b){pi(a,"event",1);pi(a,"ecommerce",1);pi(a,"gtm");pi(a,"eventModel");}
function om(){var a={};a.event=oi("event",1);a.ecommerce=oi("ecommerce",1);a.gtm=oi("gtm");a.eventModel=oi("eventModel");return a}function qm(a){for(var b=[],c=0;c<a.length;c++)a[c]&&Th[String(Md[c][hd.eb])]&&(b[c]=!0);return b}function rm(a,b){if(!b)return b;for(var c=0;c<a.length;c++)if(a[c]&&Md[c]&&!Uh[String(Md[c][hd.eb])])return!0;return!1}function tm(a,b){if(a){var c=""+a;0!==c.indexOf("http://")&&0!==c.indexOf("https://")&&(c="https://"+c);"/"===c[c.length-1]&&(c=c.substring(0,c.length-1));return ph(""+c+b).href}}function um(a,b){return vm()?tm(a,b):void 0}function vm(){var a=!1;return a};var wm=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.remoteConfig={};this.globalConfig={};this.onSuccess=function(){};this.onFailure=function(){};this.setContainerTypeLoaded=function(){};this.getContainerTypeLoaded=function(){};this.eventId=void 0;this.isGtmEvent=!1},xm=function(a){var b=new wm;b.eventModel=a;return b},ym=function(a,b){a.targetConfig=b;return a},zm=function(a,b){a.containerConfig=b;return a},Am=function(a,b){a.remoteConfig=b;return a},Bm=function(a,
b){a.globalConfig=b;return a},Cm=function(a,b){a.onSuccess=b;return a},Dm=function(a,b){a.setContainerTypeLoaded=b;return a},Em=function(a,b){a.getContainerTypeLoaded=b;return a},Fm=function(a,b){a.onFailure=b;return a};
wm.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.remoteConfig[a])return this.remoteConfig[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Gm=function(a){function b(e){Va(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];Va(c,function(e){d.push(e)});return d};var Hm;if(3===le.Sc.length)Hm="g";else{var Im="G";Hm=Im}
var Jm={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:Hm,OPT:"o"},Km=function(a){var b=le.K.split("-"),c=b[0].toUpperCase(),d=Jm[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===le.Sc.length){var g="w";f="2"+g}else f="";return f+d+le.Sc+e};var Lm=function(a,b){a.addEventListener&&a.addEventListener.call(a,"message",b,!1)};var Mm=function(){return Qf("iPhone")&&!Qf("iPod")&&!Qf("iPad")};Qf("Opera");Qf("Trident")||Qf("MSIE");Qf("Edge");!Qf("Gecko")||-1!=Nf.toLowerCase().indexOf("webkit")&&!Qf("Edge")||Qf("Trident")||Qf("MSIE")||Qf("Edge");-1!=Nf.toLowerCase().indexOf("webkit")&&!Qf("Edge")&&Qf("Mobile");Qf("Macintosh");Qf("Windows");Qf("Linux")||Qf("CrOS");var Nm=pa.navigator||null;Nm&&(Nm.appVersion||"").indexOf("X11");Qf("Android");Mm();Qf("iPad");Qf("iPod");Mm()||Qf("iPad")||Qf("iPod");Nf.toLowerCase().indexOf("kaios");var Om=function(a,b){for(var c=a,d=0;50>d;++d){var e;try{e=!(!c.frames||!c.frames[b])}catch(h){e=!1}if(e)return c;var f;a:{try{var g=c.parent;if(g&&g!=c){f=g;break a}}catch(h){}f=null}if(!(c=f))break}return null},Pm=function(a){var b=N;b=void 0===b?window.document:b;if(!a||!b.head)return null;var c=document.createElement("meta");b.head.appendChild(c);c.httpEquiv="origin-trial";c.content=a;return c};var Qm=function(){};var Rm=function(a){void 0!==a.addtlConsent&&"string"!==typeof a.addtlConsent&&(a.addtlConsent=void 0);void 0!==a.gdprApplies&&"boolean"!==typeof a.gdprApplies&&(a.gdprApplies=void 0);return void 0!==a.tcString&&"string"!==typeof a.tcString||void 0!==a.listenerId&&"number"!==typeof a.listenerId?2:a.cmpStatus&&"error"!==a.cmpStatus?0:3},Sm=function(a,b){this.s=a;this.g=null;this.F={};this.S=0;this.O=void 0===b?500:b;this.B=null};oa(Sm,Qm);
var Um=function(a){return"function"===typeof a.s.__tcfapi||null!=Tm(a)};
Sm.prototype.addEventListener=function(a){var b={},c=Yf(function(){return a(b)}),d=0;-1!==this.O&&(d=setTimeout(function(){b.tcString="tcunavailable";b.internalErrorState=1;c()},this.O));var e=function(f,g){clearTimeout(d);f?(b=f,b.internalErrorState=Rm(b),g&&0===b.internalErrorState||(b.tcString="tcunavailable",g||(b.internalErrorState=3))):(b.tcString="tcunavailable",b.internalErrorState=3);a(b)};try{Vm(this,"addEventListener",e)}catch(f){b.tcString="tcunavailable",b.internalErrorState=3,d&&(clearTimeout(d),
d=0),c()}};Sm.prototype.removeEventListener=function(a){a&&a.listenerId&&Vm(this,"removeEventListener",null,a.listenerId)};
var Xm=function(a,b,c){var d;d=void 0===d?"755":d;var e;a:{if(a.publisher&&a.publisher.restrictions){var f=a.publisher.restrictions[b];if(void 0!==f){e=f[void 0===d?"755":d];break a}}e=void 0}var g=e;if(0===g)return!1;var h=c;2===c?(h=0,2===g&&(h=1)):3===c&&(h=1,1===g&&(h=0));var l;if(0===h)if(a.purpose&&a.vendor){var m=Wm(a.vendor.consents,void 0===d?"755":d);l=m&&"1"===b&&a.purposeOneTreatment&&("DE"===a.publisherCC||ug(Ef)&&"CH"===a.publisherCC)?!0:m&&Wm(a.purpose.consents,b)}else l=!0;else l=
1===h?a.purpose&&a.vendor?Wm(a.purpose.legitimateInterests,b)&&Wm(a.vendor.legitimateInterests,void 0===d?"755":d):!0:!0;return l},Wm=function(a,b){return!(!a||!a[b])},Vm=function(a,b,c,d){c||(c=function(){});if("function"===typeof a.s.__tcfapi){var e=a.s.__tcfapi;e(b,2,c,d)}else if(Tm(a)){Ym(a);var f=++a.S;a.F[f]=c;if(a.g){var g={};a.g.postMessage((g.__tcfapiCall={command:b,version:2,callId:f,parameter:d},g),"*")}}else c({},!1)},Tm=function(a){if(a.g)return a.g;a.g=Om(a.s,"__tcfapiLocator");return a.g},
Ym=function(a){a.B||(a.B=function(b){try{var c;c=("string"===typeof b.data?JSON.parse(b.data):b.data).__tcfapiReturn;a.F[c.callId](c.returnValue,c.success)}catch(d){}},Lm(a.s,a.B))};var Zm=!0;Zm=!1;var $m={1:0,3:0,4:0,7:3,9:3,10:3};function an(a,b){if(""===a)return b;var c=Number(a);return isNaN(c)?b:c}var bn=an("",550),cn=an("",500);function dn(){var a=Rh.tcf||{};return Rh.tcf=a}
var en=function(a,b){this.B=a;this.g=b;this.s=bb();},fn=function(a){},gn=function(a){},nn=function(){var a=dn(),b=new Sm(F,Zm?3E3:-1),c=new en(b,a);if((hn()?!0===F.gtag_enable_tcf_support:!1!==F.gtag_enable_tcf_support)&&!a.active&&("function"===typeof F.__tcfapi||Um(b))){a.active=!0;a.nc={};jn();var d=null;Zm?d=F.setTimeout(function(){kn(a);ln(a);d=null},cn):a.tcString="tcunavailable";try{b.addEventListener(function(e){d&&(clearTimeout(d),d=null);if(0!==e.internalErrorState)kn(a),ln(a),fn(c);
else{var f;a.gdprApplies=e.gdprApplies;if(!1===e.gdprApplies)f=mn(),b.removeEventListener(e);else if("tcloaded"===e.eventStatus||"useractioncomplete"===e.eventStatus||"cmpuishown"===e.eventStatus){var g={},h;for(h in $m)if($m.hasOwnProperty(h))if("1"===h){var l,m=e,p=!0;p=void 0===p?!1:p;var r;var q=m;!1===q.gdprApplies?r=!0:(void 0===q.internalErrorState&&(q.internalErrorState=Rm(q)),r="error"===q.cmpStatus||0!==q.internalErrorState||"loaded"===q.cmpStatus&&("tcloaded"===q.eventStatus||"useractioncomplete"===
q.eventStatus)?!0:!1);l=r?!1===m.gdprApplies||"tcunavailable"===m.tcString||void 0===m.gdprApplies&&!p||"string"!==typeof m.tcString||!m.tcString.length?!0:Xm(m,"1",0):!1;g["1"]=l}else g[h]=Xm(e,h,$m[h]);f=g}f&&(a.tcString=e.tcString||"tcempty",a.nc=f,ln(a),fn(c))}}),gn(c)}catch(e){d&&(clearTimeout(d),d=null),kn(a),ln(a)}}};function kn(a){a.type="e";a.tcString="tcunavailable";Zm&&(a.nc=mn())}function jn(){var a={},b=(a.ad_storage="denied",a.wait_for_update=bn,a);Pg(b)}
var hn=function(){var a=!1;a=!0;return a};function mn(){var a={},b;for(b in $m)$m.hasOwnProperty(b)&&(a[b]=!0);return a}function ln(a){var b={},c=(b.ad_storage=a.nc["1"]?"granted":"denied",b);on();Qg(c,0)}
var pn=function(){var a=dn();if(a.active&&void 0!==a.loadTime)return Number(a.loadTime)},on=function(){var a=dn();return a.active?a.tcString||"":""},qn=function(){var a=dn();return a.active&&void 0!==a.gdprApplies?a.gdprApplies?"1":"0":""},rn=function(a){if(!$m.hasOwnProperty(String(a)))return!0;var b=dn();return b.active&&b.nc?!!b.nc[String(a)]:!0};var sn=!1;function tn(a){var b=String(F.location).split(/[?#]/)[0],c=le.xg||F._CONSENT_MODE_SALT,d;if(a){var e;if(c){var f=b+a+c,g=1,h,l,m;if(f)for(g=0,l=f.length-1;0<=l;l--)m=f.charCodeAt(l),g=(g<<6&268435455)+m+(m<<14),h=g&266338304,g=0!=h?g^h>>21:g;e=String(g)}else e="0";d=e}else d="";return d}
function un(a){function b(u){var v;Rh.reported_gclid||(Rh.reported_gclid={});v=Rh.reported_gclid;var x;x=sn&&g&&(!Fg()||Rg(M.D))?l+"."+(f.prefix||"_gcl")+(u?"gcu":"gcs"):l+(u?"gcu":"gcs");if(!v[x]){v[x]=!0;var y=[],w={},z=function(Q,S){S&&(y.push(Q+"="+encodeURIComponent(S)),w[Q]=!0)},B="https://www.google.com";if(Fg()){var C=Rg(M.D);z("gcs",Sg());u&&z("gcu","1");Gg()&&z("gcd","G1"+Ng(Dg));
Rh.dedupe_gclid||(Rh.dedupe_gclid=""+Mi());z("rnd",Rh.dedupe_gclid);if((!l||m&&"aw.ds"!==m)&&Rg(M.D)){var E=Nj("_gcl_aw");z("gclaw",E.join("."))}z("url",String(F.location).split(/[?#]/)[0]);z("dclid",vn(d,p));var G=!1;G=!0;C||!d&&!G||(B="https://pagead2.googlesyndication.com")}
z("gdpr_consent",on()),z("gdpr",qn());"1"===uj(!1)._up&&z("gtm_up","1");z("gclid",vn(d,l));z("gclsrc",m);if(!(w.gclid||w.dclid||w.gclaw)&&(z("gbraid",vn(d,r)),!w.gbraid&&Fg()&&Rg(M.D))){var D=Nj("_gcl_gb");z("gclgb",D.join("."))}z("gtm",Km(!e));sn&&g&&Rg(M.D)&&(Xi(f||{}),z("auid",Ti[Ui(f.prefix)]||""));
a.Vf&&z("did",a.Vf);var R=B+"/pagead/landing?"+y.join("&");qg(R)}}var c=!!a.ee,d=!!a.Ca,e=a.V,f=void 0===a.Yc?{}:a.Yc,g=void 0===a.ed?!0:a.ed,h=Tj(),l=h.gclid||"",m=h.gclsrc,p=h.dclid||"",r=h.gbraid||"",q=!c&&((!l||m&&"aw.ds"!==m?!1:!0)||r),t=Fg();if(q||t)t?Vg(function(){b();Rg(M.D)||Ug(function(u){return b(!0,u.xh)},M.D)},[M.D]):b()}function vn(a,b){var c=a&&!Rg(M.D);return b&&c?"0":b}
var Un=function(){return!1},Vn=function(a){return!(void 0===a||null===a||0===(a+"").length)},Wn=function(a,b){var c;if(2===b.na)return a("ord",Ra(1E11,1E13)),!0;if(3===b.na)return a("ord","1"),a("num",Ra(1E11,1E13)),!0;if(4===b.na)return Vn(b.sessionId)&&a("ord",b.sessionId),
!0;if(5===b.na)c="1";else if(6===b.na)c=b.Ie;else return!1;Vn(c)&&a("qty",c);Vn(b.Zc)&&a("cost",b.Zc);Vn(b.transactionId)&&a("ord",b.transactionId);return!0},Zn=function(a,b,c,d){function e(Q,S,U){t.hasOwnProperty(Q)||(S=String(S),q.push(";"+Q+"="+(U?S:Xn(S))))}function f(Q,S){S&&e(Q,S)}var g=a.me,h=a.Le,l=a.protocol,m=a.se;l+=h?"//"+g+".fls.doubleclick.net/activityi":"//ad.doubleclick.net/activity";var p=";",r=!1;r=!0;
Rg(M.D)||m||!a.Ca&&!r||(l="https://ade.googlesyndication.com/ddm/activity",p="/",h=!1);var q=[p,"src="+Xn(g),";type="+Xn(a.qe),";cat="+Xn(a.Vb)],t=a.Dh||{};Va(t,function(Q,S){q.push(";"+Xn(Q)+"="+Xn(S+""))});if(Wn(e,a)){Vn(a.pd)&&e("u",a.pd);Vn(a.od)&&e("tran",a.od);e("gtm",Km());Fg()&&!m&&(e("gcs",Sg()),c&&e("gcu","1"));f("gdpr_consent",on()),f("gdpr",qn());"1"===uj(!1)._up&&e("gtm_up","1");!1===a.rh&&e("npa","1");
if(a.he){var u=void 0===a.Ca?!0:!!a.Ca,v=kk("dc",a.Wa,u),x=!1;v&&v.length&&(e("gcldc",v.join(".")),x=!0);var y=!0;if(y)if(Yn&&!x&&pk(a.Wa)){var w=kk("gb",a.Wa,u);w.length&&e("gclgb",w.join("."));var z=nk(u);z&&e("gacgb",z)}else{var B=kk("aw",a.Wa,u);B&&B.length&&e("gclaw",B.join("."));var C=mk(u);C&&e("gac",C)}Xi({prefix:a.Wa,lb:a.Bh,domain:a.Ah,flags:a.Pi});var E=Ti[Ui(a.Wa)];
E&&e("auiddc",E)}Vn(a.De)&&e("prd",a.De,!0);Vn(d)&&e("em",d,!0);Va(a.Pe,function(Q,S){e(Q,S)});q.push(b||"");var G=Un();G&&q.push(";ps=1");if(Vn(a.fd)){var D=a.fd||"";Rg(M.D)||m||!a.Ca||(D=qh(D));e("~oref",D)}var R=l+q.join("")+"?";h?ig(R,a.onSuccess):jg(R,a.onSuccess,a.onFailure);}else O(a.onFailure)},
$n=function(a,b,c){var d=!1;d&&a.sa?Qh(a.sa,[],function(e){Zn(a,b,c,e)}):Zn(a,b,c)},Yn=!1;Yn=!0;var Xn=encodeURIComponent,Tn=!1,ao=function(a,b){!Fg()||a.se?$n(a,b):Vg(function(){$n(a,b);Rg(M.D)||Ug(function(){$n(a,b,!0)},M.D)},[M.D])};var zo=function(){var a=!0;rn(7)&&rn(9)&&rn(10)||(a=!1);var b=!0;b=!1;b&&!yo()&&(a=!1);return a},yo=function(){var a=!0;rn(3)&&rn(4)||(a=!1);return a};var Xo=!1;function Yo(){var a=Rh;return a.gcq=a.gcq||new Zo}
var $o=function(a,b,c){Yo().register(a,b,c)},ap=function(a,b,c,d){Yo().push("event",[b,a],c,d)},bp=function(a,b){Yo().push("config",[a],b)},cp=function(a,b,c,d){Yo().push("get",[a,b],c,d)},dp=function(a){return Yo().getRemoteConfig(a)},ep={},fp=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.remoteConfig={};this.s=null;this.g=!1},gp=function(a,b,c,d,e){this.type=a;this.B=b;this.V=c||"";this.g=d;this.s=e},Zo=function(){this.F={};this.s={};this.g=[];this.B={AW:!1,UA:!1};this.enableDeferrableCommandAfterConfig=
Xo},hp=function(a,b){var c=sk(b);return a.F[c.containerId]=a.F[c.containerId]||new fp},ip=function(a,b,c){if(b){var d=sk(b);if(d&&1===hp(a,b).status){hp(a,b).status=2;var e={};Zl&&(e.timeoutId=F.setTimeout(function(){Cf(38);Kl()},3E3));a.push("require",[e],d.containerId);ep[d.containerId]=bb();if(vk()){}else{var g="/gtag/js?id="+encodeURIComponent(d.containerId)+"&l=dataLayer&cx=c",h=("http:"!=F.location.protocol?"https:":"http:")+("//www.googletagmanager.com"+g),l=um(c,g)||h;gg(l)}}}},jp=function(a,b,c,d){if(d.V){var e=hp(a,d.V),f=e.s;if(f){var g=J(c),h=J(e.targetConfig[d.V]),l=J(e.containerConfig),m=J(e.remoteConfig),p=J(a.s),r=ji("gtm.uniqueEventId"),q=sk(d.V).prefix,t=Em(Dm(Fm(Cm(Bm(Am(zm(ym(xm(g),h),l),m),p),function(){
bm(r,q,"2");}),function(){bm(r,q,"3");}),function(u,v){a.B[u]=v}),function(u){return a.B[u]});try{bm(r,q,"1");f(d.V,b,d.B,t)}catch(u){bm(r,q,"4");}}}};k=Zo.prototype;
k.register=function(a,b,c){var d=hp(this,a);if(3!==d.status){d.s=b;d.status=3;if(c){J(d.remoteConfig,c);d.remoteConfig=c}var e=sk(a),f=ep[e.containerId];if(void 0!==f){var g=Rh[e.containerId].bootstrap,h=e.prefix.toUpperCase();Rh[e.containerId]._spx&&(h=h.toLowerCase());var l=ji("gtm.uniqueEventId"),m=h,p=bb()-g;if(Zl&&!Pl[l]){l!==Ll&&(Hl(),Ll=l);var r=m+"."+Math.floor(g-
f)+"."+Math.floor(p);Tl=Tl?Tl+","+r:"&cl="+r}delete ep[e.containerId]}this.flush()}};k.push=function(a,b,c,d){var e=Math.floor(bb()/1E3);ip(this,c,b[0][M.la]||this.s[M.la]);Xo&&c&&hp(this,c).g&&(d=!1);this.g.push(new gp(a,e,c,b,d));d||this.flush()};k.insert=function(a,b,c){var d=Math.floor(bb()/1E3);0<this.g.length?this.g.splice(1,0,new gp(a,d,c,b,!1)):this.g.push(new gp(a,d,c,b,!1))};
k.flush=function(a){for(var b=this,c=[],d=!1,e={};this.g.length;){var f=this.g[0];if(f.s)Xo?!f.V||hp(this,f.V).g?(f.s=!1,this.g.push(f)):c.push(f):(f.s=!1,this.g.push(f));else switch(f.type){case "require":if(3!==hp(this,f.V).status&&!a){Xo&&this.g.push.apply(this.g,c);return}Zl&&F.clearTimeout(f.g[0].timeoutId);break;case "set":Va(f.g[0],function(q,t){J(kb(q,t),b.s)});break;case "config":e.Da={};Va(f.g[0],function(q){return function(t,u){J(kb(t,u),q.Da)}}(e));var g=!!e.Da[M.Lc];delete e.Da[M.Lc];
var h=hp(this,f.V),l=sk(f.V),m=l.containerId===l.id;g||(m?h.containerConfig={}:h.targetConfig[f.V]={});h.g&&g||jp(this,M.va,e.Da,f);h.g=!0;delete e.Da[M.Sb];m?J(e.Da,h.containerConfig):J(e.Da,h.targetConfig[f.V]);Xo&&(d=!0);break;case "event":e.vc={};Va(f.g[0],function(q){return function(t,u){J(kb(t,u),q.vc)}}(e));jp(this,f.g[1],e.vc,f);break;case "get":var p={},r=(p[M.Ra]=f.g[0],p[M.Qa]=f.g[1],p);jp(this,M.Fa,r,f)}this.g.shift();e={Da:e.Da,vc:e.vc}}Xo&&(this.g.push.apply(this.g,c),d&&this.flush())};
k.getRemoteConfig=function(a){return hp(this,a).remoteConfig};function kp(a,b){var c=this;};function lp(a,b,c){};function mp(a,b,c,d){};function np(a){};var op=function(a,b,c){var d={event:b,"gtm.element":a,"gtm.elementClasses":rg(a,"className"),"gtm.elementId":a["for"]||mg(a,"id")||"","gtm.elementTarget":a.formTarget||rg(a,"target")||""};c&&(d["gtm.triggers"]=c.join(","));d["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||rg(a,"href")||a.src||a.code||a.codebase||"";return d},pp=function(a){Rh.hasOwnProperty("autoEventsSettings")||(Rh.autoEventsSettings={});var b=Rh.autoEventsSettings;b.hasOwnProperty(a)||(b[a]=
{});return b[a]},qp=function(a,b,c){pp(a)[b]=c},rp=function(a,b,c,d){var e=pp(a),f=cb(e,b,d);e[b]=c(f)},sp=function(a,b,c){var d=pp(a);return cb(d,b,c)};var tp={},up=[];
var Bp=function(a,b){};

function Ep(a,b){};var Fp=/^\s*$/,Gp,Hp=!1;
function Sp(a,b){}function Tp(a,b,c){};var Up=!!F.MutationObserver,Vp=void 0,Wp=function(a){if(!Vp){var b=function(){var c=N.body;if(c)if(Up)(new MutationObserver(function(){for(var e=0;e<Vp.length;e++)O(Vp[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;kg(c,"DOMNodeInserted",function(){d||(d=!0,O(function(){d=!1;for(var e=0;e<Vp.length;e++)O(Vp[e])}))})}};Vp=[];N.body?b():O(b)}Vp.push(a)};
var Xp=function(a,b,c){function d(){var g=a();f+=e?(bb()-e)*g.playbackRate/1E3:0;e=bb()}var e=0,f=0;return{createEvent:function(g,h,l){var m=a(),p=m.ke,r=void 0!==l?Math.round(l):void 0!==h?Math.round(m.ke*h):Math.round(m.Uf),q=void 0!==h?Math.round(100*h):0>=p?0:Math.round(r/p*100),t=N.hidden?!1:.5<=ch(c);d();var u=void 0;void 0!==b&&(u=[b]);var v=op(c,"gtm.video",u);v["gtm.videoProvider"]="youtube";v["gtm.videoStatus"]=g;v["gtm.videoUrl"]=m.url;v["gtm.videoTitle"]=m.title;v["gtm.videoDuration"]=
Math.round(p);v["gtm.videoCurrentTime"]=Math.round(r);v["gtm.videoElapsedTime"]=Math.round(f);v["gtm.videoPercent"]=q;v["gtm.videoVisible"]=t;return v},jg:function(){e=bb()},Bb:function(){d()}}};var Yp=["www.youtube.com","www.youtube-nocookie.com"],Zp,$p=!1,aq=0;
function kq(a,b){}function lq(a,b){return!0};function mq(a,b,c){};function nq(a,b){var c;return c};function oq(a){};function pq(a){};var qq=!1,rq=[];function sq(){if(!qq){qq=!0;for(var a=0;a<rq.length;a++)O(rq[a])}}var tq=function(a){qq?O(a):rq.push(a)};function uq(a){K(I(this),["listener:!Fn"],arguments);kf(this,"process_dom_events","window","load");tq(Gb(a))};function vq(a){var b;return b};function wq(a,b){var c;var d=!1;var e=Fb(c,this.g,d);void 0===e&&void 0!==c&&Cf(45);return e};function xq(a){var b;return b};function yq(a,b){var c=null,d=!1;K(I(this),["functionPath:!string","arrayPath:!string"],arguments);kf(this,"access_globals","readwrite",a);kf(this,"access_globals","readwrite",b);var e=[F,N],f=a.split("."),g=jb(f,e),h=f[f.length-1];if(void 0===g)throw Error("Path "+a+" does not exist.");var l=g[h];if(l&&!Ka(l))return null;
if(l)return Fb(l,this.g,d);var m;l=function(){if(!Ka(m.push))throw Error("Object at "+b+" in window is not an array.");m.push.call(m,arguments)};g[h]=l;var p=b.split("."),r=jb(p,e),q=p[p.length-1];if(void 0===r)throw Error("Path "+p+" does not exist.");m=r[q];void 0===m&&(m=[],r[q]=m);c=function(){l.apply(l,Array.prototype.slice.call(arguments,0))};return Fb(c,this.g,d)};function zq(a){var b;K(I(this),["path:!string"],arguments);kf(this,"access_globals","readwrite",a);var c=a.split("."),d=jb(c,[F,N]),e=c[c.length-1];if(void 0===d)throw Error("Path "+a+" does not exist.");var f=d[e];void 0===f&&(f=[],d[e]=f);b=function(){if(!Ka(f.push))throw Error("Object at "+a+" in window is not an array.");f.push.apply(f,Array.prototype.slice.call(arguments,0))};var g=!1;return Fb(b,this.g,g)};var Aq=function(a){var b;return b};function Bq(a,b){b=void 0===b?!0:b;var c;return c};function Cq(a){var b=null;return b};function Dq(a,b){var c;return c};function Eq(a,b){var c;return c};function Fq(a){var b="";return b};function Gq(a,b){var c;return c};function Hq(a){var b="";return b};function Iq(){kf(this,"get_user_agent");return F.navigator.userAgent};function Jq(a,b){};var Kq={};function Lq(a,b,c,d,e,f){f?e[f]?(e[f][0].push(c),e[f][1].push(d)):(e[f]=[[c],[d]],gg(a,function(){for(var g=e[f][0],h=0;h<g.length;h++)O(g[h]);g.push=function(l){O(l);return 0}},function(){for(var g=e[f][1],h=0;h<g.length;h++)O(g[h]);e[f]=null},b)):gg(a,c,d,b)}
function Mq(a,b,c,d){K(I(this),["url:!string","onSuccess:?Fn","onFailure:?Fn","cacheToken:?string"],arguments);kf(this,"inject_script",a);var e=this.g;Lq(a,void 0,function(){b&&b.s(e)},function(){c&&c.s(e)},Kq,d);}var Nq=Object.freeze({dl:1,id:1}),Oq={};
function Pq(a,b,c,d){};function Qq(a){var b=!0;return b};var Rq=function(){return!1},Sq={getItem:function(a){var b=null;return b},setItem:function(a,
b){return!1},removeItem:function(a){}};function Tq(){};function Uq(a,b){var c;return c};function Vq(a){var b=void 0;return b};function Wq(a,b){var c=!1;return c};function Xq(){var a="";return a};function Yq(){var a="";return a};function Zq(){};function $q(a,b,c,d){d=void 0===d?!1:d;};function ar(a,b,c){};function br(a,b,c,d){var e=this;d=void 0===d?!0:d;var f=!1;return f};function cr(a){K(I(this),["consentSettings:!DustMap"],arguments);for(var b=a.fb(),c=b.length(),d=0;d<c;d++){var e=b.get(d);e!==M.rd&&kf(this,"access_consent",e,"write")}Pg(Gb(a))};function dr(a,b,c){K(I(this),["path:!string","value:?*","overrideExisting:?boolean"],arguments);kf(this,"access_globals","readwrite",a);var d=!1;var e=a.split("."),f=jb(e,[F,N]),g=e.pop();if(f&&(void 0===f[g]||c))return f[g]=Gb(b,this.g,d),!0;return!1};function er(a,b,c){}
;var fr=function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}return b};function gr(a,b,c,d){var e=this;};function hr(a,b,c){}
;var ir={},jr={};ir.getItem=function(a){var b=null;return b};
ir.setItem=function(a,b){};
ir.removeItem=function(a){};ir.clear=function(){};var kr=function(a){var b;return b};function lr(a){K(I(this),["consentSettings:!DustMap"],arguments);var b=Gb(a),c;for(c in b)b.hasOwnProperty(c)&&kf(this,"access_consent",c,"write");Qg(b)};var ed=function(){var a=new xf;vk()?(a.add("injectHiddenIframe",Ja),a.add("injectScript",Ja)):(a.add("injectHiddenIframe",Jq),a.add("injectScript",Mq));var b=ar;a.add("Math",$e());a.add("TestHelper",Af());a.add("addEventCallback",np);a.add("aliasInWindow",lq);a.add("assertApi",We);a.add("assertThat",Xe);a.add("callInWindow",
nq);a.add("callLater",oq);a.add("copyFromDataLayer",wq);a.add("copyFromWindow",xq);a.add("createArgumentsQueue",yq);a.add("createQueue",zq);a.add("decodeUri",af);a.add("decodeUriComponent",bf);a.add("encodeUri",cf);a.add("encodeUriComponent",gf);a.add("fail",hf);a.add("fromBase64",Aq,!("atob"in F));a.add("generateRandom",jf);a.add("getContainerVersion",lf);a.add("getCookieValues",Bq);a.add("getQueryParameters",Dq);a.add("getReferrerQueryParameters",Eq);a.add("getReferrerUrl",Fq);a.add("getTimestamp",
mf);a.add("getTimestampMillis",mf);a.add("getType",nf);a.add("getUrl",Hq);a.add("localStorage",Sq,!Rq());a.add("logToConsole",Tq);a.add("makeInteger",pf);a.add("makeNumber",qf);a.add("makeString",rf);a.add("makeTableMap",sf);a.add("mock",uf);a.add("parseUrl",Vq);a.add("queryPermission",Wq);a.add("readCharacterSet",Xq);a.add("readTitle",Yq);a.add("sendPixel",b);a.add("setCookie",br);a.add("setInWindow",dr);a.add("sha256",gr);a.add("templateStorage",ir);a.add("toBase64",kr,!("btoa"in F));a.add("JSON",
of(function(d){var e=this.g.g;e&&e.log.call(this,"error",d)}));var c=!1;
c=!0;c&&a.add("setDefaultConsentState",cr);a.add("updateConsentState",lr);
a.add("isConsentGranted",Qq);a.add("addConsentListener",kp);
zf(a,"callOnWindowLoad",uq);vk()?zf(a,"internal.injectScript",
Ja):zf(a,"internal.injectScript",Pq);return function(d){var e;if(a.g.hasOwnProperty(d))e=a.get(d,this);else{var f;if(f=a.s.hasOwnProperty(d)){var g=!1,h=this.g.g;if(h){var l=h.cc();if(l){0!==l.indexOf("__cvt_")&&(g=!0);}}f=g}if(f){var m=a.s.hasOwnProperty(d)?
a.s[d]:void 0;e=m}else throw Error(d+" is not a valid API name.");}return e}};var mr=function(){return!1},nr=function(){var a={};return function(b,c,d){}};var cd,pe;
function or(){var a=data.runtime||[],b=data.runtime_lines;cd=new ad;pr();Id=function(e,f,g){qr(f);var h=new rb;Va(f,function(t,u){var v=Fb(u);void 0===v&&void 0!==u&&Cf(44);h.set(t,v)});cd.g.g.O=de();var l={uh:qe(e),eventId:void 0!==g?g.id:void 0,Xb:void 0!==g?function(t){return g.Va.Xb(t)}:void 0,cc:function(){return e},log:function(){}};if(mr()){var m=nr(),
p=void 0,r=void 0;l.ra={Yb:{},Cb:function(t,u,v){1===u&&(p=t);7===u&&(r=v);m(t,u,v)},ye:tf()};l.log=function(t,u){if(p){var v=Array.prototype.slice.call(arguments,1);m(p,4,{level:t,source:r,message:v})}}}var q=dd(l,[e,h]);cd.g.g.O=void 0;q instanceof ra&&"return"===q.g&&(q=q.s);return Gb(q)};fd();for(var c=0;c<a.length;c++){var d=a[c];if(!Ma(d)||3>d.length){if(0===d.length)continue;break}b&&b[c]&&b[c].length&&ae(d,b[c]);cd.ad(d)}}
function qr(a){var b=a.gtmOnSuccess,c=a.gtmOnFailure;Ka(b)&&(a.gtmOnSuccess=function(){O(b)});Ka(c)&&(a.gtmOnFailure=function(){O(c)})}function pr(){var a=cd;Rh.SANDBOXED_JS_SEMAPHORE=Rh.SANDBOXED_JS_SEMAPHORE||0;gd(a,function(b,c,d){Rh.SANDBOXED_JS_SEMAPHORE++;try{return b.apply(c,d)}finally{Rh.SANDBOXED_JS_SEMAPHORE--}})}function rr(a){void 0!==a&&Va(a,function(b,c){for(var d=0;d<c.length;d++){var e=c[d].replace(/^_*/,"");ci[e]=ci[e]||[];ci[e].push(b)}})};var sr="HA GF G UA AW DC".split(" "),tr=!1,ur={},vr=!1;function wr(a,b){var c={event:a};b&&(c.eventModel=J(b),b[M.Gd]&&(c.eventCallback=b[M.Gd]),b[M.Gc]&&(c.eventTimeout=b[M.Gc]));return c}function xr(a){a.hasOwnProperty("gtm.uniqueEventId")||Object.defineProperty(a,"gtm.uniqueEventId",{value:di()});return a["gtm.uniqueEventId"]}
function yr(){return tr}
var Br={config:function(a){var b,c;void 0===c&&(c=di());return b},consent:function(a){function b(){yr()&&J(a[2],{subcommand:a[1]})}if(3===a.length){Cf(39);var c=di(),d=a[1];"default"===d?(b(),Pg(a[2])):"update"===d&&(b(),Qg(a[2],c))}},event:function(a){var b=a[1];if(!(2>a.length)&&A(b)){var c;if(2<a.length){if(!Eb(a[2])&&
void 0!=a[2]||3<a.length)return;c=a[2]}var d=wr(b,c),e=void 0;void 0===e&&di();return d}},get:function(a){},js:function(a){if(2==a.length&&a[1].getTime){vr=!0;yr();var b={event:"gtm.js","gtm.start":a[1].getTime()};return b}},policy:function(a){if(3===a.length){var b=a[1],c=a[2],d=pe.s;d.g[b]?d.g[b].push(c):
d.g[b]=[c]}},set:function(a){var b;2==a.length&&Eb(a[1])?b=J(a[1]):3==a.length&&A(a[1])&&(b={},Eb(a[2])||Ma(a[2])?b[a[1]]=J(a[2]):b[a[1]]=a[2]);if(b){b._clear=!0;return b}}},Cr={policy:!0};var Dr=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},Fr=function(a){var b=Er(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var Wr=function(a){if(Vr(a))return a;this.g=a};Wr.prototype.Oh=function(){return this.g};var Vr=function(a){return!a||"object"!==Cb(a)||Eb(a)?!1:"getUntrustedUpdateValue"in a};Wr.prototype.getUntrustedUpdateValue=Wr.prototype.Oh;var Xr=[],Yr=!1,Zr=!1,$r=!1,as=function(a){return F["dataLayer"].push(a)},bs=function(a){var b=Rh["dataLayer"],c=b?b.subscribers:1,d=0,e=a;return function(){++d===c&&(e(),e=null)}};
function cs(a){var b=a._clear;Va(a,function(d,e){"_clear"!==d&&(b&&mi(d,void 0),mi(d,e))});Zh||(Zh=a["gtm.start"]);var c=a["gtm.uniqueEventId"];if(!a.event)return!1;c||(c=di(),a["gtm.uniqueEventId"]=c,mi("gtm.uniqueEventId",c));return sm(a)}function ds(){var a=Xr[0];if(null==a||"object"!==typeof a)return!1;if(a.event)return!0;if(Wa(a)){var b=a[0];if("config"===b||"event"===b||"js"===b)return!0}return!1}
function es(){for(var a=!1;!$r&&0<Xr.length;){var b=!1;b=!0;if(b&&!Zr&&ds()){var c={};Xr.unshift((c.event=
"gtm.init",c));Zr=!0}var d=!1;d=!0;if(d&&!Yr&&ds()){var e={};Xr.unshift((e.event="gtm.init_consent",e));Yr=!0}$r=!0;delete gi.eventModel;ii();var f=Xr.shift();if(null!=f){var g=Vr(f);
if(g){var h=f;f=Vr(h)?h.getUntrustedUpdateValue():void 0;ni()}try{if(Ka(f))try{f.call(ki)}catch(v){}else if(Ma(f)){var l=f;if(A(l[0])){var m=l[0].split("."),p=m.pop(),r=l.slice(1),q=ji(m.join("."),2);if(void 0!==q&&null!==q)try{q[p].apply(q,r)}catch(v){}}}else{if(Wa(f)){a:{var t=f;if(t.length&&A(t[0])){var u=Br[t[0]];if(u&&(!g||!Cr[t[0]])){f=u(t);break a}}f=void 0}if(!f){$r=!1;continue}}a=cs(f)||a}}finally{g&&ii(!0)}}$r=!1}
return!a}function fs(){var b=es();try{Dr(F["dataLayer"],le.K)}catch(c){}return b}
var hs=function(){var a=cg("dataLayer",[]),b=cg("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};dl(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});tq(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var e;if(0<Rh.SANDBOXED_JS_SEMAPHORE){e=[];for(var f=0;f<arguments.length;f++)e[f]=new Wr(arguments[f])}else e=[].slice.call(arguments,0);var g=c.apply(a,e);Xr.push.apply(Xr,e);if(300<
this.length)for(Cf(4);300<this.length;)this.shift();var h="boolean"!==typeof g||g;return es()&&h};var d=a.slice(0);Xr.push.apply(Xr,d);if(gs()){O(fs)}},gs=function(){var a=!0;return a};var is={};is.Oc=new String("undefined");
var js=function(a){this.g=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===is.Oc?b:a[d]);return c.join("")}};js.prototype.toString=function(){return this.g("undefined")};js.prototype.valueOf=js.prototype.toString;is.mh=js;is.Zd={};is.Ch=function(a){return new js(a)};var ks={};is.ni=function(a,b){var c=di();ks[c]=[a,b];return c};is.Tf=function(a){var b=a?0:1;return function(c){var d=ks[c];if(d&&"function"===typeof d[b])d[b]();ks[c]=void 0}};is.Sh=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};is.ii=function(a){if(a===is.Oc)return a;var b=di();is.Zd[b]=a;return'google_tag_manager["'+le.K+'"].macro('+b+")"};is.ci=function(a,b,c){a instanceof is.mh&&(a=a.g(is.ni(b,c)),b=Ja);return{Ph:a,onSuccess:b}};var ls=["input","select","textarea"],ms=["button","hidden","image","reset","submit"],ns=function(a){var b=a.tagName.toLowerCase();return!Qa(ls,function(c){return c===b})||"input"===b&&Qa(ms,function(c){return c===a.type.toLowerCase()})?!1:!0},os=function(a){return a.form?a.form.tagName?a.form:N.getElementById(a.form):pg(a,["form"],100)},ps=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var g=a.elements[e];if(ns(g)){if(g.getAttribute(c)===d)return f;
f++}}return 0};var As=F.clearTimeout,Bs=F.setTimeout,V=function(a,b,c){if(vk()){b&&O(b)}else return gg(a,b,c)},Cs=function(){return new Date},Ds=function(){return F.location.href},Es=function(a){return nh(ph(a),"fragment")},Fs=function(a){return oh(ph(a))},Gs=function(a,b){return ji(a,b||2)},Hs=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=as(a)):d=as(a);return d},Is=function(a,b){F[a]=b},W=function(a,b,c){b&&
(void 0===F[a]||c&&!F[a])&&(F[a]=b);return F[a]},Js=function(a,b,c){return Ai(a,b,void 0===c?!0:!!c)},Ks=function(a,b,c){return 0===Ji(a,b,c)},Ls=function(a,b){if(vk()){b&&O(b)}else ig(a,b)},Ms=function(a){return!!sp(a,"init",!1)},Ns=function(a){qp(a,"init",!0)},Os=function(a){var b=Xh+"?id="+encodeURIComponent(a)+"&l=dataLayer";V(xk("https://","http://",b))},Ps=function(a,b,c){Zl&&(Ib(a)||cm(c,b,a))};var Qs=is.ci;function mt(a,b){a=String(a);b=String(b);var c=a.length-b.length;return 0<=c&&a.indexOf(b,c)==c}var nt=new Ta;function ot(a,b,c){var d=c?"i":void 0;try{var e=String(b)+d,f=nt.get(e);f||(f=new RegExp(b,d),nt.set(e,f));return f.test(a)}catch(g){return!1}}
function pt(a,b){function c(g){var h=ph(g),l=nh(h,"protocol"),m=nh(h,"host",!0),p=nh(h,"port"),r=nh(h,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==p||"https"==l&&"443"==p)l="web",p="default";return[l,m,p,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function qt(a){return rt(a)?1:0}
function rt(a){var b=a.arg0,c=a.arg1;if(a.any_of&&Ma(c)){for(var d=0;d<c.length;d++){var e=J(a,{});J({arg1:c[d],any_of:void 0},e);if(qt(e))return!0}return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var f;a:{if(b){var g=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<g.length;h++)if(b[g[h]]){f=b[g[h]](c);break a}}catch(m){}}f=!1}return f;case "_ew":return mt(b,c);case "_eq":return String(b)==
String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var l;l=String(b).split(",");return 0<=Oa(l,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":return ot(b,c,a.ignore_case);case "_sw":return 0==String(b).indexOf(String(c));case "_um":return pt(b,c)}return!1};var st=encodeURI,X=encodeURIComponent,tt=jg;var ut=function(a,b){if(!a)return!1;var c=nh(ph(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var vt=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};function cv(){return F.gaGlobal=F.gaGlobal||{}}var dv=function(){var a=cv();a.hid=a.hid||Ra();return a.hid},ev=function(a,b){var c=cv();if(void 0==c.vid||b&&!c.from_cookie)c.vid=a,c.from_cookie=b};var Bv=function(){if(Ka(F.__uspapi)){var a="";try{F.__uspapi("getUSPData",1,function(b,c){if(c&&b){var d=b.uspString;d&&/^[\da-zA-Z-]{1,20}$/.test(d)&&(a=d)}})}catch(b){}return a}};var Vv=window,Wv=document,Xv=function(a){var b=Vv._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Vv["ga-disable-"+a])return!0;try{var c=Vv.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=wi("AMP_TOKEN",String(Wv.cookie),!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return Wv.getElementById("__gaOptOutExtension")?!0:!1};var Yv={};function aw(a){delete a.eventModel[M.Sb];cw(a.eventModel)}var cw=function(a){Va(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[M.Ha]||{};Va(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var fw=function(a,b,c){ap(b,c,a)},gw=function(a,b,c){ap(b,c,a,!0)},kw=function(a,b){};
function hw(a,b){}var Y={h:{}};
Y.h.gaawc=["google"],function(){function a(b,c,d){for(var e=0;e<c.length;e++)b.hasOwnProperty(c[e])&&(b[c[e]]=d(b[c[e]]))}(function(b){Y.__gaawc=b;Y.__gaawc.m="gaawc";Y.__gaawc.o=!0;Y.__gaawc.priorityOverride=10})(function(b){var c=String(b.vtp_measurementId),d=vt(b.vtp_fieldsToSet,"name","value")||{};if(d.hasOwnProperty(M.Ha)||b.vtp_userProperties){var e=d[M.Ha]||{};J(vt(b.vtp_userProperties,"name","value"),e);d[M.Ha]=e}b.vtp_enableSendToServerContainer&&b.vtp_transportUrl&&(d[M.la]=b.vtp_transportUrl,
d[M.Mb]=!0);a(d,M.wf,function(f){return Za(f)});a(d,M.yf,function(f){return Number(f)});d.send_page_view=b.vtp_sendPageView;bp(d,c);O(b.vtp_gtmOnSuccess)})}();

Y.h.jsm=["customScripts"],function(){(function(a){Y.__jsm=a;Y.__jsm.m="jsm";Y.__jsm.o=!0;Y.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=W("google_tag_manager");var d=c&&c.e&&c.e(b);Ps(d,"jsm",a.vtp_gtmEventId);return d}catch(e){}}})}();
Y.h.flc=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;ao(c,d)}var b=!1;(function(c){Y.__flc=c;Y.__flc.m="flc";Y.__flc.o=!0;Y.__flc.priorityOverride=0})(function(c){var d=!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker,e={UNIQUE:3,SESSION:4}[c.vtp_ordinalType]||
2,f=vt(c.vtp_customVariable||[],"key","value")||{};var r={Vb:c.vtp_activityTag,he:d,Wa:c.vtp_conversionCookiePrefix||void 0,Zc:void 0,na:e,me:c.vtp_advertiserId,qe:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,fd:c.vtp_useImageTag?void 0:c.vtp_url,protocol:"",Ie:void 0,Le:!c.vtp_useImageTag,sessionId:c.vtp_sessionId,od:c.vtp_transactionVariable,transactionId:void 0,
pd:c.vtp_userVariable,sa:c.vtp_userDataVariable,Pe:f},q=!1;var t=!(Rg(M.D)||q)&&void 0!=Gs(M.P)&&!1!==Gs(M.P);r.Ca=t;if(c.vtp_enableAttribution){var u=c.vtp_attributionFields||[];if(u.length){V("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(r,W("google_attr").build([vt(u,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(r)})}();

Y.h.e=["google"],function(){(function(a){Y.__e=a;Y.__e.m="e";Y.__e.o=!0;Y.__e.priorityOverride=0})(function(a){var b=String(qi(a.vtp_gtmEventId,"event"));a.vtp_gtmCachedValues&&(b=String(a.vtp_gtmCachedValues.event));return b})}();
Y.h.f=["google"],function(){(function(a){Y.__f=a;Y.__f.m="f";Y.__f.o=!0;Y.__f.priorityOverride=0})(function(a){var b=Gs("gtm.referrer",1)||N.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?nh(ph(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):Fs(String(b)):String(b)})}();
Y.h.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=op(c,"gtm.click");Hs(d)}}(function(b){Y.__cl=b;Y.__cl.m="cl";Y.__cl.o=!0;Y.__cl.priorityOverride=0})(function(b){if(!Ms("cl")){var c=W("document");kg(c,"click",a,!0);Ns("cl")}O(b.vtp_gtmOnSuccess)})}();
Y.h.j=["google"],function(){(function(a){Y.__j=a;Y.__j.m="j";Y.__j.o=!0;Y.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=W(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];Ps(c,"j",a.vtp_gtmEventId);return c})}();Y.h.k=["google"],function(){(function(a){Y.__k=a;Y.__k.m="k";Y.__k.o=!0;Y.__k.priorityOverride=0})(function(a){return Js(a.vtp_name,Gs("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Y.h.fls=[],function(){function a(c,d){d=d?d.slice(0,-1):void 0;ao(c,d)}var b=!1;(function(c){Y.__fls=c;Y.__fls.m="fls";Y.__fls.o=!0;Y.__fls.priorityOverride=0})(function(c){var d,e=[];if(c.vtp_enableProductReporting){var f=
function(C){C=C||[];for(var E=[],G=[["i","id"],["p","price"],["q","quantity"],["c","country"],["l","language"],["a","accountId"]],D=0;D<C.length;D++)for(var R=0;R<G.length;R++){var Q=G[R],S=C[D][Q[1]];void 0!==S&&E.push(Q[0]+(D+1)+":"+X(S))}return E.join("|")};switch(c.vtp_dataSource){case "DATA_LAYER":e=Gs("ecommerce.purchase.products");d=f(e);break;case "JSON":e=c.vtp_productData;d=f(e);break;case "STRING":for(var g=(c.vtp_productData||"").split("|"),h=0;h<g.length;h++){var l=g[h].split(":");l[1]=
l[1]&&X(l[1])||"";g[h]=l.join(":");}d=g.join("|")}}var m=!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker,
p=vt(c.vtp_customVariable||[],"key","value")||{},r="ITEM_SOLD"===c.vtp_countingMethod?6:5;var y={Vb:c.vtp_activityTag,he:m,Wa:c.vtp_conversionCookiePrefix||void 0,Zc:c.vtp_revenue,na:r,me:c.vtp_advertiserId,qe:c.vtp_groupTag,onFailure:c.vtp_gtmOnFailure,onSuccess:c.vtp_gtmOnSuccess,fd:c.vtp_useImageTag?void 0:c.vtp_url,De:d,protocol:"",Ie:c.vtp_quantity,
Le:!c.vtp_useImageTag,od:c.vtp_transactionVariable,transactionId:c.vtp_orderId,pd:c.vtp_userVariable,sa:c.vtp_userDataVariable,Pe:p},w=!1;var z=!(Rg(M.D)||w)&&void 0!=Gs(M.P)&&!1!==Gs(M.P);y.Ca=z;if(c.vtp_enableAttribution){var B=c.vtp_attributionFields||[];if(B.length){V("//www.gstatic.com/attribution/collection/attributiontools.js",function(){a(y,
W("google_attr").build([vt(B,"key","value")||{}]))},c.vtp_gtmOnFailure);return}}a(y)})}();
Y.h.access_globals=["google"],function(){function a(b,c,d){var e={key:d,read:!1,write:!1,execute:!1};switch(c){case "read":e.read=!0;break;case "write":e.write=!0;break;case "readwrite":e.read=e.write=!0;break;case "execute":e.execute=!0;break;default:throw Error("Invalid access_globals request "+c);}return e}(function(b){Y.__access_globals=b;Y.__access_globals.m="access_globals";Y.__access_globals.o=!0;Y.__access_globals.priorityOverride=0})(function(b){for(var c=b.vtp_keys||[],d=b.vtp_createPermissionError,
e=[],f=[],g=[],h=0;h<c.length;h++){var l=c[h],m=l.key;l.read&&e.push(m);l.write&&f.push(m);l.execute&&g.push(m)}return{assert:function(p,r,q){if(!A(q))throw d(p,{},"Key must be a string.");if("read"===r){if(-1<Oa(e,q))return}else if("write"===r){if(-1<Oa(f,q))return}else if("readwrite"===r){if(-1<Oa(f,q)&&-1<Oa(e,q))return}else if("execute"===r){if(-1<Oa(g,q))return}else throw d(p,{},"Operation must be either 'read', 'write', or 'execute', was "+r);throw d(p,{},"Prohibited "+r+" on global variable: "+
q+".");},T:a}})}();Y.h.r=["google"],function(){(function(a){Y.__r=a;Y.__r.m="r";Y.__r.o=!0;Y.__r.priorityOverride=0})(function(a){return Ra(a.vtp_min,a.vtp_max)})}();
Y.h.t=["google"],function(){(function(a){Y.__t=a;Y.__t.m="t";Y.__t.o=!0;Y.__t.priorityOverride=0})(function(){return Cs().getTime()})}();
Y.h.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Y.__u=b;Y.__u.m="u";Y.__u.o=!0;Y.__u.priorityOverride=0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:Gs("gtm.url",1))||Ds();var d=b[a("vtp_component")];if(!d||"URL"==d)return Fs(String(c));var e=ph(String(c)),f;if("QUERY"===d)a:{var g=b[a("vtp_multiQueryKeys").toString()],h=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;g?Ma(h)?m=h:m=String(h).replace(/\s+/g,
"").split(","):m=[String(h)];for(var p=0;p<m.length;p++){var r=nh(e,"QUERY",void 0,void 0,m[p]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=nh(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Y.h.v=["google"],function(){(function(a){Y.__v=a;Y.__v.m="v";Y.__v.o=!0;Y.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=Gs(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1),d=void 0!==c?c:a.vtp_defaultValue;Ps(d,"v",a.vtp_gtmEventId);return d})}();
Y.h.tl=["google"],function(){function a(b){return function(){if(b.xe&&b.ze>=b.xe)b.ue&&W("self").clearInterval(b.ue);else{b.ze++;var c=Cs().getTime();Hs({event:b.J,"gtm.timerId":b.ue,"gtm.timerEventNumber":b.ze,"gtm.timerInterval":b.interval,"gtm.timerLimit":b.xe,"gtm.timerStartTime":b.ng,"gtm.timerCurrentTime":c,"gtm.timerElapsedTime":c-b.ng,"gtm.triggers":b.Di})}}}(function(b){Y.__tl=b;Y.__tl.m="tl";Y.__tl.o=!0;Y.__tl.priorityOverride=0})(function(b){O(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c=
{J:b.vtp_eventName,ze:0,interval:Number(b.vtp_interval),xe:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Di:String(b.vtp_uniqueTriggerId||"0"),ng:Cs().getTime()};c.ue=W("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Y.h.ua=["google"],function(){function a(q){return Rg(q)}function b(q,t,u){var v=!1;if(Fg()&&!v&&!e[q]){var x=!Rg(M.I),y=function(){var w=pl(),z="gtm"+di(),B=p(t);B["&gtm"]=Km(!0);var C={name:z};m(B,C,!0);var E=void 0,G=C._useUp;w(function(){var D=w.getByName(u);D&&(E=D.get("clientId"))});
w("create",q,C);x&&Rg(M.I)&&(x=!1,w(function(){var D=w.getByName(z);!D||D.get("clientId")===E&&G||(B["&gcs"]=Sg(),B["&gcu"]="1",D.set(B),D.send("pageview"))}));w(function(){w.remove(z)})};Mg(y,M.I);Mg(y,M.D);e[q]=!0}}var c,d={},e={},f=!0;f=!1;var g={name:!0,clientId:!0,sampleRate:!0,
siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,cookieFlags:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0,_cd2l:!0,_useUp:!0,_cs:!0},h={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,
allowAdPersonalizationSignals:!0,_cd2l:!0},l={urlPassthrough:!0},m=function(q,t,u){var v=0;if(q)for(var x in q)if(!l[x]&&q.hasOwnProperty(x)&&(u&&g[x]||!u&&void 0===g[x])){var y=h[x]?Za(q[x]):q[x];"anonymizeIp"!=x||y||(y=void 0);t[x]=y;v++}return v},p=function(q){var t={};q.vtp_gaSettings&&J(vt(q.vtp_gaSettings.vtp_fieldsToSet,"fieldName","value"),t);J(vt(q.vtp_fieldsToSet,"fieldName","value"),t);Rg(M.I)||(t.storage="none");Rg(M.D)||(t.allowAdFeatures=!1,t.storeGac=!1);zo()||(t.allowAdFeatures=!1);
yo()||(t.allowAdPersonalizationSignals=!1);q.vtp_transportUrl&&(t._x_19=q.vtp_transportUrl);if(Za(t.urlPassthrough)){t._useUp=!0;var u=!1;Fg()&&!u&&(t._cs=
a)}return t},r=function(q){function t(za,ca){void 0!==ca&&D("set",za,ca)}var u={},v={},x={},y={};if(q.vtp_gaSettings){var w=q.vtp_gaSettings;J(vt(w.vtp_contentGroup,"index","group"),v);J(vt(w.vtp_dimension,"index","dimension"),x);J(vt(w.vtp_metric,"index","metric"),y);var z=J(w);z.vtp_fieldsToSet=void 0;z.vtp_contentGroup=void 0;z.vtp_dimension=void 0;z.vtp_metric=void 0;q=J(q,z)}J(vt(q.vtp_contentGroup,"index","group"),v);J(vt(q.vtp_dimension,
"index","dimension"),x);J(vt(q.vtp_metric,"index","metric"),y);var B=p(q),C=rl(q.vtp_functionName);if(Ka(C)){var E="",G="";q.vtp_setTrackerName&&"string"==typeof q.vtp_trackerName?""!==q.vtp_trackerName&&(G=q.vtp_trackerName,E=G+"."):(G="gtm"+di(),E=G+".");var D=function(za){var ca=[].slice.call(arguments,0);ca[0]=E+ca[0];C.apply(window,ca)},R=function(za,ca){return void 0===ca?ca:za(ca)},Q=function(za,ca){if(ca)for(var tb in ca)ca.hasOwnProperty(tb)&&D("set",za+tb,ca[tb])},S=function(){
var za={transaction_id:"id",affiliation:"affiliation",value:"revenue",tax:"tax",shipping:"shipping",coupon:"coupon",item_list_name:"list"},ca={},tb=(ca[M.td]="click",ca[M.Ea]="detail",ca[M.qb]="add",ca[M.rb]="remove",ca[M.Ya]="checkout",ca[M.ja]="purchase",ca[M.sb]="refund",ca),Lc={item_id:"id",item_name:"name",item_list_name:"list",item_brand:"brand",item_variant:"variant",index:"position",promotion_id:"id",promotion_name:"name",creative_name:"creative",creative_slot:"position"},Qb={item_category:0,
item_category2:1,item_category3:2,item_category4:3,item_category5:4},hc=function(Sa,Pa){for(var Ia in Sa)za.hasOwnProperty(Ia)&&(Sa[Pa]=Sa[Pa]||{},Sa[Pa].actionField=Sa[Pa].actionField||{},Sa[Pa].actionField[za[Ia]]=Sa[Ia])},zb=function(Sa,Pa){for(var Ia="",eb=0;eb<Pa.length;eb++)void 0!==Pa[eb]&&(""!==Ia&&(Ia+="/"),Ia+=Pa[eb]);Sa.category=Ia},Ab=function(Sa){for(var Pa=[],Ia={},eb=0;eb<Sa.length;Ia={ob:Ia.ob,Hb:Ia.Hb},eb++){Ia.ob={};var qd=Sa[eb];Ia.Hb=[];Va(qd,function(ff){return function(Ac,rd){Lc.hasOwnProperty(Ac)?
ff.ob[Lc[Ac]]=rd:Qb.hasOwnProperty(Ac)?ff.Hb[Qb[Ac]]=rd:ff.ob[Ac]=rd}}(Ia));0<Ia.Hb.length&&zb(Ia.ob,Ia.Hb);Pa.push(Ia.ob)}return Pa},ub=function(Sa,Pa,Ia){if(!Eb(Pa))return!1;for(var eb=cb(Object(Pa),Ia,[]),qd=0;eb&&qd<eb.length;qd++)D(Sa,eb[qd]);return!!eb&&0<eb.length},Z;if(q.vtp_useEcommerceDataLayer){var Mc=!1;if(q.vtp_useGA4SchemaForEcommerce){q.vtp_gtmCachedValues&&(Z=q.vtp_gtmCachedValues.eventModel);
Z=Z||qi(q.vtp_gtmEventId,"eventModel");Mc=!!Z}Mc||(Z=Gs("ecommerce",1))}else q.vtp_ecommerceMacroData&&(Z=q.vtp_ecommerceMacroData.ecommerce,!Z&&q.vtp_useGA4SchemaForEcommerce&&
(Z=q.vtp_ecommerceMacroData));if(!Eb(Z))return;Z=Object(Z);if(q.vtp_useGA4SchemaForEcommerce){Z=J(Z);Z.currencyCode=Z.currencyCode||Z.currency;var Na;q.vtp_gtmCachedValues&&(Na=q.vtp_gtmCachedValues.event);Na=Na||String(qi(q.vtp_gtmEventId,"event"));if("view_item_list"===Na&&!Z.impressions&&Z.items)Z.impressions=Ab(Z.items);else if("view_promotion"===Na&&!Z.promoView&&Z.items)Z.promoView=
{},Z.promoView.promotions=Ab(Z.items);else if("select_promotion"===Na&&!Z.promoClick)Z.items&&(Z.promoClick={},Z.promoClick.promotions=Ab(Z.items)),hc(Z,"promoClick");else if(tb.hasOwnProperty(Na)){var Rb=tb[Na];Z[Rb]||(Z.items&&(Z[Rb]={},Z[Rb].products=Ab(Z.items)),hc(Z,Rb))}}var df=cb(B,"currencyCode",Z.currencyCode);void 0!==df&&D("set","&cu",df);ub("ec:addImpression",Z,"impressions");if(ub("ec:addPromo",Z[Z.promoClick?"promoClick":"promoView"],"promotions")&&Z.promoClick){D("ec:setAction","promo_click",
Z.promoClick.actionField);return}for(var ef="detail checkout checkout_option click add remove purchase refund".split(" "),Kg="refund purchase remove checkout checkout_option add click detail".split(" "),$d=0;$d<ef.length;$d++){var nd=Z[ef[$d]];if(nd){ub("ec:addProduct",nd,"products");D("ec:setAction",ef[$d],nd.actionField);if(Zl)for(var od=0;od<Kg.length;od++){var pd=Z[Kg[od]];if(pd){pd!==nd&&Cf(13);break}}break}}},U={name:G};m(B,
U,!0);var T=q.vtp_trackingId||u.trackingId;C("create",T,U);D("set","&gtm",Km(!0));var L=!1;Fg()&&!L&&(D("set","&gcs",Sg()),b(T,q,G));B._x_19&&(f&&null==bg&&delete B._x_19,B._x_20&&!d[G]&&(d[G]=!0,C(wl(G,String(B._x_20)))));
q.vtp_enableRecaptcha&&D("require","recaptcha","recaptcha.js");(function(za,ca){void 0!==q[ca]&&D("set",za,q[ca])})("nonInteraction","vtp_nonInteraction");Q("contentGroup",v);Q("dimension",x);Q("metric",y);var ba={};m(B,ba,!1)&&D("set",ba);var fa;q.vtp_enableLinkId&&D("require","linkid","linkid.js");D("set","hitCallback",function(){var za=
B&&B.hitCallback;Ka(za)&&za();q.vtp_gtmOnSuccess()});var P=function(za,ca){return void 0===q[za]?u[ca]:q[za]};if("TRACK_EVENT"==q.vtp_trackType){q.vtp_enableEcommerce&&(D("require","ec","ec.js"),S());var ia={hitType:"event",eventCategory:String(P("vtp_eventCategory","category")),eventAction:String(P("vtp_eventAction","action")),eventLabel:R(String,P("vtp_eventLabel","label")),eventValue:R(Ya,P("vtp_eventValue","value"))};m(fa,ia,
!1);D("send",ia);}else if("TRACK_SOCIAL"==q.vtp_trackType){}else if("TRACK_TRANSACTION"==q.vtp_trackType){}else if("TRACK_TIMING"==
q.vtp_trackType){}else if("DECORATE_LINK"==q.vtp_trackType){}else if("DECORATE_FORM"==q.vtp_trackType){}else if("TRACK_DATA"==q.vtp_trackType){}else{q.vtp_enableEcommerce&&(D("require","ec","ec.js"),S());if(q.vtp_doubleClick||"DISPLAY_FEATURES"==q.vtp_advertisingFeaturesType){var Yd=
"_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","displayfeatures",void 0,{cookieName:Yd})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==q.vtp_advertisingFeaturesType){var Dj="_dc_gtm_"+String(q.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");D("require","adfeatures",{cookieName:Dj})}fa?D("send","pageview",fa):D("send","pageview");Za(B.urlPassthrough)&&tl(E)}if(!c){var zc=q.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";q.vtp_useInternalVersion&&!q.vtp_useDebugVersion&&(zc="internal/"+zc);c=!0;var Zd=um(B._x_19,"/analytics.js"),Jg=xk("https:","http:","//www.google-analytics.com/"+zc,B&&!!B.forceSSL);V("analytics.js"===zc&&Zd?Zd:Jg,function(){var za=pl();za&&za.loaded||q.vtp_gtmOnFailure();},
q.vtp_gtmOnFailure)}}else O(q.vtp_gtmOnFailure)};(function(q){Y.__ua=q;Y.__ua.m="ua";Y.__ua.o=!0;Y.__ua.priorityOverride=0})(function(q){Vg(function(){r(q)},[M.I,M.D])})}();

Y.h.inject_script=["google"],function(){function a(b,c){return{url:c}}(function(b){Y.__inject_script=b;Y.__inject_script.m="inject_script";Y.__inject_script.o=!0;Y.__inject_script.priorityOverride=0})(function(b){var c=b.vtp_urls||[],d=b.vtp_createPermissionError;return{assert:function(e,f){if(!A(f))throw d(e,{},"Script URL must be a string.");try{if(Pe(ph(f),c))return}catch(g){throw d(e,{},"Invalid script URL filter.");}throw d(e,{},"Prohibited script URL: "+f);},T:a}})}();


Y.h.ytl=["google"],function(){function a(){var u=Math.round(1E9*Math.random())+"";return N.getElementById(u)?a():u}function b(u,v){if(!u)return!1;for(var x=0;x<p.length;x++)if(0<=u.indexOf("//"+p[x]+"/"+v))return!0;return!1}function c(u,v){var x=u.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(v){var y=u.setAttribute,w;var z=-1!==x.indexOf("?")?"&":"?";if(-1<x.indexOf("origin="))w=x+z+"enablejsapi=1";else{if(!q){var B=W("document");q=B.location.protocol+"//"+B.location.hostname;
B.location.port&&(q+=":"+B.location.port)}w=x+z+"enablejsapi=1&origin="+encodeURIComponent(q)}y.call(u,"src",w);return!0}}return!1}function d(u,v){if(!u.getAttribute("data-gtm-yt-inspected-"+v.Oe)&&(u.setAttribute("data-gtm-yt-inspected-"+v.Oe,"true"),c(u,v.bc))){u.id||(u.id=a());var x=W("YT"),y=x.get(u.id);y||(y=new x.Player(u.id));var w=f(y,v),z={},B;for(B in w)z.Jb=B,w.hasOwnProperty(z.Jb)&&y.addEventListener(z.Jb,function(C){return function(E){return w[C.Jb](E.data)}}(z)),z={Jb:z.Jb}}}function e(u){O(function(){function v(){for(var y=
x.getElementsByTagName("iframe"),w=y.length,z=0;z<w;z++)d(y[z],u)}var x=W("document");v();Wp(v)})}function f(u,v){var x,y;function w(){S=Xp(function(){return{url:L,title:ba,ke:T,Uf:u.getCurrentTime(),playbackRate:fa}},v.Oe,u.getIframe());T=0;ba=L="";fa=1;return z}function z(ea){switch(ea){case r.PLAYING:T=Math.round(u.getDuration());L=u.getVideoUrl();if(u.getVideoData){var ya=u.getVideoData();ba=ya?ya.title:""}fa=u.getPlaybackRate();v.de?Hs(S.createEvent("start")):S.Bb();U=l(v.Fe,v.Ee,u.getDuration());
return B(ea);default:return z}}function B(){P=u.getCurrentTime();ia=Cs().getTime();S.jg();Q();return C}function C(ea){var ya;switch(ea){case r.ENDED:return G(ea);case r.PAUSED:ya="pause";case r.BUFFERING:var Ha=u.getCurrentTime()-P;ya=1<Math.abs((Cs().getTime()-ia)/1E3*fa-Ha)?"seek":ya||"buffering";u.getCurrentTime()&&(v.ce?Hs(S.createEvent(ya)):S.Bb());R();return E;case r.UNSTARTED:return w(ea);default:return C}}function E(ea){switch(ea){case r.ENDED:return G(ea);case r.PLAYING:return B(ea);case r.UNSTARTED:return w(ea);
default:return E}}function G(){for(;y;){var ea=x;As(y);ea()}v.be&&Hs(S.createEvent("complete",1));return w(r.UNSTARTED)}function D(){}function R(){y&&(As(y),y=0,x=D)}function Q(){if(U.length&&0!==fa){var ea=-1,ya;do{ya=U[0];if(ya.Z>u.getDuration())return;ea=(ya.Z-u.getCurrentTime())/fa;if(0>ea&&(U.shift(),0===U.length))return}while(0>ea);x=function(){y=0;x=D;0<U.length&&U[0].Z===ya.Z&&(U.shift(),Hs(S.createEvent("progress",ya.mc,ya.oc)));Q()};y=Bs(x,1E3*ea)}}var S,U=[],T,L,ba,fa,P,ia,xa=w(r.UNSTARTED);
y=0;x=D;return{onStateChange:function(ea){xa=xa(ea)},onPlaybackRateChange:function(ea){P=u.getCurrentTime();ia=Cs().getTime();S.Bb();fa=ea;R();Q()}}}function g(u){for(var v=u.split(","),x=v.length,y=[],w=0;w<x;w++){var z=parseInt(v[w],10);isNaN(z)||100<z||0>z||y.push(z/100)}y.sort(function(B,C){return B-C});return y}function h(u){for(var v=u.split(","),x=v.length,y=[],w=0;w<x;w++){var z=parseInt(v[w],10);isNaN(z)||0>z||y.push(z)}y.sort(function(B,C){return B-C});return y}function l(u,v,x){var y=u.map(function(B){return{Z:B,
oc:B,mc:void 0}});if(!v.length)return y;var w=v.map(function(B){return{Z:B*x,oc:void 0,mc:B}});if(!y.length)return w;var z=y.concat(w);z.sort(function(B,C){return B.Z-C.Z});return z}function m(u){var v=!!u.vtp_captureStart,x=!!u.vtp_captureComplete,y=!!u.vtp_capturePause,w=g(u.vtp_progressThresholdsPercent+""),z=h(u.vtp_progressThresholdsTimeInSeconds+""),B=!!u.vtp_fixMissingApi;if(v||x||y||w.length||z.length){var C={de:v,be:x,ce:y,Ee:w,Fe:z,bc:B,Oe:void 0===u.vtp_uniqueTriggerId?"":u.vtp_uniqueTriggerId},
E=W("YT"),G=function(){e(C)};O(u.vtp_gtmOnSuccess);if(E)E.ready&&E.ready(G);else{var D=W("onYouTubeIframeAPIReady");Is("onYouTubeIframeAPIReady",function(){D&&D();G()});O(function(){for(var R=W("document"),Q=R.getElementsByTagName("script"),S=Q.length,U=0;U<S;U++){var T=Q[U].getAttribute("src");if(b(T,"iframe_api")||b(T,"player_api"))return}for(var L=R.getElementsByTagName("iframe"),ba=L.length,fa=0;fa<ba;fa++)if(!t&&c(L[fa],C.bc)){V("https://www.youtube.com/iframe_api");t=!0;break}})}}else O(u.vtp_gtmOnSuccess)}
var p=["www.youtube.com","www.youtube-nocookie.com"],r={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},q,t=!1;(function(u){Y.__ytl=u;Y.__ytl.m="ytl";Y.__ytl.o=!0;Y.__ytl.priorityOverride=0})(function(u){u.vtp_triggerStartOption?m(u):dl(function(){m(u)})})}();

Y.h.cid=["google"],function(){(function(a){Y.__cid=a;Y.__cid.m="cid";Y.__cid.o=!0;Y.__cid.priorityOverride=0})(function(){return le.K})}();

Y.h.gclidw=["google"],function(){var a=["aw","dc","gf","ha","gb"],b=!1;(function(c){Y.__gclidw=c;Y.__gclidw.m="gclidw";Y.__gclidw.o=!0;Y.__gclidw.priorityOverride=100})(function(c){O(c.vtp_gtmOnSuccess);var d,e,f,g;c.vtp_enableCookieOverrides&&(f=c.vtp_cookiePrefix,d=c.vtp_path,e=c.vtp_domain,c.vtp_enableCookieFlagsFeature&&(g=c.vtp_cookieFlags));var h=null;c.vtp_enableCookieUpdateFeature&&(h=
!0,void 0!==c.vtp_cookieUpdate&&(h=!!c.vtp_cookieUpdate));var l={prefix:f,path:d,domain:e,flags:g};c.vtp_enableCrossDomainFeature&&(c.vtp_enableCrossDomain&&!1===c.vtp_acceptIncoming||(c.vtp_enableCrossDomain||Bj())&&Zj(a,l));Wj(l);ck(["aw","dc"],l);b?ok(h,l):ok(h,l,"dc");var m=f;if(c.vtp_enableCrossDomainFeature&&c.vtp_enableCrossDomain&&c.vtp_linkerDomains){var p=c.vtp_linkerDomains.toString().replace(/\s+/g,"").split(",");bk(a,p,c.vtp_urlPosition,!!c.vtp_formDecoration,m)}var r=Gs(M.P);un({ee:!1,
Ca:void 0!=r&&!1!==r,Yc:l,ed:!0});c.vtp_enableUrlPassthrough&&ek(["aw","dc","gb"])});}();


Y.h.aev=["google"],function(){function a(t,u,v){var x=t||qi(u,"gtm");if(x)return x[v]}function b(t,u,v,x,y){y||(y="element");var w=u+"."+v,z;if(p.hasOwnProperty(w))z=p[w];else{var B=a(t,u,y);if(B&&(z=x(B),p[w]=z,r.push(w),35<r.length)){var C=r.shift();delete p[C]}}return z}function c(t,u,v,x){var y=a(t,u,q[v]);return void 0!==y?y:x}function d(t,u){if(!t)return!1;var v=e(Ds());Ma(u)||(u=String(u||"").replace(/\s+/g,"").split(","));for(var x=[v],y=0;y<u.length;y++){var w=u[y];if(w.hasOwnProperty("is_regex"))if(w.is_regex)try{w=
new RegExp(w.domain)}catch(B){continue}else w=w.domain;if(w instanceof RegExp){if(w.test(t))return!1}else{var z=w;if(0!=z.length){if(0<=e(t).indexOf(z))return!1;x.push(e(z))}}}return!ut(t,x)}function e(t){m.test(t)||(t="http://"+t);return nh(ph(t),"HOST",!0)}function f(t,u,v,x){switch(t){case "SUBMIT_TEXT":return b(u,v,"FORM."+t,g,"formSubmitElement")||x;case "LENGTH":var y=b(u,v,"FORM."+t,h);return void 0===y?x:y;case "INTERACTED_FIELD_ID":return l(u,v,"id",x);case "INTERACTED_FIELD_NAME":return l(u,
v,"name",x);case "INTERACTED_FIELD_TYPE":return l(u,v,"type",x);case "INTERACTED_FIELD_POSITION":var w=a(u,v,"interactedFormFieldPosition");return void 0===w?x:w;case "INTERACT_SEQUENCE_NUMBER":var z=a(u,v,"interactSequenceNumber");return void 0===z?x:z;default:return x}}function g(t){switch(t.tagName.toLowerCase()){case "input":return mg(t,"value");case "button":return ng(t);default:return null}}function h(t){if("form"===t.tagName.toLowerCase()&&t.elements){for(var u=0,v=0;v<t.elements.length;v++)ns(t.elements[v])&&
u++;return u}}function l(t,u,v,x){var y=a(t,u,"interactedFormField");return y&&mg(y,v)||x}var m=/^https?:\/\//i,p={},r=[],q={ATTRIBUTE:"elementAttribute",CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(t){Y.__aev=t;Y.__aev.m="aev";Y.__aev.o=!0;Y.__aev.priorityOverride=
0})(function(t){var u=t.vtp_gtmEventId,v=t.vtp_defaultValue,x=t.vtp_varType,y;t.vtp_gtmCachedValues&&(y=t.vtp_gtmCachedValues.gtm);switch(x){case "TAG_NAME":var w=a(y,u,"element");return w&&w.tagName||v;case "TEXT":return b(y,u,x,ng)||v;case "URL":var z;a:{var B=String(a(y,u,"elementUrl")||v||""),C=ph(B),E=String(t.vtp_component||"URL");switch(E){case "URL":z=B;break a;case "IS_OUTBOUND":z=
d(B,t.vtp_affiliatedDomains);break a;default:z=nh(C,E,t.vtp_stripWww,t.vtp_defaultPages,t.vtp_queryKey)}}return z;case "ATTRIBUTE":var G;if(void 0===t.vtp_attribute)G=c(y,u,x,v);else{var D=t.vtp_attribute,R=a(y,u,"element");G=R&&mg(R,D)||v||""}return G;case "MD":var Q=t.vtp_mdValue,S=b(y,u,"MD",ws);return Q&&S?zs(S,Q)||v:S||v;case "FORM":return f(String(t.vtp_component||"SUBMIT_TEXT"),y,u,v);default:var U=c(y,u,x,v);Ps(U,"aev",t.vtp_gtmEventId);return U}})}();

Y.h.gas=["google"],function(){(function(a){Y.__gas=a;Y.__gas.m="gas";Y.__gas.o=!0;Y.__gas.priorityOverride=0})(function(a){var b=J(a),c=b;c[hd.eb]=null;c[hd.eh]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Y.h.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:Ds()}function b(f,g){kg(f,"hashchange",function(h){var l=a(h);g({source:"hashchange",state:null,url:Fs(l),R:Es(l)})})}function c(f,g){kg(f,"popstate",function(h){var l=a(h);g({source:"popstate",state:h.state,url:Fs(l),R:Es(l)})})}function d(f,g,h){var l=g.history,m=l[f];if(Ka(m))try{l[f]=function(p,r,q){m.apply(l,[].slice.call(arguments,0));h({source:f,state:p,url:Fs(Ds()),
R:Es(Ds())})}}catch(p){}}function e(){var f={source:null,state:W("history").state||null,url:Fs(Ds()),R:Es(Ds())};return function(g){var h=f,l={};l[h.source]=!0;l[g.source]=!0;if(!l.popstate||!l.hashchange||h.R!=g.R){var m={event:"gtm.historyChange","gtm.historyChangeSource":g.source,"gtm.oldUrlFragment":f.R,"gtm.newUrlFragment":g.R,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":g.state,"gtm.oldUrl":f.url,"gtm.newUrl":g.url};f=g;Hs(m)}}}(function(f){Y.__hl=f;Y.__hl.m="hl";Y.__hl.o=!0;Y.__hl.priorityOverride=
0})(function(f){var g=W("self");if(!Ms("hl")){var h=e();b(g,h);c(g,h);d("pushState",g,h);d("replaceState",g,h);Ns("hl")}O(f.vtp_gtmOnSuccess)})}();
Y.h.remm=["google"],function(){(function(a){Y.__remm=a;Y.__remm.m="remm";Y.__remm.o=!0;Y.__remm.priorityOverride=0})(function(a){for(var b=a.vtp_input,c=a.vtp_map||[],d=a.vtp_fullMatch,e=a.vtp_ignoreCase?"gi":"g",f=a.vtp_defaultValue,g=0;g<c.length;g++){var h=c[g].key||"";d&&(h="^"+h+"$");var l=new RegExp(h,e);if(l.test(b)){var m=c[g].value;a.vtp_replaceAfterMatch&&(m=String(b).replace(l,m));f=m;break}}Ps(f,"remm",a.vtp_gtmEventId);return f})}();Y.h.smm=["google"],function(){(function(a){Y.__smm=a;Y.__smm.m="smm";Y.__smm.o=!0;Y.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=vt(a.vtp_map,"key","value")||{},d=c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue;Ps(d,"smm",a.vtp_gtmEventId);return d})}();



Y.h.paused=[],function(){(function(a){Y.__paused=a;Y.__paused.m="paused";Y.__paused.o=!0;Y.__paused.priorityOverride=0})(function(a){O(a.vtp_gtmOnFailure)})}();

Y.h.html=["customScripts"],function(){function a(d,e,f,g){return function(){try{if(0<e.length){var h=e.shift(),l=a(d,e,f,g);if("SCRIPT"==String(h.nodeName).toUpperCase()&&"text/gtmscript"==h.type){var m=N.createElement("script");m.async=!1;m.type="text/javascript";m.id=h.id;m.text=h.text||h.textContent||h.innerHTML||"";h.charset&&(m.charset=h.charset);var p=h.getAttribute("data-gtmsrc");p&&(m.src=p,eg(m,l));d.insertBefore(m,null);p||l()}else if(h.innerHTML&&0<=h.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];h.firstChild;)r.push(h.removeChild(h.firstChild));d.insertBefore(h,null);a(h,r,l,g)()}else d.insertBefore(h,null),l()}else f()}catch(q){O(g)}}}var c=function(d){if(N.body){var e=
d.vtp_gtmOnFailure,f=Qs(d.vtp_html,d.vtp_gtmOnSuccess,e),g=f.Ph,h=f.onSuccess;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(g,h,e):a(N.body,og(g),h,e)()}else Bs(function(){c(d)},
200)};Y.__html=c;Y.__html.m="html";Y.__html.o=!0;Y.__html.priorityOverride=0}();




Y.h.img=["customPixels"],function(){(function(a){Y.__img=a;Y.__img.m="img";Y.__img.o=!0;Y.__img.priorityOverride=0})(function(a){var b=og('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}tt(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Y.h.lcl=[],function(){function a(){var c=W("document"),d=0,e=function(f){var g=f.target;if(g&&3!==f.which&&!(f.cg||f.timeStamp&&f.timeStamp===d)){d=f.timeStamp;g=pg(g,["a","area"],100);if(!g)return f.returnValue;var h=f.defaultPrevented||!1===f.returnValue,l=sp("lcl",h?"nv.mwt":"mwt",0),m;m=h?sp("lcl","nv.ids",[]):sp("lcl","ids",[]);if(m.length){var p=op(g,"gtm.linkClick",m);if(b(f,g,c)&&!h&&l&&g.href){var r=!!Qa(String(rg(g,"rel")||"").split(" "),function(u){return"noreferrer"===u.toLowerCase()});
r&&Cf(36);var q=W((rg(g,"target")||"_self").substring(1)),t=!0;if(Hs(p,bs(function(){var u;if(u=t&&q){var v;a:if(r){var x;try{x=new MouseEvent(f.type,{bubbles:!0})}catch(y){if(!c.createEvent){v=!1;break a}x=c.createEvent("MouseEvents");x.initEvent(f.type,!0,!0)}x.cg=!0;f.target.dispatchEvent(x);v=!0}else v=!1;u=!v}u&&(q.location.href=rg(g,"href"))}),l))t=!1;else return f.preventDefault&&f.preventDefault(),f.returnValue=!1}else Hs(p,function(){},l||2E3);return!0}}};kg(c,"click",e,!1);kg(c,"auxclick",
e,!1)}function b(c,d,e){if(2===c.which||c.ctrlKey||c.shiftKey||c.altKey||c.metaKey)return!1;var f=rg(d,"href"),g=f.indexOf("#"),h=rg(d,"target");if(h&&"_self"!==h&&"_parent"!==h&&"_top"!==h||0===g)return!1;if(0<g){var l=Fs(f),m=Fs(e.location);return l!==m}return!0}(function(c){Y.__lcl=c;Y.__lcl.m="lcl";Y.__lcl.o=!0;Y.__lcl.priorityOverride=0})(function(c){var d=void 0===c.vtp_waitForTags?!0:c.vtp_waitForTags,e=void 0===c.vtp_checkValidation?!0:c.vtp_checkValidation,f=Number(c.vtp_waitForTagsTimeout);
if(!f||0>=f)f=2E3;var g=c.vtp_uniqueTriggerId||"0";if(d){var h=function(m){return Math.max(f,m)};rp("lcl","mwt",h,0);e||rp("lcl","nv.mwt",h,0)}var l=function(m){m.push(g);return m};rp("lcl","ids",l,[]);e||rp("lcl","nv.ids",l,[]);Ms("lcl")||(a(),Ns("lcl"));O(c.vtp_gtmOnSuccess)})}();


var lw={};lw.macro=function(a){if(is.Zd.hasOwnProperty(a))return is.Zd[a]},lw.onHtmlSuccess=is.Tf(!0),lw.onHtmlFailure=is.Tf(!1);lw.dataLayer=ki;lw.callback=function(a){bi.hasOwnProperty(a)&&Ka(bi[a])&&bi[a]();delete bi[a]};lw.bootstrap=0;lw._spx=!1;function mw(){Rh[le.K]=lw;fb(ci,Y.h);Qd=Qd||is;Rd=he}
function nw(){var a=!1;a&&ll("INIT");tg.s().s();Rh=F.google_tag_manager=F.google_tag_manager||{};nn();
Gj.enable_gbraid_cookie_write=!0;if(Rh[le.K]){var b=Rh.zones;b&&b.unregisterChild(le.K);}else{for(var c=data.resource||{},d=c.macros||[],e=0;e<d.length;e++)Jd.push(d[e]);for(var f=c.tags||[],g=0;g<f.length;g++)Md.push(f[g]);for(var h=c.predicates||[],l=0;l<h.length;l++)Ld.push(h[l]);for(var m=c.rules||[],p=0;p<m.length;p++){for(var r=m[p],q={},t=
0;t<r.length;t++)q[r[t][0]]=Array.prototype.slice.call(r[t],1);Kd.push(q)}Od=Y;Pd=qt;var u=data.permissions||{},v=data.sandboxed_scripts,x=data.security_groups;or();pe=new oe(u);if(void 0!==v)for(var y=["sandboxedScripts"],w=0;w<v.length;w++){var z=v[w].replace(/^_*/,"");ci[z]=y}rr(x);mw();hs();Zk=!1;$k=0;if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)bl();else{kg(N,"DOMContentLoaded",bl);kg(N,"readystatechange",bl);if(N.createEventObject&&N.documentElement.doScroll){var B=
!0;try{B=!F.frameElement}catch(R){}B&&cl()}kg(F,"load",bl)}qq=!1;"complete"===N.readyState?sq():kg(F,"load",sq);Zl&&F.setInterval(Yl,864E5);
$h=(new Date).getTime();if(a){var D=ml("INIT");
}}}
(function(a){if(!F["__TAGGY_INSTALLED"]){var b=!1;if(N.referrer){var c=ph(N.referrer);b="cct.google"===mh(c,"host")}if(!b){var d=Ai("googTaggyReferrer");b=d.length&&d[0].length}b&&(F["__TAGGY_INSTALLED"]=!0,gg("https://cct.google/taggy/agent.js"))}var f=function(){var m=F["google.tagmanager.debugui2.queue"];m||(m=[],F["google.tagmanager.debugui2.queue"]=m,gg("https://www.googletagmanager.com/debug/bootstrap"));var p={messageType:"CONTAINER_STARTING",data:{scriptSource:bg,containerProduct:"GTM",debug:!1}};p.data.resume=function(){a()};le.wg&&(p.data.initialPublish=!0);m.push(p)},g="x"===nh(F.location,"query",!1,void 0,"gtm_debug");if(!g&&N.referrer){var h=ph(N.referrer);g="tagassistant.google.com"===mh(h,"host")}if(!g){var l=Ai("__TAG_ASSISTANT");g=l.length&&l[0].length}F.__TAG_ASSISTANT_API&&(g=!0);g&&bg?f():a()})(nw);

})()
