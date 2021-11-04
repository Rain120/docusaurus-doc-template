"use strict";(self.webpackChunkdocusaurus_doc_template=self.webpackChunkdocusaurus_doc_template||[]).push([[490],{895:function(e,t,a){a.d(t,{dK:function(){return r},_k:function(){return n},vc:function(){return l},rx:function(){return s},qo:function(){return o},Hk:function(){return m},Iz:function(){return c}});a(1336);var r=["en"],n=!1,l=null,s="a70120c7",o=8,m=50,c={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},6165:function(e,t,a){a.d(t,{Z:function(){return E}});var r=a(3366),n=a(7294),l=a(6010),s=a(3938),o=a(6742),m="sidebar_2ahu",c="sidebarItemTitle_2hhb",i="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",g="sidebarItemLinkActive_12pM",p=a(4973);function h(e){var t=e.sidebar;return 0===t.items.length?null:n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(c,"margin-bottom--md")},t.title),n.createElement("ul",{className:i},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:u},n.createElement(o.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:g},e.title))}))))}var f=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,o=e.children,m=(0,r.Z)(e,f),c=t&&t.items.length>0;return n.createElement(s.Z,m,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},c&&n.createElement("aside",{className:"col col--3"},n.createElement(h,{sidebar:t})),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},4884:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(7294),n=a(6010),l=a(3905),s=a(4973),o=a(6742),m=a(4996),c=a(3773),i=a(6845),u=a(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",p="blogPostDetailsFull_3kfx",h=a(7682),f="image_1yU8";var E=function(e){var t=e.author,a=t.name,n=t.title,l=t.url,s=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},s&&r.createElement(o.Z,{className:"avatar__photo-link avatar__photo",href:l},r.createElement("img",{className:f,src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(o.Z,{href:l,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),n&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},n)))},v="authorCol_1R69";function b(e){var t=e.authors,a=e.assets;return 0===t.length?r.createElement(r.Fragment,null):r.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var l;return r.createElement("div",{className:(0,n.Z)("col col--6",v),key:t},r.createElement(E,{author:Object.assign({},e,{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}var _=function(e){var t,a,f,E,v=(f=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return f(t,(0,s.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,N=e.children,Z=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,M=P.date,U=P.formattedDate,I=P.permalink,L=P.tags,x=P.readingTime,C=P.title,R=P.editUrl,B=P.authors,S=null!=(t=k.image)?t:Z.image,A=!y&&T,z=L.length>0;return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},(E=y?"h1":"h2",r.createElement("header",null,r.createElement(E,{className:d,itemProp:"headline"},y?C:r.createElement(o.Z,{itemProp:"url",to:I},C)),r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},r.createElement("time",{dateTime:M,itemProp:"datePublished"},U),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",v(x))),r.createElement(b,{authors:B,assets:k}))),S&&r.createElement("meta",{itemProp:"image",content:_(S,{absolute:!0})}),r.createElement("div",{className:"markdown",itemProp:"articleBody"},r.createElement(l.Zo,{components:i.Z},N)),(z||T)&&r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(a={},a[p]=y,a))},z&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":A})},r.createElement(h.Z,{tags:L})),y&&R&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:R})),A&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":z})},r.createElement(o.Z,{to:P.permalink,"aria-label":"Read more about "+C},r.createElement("b",null,r.createElement(s.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},9404:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(7294),n=a(6742),l=a(6165),s=a(4884),o=a(4973),m=a(3773);function c(e){var t,a=e.metadata,c=e.items,i=e.sidebar,u=a.allTagsPath,d=a.name,g=a.count,p=(t=(0,m.c2)().selectMessage,function(e){return t(e,(0,o.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),h=(0,o.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(g),tagName:d});return r.createElement(l.Z,{title:h,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogTagPostListPage,searchMetadatas:{tag:"blog_tags_posts"},sidebar:i},r.createElement("header",{className:"margin-bottom--xl"},r.createElement("h1",null,h),r.createElement(n.Z,{href:u},r.createElement(o.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),c.map((function(e){var t=e.content;return r.createElement(s.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},r.createElement(t,null))})))}},6146:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(7294),n=a(4973),l=a(7462),s=a(3366),o=a(6010),m="iconEdit_2_ui",c=["className"],i=function(e){var t=e.className,a=(0,s.Z)(e,c);return r.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,o.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},u=a(3773);function d(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:u.kM.common.editThisPage},r.createElement(i,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(6010),l=a(6742),s="tag_1Okp",o="tagRegular_3MiF",m="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,i=e.count;return r.createElement(l.Z,{href:a,className:(0,n.Z)(s,(t={},t[o]=!i,t[m]=i,t))},c,i&&r.createElement("span",null,i))}},7682:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(7294),n=a(6010),l=a(4973),s=a(7211),o="tags_2ga9",m="tag_11ep";function c(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(o,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(s.Z,{name:t,permalink:a}))}))))}}}]);