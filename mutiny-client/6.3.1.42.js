(window.mutinyWpJsonp=window.mutinyWpJsonp||[]).push([[6],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"attachEvents",(function(){return A}));var r=n(10),o=n(1),i=n(7),s=n(38),a=n(29),c=n(0);var d=class{constructor(e,t){this.record=e,this.exporter=t,this.attached=!1,this.logger=new o.a("dom-event")}setup(){!this.attached&&this.shouldAttach()&&(this.attach(),this.attached=!0)}teardown(){if(this.logger.info("Attempting to tear down DomEvent",this.record),this.detach())return this.logger.info(`Removed ${this.record.listener_type} event listener from ${this.record.selector}`),void(this.attached=!1);this.logger.debug("Could not detach DOM event "+this.record)}};var u=class extends d{constructor(e,t,n){super(e,t),this.record=e,this.exporter=t,this.logger=new o.a("dom-event"),this.element=n||(e.selector?document.querySelector(e.selector):null)}attach(){var e;const{selector:t}=this.record,n=this.listenerType();this.element?this.shouldAttach()&&(null===(e=this.element)||void 0===e||e.addEventListener(n,this.listener.bind(this)),this.attached=!0):this.logger.error(`Attempted to attach ${n} event to ${t}, but no record exists`)}shouldAttach(){return!!this.element||(this.logger.info("Attempted to attach listener but could not find target element",this.record),!1)}listenerType(){return this.record.listener_type}detach(){return this.element?(this.element.removeEventListener(this.record.listener_type,this.listener),!0):(this.logger.error("No element to remove listener from",this.record,this.element),!1)}};var h=class extends u{constructor(e,t,n){super(e,t,n),this.record=e}listener(e){const{conversion_configuration_id:t}=this.record;this.exporter.track(r.a.Conversion,{conversionConfigurationId:t,formData:{}})}};var l=class extends u{constructor(e,t,n,r){super(e,t,r),this.record=e,this.userData=n}listener(e){const{value:t}=e.target;this.userData.set(this.record.data.store_key,t)}shouldAttach(){return!0}};const f=e=>e.data.event&&"calendly.event_scheduled"===e.data.event;var m=class extends h{constructor(e,t){super(e,t,window),this.record=e}listener(e){e instanceof MessageEvent&&f(e)&&super.listener(e)}listenerType(){return"message"}},v=n(80),p=n(81),g=n(33),w=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const b=e=>w(void 0,void 0,void 0,(function*(){const t=yield Object(p.a)();t.on(v.a.EmailCaptured,Object(g.a)(e,v.a.EmailCaptured)),t.on(v.a.PhoneCaptured,Object(g.a)(e,v.a.PhoneCaptured)),t.on(v.a.MeetingBooked,Object(g.a)(e,v.a.MeetingBooked))})),y=e=>b((e=>(t,n)=>{switch(t){case v.a.EmailCaptured:e.track(r.a.Conversion,{formData:Object.assign(Object.assign({},n),{name:"[Drift] Email Captured"})});break;case v.a.PhoneCaptured:e.track(r.a.Conversion,{formData:Object.assign(Object.assign({},n),{name:"[Drift] Phone Captured"})});break;case v.a.MeetingBooked:e.track(r.a.Conversion,{formData:Object.assign(Object.assign({},n),{name:"[Drift] Meeting Booked"})})}})(e));class k extends d{constructor(e,t){super(e,t),this.record=e}attach(){b(this.listener.bind(this))}shouldAttach(){return!0}detach(){return!0}listener(e,t){this.attached&&this.exporter.track(r.a.Conversion,{conversionConfigurationId:this.record.conversion_configuration_id,formData:t})}}function C(e){return"hsFormCallback"===e.data.type&&"onFormSubmitted"===e.data.eventName}class _ extends h{constructor(e,t){super(e,t,window),this.record=e}listener(e){e instanceof MessageEvent&&C(e)&&super.listener(e)}listenerType(){return"message"}}var x=n(52);var O=class extends h{listener(e){const{conversion_configuration_id:t}=this.record,{target:n}=e;if(n&&n instanceof HTMLAnchorElement&&"_blank"!==n.target&&!Object(i.f)(Object(i.g)(n.href),window.location)){const{href:o}=n;Object(a.c)(e,()=>(this.exporter.track(r.a.Conversion,{conversionConfigurationId:t,formData:{}}),this.exporter.forceFlushQueues()),()=>Object(x.a)(o),5e3)}else super.listener(e)}};var D=class extends d{constructor(e,t){super(e,t),this.record=e}attach(){const{conversion_configuration_id:e}=this.record;this.exporter.track(r.a.Conversion,{conversionConfigurationId:e,formData:{}})}shouldAttach(){return Object(i.f)(this.record,window.location)}detach(){return!0}};var j=(e,t,n)=>{if(e.event_type===c.g.Data)return new l(e,n,t);if((e=>e.event_type===c.g.Conversion)(e)){const{listener_type:t}=e;switch(t){case c.o.PageView:return new D(e,n);case c.o.Click:return new O(e,n);case c.o.Calendly:return new m(e,n);case c.o.Drift:return new k(e,n);case c.o.Hubspot:return new _(e,n);default:return new h(e,n)}}throw new Error(`Unknown DOMUpdate type '${e}'`)},E=n(82);const A=(e,t)=>{const n=new o.a("entry"),c=Object(i.c)(e.dom_events,t.preview);var d;c.length>0?n.info("DOM Events:",c):n.info("No DOM Events to attach"),e.config.track_calendly&&(d=t.exporter,window.addEventListener("message",e=>{if(f(e)){const{hostname:e,pathname:t}=window.location;d.track(r.a.Conversion,{formData:{name:`[Calendly] Meeting Booked (${e}${t})`}})}})),e.config.track_drift&&y(t.exporter),e.config.track_hubspot&&function(e){window.addEventListener("message",t=>{C(t)&&e.track(r.a.Conversion,{formData:{name:"[HubSpot] Form Submitted"}})})}(t.exporter);const u=new s.a(!1,[],c.map(e=>j(e,t.userDataStore.getWriteableStore(),t.exporter)),"event-renderer");if(u.onRender(()=>Object(E.a)(e,t.visitorToken)),e.config.track_forms){n.info("Attaching intercepting form listener to all forms on the page");const{href:o}=window.location;if(!e.config.track_forms_url_regex||new RegExp(e.config.track_forms_url_regex).test(o)){const e=(e=>t=>{const{hostname:n,pathname:o}=window.location,i=t.defaultPrevented;t.preventDefault(),Object(a.c)(t,()=>e.track(r.a.Conversion,{formData:{name:`Form submitted on ${n}${o}`}}),()=>{e.forceFlushQueues(),i||t.target.submit()},750)})(t.exporter);u.onRender(()=>{for(const t of Array.from(document.querySelectorAll("form")))t.removeEventListener("submit",e),t.addEventListener("submit",e)})}}u.renderAsync()}},80:function(e,t,n){"use strict";var r;n.d(t,"a",(function(){return r})),function(e){e.Ready="ready",e.EmailCaptured="emailCapture",e.PhoneCaptured="phoneCapture",e.MeetingBooked="scheduling:meetingBooked"}(r||(r={}))},81:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c}));var r=n(80),o=n(12),i=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))};const s=e=>!!(null==e?void 0:e.on);const a=()=>i(void 0,void 0,void 0,(function*(){if(s(window.drift))return window.drift;const e=yield Object(o.b)(window,"drift");return yield Object(o.b)(e,"on"),function(e){if(!s(e))throw new Error("Expected the Drift client to be initialized but it is not")}(window.drift),window.drift})),c=()=>i(void 0,void 0,void 0,(function*(){const e=yield a();return new Promise(t=>{e.on(r.a.Ready,e=>{t(e)})})}))},82:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return c}));var r=n(1),o=n(4),i=n(9),s=n(7);function a(e,t,n,r){const{tracked_domains:o}=e;return!!o&&Object(i.b)(o,e=>{const{_mv:o}=Object(s.h)(n);return t.includes(e)&&!window.location.href.includes(e)&&o!==r})}function c(e,t){const n=new r.a("cross-domain-tracker"),{tracked_domains:i}=e.config;n.info("Checking to attach for",i),i&&(n.info("Queuing timeout",i),setTimeout(()=>{n.info("Attaching cross domain tracker");for(const r of Array.prototype.slice.call(document.querySelectorAll("a")))a(e.config,r.href,r.search,t)&&(n.info("Adding param to",r),r.href=Object(s.a)(r.href,o.j,t))},0))}}}]);