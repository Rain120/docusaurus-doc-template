"use strict";(self.webpackChunkdocusaurus_doc_template=self.webpackChunkdocusaurus_doc_template||[]).push([[13],{895:function(e,t,a){a.d(t,{dK:function(){return n},_k:function(){return r},vc:function(){return l},rx:function(){return c},qo:function(){return s},Hk:function(){return u},Iz:function(){return o}});a(1336);var n=["en"],r=!1,l=null,c="a70120c7",s=8,u=50,o={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},6165:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(3366),r=a(7294),l=a(6010),c=a(3938),s=a(6742),u="sidebar_2ahu",o="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",m="sidebarItem_2UVv",d="sidebarItemLink_1RT6",f="sidebarItemLinkActive_12pM",g=a(4973);function _(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(u,"thin-scrollbar"),"aria-label":(0,g.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(o,"margin-bottom--md")},t.title),r.createElement("ul",{className:i},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:m},r.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:f},e.title))}))))}var h=["sidebar","toc","children"];var p=function(e){var t=e.sidebar,a=e.toc,s=e.children,u=(0,n.Z)(e,h),o=t&&t.items.length>0;return r.createElement(c.Z,u,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},o&&r.createElement("aside",{className:"col col--3"},r.createElement(_,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&r.createElement("div",{className:"col col--2"},a))))}},5776:function(e,t,a){a.r(t),a.d(t,{default:function(){return i}});var n=a(7294),r=a(6165),l=a(7211),c=a(3773),s="tag_21yA";function u(e){var t=e.letterEntry;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((function(e){return n.createElement("li",{key:e.permalink,className:s},n.createElement(l.Z,e))}))),n.createElement("hr",null))}var o=function(e){var t=e.tags,a=(0,c.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((function(e){return n.createElement(u,{key:e.letter,letterEntry:e})})))};var i=function(e){var t=e.tags,a=e.sidebar,l=(0,c.MA)();return n.createElement(r.Z,{title:l,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogTagsListPage,searchMetadatas:{tag:"blog_tags_list"},sidebar:a},n.createElement("h1",null,l),n.createElement(o,{tags:Object.values(t)}))}},7211:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r=a(6010),l=a(6742),c="tag_1Okp",s="tagRegular_3MiF",u="tagWithCount_1HU1";var o=function(e){var t,a=e.permalink,o=e.name,i=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(c,(t={},t[s]=!i,t[u]=i,t))},o,i&&n.createElement("span",null,i))}}}]);