var M=Object.defineProperty,S=Object.defineProperties;var H=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var j=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var x=(a,r,l)=>r in a?M(a,r,{enumerable:!0,configurable:!0,writable:!0,value:l}):a[r]=l,w=(a,r)=>{for(var l in r||(r={}))j.call(r,l)&&x(a,l,r[l]);if(f)for(var l of f(r))D.call(r,l)&&x(a,l,r[l]);return a},v=(a,r)=>S(a,H(r));import{k as N,O as A,H as I,b as C,o as s,d as o,g as n,f as u,m as L,t as g,l as R,w as O,h as T,F as m,e as k,L as Q,M as B,n as d}from"./index.f0bb7909.js";import{_ as J}from"./plugin-vue_export-helper.21dcd24c.js";const V={data(){return{timing:null,solutionv:!1,retake:!1,questions:[],solution:[],result:[],unknown:!1,loading:!0,eload:!1,minute:0,second:0,end:Date.now()+12e6,show:!1,url:"",solutionpdf:"",starttime:Date.now(),ended:null,inttime:109090,immediate:!0,viewDetails:!1,score:null,status:{Correct:0,Wrong:0,Not_Answered:0}}},beforeRouteEnter(a,r,l){var t;if((t=JSON.parse(localStorage.getItem("medicalad_22")))==null?void 0:t.roll){l();return}l({path:"/login"})},methods:{endalert(){this.$swal({icon:"warning",title:"Will be available after the time ends"})},getQuestionLink(){this.loading=!0;let a=null,r=this.$route.query.type||"examlist";fetch(N+"?type="+r+"&id="+this.$route.params.id).then(l=>l.json()).then(l=>{if(new Date(l.exam.start_time).getTime()>Date.now()){this.$router.push("/");return}this.url="https://script.google.com/macros/s/AKfycbz9OmMxzknSGJ96kpT8vuatKAxa2BLJ6qnC-fsCufUkeiSymRniQAs4OFTiHY8lQ3zZ1Q/exec?sheet="+l.exam.exam.substr(39,44),this.ended=new Date(l.exam.end_time).getTime(),this.timelimit=l.exam.timelimit*6e4,this.immediate=!l.exam.special,this.solutionpdf=l.exam.solve_sheet,a=l.exam.time;let _=JSON.parse(localStorage.getItem("medicalad_22")).roll;fetch(this.url+"&type=check&phone="+_).then(t=>t.json()).then(t=>{t.message=="exists"||this.ended<Date.now()?(this.result=t.result?t.result:["","Time's up"],fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{this.solution=c;let h=a;this.inttime=h*6e4,this.end=h*6e4}),this.unknown=!1,this.loading=!1):(this.unknown=!0,fetch(this.url+"&type=question").then(c=>c.json()).then(c=>{let h=localStorage.getItem(`attempt${this.$route.params.id}`);h?localStorage.setItem(`attempt${this.$route.params.id}`,Number(h)+1):localStorage.setItem(`attempt${this.$route.params.id}`,1),this.questions=c.map(e=>v(w({},e),{selected:""})),this.questions=this.questions.sort(()=>Math.random()-.5),this.$route.query.q&&(this.questions=this.questions.slice(0,parseInt(this.$route.query.q)));let y=a;this.inttime=y*6e4,this.end=y*6e4,this.loading=!1,this.showRemaining(this.end+Date.now()),this.autoSubmit()}))})})},startRetake(){this.retake=!0,this.showRemaining(Date.now()+this.end)},retakeResult(){let a=this.solution.reduce((r,l)=>(l.correct==l.selected?(r+=1,this.status.Correct+=1):l.selected?(r-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,r),0);this.$swal({icon:"success",title:"Success",text:`You Scored ${a}, Correct ${this.status.Correct} Wrong ${this.status.Wrong} Not Answered ${this.status.Not_Answered}`}).then(()=>{this.retake=!1,this.show=!1,this.questions=this.solution,this.viewDetails=!this.viewDetails,this.inttime=this.solution.length,this.score=a,this.solution=this.solution.map(r=>v(w({},r),{selected:""})),window.scroll(0,0)})},submitAns(){let a=Date.now()-this.starttime;this.eload=!0;let r=this.questions.reduce((h,y)=>(y.correct==y.selected?(h+=1,this.status.Correct+=1):y.selected?(h-=.25,this.status.Wrong+=1):this.status.Not_Answered+=1,h),0);clearTimeout(this.timing);let{roll:l,name:_,college:t}=JSON.parse(localStorage.getItem("medicalad_22")),c=this.questions.map((h,y)=>{let i=[h.a,h.b,h.c,h.d].indexOf(h.selected);return{id:y,s:i}}).filter(h=>h.s>-1);fetch(this.url,{method:"POST",mode:"no-cors",cache:"no-cache",redirect:"follow",body:JSON.stringify({roll:l,name:_,attempt:localStorage.getItem(`attempt${this.$route.params.id}`)||1,score:r,college:t,duration:a,submission:JSON.stringify(c)})}).then(()=>{clearTimeout(this.timing),parseInt(this.$route.query.q||this.questions.length),this.$swal({icon:"success",title:"Successfully Submitted",text:`You Scored ${r}`}).then(()=>{localStorage.removeItem(`attempt${this.$route.params.id}`),this.viewDetails=!0,this.show=!1,this.score=r,window.scroll(0,0)})})},gotoLeaderboard(){this.$router.replace(`/ranking/${this.$route.params.id}`)},autoSubmit(){this.timing=setTimeout(()=>{this.show=!1,this.submitAns()},this.inttime)},showRemaining(a){this.show=!0;const r=setInterval(()=>{const l=a-Date.now();if(l<0){clearInterval(r);return}const _=Math.floor(l/this._days),t=Math.floor(l%this._days/this._hours),c=Math.floor(l%this._hours/this._minutes),h=Math.floor(l%this._minutes/this._seconds);this.second=h<10?"0"+h:h,this.minute=c<10?"0"+c:c,this.hours=t<10?"0"+t:t,this.days=_<10?"0"+_:_},1e3)}},created(){this.getQuestionLink(),window.scrollTo(0,0)},computed:v(w({},A(["user"])),{_seconds:()=>1e3,_minutes(){return this._seconds*60},_hours(){return this._minutes*60},_days(){return this._hours*24},currentTime:()=>I.state.currentTime})},p=a=>(Q("data-v-74ecc220"),a=a(),B(),a),W={key:0,class:"py-5 mx-auto mt-5 bg-white rounded md:w-2/3"},Y={class:"py-3 text-center"},z={key:0,class:"my-4 text-2xl font-bold text-gray-900 ma-auto"},$={key:0},E={key:1,class:"text-center text-gray-900"},F={class:"py-5"},K=L(" View Solution "),G=["textContent"],P={key:0,class:"my-5 text-center"},U={key:1,class:"text-center"},Z=["textContent"],X={key:2,class:"text-center"},q=p(()=>n("button",{class:"btn loading btn-circle"},null,-1)),ee=[q],te={key:3,class:"my-4 font-semibold text-center text-gray-900"},se={key:1,class:"pb-10"},oe={class:"py-4 text-center"},re={class:"text-2xl font-bold text-gray-900"},ne=p(()=>n("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),ie={class:"mx-2 text-gray-900 md:w-2/3 md:mx-auto"},le=["src"],ce=["innerHTML"],de={class:"btn btn-sm"},ae={class:"mt-2"},ue=["src","onClick"],he=["innerHTML","onClick"],be=["src","onClick"],ge=["innerHTML","onClick"],me=["src","onClick"],ye=["innerHTML","onClick"],_e=["src","onClick"],we=["innerHTML","onClick"],ve={class:"mb-10 text-center"},pe={key:2,class:"pb-10"},ke={class:"py-4 text-center"},fe={class:"text-2xl font-bold text-gray-900"},xe=p(()=>n("p",{class:"text-center"}," \u09AA\u09CD\u09B0\u09A4\u09BF\u099F\u09BF \u09AA\u09CD\u09B0\u09B6\u09CD\u09A8\u09C7\u09B0 \u0995\u09CD\u09B7\u09C7\u09A4\u09CD\u09B0\u09C7 \u09A4\u09C1\u09AE\u09BF \u0995\u09C7\u09AC\u09B2 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u0995\u09B0\u09BE\u09B0 \u09B8\u09C1\u09AF\u09CB\u0997 \u09AA\u09BE\u09AC\u09C7\u0964 \u098F\u0995\u09AC\u09BE\u09B0 \u0989\u09A4\u09CD\u09A4\u09B0 \u09B8\u09BF\u09B2\u09C7\u0995\u09CD\u099F \u0995\u09B0\u09BE\u09B0 \u09AA\u09B0 \u09A4\u09BE \u09AA\u09B0\u09BF\u09AC\u09B0\u09CD\u09A4\u09A8 \u0995\u09B0\u09BE\u09B0 \u0995\u09CB\u09A8\u09CB \u09B8\u09C1\u09AF\u09CB\u0997 \u09A8\u09BE\u0987\u0964 ",-1)),Ce={key:0,class:"mx-2 md:w-2/3 md:mx-auto stop_copy"},Te=["src"],Le=["innerHTML"],Me={class:"btn btn-sm"},Se={class:"mt-2"},He=["src","onClick"],je={key:1,class:"mt-3"},De=["innerHTML","onClick"],Ne=["src","onClick"],Ae=["innerHTML","onClick"],Ie=["src","onClick"],Re=["innerHTML","onClick"],Oe=["src","onClick"],Qe=["innerHTML","onClick"],Be={key:0,class:"my-2 text-center"},Je={key:1,class:"mb-10 text-center"},Ve=["disabled"],We={key:1,class:"mx-2 md:w-2/3 md:mx-auto"},Ye={class:"flex flex-wrap justify-center"},ze={class:"w-full p-3 md:w-1/2"},$e={class:"text-center"},Ee={class:"text-lg font-semibold text-gray-900"},Fe={class:"text-gray-600"},Ke={class:"flex flex-wrap items-center justify-center gap-3 p-3 bg-white rounded"},Ge={class:"text-gray-900"},Pe={class:"text-lg font-bold"},Ue={class:"text-lg font-bold"},Ze={class:"text-lg font-bold"},Xe={class:"text-lg font-bold"},qe=["src"],et=["innerHTML"],tt={class:"btn btn-sm"},st={class:"mt-2"},ot=["src","onClick"],rt={key:1,class:"mt-3"},nt=["innerHTML","onClick"],it=["src","onClick"],lt=["innerHTML","onClick"],ct=["src","onClick"],dt=["innerHTML","onClick"],at=["src","onClick"],ut=["innerHTML","onClick"],ht={key:0,class:"my-2 text-center"},bt={key:1,class:"mb-10 text-center"},gt=["disabled"],mt={key:3,class:"white--text fixed__timer"},yt={class:"text-white bg-blue-500 border border-white shadow"},_t={key:1,class:"flex items-center justify-center w-full h-screen"},wt=p(()=>n("div",{class:"flex items-center justify-center -mt-24 space-x-1 text-sm text-gray-700"},[n("svg",{fill:"none",class:"w-10 h-10 animate-spin",viewBox:"0 0 32 32",xmlns:"http://www.w3.org/2000/svg"},[n("path",{"clip-rule":"evenodd",d:"M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z",fill:"currentColor","fill-rule":"evenodd"})]),n("div",{class:"text-lg"},"Loading ...")],-1)),vt=[wt];function pt(a,r,l,_,t,c){const h=C("router-link"),y=C("pie-chart");return t.loading?(s(),o("div",_t,vt)):(s(),o("div",{key:0,onContextmenu:e=>!1},[!t.unknown&&!t.loading&&!t.retake?(s(),o("div",W,[n("div",Y,[t.result[1]?(s(),o("h2",z,[t.result[1]!=="Time's up"?(s(),o("span",$,"You Scored:")):u("",!0),L(" "+g(t.result[1]),1)])):u("",!0),t.result[1]=="Time's up"?(s(),o("p",E,"But you can still give the exam. Click 'Test yourself again'.")):u("",!0),n("div",F,[this.ended<c.currentTime||t.immediate?(s(),R(h,{key:0,to:`/solution/${this.$route.params.id}`,class:"my-2 btn btn-primary"},{default:O(()=>[K]),_:1},8,["to"])):(s(),o("button",{key:1,class:"btn btn-primary",onClick:r[0]||(r[0]=(...e)=>c.endalert&&c.endalert(...e)),textContent:g("View Solution")},null,8,G))])]),!t.retake&&t.solution.length>0?(s(),o("div",P,[T(h,{to:`/ranking/${this.$route.params.id}`,class:"mx-auto my-2 btn btn-primary",text:"View Your Rank"},null,8,["to"])])):u("",!0),!t.retake&&t.solution.length>0?(s(),o("div",U,[n("button",{class:"mx-auto btn btn-primary",onClick:r[1]||(r[1]=(...e)=>c.startRetake&&c.startRetake(...e)),textContent:g("Test Yourself Again")},null,8,Z)])):(s(),o("div",X,ee)),!t.retake&&t.solution.length>0?(s(),o("div",te," Retake exam score will not be recorded ")):u("",!0)])):u("",!0),t.retake?(s(),o("div",se,[n("div",oe,[n("h1",re," Retake Exam - "+g(this.$route.params.id),1),ne]),n("div",ie,[(s(!0),o(m,null,k(t.solution,(e,i)=>(s(),o("div",{key:i,class:d(["p-5 mx-auto my-3 text-lg text-gray-900 bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.solution[i].selected}])},[e.question.includes("drive.google.com")?(s(),o("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,le)):(s(),o("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,ce)),n("span",de,"Q No. "+g(i+1),1),n("div",ae,[e.a.includes("drive.google.com")?(s(),o("img",{key:0,src:e.a,onClick:b=>t.solution[i].selected=e.a,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white "}`]),alt:""},null,10,ue)):(s(),o(m,{key:1},[e.a?(s(),o("div",{key:0,innerHTML:e.a,onClick:b=>t.solution[i].selected=e.a,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,he)):u("",!0)],64)),e.b.includes("drive.google.com")?(s(),o("img",{key:2,src:e.b,onClick:b=>t.solution[i].selected=e.b,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,be)):(s(),o(m,{key:3},[e.b?(s(),o("div",{key:0,innerHTML:e.b,onClick:b=>t.solution[i].selected=e.b,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ge)):u("",!0)],64)),e.c.includes("drive.google.com")?(s(),o("img",{key:4,src:e.c,onClick:b=>t.solution[i].selected=e.c,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,me)):(s(),o(m,{key:5},[e.c?(s(),o("div",{key:0,innerHTML:e.c,onClick:b=>t.solution[i].selected=e.c,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ye)):u("",!0)],64)),e.d.includes("drive.google.com")?(s(),o("img",{key:6,src:e.d,onClick:b=>t.solution[i].selected=e.d,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,_e)):(s(),o(m,{key:7},[e.d?(s(),o("div",{key:0,innerHTML:e.d,onClick:b=>t.solution[i].selected=e.d,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,we)):u("",!0)],64))])],2))),128)),n("div",ve,[n("button",{onClick:r[2]||(r[2]=(...e)=>c.retakeResult&&c.retakeResult(...e)),class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"}," Submit ")])])])):u("",!0),t.questions.length>0?(s(),o("div",pe,[n("div",ke,[n("h1",fe," Exam - "+g(this.$route.params.id),1),xe]),t.viewDetails?(s(),o("div",We,[n("div",null,[n("div",Ye,[n("div",ze,[n("div",$e,[n("h3",Ee," You Scored: "+g(t.score),1),n("p",Fe," out of "+g(t.questions.length),1)])])])]),n("div",null,[n("div",Ke,[n("div",null,[T(y,{data:t.status},null,8,["data"])]),n("div",Ge,[n("p",Pe," Total: "+g(t.questions.length),1),n("p",Ue," Correct: "+g(t.status.Correct),1),n("p",Ze," Incorrect: "+g(t.status.Wrong),1),n("p",Xe," Not Answered: "+g(t.status.Not_Answered),1)])])]),(s(!0),o(m,null,k(t.questions,(e,i)=>(s(),o("div",{key:i,class:d(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[i].selected}])},[e.question.includes("drive.google.com")?(s(),o("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,qe)):(s(),o("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,et)),n("span",tt,"Q No. "+g(i+1),1),n("div",st,[e.a.includes("drive.google.com")?(s(),o("img",{key:0,src:e.a,onClick:b=>t.questions[i].selected=e.a,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ot)):(s(),o("div",rt,[e.a?(s(),o("div",{key:0,innerHTML:e.a,onClick:b=>t.questions[i].selected=e.a,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,nt)):u("",!0),e.b.includes("drive.google.com")?(s(),o("img",{key:1,src:e.b,onClick:b=>t.questions[i].selected=e.b,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,it)):(s(),o(m,{key:2},[e.b?(s(),o("div",{key:0,innerHTML:e.b,onClick:b=>t.questions[i].selected=e.b,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,lt)):u("",!0)],64)),e.c.includes("drive.google.com")?(s(),o("img",{key:3,src:e.c,onClick:b=>t.questions[i].selected=e.c,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,ct)):(s(),o(m,{key:4},[e.c?(s(),o("div",{key:0,innerHTML:e.c,onClick:b=>t.questions[i].selected=e.c,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,dt)):u("",!0)],64)),e.d.includes("drive.google.com")?(s(),o("img",{key:5,src:e.d,onClick:b=>t.questions[i].selected=e.d,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,at)):(s(),o(m,{key:6},[e.d?(s(),o("div",{key:0,innerHTML:e.d,onClick:b=>t.questions[i].selected=e.d,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,ut)):u("",!0)],64))]))])],2))),128)),t.viewDetails?(s(),o("div",ht,[n("button",{onClick:r[5]||(r[5]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(s(),o("div",bt,[n("button",{onClick:r[6]||(r[6]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},g(t.eload?"Loading...":"Submit"),9,gt)]))])):(s(),o("div",Ce,[(s(!0),o(m,null,k(t.questions,(e,i)=>(s(),o("div",{key:i,class:d(["p-5 mx-auto my-3 text-lg bg-white border border-gray-300 rounded-md shadow-lg kalpurush",{"stop-events":t.questions[i].selected}])},[e.question.includes("drive.google.com")?(s(),o("img",{key:0,src:e.question,class:"object-contain w-full py-3",alt:""},null,8,Te)):(s(),o("div",{key:1,class:"mb-2 text-lg font-semibold text-gray-900",innerHTML:e.question},null,8,Le)),n("span",Me,"Q No. "+g(i+1),1),n("div",Se,[e.a.includes("drive.google.com")?(s(),o("img",{key:0,src:e.a,onClick:b=>t.questions[i].selected=e.a,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,He)):(s(),o("div",je,[e.a?(s(),o("div",{key:0,innerHTML:e.a,onClick:b=>t.questions[i].selected=e.a,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.a==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,De)):u("",!0),e.b.includes("drive.google.com")?(s(),o("img",{key:1,src:e.b,onClick:b=>t.questions[i].selected=e.b,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ne)):(s(),o(m,{key:2},[e.b?(s(),o("div",{key:0,innerHTML:e.b,onClick:b=>t.questions[i].selected=e.b,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.b==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Ae)):u("",!0)],64)),e.c.includes("drive.google.com")?(s(),o("img",{key:3,src:e.c,onClick:b=>t.questions[i].selected=e.c,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Ie)):(s(),o(m,{key:4},[e.c?(s(),o("div",{key:0,innerHTML:e.c,onClick:b=>t.questions[i].selected=e.c,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.c==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Re)):u("",!0)],64)),e.d.includes("drive.google.com")?(s(),o("img",{key:5,src:e.d,onClick:b=>t.questions[i].selected=e.d,class:d(["object-contain w-full py-3",`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`]),alt:""},null,10,Oe)):(s(),o(m,{key:6},[e.d?(s(),o("div",{key:0,innerHTML:e.d,onClick:b=>t.questions[i].selected=e.d,class:d(`cursor-pointer  transform hover:scale-105  transition duration-150 hover:font-semibold text-gray-900 bg-white  my-3 p-3 rounded  ${e.d==e.selected?"border-2 border-green-500 bg-white ":" bg-white border-2 border-gray-300"}`)},null,10,Qe)):u("",!0)],64))]))])],2))),128)),t.viewDetails?(s(),o("div",Be,[n("button",{onClick:r[3]||(r[3]=(...e)=>c.gotoLeaderboard&&c.gotoLeaderboard(...e)),class:"btn btn-large btn-primary"}," Leaderboard ")])):u("",!0),t.viewDetails?u("",!0):(s(),o("div",Je,[n("button",{onClick:r[4]||(r[4]=(...e)=>c.submitAns&&c.submitAns(...e)),disabled:t.eload,class:"px-4 py-3 mx-auto font-semibold text-white rounded shadow outline-none hover:shadow-lg bg-gradient-to-t from-green-500 to-green-400"},g(t.eload?"Loading...":"Submit"),9,Ve)]))]))])):u("",!0),t.show?(s(),o("div",mt,[n("div",yt,g(t.minute)+" : "+g(t.second),1)])):u("",!0)],32))}var Ct=J(V,[["render",pt],["__scopeId","data-v-74ecc220"]]);export{Ct as default};
