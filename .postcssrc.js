// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    //"autoprefixer": {},

    "postcss-aspect-ratio-mini":{},
    "postcss-write-svg" : {
        utf8:false
    },
    "postcss-cssnext":{},
    "postcss-px-to-viewport":{
        viewportWidth:750,
        viewportHeight:1334,
        unitPrecision:3,
        viewportUnit:"vW",
        selectorBlackList:[".ignore",".hairlines"],
        mixPixelValue:1,
        mediaQuery:false
    },
    "postcss-viewport-units":{},
    "cssnano":{
        preset:"advanced",
        autoprefixer:false,
        "postcss-zindex":false
    }
  }
}
/*适配场景
容器适配，可以使用vw
文本的适配，可以使用vw
大于1px的边框、圆角、阴影都可以使用vw
内距和外距，可以使用vw
 */