"use strict";(self.webpackChunkdocusaurus_doc_template=self.webpackChunkdocusaurus_doc_template||[]).push([[920],{895:function(e,t,n){n.d(t,{dK:function(){return r},_k:function(){return u},vc:function(){return a},rx:function(){return c},qo:function(){return o},Hk:function(){return s},Iz:function(){return l}});n(1336);var r=["en"],u=!1,a=null,c="a70120c7",o=8,s=50,l={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},7731:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var r=n(5861),u=n(7757),a=n.n(u),c=n(7294),o=n(2263),s=n(3938),l=n(9105),i=n(6742),m=n(5977),f=n(412);var h=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,o.Z)().siteConfig.baseUrl;return{searchValue:f.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var r=new URLSearchParams(t.search);n?r.set("q",n):r.delete("q"),e.replace({search:r.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},d=n(22),_=n(206),p=n(2539),v=n(9481),E=n(1073),g=n(4041),S=n(7365);function w(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var y="searchQueryInput_36Gj",k="searchResultItem_3Ppn",I="searchResultItemPath_DHCY",b="searchResultItemSummary__doj";function C(e){var t=e.searchResult,n=t.document,r=t.type,u=t.page,a=t.tokens,o=t.metadata,s=0===r,l=2===r,m=(s?n.b:u.b).slice(),f=l?n.s:n.t;return s||m.push(u.t),c.createElement("article",{className:k},c.createElement("h2",null,c.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:l?(0,p.C)(f,a):(0,v.o)(f,(0,E.m)(o,"t"),a,100)}})),m.length>0&&c.createElement("p",{className:I},m.join(" \u203a ")),l&&c.createElement("p",{className:b,dangerouslySetInnerHTML:{__html:(0,v.o)(n.t,(0,E.m)(o,"t"),a,100)}}))}var P=function(){var e=(0,o.Z)().siteConfig.baseUrl,t=h(),n=t.searchValue,u=t.updateSearchPath,i=(0,c.useState)(n),m=i[0],f=i[1],p=(0,c.useState)(),v=p[0],E=p[1],k=(0,c.useState)(),I=k[0],b=k[1],P=(0,c.useMemo)((function(){return m?w(S.Iz.search_results_for,{keyword:m}):S.Iz.search_the_documentation}),[m]);(0,c.useEffect)((function(){u(m),v&&(m?v(m,(function(e){b(e)})):b(void 0))}),[m,v]);var R=(0,c.useCallback)((function(e){f(e.target.value)}),[]);return(0,c.useEffect)((function(){n&&n!==m&&f(n)}),[n]),(0,c.useEffect)((function(){function t(){return(t=(0,r.Z)(a().mark((function t(){var n,r,u;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,d.w)(e);case 2:n=t.sent,r=n.wrappedIndexes,u=n.zhDictionary,E((function(){return(0,_.v)(r,u,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),c.createElement(s.Z,{title:P},c.createElement(l.Z,null,c.createElement("meta",{property:"robots",content:"noindex, follow"})),c.createElement("div",{className:"container margin-vert--lg"},c.createElement("h1",null,P),c.createElement("input",{type:"search",name:"q",className:y,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!v&&m&&c.createElement("div",null,c.createElement(g.Z,null)),I&&(I.length>0?c.createElement("p",null,w(1===I.length?S.Iz.count_documents_found:S.Iz.count_documents_found_plural,{count:I.length})):c.createElement("p",null,S.Iz.no_documents_were_found)),c.createElement("section",null,I&&I.map((function(e){return c.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);