//	HYPE.documents["index"]

(function(){(function m(){function k(a,b,c,d){var e=!1;null==window[a]&&(null==window[b]?(window[b]=[],window[b].push(m),a=document.getElementsByTagName("head")[0],b=document.createElement("script"),e=l,false==!0&&(e=""),b.type="text/javascript",""!=d&&(b.integrity=d,b.setAttribute("crossorigin","anonymous")),b.src=e+"/"+c,a.appendChild(b)):window[b].push(m),e=!0);return e}var l="index.hyperesources",f="index",g="index_hype_container";if(false==
!1)try{for(var c=document.getElementsByTagName("script"),a=0;a<c.length;a++){var d=c[a].src,b=null!=d?d.indexOf("/index_hype_generated_script.js"):-1;if(-1!=b){l=d.substr(0,b);break}}}catch(p){}c=navigator.userAgent.match(/MSIE (\d+\.\d+)/);c=parseFloat(c&&c[1])||null;d=!0==(null!=window.HYPE_654F||null!=window.HYPE_dtl_654F)||true==!0||null!=c&&10>c;a=!0==d?"HYPE-654.full.min.js":"HYPE-654.thin.min.js";c=!0==d?"F":"T";d=d?"":
"";if(false==!1&&(a=k("HYPE_654"+c,"HYPE_dtl_654"+c,a,d),false==!0&&(a=a||k("HYPE_w_654","HYPE_wdtl_654","HYPE-654.waypoints.min.js","")),false==!0&&(a=a||k("Matter","HYPE_pdtl_654","HYPE-654.physics.min.js","")),a))return;d=window.HYPE.documents;if(null!=d[f]){b=1;a=f;do f=""+a+"-"+b++;while(null!=d[f]);for(var e=document.getElementsByTagName("div"),
b=!1,a=0;a<e.length;a++)if(e[a].id==g&&null==e[a].getAttribute("HYP_dn")){var b=1,h=g;do g=""+h+"-"+b++;while(null!=document.getElementById(g));e[a].id=g;b=!0;break}if(!1==b)return}b=[];b=[{name:"initializeSplash",source:"function(hypeDocument, element, event) {\t\n\tgetInfo();\n\thypeDocument.getElementById(\"title1\").innerHTML = window.title;\n\t\n}",identifier:"10"},{name:"initializeMain",source:"function(hypeDocument, element, event) {\t\n\thypeDocument.getElementById(\"infoDisplay\").innerHTML = \"QUESTION \" + (window.currentSlide + 1) + \" OF \" + window.numberOfQuestions;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.questions[window.currentSlide];\n\thypeDocument.getElementById(\"answerADisplay\").innerHTML = window.answerA[window.currentSlide];\n\thypeDocument.getElementById(\"answerBDisplay\").innerHTML = window.answerB[window.currentSlide];\n\thypeDocument.getElementById(\"answerCDisplay\").innerHTML = window.answerC[window.currentSlide];\n\thypeDocument.getElementById(\"answerDDisplay\").innerHTML = window.answerD[window.currentSlide];\n\thypeDocument.getElementById(\"answerEDisplay\").innerHTML = window.answerE[window.currentSlide];\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.visibility = \"visible\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.visibility = \"visible\";\n\t\n\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#FFD300\";\n\n\twindow.temp1 = [\"A\", \"B\", \"C\", \"D\", \"E\" ];\n\t\n\tif (window.correctAnswer[window.currentSlide] == \"A\") { window.temp1.splice(0, 1); } \n\telse if (window.correctAnswer[window.currentSlide] == \"B\") { window.temp1.splice(1, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"C\") { window.temp1.splice(2, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"D\") { window.temp1.splice(3, 1); }\n\telse if (window.correctAnswer[window.currentSlide] == \"E\") { window.temp1.splice(4, 1); }\n\t\n\t// SHUFFLE THE ARRAY, SEE https://css-tricks.com/snippets/javascript/shuffle-array/ for details\n\t\tfor(var j, x, i = window.temp1.length; i; j = parseInt(Math.random() * i), x = window.temp1[--i], window.temp1[i] = window.temp1[j], window.temp1[j] = x); \n\t\treturn window.temp1;\n\twindow.clickedAnswer = \"\";\n\twindow.timerValue = 0;\n\t}",identifier:"28"},{name:"removeWrongAnswer",source:"function(hypeDocument, element, event) {\t\n\tvar temp2 = \"answer\" + window.temp1[0] + \"Display\";\n\thypeDocument.getElementById(temp2).style.visibility = \"hidden\";\n\twindow.temp1.shift();\n\t\n}",identifier:"43"},{name:"answerClicked",source:"function(hypeDocument, element, event) {\thypeDocument.getElementById(\"answerADisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerBDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerCDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerDDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(\"answerEDisplay\").style.color = \"#FFD300\";\n\thypeDocument.getElementById(element.id).style.color = \"#83A0EB\";\n\t\n\twindow.clickedAnswer = element.id.charAt(6);\n\t\n\tvar x1 = hypeDocument.getElementById(\"countdownText\").innerHTML;\n\tvar x2 = x1.length;\n\tif (x2 == 4) {\t\t\twindow.timerValue = Number(x1); } \n\telse if ( x2 == 9) { \twindow.timerValue = Number(x1.slice(6)); } \n\telse if ( x2 == 14) {\twindow.timerValue = Number(x1.slice(12)); } \n\telse {\t\t\t\t\twindow.timerValue = 0; }\n\n    if ( window.clickedAnswer == window.correctAnswer[window.currentSlide] ) {\n    \twindow.timerValue = 1 * (window.timerValue);\n    } else {\n    \twindow.timerValue = -1 * (window.timerValue);\n    }\n\n\t}",identifier:"44"},{name:"updateScore",source:"function(hypeDocument, element, event) {\t\t\n\n\t\t\n\twindow.currentScore = window.currentScore + window.timerValue;\n\t\n\tif (window.currentScore >= 0) {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: +\" + (\"00000\" + window.currentScore).substr(-5, 5);\n\t} else {\n\t\thypeDocument.getElementById(\"scoreDisplay\").innerHTML = \"SCORE: -\" + (\"00000\" + (Math.abs(window.currentScore))).substr(-5, 5);\n\t}\n\t\n\thypeDocument.getElementById(\"questionDisplay\").innerHTML = window.response[currentSlide];\n\t\n\n\t\n}",identifier:"45"},{name:"initializeSummary",source:"function(hypeDocument, element, event) {\t\t\n\tvar x1 = (window.currentScore/window.numberOfQuestions)/10;\n\tvar string1 = \"You scored \" + window.currentScore + \" points<br>out of a possible \";\n\tstring1 = string1 + (window.numberOfQuestions*1000) + \" <br>putting you at \";\n\tstring1 = string1 + x1 + \" percent.\";\n\thypeDocument.getElementById(\"info1\").innerHTML = string1;\n\t\n\t\n}",identifier:"54"},{name:"cleanupMain",source:"function(hypeDocument, element, event) {\t\n\twindow.currentSlide = window.currentSlide + 1;\n\t\n\tif (window.currentSlide < window.numberOfQuestions) {\n\t\thypeDocument.showSceneNamed(\"main\");\n\t} else {\n\t\thypeDocument.showSceneNamed(\"summary\");\n\t} \n\t\n}",identifier:"55"}];e={};h={};for(a=0;a<b.length;a++)try{h[b[a].identifier]=b[a].name,e[b[a].name]=eval("(function(){return "+b[a].source+"})();")}catch(n){window.console&&window.console.log(n),e[b[a].name]=function(){}}c=new window["HYPE_654"+c](f,g,{"-2":{n:"blank.gif"},"2":{p:1,n:"bookasdf%20leogo.jpg",g:"62",o:true,t:"@1x"},"3":{p:1,n:"bookasdf%20leogo_2x.jpg",g:"62",o:true,t:"@2x"},"4":{p:1,n:"bk99yellow%20logog.png",g:"73",t:"@1x"},"5":{n:"triviaInfo-5.js"},"6":{p:2,n:"bensound-badass%20mod.mp3",g:"81",t:"audio/mpeg"},"7":{p:2,n:"brooklyn-nine-nine-theme-song%20mod.mp3",g:"82",t:"audio/mpeg"},"-1":{n:"PIE.htc"},"0":{p:1,n:"brooklyn99splashpage1.jpg",g:"58",o:true,t:"@1x"},"8":{p:1,n:"noice.png",g:"84",t:"@1x"},"1":{p:1,n:"brooklyn99splashpage1_2x.jpg",g:"58",o:true,t:"@2x"},"9":{p:2,n:"comfirmation%20beep.mp3",g:"86",t:"audio/mpeg"}},l,[],e,[{n:"splash",o:"1",X:[0]},{n:"main",o:"11",X:[1]},{n:"summary",o:"46",X:[2]}],
[{A:{a:[{p:4,h:"10"},{b:"64",p:3,z:false,symbolOid:"2"},{p:12,o:"82",q:false}]},o:"3",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"9_hover":{q:false,z:1,i:"9_hover",n:"9_hover",a:[{f:"c",y:0,z:1,i:"G",e:"#83A0EB",s:"#FFDE00",o:"90"},{f:"c",y:0,z:1,i:"B",e:"#83A0EB",s:"#FFDE00",o:"90"},{f:"c",y:0,z:1,i:"C",e:"#83A0EB",s:"#FFDE00",o:"90"},{f:"c",y:0,z:1,i:"D",e:"#83A0EB",s:"#FFDE00",o:"90"},{f:"c",y:0,z:1,i:"A",e:"#83A0EB",s:"#FFDE00",o:"90"},{y:1,i:"G",s:"#83A0EB",z:0,o:"90",f:"c"},{y:1,i:"B",s:"#83A0EB",z:0,o:"90",f:"c"},{y:1,i:"C",s:"#83A0EB",z:0,o:"90",f:"c"},{y:1,i:"D",s:"#83A0EB",z:0,o:"90",f:"c"},{y:1,i:"A",s:"#83A0EB",z:0,o:"90",f:"c"}],f:30,b:[]},"64":{q:false,z:4,i:"64",n:"bounce timeline",a:[{f:"f",y:0,z:1,i:"t",e:64,s:11,o:"91"},{f:"f",y:0,z:1,i:"Y",e:96,s:96,o:"91"},{f:"c",y:0,z:1,i:"e",e:0,s:0,o:"89"},{y:1,i:"t",s:64,z:0,o:"91",f:"c"},{y:1,i:"Y",s:96,z:0,o:"91",f:"c"},{f:"c",y:1,z:1.14,i:"e",e:1,s:0,o:"89"},{y:2.14,i:"e",s:1,z:0,o:"89",f:"c"},{f:"c",p:2,y:4,z:0,i:"ActionHandler",s:{a:[{b:"kTimelineDefaultIdentifier",p:3,z:false,symbolOid:"2"}]},o:"64"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[],f:30,b:[]}},bZ:180,O:["92","91","88","89","90"],n:"Untitled Layout","_":0,v:{"92":{c:1024,d:768,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,N:0,A:"#000",x:"visible",j:"absolute",B:"#000",P:0,k:"div",C:"#000",z:3,O:0,D:"#000",a:0,b:0},"91":{aU:8,bB:3,G:"#FFD300",c:1008,bS:36,aV:8,r:"inline",d:101,bC:3,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:64,Y:0,u:"italic",Z:"break-word",v:"bold",i:"title1",w:"TRIVIA TITLE HERE",j:"absolute",x:"visible",aZ:0,k:"div",y:"preserve",z:5,aS:8,aT:8,a:0,bA:"#000",F:"center",b:25},"89":{aU:8,bB:0,G:"#000",aV:8,r:"inline",bC:0,e:1,s:"Helvetica-Light,'Helvetica Light',Helvetica,Arial,Sans-Serif",t:36,u:"italic",Z:"break-word",v:"bold",i:"byline",w:"by Rosalyn Stilen",j:"absolute",x:"visible",yy:"nowrap",aZ:0,y:"preserve",k:"div",z:6,aS:8,aT:8,a:343,bA:"#000",b:195},"90":{b:573,z:7,K:"Solid",c:449,L:"Solid",d:124,aS:6,M:12,bD:"none",N:12,aT:6,dB:"button",O:12,g:"#000",aU:6,P:12,aV:6,i:"startButton",j:"absolute",k:"div",aI:20,aJ:20,aK:20,X:1.39944,aL:20,A:"#FFDE00",Y:"normal",B:"#FFDE00",aM:"9_hover",r:"inline",C:"#FFDE00",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FFDE00",t:96,E:0,u:"normal",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"11"},{p:12,o:"81",q:true},{p:13,o:"82",q:false}]},G:"#FFDE00",aP:"pointer",w:"START",x:"visible",I:"Solid",a:269,y:"preserve",J:"Solid"},"88":{h:"58",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:4,k:"div",b:163,d:478.354,c:1024}}},{A:{a:[{p:4,h:"28"}]},o:"13",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{kTimelineDefaultIdentifier:{q:false,z:20,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{y:0,i:"bH",s:0,z:0,o:"97",f:"c"},{f:"c",y:0,z:13,i:"g",e:"#FF1300",s:"#FFEF00",o:"97"},{f:"b",y:3,z:10,i:"c",e:0,s:760,o:"97"},{f:"b",y:3,z:10,i:"a",e:50,s:810,o:"96"},{f:"c",y:3,z:0.15,i:"w",e:"&nbsp;950",s:"1000",o:"101"},{f:"b",y:3,z:10,i:"a",e:75,s:835,o:"101"},{f:"c",y:3.15,z:0.15,i:"w",e:"&nbsp;900",s:"&nbsp;950",o:"101"},{f:"c",y:4,z:0.15,i:"w",e:"&nbsp;850",s:"&nbsp;900",o:"101"},{f:"c",y:4.15,z:0.15,i:"w",e:"&nbsp;800",s:"&nbsp;850",o:"101"},{f:"c",p:2,y:5,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:5,z:0.15,i:"w",e:"&nbsp;750",s:"&nbsp;800",o:"101"},{f:"c",y:5.15,z:0.15,i:"w",e:"&nbsp;700",s:"&nbsp;750",o:"101"},{f:"c",y:6,z:0.15,i:"w",e:"&nbsp;650",s:"&nbsp;700",o:"101"},{f:"c",y:6.15,z:0.15,i:"w",e:"&nbsp;600",s:"&nbsp;650",o:"101"},{f:"c",p:2,y:7,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:7,z:0.15,i:"w",e:"&nbsp;550",s:"&nbsp;600",o:"101"},{f:"c",y:7.15,z:0.15,i:"w",e:"&nbsp;500",s:"&nbsp;550",o:"101"},{f:"c",y:8,z:0.15,i:"w",e:"&nbsp;450",s:"&nbsp;500",o:"101"},{f:"c",y:8.15,z:0.15,i:"w",e:"&nbsp;400",s:"&nbsp;450",o:"101"},{f:"c",p:2,y:9,z:2,i:"ActionHandler",e:{a:[{p:4,h:"43"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:9,z:0.15,i:"w",e:"&nbsp;350",s:"&nbsp;400",o:"101"},{f:"c",y:9.15,z:0.15,i:"w",e:"&nbsp;300",s:"&nbsp;350",o:"101"},{f:"c",y:10,z:0.15,i:"w",e:"&nbsp;250",s:"&nbsp;300",o:"101"},{f:"c",y:10.15,z:0.15,i:"w",e:"&nbsp;200",s:"&nbsp;250",o:"101"},{f:"c",p:2,y:11,z:3.15,i:"ActionHandler",e:{a:[{p:4,h:"45"}]},s:{a:[{p:4,h:"43"}]},o:"kTimelineDefaultIdentifier"},{f:"c",y:11,z:0.15,i:"w",e:"&nbsp;150",s:"&nbsp;200",o:"101"},{f:"c",y:11.15,z:0.15,i:"w",e:"&nbsp;100",s:"&nbsp;150",o:"101"},{f:"c",y:12,z:0.15,i:"w",e:"&nbsp;&nbsp;50",s:"&nbsp;100",o:"101"},{f:"c",y:12.15,z:0.15,i:"w",e:"&nbsp;&nbsp;&nbsp;0",s:"&nbsp;&nbsp;50",o:"101"},{y:13,i:"c",s:0,z:0,o:"97",f:"c"},{y:13,i:"g",s:"#FF1300",z:0,o:"97",f:"c"},{y:13,i:"a",s:50,z:0,o:"96",f:"c"},{y:13,i:"a",s:75,z:0,o:"101",f:"c"},{y:13,i:"w",s:"&nbsp;&nbsp;&nbsp;0",z:0,o:"101",f:"c"},{f:"c",p:2,y:14.15,z:5.15,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:4,h:"45"}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:20,z:0,i:"ActionHandler",s:{a:[{p:4,h:"55"}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["93","102","105","106","98","99","103","108","95","110","109","94","100","104","96","107","101","97"],n:"Untitled Layout","_":1,v:{"103":{c:830,d:160,r:"inline",I:"Solid",J:"Solid",K:"Solid",g:"#FFD300",L:"Solid",M:10,i:"border1",w:"",N:10,A:"#000",x:"visible",j:"absolute",B:"#000",P:10,O:10,C:"#000",z:9,aJ:10,D:"#000",aK:10,k:"div",E:-0.211466,aI:10,a:100,aL:10,b:100},"95":{w:"",h:"73",p:"no-repeat",x:"visible",a:87,q:"100% 100%",b:209,j:"absolute",r:"inline",z:3,dB:"img",k:"div",d:481,c:873,e:0.16467563,G:"#FFEF41"},"106":{c:993,d:68,I:"None",r:"inline",J:"None",K:"None",g:"#000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:5,k:"div",D:"#D8DDE4",a:19,b:16},"101":{b:671,aU:8,G:"#000",c:81,aV:8,r:"inline",d:42,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:36,Z:"break-word",v:"bold",i:"countdownText",w:"1000",j:"absolute",x:"visible",k:"div",y:"preserve",z:20,aS:8,tX:0.5,aT:8,a:835,F:"center",tY:0.5},"96":{c:120,d:70,r:"inline",I:"Solid",J:"Solid",K:"Solid",g:"#FFD300",L:"Solid",M:15,i:"countdownDisplay2",N:15,aI:50,A:"#000",x:"visible",j:"absolute",B:"#000",P:15,O:15,C:"#000",z:19,aJ:50,D:"#000",aK:50,k:"div",a:810,aL:50,b:650},"109":{aU:8,G:"#FFEF00",c:884,aV:8,r:"inline",d:34,e:1,s:"HelveticaNeue-Light,'Helvetica Neue Light',Helvetica-Light,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerBDisplay",w:"ANSWER B, ANSWER B, ANSWER B, ANSWER B",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"},{p:12,o:"86",q:false}]},k:"div",y:"preserve",dB:"button",z:12,aS:8,aT:8,a:100,b:380},"104":{aU:8,G:"#FFEF00",c:884,aV:8,r:"inline",d:34,e:1,s:"HelveticaNeue-Light,'Helvetica Neue Light',Helvetica-Light,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,Sans-Serif",t:30,Y:15,u:"normal",Z:"break-word",aP:"pointer",v:"bold",i:"answerEDisplay",w:"ANSWER E, ANSWER E, ANSWER E, ANSWER E",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"},{p:12,o:"86",q:false}]},k:"div",y:"preserve",dB:"button",z:16,aS:8,aT:8,a:100,b:590},"110":{aU:8,G:"#FFEF00",c:884,aV:8,r:"inline",cY:"0",d:34,s:"HelveticaNeue-Light,'Helvetica Neue Light',Helvetica-Light,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,Sans-Serif",e:1,t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerADisplay",w:"ANSWER A, ANSWER A, ANSWER A, ANSWER A",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"},{p:12,o:"86",q:false}]},k:"div",y:"preserve",dB:"button",z:11,aS:8,aT:8,a:100,b:310},"97":{c:760,d:40,r:"inline",I:"None",J:"None",K:"None",g:"#FFEF00",L:"None",M:0,i:"redSlider",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:17,bH:0,D:"#D8DDE4",k:"div",a:110,b:680},"107":{c:820,d:40,r:"inline",I:"Solid",J:"Solid",K:"Solid",L:"Solid",M:15,i:"countdownDisplay1",N:15,aI:30,A:"#000",x:"visible",j:"absolute",B:"#000",O:15,P:15,C:"#000",z:18,aJ:30,D:"#000",aK:30,k:"div",a:100,aL:30,b:665},"102":{c:974,d:718,I:"Solid",r:"none",J:"Solid",K:"Solid",L:"Solid",M:25,N:25,A:"#000",x:"visible",j:"absolute",B:"#000",k:"div",O:25,C:"#000",z:4,P:25,D:"#000",a:0,b:0},"93":{h:"62",p:"no-repeat",x:"visible",a:450,dB:"img",q:"100% 100%",j:"absolute",r:"none",z:6,k:"div",b:-23,d:150,c:150},"98":{aU:8,G:"#FFD300",c:284,aV:8,r:"inline",d:29,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:36,u:"italic",Z:"break-word",v:"bold",i:"infoDisplay",w:"QUESTION XX OF YY",j:"absolute",x:"visible",k:"div",y:"preserve",z:7,aS:8,aT:8,a:30,b:27},"105":{G:"#D8FF00",c:1024,d:768,r:"inline",I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,w:"",N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,O:0,C:"#D8DDE4",z:2,k:"div",D:"#D8DDE4",a:0,b:0},"94":{aU:8,G:"#FFEF00",c:884,aV:8,r:"inline",d:34,e:1,s:"HelveticaNeue-Light,'Helvetica Neue Light',Helvetica-Light,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerCDisplay",w:"ANSWER C, ANSWER C, ANSWER C, ANSWER C",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"},{p:12,o:"86",q:false}]},k:"div",y:"preserve",dB:"button",z:13,aS:8,aT:8,a:100,b:450},"100":{aU:8,G:"#FFEF00",c:884,aV:8,r:"inline",d:34,e:1,s:"HelveticaNeue-Light,'Helvetica Neue Light',Helvetica-Light,HelveticaNeue,'Helvetica Neue',Helvetica,Arial,Sans-Serif",t:30,Y:15,Z:"break-word",aP:"pointer",v:"bold",i:"answerDDisplay",w:"ANSWER D, ANSWER D, ANSWER D, ANSWER D",j:"absolute",x:"visible",aA:{a:[{p:4,h:"44"},{p:12,o:"86",q:false}]},k:"div",y:"preserve",dB:"button",z:14,aS:8,aT:8,a:100,b:520},"99":{aU:8,G:"#FFD300",c:230,aV:8,r:"inline",d:28,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",t:36,u:"italic",Z:"break-word",v:"bold",i:"scoreDisplay",w:"SCORE: +00000",j:"absolute",x:"visible",k:"div",y:"preserve",z:8,aS:8,aT:8,a:750,b:30},"108":{aU:8,G:"#000",c:768,aV:8,r:"inline",d:127,e:1,s:"Impact,'Arial Narrow Bold',Sans-Serif",X:0,t:36,u:"italic",Z:"break-word",v:"bold",i:"questionDisplay",w:"QUESTION QUESTION QUESTION QUESTION QUESTION&nbsp;QUESTION QUESTION QUESTION QUESTION QUESTION&nbsp;QUESTION QUESTION&nbsp;",j:"absolute",x:"visible",k:"div",y:"preserve",z:10,aS:8,E:7.70865,aT:8,a:133,b:118}}},{A:{a:[{p:4,h:"54"}]},o:"48",p:"600px",cA:false,Y:1024,Z:768,c:"#FFF",L:[],bY:1,d:1024,U:{},T:{"53_hover":{q:false,z:1,i:"53_hover",n:"53_hover",a:[{f:"c",y:0,z:1,i:"B",e:"#83A0EB",s:"#FFD300",o:"113"},{f:"c",y:0,z:1,i:"C",e:"#83A0EB",s:"#FFD300",o:"113"},{f:"c",y:0,z:1,i:"D",e:"#83A0EB",s:"#FFD300",o:"113"},{f:"c",y:0,z:1,i:"A",e:"#83A0EB",s:"#FFD300",o:"113"},{f:"c",y:0,z:1,i:"G",e:"#83A0EB",s:"#FFD300",o:"113"},{y:1,i:"B",s:"#83A0EB",z:0,o:"113",f:"c"},{y:1,i:"C",s:"#83A0EB",z:0,o:"113",f:"c"},{y:1,i:"D",s:"#83A0EB",z:0,o:"113",f:"c"},{y:1,i:"A",s:"#83A0EB",z:0,o:"113",f:"c"},{y:1,i:"G",s:"#83A0EB",z:0,o:"113",f:"c"}],f:30,b:[]},kTimelineDefaultIdentifier:{q:false,z:0,i:"kTimelineDefaultIdentifier",n:"Main Timeline",a:[{f:"c",p:2,y:0,z:0,i:"ActionHandler",e:{a:[{}]},s:{a:[{p:13,o:"81",q:false}]},o:"kTimelineDefaultIdentifier"},{f:"c",p:2,y:0,z:0,i:"ActionHandler",s:{a:[{p:12,o:"82",q:false}]},o:"kTimelineDefaultIdentifier"}],f:30,b:[]}},bZ:180,O:["114","116","112","111","115","113"],n:"Untitled Layout","_":2,v:{"114":{h:"84",p:"no-repeat",x:"visible",a:0,dB:"img",q:"100% 100%",j:"absolute",r:"inline",z:3,b:0,k:"div",d:768,c:1024,e:0.3},"111":{aU:8,G:"#FFD300",c:1008,aV:8,r:"inline",d:244,s:"'Helvetica Neue',Arial,Helvetica,Sans-Serif",t:64,Z:"break-word",v:"bold",i:"info1",w:"You scored XXXX points<br>\nout of a possible XXXXXX,<br> \nputting you at XX percent.",j:"absolute",x:"visible",k:"div",y:"preserve",z:6,aS:8,aT:8,a:0,F:"center",b:220},"115":{aV:8,w:"",x:"visible",a:466,Z:"break-word",y:"preserve",j:"absolute",r:"inline",b:365,yy:"nowrap",s:"Helvetica,Arial,Sans-Serif",z:8,aS:8,t:16,aT:8,k:"div",aU:8,G:"#000"},"112":{aU:8,G:"#FFD300",c:608,aV:8,r:"inline",d:117,s:"Impact,'Arial Narrow Bold',Sans-Serif",X:20,t:96,u:"italic",Z:"break-word",v:"bold",i:"finished",w:"FINISHED",j:"absolute",x:"visible",k:"div",y:"preserve",z:4,aS:8,aT:8,a:200,F:"center",b:50},"116":{c:1024,d:768,I:"None",J:"None",K:"None",g:"#000",L:"None",M:0,N:0,A:"#D8DDE4",x:"visible",j:"absolute",B:"#D8DDE4",P:0,k:"div",C:"#D8DDE4",z:2,O:0,D:"#D8DDE4",a:0,b:0},"113":{b:560,z:7,K:"Solid",c:398,L:"Solid",d:84,aS:6,M:10,bD:"none",N:10,aT:6,O:10,aU:6,P:10,aV:6,i:"playAgain",j:"absolute",k:"div",aI:20,aJ:20,aK:20,X:1.92011,aL:20,A:"#FFD300",B:"#FFD300",aM:"53_hover",r:"inline",C:"#FFD300",Z:"break-word",s:"Impact,'Arial Narrow Bold',Sans-Serif",D:"#FFD300",t:64,u:"italic",F:"center",aA:{a:[{d:1.1,p:1,g:1,e:"1"}]},v:"bold",G:"#FFD300",aP:"pointer",w:"Play Again?",x:"visible",I:"Solid",a:298,y:"preserve",J:"Solid"}}}],{},h,{f:{p:0,q:[[0,0,0.1971,0,0.3391,0.8944,0.3636,1],[0.3636,1,0.3636,1,0.4425,0.75,0.5455,0.75],[0.5455,0.75,0.6519,0.75,0.7273,1,0.7273,1],[0.7273,1,0.7273,1,0.7718,0.9375,0.8182,0.9375],[0.8182,0.9375,0.8646,0.9375,0.9091,1,0.9091,1],[0.9091,1,0.9091,1,0.9294,0.9844,0.9546,0.9844],[0.9546,0.9844,0.9798,0.9844,1,1,1,1]]}},null,false,true,-1,true,true,false,true,true);d[f]=c.API;document.getElementById(g).setAttribute("HYP_dn",f);c.z_o(this.body)})();})();