(window.mutinyWpJsonp=window.mutinyWpJsonp||[]).push([[3],{69:function(n,t,e){"use strict";e.r(t);var i=e(22),o=e(5),r=function(){return(r=Object.assign||function(n){for(var t,e=1,i=arguments.length;e<i;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o]);return n}).apply(this,arguments)};window.mutinyEditor=r(r({},window.mutinyEditor||{}),{wrapQuestionnaire:function(n,t,e,r){if(void 0===r&&(r={}),2===n.version)return function(n,t,e,r){void 0===r&&(r={});var u=new o.h(r,new i.a).getWriteableStore();return new(function(){function i(){}return i.prototype.updateComponent=function(i){document.dispatchEvent(new CustomEvent("mutiny:questionnaire-container:update",{detail:{questionnaire:n,webExperience:t,audienceSegment:e,userData:u,options:i}}))},i}())}(n,t,e,r);throw new Error("Unsupported questionnaire version '"+n.version+"'")}})}}]);