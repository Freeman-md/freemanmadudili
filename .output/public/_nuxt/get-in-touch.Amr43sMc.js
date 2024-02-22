import{r as j,g as W,h as D,i as E,o as i,c as a,a as e,j as O,k as T,l as H,m as R,b as g,n as t,q as d,v as u,t as y,F as $,s as B,x as F,y as q,z as L,d as K,A as N,M as G,B as z}from"./entry.D997Pnc_.js";import{u as J}from"./fetch.-QZ52Dpi.js";import{L as Q}from"./link.BQUUdjDT.js";const X=(p,c,b)=>{const l=j({}),m=j({}),f=j({}),n=o=>!o,v=o=>b.includes(o),x=()=>{for(const o in p)l[o]=p[o],m[o]="",f[o]=!1},V=(o,w)=>f[o]?v(o)&&n(w)?"This field is required":o in c?c[o](w):"":"",k=o=>{f[o]=!0,m[o]=V(o,l[o])},I=W(()=>{const o=b.every(_=>l[_]),w=Object.keys(m).every(_=>!m[_]);return o&&w}),C=()=>{Object.keys(l).forEach(o=>{k(o)})};return x(),Object.keys(l).forEach(o=>{D(()=>l[o],(w,_)=>{k(o)})}),{form:l,errors:m,touched:f,touchField:k,isFormValid:I,validateForm:C,initializeForm:x}},A=["Portfolio Website","Project Inquiry / Hiring","Collaboration","Other Inquiries"],Z=["Web Developer","E-Commerce Developer","Frontend Developer","Backend Developer","Full Stack Developer"],Y=["Web Development Projects","UI/UX Design Collaborations","Tech Community Events (Workshops, Seminars)","Open Source Contributions","Joint Venture Tech Startups","Educational Content Creation (Blogs, Tutorials)"],ee=[{value:"0-30000",text:"Under £30,000"},{value:"30000-40000",text:"£30000 - £40000"},{value:"40001-50000",text:"£40001 - £50000"},{value:"50001-75000",text:"£50001 - £75000"},{value:"75000+",text:"Over £75000"}],te=()=>{const p={name:"",email:"",phone:"",interest:"Portfolio Website",field_of_study:"",profile_url:"",portfolio_purpose:"",portfolio_description:"",personal_information:"",role:"",role_description:"",budget:"",collaboration:"",collaboration_overview:"",inquiry:""},c=["name","email","phone","interest"],b={email:o=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o)?"":"Invalid email format",phone:o=>/^\+?([0-9]{1,3})\s?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,4})[\s-]?([0-9]{1,9})$/.test(o)?"":"Phone must be a valid number",interest:o=>o&&A.includes(o)?"":"Selected interest is invalid"},{form:l,errors:m,isFormValid:f,touchField:n,validateForm:v,initializeForm:x}=X(p,b,c);return{budgets:ee,interests:A,roles:Z,collaborations:Y,selectInterest:o=>{n("interest"),l.interest=o},selectBudget:o=>{n("budget"),l.budget=o},isSelectedInterest:o=>l.interest===o,isSelectedBudget:o=>l.budget===o,form:l,errors:m,isFormValid:f,touchField:n,validateForm:v,initializeForm:x}},oe=()=>{const c=E().public.api_url;return{createContact:async l=>(console.log("making request"),await J(`${c}/api/contacts`,{method:"POST",body:{data:l},watch:!1},"$K3vAc52QKd"))}},se={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"w-6 h-6",viewBox:"0 0 24 24"},ne=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0M4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.9 17.9 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632"},null,-1),re=[ne];function ie(p,c){return i(),a("svg",se,[...re])}const le={render:ie},ae={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"w-6 h-6",viewBox:"0 0 24 24"},ce=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"},null,-1),de=[ce];function ue(p,c){return i(),a("svg",ae,[...de])}const pe={render:ue},me={xmlns:"http://www.w3.org/2000/svg",fill:"none",stroke:"currentColor","stroke-width":"1.5",class:"w-6 h-6",viewBox:"0 0 24 24"},_e=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48 48 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A24 24 0 0 1 12 15.75a24 24 0 0 1-7.577-1.22 2 2 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48 48 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a49 49 0 0 0-7.5 0M12 12.75h.008v.008H12z"},null,-1),he=[_e];function fe(p,c){return i(),a("svg",me,[...he])}const U={render:fe},ve={viewBox:"0 0 24 24"},ye=e("path",{fill:"currentColor",d:"M12 2A10 10 0 1 1 2 12 10 10 0 0 1 12 2m0-2a12 12 0 1 0 12 12A12 12 0 0 0 12 0",opacity:".25"},null,-1),be=e("path",{fill:"currentColor",d:"M22 12a10 10 0 0 1-10 10v-2a8 8 0 0 0 8-8Z"},null,-1),we=[ye,be];function ge(p,c){return i(),a("svg",ve,[...we])}const xe={render:ge},ke={class:"container space-y-4 pt-28"},Ce=e("h1",{class:"uppercase text-sm text-white"},"Get In Touch",-1),Fe=e("h2",{class:"font-bold text-primary text-5xl"}," Connect with Freemancodz ",-1),Ve=e("p",{class:"text-smoky"}," Welcome to the hub of creativity and technology. Whether you're seeking a professional portfolio, project inquiry, collaboration, or just want to connect, let's make something amazing together. ",-1),Ie={class:"grid sm:grid-cols-2 gap-4"},Se={class:"space-y-1"},$e={class:"form-control"},Be={class:"text-red-500"},Pe={class:"space-y-1"},je={class:"form-control"},Ue={class:"text-red-500"},qe={class:"space-y-1"},ze={class:"form-control"},Ae={class:"text-red-500"},Me={class:"space-y-2"},We=e("p",{class:"text-primary"},"Select your interest",-1),De={class:"flex flex-wrap"},Ee=["onClick"],Oe={class:"text-red-500"},Te={key:0,id:"portfolio-website",class:"space-y-4"},He={class:"grid sm:grid-cols-2 gap-4"},Re={class:"form-control"},Le={class:"form-control"},Ke={class:"form-control"},Ne={class:"form-control"},Ge={class:"form-control"},Je={key:1,id:"project-inquiry",class:"space-y-4"},Qe={class:"form-control"},Xe=e("option",{value:""},"Type of Project / Role",-1),Ze=["value"],Ye={class:"form-control"},et={class:"space-y-2"},tt=e("p",{class:"text-primary"},"Budget Range",-1),ot={class:"flex flex-wrap"},st=["onClick"],nt={key:2,id:"collaboration",class:"space-y-4"},rt={class:"form-control"},it=e("option",{value:""},"Area of Collaboration",-1),lt=["value"],at={class:"form-control"},ct={key:3,id:"other-inquiries",class:"space-y-4"},dt={class:"form-control"},ut=["disabled"],ht=O({__name:"get-in-touch",setup(p){const c=T(!1),{interests:b,budgets:l,roles:m,collaborations:f,form:n,errors:v,selectInterest:x,selectBudget:V,isSelectedInterest:k,isSelectedBudget:I,isFormValid:C,validateForm:o,initializeForm:w}=te(),{showNotification:_}=H(),M=async()=>{var P;if(o(),!C.value)return _("Please make sure all fields are valid","error"),!1;try{c.value=!0;const{createContact:r}=oe(),s=n,{data:h,error:S}=await r(s);S.value?_((P=S.value)!=null&&P.data.status.toString().startsWith("4")?"Please make sure all inputs are correct":"An error has occurred","error"):h.value&&(w(),_("Thanks for connecting! 👋 Exciting times ahead! 🚀","success"))}catch(r){_(r.message||"An error has occurred","error")}finally{c.value=!1}};return R({title:"Connect with Freemancodz"}),(P,r)=>(i(),a("main",ke,[Ce,Fe,Ve,e("form",{onSubmit:N(M,["prevent"]),class:"text-white pt-4 space-y-4"},[e("div",Ie,[e("div",Se,[e("div",$e,[g(t(le),{class:"w-10"}),d(e("input",{name:"name",type:"text",placeholder:"Fullname","onUpdate:modelValue":r[0]||(r[0]=s=>t(n).name=s)},null,512),[[u,t(n).name]])]),e("small",Be,y(t(v).name),1)]),e("div",Pe,[e("div",je,[g(t(G),{class:"w-10"}),d(e("input",{name:"email",type:"text",placeholder:"Email Address","onUpdate:modelValue":r[1]||(r[1]=s=>t(n).email=s)},null,512),[[u,t(n).email]])]),e("small",Ue,y(t(v).email),1)]),e("div",qe,[e("div",ze,[g(t(pe),{class:"w-10"}),d(e("input",{name:"phone",type:"text",placeholder:"Phone Number","onUpdate:modelValue":r[2]||(r[2]=s=>t(n).phone=s)},null,512),[[u,t(n).phone]])]),e("small",Ae,y(t(v).phone),1)])]),e("div",Me,[We,e("div",De,[(i(!0),a($,null,B(t(b),(s,h)=>(i(),a("button",{onClick:S=>t(x)(s),key:h,type:"button",class:z(["flex-1 btn mr-4 mb-4",[t(k)(s)?"btn-primary bg-primary/10":"btn-white"]])},y(s),11,Ee))),128))]),e("small",Oe,y(t(v).interest),1)]),e("div",null,[t(n).interest==="Portfolio Website"?(i(),a("section",Te,[e("div",He,[e("div",Re,[g(t(U),{class:"w-10"}),d(e("input",{name:"field-of-study",type:"text",placeholder:"Field of Study","onUpdate:modelValue":r[3]||(r[3]=s=>t(n).field_of_study=s)},null,512),[[u,t(n).field_of_study]])]),e("div",Le,[g(t(Q),{class:"w-6"}),d(e("input",{name:"field-of-study",type:"text",placeholder:"Linkedin Profile","onUpdate:modelValue":r[4]||(r[4]=s=>t(n).profile_url=s)},null,512),[[u,t(n).profile_url]])])]),e("div",Ke,[d(e("textarea",{name:"portfolio-purpose",placeholder:"Purpose of Needing a Portfolio Website",rows:"4",class:"resize-none","onUpdate:modelValue":r[5]||(r[5]=s=>t(n).portfolio_purpose=s)},null,512),[[u,t(n).portfolio_purpose]])]),e("div",Ne,[d(e("textarea",{name:"portfolio-description",placeholder:"Description of Ideal Portfolio Website",rows:"4",class:"resize-none","onUpdate:modelValue":r[6]||(r[6]=s=>t(n).portfolio_description=s)},null,512),[[u,t(n).portfolio_description]])]),e("div",Ge,[d(e("textarea",{name:"personal-information",placeholder:"Personal Information (Optional)",rows:"4",class:"resize-none","onUpdate:modelValue":r[7]||(r[7]=s=>t(n).personal_information=s)},null,512),[[u,t(n).personal_information]])])])):F("",!0),t(n).interest==="Project Inquiry / Hiring"?(i(),a("section",Je,[e("div",Qe,[g(t(U),{class:"w-10"}),d(e("select",{name:"project-role","onUpdate:modelValue":r[8]||(r[8]=s=>t(n).role=s)},[Xe,(i(!0),a($,null,B(t(m),(s,h)=>(i(),a("option",{value:s,key:h},y(s),9,Ze))),128))],512),[[q,t(n).role]])]),e("div",Ye,[d(e("textarea",{name:"project-description",placeholder:"Brief Description of Project/Role",rows:"4",class:"resize-none","onUpdate:modelValue":r[9]||(r[9]=s=>t(n).role_description=s)},null,512),[[u,t(n).role_description]])]),e("div",et,[tt,e("div",ot,[(i(!0),a($,null,B(t(l),(s,h)=>(i(),a("button",{onClick:S=>t(V)(s.value),key:h,type:"button",class:z(["flex-1 btn mr-4 mb-4",[t(I)(s.value)?"btn-primary bg-primary/10":"btn-white"]])},y(s.text),11,st))),128))])])])):F("",!0),t(n).interest==="Collaboration"?(i(),a("section",nt,[e("div",rt,[g(t(U),{class:"w-10"}),d(e("select",{name:"collaboration","onUpdate:modelValue":r[10]||(r[10]=s=>t(n).collaboration=s)},[it,(i(!0),a($,null,B(t(f),(s,h)=>(i(),a("option",{value:s,key:h},y(s),9,lt))),128))],512),[[q,t(n).collaboration]])]),e("div",at,[d(e("textarea",{name:"collaboration-overview",placeholder:"Overview of Collaboration Idea",rows:"4",class:"resize-none","onUpdate:modelValue":r[11]||(r[11]=s=>t(n).collaboration_overview=s)},null,512),[[u,t(n).collaboration_overview]])])])):F("",!0),t(n).interest==="Other Inquiries"?(i(),a("section",ct,[e("div",dt,[d(e("textarea",{name:"other-inquiries",placeholder:"What do you have in mind?",rows:"4",class:"resize-none","onUpdate:modelValue":r[12]||(r[12]=s=>t(n).inquiry=s)},null,512),[[u,t(n).inquiry]])])])):F("",!0)]),e("button",{type:"submit",class:"btn btn-primary disabled:!btn-smoky flex items-center justify-center",disabled:!t(C)},[t(c)?(i(),L(t(xe),{key:0,class:"animate-spin w-5 h-5 mr-3"})):F("",!0),K(" Submit & Connect with Freemancodz ")],8,ut)],32)]))}});export{ht as default};
