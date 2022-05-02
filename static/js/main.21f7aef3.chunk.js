(this["webpackJsonpharvard-puzzle-club"]=this["webpackJsonpharvard-puzzle-club"]||[]).push([[0],{200:function(e,t){},202:function(e,t){},213:function(e,t){},215:function(e,t){},243:function(e,t){},245:function(e,t){},246:function(e,t){},251:function(e,t){},253:function(e,t){},272:function(e,t){},284:function(e,t){},287:function(e,t){},309:function(e,t,n){"use strict";n.r(t);var r,o,a,i,c,s,l,d,b,u,j,p,h,g,f,x,m,O,v,y,w,z,k,S,P,A,I,C,T,E,U,H,N,L,$,_,F,q,B,D,M,J,K,Z,R,W,Y,Q,G,V,X,ee,te,ne,re,oe,ae,ie,ce,se,le,de=n(7),be=n(2),ue=n(320),je=n(20),pe=n(10),he=n(5),ge={colors:{header:"rgb(30,60,120)",vis:"rgba(30,60,120,0.85)",invis:"rgba(30,60,120,0)"},fonts:{family:"Arial, Helvetica, sans-serif"}},fe=n(321),xe=n(322),me=n(187),Oe=n(188),ve=n(34),ye=new me.a({uri:"https://hph-leaderboard-backend.herokuapp.com/",credentials:"include"}),we=new ve.a((function(e,t){var n=localStorage.getItem("token");return n&&e.setContext({headers:{authorization:n}}),t(e)})),ze=Object(Oe.a)((function(){})),ke=new fe.a({cache:new xe.a,link:ve.a.from([ze,we,ye])}),Se=n(323),Pe=n(4),Ae=n(55),Ie=Object(Ae.a)(r||(r=Object(Pe.a)(["\n  query allUsers {\n    allUsers {\n      id\n      displayName\n      score\n      firsts\n      lastTwo\n      foundSecret\n      updatedAt\n      realUpdatedAt\n    }\n  }\n"]))),Ce=Object(Ae.a)(o||(o=Object(Pe.a)(["\n  query userById($id: ID!) {\n    userById(id: $id) {\n      id\n      displayName\n      email\n      score\n      firsts\n      foundSecret\n      createdAt\n      realUpdatedAt\n    }\n  }\n"]))),Te=Object(Ae.a)(a||(a=Object(Pe.a)(["\n  mutation login($displayName: String!, $password: String!) {\n    login(displayName: $displayName, password: $password) {\n      token\n      user {\n        id\n        displayName\n        email\n        score\n        firsts\n        foundSecret\n        createdAt\n        realUpdatedAt\n      }\n    }\n  }\n"]))),Ee=Object(Ae.a)(i||(i=Object(Pe.a)(["\n  mutation updateEmail($id: ID!, $email: String!) {\n    updateEmail(id: $id, email: $email) {\n        id\n        displayName\n        email\n        score\n        firsts\n        createdAt\n        realUpdatedAt\n    }\n  }\n"]))),Ue=Object(Ae.a)(c||(c=Object(Pe.a)(["\n  mutation updatePuzzles($id: ID!, $puzzle: Int!, $answer: String!) {\n    updatePuzzles(id: $id, puzzle: $puzzle, answer: $answer) {\n        id\n        displayName\n        email\n        score\n        firsts\n        foundSecret\n        createdAt\n        realUpdatedAt\n    }\n  }\n"]))),He=he.b.div(s||(s=Object(Pe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100vw;\n  /* min-height: 100vh; */\n  margin: 0;\n  padding-bottom: 80px;\n  padding-top: 48px;\n  /* background-color: palegoldenrod; */\n"]))),Ne=he.b.div(l||(l=Object(Pe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  /* padding-top: 30px;\n  padding-bottom: 150px; */\n  padding: ",";\n  margin: 10px auto auto auto;\n  background-color: white;\n  /* border: rgba(40,40,40,0.5) 4px; */\n  /* border-style: solid; */\n  text-align: center;\n  font-family: ",";\n  /* position: fixed; */\n  /* top: 2vh; */\n  /* background-color: rgba(108,128,150,0.8); */\n  /* animation: color-change 40s infinite;\n  position: center;\n  @keyframes color-change {\n    0% { background-color: rgba(100,128,150,0.8); }\n    20% { background-color: rgba(128,128,100,0.8); }\n    40% { background-color: rgba(100,128,128,0.8); }\n    60% { background-color: rgba(150,100,128,0.8); }\n    80% { background-color: rgba(128,150,100,0.8); }\n    100% { background-color: rgba(108,128,150,0.8); }\n  } */\n"])),(function(e){return e.home?"50px 260px":"50px"}),(function(e){return e.theme.fonts.family})),Le=he.b.h1(d||(d=Object(Pe.a)(["\n  font-weight: bold;\n  font-size: 40px;\n  margin-top: 8px;\n  margin-bottom: 17px;\n  padding: ",";\n"])),(function(e){return e.bottom?"25px 0px 0px 0px":e.home?"0px 100px":"0px"})),$e=he.b.h2(b||(b=Object(Pe.a)(["\n  font-weight: 550;\n  font-size: 27px;\n  margin-top: 12px;\n  margin-bottom: 0px;\n  text-align: left;\n"]))),_e=he.b.h2(u||(u=Object(Pe.a)(["\n  font-style: italic;\n  font-weight: normal;\n  font-size: 20px;\n  margin-top: 0px;\n  margin-bottom: 0px;\n  padding-left: 30px;\n  text-align: left;\n"]))),Fe=he.b.p(j||(j=Object(Pe.a)(["\n  text-align: left;\n"]))),qe=he.b.p(p||(p=Object(Pe.a)(["\n  text-align: left;\n  padding-left: 30px;\n  margin-top: 10px;\n"]))),Be=Object(he.b)(je.b)(h||(h=Object(Pe.a)(["\n  color: black;\n  cursor: pointer;\n  text-decoration: none;\n"]))),De=he.b.a(g||(g=Object(Pe.a)(["\n  width: 200px;\n  margin: auto;\n  margin-top: -7px;\n"]))),Me=he.b.img(f||(f=Object(Pe.a)(["\n  width: 200px;\n"]))),Je=he.b.div(x||(x=Object(Pe.a)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: 100;\n  font-family: ",";\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  background-color: ",";\n  height: auto;\n  width: 100vw;\n"])),(function(e){return e.theme.fonts.family}),(function(e){return e.theme.colors.header})),Ke=he.b.div(m||(m=Object(Pe.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  height: auto;\n"]))),Ze=he.b.div(O||(O=Object(Pe.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  height: auto;\n"]))),Re=Object(he.b)(je.b)(v||(v=Object(Pe.a)(["\n  color: ",";\n  background-color: ",";\n  text-align: center;\n  font-size: 23px;\n  text-decoration: none;\n  padding: 15px 18px 15px 18px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: ",";\n\n  &:hover {\n    background-color: white;\n    color: ",";\n  }\n"])),(function(e){return!e.highlight||e.cancel?"white":e.theme.colors.header}),(function(e){return e.highlight&&!e.cancel?"white":e.theme.colors.header}),(function(e){return e.cancel?"background-color 0.06s ease, color 0.06s ease":"background-color 0.2s ease, color 0.2s ease"}),(function(e){return e.theme.colors.header})),We=he.b.div(y||(y=Object(Pe.a)(["\n  color: ",";\n  background-color: ",";\n  text-align: center;\n  font-size: 23px;\n  text-decoration: none;\n  padding: 15px 18px 15px 18px;\n  font-weight: bold;\n  cursor: default;\n"])),(function(e){return"white"}),(function(e){return e.theme.colors.header})),Ye=he.b.button(w||(w=Object(Pe.a)(["\n  color: white;\n  text-align: center;\n  font-size: 23px;\n  font-family: ",";\n  border: none;\n  background-color: transparent;\n  padding: 15px 18px 15px 18px;\n  font-weight: bold;\n  cursor: pointer;\n  transition: background-color 0.3s ease, color 0.3s ease;\n\n  &:hover {\n    background-color: white;\n    color: ",";\n  }\n"])),(function(e){return e.theme.fonts.family}),(function(e){return e.theme.colors.header})),Qe=he.b.p(z||(z=Object(Pe.a)(["\n  color: white;\n  text-align: center;\n  font-size: 23px;\n  padding: 15px 18px 15px 18px;\n  margin: 0;\n  font-weight: bold;\n"]))),Ge=he.b.div(k||(k=Object(Pe.a)(["\n  align-self: center;\n  border: 4px solid #f3f3f3;\n  border-bottom: ",";\n  border-radius: 50%;\n  margin-right: 15px;\n  width: 15px;\n  height: 15px;\n  animation: spin 13.2s cubic-bezier(0.2, 0.5, 0.7, 0.5) infinite;\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    /* 100% { transform: rotate(360deg); } */\n    10% { transform: rotate(396deg); }\n    20% { transform: rotate(792deg); }\n    30% { transform: rotate(1188deg); }\n    40% { transform: rotate(1584deg); }\n    50% { transform: rotate(1980deg); }\n    60% { transform: rotate(2376deg); }\n    70% { transform: rotate(2772deg); }\n    80% { transform: rotate(3168deg); }\n    90% { transform: rotate(3564deg); }\n    100% { transform: rotate(3960deg); }\n  }\n"])),(function(e){var t=e.theme;return"4px solid ".concat(t.colors.header)})),Ve=n(0),Xe=function(e){var t=e.link,n=e.currOnPage,r=e.wantOnPage,o=e.cancel,a=e.setCancel;return Object(Ve.jsx)(Re,{to:t,highlight:n==r?"yes":"",cancel:o?"yes":"",onClick:function(){return a(!0)},children:r})},et=function(e){var t=e.user,n=e.setUser,r=e.customLogout,o=e.loading,a=e.onPage,i=Object(be.useState)(!1),c=Object(de.a)(i,2),s=c[0],l=c[1];return Qt?Object(Ve.jsxs)(Je,{children:[Object(Ve.jsxs)(Ke,{children:[Object(Ve.jsx)(Xe,{link:"/",currOnPage:a,wantOnPage:"Home",cancel:s,setCancel:l,children:"Home"}),Object(Ve.jsx)(Xe,{link:"/leaderboard",currOnPage:a,wantOnPage:"Leaderboard",cancel:s,setCancel:l,children:"Leaderboard"}),Object(Ve.jsx)(Xe,{link:"/submit",currOnPage:a,wantOnPage:"Submit",cancel:s,setCancel:l,children:"Submit"}),Object(Ve.jsx)(Xe,{link:"/puzzles",currOnPage:a,wantOnPage:"Puzzles",cancel:s,setCancel:l,children:"Puzzles"})]}),t&&t.displayName?Object(Ve.jsxs)(Ze,{children:[Object(Ve.jsx)(Qe,{children:"Welcome, ".concat(t.displayName,"!")}),Object(Ve.jsx)(Ye,{onClick:function(){localStorage.removeItem("token"),n({}),r&&r()},children:"Logout"})]}):o&&Object(Ve.jsx)(Ge,{})]}):Object(Ve.jsxs)(Je,{children:[Object(Ve.jsxs)(Ke,{children:[Object(Ve.jsx)(Xe,{link:"/",currOnPage:a,wantOnPage:"Home",cancel:s,setCancel:l,children:"Home"}),Object(Ve.jsx)(We,{title:"locked",children:"Leaderboard"}),Object(Ve.jsx)(We,{title:"locked",children:"Submit"}),Object(Ve.jsx)(We,{title:"locked",children:"Puzzles"})]}),Object(Ve.jsx)(Ze,{children:Object(Ve.jsx)(Qe,{children:"Hunt will open on 5/5!"})})]})},tt=he.b.div(S||(S=Object(Pe.a)(["\n  font-family: ",";\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  z-index: 100;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n  background-color: ",";\n  height: auto;\n  width: auto;\n"])),(function(e){return e.theme.fonts.family}),(function(e){return e.theme.colors.header})),nt=he.b.p(P||(P=Object(Pe.a)(["\n  color: white;\n  text-align: center;\n  font-size: 16px;\n  padding: 7px 12px;\n  margin: 0;\n"]))),rt=he.b.a(A||(A=Object(Pe.a)(["\n  color: white;\n  padding-left: ",";\n"])),(function(e){return e.left||"13px"})),ot=function(){return Object(Ve.jsx)(tt,{children:Object(Ve.jsxs)(nt,{children:[Object(Ve.jsx)(rt,{href:"https://forms.gle/SP87FiVKo82SiEAd6",target:"_blank",left:!0,children:"Join our mailing list"}),"!",Object(Ve.jsx)(rt,{href:"https://forms.gle/F1FX6ZMaTczHp1xTA",target:"_blank",children:"Report a bug/error"}),"?",Object(Ve.jsx)(rt,{href:"https://forms.gle/hQw2ZWS7qaNbZsBd9",target:"_blank",children:"Have a suggestion/feedback"}),"?"]})})},at=n(196),it=function(e){if(!e)return!1;try{return at.verify(e,"wqpjohaxlzuksfjeihndawhbap")}catch(t){return!1}},ct=function(){var e=Object(be.useState)({}),t=Object(de.a)(e,2),n=t[0],r=t[1],o=Object(Se.a)(Ce,{variables:{id:it(localStorage.getItem("token")).id},onCompleted:function(e){var t=e.userById;r(t)},skip:!localStorage.getItem("token")}),a=o.loading,i=Vt()+(Vt+1).substring(46,49);return Object(Ve.jsxs)(He,{children:[Object(Ve.jsx)(et,{user:n,setUser:r,loading:a,onPage:"Home"}),Object(Ve.jsxs)(Ne,{home:!0,children:[Object(Ve.jsx)(Le,{home:!0,children:"Welcome to Harvard Puzzle Club's Spring 2022 Puzzle Hunt!"}),Object(Ve.jsx)($e,{children:"About Us"}),Object(Ve.jsxs)(Fe,{children:["We've set out to start a club at Harvard centered entirely around ",Object(Ve.jsx)("b",{children:"recreational (and sometimes slightly competitive) puzzle solving"}),". A couple of us actually met through CS50 Puzzle Day, and we really loved how that event pulled together a huge community of puzzle-solvers... but sadly it only happens once a year! Harvard Undergraduate Puzzle Club aims to change that by being active year-round for all things puzzle-y, hopefully including a few hunts per year. We'll have regular puzzle sessions for sharing puzzles we've written and challenging our friends to try to solve them. Some of them could end up in an actual hunt! If you like puzzles at all, please ",Object(Ve.jsx)("b",{children:"join our mailing list below"}),"-- we're currently a provisional club and any support can go a long way!"]}),Object(Ve.jsx)($e,{children:"About the Contest"}),Object(Ve.jsx)(Fe,{children:"This past summer, we held the first run of the Harvard Puzzle Hunt. Now, this spring hunt is just our first hunt as an official club, so any feedback about bugs, design suggestions, or anything in general is much appreciated (links below)."}),Object(Ve.jsx)(_e,{children:"Registering"}),Object(Ve.jsxs)(qe,{children:["You can register as an ",Object(Ve.jsx)("b",{children:"individual or as a team of up to 8 people"}),", but keep in mind you'll have to share the prize among your whole team. To simplify things, the website is configured such that registering a new team and logging in as a returning team use the same form, located under the ",Object(Ve.jsx)("b",{children:"Submit page"}),". If you've ever used when2meet, the form works the same way. To register, simply enter your information, and make sure the rest of your team also knows the credentials. Then, when you return, you can enter the same information to log in. If you want us to be able to contact you should you win a prize, make sure to ",Object(Ve.jsx)("b",{children:"fill in your email"}),"! ",Object(Ve.jsx)("b",{children:"Do not abuse the submission form"}),". We expect teams to uphold the spirit of the hunt and any malicious behavior will be penalized."]}),Object(Ve.jsx)(_e,{children:"Puzzles"}),Object(Ve.jsxs)(qe,{children:[Object(Ve.jsx)("b",{children:"Puzzles can be solved in any order"}),", but some are harder than others. The length of the contest is currently set to be 2 weeks, but we may extend the time frame depending on how teams are progressing. ",Object(Ve.jsx)("b",{children:"The winner will be the team who solves the most puzzles, and, to break ties, in the shortest amount of time."})," Since team sizes are large and you have 2 weeks to solve these, one or more of the puzzles may take a pretty long time. We highly suggest splitting up grunt work among multiple team members if you're willing to split the prize. The leaderboard keeps track of teams' puzzle-specific progress so feel free to use this information to help your team decide which puzzles to work on. It also keeps track of which teams solve each puzzle first and there's a prize for the team with the most first solves (excluding other prize winners)-- so get started early! The leaderboard will hide your last few solves in order to maintain some level of mystery throughout the hunt, and final standings won't be released until the hunt is over. Be on the lookout for extra clues-- ",Object(Ve.jsxs)("b",{children:["there might be some ",Qt?Object(Ve.jsx)(Be,{to:"/".concat(i),children:"hidden features..."}):"hidden features..."," "]})]}),Object(Ve.jsx)(_e,{children:"Prizes"}),Object(Ve.jsxs)(qe,{children:["A huge thank you to ",Object(Ve.jsx)("b",{children:"El Jefe's Taqueria"})," for sponsoring the prizes for this hunt!"]}),Object(Ve.jsx)(De,{href:"https://www.eljefestaqueria.com/",target:"_blank",children:Object(Ve.jsx)(Me,{src:"https://static.wixstatic.com/media/297086_ef66ce8f869d42c6a47263ee96e2aae5.png/v1/fit/w_2500,h_1330,al_c/297086_ef66ce8f869d42c6a47263ee96e2aae5.png"})}),Object(Ve.jsxs)(qe,{children:["The overall ",Object(Ve.jsx)("b",{children:"first place team will win the grand prize of $50 in giftcards to El Jefe's Taqueria"}),", and the ",Object(Ve.jsx)("b",{children:"second place team will win a $25 giftcard to Jefe's"}),". A third ",Object(Ve.jsx)("b",{children:"$25 giftcard to Jefe's will be awarded to the team with the most first solves"})," (not including first and second place). Ties will be broken based on the maximum time across each of your firsts for a second team to solve it after you did (if at all). Prizes can get even bigger once we become a non-provisional club-- join our mailing list to help make that happen! If you want to redeem a prize, make sure you've filled out your email in the form so that we know who you are and have a way of contacting you."]}),Object(Ve.jsx)($e,{children:"Interested in Joining?"}),Object(Ve.jsxs)(Fe,{children:["If you enjoy the hunt and want to participate next time, please ",Object(Ve.jsx)("b",{children:"join our mailing list below"})," so that you're up to date on all Harvard Puzzle Club news. If you want to be a part of the next contest ",Object(Ve.jsxs)("b",{children:["as a puzzle-",Object(Ve.jsx)("i",{children:"writer"})]}),", there's a place to indicate that on the form as well."]}),Object(Ve.jsx)(Le,{bottom:!0,children:"Good Luck Puzzlers!"})]}),Object(Ve.jsx)(ot,{})]})},st=(he.b.div(I||(I=Object(Pe.a)(["\n  height: 25px;\n"]))),he.b.h2(C||(C=Object(Pe.a)(["\n  font-weight: 550;\n  font-size: 27px;\n  margin-top: 12px;\n  margin-bottom: 0px;\n  text-align: center;\n"]))),he.b.div(T||(T=Object(Pe.a)(["\n  margin-top: 15px;\n  margin-bottom: 5px;\n  text-align: center;\n"]))),he.b.button(E||(E=Object(Pe.a)(["\n  /* background: rgb(100,220,100); */\n  background: rgb(138,249,81);\n  border: black 1px;\n  border-style: solid;\n  border-radius: 4px;\n  font-family: ",";\n  cursor: pointer;\n  margin: 11px 5px 0 5px;\n  padding: 2px;\n  width: 80px;\n  align-self: center;\n\n  &:hover {\n    color: white;\n    /* background-color: rgb(10,150,10); */\n    background-color: rgb(122,222,107);\n  }\n"])),(function(e){return e.theme.fonts.family})),he.b.div(U||(U=Object(Pe.a)(["\n  flex-direction: row;\n"]))),["Alien Hieroglyphics","Old Calculators","Infinite Recursion Error","Projectve Set"]),lt=n(33),dt=n(69),bt=(he.b.div(H||(H=Object(Pe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-evenly;\n  /* padding-top: 30px;\n  padding-bottom: 150px; */\n  padding: 50px;\n  margin: auto;\n  background-color: white;\n  /* border: rgba(40,40,40,0.5) 4px; */\n  /* border-style: solid; */\n  text-align: center;\n  /* position: fixed; */\n  /* top: 2vh; */\n  /* background-color: rgba(108,128,150,0.8); */\n  /* animation: color-change 40s infinite;\n  position: center;\n  @keyframes color-change {\n    0% { background-color: rgba(100,128,150,0.8); }\n    20% { background-color: rgba(128,128,100,0.8); }\n    40% { background-color: rgba(100,128,128,0.8); }\n    60% { background-color: rgba(150,100,128,0.8); }\n    80% { background-color: rgba(128,150,100,0.8); }\n    100% { background-color: rgba(108,128,150,0.8); }\n  } */\n"]))),he.b.td(N||(N=Object(Pe.a)(["\n  padding: 12px;\n  font-size: 15px;\n  text-align: left;\n  border: solid rgb(235,235,235) 1px;\n  /* border-collapse: collapse; */\n  text-overflow: ellipsis;\n  white-space: nowrap;\n"])))),ut=Object(he.b)(bt)(L||(L=Object(Pe.a)(["\n  width: 20px;\n"]))),jt=Object(he.b)(bt)($||($=Object(Pe.a)(["\n  width: 305px;\n  max-width: 305px;\n"]))),pt=Object(he.b)(bt)(_||(_=Object(Pe.a)(["\n  width: 200px;\n"]))),ht=Object(he.b)(bt)(F||(F=Object(Pe.a)(["\n  position: relative;\n  width: 19px;\n  /* max-width: 43px; */\n  text-align: center;\n  background-image: ",";\n  background-position: ",";\n  background-size: cover;\n  background-repeat: no-repeat;\n"])),(function(e){return e.img}),(function(e){return e.lastTwo?"51% 50%":"50% 50%"})),gt=Object(he.b)(je.b)(q||(q=Object(Pe.a)(["\n  position: absolute;\n  left: 0%;\n  top: 0%;\n  width: 100%;\n  height: 100%;\n  padding: 12px 0;\n  text-align: center;\n  text-decoration: none;\n  color: rgb(120,120,220);\n  &:hover {\n    color: rgb(150,150,220);\n  };\n"]))),ft=he.b.div(B||(B=Object(Pe.a)(["\n  position: absolute;\n  white-space: nowrap;\n  top: -75%;\n  left: 50%;\n  transform: translate(-50%,0%);\n  padding: 4px 8px 4px 8px;\n  border-radius: 3px;\n  text-align: center;\n  font-size: 16px;\n  font-weight: normal;\n  visibility: ",";\n  color: ",";\n  background-color: ",";\n  transition: visibility 0.4s ease, color 0.4s ease, background-color 0.4s ease;\n  /* visibility: hidden;\n  color: rgba(255,255,255,0);\n  background-color: rgba(30,60,120,0);\n  animation: ",";\n  -webkit-animation: ",";\n  @keyframes appear {\n    0% {\n      color: rgba(255,255,255,0);\n      background-color: rgba(30,60,120,0);\n    }\n    100% {\n      color: rgba(255,255,255,1);\n      background-color: rgba(30,60,120,0.85);\n      visibility: visible;\n    }\n  };\n  @keyframes disappear {\n    0% {\n      color: rgba(255,255,255,1);\n      background-color: rgba(30,60,120,0.85);\n      visibility: visible;\n    }\n    100% {\n      color: rgba(255,255,255,0);\n      background-color: rgba(30,60,120,0);\n    }\n  } */\n"])),(function(e){return e.vis?"visible":"hidden"}),(function(e){return e.vis?"rgba(255,255,255,1)":"rgba(255,255,255,0)"}),(function(e){return e.vis?function(e){return e.theme.colors.vis}:function(e){return e.theme.colors.invis}}),(function(e){return e.hover==e.el?"appear 2s 0.09s forwards":-2!=e.hover&&"disappear 2s"}),(function(e){return e.hover==e.el?"appear 2s 0.09s forwards":-2!=e.hover&&"disappear 2s"})),xt=he.b.table(D||(D=Object(Pe.a)(["\n  margin-top: 10px;\n  border-collapse: collapse;\n  /* border: solid rgb(235,235,235) 1px;\n  border-radius: 6px;\n  background: rgb(235,235,235);\n  -moz-border-radius:6px; */\n"]))),mt=he.b.tr(M||(M=Object(Pe.a)(["\n  background: ",";\n  /* border: ","; */\n  box-shadow: ",";\n"])),(function(e){return e.highlight&&"rgb(239,248,252)"}),(function(e){return e.highlight&&"solid rgba(255,0,0,0.5) 2px"}),(function(e){return e.highlight&&"inset 1px 1px 5px 1px rgb(205,205,205), inset 0px 0px 5px 1px rgb(205,205,205)"})),Ot=he.b.tbody(J||(J=Object(Pe.a)(["\n  background-color: white;\n"]))),vt=he.b.thead(K||(K=Object(Pe.a)(["\n  font-weight: bold;\n  font-size: 18px;\n  background-color: rgb(248,248,248);\n  color: rgb(120,120,120);\n"]))),yt=function(e){var t=e.type;return t.done||t.lastTwo?Object(Ve.jsx)(ht,{img:t.lastTwo?"url('https://harvardpuzzles.github.io/leaderboard/questionstraight.png')":t.cantSee?"url('https://harvardpuzzles.github.io/leaderboard/check_first%20checkstraight.png')":t.first?"url('https://harvardpuzzles.github.io/leaderboard/first%20check.png')":t.done&&"url('https://harvardpuzzles.github.io/leaderboard/check.png')",title:t.lastTwo?"Maybe solved?":t.cantSee?"Solved! Maybe first?":t.first?"First to solve!":t.done&&"Solved!",lastTwo:t.lastTwo}):Object(Ve.jsx)(ht,{})},wt=function(e){var t=e.index,n=e.displayName,r=e.scores,o=e.updatedAt,a=e.realUpdatedAt,i=e.score,c=e.firsts,s=e.lastTwo,l=e.show,d=e.id,b=e.loggedId,u=e.foundSecret,j=Yt+1,p=d==b,h=r[j]?r.slice(0,Yt).concat(r.slice(j)):r.slice(0,Yt).concat(Array(Yt-r.length+1).fill(0)),g=function(e,t){return{done:e>0,first:!!c[t],lastTwo:!Gt&&!p&&!!s[t],cantSee:!Gt&&1==e}};return Object(Ve.jsxs)(mt,{highlight:p,children:[Object(Ve.jsx)(ut,{children:"".concat(t+1)}),Object(Ve.jsx)(jt,{children:"".concat(n)}),Object(Ve.jsx)(pt,{children:"".concat(function(e){var t=new Date(parseInt(e)),n=t.toLocaleDateString("en-US",{timeZone:"America/New_York",day:"numeric",month:"numeric",year:"2-digit"}),o=t.toLocaleTimeString("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"numeric"}),a=o.length,c="A"==o[a-2]?"am":"pm";return n+" "+o.substring(0,a-3)+c+(Gt||i-(r[j]?1:0)!=j-2||p?"":" (?)")}(p?a:o))}),h.slice(0,Yt).map((function(e,t){return Object(Ve.jsx)(yt,{type:g(e,t)},t)})),!!l&&(u||h[Yt]>0||Gt)&&Object(Ve.jsx)(yt,{type:g(h[Yt],j)})]})},zt=function(e){var t=e.setUser,n=e.loggedId,r=e.setLoading,o=Yt+1,a=Object(be.useState)(-2),i=Object(de.a)(a,2),c=i[0],s=i[1],l=Object(be.useState)(1),d=Object(de.a)(l,2),b=d[0],u=d[1],j=Object(Se.a)(Ie,{partialRefetch:!0,onError:function(e){},onCompleted:function(e){var t=e.allUsers;r(!1),u(t.reduce((function(e,t){return e+(t.foundSecret?1:0)}),0)>0?2:1)}}),p=j.data,h=j.error,g=j.loading;return Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsxs)(xt,{children:[Object(Ve.jsx)(vt,{children:Object(Ve.jsxs)("tr",{children:[Object(Ve.jsx)(ut,{children:"RK"}),Object(Ve.jsx)(jt,{children:"NAME"}),Object(Ve.jsx)(pt,{children:"LAST SOLVE (ET)"}),Object(lt.a)(Array(Yt+b).keys()).slice(1).map((function(e,t){return Object(Ve.jsx)(ht,{children:t==Yt?"?":Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsx)(gt,{to:"/puzzles/".concat(e),onMouseEnter:function(t){return s(e)},onMouseLeave:function(e){return s(-1)},children:e}),Object(Ve.jsx)(ft,{className:"puzzTitle",vis:c==e,children:st[e-1]})]})},t)}))]})}),Object(Ve.jsx)(Ot,{children:g||h||function(){var e=p.allUsers,n=e.reduce((function(e,t,n){return t.id==it(localStorage.getItem("token")).id?n:e}),-1),r=Array(o+1).fill(!1);if(-1!=n){t(p.allUsers[n]);var a=e[n].score.toString(3).split("").reverse().map((function(e){return parseInt(e)})),i=e[n].firsts.toString(2).split("").reverse().map((function(e){return parseInt(e)}));e[n].lastTwo.toString(2).split("").reverse().map((function(e){return parseInt(e)})).forEach((function(t,o){if(t){var a=e.reduce((function(e,t,r){return r==n?e:e&&!t.lastTwo.toString(2).split("").reverse().map((function(e){return parseInt(e)}))[o]}),!0);a&&(r[o]=!0)}})),a.forEach((function(e,t){2==e&&1==i[t]&&(r[t]=!0)}))}return e=e.map((function(e,t){var o=e.score.toString(3).split("").reverse().map((function(e,t){return r[t]?parseInt(e)?2:0:parseInt(e)})),a=e.firsts.toString(2).split("").reverse().map((function(e){return parseInt(e)})),i=e.lastTwo.toString(2).split("").reverse().map((function(e){return parseInt(e)})),c=Object(dt.a)(Object(dt.a)({},e),{},{scores:o,firsts:a,lastTwo:i,score:o.reduce((function(e,t){return e+(t>0?1:0)}),0),updatedAt:e.realUpdatedAt,foundSecret:e.foundSecret,highlight:t==n});return Gt||(c.updatedAt=e.updatedAt,c.score-=o.reduce((function(e,t,n){return e+(t>0?1:0)*(i[n]?1:0)}),0)),c})),e.sort((function(e,t){return 1e10*(t.score-e.score)+1e-4*(e.updatedAt-t.updatedAt)})),e}().map((function(e,t){return e?Object(Ve.jsx)(wt,Object(dt.a)(Object(dt.a)({index:t},e),{},{show:b-1,loggedId:n}),e.id):""}))})]}),g&&Object(Ve.jsx)("p",{children:"Fetching data..."}),h&&Object(Ve.jsx)("p",{children:"Failed to fetch data, try refreshing the page."})]})},kt=function(){var e=Object(be.useState)({}),t=Object(de.a)(e,2),n=t[0],r=t[1],o=Object(be.useState)(it(localStorage.getItem("token")).id),a=Object(de.a)(o,2),i=a[0],c=a[1],s=Object(be.useState)(!!localStorage.getItem("token")),l=Object(de.a)(s,2),d=l[0],b=l[1];Object(be.useEffect)((function(){document.title="Leaderboard | Harvard Puzzle Hunt"}),[]);return Object(Ve.jsxs)(He,{children:[Object(Ve.jsx)(et,{user:n,setUser:r,customLogout:function(){c(null),b(!1)},loading:d,onPage:"Leaderboard"}),Object(Ve.jsxs)(Ne,{children:[Object(Ve.jsx)(Le,{children:"Leaderboard: Summer 2021 Contest"}),Object(Ve.jsx)(zt,{setUser:r,loggedId:i,setLoading:b})]}),Object(Ve.jsx)(ot,{})]})},St=n(319),Pt=he.b.input(Z||(Z=Object(Pe.a)(["\n  padding: auto;\n  margin: auto;\n  box-sizing: border-box;\n  /* height: 20px; */\n  width: 100%;\n"]))),At=he.b.select(R||(R=Object(Pe.a)(["\n  margin: auto;\n  padding: auto;\n  box-sizing: border-box;\n  /* height: 20px; */\n  padding: 1px;\n  width: 100%;\n"]))),It=he.b.button(W||(W=Object(Pe.a)(["\n  /* background: rgb(100,220,100); */\n  background: rgb(138,249,81);\n  border: black 1px;\n  border-style: solid;\n  border-radius: 4px;\n  font-family: ",";\n  cursor: pointer;\n  margin-top: 21px;\n  padding: 2px;\n  width: 80px;\n  align-self: center;\n\n  &:hover {\n    color: white;\n    /* background-color: rgb(10,150,10); */\n    background-color: rgb(122,222,107);\n  }\n"])),(function(e){return e.theme.fonts.family})),Ct=he.b.div(Y||(Y=Object(Pe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  /* padding: -10px; */\n  /* width: 500px; */\n  margin: auto;\n  margin-top: 15px;\n  /* top: 3vh; */\n"]))),Tt=he.b.div(Q||(Q=Object(Pe.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]))),Et=he.b.p(G||(G=Object(Pe.a)(["\n  line-height: 19px;\n  margin-bottom: 5px;\n"]))),Ut=he.b.div(V||(V=Object(Pe.a)(["\n  margin: auto;\n  align-items: left;\n  text-align: left;\n  width: 180px;\n"]))),Ht=he.b.div(X||(X=Object(Pe.a)(["\n  margin: auto;\n  align-items: left;\n  text-align: left;\n  margin-bottom: 1px;\n  /* border: solid black 2px; */\n  width: 180px;\n"]))),Nt=he.b.div(ee||(ee=Object(Pe.a)(["\n  text-align: center;\n  width: 400px;\n  height: 50px;\n  margin: auto;\n  margin-top: 6px;\n  margin-bottom: 8px;\n"]))),Lt=he.b.p(te||(te=Object(Pe.a)(["\n  color: red;\n  font-size: 15px;\n"]))),$t=he.b.p(ne||(ne=Object(Pe.a)(["\n  color: black;\n  font-size: 15px;\n"]))),_t=he.b.p(re||(re=Object(Pe.a)(["\n  color: green;\n  font-size: 15px;\n"]))),Ft=function(e){var t=e.label,n=e.type,r=e.state,o=e.setState,a=e.onKeyPress,i=e.setSucc;return Object(Ve.jsxs)(Tt,{children:[Object(Ve.jsx)(Ut,{children:Object(Ve.jsx)(Et,{children:t})}),Object(Ve.jsx)(Ht,{children:Object(Ve.jsx)(Pt,{value:r,type:n,onChange:function(e){o(e.target.value),i&&i("")},onKeyPress:a})})]})},qt=function(e){var t=e.label,n=e.state,r=e.setState,o=e.options,a=e.setSucc;return Object(Ve.jsxs)(Tt,{children:[Object(Ve.jsx)(Ut,{children:Object(Ve.jsx)(Et,{children:t})}),Object(Ve.jsx)(Ht,{children:Object(Ve.jsx)(At,{value:n,onChange:function(e){r(e.target.value),a("")},children:o.map((function(e,t){return Object(Ve.jsx)("option",{value:e,children:e<=Yt?e:Vt()+(Vt+1).substring(46,49)},t)}))})})]})},Bt=function(e){var t=e.user,n=e.setUser,r=e.err,o=e.setErr,a=e.token,i=e.setToken,c=e.tokenExists,s=e.setTokenExists,l=e.setLoading,d=Object(be.useState)(""),b=Object(de.a)(d,2),u=b[0],j=b[1],p=Object(be.useState)(""),h=Object(de.a)(p,2),g=h[0],f=h[1],x=Object(be.useState)(""),m=Object(de.a)(x,2),O=m[0],v=m[1],y=Object(be.useState)(""),w=Object(de.a)(y,2),z=w[0],k=w[1],S=Object(be.useState)(!1),P=Object(de.a)(S,2),A=P[0],I=P[1],C=Object(be.useState)(""),T=Object(de.a)(C,2),E=T[0],U=T[1],H=Object(be.useState)(1),N=Object(de.a)(H,2),L=N[0],$=N[1],_=Object(be.useState)(""),F=Object(de.a)(_,2),q=F[0],B=F[1],D=Object(be.useState)(Object(lt.a)(Array(Yt+1).keys()).slice(1)),M=Object(de.a)(D,2),J=M[0],K=M[1],Z=function(e,t){l(!1),e.includes("CUSTOM:")?o(e.replace("GraphQL error: CUSTOM: ","")):o(t)},R=function(e){for(var t=e.score.toString(3).split("").reverse().map((function(e){return parseInt(e)})),n=Yt+(e.foundSecret?1:0),r=0;r<n;r++)if(!t[r])return void $(r+1);$(n)},W=Object(Se.a)(Ce,{variables:{id:it(a).id},onError:function(e){i(""),o("Previous credentials invalid. Please re-enter your information."),l(!1)},onCompleted:function(e){var t=e.userById;n(t),l(!1),U(t.email?t.email:""),o(""),K(Object(lt.a)(Array(Yt+1+(t.foundSecret?1:0)).keys()).slice(1)),R(t)},skip:!c}),Y=W.loading,Q=Object(St.a)(Te,{variables:{displayName:u,password:g},onError:function(e){Z(e.message,e.message)},onCompleted:function(e){var t=e.login,r=t.user,a=t.token;localStorage.setItem("token",a),l(!1),n(r),U(r.email?r.email:""),o(""),v(""),k(""),I(""),K(Object(lt.a)(Array(Yt+1+(r.foundSecret?1:0)).keys()).slice(1)),R(r)},refetchQueries:[{query:Ie}]}),G=Object(de.a)(Q,2),V=G[0],X=G[1].loading,ee=Object(St.a)(Ee,{variables:{id:t.id,email:E},onError:function(e){Z(e.message,"Failed to update email. Try refreshing the page.")},onCompleted:function(e){v(""),I(!0)}}),te=Object(de.a)(ee,2),ne=te[0],re=te[1].loading,oe=function(){console.log(t.id,L-1==Yt?Yt+1:L-1,q),se()},ae=function(){o(""),setTimeout((function(){return o("Contest over! Portal closed!")}),80)},ie=Object(St.a)(Ue,{variables:{id:t.id,puzzle:L-1==Yt?Yt+1:L-1,answer:q},onError:function(e){Z(e.message,e.message)},onCompleted:function(e){var t=e.updatePuzzles;if(o(""),K(Object(lt.a)(Array(Yt+1+(t.foundSecret?1:0)).keys()).slice(1)),t.displayName){var n=L-1==Yt?Yt+1:L-1,r=t.score.toString(3).split("").reverse()[n],a=t.firsts.toString(2).split("").reverse()[n];console.log(r,a),k("1"!=r||Gt?"1"==a?"Correct! And you're the first to solve this puzzle!":"Correct!":"Correct! And you might be first!")}else $(Yt+1),k("You found the secret puzzle!")},refetchQueries:[{query:Ie}]}),ce=Object(de.a)(ie,2),se=ce[0],le=ce[1].loading,ue=function(){l(!0),s(!1);var e="";(function(){var e=u.length;return!(e<2||e>20)&&" "!==u[0]&&" "!==u[e-1]&&/^[0-9a-zA-Z`~!@#$%^= +\[\]{}\\|;:'",<>./?&*_()-]*$/.test(u)})()||(e+="Username must have 2-20 characters, no leading or trailing spaces, and use only characters on a standard keyboard."),g.length>=3||(e+=e?" ":"",e+="Password must have at least 3 characters."),o(e),e?l(!1):(V(),B(""))},je=function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||ue()},pe=function(){/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(E.toLowerCase())?ne():v("Please enter a valid email.")};return Object(Ve.jsx)(Ve.Fragment,{children:t.id?Object(Ve.jsxs)(Ct,{children:[Object(Ve.jsx)(qt,{label:"Puzzle",state:L,setState:$,options:J,setSucc:k}),Object(Ve.jsx)(Ft,{label:"Answer",type:"text",state:q,setState:B,onKeyPress:function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||(Gt?ae():oe())}}),Object(Ve.jsx)(It,{onClick:Gt?ae:oe,children:"Submit"}),Object(Ve.jsx)(Nt,{children:le?Object(Ve.jsx)($t,{children:"Processing submission..."}):r?Object(Ve.jsx)(Lt,{children:r}):!!z&&Object(Ve.jsx)(_t,{children:z})}),Object(Ve.jsx)(Ft,{label:"Email",type:"text",state:E,setState:U,onKeyPress:function(e){"Enter"!==e.code&&"NumpadEnter"!==e.code||pe()},setSucc:I}),Object(Ve.jsx)(It,{onClick:pe,children:"Update"}),Object(Ve.jsx)(Nt,{children:re?Object(Ve.jsx)($t,{children:"Updating..."}):O?Object(Ve.jsx)(Lt,{children:O}):!!A&&Object(Ve.jsx)(_t,{children:"Updated!"})})]}):Object(Ve.jsxs)(Ct,{children:[!a&&Object(Ve.jsxs)(Ve.Fragment,{children:[Object(Ve.jsx)(Ft,{label:"Team Name",type:"text",state:u,setState:j,onKeyPress:je}),Object(Ve.jsx)(Ft,{label:"Password",type:"password",state:g,setState:f,onKeyPress:je}),Object(Ve.jsx)(It,{onClick:ue,children:"Sign In"})]}),Object(Ve.jsx)(Nt,{children:a&&Y||X?Object(Ve.jsx)($t,{children:c?"Previous credentials detected. Attempting to sign in...":"Signing in..."}):!!r&&Object(Ve.jsx)(Lt,{children:r})})]})})},Dt=function(){var e=Object(be.useState)({}),t=Object(de.a)(e,2),n=t[0],r=t[1],o=Object(be.useState)(""),a=Object(de.a)(o,2),i=a[0],c=a[1],s=Object(be.useState)(localStorage.getItem("token")),l=Object(de.a)(s,2),d=l[0],b=l[1],u=Object(be.useState)(!!localStorage.getItem("token")),j=Object(de.a)(u,2),p=j[0],h=j[1],g=Object(be.useState)(!!localStorage.getItem("token")),f=Object(de.a)(g,2),x=f[0],m=f[1];Object(be.useEffect)((function(){document.title="Submit | Harvard Puzzle Hunt"}),[]);var O=function(){h(!1),m(!1),b(""),c("")};return Object(Ve.jsxs)(He,{children:[Object(Ve.jsx)(et,{user:n,setUser:r,customLogout:O,loading:x,onPage:"Submit"}),Object(Ve.jsxs)(Ne,{children:[Object(Ve.jsx)(Le,{children:"Submission Page: Summer 2021 Contest"}),Object(Ve.jsx)(Bt,{user:n,setUser:r,err:i,setErr:c,token:d,setToken:b,tokenExists:p,setTokenExists:h,setLoading:m,logout:O})]}),Object(Ve.jsx)(ot,{})]})},Mt=Object(he.b)(je.b)(oe||(oe=Object(Pe.a)(["\n  font-size: 19px;\n  margin: auto;\n  margin-top: 7px;\n  margin-bottom: 7px;\n"]))),Jt=function(){var e=Object(be.useState)({}),t=Object(de.a)(e,2),n=t[0],r=t[1];Object(be.useEffect)((function(){document.title="Puzzles | Harvard Puzzle Hunt"}),[]);var o=Object(Se.a)(Ce,{variables:{id:it(localStorage.getItem("token")).id},onCompleted:function(e){var t=e.userById;r(t)},skip:!localStorage.getItem("token")}),a=o.loading;return Object(Ve.jsxs)(He,{children:[Object(Ve.jsx)(et,{user:n,setUser:r,loading:a,onPage:"Puzzles"}),Object(Ve.jsxs)(Ne,{children:[Object(Ve.jsx)(Le,{children:"Puzzles: Summer 2021 Contest"}),Object(lt.a)(Array(Yt+1).keys()).slice(1).map((function(e,t){return Object(Ve.jsx)(Mt,{to:"/puzzles/".concat(e),children:st[e-1]},t)}))]}),Object(Ve.jsx)(ot,{})]})},Kt=he.b.div(ae||(ae=Object(Pe.a)(["\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n"]))),Zt=function(){var e=Vt()+(Vt+1).substring(46,49),t=Object(pe.h)().puzzle;if(!"1,2,3,4".split(",").includes(t)&&"secret"!=t)return Object(Ve.jsx)(pe.a,{to:"/puzzles",replace:!0});var n=st[t-1];return Object(be.useEffect)((function(){document.title="".concat(n||e.charAt(0).toUpperCase()+e.slice(1)+" Puzzle"," | Harvard Puzzle Hunt")}),[]),Object(Ve.jsx)(Kt,{children:Object(Ve.jsx)("object",{data:"".concat(n,".pdf"),type:"application/pdf",width:"100%",height:"100%"})})},Rt=(Object(he.b)(je.b)(ie||(ie=Object(Pe.a)(["\n  font-size: 19px;\n  margin: auto;\n  margin-top: 7px;\n  margin-bottom: 7px;\n"]))),he.b.p(ce||(ce=Object(Pe.a)(["\n  font-size: 19px;\n  margin: auto;\n  margin-top: 7px;\n  margin-bottom: 7px;\n  font-style: italic;\n"]))),he.b.div(se||(se=Object(Pe.a)(["\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n"]))),Object(he.b)(je.b)(le||(le=Object(Pe.a)(["\n  font-size: 19px;\n  margin: auto;\n  margin-top: 7px;\n  margin-bottom: 7px;\n"])))),Wt=function(){var e=Object(be.useState)({}),t=Object(de.a)(e,2),n=t[0],r=t[1],o=Vt()+(Vt+1).substring(46,49);Object(be.useEffect)((function(){document.title="".concat(o.charAt(0).toUpperCase()+o.slice(1)+" Puzzle"," | Harvard Puzzle Hunt")}),[]);var a=Object(Se.a)(Ce,{variables:{id:it(localStorage.getItem("token")).id},onCompleted:function(e){var t=e.userById;r(t)},skip:!localStorage.getItem("token")}),i=a.loading;return Object(Ve.jsxs)(He,{children:[Object(Ve.jsx)(et,{user:n,setUser:r,loading:i}),Object(Ve.jsxs)(Ne,{home:!0,children:[Object(Ve.jsx)(Le,{children:"You found the secret puzzle!"}),Object(Ve.jsxs)(Fe,{children:["However, before you can access the secret puzzle, you'll need to crack the password... maybe consider joining our ",Object(Ve.jsx)("b",{children:"mailing list"})," (again?) for some inspiration... Use the password to ",Object(Ve.jsx)("b",{children:"access the puzzle itself"}),", and ",Object(Ve.jsx)("b",{children:"enter the password on the submissions page"})," (under any puzzle) in order to be able to ",Object(Ve.jsx)("b",{children:"unlock the submission portal"})," for it. Good luck!"]}),Object(Ve.jsx)(Rt,{to:"/puzzles/".concat(o),children:"Continue to puzzle..."})]}),Object(Ve.jsx)(ot,{})]})},Yt=4,Qt=!1,Gt=!1,Vt=function(){var e=(new Date).getFullYear()%1e3;return(new Date(e).getMilliseconds+1).substring(e-5,e-2)},Xt=function(){var e=Object(be.useState)("hidden"),t=Object(de.a)(e,2),n=t[0],r=t[1];Object(be.useEffect)((function(){setTimeout((function(){r("visible")}),200)}),[]);var o=Vt()+(Vt+1).substring(46,49);return Object(Ve.jsx)(je.a,{forceRefresh:!0,children:Object(Ve.jsx)(he.a,{theme:ge,children:Object(Ve.jsx)(ue.a,{client:ke,children:Object(Ve.jsx)("div",{className:"App",style:{visibility:n},children:Qt?Object(Ve.jsxs)(pe.d,{children:[Object(Ve.jsx)(pe.b,{exact:!0,path:"/submit",element:Object(Ve.jsx)(Dt,{})}),Object(Ve.jsx)(pe.b,{path:"/submit/*",element:Object(Ve.jsx)(pe.a,{to:"/submit",replace:!0})}),Object(Ve.jsx)(pe.b,{exact:!0,path:"/leaderboard",element:Object(Ve.jsx)(kt,{})}),Object(Ve.jsx)(pe.b,{path:"/leaderboard/*",element:Object(Ve.jsx)(pe.a,{to:"/leaderboard",replace:!0})}),Object(Ve.jsx)(pe.b,{exact:!0,path:"/puzzles/:puzzle",element:Object(Ve.jsx)(Zt,{})}),Object(Ve.jsx)(pe.b,{exact:!0,path:"/puzzles",element:Object(Ve.jsx)(Jt,{})}),Object(Ve.jsx)(pe.b,{path:"/puzzles/*",element:Object(Ve.jsx)(pe.a,{to:"/puzzles",replace:!0})}),Object(Ve.jsx)(pe.b,{exact:!0,path:"/".concat(o),element:Object(Ve.jsx)(Wt,{})}),Object(Ve.jsx)(pe.b,{path:"/".concat(o),element:Object(Ve.jsx)(pe.a,{to:"/".concat(o),replace:!0})}),Object(Ve.jsx)(pe.b,{exact:!0,path:"/",element:Object(Ve.jsx)(ct,{})}),Object(Ve.jsx)(pe.b,{path:"/*",element:Object(Ve.jsx)(pe.a,{to:"/",replace:!0})})]}):Object(Ve.jsxs)(pe.d,{children:[Object(Ve.jsx)(pe.b,{exact:!0,path:"/",element:Object(Ve.jsx)(ct,{})}),Object(Ve.jsx)(pe.b,{path:"/*",element:Object(Ve.jsx)(pe.a,{to:"/",replace:!0})})]})})})})})},en=n(186),tn=document.getElementById("root");Object(en.createRoot)(tn).render(Object(Ve.jsx)(Xt,{tab:"home"}))}},[[309,1,2]]]);
//# sourceMappingURL=main.21f7aef3.chunk.js.map