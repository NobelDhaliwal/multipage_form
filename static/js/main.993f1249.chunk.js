(this.webpackJsonpmymultipageform=this.webpackJsonpmymultipageform||[]).push([[0],{80:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(2),c=a(0),r=a.n(c),s=a(8),i=a.n(s),j=a(112),o=a(127),l=a(123),b=a(125),d=a(11),u=a(124),O=a(119),x=a(16),m=a.n(x),h=a(118),p=a(39),g=a.n(p),f=a(60),v=a(44),y=r.a.createContext(),C=function(){var e=Object(c.useState)(1),t=Object(v.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)([]),i=Object(v.a)(s,2),j=i[0],o=i[1],l=Object(c.useState)([]),b=Object(v.a)(l,2),d=b[0],u=b[1];return Object(n.jsx)("div",{children:Object(n.jsx)(y.Provider,{value:{currentStep:a,setStep:r,userData:j,setUserData:o,finalData:d,setFinalData:u,submitData:function(){u((function(e){return[].concat(Object(f.a)(e),[j])})),alert("Form Submitted !\ud83d\udc4d"),o(""),r(1),document.write("<h1>Congratulations ! Your Form Submitted</h1>"),document.body.style.backgroundColor="aliceblue",document.write("<h1>Thankyou!\ud83d\udc4d\ud83d\ude00</h1>")}},children:Object(n.jsx)(J,{})})})},D=function(){var e=Object(c.useContext)(y),t=e.setStep,a=e.userData,r=e.setUserData;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{children:Object(n.jsx)("div",{className:"",children:Object(n.jsxs)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,children:[Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",id:"input-with-icon-textfield",onChange:function(e){console.log(e.target.value),r(Object(d.a)(Object(d.a)({},a),{},{firstname:e.target.value}))},value:a.firstname,autoComplete:"off",margin:"normal",label:"FirstName",type:"text",placeholder:"Enter your FirstName",color:"secondary",fullWidth:!0,InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(m.a,{})})}})}),Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",autoComplete:"off",margin:"normal",label:"LastName",type:"text",fullWidth:!0,value:a.lastname,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{lastname:e.target.value}))},placeholder:"Enter your LastName",color:"secondary",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(m.a,{})})}})}),Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",autoComplete:"off",margin:"normal",label:"AGE",type:"number",value:a.age,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{age:e.target.value}))},color:"secondary",placeholder:"Enter your Age",fullWidth:!0,InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(g.a,{})})}})}),Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return t(2)},margin:"normal",size:"medium",color:"primary",children:"Next"})]})})})})},w=a(40),E=a.n(w),I=a(50),N=a.n(I),k=function(){var e=Object(c.useContext)(y),t=e.setStep,a=e.userData,r=e.setUserData;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{children:Object(n.jsxs)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,children:[Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",onChange:function(e){r((function(t){return Object(d.a)(Object(d.a)({},t),{},{email:e.target.value})}))},value:a.email,id:"input-with-icon-textfield",autoComplete:"off",margin:"normal",label:"email",type:"email",placeholder:"Enter your Email",color:"secondary",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(E.a,{})})}})}),Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",autoComplete:"off",value:a.password,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{password:e.target.value}))},margin:"normal",label:"Password",type:"password",placeholder:"Enter your Password",color:"secondary",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(N.a,{})})}})}),Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",autoComplete:"off",margin:"normal",label:"Employee_ID",type:"text",value:a.emp,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{emp:e.target.value}))},placeholder:"Enter your Employee_Id",color:"secondary",size:"medium",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(m.a,{})})}})}),Object(n.jsxs)("div",{children:[Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return t(1)},margin:"normal",size:"medium",color:"primary",children:"Back"})," ",Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return t(3)},margin:"normal",size:"medium",color:"secondary",children:"Next"})]})]})})})},S=a(41),F=a.n(S),A=a(42),P=a.n(A),z=function(){var e=Object(c.useContext)(y),t=(e.submitData,e.setStep),a=e.userData,r=e.setUserData;return Object(n.jsx)(n.Fragment,{children:Object(n.jsx)("form",{children:Object(n.jsxs)(j.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,children:[Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",value:a.phone,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{phone:e.target.value}))},id:"input-with-icon-textfield",autoComplete:"off",margin:"normal",label:"contact",type:"text",placeholder:"Enter your Contact No",color:"secondary",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(F.a,{})})}})}),Object(n.jsx)(j.a,{item:!0,xs:12,lg:12,children:Object(n.jsx)(u.a,{variant:"outlined",value:a.hobb,onChange:function(e){return r(Object(d.a)(Object(d.a)({},a),{},{hobb:e.target.value}))},id:"input-with-icon-textfield",autoComplete:"off",margin:"normal",label:"Hobbies",type:"text",placeholder:"Enter your Hobbies",color:"secondary",InputProps:{startAdornment:Object(n.jsx)(h.a,{position:"start",children:Object(n.jsx)(P.a,{})})}})}),Object(n.jsx)("div",{children:Object(n.jsx)(j.a,{container:!0,children:Object(n.jsxs)(j.a,{item:!0,direction:"row",children:[Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return t(2)},margin:"normal",size:"medium",color:"primary",children:"Back"})," ",Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return t(4)},margin:"normal",size:"medium",color:"secondary",children:"Next"})]})})})]})})})},B=a(117),L=a(120),U=a(122),_=a(121),H=a(126),W=function(){var e=Object(c.useContext)(y),t=e.submitData,a=e.userData,r=e.setStep;return Object(n.jsx)("div",{className:"results",children:Object(n.jsxs)(B.a,{children:[Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(m.a,{})})}),Object(n.jsxs)(U.a,{children:[" FirstName:",a.firstname]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(m.a,{})})}),Object(n.jsxs)(U.a,{children:[" LastName:",a.lastname]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(g.a,{})})}),Object(n.jsxs)(U.a,{children:["Age:",a.age]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(E.a,{})})}),Object(n.jsxs)(U.a,{children:["Email:",a.email]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(m.a,{})})}),Object(n.jsxs)(U.a,{children:["Employee ID:",a.emp]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(F.a,{})})}),Object(n.jsxs)(U.a,{children:["Contact No:",a.phone]})]}),Object(n.jsxs)(L.a,{children:[Object(n.jsx)(_.a,{children:Object(n.jsx)(H.a,{children:Object(n.jsx)(P.a,{})})}),Object(n.jsxs)(U.a,{children:["Hobbies:",a.hobb]})]}),Object(n.jsx)(O.a,{variant:"contained",onClick:function(){return r(3)},margin:"normal",color:"primary",children:"Back"})," ",Object(n.jsx)("span",{}),Object(n.jsx)("span",{}),Object(n.jsx)(O.a,{variant:"contained",onClick:t,margin:"normal",color:"secondary",children:"Submit"})]})})},J=(a(80),function(){var e=Object(c.useContext)(y).currentStep;return Object(n.jsx)(n.Fragment,{children:Object(n.jsxs)("div",{className:"div_style",children:[Object(n.jsx)("h1",{style:{color:"#ff2e7e"},children:"Login Form "}),Object(n.jsx)(j.a,{container:!0,justify:"center",children:Object(n.jsxs)(o.a,{className:"stepper_g",activeStep:e-1,orientation:"horizontal",children:[Object(n.jsx)(l.a,{children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(l.a,{children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(l.a,{children:Object(n.jsx)(b.a,{})}),Object(n.jsx)(l.a,{children:Object(n.jsx)(b.a,{})})]})}),function(e){switch(console.log(e),e){case 1:return Object(n.jsx)(D,{});case 2:return Object(n.jsx)(k,{});case 3:return Object(n.jsx)(z,{});case 4:return Object(n.jsx)(W,{})}}(e)]})})});i.a.render(Object(n.jsx)(n.Fragment,{children:Object(n.jsx)(C,{children:Object(n.jsx)(J,{})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.993f1249.chunk.js.map