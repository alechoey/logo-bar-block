(window.mutinyWpJsonp=window.mutinyWpJsonp||[]).push([[2],{73:function(n,t,e){"use strict";e.r(t);var o,r=e(0),i=e(6),u=e(49),c=e(47),a=e(46),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),f=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},p=function(){function n(){this.forceFlushQueues=function(){return Promise.resolve()}}return n.prototype.identify=function(){},n.prototype.page=function(){},n.prototype.track=function(){},n}(),l=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.qualifiesQuestionnaire=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(u.a),y=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.qualifiesQuestionnaire=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(c.a),d=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.qualifiesQuestionnaire=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(a.a);window.mutinyEditor=f({},window.mutinyEditor||{},{wrapQuestionnaire:function(n,t){return void 0===t&&(t={}),function(n,t,e){switch(n.questionnaire_type){case r.m.FAB:return new l(n,t,e,void 0);case r.m.Modal:return new y(n,t,e,void 0);case r.m.TopBar:return new d(n,t,e,void 0);default:throw new Error("Unknown Questionnaire type '"+n.questionnaire_type+"'")}}(f({},n,{hold_out:1}),new i.d(t).getWriteableStore(),new p)}})}}]);