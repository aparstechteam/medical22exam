import{u as L,c as A,r as f,a as R,b as B,o as e,d as n,F as D,e as $,f as r,g as s,h as c,i as a,w as l,j as N,k as V,t as _,n as F,l as p,m as x}from"./index.dbff6d4f.js";import{T as v,Y as G,G as z,_ as Y,Q,q as I,u as O}from"./dateFormat.73d82fc1.js";import"./plugin-vue_export-helper.21dcd24c.js";const P={key:0,class:"container py-10 mx-auto dark:text-gray-900"},U={key:0,class:"space-y-2"},H=s("div",{class:"h-3"},null,-1),J={key:0,class:"text-xl font-bold text-green-500"},K={key:1,class:"text-xl font-bold text-red-500 animate-pulse"},X={class:"py-2 text-2xl font-semibold text-red-500"},Z={class:"text-sm"},tt=s("p",{class:"text-sm"},"\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0989\u0995\u09CD\u09A4 \u09B8\u09AE\u09DF \u098F\u09B0 \u09AE\u09BE\u099D\u09C7 MCQ \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09AC\u09C7\u0987 \u0995\u09C7\u09AC\u09B2 \u09B2\u09C0\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u098F\u09AC\u0982 SMS \u09AA\u09BE\u09AC\u09C7\u0964 ",-1),et={key:0,class:"p-2 border border-gray-600"},st=s("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),nt={class:"py-2"},ot=s("p",{class:"font-semibold"},"Start Time",-1),at={class:"text-sm"},it={class:"py-2"},lt={key:0,class:"font-semibold"},ct={class:"text-sm"},rt={key:2,class:"flex flex-col justify-center space-x-2"},dt=s("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),mt={key:3,class:"flex flex-col justify-center space-x-2"},_t=s("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),bt={key:4,class:"flex flex-col justify-center space-x-2"},xt=s("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),ut={key:5,class:"flex flex-col justify-center space-x-2"},ft=s("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),pt={class:"flex flex-wrap items-center justify-center gap-3"},gt=["onClick"],ht=x("MCQ Solve "),vt=x("MCQ Leaderboard "),yt={key:6,class:"flex flex-wrap items-center justify-center gap-3"},kt=x("Written Exam "),wt=["href"],Ct=x("Written Leaderboard "),Dt={class:"grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},Et={class:"text-xl font-semibold text-red-500"},Tt={key:0,class:"text-sm leading-tight"},qt={class:"grid justify-center max-w-sm grid-cols-1 gap-2 mx-auto"},St={key:0,class:"p-2 border border-gray-600"},$t=s("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),Qt={class:"py-2"},Mt=s("p",{class:"font-semibold"},"Start Time",-1),jt={class:"text-sm"},Wt={key:0,class:"py-2"},Lt=s("p",{class:"font-semibold"}," End Time",-1),At={class:"text-sm"},Rt={class:"flex flex-wrap items-center justify-center gap-3"},Bt=["onClick"],Nt=x("MCQ Solve "),Vt=x("Leaderboard "),Ft={key:1,class:"flex flex-wrap items-center justify-center gap-3"},Gt=x("Written Exam "),zt=["href"],Yt=x("Written Leaderboard "),It={key:1,class:"py-10 text-center"},Ot=s("button",{class:"btn btn-primary btn-circle loading"},null,-1),Pt=[Ot],Ut={class:"fixed inset-0 z-10 overflow-y-auto"},Ht={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},Jt=s("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),Kt={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},Xt={class:"mt-2"},Zt={class:"text-sm text-gray-500"},ae={setup(te){const M=L(),i=A(()=>M.state.currentTime),g=f({show:!1,title:"",message:""}),E=R();localStorage.getItem("medicalad_22")||E.replace({name:"Login"});function b(d,o){g.value={show:!0,title:`${d} will be available soon`,message:`We are working on ${d}. Please check back after the time ${o}.`}}function T(){g.value={show:!1,title:"",message:""}}const y=f([]);let k=[];const j=f(new Set);f("");const w=f([]),q=f([]),W=f([]);f(""),(()=>{N.get(V+"?type=examlist").then(d=>{y.value=d.data.routines,q.value=d.data.routines,y.value.forEach(o=>{o.subject&&j.value.add(o.subject.split(" ")[0]),o.exam_category&&W.value.push(o.exam_category),new Date(o.upore_thakbo).getTime()>=i.value&&k.length<5&&k.push(o)}),w.value=k}).catch(d=>{console.error(d)})})();const{formattedDate:h}=O(),S=d=>{E.push(`/exam/${d}`)};return(d,o)=>{const u=B("router-link");return e(),n(D,null,[y.value.length>0?(e(),n("div",P,[w.value?(e(),n("div",U,[(e(!0),n(D,null,$(w.value,(t,C)=>(e(),n("div",{key:C,class:"relative p-2 my-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl"},[H,new Date(t.start_time).getTime()>a(i)?(e(),n("h1",J," Upcoming Exam... ")):new Date(t.end_time)>new Date?(e(),n("h1",K," Ongoing Exam... ")):r("",!0),s("h1",X,_(t.topic),1),s("p",Z,_(t.description),1),tt,s("div",{class:F(["grid justify-center max-w-md grid-cols-1 gap-2 mx-auto",{"sm:grid-cols-2":t.cq_start&&t.start_time}])},[t.start_time?(e(),n("div",et,[st,s("div",nt,[ot,s("p",at,_(a(h)(new Date(t.start_time))),1)]),s("div",it,[t.end_time?(e(),n("p",lt," End Time")):r("",!0),s("p",ct,_(a(h)(new Date(t.end_time))),1)])])):r("",!0)],2),new Date(t.start_time).getTime()>a(i)?(e(),n("div",rt,[dt,c(v,{end:new Date(t.start_time)},null,8,["end"])])):new Date(t.end_time)>new Date(a(i))?(e(),n("div",mt,[_t,c(v,{end:new Date(t.end_time)},null,8,["end"])])):new Date(t.cq_start)>new Date(a(i))?(e(),n("div",bt,[xt,c(v,{end:new Date(t.cq_start)},null,8,["end"])])):new Date(t.cq_end)>new Date(a(i))?(e(),n("div",ut,[ft,c(v,{end:new Date(t.cq_end)},null,8,["end"])])):r("",!0),s("div",pt,[new Date(t.start_time).getTime()<a(i)?(e(),n("button",{key:0,class:"btn btn-sm",onClick:m=>S(t.id)}," MCQ Exam ",8,gt)):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[0]||(o[0]=m=>b("MCQ Exam","starts"))}," MCQ Exam ")),new Date(t.end_time).getTime()<a(i)?(e(),p(u,{key:2,class:"btn btn-sm",to:`/solution/${t.id}`},{default:l(()=>[ht]),_:2},1032,["to"])):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[1]||(o[1]=m=>b("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(t.start_time).getTime()<a(i)?(e(),p(u,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${t.id}`},{default:l(()=>[vt]),_:2},1032,["to"])):(e(),n("button",{key:5,class:"mx-2 btn btn-sm",onClick:o[2]||(o[2]=m=>b("Leaderboard","Starts"))}," MCQ Leaderboard "))]),t.cq_link?(e(),n("div",yt,[new Date(t.cq_start).getTime()<a(i)&&t.cq_link?(e(),p(u,{key:0,class:"btn btn-sm",to:`/cq/${t.id}`},{default:l(()=>[kt]),_:2},1032,["to"])):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[3]||(o[3]=m=>b("Written Exam","starts"))}," Written Exam ")),new Date(t.cq_end).getTime()<a(i)&&t.cq_solve?(e(),n("a",{key:2,class:"btn btn-sm",href:t.cq_solve,target:"_blank"},"Written Exam Solve",8,wt)):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[4]||(o[4]=m=>b("Solution","Ends"))}," Written Exam Solve ")),c(u,{class:"mx-2 btn btn-sm",to:`/cql/${t.id}`},{default:l(()=>[Ct]),_:2},1032,["to"])])):r("",!0)]))),128))])):r("",!0),s("div",Dt,[(e(!0),n(D,null,$(q.value,(t,C)=>(e(),n("div",{class:"p-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl",key:C},[s("h1",Et,_(t.topic),1),t.description?(e(),n("p",Tt,_(t.description),1)):r("",!0),s("div",qt,[t.start_time?(e(),n("div",St,[$t,s("div",Qt,[Mt,s("p",jt,_(a(h)(new Date(t.start_time))),1)]),t.end_time?(e(),n("div",Wt,[Lt,s("p",At,_(a(h)(new Date(t.end_time))),1)])):r("",!0)])):r("",!0)]),s("div",Rt,[new Date(t.start_time).getTime()<a(i)?(e(),n("button",{key:0,class:"btn btn-sm",onClick:m=>S(t.id)}," MCQ Exam ",8,Bt)):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[5]||(o[5]=m=>b("MCQ Exam","starts"))}," MCQ Exam ")),new Date(t.end_time).getTime()<a(i)?(e(),p(u,{key:2,class:"btn btn-sm",to:`/solution/${t.id}`},{default:l(()=>[Nt]),_:2},1032,["to"])):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[6]||(o[6]=m=>b("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(t.start_time).getTime()<a(i)?(e(),p(u,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${t.id}`},{default:l(()=>[Vt]),_:2},1032,["to"])):r("",!0)]),t.cq_link?(e(),n("div",Ft,[new Date(t.cq_start).getTime()<a(i)&&t.cq_link?(e(),p(u,{key:0,class:"btn btn-sm",to:`/cq/${t.id}`},{default:l(()=>[Gt]),_:2},1032,["to"])):(e(),n("button",{key:1,class:"btn btn-sm",onClick:o[7]||(o[7]=m=>b("Written Exam","starts"))}," Written Exam ")),new Date(t.cq_end).getTime()<a(i)&&t.cq_solve?(e(),n("a",{key:2,class:"btn btn-sm",href:t.cq_solve,target:"_blank"},"Written Exam Solve",8,zt)):(e(),n("button",{key:3,class:"btn btn-sm",onClick:o[8]||(o[8]=m=>b("Solution","Ends"))}," Written Exam Solve ")),c(u,{class:"mx-2 btn btn-sm",to:`/cql/${t.id}`},{default:l(()=>[Yt]),_:2},1032,["to"])])):r("",!0)]))),128))])])):(e(),n("div",It,Pt)),c(a(G),{appear:"",show:g.value.show,as:"template"},{default:l(()=>[c(a(z),{as:"div",onClose:T},{default:l(()=>[s("div",Ut,[s("div",Ht,[c(a(Q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:l(()=>[c(a(Y),{class:"fixed inset-0"})]),_:1}),Jt,c(a(Q),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:l(()=>[s("div",Kt,[c(a(I),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:l(()=>[x(_(g.value.title),1)]),_:1}),s("div",Xt,[s("p",Zt,_(g.value.message),1)]),s("div",{class:"mt-4"},[s("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:T}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}};export{ae as default};
