(window.mutinyDevelopmentWpJsonp=window.mutinyDevelopmentWpJsonp||[]).push([[5],{60:function(n,e,t){"use strict";t.r(e);var i=t(18),o=t(8);window.mutinyEditor=Object.assign(Object.assign({},window.mutinyEditor),{wrapQuestionnaire:function(n,e,t,r={}){if(2===n.version)return function(n,e,t,r={}){const s=new o.g(r,new i.a).getWriteableStore();return new class{updateComponent(i){document.dispatchEvent(new CustomEvent("mutiny:questionnaire-container:update",{detail:{questionnaire:n,webExperience:e,audienceSegment:t,userData:s,options:i}}))}}}(n,e,t,r);throw new Error("V1 Questionnaires are no longer supported.")}})}}]);