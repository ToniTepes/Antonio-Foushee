(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0EVa":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);t.a=function(e){var t=e.data,a=new Date(t),r=a.getDate(),i=a.getMonth(),o=a.getFullYear();return n.a.createElement("span",null,r," ",["January","February","March","April","May","June","July","August","September","October","November","December"][i]," ",o)}},"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),o=r(a("VbXa")),s=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,a=e.fixed;return m(t||a).src},m=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=p(t);return g[a]||!1},y="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,b=v&&window.IntersectionObserver,E=new WeakMap;function S(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function P(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var N=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+o+s+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,n=e.spreadProps,i=e.ariaHidden,o=d.default.createElement(C,(0,l.default)({src:t},n,{ariaHidden:i}));return a.length>1?d.default.createElement("picture",null,r(a),o):o},C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,o=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,p=e.ariaHidden,m=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:a,srcSet:r,src:n},m,{onLoad:o,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!y&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(y||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=N(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=p(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,o=e.imgStyle,s=void 0===o?{}:o,c=e.placeholderStyle,f=void 0===c?{}:c,p=e.placeholderClassName,g=e.fluid,h=e.fixed,y=e.backgroundColor,v=e.durationFadeIn,b=e.Tag,E=e.itemProp,w=e.loading,L=e.draggable,N=!1===this.state.fadeIn||this.state.imgLoaded,V=!0===this.state.fadeIn&&!this.state.imgCached,z=(0,l.default)({opacity:N?1:0,transition:V?"opacity "+v+"ms":"none"},s),R="boolean"==typeof y?"lightgray":y,k={transitionDelay:v+"ms"},_=(0,l.default)({opacity:this.state.imgLoaded?0:1},V&&k,{},s,{},f),q={title:t,alt:this.state.isVisible?"":a,style:_,className:p,itemProp:E};if(g){var M=g,G=m(g);return d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(G.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/G.aspectRatio+"%"}}),R&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},V&&k)}),G.base64&&d.default.createElement(x,{ariaHidden:!0,src:G.base64,spreadProps:q,imageVariants:M,generateSources:P}),G.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,src:G.tracedSVG,spreadProps:q,imageVariants:M,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(M),d.default.createElement(C,{alt:a,title:t,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:w},G,{imageVariants:M}))}}))}if(h){var T=h,j=m(h),F=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:j.width,height:j.height},i);return"inherit"===i.display&&delete F.display,d.default.createElement(b,{className:(r||"")+" gatsby-image-wrapper",style:F,ref:this.handleRef,key:"fixed-"+JSON.stringify(j.srcSet)},R&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:R,width:j.width,opacity:this.state.imgLoaded?0:1,height:j.height},V&&k)}),j.base64&&d.default.createElement(x,{ariaHidden:!0,src:j.base64,spreadProps:q,imageVariants:T,generateSources:P}),j.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,src:j.tracedSVG,spreadProps:q,imageVariants:T,generateSources:I}),this.state.isVisible&&d.default.createElement("picture",null,S(T),d.default.createElement(C,{alt:a,title:t,width:j.width,height:j.height,sizes:j.sizes,src:j.src,crossOrigin:this.props.crossOrigin,srcSet:j.srcSet,style:z,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:w,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,l.default)({alt:a,title:t,loading:w},j,{imageVariants:T}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:z,sizes:R,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var k=V;t.default=k},INYr:function(e,t,a){"use strict";var r=a("XKFU"),n=a("CkkT")(6),i="findIndex",o=!0;i in[]&&Array(1)[i]((function(){o=!1})),r(r.P+r.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(i)},OGtf:function(e,t,a){var r=a("XKFU"),n=a("eeVq"),i=a("vhPU"),o=/"/g,s=function(e,t,a,r){var n=String(i(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(r).replace(o,"&quot;")+'"'),s+">"+n+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),r(r.P+r.F*n((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},cGQ7:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r);function i(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={colorPrimary:"#00",colorSecondary:"#00"},a._id=r.counter,a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o,s,l,d=r.prototype;return d.componentDidMount=function(){this.setState({colorPrimary:window.getComputedStyle(this.cp,null).getPropertyValue("color"),colorSecondary:window.getComputedStyle(this.cs,null).getPropertyValue("color")})},d.render=function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("span",{ref:function(t){return e.cp=t},className:"color-primary"}),n.a.createElement("span",{ref:function(t){return e.cs=t},className:"color-secondary"}),n.a.createElement("svg",{width:"100%",height:"150",viewBox:"0 0 100 100",preserveAspectRatio:"xMidYMid slice"},n.a.createElement("linearGradient",{id:"primaryGradient"+this._id,x1:"0",x2:"100%",y1:"0",y2:"0",gradientUnits:"userSpaceOnUse"},n.a.createElement("stop",{stopColor:this.state.colorPrimary,offset:"0%"}),n.a.createElement("stop",{stopColor:this.state.colorSecondary,offset:"100%"})),n.a.createElement("text",{textAnchor:"middle",x:"50",y:"52",fill:"url(#primaryGradient"+this._id+")"},this.props.title)))},o=r,l=[{key:"counter",get:function(){return r._counter=(r._counter||0)+1,r._counter}}],(s=null)&&i(o.prototype,s),l&&i(o,l),r}(n.a.Component);t.a=o},eWDE:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("Bl7J"),o=a("uRzu"),s=a("cGQ7"),l=a("Wbzz"),d=a("10BB"),c=(a("9llV"),function(e){var t=e.pathContext,a=e.type;if(t.numPages>1){for(var r=[],i=1;i<=t.numPages;i++)r.push(n.a.createElement("li",{className:i===t.currentPage?"active":"",key:"PaginationItem"+i},n.a.createElement(l.a,{to:"/"+a+"/"+(1===i?"":i),title:a.charAt(0).toUpperCase()+a.slice(1)+" - Page "+i,key:"PaginationItemA"+i},i)));return n.a.createElement("div",{className:"pagination"},n.a.createElement("ul",null,1!==t.currentPage&&n.a.createElement("li",null,n.a.createElement(l.a,{to:"/"+a+"/"+(t.currentPage-1==1?"":t.currentPage-1),title:"Previous Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(d.b,null)))),r,t.currentPage!==t.numPages&&n.a.createElement("li",null,n.a.createElement(l.a,{to:"/"+a+"/"+(t.currentPage+1),title:"Next Page"},n.a.createElement("span",{className:"icon"},n.a.createElement(d.c,null))))))}return n.a.createElement(n.a.Fragment,null)}),u=a("vrFN");a.d(t,"query",(function(){return p}));var f=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props.datas;return e.allMarkdownRemark.edges.length>0?n.a.createElement("section",{id:"blog",className:"container"},n.a.createElement("div",{className:"section-title"},n.a.createElement(s.a,{title:"BLOG"})),n.a.createElement(o.a,{data:e}),n.a.createElement(c,{pathContext:this.props.pathContext,type:"blog"})):n.a.createElement(n.a.Fragment,null)},r}(n.a.Component),p=(t.default=function(e){var t=e.data,a=e.pathContext;return n.a.createElement(i.a,null,n.a.createElement(u.a,{lang:"en",title:"Blog"}),n.a.createElement(f,{datas:t,pathContext:a}))},"1482536974")},uRzu:function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),i=a("Wbzz"),o=a("9eSz"),s=a.n(o),l=a("0EVa"),d=a("10BB");a("O0kv");var c=function(e){var t,a;function r(){return e.apply(this,arguments)||this}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.componentDidMount=function(){this.color=window.getComputedStyle(this.textSecondary,null).getPropertyValue("color"),this.textSecondary.querySelector("path").setAttribute("fill",this.color)},o.render=function(){var e=this;return n.a.createElement("div",{className:"item col s12 m6"},n.a.createElement("div",{className:"box"},n.a.createElement("div",{className:"image"},n.a.createElement(s.a,{fluid:this.props.data.node.frontmatter.image.childImageSharp.fluid}),n.a.createElement(i.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title,"aria-label":this.props.data.node.frontmatter.title,className:"overlay-link",style:{opacity:0}},this.props.data.node.frontmatter.title)),n.a.createElement("div",{className:"content"},n.a.createElement("h3",{className:"text-primary"},n.a.createElement(i.a,{to:this.props.data.node.fields.slug,title:this.props.data.node.frontmatter.title},this.props.data.node.frontmatter.title)),n.a.createElement("p",{className:"text-tertiary"},this.props.data.node.frontmatter.description),n.a.createElement("p",{className:"date text-secondary",ref:function(t){return e.textSecondary=t}},n.a.createElement("span",{className:"icon"},n.a.createElement(d.a,null)),n.a.createElement(l.a,{data:this.props.data.node.frontmatter.date})))))},r}(n.a.Component);t.a=function(e){var t=e.data.allMarkdownRemark.edges,a=[];return t.forEach((function(t,r){e.remove&&t.node.id===e.remove||a.push(n.a.createElement(c,{key:t.node.id,data:t}))})),n.a.createElement("div",{className:"row"},a)}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-84e2aa563423e159c139.js.map