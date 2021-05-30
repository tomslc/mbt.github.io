/* eslint-disable */
var files = 'app~21833f8f.caee8e3f4310a5d97412.js,app~748942c6.e8143981b675af3112e9.js,styles~21833f8f.6abc2d169819647ea254.js,vendors~0f485567.98851d8b11a041f96991.js,vendors~253ae210.1764d93cc70b4707ea62.js,vendors~7274e1de.7c2c04eac1361da843df.js,vendors~8004e7d2.042c095573ec8c122ddf.js,vendors~9c5b28f6.696cc9ce628d5cbceb4e.js,vendors~ccfeb0d6.08a633bde235e19d9f06.js,vendors~cefe50a8.05a3b90d43bd935130bf.js,vendors~db300d2f.5114e4fb04f8742b82e9.js,vendors~ec8c427e.3e9e4a171004fd478ddb.js,styles~21833f8f.751a9b8c5be17ab83c88.css'
var isFromLocal = false
var buildTime = 'Mon May 24 2021 18:24:10 GMT+0800 (+08)'
var buildEnv = 'live'
var buildRegion = 'tw'
var host = window.location.href
var isVisitingCN = host.indexOf('cn') > -1
var cdnDomain = !!isFromLocal
  ? ''
  : isVisitingCN
    ? 'https://deo.shopeesz.com/shopee/shopee-seller-' + buildEnv + '-' + buildRegion
    : 'https://deo.shopeemobile.com/shopee/shopee-seller-' + buildEnv + '-' + buildRegion
/* eslint-enable */
function createAssetScriptTags (fileNames) {
  console.log('MiniChat Build Time: ', buildTime)
  var files = fileNames.split(',')
  var fileLength = files.length
  var fragment = document.createDocumentFragment()
  if (fileLength) {
    for (var i = 0; i < fileLength; i++) {
      var jsFile = files[i].indexOf('js') > -1
      var cssFile = files[i].indexOf('css') > -1
      var fileUrl = cdnDomain + '/chateasy/' + files[i]
      if (jsFile) {
        var jstag = document.createElement('script')
        jstag.src = fileUrl
        jstag.type = 'text/javascript'
        jstag.charset = 'utf-8'
        if (jstag) {
          fragment.appendChild(jstag)
        }
      } else if (cssFile) {
        var csstag = document.createElement('link')
        csstag.href = fileUrl
        csstag.rel = 'stylesheet'
        csstag.type = 'text/css'
        if (csstag) {
          fragment.appendChild(csstag)
        }
      }
    }
    document.body.appendChild(fragment)
  }
}
createAssetScriptTags(files)
