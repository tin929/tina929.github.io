System.register([],(function(e){"use strict";return{execute:function(){function r(e="Error loading data",r="Unable to render chart."){return`<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">\n  <svg\n    aria-hidden="true"\n    height="24"\n    viewBox="0 0 24 24"\n    version="1.1"\n    width="24"\n    class="octicon octicon-graph blankslate-icon"\n  >\n    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>\n    <path\n      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"\n    ></path>\n  </svg>\n\n  <h3 class="mb-1">${e}</h3>\n\n  <p>${r}</p>\n</div>`}class t extends HTMLElement{connectedCallback(){this.render()}static get observedAttributes(){return["series","error","loading"]}attributeChangedCallback(){this.handleAttributeChanged()}handleAttributeChanged(){this.render()}render(){if(this.error)return void(this.innerHTML=r(void 0,this.error));if(this.loading)return void(this.innerHTML='<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">\n  <svg\n    aria-hidden="true"\n    height="24"\n    viewBox="0 0 24 24"\n    version="1.1"\n    width="24"\n    class="octicon octicon-graph blankslate-icon"\n  >\n    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>\n    <path\n      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"\n    ></path>\n  </svg>\n\n  <h3 class="my-2">Loading <span class="AnimatedEllipsis"></span></h3>\n</div>');const e=this.series;if(!e)return void(this.innerHTML='<div class="blankslate color-bg-tertiary rounded-1 d-flex flex-column flex-items-center flex-justify-center height-full">\n  <svg\n    aria-hidden="true"\n    height="24"\n    viewBox="0 0 24 24"\n    version="1.1"\n    width="24"\n    class="octicon octicon-graph blankslate-icon"\n  >\n    <path d="M2.5 2.75a.75.75 0 00-1.5 0v18.5c0 .414.336.75.75.75H20a.75.75 0 000-1.5H2.5V2.75z"></path>\n    <path\n      d="M22.28 7.78a.75.75 0 00-1.06-1.06l-5.72 5.72-3.72-3.72a.75.75 0 00-1.06 0l-6 6a.75.75 0 101.06 1.06l5.47-5.47 3.72 3.72a.75.75 0 001.06 0l6.25-6.25z"\n    ></path>\n  </svg>\n\n  <h3 class="mb-1">No data available</h3>\n\n  <p>No results were returned.</p>\n</div>');if(!this.validateInput())throw this.innerHTML=r(void 0,Array.isArray(e)&&e.filter((e=>null===e[1])).length>0?"Data cannot contain null values":void 0),new n("Malformed input. Failed to render component");const i=e[0].reduce(((r,i,s)=>`${r}<th>${i}</th>${s===e[0].length-1?"</tr>":""}`),"<tr>");e.shift();const s=e.reduce(((r,i,s)=>r+i.reduce(((r,i,a)=>`${r}<td>${i}</td>${a===e[s].length-1?"</tr>":""}`),"<tr>")),"");this.innerHTML=`<table>${i}${s}</table>`}get series(){const e=this.getAttribute("series");return e?JSON.parse(decodeURI(e)):null}set series(e){e?this.setAttribute("series",encodeURI(JSON.stringify(e))):this.removeAttribute("series")}get error(){const e=this.getAttribute("error");return e?decodeURI(e):null}set error(e){e?this.setAttribute("error",encodeURI(e)):this.removeAttribute("error")}get loading(){return this.hasAttribute("loading")}set loading(e){e?this.setAttribute("loading",""):this.removeAttribute("loading")}validateInput(){let e=!0;const r=this.series;if(!r)return e;const i=r.slice(1);for(const s of i)if(0===s.length&&(e=!1),s.length!==r[0].length){e=!1;break}return e}}e("default",t);class n extends Error{constructor(e){super(e),this.name="SeriesTableError"}}window.customElements.get("series-table")||(window.SeriesTableElement=t,window.SeriesTableError=n,window.customElements.define("series-table",t))}}}));
//# sourceMappingURL=chunk-series-table-bab0404f.js.map