(this["webpackJsonpchat-app"]=this["webpackJsonpchat-app"]||[]).push([[4],{234:function(t,e,s){},236:function(t,e,s){"use strict";s.d(e,"b",(function(){return a})),s.d(e,"a",(function(){return o}));var a=function(t){if(!t)return"Field is required"},o=function(t){return function(e){if(e)return e.length>t?"Max length is ".concat(t):void 0}}},237:function(t,e,s){"use strict";s.d(e,"b",(function(){return c})),s.d(e,"a",(function(){return u}));var a=s(3),o=s(235),n=(s(234),s(2)),r=["input","meta"],i=["input","meta"],c=function(t){var e=t.input,s=t.meta,i=Object(o.a)(t,r),c=s.touched&&s.error;return Object(n.jsxs)("div",{className:c?"form-control error":"form-control",children:[Object(n.jsx)("textarea",Object(a.a)(Object(a.a)({},e),i)),c&&Object(n.jsx)("span",{className:"error-messege",children:s.error})]})},u=function(t){var e=t.input,s=t.meta,r=Object(o.a)(t,i),c=s.touched&&s.error;return Object(n.jsxs)("div",{className:c?"form-control error":"form-control",children:[Object(n.jsx)("input",Object(a.a)(Object(a.a)({},e),r)),c&&Object(n.jsx)("span",{className:"error-messege",children:s.error})]})}},239:function(t,e,s){"use strict";s.d(e,"a",(function(){return l}));var a=s(3),o=s(235),n=(s(0),s(19)),r=s(6),i=s(2),c=["isAuth"],u=function(t){return{isAuth:t.auth.isAuth}};function l(t){return Object(n.b)(u)((function(e){var s=e.isAuth,n=Object(o.a)(e,c);return s?Object(i.jsx)(t,Object(a.a)({},n)):Object(i.jsx)(r.a,{to:"/Content/Login"})}))}},304:function(t,e,s){},305:function(t,e,s){},306:function(t,e,s){},307:function(t,e,s){},308:function(t,e,s){},309:function(t,e,s){t.exports={profile:"Profile_profile__2D5ez"}},310:function(t,e,s){},311:function(t,e,s){},319:function(t,e,s){"use strict";s.r(e);var a=s(43),o=s(44),n=s(46),r=s(45),i=(s(304),s(57)),c=(s(305),s(2)),u=function(t){return Object(c.jsxs)("div",{className:"item-post post-list__item-post",children:[Object(c.jsx)("img",{src:i.a,alt:"logo",className:"logo avatar item-post__avatar"}),Object(c.jsx)("h4",{className:"item-post__login",children:t.login}),Object(c.jsx)("p",{className:"item-post__text",children:t.text}),Object(c.jsxs)("div",{className:"item-post__action",children:[Object(c.jsx)("p",{className:"item-post__likes-count",children:t.likes}),Object(c.jsx)("span",{className:"like-img",children:"\u2665"})]})]})},l=(s(306),function(t){var e=t.posts.map((function(t){return Object(c.jsx)(u,{login:t.name,text:t.post,likes:t.likes},t.id)}));return Object(c.jsx)("div",{className:"post-list profile__post-list",children:e})}),p=(s(307),s(0)),f=s.n(p),j=s(109),h=s(110),d=s(236),m=s(237),b=(s(308),Object(d.a)(10)),O=Object(h.a)({form:"post"})((function(t){return Object(c.jsxs)("form",{className:"create-post",onSubmit:t.handleSubmit,children:[Object(c.jsx)(j.a,{className:"input-post",component:m.b,name:"newPost",validate:[d.b,b]}),Object(c.jsx)("button",{className:"btn-send post__btn",children:"Send"})]})})),v=function(t){return Object(c.jsx)("div",{className:"create-post",children:Object(c.jsx)(O,{onSubmit:function(e){e.newPost&&t.addPost(e.newPost)}})})},x=function(t){return Object(c.jsxs)("div",{className:"post profile__post",children:[Object(c.jsx)("h3",{className:"post__title",children:"My posts"}),Object(c.jsx)(v,{addPost:t.addPost}),Object(c.jsx)(l,{posts:t.posts})]})},_=s(309),N=s.n(_),g=s(18),P=(s(310),s(64)),I=(s(311),function(t){var e=Object(p.useState)(!1),s=Object(P.a)(e,2),a=s[0],o=s[1],n=Object(p.useState)(t.status),r=Object(P.a)(n,2),i=r[0],u=r[1];Object(p.useEffect)((function(){u(t.status)}),[t.status]);return Object(c.jsx)("div",{className:"personal-info__status",children:a?Object(c.jsx)("input",{onBlur:function(){o(!1),t.updateStatus(i)},onChange:function(t){u(t.currentTarget.value)},value:i,autoFocus:!0,className:"profile-status__create"}):Object(c.jsx)("h3",{onClick:function(){t.isOwner||o(!0)},className:"profile-status__title",children:t.status?t.status:"Status "})})}),S=function(t){var e,s=t.profileInfo;if(!s)return Object(c.jsx)(g.a,{});var a=[];for(var o in s.contacts)null!==s.contacts[o]&&""!==s.contacts[o]&&(e=o+": "+s.contacts[o],a.push(e));var n=a.map((function(t){return Object(c.jsx)("h3",{className:"personal-info__item",children:t},Math.floor(1e3*Math.random()))}));return Object(c.jsxs)("div",{className:"profile-info",children:[Object(c.jsxs)("div",{className:"profile-info__avatar",children:[Object(c.jsx)("img",{src:s.photos.small?s.photos.small:i.a,alt:"logo",className:"logo avatar profile__avatar"}),!t.isOwner&&Object(c.jsxs)("div",{className:"change-avatar",children:[Object(c.jsx)("label",{htmlFor:"file",className:"change-avatar__element",children:"Change The Photo"}),Object(c.jsx)("input",{type:"file",className:"change-avatar__input",onChange:function(e){var s;(null===(s=e.target.files)||void 0===s?void 0:s.length)&&t.savePhoto(e.target.files[0])},id:"file"})]})]}),Object(c.jsxs)("div",{className:"personal-info profile__info",children:[Object(c.jsx)("h3",{className:"personal-info__item",children:s.fullName},Math.floor(1e3*Math.random())),Object(c.jsx)(I,{isOwner:t.isOwner,status:t.status,updateStatus:t.updateStatus}),Object(c.jsx)("h3",{className:"personal-info__item",children:s.lookingForAJob?"I am looking for a job":"I have a job"},Math.floor(1e3*Math.random())),Object(c.jsx)("h3",{className:"personal-info__item",children:s.lookingForAJobDescription&&s.lookingForAJobDescription},Math.floor(1e3*Math.random())),Object(c.jsx)("div",{className:"personal-info__item-contacts",children:n})]})]})},k=function(t){return Object(c.jsxs)("div",{className:N.a.profile,children:[Object(c.jsx)(S,{profileInfo:t.profileInfo,updateStatus:t.updateStatus,status:t.status,savePhoto:t.savePhoto,isOwner:t.isOwner}),Object(c.jsx)(x,{addPost:t.addPost,posts:t.posts})]})},w=s(19),M=s(59),A=s(6),D=s(239),y=s(31),C=function(t){Object(n.a)(s,t);var e=Object(r.a)(s);function s(){return Object(a.a)(this,s),e.apply(this,arguments)}return Object(o.a)(s,[{key:"refreshProfile",value:function(){this.props.setProfileInfo(+this.props.match.params.userId,this.props.auth.userId),this.props.getProfileStatus(+this.props.match.params.userId,this.props.auth.userId)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(t,e){this.props.match.params.userId!==t.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return Object(c.jsx)("div",{children:Object(c.jsx)(k,{profileInfo:this.props.profileInfo,status:this.props.status,updateStatus:this.props.updateProfileStatus,posts:this.props.posts,addPost:this.props.addPost,isOwner:this.props.match.params.userId,savePhoto:this.props.savePhoto})})}}]),s}(f.a.Component);e.default=Object(y.d)(Object(w.b)((function(t){return{profileInfo:t.profileData.profileInfo,auth:t.auth,status:t.profileData.status,posts:t.profileData.postUsers}}),{setProfileInfo:M.f,getProfileStatus:M.a,updateProfileStatus:M.g,addPost:M.b.addPostActionCreator,savePhoto:M.d}),A.f,D.a)(C)}}]);
//# sourceMappingURL=4.27b7e89f.chunk.js.map