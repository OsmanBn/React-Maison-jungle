(this["webpackJsonpla-maison-jungle"]=this["webpackJsonpla-maison-jungle"]||[]).push([[0],[,,,,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),r=a(8),i=a.n(r),s=(a(13),a(2)),o=(a(14),a(0));var l=function(e){var t=e.children;return Object(o.jsx)("div",{className:"lmj-banner",children:t})};a(16);var u=function(e){var t=e.cart,a=e.updateCart,n=(e.displayedPlant,e.updateDisplayedPlant,Object(c.useState)(!0)),r=Object(s.a)(n,2),i=r[0],l=r[1],u=t.reduce((function(e,t){return e+t.amount*t.price}),0);return Object(c.useEffect)((function(){document.title="J'aurai ".concat(u," $ \xe0 acheter")}),[u]),Object(c.useEffect)((function(){localStorage.setItem("panier",JSON.stringify(t))}),[t]),i?Object(o.jsxs)("div",{className:"lmj-cart",children:[Object(o.jsx)("button",{onClick:function(){return l(!1)},children:"Fermer"}),Object(o.jsx)("h2",{children:"Panier"}),t.map((function(e,t){var a=e.name,c=e.price,n=e.amount;return Object(o.jsxs)("div",{children:[a," ",c,"$ * ",n]},"".concat(a,"-").concat(t))})),Object(o.jsxs)("h3",{children:["Total: ",u," $"]}),Object(o.jsx)("button",{onClick:function(){return a([])},children:"Vider le panier"})]}):Object(o.jsx)("div",{className:"lmj-cart-closed",children:Object(o.jsx)("button",{className:"lmj-cart-toggle-button",onClick:function(){return l(!0)},children:"Ouvrir le panier"})})};a(17);var j=function(){var e=Object(c.useState)(""),t=Object(s.a)(e,2),a=t[0],n=t[1];return Object(o.jsxs)("footer",{className:"lmj-footer",children:[Object(o.jsx)("div",{className:"lmj-footer-elem",children:"Pour les passionn\xe9\xb7e\xb7s de plantes \ud83c\udf3f\ud83c\udf31\ud83c\udf35"}),Object(o.jsx)("div",{className:"lmj-footer-elem",children:"Laissez-nous votre mail :"}),Object(o.jsx)("input",{type:"text",name:"email",onChange:function(e){return n(e.target.value)},onBlur:function(){return function(e){e.includes("@")||alert("Attention il n'y a pas d'@, ceci n'est pas une addresse valide!!")}(a)}})]})},d=a(6),g=a.p+"static/media/sun.26fb5ace.svg",m=a.p+"static/media/water.cceb486f.svg",h={1:"peu",2:"mod\xe9r\xe9ment",3:"beaucoup"};var b=function(e){var t=e.scaleValue,a=e.careType,c="light"===a?Object(o.jsx)("img",{src:g,alt:"sun-icon"}):Object(o.jsx)("img",{src:m,alt:"water-icon"});return Object(o.jsx)("div",{onClick:function(){return alert("Cette plante requiert ".concat(h[t]," ").concat("light"===a?"de lumi\xe8re":"d'arrosage"))},children:[1,2,3].map((function(e){return t>=e?Object(o.jsx)("span",{children:c},e.toString()):null}))})};a(18);var O=function(e){var t=e.name,a=e.cover,c=e.id,n=e.light,r=e.water;return Object(o.jsxs)("li",{className:"lmj-plant-item",onClick:function(){return function(e){return console.log("CA A CLIQUE"+{name:e})}(t)},children:[Object(o.jsx)("img",{className:"lmj-plant-item-cover",src:a,alt:"".concat(t," cover")}),t,Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{careType:"water",scaleValue:r}),Object(o.jsx)(b,{careType:"light",scaleValue:n})]})]},c)},p=(a(7),a.p+"static/media/monstera.6257bc6b.jpg"),A=[{name:"monstera",category:"classique",id:"1ed",isBestSale:!0,light:2,water:3,cover:p,price:15},{name:"ficus lyrata",category:"classique",id:"2ab",light:3,water:1,cover:p,price:16},{name:"pothos argent\xe9",category:"classique",id:"3sd",light:1,water:2,cover:p,price:30},{name:"yucca",category:"classique",id:"4kk",light:3,water:1,cover:p,price:12},{name:"olivier",category:"ext\xe9rieur",id:"5pl",light:3,water:1,cover:p,price:10},{name:"g\xe9ranium",category:"ext\xe9rieur",id:"6uo",light:2,water:2,cover:p,price:15},{name:"basilique",category:"ext\xe9rieur",id:"7ie",isBestSale:!0,light:2,water:3,cover:p,price:15},{name:"aloe",category:"plante grasse",id:"8fp",light:2,water:1,cover:p,price:16},{name:"succulente",category:"plante grasse",id:"9vn",light:2,water:1,cover:p,price:10}];var x=function(e){e.displayedPlant;var t=e.updateDisplayedPlant,a=A.reduce((function(e,t){return e.includes(t.category)?e:e.concat(t.category)}),[]);return Object(o.jsxs)("div",{class:"lmj-categories-select",children:[Object(o.jsx)("p",{children:"Pick a plant category : "}),Object(o.jsx)("br",{}),Object(o.jsx)("select",{onChange:function(e){return function(e){var a=A.filter((function(t){return t.category===e}));return t(a),console.log("cat"),console.log(a)}(e.target.value)},children:a.map((function(e){return Object(o.jsx)("option",{children:e},e)}))})]})};var C=function(e){var t=e.cart,a=e.updateCart,c=e.displayedPlant,n=e.updateDisplayedPlant;return Object(o.jsxs)("div",{children:[Object(o.jsx)(x,{displayedPlant:c,updateDisplayedPlant:n}),Object(o.jsx)("ul",{className:"lmj-plant-list",children:c.map((function(e){var c=e.name,n=e.id,r=e.cover,i=e.light,s=e.water,l=e.price;return Object(o.jsxs)("div",{children:[Object(o.jsx)(O,{name:c,cover:r,light:i,water:s}),Object(o.jsx)("button",{onClick:function(){return function(e,c){var n=t.find((function(t){return t.name===e}));if(n){var r=t.filter((function(t){return t.name!==e}));a([].concat(Object(d.a)(r),[{name:e,price:c,amount:n.amount+1}]))}else a([].concat(Object(d.a)(t),[{name:e,price:c,amount:1}]))}(c,l)},children:"Ajouter"})]},n)}))})]})};a(19);var v=function(){var e=Object(c.useState)((function(){var e=localStorage.getItem("panier");return JSON.parse(e)||[]})),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),d=i[0],g=i[1];return Object(o.jsxs)("div",{children:[Object(o.jsxs)(l,{children:[Object(o.jsx)("img",{src:"data:image/png;base64,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",alt:"La maison jungle",className:"lmj-logo"}),Object(o.jsx)("h1",{className:"lmj-title",children:"La maison jungle"})]}),Object(o.jsxs)("div",{className:"body",children:[Object(o.jsx)(u,{cart:a,updateCart:n,displayedPlant:d,updateDisplayedPlant:g}),Object(o.jsx)(C,{cart:a,updateCart:n,displayedPlant:d,updateDisplayedPlant:g})]}),Object(o.jsx)(j,{})]})};i.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(v,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d9704755.chunk.js.map