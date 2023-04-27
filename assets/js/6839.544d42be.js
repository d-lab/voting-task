"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[6839],{1938:function(e,t,a){a.d(t,{Z:function(){return _}});var r=a(8933),n=a(1987),l=a(1892),o=a(3414),i=a(845),s=a(2590),c=a(158),m="sidebar_qO4J",u="sidebarItemTitle_UtWj",d="sidebarItemList_JAtL",g="sidebarItem_oCoi",f="sidebarItemLink_ku6I",v="sidebarItemLinkActive_pdVA";function p(e){var t=e.sidebar;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.Z)(m,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.Z)(u,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.Z)(d,"clean-list")},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:g},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:f,activeClassName:v},e.title))})))))}var h=a(197);function E(e){var t=e.sidebar;return n.createElement("ul",{className:"menu__list"},t.items.map((function(e){return n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function b(e){return n.createElement(h.Zo,{component:E,props:e})}function P(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?n.createElement(b,{sidebar:t}):n.createElement(p,{sidebar:t}):null}var N=["sidebar","toc","children"];function _(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,N),c=t&&t.items.length>0;return n.createElement(o.Z,s,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(P,{sidebar:t}),n.createElement("main",{className:(0,l.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&n.createElement("div",{className:"col col--2"},a))))}},6482:function(e,t,a){a.d(t,{Z:function(){return A}});var r=a(1987),n=a(1892),l=a(2251),o=a(1244);function i(e){var t,a=e.children,n=e.className,i=(0,l.C)(),s=i.frontMatter,c=i.assets,m=(0,o.C)().withBaseUrl,u=null!=(t=c.image)?t:s.image;return r.createElement("article",{className:n,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&r.createElement("meta",{itemProp:"image",content:m(u,{absolute:!0})}),a)}var s=a(2590),c="title_oB_N";function m(e){var t=e.className,a=(0,l.C)(),o=a.metadata,i=a.isBlogPostPage,m=o.permalink,u=o.title,d=i?"h1":"h2";return r.createElement(d,{className:(0,n.Z)(c,t),itemProp:"headline"},i?u:r.createElement(s.Z,{itemProp:"url",to:m},u))}var u=a(158),d=a(3356),g="container_PHJ3";function f(e){var t,a=e.readingTime,n=(t=(0,d.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return r.createElement(r.Fragment,null,n(a))}function v(e){var t=e.date,a=e.formattedDate;return r.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function p(){return r.createElement(r.Fragment,null," \xb7 ")}function h(e){var t=e.className,a=(0,l.C)().metadata,o=a.date,i=a.formattedDate,s=a.readingTime;return r.createElement("div",{className:(0,n.Z)(g,"margin-vert--md",t)},r.createElement(v,{date:o,formattedDate:i}),void 0!==s&&r.createElement(r.Fragment,null,r.createElement(p,null),r.createElement(f,{readingTime:s})))}function E(e){return e.href?r.createElement(s.Z,e):r.createElement(r.Fragment,null,e.children)}function b(e){var t=e.author,a=e.className,l=t.name,o=t.title,i=t.url,s=t.imageURL,c=t.email,m=i||c&&"mailto:"+c||void 0;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",a)},s&&r.createElement(E,{href:m,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:l})),l&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(E,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},l))),o&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var P="authorCol_Sbou",N="imageOnlyAuthorRow_RrlO",_="imageOnlyAuthorCol_GnMn";function Z(e){var t=e.className,a=(0,l.C)(),o=a.metadata.authors,i=a.assets;if(0===o.length)return null;var s=o.every((function(e){return!e.name}));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",s?N:"row",t)},o.map((function(e,t){var a;return r.createElement("div",{className:(0,n.Z)(!s&&"col col--6",s?_:P),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=i.authorsImageUrls[t])?a:e.imageURL})}))})))}function k(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(Z,null))}var C=a(1583),T=a(4313);function w(e){var t=e.children,a=e.className,o=(0,l.C)().isBlogPostPage;return r.createElement("div",{id:o?C.blogPostContainerID:void 0,className:(0,n.Z)("markdown",a),itemProp:"articleBody"},r.createElement(T.Z,null,t))}var y=a(2979),I=a(3063),M=a(9375),B=a(8933),F=["blogPostTitle"];function L(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function O(e){var t=e.blogPostTitle,a=(0,B.Z)(e,F);return r.createElement(s.Z,(0,M.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),r.createElement(L,null))}var R="blogPostFooterDetailsFull__ter";function x(){var e=(0,l.C)(),t=e.metadata,a=e.isBlogPostPage,o=t.tags,i=t.title,s=t.editUrl,c=t.hasTruncateMarker,m=!a&&c,u=o.length>0;return u||m||s?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",a&&R)},u&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":m})},r.createElement(I.Z,{tags:o})),a&&s&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(y.Z,{editUrl:s})),m&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":u})},r.createElement(O,{blogPostTitle:i,to:t.permalink}))):null}function A(e){var t=e.children,a=e.className,o=(0,l.C)().isBlogPostPage?void 0:"margin-bottom--xl";return r.createElement(i,{className:(0,n.Z)(o,a)},r.createElement(k,null),r.createElement(w,null,t),r.createElement(x,null))}},2251:function(e,t,a){a.d(t,{C:function(){return i},n:function(){return o}});var r=a(1987),n=a(6936),l=r.createContext(null);function o(e){var t=e.children,a=e.content,n=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,r.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==n&&n});return r.createElement(l.Provider,{value:o},t)}function i(){var e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},3356:function(e,t,a){a.d(t,{c:function(){return c}});var r=a(1987),n=a(1109),l=["zero","one","two","few","many","other"];function o(e){return l.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,n.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function c(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}},5578:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var a=t.trailingSlash,r=t.baseUrl;if(e.startsWith("#"))return e;if(void 0===a)return e;var n,l=e.split(/[#?]/)[0],o="/"===l||l===r?l:(n=l,a?function(e){return e.endsWith("/")?e:e+"/"}(n):function(e){return e.endsWith("/")?e.slice(0,-1):e}(n));return e.replace(l,o)}},1583:function(e,t,a){var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.applyTrailingSlash=t.blogPostContainerID=void 0,t.blogPostContainerID="post-content";var n=a(5578);Object.defineProperty(t,"applyTrailingSlash",{enumerable:!0,get:function(){return r(n).default}})}}]);