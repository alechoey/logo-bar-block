(window.mutinyWpJsonp=window.mutinyWpJsonp||[]).push([[2],{70:function(n,t,e){"use strict";e.r(t);var o,r=e(0),u=e(6),i=e(47),c=e(46),p=e(45),s=(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])},function(n,t){function e(){this.constructor=n}o(n,t),n.prototype=null===t?Object.create(t):(e.prototype=t.prototype,new e)}),a=Object.assign||function(n){for(var t,e=1,o=arguments.length;e<o;e++)for(var r in t=arguments[e])Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n},f=function(){function n(){this.forceFlushQueues=function(){return Promise.resolve()}}return n.prototype.identify=function(){},n.prototype.page=function(){},n.prototype.track=function(){},n}(),l=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.shouldDisplay=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(i.a),y=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.shouldDisplay=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(c.a),d=function(n){function t(){var t=null!==n&&n.apply(this,arguments)||this;return t.shouldDisplay=function(){return!0},t.unmount=function(){return t.element&&document.body.removeChild(t.element)},t}return s(t,n),t}(p.a);window.mutinyEditor=a({},window.mutinyEditor||{},{wrapQuestionnaire:function(n,t){return void 0===t&&(t={}),function(n,t,e){switch(n.questionnaire_type){case r.j.FAB:return new l(n,t,e);case r.j.Modal:return new y(n,t,e);case r.j.TopBar:return new d(n,t,e);default:throw new Error("Unknown Questionnaire type '"+n.questionnaire_type+"'")}}(n,new u.c(t).getWriteableStore(),new f)}})}}]);