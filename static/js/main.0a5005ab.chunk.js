(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[1],{143:function(t,e,n){},145:function(t,e,n){},168:function(t,e,n){},17:function(t,e,n){"use strict";var r=n.p+"static/media/preloader.bf7cf191.gif",a=n(2);e.a=function(t){return Object(a.jsx)("img",{src:r,className:"preloader"})}},21:function(t,e,n){"use strict";n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return j})),n.d(e,"b",(function(){return b})),n.d(e,"c",(function(){return g}));var r=n(6),a=n.n(r),c=n(8),u=n(3),i=n(27),o=n(7),s="AUTH/SET-USER-DATA",f="AUTH/GET-CAPTCHA-URL-SUCCSESS",l={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(u.a)(Object(u.a)({},t),e.data);case f:return Object(u.a)(Object(u.a)({},t),{},{captchaUrl:e.captchaUrl});default:return t}},p=function(t,e,n,r){return{type:s,data:{userId:t,email:e,login:n,isAuth:r}}},h=function(t){return{type:f,captchaUrl:t}},j=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.getProfileAuth();case 2:n=t.sent,r=n.data,0===n.resultCode&&e(p(r.id,r.email,r.login,!0));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},b=function(t,e,n,r){return function(){var u=Object(c.a)(a.a.mark((function c(u){var s,f;return a.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,o.a.loginAuth(t,e,n,r);case 2:0===(s=a.sent).resultCode?u(j()):(10===s.resultCode&&u(O()),f=s.messages.length>0?s.messages[0]:"The Login or Password is incorrect",u(Object(i.a)("login",{_error:f})));case 4:case"end":return a.stop()}}),c)})));return function(t){return u.apply(this,arguments)}}()},O=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){var n,r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.d.getCaptchaUrl();case 2:n=t.sent,r=n.data.url,e(h(r));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(){return function(){var t=Object(c.a)(a.a.mark((function t(e){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.a.logoutAuth();case 2:0===t.sent.resultCode&&e(p(null,null,null,!1));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}},229:function(t,e,n){},230:function(t,e,n){"use strict";n.r(e);var r=function(t){t&&t instanceof Function&&n.e(9).then(n.bind(null,316)).then((function(e){var n=e.getCLS,r=e.getFID,a=e.getFCP,c=e.getLCP,u=e.getTTFB;n(t),r(t),a(t),c(t),u(t)}))},a=n(0),c=n.n(a),u=n(45),i=n.n(u),o=n(33),s=n(34),f=n(36),l=n(35),d=n(18),p=n(25),h=(n(143),n(17)),j=n(5),b=(n(145),n(2)),O=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,320))})),g=c.a.lazy((function(){return n.e(8).then(n.bind(null,319))})),v=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,317))})),m=c.a.lazy((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,318))})),x=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,321))})),w=function(t){return Object(b.jsxs)("div",{className:"content wrapper__content",children:[Object(b.jsx)(j.b,{exact:!0,path:"/",render:function(){return Object(b.jsx)(j.a,{to:"/content/profile"})}}),Object(b.jsx)(j.b,{path:"/Content/Profile/:userId?",render:function(){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{})}),children:Object(b.jsx)(v,{})})}}),Object(b.jsx)(j.b,{path:"/Content/Messages",render:function(){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{})}),children:Object(b.jsx)(m,{})})}}),Object(b.jsx)(j.b,{path:"/Content/Friends",render:function(){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{})}),children:Object(b.jsx)(g,{})})}}),Object(b.jsx)(j.b,{path:"/Content/Login",render:function(){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{})}),children:Object(b.jsx)(O,{})})}}),Object(b.jsx)(j.b,{path:"/Content/Settings",render:function(){return Object(b.jsx)(c.a.Suspense,{fallback:Object(b.jsx)("div",{children:Object(b.jsx)(h.a,{})}),children:Object(b.jsx)(x,{})})}})]})},S=(n(64),n(55)),y=function(t){return Object(b.jsxs)("header",{className:"header wrapper__header",children:[Object(b.jsx)("img",{className:"logo header__logo",src:S.a,alt:"logo"}),t.auth.isAuth?Object(b.jsxs)("div",{children:[Object(b.jsx)("span",{className:"header__login-login",children:t.auth.login})," ",Object(b.jsx)("span",{onClick:t.logout,className:"header__login-logout",children:"\u274c"})]}):Object(b.jsx)(p.b,{to:"/Content/Login/",className:"header__login-userName",children:"Login"})]})},P=n(21),E=function(t){Object(f.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.setUserData(this.props.auth.isAuth)}},{key:"render",value:function(){return Object(b.jsx)(y,{auth:this.props.auth,logout:this.props.logout})}}]),n}(c.a.Component),I=Object(d.b)((function(t){return{auth:t.auth}}),{setUserData:P.d,logout:P.c})(E),k=(n(168),function(t){return Object(b.jsx)(p.b,{to:t.link,className:"menu-item sidebar__item",children:t.item})}),C=(n(73),function(t){var e=t.navigation.map((function(t){return Object(b.jsx)(k,{item:t,link:"/Content/"+t},t)}));return Object(b.jsx)("nav",{className:"sidebar wrapper__sidebar",children:e})}),U=Object(d.b)((function(t){return{navigation:t.navigation.navigation}}),null)(C),F=n(3),N="SET-INITIALIZED",T={initialized:!1},D=n(30),A=n(57),R=n(74),_={navigation:["Profile","Messages","News","Music","Friends","Settings"]},L=n(75),M=n(85),z=n(81),H=Object(D.c)({profileData:A.c,messagesData:R.b,navigation:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_;return t},friendsData:L.b,auth:P.a,form:z.a,app:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;return e.type===N?Object(F.a)(Object(F.a)({},t),{},{initialized:!0}):t}}),G=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||D.d,J=Object(D.e)(H,G(Object(D.a)(M.a)));window.store=J;var W=J,B=function(t){Object(f.a)(n,t);var e=Object(l.a)(n);function n(){return Object(o.a)(this,n),e.apply(this,arguments)}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.props.initialize()}},{key:"render",value:function(){return this.props.initialized?Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(I,{}),Object(b.jsx)(U,{}),Object(b.jsx)(w,{})]}):Object(b.jsx)(h.a,{})}}]),n}(c.a.Component),K=Object(d.b)((function(t){return{initialized:t.app.initialized}}),{initialize:function(){return function(t){t(Object(P.d)()).then((function(){t({type:N})}))}}})(B),X=function(t){return Object(b.jsx)(p.a,{basename:"/chat-app",children:Object(b.jsx)(d.a,{store:W,children:Object(b.jsx)(K,{})})})};n(229);i.a.render(Object(b.jsx)(X,{}),document.getElementById("root")),r()},55:function(t,e,n){"use strict";e.a=n.p+"static/media/Rlogo.fa290132.png"},57:function(t,e,n){"use strict";n.d(e,"c",(function(){return j})),n.d(e,"a",(function(){return b})),n.d(e,"f",(function(){return g})),n.d(e,"b",(function(){return v})),n.d(e,"g",(function(){return m})),n.d(e,"d",(function(){return x})),n.d(e,"e",(function(){return w}));var r=n(6),a=n.n(r),c=n(8),u=n(22),i=n(3),o=n(27),s=n(7),f="PROFILE/ADD-POST",l="PROFILE/SET-PROFILE-INFO",d="PROFILE/GET-STATUS",p="PROFILE/UPDATE-PHOTO",h={postUsers:[{post:"Hi girls",id:1,likes:23,name:"Jenya"},{post:"wow man",id:2,likes:12,name:"Jorik"},{post:"How are you",id:3,likes:5,name:"Roma"},{post:"Haha",id:4,likes:8,name:"Masha"},{post:"Haha",id:5,likes:3,name:"Igor"}],profileInfo:null,isFetching:!1,status:""},j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case f:var n=e.newPost;return Object(i.a)(Object(i.a)({},t),{},{postUsers:[].concat(Object(u.a)(t.postUsers),[{post:n,id:6,likes:0,name:"Ruslan"}])});case l:return Object(i.a)(Object(i.a)({},t),{},{profileInfo:e.profileInfo});case d:return Object(i.a)(Object(i.a)({},t),{},{status:e.status});case p:return Object(i.a)(Object(i.a)({},t),{},{profileInfo:Object(i.a)(Object(i.a)({},t.profileInfo),{},{photos:e.photo})});default:return t}},b=function(t){return{type:f,newPost:t}},O=function(t){return{type:d,status:t}},g=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=t)||(c=e),n.next=4,s.c.getProfileInfo(c);case 4:u=n.sent,r({type:l,profileInfo:u});case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},v=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c,u;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return(c=t)||(c=e),n.next=4,s.c.getStatus(c);case 4:u=n.sent,r(O(u));case 6:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},m=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.updateStatus(t);case 2:0===e.sent.data.resultCode&&n(O(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},x=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){var r;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.c.savePhoto(t);case 2:0===(r=e.sent).data.resultCode&&n((a=r.data.data.photos,{type:p,photo:a}));case 4:case"end":return e.stop()}var a}),e)})));return function(t){return e.apply(this,arguments)}}()},w=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n,r){var c,u,i;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=r().auth.userId,e.next=3,s.c.saveProfileInfo(t);case 3:if(0!==(u=e.sent).data.resultCode){e.next=8;break}n(g(c)),e.next=11;break;case 8:return i=u.data.messages.length>0?u.data.messages[0]:"error",n(Object(o.a)("settings",{_error:i})),e.abrupt("return",Promise.reject(i));case 11:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}},64:function(t,e,n){},7:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return u})),n.d(e,"c",(function(){return i})),n.d(e,"d",(function(){return o}));var r=n(84),a=n.n(r).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"e936cc93-ffd1-4fe3-841e-539754d0802a"}}),c={followUser:function(t){return a.post("follow/".concat(t),null).then((function(t){return t.data}))},unFollowUser:function(t){return a.delete("follow/".concat(t)).then((function(t){return t.data}))},getUsers:function(t,e){return a.get("users?page=".concat(t,"&count=").concat(e)).then((function(t){return t.data}))}},u={loginAuth:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return a.post("auth/login",{email:t,password:e,rememberMe:n,captcha:r}).then((function(t){return t.data}))},logoutAuth:function(){return a.delete("auth/login").then((function(t){return t.data}))},getProfileAuth:function(){return a.get("auth/me").then((function(t){return t.data}))}},i={getProfileInfo:function(t){return a.get("profile/"+t).then((function(t){return t.data}))},getStatus:function(t){return a.get("profile/status/"+t).then((function(t){return t.data}))},updateStatus:function(t){return a.put("profile/status",{status:t}).then((function(t){return t}))},savePhoto:function(t){var e=new FormData;return e.append("image",t),a.put("profile/photo",e,{headers:{"Content-Type":"multipart/form-data"}})},saveProfileInfo:function(t){t.aboutMe=t.fullName;var e=JSON.stringify(t);return a.put("profile",e,{headers:{"Content-Type":"application/json"}})}},o={getCaptchaUrl:function(){return a.get("security/get-captcha-url")}}},73:function(t,e,n){},74:function(t,e,n){"use strict";n.d(e,"b",(function(){return i})),n.d(e,"a",(function(){return o}));var r=n(22),a=n(3),c="MESSAGES/ADD-MESSAGE",u={usersList:[{name:"Alex",id:1},{name:"Jenya",id:2},{name:"Jorik",id:3},{name:"Roma",id:4},{name:"Nikita",id:5},{name:"Masha",id:6},{name:"Kate",id:7}],chatSMS:[{text:"Hi",id:1},{text:"Good",id:2},{text:"How are you",id:3},{text:"Haha",id:4}]},i=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,e=arguments.length>1?arguments[1]:void 0;if(e.type===c){var n=e.newMessage;return Object(a.a)(Object(a.a)({},t),{},{chatSMS:[].concat(Object(r.a)(t.chatSMS),[{text:n,id:6}])})}return t},o=function(t){return{type:c,newMessage:t}}},75:function(t,e,n){"use strict";n.d(e,"b",(function(){return g})),n.d(e,"d",(function(){return x})),n.d(e,"e",(function(){return S})),n.d(e,"c",(function(){return y})),n.d(e,"a",(function(){return E})),n.d(e,"f",(function(){return I}));var r=n(6),a=n.n(r),c=n(8),u=n(22),i=n(3),o=n(7),s="FRIENDS/FOLLOW",f="FRIENDS/UNFOLLOW",l="FRIENDS/SET-USERS",d="FRIENDS/SET-CURRENT-PAGE",p="FRIENDS/SET-TOTAL-USERS-COUNT",h="FRIENDS/TOGGLE-IS-FETCHING",j="FRIENDS/FOLLOWING-PROGRESS",b={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingProgress:[]},O=function(t,e,n,r){return t.map((function(t){return t[n]===e?Object(i.a)(Object(i.a)({},t),r):t}))},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case s:return Object(i.a)(Object(i.a)({},t),{},{users:O(t.users,e.id,"id",{followed:!0})});case f:return Object(i.a)(Object(i.a)({},t),{},{users:O(t.users,e.id,"id",{followed:!1})});case l:return Object(i.a)(Object(i.a)({},t),{},{users:Object(u.a)(e.users)});case d:return Object(i.a)(Object(i.a)({},t),{},{currentPage:e.currentPage});case p:return Object(i.a)(Object(i.a)({},t),{},{totalUsersCount:e.totalCount});case h:return Object(i.a)(Object(i.a)({},t),{},{isFetching:e.isFetching});case j:return Object(i.a)(Object(i.a)({},t),{},{followingProgress:e.followingProgress?[].concat(Object(u.a)(t.followingProgress),[e.userID]):t.followingProgress.filter((function(t){return t!==e.userID}))});default:return t}},v=function(t){return{type:s,id:t}},m=function(t){return{type:f,id:t}},x=function(t){return{type:d,currentPage:t}},w=function(t){return{type:h,isFetching:t}},S=function(t,e){return{type:j,followingProgress:t,userID:e}},y=function(t,e){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),n.next=3,o.b.getUsers(t,e);case 3:c=n.sent,r(w(!1)),r((u=c.items,{type:l,users:u})),r((a=c.totalCount,{type:p,totalCount:a}));case 7:case"end":return n.stop()}var a,u}),n)})));return function(t){return n.apply(this,arguments)}}()},P=function(){var t=Object(c.a)(a.a.mark((function t(e,n,r,c){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(S(!0,n)),t.next=3,c(n);case 3:0===t.sent.resultCode&&e(r(n)),e(S(!1,n));case 6:case"end":return t.stop()}}),t)})));return function(e,n,r,a){return t.apply(this,arguments)}}(),E=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(n,t,v,o.b.followUser.bind(o.b));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},I=function(t){return function(){var e=Object(c.a)(a.a.mark((function e(n){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:P(n,t,m,o.b.unFollowUser.bind(o.b));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}},[[230,2,3]]]);
//# sourceMappingURL=main.0a5005ab.chunk.js.map