(window.mutinyDevelopmentWpJsonp=window.mutinyDevelopmentWpJsonp||[]).push([[7],{51:function(e,t,n){"use strict";n.d(t,"e",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return p})),n.d(t,"b",(function(){return h})),n.d(t,"a",(function(){return m}));var i=n(35),r=n(0),s=n(4),o=n(13),a=n(10),c=n(3);const d=(e,t)=>Object(c.b)(e,{[i.a]:r.c.AssetViewer,[i.h]:null==t?void 0:t.sessionToken,[i.i]:null==t?void 0:t.visitorToken}),l=(e,t)=>({assetCtaText:e.asset.cta_text,assetDescription:e.asset.description,assetId:e.asset.id,assetImageUrl:e.asset.image_url,assetTitle:e.asset.title,assetUrl:d(e.asset.url,t),eventId:e.event_id}),u=()=>{var e;window.parent!==window&&window.parent.postMessage({type:r.i.AssetViewerLoaded,height:(null===(e=document.body)||void 0===e?void 0:e.clientHeight)||0},"*")},p=()=>{window.setInterval(u,1e4)},h=()=>{const e=Object(s.a)("style");e.nonce=Object(o.a)(),e.innerHTML="\n    body::-webkit-scrollbar {\n      display: none;\n    };\n\n    body {\n      overflow-style: none;\n      scrollbar-width: none;\n    };\n  ",Object(a.b)(document,"documentElement").then(t=>t.append(e))},m=()=>{const e=Object(s.a)("base");e.target="_parent";let t=!1;Object(a.b)(document,"head").then(n=>{t||(t=!0,n.append(e))}),Object(a.b)(document,"body").then(n=>{t||(t=!0,n.append(e))})}},64:function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"a",(function(){return r}));const i=e=>{"complete"===document.readyState?e():window.addEventListener("load",e)},r=e=>{window.location.assign(e)}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"initializeMutiny",(function(){return z}));n(67),n(63);var i=n(9),r=n(33),s=n(54),o=n(2),a=n(4),c=n(13);const d=new o.a("highlights");var l=n(0),u=n(51),p=n(64),h=n(5),m=n(8),y=n(18),g=n(61),f=function(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n};var v=n(6),x=n(41),b=n(3);const w="mutiny-custom-javascript";var S=n(56),j=n(17),O=n(60),_=n(55);class E{constructor(e,t,n,i,r){this.audienceSegment=e,this.webExperience=t,this.mutinyClientData=n,this.context=i,this.personalizeType=r,this.logger=new o.a("questionnaire-render"),this.preactContainerId="mutiny-preact-"+this.webExperience.id,this.stylesheet=this.mutinyClientData.stylesheets.find(({id:e})=>e===this.webExperience.component_stylesheet_id),this.stylesheetElementId=this.stylesheet&&"mutiny-stylesheet-"+this.stylesheet.id}attach(){return new Promise(e=>{requestAnimationFrame(()=>{Promise.all([n.e(1),n.e(3)]).then(n.bind(null,88)).then(({default:t})=>{n.e(4).then(n.bind(null,30)).then(({h:n,render:i})=>{let r=document.querySelector("#"+this.preactContainerId);if(r||(r=Object(a.a)("div"),r.setAttribute("id",this.preactContainerId),document.body.prepend(r)),this.stylesheet&&this.stylesheetElementId&&!document.querySelector("#"+this.stylesheetElementId)){const e=Object(a.a)("style");e.nonce=Object(c.a)(),e.setAttribute("id",this.stylesheetElementId),e.innerHTML=this.stylesheet.stylesheet,document.head.append(e),this.logger.info("Attaching component stylesheet",e)}return this.webExperience.questionnaire&&(this.logger.debug("Rendering component",this.webExperience.questionnaire),i(n(t,{audienceSegment:this.audienceSegment,context:this.context,personalizeType:this.personalizeType,questionnaire:this.webExperience.questionnaire,userData:this.context.userDataStore,webExperience:this.webExperience}),r),this.attachQuestionnaireCompleteHandler()),e(!1)})})})})}teardown(){const e=document.querySelector("#"+this.preactContainerId);if(e&&e.remove(),this.stylesheetElementId){const e=document.querySelector("#"+this.stylesheetElementId);e&&e.remove()}}attachQuestionnaireCompleteHandler(){document.addEventListener("mutiny:questionnaire-complete",()=>{const e=(t=this.mutinyClientData.audience_segments,n="person.questionnaire."+this.webExperience.questionnaire.key,t.filter(e=>e.web_experiences.some(e=>(e.data_dependencies||[]).some(e=>e.startsWith(n)))));var t,n;if(e.length>0)return this.logger.info("Found dependent segments to re-evaluate",e),D(R(e,this.context,{alwaysEvaluate:!0}),this.mutinyClientData,this.context);this.logger.info("Found no dependent segments")})}}n(45);var q=n(62);var C=new class{constructor(){var e,t,n,i,r;this.stylesheet=new CSSStyleSheet,document.adoptedStyleSheets=[...null!==(e=document.adoptedStyleSheets)&&void 0!==e?e:[],this.stylesheet],this.reset();const s=document.querySelector("style[data-mutiny-headless-styles]");let o=0;for(;(null!==(i=null===(n=null===(t=null==s?void 0:s.sheet)||void 0===t?void 0:t.cssRules)||void 0===n?void 0:n.length)&&void 0!==i?i:0)>0&&o++<100;)null===(r=null==s?void 0:s.sheet)||void 0===r||r.deleteRule(0)}attachExperience(e,t){for(const n of this.styleForExperience(e,t))this.stylesheet.insertRule(n,this.stylesheet.cssRules.length)}reset(){this.stylesheet.replaceSync(this.baseStyles())}setContext(e){this.context=e}getContext(){return this.context}baseStyles(){return"\n      @layer mutiny-headless-presentation, mutiny-headless-hider;\n    \n      @layer mutiny-headless-presentation {\n        mutiny-personalization > mutiny-variation[control] {\n          display: initial;\n        }\n  \n        mutiny-personalization > mutiny-variation:not([control]) {\n          display: none;\n        }\n      }\n    "}styleForExperience(e,t){return t?[`\n          @layer mutiny-headless-presentation {\n            mutiny-personalization > mutiny-variation[experience-id="${e}"][variation-id="${t}"] {\n              display: initial;  \n            }\n          }\n        `,`\n          @layer mutiny-headless-hider {\n            mutiny-personalization:has(mutiny-variation[experience-id="${e}"][variation-id="${t}"]) > mutiny-variation[control] {\n              display: none;\n            }\n\n            mutiny-personalization > mutiny-variation[experience-id="${e}"][variation-id="${t}"] ~ mutiny-variation {\n              display: none;\n            }\n          }\n        `]:[]}};function I(e,t,n,i,s){const d=new o.a("page-render"),u=Object(S.a)(e,t,n.userDataStore,i),p=u===l.u.Personalized;let h;const m=e.experience_type===l.j.Redirect&&e.redirect_url;if(e.experience_type===l.j.Render||e.experience_type===l.j.Block){const t=new _.a(p,e.dom_updates.map(e=>new q.a(e,n.userDataStore,n.exporter,n.preview)),[],"update-renderer",n.exporter);h=t.renderAsync(),d.info("Attaching state change event listener"),document.addEventListener(l.i.StateChange,()=>{d.info("Received state change event, tearing down DOMRenderer"),t.teardown()},{once:!0})}else if(e.experience_type===l.j.Headless)C.attachExperience(e.id,p?e.variation_key:void 0),h=Promise.resolve(!0);else if(e.experience_type===l.j.Questionnaire&&e.questionnaire)if(2===e.questionnaire.version){const i=new E(t,e,s,n,u);h=i.attach(),document.addEventListener(l.i.StateChange,()=>{d.info("Received state change event, tearing down QuestionnaireRenderer"),i.teardown()},{once:!0})}else n.exporter.track(r.a.Metric,{metricKey:"client.render.questionnaireV1",metricType:l.p.Increment}),h=Promise.resolve(!1);else m?(p||n.setRedirecting(!1),h=Promise.resolve(!0)):h=Promise.resolve(!1);return h.then(s=>{if(!i&&s&&n.exporter.track(r.a.ExperienceImpression,{audienceSegment:t,campaignAccountId:n.userDataStore.get(t.campaign_slug+".campaign_account_id"),experience:e,impressionType:u}),m&&p){const t=Object(j.c)(e.redirect_url,n.userDataStore);n.exporter.track(r.a.Metric,{metricKey:"client.render.redirect.time",metricType:l.p.Timing,value:performance.now()}),n.exporter.forceFlushQueues().finally(()=>{d.info("Executing redirect to "+t),window.location.replace(t)})}p&&function(e,t){const n=[w,e.id].join("-");if(e.custom_javascript&&!document.querySelector("#"+n)){const i=Object(a.a)("script");i.nonce=Object(c.a)(),i.setAttribute("type","text/javascript"),i.setAttribute("id",n),i.innerHTML=e.custom_javascript,document.head.append(i),t.info("Attaching global custom javascript")}}(e,d)}),Object(O.b)({experience:e,audienceSegment:t,impressionType:u}),h}function R(e,t,{async:n,alwaysEvaluate:i}){const{preview:r,userDataStore:a,clientMode:c}=t,d=new o.a("attach-experiences");d.info("Evaluating audienceSegments",e);const{activeSegments:l}=function({userDataStore:e,audienceSegments:t},n){var i,r;let o;const a=Object(m.c)(),c=null!==(i=null==a?void 0:a.experience_id)&&void 0!==i?i:e.get(s.b),d=null!==(r=null==a?void 0:a.variation_id)&&void 0!==r?r:e.get(s.c);return o=d&&!n?t.map(e=>{var{web_experiences:t}=e,n=f(e,["web_experiences"]);return Object.assign(Object.assign({},n),{web_experiences:t.filter(({variation_key:e})=>String(e)===String(d))})}):c&&!n?t.map(e=>{var{web_experiences:t}=e,n=f(e,["web_experiences"]);return Object.assign(Object.assign({},n),{web_experiences:t.filter(({id:e})=>String(e)===String(c))})}):t.filter(t=>Object(g.b)(t,e)).map(t=>{var{web_experiences:n}=t,i=f(t,["web_experiences"]);return Object.assign(Object.assign({},i),{web_experiences:n.filter(({condition:t})=>Object(y.b)(t,e))})}),{activeSegments:o}}({audienceSegments:e,userDataStore:a},i);l.length>0&&d.info("Found activeSegments",l);return l.reduce((e,t)=>e.concat(Object(b.c)(t.web_experiences,r).filter(e=>void 0===n||n===e.async).map(e=>({audienceSegment:t,experience:e})).filter(e=>Object(x.a)(e,c))),[])}function D(e,t,n){const{preview:i}=n,r=new o.a("attach-experiences");e.length>0?r.info("Found activeSegments for URL",e):r.info("Did not find any active segments for URL",e);const s=(e,t)=>e.experience.priority-t.experience.priority,a=e.filter(({experience:{global:e},audienceSegment:{campaign_slug:t}})=>!e&&t).sort(s),c=e.filter(({experience:{global:e},audienceSegment:{campaign_slug:t}})=>!e&&!t),d=c.filter(({experience:{experience_type:e}})=>e===l.j.Redirect).sort(s),u=c.filter(({experience:{experience_type:e,questionnaire:t}})=>e===l.j.Questionnaire&&t&&t.questionnaire_type!==l.x.ExitIntentModal).sort(s),p=c.filter(({experience:{experience_type:e}})=>e===l.j.Block),h=c.filter(({experience:{experience_type:e,questionnaire:t}})=>e===l.j.Questionnaire&&t&&t.questionnaire_type===l.x.ExitIntentModal).sort(s),m=e.filter(({experience:{questionnaire:e,global:t}})=>t&&(0===u.length||(null==e?void 0:e.questionnaire_type)!==u[0].experience.questionnaire.questionnaire_type)&&(0===h.length||(null==e?void 0:e.questionnaire_type)!==h[0].experience.questionnaire.questionnaire_type)),y=c.filter(({experience:{experience_type:e}})=>[l.j.Render,l.j.Headless].includes(e)).sort(s);e.length>0&&(r.info("campaignSegments",a),r.info("redirectSegments",d),r.info("renderOrHeadlessSegments",y),r.info("questionnaireSegments",u),r.info("exitIntentSegments",h),r.info("concurrentSegments",m));let g=[];return a.length>0?g=[a[0],...m]:d.length>0?(g=[d[0]],n.setRedirecting(!0)):g=[...p,y[0],u[0],h[0],...m].filter(v.c),g.length>0?r.info("Found segmentsToRender",g):r.info("Did not find any segmentsToRender",g),Promise.all(g.map(({experience:e,audienceSegment:r})=>I(e,r,n,i,t))).then(e=>e.every(v.c))}function k(e,t,n){return D(R(e.audience_segments,t,{async:n}),e,t)}var T=n(50),M=n(16),H=function(e,t,n,i){return new(n||(n=Promise))((function(r,s){function o(e){try{c(i.next(e))}catch(e){s(e)}}function a(e){try{c(i.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}c((i=i.apply(e,t||[])).next())}))};function A(e,t){t.clientMode===l.c.AssetViewer?Object(T.a)(t):t.exporter.page();const i=t.ensureShouldRender(()=>k(e,t,!1),"Skipping attachExperiences for synchronous experiences");return Object(u.d)(),n.e(8).then(n.bind(null,91)).then(({attachEvents:n})=>n(e,t)),i}function P(e){const t=e.timer.getTimeInMilliseconds();t&&e.exporter.track(r.a.Time,{timeInSeconds:t/1e3}),e.exporter.forceFlushQueues()}const z=Object(i.d)((e,t,n)=>H(void 0,void 0,void 0,(function*(){var i,r;const m=new o.a("index"),y=null===(r=null===(i=window.mutiny)||void 0===i?void 0:i.client)||void 0===r?void 0:r._queue;(null==y?void 0:y.defaultOptOut)&&(Object(h.b)(),delete y.defaultOptOut),(null==y?void 0:y.optOut)&&(Object(h.f)(),delete y.optOut);const g=Object(s.d)(e,t,n);if(document.documentElement.dataset.mutinyLoaded)return m.error("Client data or initializeMutiny function took too long to download. Skipping personalization."),void g.apiClient.trackMetric({metricKey:"client.client_data.fetch.timed_out",metricType:l.p.Increment},!0);if(g.apiClient.trackMetric({metricKey:"client.attached",metricType:l.p.Increment},!0),g.onPageHide(()=>g.apiClient.trackMetric({metricKey:"client.detached",metricType:l.p.Increment},!0)),g.shouldExitBeforeUserDataFetch())return m.info("Exiting before user data fetch"),void t.removeHider(!0,"Exiting early before user data fetch");if(function(e){if(!e.highlightPersonalizations)return;const t=Object(a.a)("style");t.type="text/css",t.id="mutiny-highlight-styles",t.nonce=Object(c.a)(),t.append(document.createTextNode('\n      [data-mutiny-root="true"] {\n        outline: 3px solid rgba(150, 15, 223, 0.5);\n      }\n    ')),document.head.append(t),d.info("attached highlight styles",t)}(g),yield g.ensureShouldRender(()=>g.userDataClient.getUserData(),"Skipping user data request"),g.shouldExitAfterUserDataFetch())return m.info("Exiting after user data fetch"),void t.removeHider(!0,"Exiting early after user data fetch");g.clientMode===l.c.AssetViewer&&(Object(u.a)(),Object(u.b)()),g.exporter.identify(),Object(p.b)(()=>{Object(u.d)(),Object(u.c)()}),g.stateChangeHandler.onChange(()=>{P(g),g.timer.restart(),g.timer.setMarker(window.location.toString())}),g.onPageHide(()=>P(g));const f=g.ensureShouldRender(()=>function(e,t){return Object(x.d)(e)?t.userDataClient.getAsyncUserData():Promise.resolve()}(e,g),"Skipping async user data request");g.stateChangeHandler.onChange(()=>g.events.trigger(l.i.StateChange)),g.stateChangeHandler.onChange(()=>{C.reset(),C.setContext(g),A(e,g),g.ensureShouldRender(()=>k(e,g,!0),"Skipping attaching async experiences")}),A(e,g).then(()=>{g.isRedirecting()||t.removeHider(!0,"initial render for synchronous experiences has finished")}).catch(e=>{throw t.removeHider(!1,"synchronous render promise failed"),e}),g.ensureShouldRender(()=>f.then(()=>k(e,g,!0)),"Skipping attachExperiences for async experiences"),g.ensureShouldRender(()=>Object(M.c)(g.exporter),"Skipping reporting real user metrics")})))}}]);