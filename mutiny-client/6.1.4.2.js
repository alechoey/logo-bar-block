(window.mutinyWpJsonp=window.mutinyWpJsonp||[]).push([[6],{102:function(e,t,n){"use strict";n.r(t);var o,i=n(0),r=n(1),a=n(77),u=(o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),p=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.state={},t.handleUpdate=function(e){var n=e.detail,o=n.questionnaire,i=n.webExperience,r=n.audienceSegment,a=n.userData,u=n.options;t.setState({questionnaire:o,webExperience:i,audienceSegment:r,userData:a,options:u})},t}return u(t,e),t.prototype.componentDidMount=function(){document.addEventListener("mutiny:questionnaire-container:update",this.handleUpdate)},t.prototype.componentWillUnmount=function(){document.removeEventListener("mutiny:questionnaire-container:update",this.handleUpdate)},t.prototype.render=function(){var e=this.state,t=e.questionnaire,n=e.userData,o=e.options,u=e.webExperience,p=e.audienceSegment;if(t&&n&&u&&p)return Object(i.h)(a.default,{questionnaire:t,webExperience:u,audienceSegment:p,userData:n,personalizeType:r.t.Personalized,options:o})},t}(i.Component);t.default=p}}]);