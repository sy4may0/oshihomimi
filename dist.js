!function(e){var r={};function n(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var s in e)n.d(t,s,function(r){return e[r]}.bind(null,s));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=14)}([function(e,r){e.exports=require("@babel/runtime/regenerator")},function(e,r){e.exports=require("@babel/runtime/helpers/asyncToGenerator")},function(e,r){e.exports=require("mongoose")},function(e,r){e.exports=require("express-promise-router")},function(e,r){e.exports=require("express")},function(e,r){e.exports=require("path")},function(e,r){e.exports=require("cors")},function(e,r){e.exports=require("http-errors")},function(e,r){e.exports=require("cookie-parser")},function(e,r){e.exports=require("morgan")},function(e,r){e.exports=require("http")},function(e,r){e.exports=require("debug")},function(e,r,n){var t=n(4).Router();t.get("/",(function(e,r,n){r.render("index",{title:"Express"})})),e.exports=t},function(e,r){e.exports=require("axios")},function(e,r,n){"use strict";n.r(r);var t=n(7),s=n.n(t),o=n(4),a=n.n(o),u=n(5),c=n.n(u),i=n(8),p=n.n(i),d=n(9),f=n.n(d),l=n(10),v=n.n(l),y=n(11),m=n.n(y),x=n(2),h=n.n(x),g=n(6),b=n.n(g),w=n(12),j=n.n(w),S=n(0),q=n.n(S),k=n(1),_=n.n(k),O=n(3),I=n.n(O),B=new(0,h.a.Schema)({name:String,full_name:String}),P=h.a.model("User",B),R=I()();R.get("/",function(){var e=_()(q.a.mark((function e(r,n){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.find({});case 2:t=e.sent,n.json(t);case 4:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),R.get("/:id",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,P.findById(t);case 3:s=e.sent,n.json(s);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),R.post("/",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new P).name=r.body.name,t.full_name=r.body.full_name,e.next=5,P.countDocuments({name:t.name});case 5:if(!(e.sent>0)){e.next=9;break}throw s="User "+t.name+" is already exists.",new Error(s);case 9:return e.next=11,t.save();case 11:n.json({result:"success"});case 12:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),R.post("/:id",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,P.findById(t);case 3:return(s=e.sent).name=r.body.name,s.full_name=r.body.full_name,e.next=8,s.save();case 8:n.json({result:"success"});case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),R.delete("/:id",function(){var e=_()(q.a.mark((function e(r,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,P.remove({_id:r.params.id});case 2:n.json({result:"success"});case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}());var U=R,M=new(0,h.a.Schema)({name:String,user:String,project:String,category:String,description:String,closed:Boolean}),N=h.a.model("Task",M),T=I()();T.get("/",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},void 0!==r.query.user&&(t={user:r.query.user}),e.next=4,N.find(t);case 4:s=e.sent,n.json(s);case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),T.get("/:id",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,N.findById(t);case 3:s=e.sent,n.json(s);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),T.post("/",function(){var e=_()(q.a.mark((function e(r,n){var t;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(t=new N).name=r.body.name,t.user=r.body.uesr,t.project=r.body.project,t.category=r.body.category,t.description=r.body.description,t.closed=r.body.closed,e.next=9,t.save();case 9:n.json({result:"success"});case 10:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),T.post("/:id",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,N.findById(t);case 3:return(s=e.sent).name=r.body.name,s.user=r.body.uesr,s.project=r.body.project,s.category=r.body.category,s.description=r.body.description,s.closed=r.body.closed,e.next=12,s.save();case 12:n.json({result:"success"});case 13:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),T.delete("/:id",function(){var e=_()(q.a.mark((function e(r,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.remove({_id:r.params.id});case 2:n.json({result:"success"});case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}());var $=T,A=new(0,h.a.Schema)({date:String,user:String,unexpected:Boolean,project:String,category:String,description:String,scheduled:String,actual:String,closed:Boolean,issues:String}),E=h.a.model("Achievement",A),C=I()();C.get("/",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={},void 0!==r.query.user&&(t={user:r.query.user}),e.next=4,E.find(t);case 4:s=e.sent,n.json(s);case 6:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),C.get("/:id",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.params.id,e.next=3,E.findById(t);case 3:s=e.sent,n.json(s);case 5:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}()),C.post("/",function(){var e=_()(q.a.mark((function e(r,n){var t,s,o,a,u,c,i,p,d,f,l,v,y,m,x,h,g,b,w,j;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return[],e.next=3,E.find({$and:[{description:{$eq:r.body.description}},{user:{$eq:r.body.user}},{project:{$eq:r.body.project}},{category:{$eq:r.body.category}}]});case 3:for(t=e.sent,s=new Map,o=!0,a=!1,u=void 0,e.prev=8,c=t[Symbol.iterator]();!(o=(i=c.next()).done);o=!0)p=i.value,s.set(p.date,p);e.next=16;break;case 12:e.prev=12,e.t0=e.catch(8),a=!0,u=e.t0;case 16:e.prev=16,e.prev=17,o||null==c.return||c.return();case 19:if(e.prev=19,!a){e.next=22;break}throw u;case 22:return e.finish(19);case 23:return e.finish(16);case 24:for(d=[],f=!0,l=!1,v=void 0,e.prev=28,y=r.body.dates[Symbol.iterator]();!(f=(m=y.next()).done);f=!0)x=m.value,(h=new E).date=x,h.user=r.body.user,h.unexpected=r.body.unexpected,h.project=r.body.project,h.category=r.body.category,h.description=r.body.description,h.scheduled=r.body.scheduled,h.actual=r.body.actual,h.closed=r.body.closed,h.issues=r.body.issues,d.push(h);e.next=36;break;case 32:e.prev=32,e.t1=e.catch(28),l=!0,v=e.t1;case 36:e.prev=36,e.prev=37,f||null==y.return||y.return();case 39:if(e.prev=39,!l){e.next=42;break}throw v;case 42:return e.finish(39);case 43:return e.finish(36);case 44:for(console.log(t),console.log(d),g=0,b=d;g<b.length;g++)w=b[g],s.has(w.date)?(w._id=s.get(w.date)._id,s.set(w.date,w)):s.set(w.date,w);return j=Array.from(s.values()),e.next=50,Promise.all(j.map(function(){var e=_()(q.a.mark((function e(r){var n;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={_id:r._id},e.next=3,E.findOneAndUpdate(n,r,{upsert:!0});case 3:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}()));case 50:n.json({result:"success"});case 51:case"end":return e.stop()}}),e,null,[[8,12,16,24],[17,,19,23],[28,32,36,44],[37,,39,43]])})));return function(r,n){return e.apply(this,arguments)}}()),C.delete("/:id",function(){var e=_()(q.a.mark((function e(r,n){return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.remove({_id:r.params.id});case 2:n.json({result:"success"});case 3:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}());var D=C,G=n(13),L=n.n(G),F=I()(),z=L.a.create({baseURL:"http://localhost:5000",headers:{"Content-Type":"application/json"},responseType:"json"});F.get("/",function(){var e=_()(q.a.mark((function e(r,n){var t,s;return q.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t={date:{}},void 0!==r.query.user&&(t.user=r.query.user),void 0!==r.query.gte&&(t.date.$gte=r.query.gte),void 0!==r.query.lte&&(t.date.$lte=r.query.lte),e.next=6,E.find(t);case 6:s=e.sent,z.post("/",{user:r.query.user,achievements:s}),n.json({result:"success"});case 9:case"end":return e.stop()}}),e)})));return function(r,n){return e.apply(this,arguments)}}());var H=F,J=a()(),K=process.env.MONGODB_URI?process.env.MONGODB_URI:"mongodb://localhost:27017";if(h.a.connect(K+"/oshihomimi",{useNewUrlParser:!0,useUnifiedTopology:!0,useFindAndModify:!1}),J.set("views",c.a.join(__dirname,"views")),J.set("view engine","pug"),J.use(f()("dev")),J.use(a.a.json()),J.use(a.a.urlencoded({extended:!1})),J.use(p()()),J.use(a.a.static(c.a.join(__dirname,"public"))),void 0!==process.env.CORS_ORIGIN){var Q={origin:process.env.CORS_ORIGIN};J.use(b()(Q))}else J.use(b()());J.use("/",j.a),J.use("/user",U),J.use("/task",$),J.use("/achievement",D),J.use("/excel",H),J.use((function(e,r,n){n(s()(404))})),J.use((function(e,r,n,t){console.log(e),n.locals.message=e.message,n.locals.error="development"===r.app.get("env")?e:{},n.status(e.status||500),n.render("error")}));var V=function(e){var r=parseInt(e,10);if(isNaN(r))return e;if(r>=0)return r;return!1}(process.env.PORT||"3000");J.set("port",V);var W=v.a.createServer(J);W.listen(V),W.on("error",(function(e){if("listen"!==e.syscall)throw e;var r="string"==typeof V?"Pipe "+V:"Port "+V;switch(e.code){case"EACCES":console.error(r+" requires elevated privileges"),process.exit(1);break;case"EADDRINUSE":console.error(r+" is already in use"),process.exit(1);break;default:throw e}})),W.on("listening",(function(){var e=W.address(),r="string"==typeof e?"pipe "+e:"port "+e.port;m()("Listening on "+r)}))}]);