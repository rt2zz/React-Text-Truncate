!function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,l=r;u=s=i=void 0,n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var i=u.get;return void 0===i?void 0:i.call(l)}var s=Object.getPrototypeOf(o);if(null===s)return void 0;e=s,t=a,r=l,n=!0}},i=r(2),s=n(i),c=r(3),f=n(c),p=function(e){function t(e){var r=this;o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).call(this,e),this.handleChange=function(e){r.setState({line:s["default"].findDOMNode(r.refs.line).value<<0,text:s["default"].findDOMNode(r.refs.text).value,truncateText:s["default"].findDOMNode(r.refs.truncateText).value,showTitle:s["default"].findDOMNode(r.refs.showTitle).checked})},this.state={text:"商動同的的都養西評興、即起續了起慢不時不見，角熱吸學長為麼西對自的到，治發言心，水頭期！例源以候王們社成！因才合計溫館常農在願是車一快產自毒春這壓明不體話小話產臉道的入大至升沒區坡園甚家令西家就德果特寫外知？為懷的家，基是院：史生在臺作於，下清雜高對當都質特。分再而一到起說陸常下成決養我日天壓票絕？任的洲票對縣著？太法防；生不才專日太運於麼；雜漸以！南突不人快遠費原體地子這重特風人大來看單來白直出親子重年？",line:2,truncateText:"...",showTitle:!0}}return a(t,e),l(t,[{key:"render",value:function(){var e=this.state;return s["default"].createElement("div",null,s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"line"},"Line"),s["default"].createElement("input",{className:"form-control",id:"line",ref:"line",onChange:this.handleChange,type:"number",value:this.state.line,min:1,required:!0})),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"text"},"Text"),s["default"].createElement("textarea",{className:"form-control",id:"text",ref:"text",onChange:this.handleChange,rows:10,value:this.state.text})),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",{htmlFor:"truncateText"},"TruncateText"),s["default"].createElement("input",{className:"form-control",id:"truncateText",ref:"truncateText",onChange:this.handleChange,type:"text",value:this.state.truncateText})),s["default"].createElement("div",{className:"checkbox"},s["default"].createElement("label",{htmlFor:"showTitle"},s["default"].createElement("input",{id:"showTitle",ref:"showTitle",onChange:this.handleChange,type:"checkbox",checked:this.state.showTitle}),"Show Title")),s["default"].createElement("div",{className:"form-group"},s["default"].createElement("label",null,"Result"),s["default"].createElement(f["default"],e)))}}]),t}(s["default"].Component);s["default"].render(s["default"].createElement(p,null),document.getElementById("container"))},function(e,t){e.exports=React},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),u=function(e,t,r){for(var n=!0;n;){var o=e,a=t,l=r;u=s=i=void 0,n=!1,null===o&&(o=Function.prototype);var u=Object.getOwnPropertyDescriptor(o,a);if(void 0!==u){if("value"in u)return u.value;var i=u.get;return void 0===i?void 0:i.call(l)}var s=Object.getPrototypeOf(o);if(null===s)return void 0;e=s,t=a,r=l,n=!0}},i=r(2),s=n(i),c=function(e){function t(){o(this,t),u(Object.getPrototypeOf(t.prototype),"constructor",this).apply(this,arguments)}return a(t,e),l(t,[{key:"componentWillMount",value:function(){var e=document.createElement("canvas"),t=document.createDocumentFragment();t.appendChild(e),this.canvas=e.getContext("2d")}},{key:"componentDidMount",value:function(){var e=this;this.scope=s["default"].findDOMNode(this.refs.scope);var t=window.getComputedStyle(this.scope),r=[];r.push(t["font-weight"]),r.push(t["font-style"]),r.push(t["font-size"]),r.push(t["font-family"]),this.canvas.font=r.join(" "),this.forceUpdate(),window.addEventListener("resize",function(){e.forceUpdate()})}},{key:"measureWidth",value:function(e){return this.canvas.measureText(e).width}},{key:"getRenderText",value:function(){var e=this.measureWidth(this.props.text),t=(this.measureWidth(this.props.truncateText),this.scope.offsetWidth);if(t>=e)return this.props.text;for(var r=0,n=this.props.text.length,o="",a=0,l=0,u=this.props.line;u--;){for(var i=u?"":this.props.truncateText;n>=r;)if(r++,o=this.props.text.substr(l,r),this.measureWidth(o+i)>t){a=o.lastIndexOf(" "),-1===a&&(a=r-1),l+=a;break}if(r>=n){l=n;break}r=0}return l===n?this.props.text:this.props.text.substr(0,l-1)+this.props.truncateText}},{key:"render",value:function(){var e="";this.refs.scope&&(e=this.getRenderText());var t={ref:"scope"};return this.props.title&&(t.title=this.props.text),s["default"].createElement("div",t,e)}}],[{key:"propTypes",value:{text:s["default"].PropTypes.string,truncateText:s["default"].PropTypes.string,line:s["default"].PropTypes.number,title:s["default"].PropTypes.bool},enumerable:!0},{key:"defaultProps",value:{text:"",truncateText:"...",line:1,title:!0},enumerable:!0}]),t}(s["default"].Component);t["default"]=c,e.exports=t["default"]}]);
//# sourceMappingURL=bundle.js.map