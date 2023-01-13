import{u as G,c as N,r as g,a as V,b as F,o as s,d as n,F as k,e as E,f as c,g as t,h as m,i as a,w as r,j as z,k as Y,t as u,n as S,l as f,m as h}from"./index.f0bb7909.js";import{T as D,Y as I,G as K,_ as O,Q as P,q as U,u as H}from"./dateFormat.ff41fc3d.js";import"./plugin-vue_export-helper.21dcd24c.js";const J={key:0,class:"container py-10 mx-auto dark:text-gray-900"},X={key:0,class:"space-y-2"},Z=t("div",{class:"h-3"},null,-1),ee={key:0,class:"text-xl font-bold text-green-500"},te={key:1,class:"text-xl font-bold text-red-500 animate-pulse"},se={class:"py-2 text-2xl font-semibold text-red-500"},ne={class:"text-sm"},oe=t("p",{class:"text-sm"},"\u09B6\u09C1\u09A7\u09C1\u09AE\u09BE\u09A4\u09CD\u09B0 \u0989\u0995\u09CD\u09A4 \u09B8\u09AE\u09DF \u098F\u09B0 \u09AE\u09BE\u099D\u09C7 MCQ \u098F\u0995\u09CD\u09B8\u09BE\u09AE \u09A6\u09BF\u09B2\u09C7 \u09A4\u09AC\u09C7\u0987 \u0995\u09C7\u09AC\u09B2 \u09B2\u09C0\u09A1\u09BE\u09B0\u09AC\u09CB\u09B0\u09CD\u09A1\u09C7 \u09A8\u09BE\u09AE \u09AA\u09BE\u09AC\u09C7\u0964 ",-1),ae={key:0,class:"p-2 border border-gray-600"},le=t("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),ie={class:"py-2"},ce=t("p",{class:"font-semibold"},"Start Time",-1),re={class:"text-sm"},de={class:"py-2"},me={key:0,class:"font-semibold"},ue={class:"text-sm"},_e={key:2,class:"flex flex-col justify-center space-x-2"},be=t("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),he={key:3,class:"flex flex-col justify-center space-x-2"},pe=t("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),ge={key:4,class:"flex flex-col justify-center space-x-2"},xe=t("p",{class:"text-sm font-semibold text-center"}," Exam Start Time Remaining",-1),fe={key:5,class:"flex flex-col justify-center space-x-2"},ye=t("p",{class:"text-sm font-semibold text-center"}," Exam End Time Remaining",-1),ve={class:"flex flex-wrap items-center justify-center gap-3"},ke=["onClick"],we=h("MCQ Solve "),Ce=h("MCQ Leaderboard "),Ee={key:6,class:"flex flex-wrap items-center justify-center gap-3"},De=h("Written Exam "),$e=["href"],qe=h("Written Leaderboard "),je={key:1},Se=t("div",{class:"my-3 text-center"},[t("h1",{class:"text-2xl font-bold"},"Previous Exams"),t("h2",null,"Select Subject")],-1),Te={class:"grid w-full grid-cols-2 gap-3 md:grid-cols-3"},Me=["onClick"],Qe={class:"p-3 space-y-1 text-center border rounded-2xl border-slate-500 hover:scale-105 hover:cursor-pointer"},We=["src"],Pe={class:"text-lg font-bold"},Le={key:2},Be=t("div",{class:"my-3 text-center"},[t("h1",{class:"text-2xl font-bold"},"Previous Exams"),t("h2",null,"Select Chapter")],-1),Ae={class:"grid w-full grid-cols-2 gap-3 md:grid-cols-3"},Re=["onClick"],Ge={class:"p-3 space-y-1 text-center border rounded-2xl border-slate-500 hover:scale-105 hover:cursor-pointer"},Ne={key:0,class:"grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3"},Ve={class:"text-xl font-semibold text-red-500"},Fe={key:0,class:"text-sm leading-tight"},ze={class:"grid justify-center max-w-sm grid-cols-1 gap-2 mx-auto"},Ye={key:0,class:"p-2 border border-gray-600"},Ie=t("h1",{class:"text-lg font-semibold border-b-2 border-gray-800"},"MCQ",-1),Ke={class:"py-2"},Oe=t("p",{class:"font-semibold"},"Start Time",-1),Ue={class:"text-sm"},He={key:0,class:"py-2"},Je=t("p",{class:"font-semibold"}," End Time",-1),Xe={class:"text-sm"},Ze={class:"flex flex-wrap items-center justify-center gap-3"},et=["onClick"],tt=h("MCQ Solve "),st=h("Leaderboard "),nt={key:1,class:"flex flex-wrap items-center justify-center gap-3"},ot=h("Written Exam "),at=["href"],lt=h("Written Leaderboard "),it={key:1,class:"py-10 text-center"},ct=t("button",{class:"btn btn-primary btn-circle loading"},null,-1),rt=[ct],dt={class:"fixed inset-0 z-10 overflow-y-auto"},mt={class:"min-h-screen px-4 text-center bg-[rgba(0,0,0,0.6)]"},ut=t("span",{class:"inline-block h-screen align-middle","aria-hidden":"true"}," \u200B ",-1),_t={class:"inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"},bt={class:"mt-2"},ht={class:"text-sm text-gray-500"},vt={setup(pt){const L=G(),i=N(()=>L.state.currentTime),y=g({show:!1,title:"",message:""}),w=V();localStorage.getItem("medicalad_22")||w.replace({name:"Login"});function b(l,o){y.value={show:!0,title:`${l} will be available soon`,message:`We are working on ${l}. Please check back after the time ${o}.`}}function T(){y.value={show:!1,title:"",message:""}}const v=g([]);let $=[];const B=g(new Set),q=g(""),j=g([]),x=g([]),A=g([]);g(""),(()=>{z.get(Y+"?type=examlist").then(l=>{v.value=l.data.routines,x.value=l.data.routines,v.value.forEach(o=>{o.subject&&B.value.add(o.subject.split(" ")[0]),o.exam_category&&A.value.push(o.exam_category),new Date(o.upore_thakbo).getTime()>=i.value&&$.length<5&&$.push(o)}),j.value=$,M(route.query.subject||"")}).catch(l=>{console.error(l)})})();const M=l=>{q.value=l,w.push("/?subject="+l),x.value=v.value.filter(o=>o.subject.includes(l)),chapters.value=new Set(x.value.map(o=>o.chapter))},R=l=>{chapter.value=l,w.push("/?subject="+q.value+"&chapter="+l),x.value=v.value.filter(o=>o.chapter.includes(chapter.value)&&o.subject.includes(q.value))},{formattedDate:C}=H(),Q=l=>{w.push(`/exam/${l}`)},W={"Physics 1st Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-physics-science-flaticons-lineal-color-flat-icons.png","Physics 2nd Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-physics-online-education-flaticons-lineal-color-flat-icons.png","Chemistry 1st Paper":"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-chemistry-bioengineering-flaticons-lineal-color-flat-icons.png","Chemistry 2nd Paper":"https://img.icons8.com/external-smashingstocks-isometric-smashing-stocks/55/null/external-Molecules-medical-and-healthcare-smashingstocks-isometric-smashing-stocks.png","Biology 1st Paper":"https://img.icons8.com/external-wanicon-lineal-color-wanicon/64/null/external-biology-ecology-environment-wanicon-lineal-color-wanicon.png","Biology 2nd Paper":"https://img.icons8.com/external-filled-line-gradient-andi-nur-abdillah/64/null/external-biology-human-organ-filled-line-gradient-filled-line-gradient-andi-nur-abdillah-2.png",Bangla:"https://img.icons8.com/external-flatarticons-blue-flatarticons/65/null/external-bangala-bangladesh-independence-day-flatarticons-blue-flatarticons.png",GK:"https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/null/external-knowledge-online-education-flaticons-lineal-color-flat-icons.png",English:"https://img.icons8.com/fluency/48/null/brick.png"};return(l,o)=>{const p=F("router-link");return s(),n(k,null,[v.value.length>0?(s(),n("div",J,[j.value&&!l.$route.query.subject?(s(),n("div",X,[(s(!0),n(k,null,E(j.value,(e,_)=>(s(),n("div",{key:_,class:"relative p-2 my-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl"},[Z,new Date(e.start_time).getTime()>a(i)?(s(),n("h1",ee," Upcoming Exam... ")):new Date(e.end_time)>new Date?(s(),n("h1",te," Ongoing Exam... ")):c("",!0),t("h1",se,u(e.topic),1),t("p",ne,u(e.description),1),oe,t("div",{class:S(["grid justify-center max-w-md grid-cols-1 gap-2 mx-auto",{"sm:grid-cols-2":e.cq_start&&e.start_time}])},[e.start_time?(s(),n("div",ae,[le,t("div",ie,[ce,t("p",re,u(a(C)(new Date(e.start_time))),1)]),t("div",de,[e.end_time?(s(),n("p",me," End Time")):c("",!0),t("p",ue,u(a(C)(new Date(e.end_time))),1)])])):c("",!0)],2),new Date(e.start_time).getTime()>a(i)?(s(),n("div",_e,[be,m(D,{end:new Date(e.start_time)},null,8,["end"])])):new Date(e.end_time)>new Date(a(i))?(s(),n("div",he,[pe,m(D,{end:new Date(e.end_time)},null,8,["end"])])):new Date(e.cq_start)>new Date(a(i))?(s(),n("div",ge,[xe,m(D,{end:new Date(e.cq_start)},null,8,["end"])])):new Date(e.cq_end)>new Date(a(i))?(s(),n("div",fe,[ye,m(D,{end:new Date(e.cq_end)},null,8,["end"])])):c("",!0),t("div",ve,[new Date(e.start_time).getTime()<a(i)?(s(),n("button",{key:0,class:"btn btn-sm",onClick:d=>Q(e.id)}," MCQ Exam ",8,ke)):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[0]||(o[0]=d=>b("MCQ Exam","starts"))}," MCQ Exam ")),new Date(e.end_time).getTime()<a(i)?(s(),f(p,{key:2,class:"btn btn-sm",to:`/solution/${e.id}`},{default:r(()=>[we]),_:2},1032,["to"])):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[1]||(o[1]=d=>b("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(e.start_time).getTime()<a(i)?(s(),f(p,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${e.id}`},{default:r(()=>[Ce]),_:2},1032,["to"])):(s(),n("button",{key:5,class:"mx-2 btn btn-sm",onClick:o[2]||(o[2]=d=>b("Leaderboard","Starts"))}," MCQ Leaderboard "))]),e.cq_link?(s(),n("div",Ee,[new Date(e.cq_start).getTime()<a(i)&&e.cq_link?(s(),f(p,{key:0,class:"btn btn-sm",to:`/cq/${e.id}`},{default:r(()=>[De]),_:2},1032,["to"])):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[3]||(o[3]=d=>b("Written Exam","starts"))}," Written Exam ")),new Date(e.cq_end).getTime()<a(i)&&e.cq_solve?(s(),n("a",{key:2,class:"btn btn-sm",href:e.cq_solve,target:"_blank"},"Written Exam Solve",8,$e)):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[4]||(o[4]=d=>b("Solution","Ends"))}," Written Exam Solve ")),m(p,{class:"mx-2 btn btn-sm",to:`/cql/${e.id}`},{default:r(()=>[qe]),_:2},1032,["to"])])):c("",!0)]))),128))])):c("",!0),l.$route.query.subject?c("",!0):(s(),n("div",je,[Se,t("div",Te,[(s(),n(k,null,E(W,(e,_)=>t("div",{key:_,onClick:d=>M(_),class:S(["bg-gradient-to-tl",""])},[t("div",Qe,[t("img",{src:W[_],alt:"",class:"h-16 mx-auto"},null,8,We),t("p",Pe,u(_),1)])],8,Me)),64))])])),!l.$route.query.chapter&&l.$route.query.subject&&!(l.$route.query.subject==="Weekly"||l.$route.query.subject=="Monthly")?(s(),n("div",Le,[Be,t("div",Ae,[(s(!0),n(k,null,E(l.chapters,(e,_)=>(s(),n("div",{key:_,onClick:d=>R(e),class:S(["bg-gradient-to-tl",""])},[t("div",Ge,[t("p",null,u(e),1)])],8,Re))),128))]),x.value.length>0?(s(),n("div",Ne,[(s(!0),n(k,null,E(x.value,(e,_)=>(s(),n("div",{class:"p-2 space-y-2 text-center shadow-sm bg-gray-50 rounded-xl",key:_},[t("h1",Ve,u(e.topic),1),e.description?(s(),n("p",Fe,u(e.description),1)):c("",!0),t("div",ze,[e.start_time?(s(),n("div",Ye,[Ie,t("div",Ke,[Oe,t("p",Ue,u(a(C)(new Date(e.start_time))),1)]),e.end_time?(s(),n("div",He,[Je,t("p",Xe,u(a(C)(new Date(e.end_time))),1)])):c("",!0)])):c("",!0)]),t("div",Ze,[new Date(e.start_time).getTime()<a(i)?(s(),n("button",{key:0,class:"btn btn-sm",onClick:d=>Q(e.id)}," MCQ Exam ",8,et)):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[5]||(o[5]=d=>b("MCQ Exam","starts"))}," MCQ Exam ")),new Date(e.end_time).getTime()<a(i)?(s(),f(p,{key:2,class:"btn btn-sm",to:`/solution/${e.id}`},{default:r(()=>[tt]),_:2},1032,["to"])):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[6]||(o[6]=d=>b("MCQ Solve","Ends"))}," MCQ Solve ")),new Date(e.start_time).getTime()<a(i)?(s(),f(p,{key:4,class:"mx-2 btn btn-sm",to:`/ranking/${e.id}`},{default:r(()=>[st]),_:2},1032,["to"])):c("",!0)]),e.cq_link?(s(),n("div",nt,[new Date(e.cq_start).getTime()<a(i)&&e.cq_link?(s(),f(p,{key:0,class:"btn btn-sm",to:`/cq/${e.id}`},{default:r(()=>[ot]),_:2},1032,["to"])):(s(),n("button",{key:1,class:"btn btn-sm",onClick:o[7]||(o[7]=d=>b("Written Exam","starts"))}," Written Exam ")),new Date(e.cq_end).getTime()<a(i)&&e.cq_solve?(s(),n("a",{key:2,class:"btn btn-sm",href:e.cq_solve,target:"_blank"},"Written Exam Solve",8,at)):(s(),n("button",{key:3,class:"btn btn-sm",onClick:o[8]||(o[8]=d=>b("Solution","Ends"))}," Written Exam Solve ")),m(p,{class:"mx-2 btn btn-sm",to:`/cql/${e.id}`},{default:r(()=>[lt]),_:2},1032,["to"])])):c("",!0)]))),128))])):c("",!0)])):c("",!0)])):(s(),n("div",it,rt)),m(a(I),{appear:"",show:y.value.show,as:"template"},{default:r(()=>[m(a(K),{as:"div",onClose:T},{default:r(()=>[t("div",dt,[t("div",mt,[m(a(P),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0","enter-to":"opacity-100",leave:"duration-200 ease-in","leave-from":"opacity-100","leave-to":"opacity-0"},{default:r(()=>[m(a(O),{class:"fixed inset-0"})]),_:1}),ut,m(a(P),{as:"template",enter:"duration-300 ease-out","enter-from":"opacity-0 scale-95","enter-to":"opacity-100 scale-100",leave:"duration-200 ease-in","leave-from":"opacity-100 scale-100","leave-to":"opacity-0 scale-95"},{default:r(()=>[t("div",_t,[m(a(U),{as:"h3",class:"text-lg font-medium leading-6 text-gray-900"},{default:r(()=>[h(u(y.value.title),1)]),_:1}),t("div",bt,[t("p",ht,u(y.value.message),1)]),t("div",{class:"mt-4"},[t("button",{type:"button",class:"inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500",onClick:T}," Got it, thanks! ")])])]),_:1})])])]),_:1})]),_:1},8,["show"])],64)}}};export{vt as default};
