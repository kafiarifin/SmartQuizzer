(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{244:function(e,t,a){},246:function(e,t,a){},249:function(e,t,a){"use strict";a.r(t);a(55),a(34),a(57),a(58);var n=a(0),r=a.n(n),s=a(44),i=a.n(s),o=a(45);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var l=a(4),c=a(16),u={selectedQuestionID:null,questionsAttempted:0},m={data:null},p=Object(l.c)({questionData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECTED_QUESTION":var a;return t.payload.isMultiAnswer?(e.selectedQuestionID||(e.selectedQuestionID=[]),a=e.selectedQuestionID.includes(t.payload.id)?e.selectedQuestionID.filter(function(e){return e!==t.payload.id}):e.selectedQuestionID.concat(t.payload.id),Object(c.a)({},e,{selectedQuestionID:a})):Object(c.a)({},e,{selectedQuestionID:t.payload.id});case"NEXT_QUESTION":return Object(c.a)({},e,{selectedQuestionID:null,questionsAttempted:e.questionsAttempted+1,wasCorrect:t.payload});case"UPDATE_QUESTION_INDEX":return Object(c.a)({},e,{questionsAttempted:0});default:return e}},testData:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_QUESTIONS":return Object(c.a)({},e,{data:t.payload});default:return e}}}),d=a(8),v=a(252),h=a(255),E=a(254),f=a(11),b=a(12),g=a(14),w=a(13),I=a(15),N=a(253),O=a(50),y=function(e){var t=e.codeString;return r.a.createElement("div",{className:"row m-4"},r.a.createElement("div",{className:"col-10 offset-1 text-left"},r.a.createElement(N.a,{language:"java",showLineNumbers:!0,lineNumberStyle:{marginRight:"20px"},style:O.ocean},t)))},q=function(e){var t=e.title,a=e.completionRate;return r.a.createElement("div",{className:"row"},r.a.createElement("h6",{className:"col-8"},t),r.a.createElement("h6",{className:"col-4"},a,"% Completed Total"),r.a.createElement("hr",null))},x=a(19),j=a.n(x),D=function(e){var t=e.complete,a=e.isIncorrect,n=e.explanation,s=e.wrongAnswer;return r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-12"},t?a?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Incorrect"):r.a.createElement("div",{className:"alert alert-primary",role:"alert"},"Correct!"):null,s?r.a.createElement("div",{className:"alert alert-danger",role:"alert"},"Incorrect, Please Try Again"):null),r.a.createElement("div",{className:"col-12 text-left"}),r.a.createElement("div",{className:"col-12 text-left"},r.a.createElement("p",null,n)))},A=function(e){var t=e.prompt;return r.a.createElement("div",{className:"row mx-2"},r.a.createElement("div",{className:"col-10 offset-1 text-left"},r.a.createElement("h6",null,t)))},Q=a(33),C=a.n(Q);C.a.initializeApp({apiKey:"AIzaSyBHizhi9yWthb-uvNr_juILneAtp8bZmiQ",authDomain:"tiberius-cougar-alpha.firebaseapp.com",databaseURL:"https://tiberius-cougar-alpha.firebaseio.com",projectId:"tiberius-cougar-alpha",storageBucket:"tiberius-cougar-alpha.appspot.com",messagingSenderId:"889412483336"});var S=C.a.firestore();S.settings({timestampsInSnapshots:!0});var k=S,R=function(e,t){return{type:"SELECTED_QUESTION",payload:{id:e,isMultiAnswer:t}}},T=function(e){return{type:"NEXT_QUESTION",payload:e}},M=function(){return{type:"UPDATE_QUESTION_INDEX"}},U=function(e){return function(t){k.collection("test").doc(e).get().then(function(e){t(z(e.data().quizData))})}},z=function(e){return{type:"GET_QUESTIONS",payload:e}},_=function(e){function t(){return Object(f.a)(this,t),Object(g.a)(this,Object(w.a)(t).apply(this,arguments))}return Object(I.a)(t,e),Object(b.a)(t,[{key:"handleSelected",value:function(e){this.props.updateSelection(e,this.props.isMultiAnswer)}},{key:"renderOptions",value:function(){var e=this;return this.props.options.map(function(t){return r.a.createElement("li",{key:t.id,onClick:function(){return!e.props.complete&&e.handleSelected(t.id)},className:"list-group-item list-group-item-action ".concat(e.props.questionData.selectedQuestionID&&e.props.questionData.selectedQuestionID.includes(t.id)?"active":""," ").concat(e.props.complete?"disabled":null)},r.a.createElement("div",{className:"row"},e.props.complete&&r.a.createElement("div",{className:"col-1"},r.a.createElement("b",null,t.id)),r.a.createElement("div",{className:"col-11"},r.a.createElement(j.a,{escapeHtml:!1,source:t.markdown}))))})}},{key:"render",value:function(){return r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card bg-dark text-white text-left"},r.a.createElement("ul",{className:"list-group list-group-flush"},this.renderOptions()))))}}]),t}(n.Component);var B=Object(d.b)(function(e){return{questionData:e.questionData}},function(e){return Object(l.b)({updateSelection:R},e)})(_),H=function(e){var t=e.answerExplanation,a=e.referenceImage;return r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"card border-secondary"},r.a.createElement("div",{className:"card-body text-secondary text-left",role:"alert"},r.a.createElement(j.a,{escapeHtml:!1,source:t}),a&&r.a.createElement("img",{className:"img-fluid",src:a,alt:""})))))};var L=Object(d.b)(null,function(e){return Object(l.b)({nextQuestion:T},e)})(function(e){var t=e.attemptsRemaining,a=e.callBack,n=e.isCorrect,s=e.complete,i=e.nextQuestion;return r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-6 text-left"},!s&&r.a.createElement("button",{type:"button",className:"btn btn-outline-light disabled"},"Attempts Remaining ",r.a.createElement("span",{className:"badge badge-light"},t))),r.a.createElement("div",{className:"col-6 text-right"},s?r.a.createElement("button",{type:"button",onClick:function(){return i(n)},className:"btn btn-primary"},"Next"):r.a.createElement("button",{type:"button",onClick:a,className:"btn btn-primary"},"Test")))});function P(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e}var G=function(e){function t(e){var a;Object(f.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).shuffledOptions=P(e.questionObject.options);var n=e.questionObject.correctAnswerId.length>1;return a.state={isCorrect:!1,attemptsRemaining:2,isIncorrect:!1,wrongAnswer:!1,questionsAnswered:e.attempts,questionObject:e.questionObject,isMultiAnswer:n},a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"componentDidUpdate",value:function(){if(this.state.questionsAnswered!==this.props.attempts){this.shuffledOptions=P(this.props.questionObject.options);var e=this.props.questionObject.correctAnswerId.length>1;this.setState({isCorrect:!1,attemptsRemaining:2,isIncorrect:!1,questionsAnswered:this.props.attempts,questionObject:this.props.questionObject,isMultiAnswer:e})}}},{key:"handleGuess",value:function(e){var t=this.props,a=t.questionObject,n=t.questionObject,r=n.correctAnswerId,s=n.questionComplexityIndex,i=this.state,o=i.attemptsRemaining;i.isMultiAnswer&&r.sort()?r.sort().toString()===e.sort().toString()?(a.questionComplexityIndex=s+.5,this.setState({isCorrect:!0,wrongAnswer:!1})):(a.questionComplexityIndex=s-1,1===o?this.setState({isIncorrect:!0,attemptsRemaining:o-1,wrongAnswer:!1}):this.setState({attemptsRemaining:o-1,wrongAnswer:!0})):r&&e===r?(console.log("correct"),a.questionComplexityIndex=s+.5,this.setState({isCorrect:!0,wrongAnswer:!1})):(console.log("Not Correct"),a.questionComplexityIndex=s-1,1===o?this.setState({isIncorrect:!0,attemptsRemaining:o-1,wrongAnswer:!1}):this.setState({attemptsRemaining:o-1,wrongAnswer:!0}))}},{key:"render",value:function(){var e=this,t=this.props.attempts,a=this.state,n=a.isCorrect,s=a.attemptsRemaining,i=a.isIncorrect,o=a.wrongAnswer,l=a.isMultiAnswer,c=a.questionObject,u=c.explanation,m=c.prompt,p=c.codeString,d=c.answerExplanation,v=c.referenceImage,h=n||i;return r.a.createElement("div",{className:"quizWrapper text-light"},r.a.createElement("div",{className:"container"},r.a.createElement(q,{completionRate:this.props.completionRate,title:"Remaining Questions in this round: ".concat(this.props.totalQuestionsInInterval-t-1)}),r.a.createElement(D,{wrongAnswer:o,complete:h,isIncorrect:i,explanation:u}),p.length>1&&r.a.createElement(y,{codeString:p}),r.a.createElement(A,{prompt:m}),r.a.createElement(B,{isMultiAnswer:l,complete:h,options:this.shuffledOptions}),h&&r.a.createElement(H,{answerExplanation:d,referenceImage:v}),r.a.createElement(L,{isMultiAnswer:l,complete:h,isCorrect:n,attemptsRemaining:s,callBack:function(){return e.handleGuess(e.props.questionData.selectedQuestionID)}})))}}]),t}(n.Component);var W=Object(d.b)(function(e){return{questionData:e.questionData}})(G),X=function(e){var t=e.percent;return r.a.createElement("div",{className:"row m-3"},r.a.createElement("div",{className:"col-12"},r.a.createElement("div",{className:"progress"},r.a.createElement("div",{className:"progress-bar progress-bar",role:"progressbar",style:{width:"".concat(t,"%")},"aria-valuenow":t,"aria-valuemin":"0","aria-valuemax":"100"}))))},J=a(2),K=a.n(J),Z=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).state={totalQuestionsInInterval:9,quizData:e.quizData.sort(function(e,t){return e.questionComplexityIndex-t.questionComplexityIndex}),completionRate:a.getPercentComplete(e.quizData)},a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"getPercentComplete",value:function(e){var t=0;return e.map(function(e){return e.questionComplexityIndex>1.5?t+=1:null}),Math.round(t/e.length)}},{key:"componentDidUpdate",value:function(){this.props.questionsAttempted===this.state.totalQuestionsInInterval&&this.props.updateQuestionIndex()}},{key:"HandleNextQuestion",value:function(){var e,t,a=this.props.questionsAttempted,n=this.state,r=n.quizData,s=n.totalQuestionsInInterval;return console.log("Total Questions: ",r.length),console.log("Questions: ",r),a===s&&(e="testOne",t=r,S.collection("test").doc(e).set({quizData:t},{merge:!0}).then(function(){console.log("Document successfully written!")}).catch(function(e){console.warn("ERROR",e)}),r.sort(function(e,t){return e.questionComplexityIndex-t.questionComplexityIndex})),r[a]}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container p-0"},r.a.createElement("div",{className:"row text-center"},r.a.createElement("div",{className:"col-12"},r.a.createElement(X,{percent:this.props.questionsAttempted/(this.state.totalQuestionsInInterval-1)*100}),r.a.createElement(W,{attempts:this.props.questionsAttempted,questionObject:this.HandleNextQuestion(),completionRate:this.state.completionRate,totalQuestionsInInterval:this.state.totalQuestionsInInterval})))))}}]),t}(n.Component);var $=Object(d.b)(function(e){return{questionsAttempted:e.questionData.questionsAttempted}},function(e){return Object(l.b)({updateQuestionIndex:M},e)})(Z);H.propTypes={quizData:K.a.string};var F=a(51),V=a.n(F),Y=(a(244),function(){return r.a.createElement("div",{className:"lds-default"},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))}),ee=(a(246),function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(g.a)(this,Object(w.a)(t).call(this,e))).state={questionDataSet:void 0},a}return Object(I.a)(t,e),Object(b.a)(t,[{key:"componentDidMount",value:function(){this.props.retrieveData("testOne")}},{key:"render",value:function(){return r.a.createElement("div",{className:"App",style:{overflow:"hidden"}},r.a.createElement(V.a,{params:{particles:{move:{speed:.3}}},style:{position:"fixed",width:"100vw",height:"100vh",backgroundColor:"rgb(43, 48, 59)",filter:"blur(1px)"}}),this.props.testBank?r.a.createElement($,{quizData:this.props.testBank}):r.a.createElement(Y,null))}}]),t}(n.Component));var te=Object(d.b)(function(e){return{testBank:e.testData.data}},function(e){return Object(l.b)({retrieveData:U},e)})(ee),ae=function(){return r.a.createElement("main",null,r.a.createElement(h.a,null,r.a.createElement(E.a,{path:"*",component:te}),r.a.createElement(E.a,{exact:!0,path:"/test",component:te}),r.a.createElement(E.a,{exact:!0,path:"/test/1",component:te})))},ne=Object(l.a)(o.a)(l.d);i.a.render(r.a.createElement(d.a,{store:ne(p)},r.a.createElement(v.a,null,r.a.createElement(ae,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},54:function(e,t,a){e.exports=a(249)}},[[54,2,1]]]);
//# sourceMappingURL=main.f77a1ea3.chunk.js.map