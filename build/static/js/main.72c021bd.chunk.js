(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,,,function(t,e,c){t.exports={item:"CartItem_item__3kL01",details:"CartItem_details__3heQ6",quantity:"CartItem_quantity__OThe7",price:"CartItem_price__2LLzl",itemprice:"CartItem_itemprice__Isl0a",actions:"CartItem_actions__3YtrR"}},,,function(t,e,c){t.exports={item:"ProductItem_item__1VdTZ",price:"ProductItem_price__2SAus",actions:"ProductItem_actions__KOcvT"}},function(t,e,c){t.exports={notification:"Notification_notification__3sHVh",error:"Notification_error__21CwJ",success:"Notification_success__2Nl-P"}},,,function(t,e,c){t.exports={button:"CartButton_button__qQAPg",badge:"CartButton_badge__1BVnX"}},,function(t,e,c){t.exports={card:"Card_card__1P61W"}},function(t,e,c){t.exports={cart:"Cart_cart__2w_vl"}},function(t,e,c){t.exports={header:"MainHeader_header__Ky7j8"}},function(t,e,c){t.exports={products:"Products_products__20qvD"}},,,,,,,,,,,,function(t,e,c){},,function(t,e,c){"use strict";c.r(e);var n=c(7),r=c.n(n),a=c(2),i=c(6),s=Object(i.b)({name:"cartSlice",initialState:{items:[],totalQuantity:0,isChanged:!1},reducers:{addItemToCart:function(t,e){var c=e.payload,n=t.items.find((function(t){return t.id===c.id}));t.totalQuantity++,t.isChanged=!0,n?(n.quantity++,n.totalPrice=n.totalPrice+c.price):t.items.push({id:c.id,price:c.price,quantity:1,totalPrice:c.price,name:c.title})},removeItemFromCart:function(t,e){t.totalQuantity--;var c=e.payload;t.isChanged=!0;var n=t.items.find((function(t){return t.id===c}));1===n.quantity?t.items=t.items.filter((function(t){return t.id!==c})):(n.quantity--,n.totalPrice=n.totalPrice-n.price)},replaceCartItems:function(t,e){var c=e.payload;t.items=c.items,t.totalQuantity=c.totalQuantity}}}),o=s.reducer,u=s.actions,d=c(3),l=c.n(d),j=c(4),f=Object(i.b)({name:"uiSlice",initialState:{showCart:!1,notification:null},reducers:{showCartHanlder:function(t){t.showCart=!t.showCart},showNotification:function(t,e){t.notification={title:e.payload.title,status:e.payload.status,message:e.payload.message}}}}),h=f.actions,m=f.reducer,p=Object(i.a)({reducer:{ui:m,cart:o}}),b=(c(29),c(14)),x=c.n(b),O=c(0),_=function(t){return Object(O.jsx)("section",{className:"".concat(x.a.card," ").concat(t.className?t.className:""),children:t.children})},y=c(15),v=c.n(y),C=c(5),g=c.n(C),N=function(t){var e=Object(a.b)(),c=t.item,n=c.title,r=c.quantity,i=c.total,s=c.price,o=c.id;return Object(O.jsxs)("li",{className:g.a.item,children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h3",{children:n}),Object(O.jsxs)("div",{className:g.a.price,children:["$",i.toFixed(2)," ",Object(O.jsxs)("span",{className:g.a.itemprice,children:["($",s.toFixed(2),"/item)"]})]})]}),Object(O.jsxs)("div",{className:g.a.details,children:[Object(O.jsxs)("div",{className:g.a.quantity,children:["x ",Object(O.jsx)("span",{children:r})]}),Object(O.jsxs)("div",{className:g.a.actions,children:[Object(O.jsx)("button",{onClick:function(){e(u.removeItemFromCart(o))},children:"-"}),Object(O.jsx)("button",{onClick:function(){e(u.addItemToCart({id:o,name:n,price:s,quantity:r}))},children:"+"})]})]})]})},w=function(){var t=Object(a.c)((function(t){return t.cart.items}));return Object(O.jsxs)(_,{className:v.a.cart,children:[Object(O.jsx)("h2",{children:"Your Shopping Cart"}),Object(O.jsx)("ul",{children:t.map((function(t){return Object(O.jsx)(N,{item:{id:t.id,name:t.name,price:t.price,quantity:t.quantity,total:t.totalPrice}},t.id)}))})]})},k=c(1),I=c(12),P=c.n(I),q=function(t){var e=Object(a.c)((function(t){return t.cart.totalQuantity})),c=Object(a.b)();return Object(O.jsxs)("button",{className:P.a.button,onClick:function(){c(h.showCartHanlder())},children:[Object(O.jsx)("span",{children:"My Cart"}),Object(O.jsx)("span",{className:P.a.badge,children:e})]})},Q=c(16),S=c.n(Q),F=function(t){return Object(O.jsxs)("header",{className:S.a.header,children:[Object(O.jsx)("h1",{children:"ReduxCart"}),Object(O.jsx)("nav",{children:Object(O.jsx)("ul",{children:Object(O.jsx)("li",{children:Object(O.jsx)(q,{})})})})]})},T=function(t){return Object(O.jsxs)(k.Fragment,{children:[Object(O.jsx)(F,{}),Object(O.jsx)("main",{children:t.children})]})},E=c(8),B=c.n(E),M=function(t){var e=Object(a.b)(),c=t.title,n=t.price,r=t.description,i=t.id;return Object(O.jsx)("li",{className:B.a.item,children:Object(O.jsxs)(_,{children:[Object(O.jsxs)("header",{children:[Object(O.jsx)("h3",{children:c}),Object(O.jsxs)("div",{className:B.a.price,children:["$",n.toFixed(2)]})]}),Object(O.jsx)("p",{children:r}),Object(O.jsx)("div",{className:B.a.actions,children:Object(O.jsx)("button",{onClick:function(){e(u.addItemToCart({id:i,name:c,price:n}))},children:"Add to Cart"})})]})})},A=c(17),H=c.n(A),J=[{id:"a1",title:"Machine Racket",description:"The Best Machine Racket Out there!",price:8},{id:"a2",title:"IMax XX",description:"An extraordinary motor!",price:10},{id:"a3",title:"Xl 25 Max",description:"An exeptional Creature",price:12}],R=function(t){return Object(O.jsxs)("section",{className:H.a.products,children:[Object(O.jsx)("h2",{children:"Buy your favorite products"}),Object(O.jsx)("ul",{children:J.map((function(t){return Object(O.jsx)(M,{id:t.id,title:t.title,price:t.price,description:t.description},t.id)}))})]})},X=c(9),L=c.n(X),V=function(t){var e="";"error"===t.status&&(e=L.a.error),"success"===t.status&&(e=L.a.success);var c="".concat(L.a.notification," ").concat(e);return Object(O.jsxs)("section",{className:c,children:[Object(O.jsx)("h2",{children:t.title}),Object(O.jsx)("p",{children:t.message})]})},$=!0;var D=function(){var t=Object(a.c)((function(t){return t.ui.showCart})),e=Object(a.c)((function(t){return t.cart})),c=Object(a.b)(),n=Object(a.c)((function(t){return t.ui.notification}));return Object(k.useEffect)((function(){c(function(){var t=Object(j.a)(l.a.mark((function t(e){var c,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=Object(j.a)(l.a.mark((function t(){var e,c;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://dummyproject-61f36-default-rtdb.firebaseio.com/cart.json");case 2:if((e=t.sent).ok){t.next=5;break}throw new Error("Fetching cart data failed!");case 5:return t.next=7,e.json();case 7:return c=t.sent,t.abrupt("return",c);case 9:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),t.prev=1,t.next=4,c();case 4:n=t.sent,e(u.replaceCartItems({items:n.items||[],totalQuantity:n.totalQuantity})),e(h.showNotification({title:"Succes",status:"success",message:"Cart data fetched Successfully!"})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(h.showNotification({title:"Error",status:"error",message:"fetching cart data failed!"}));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[c]),Object(k.useEffect)((function(){$?$=!1:e.isChanged&&c(function(t){return function(){var e=Object(j.a)(l.a.mark((function e(c){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c(h.showNotification({title:"pending...",status:"sending",message:"sending cart data!"})),n=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://dummyproject-61f36-default-rtdb.firebaseio.com/cart.json",{method:"PUT",body:JSON.stringify({items:t.items,totalQuantity:t.totalQuantity})});case 2:if(e.sent.ok){e.next=5;break}throw new Error("send cart data failed!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),e.prev=2,e.next=5,n();case 5:c(h.showNotification({title:"Succes",status:"success",message:"Cart Data Send Successfully!"})),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),c(h.showNotification({title:"Error",status:"error",message:"sending cart data failed!"}));case 11:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(t){return e.apply(this,arguments)}}()}(e))}),[e,c]),Object(O.jsxs)(O.Fragment,{children:[n&&Object(O.jsx)(V,{status:n.status,title:n.title,message:n.message}),Object(O.jsxs)(T,{children:[t&&Object(O.jsx)(w,{}),Object(O.jsx)(R,{})]})]})};r.a.render(Object(O.jsx)(a.a,{store:p,children:Object(O.jsx)(D,{})}),document.getElementById("root"))}],[[31,1,2]]]);
//# sourceMappingURL=main.72c021bd.chunk.js.map