!function(e){var n={};function t(r){if(n[r])return n[r].exports;var i=n[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var i in e)t.d(r,i,function(n){return e[n]}.bind(null,i));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){t(1),t(2),t(3),t(4),t(5)},function(e,n){var t;window.Bus=((t=function(){this.__z_e_listeners={}}).prototype.on=function(e,n,t){var r=this.__z_e_listeners[e];void 0===r&&(r=[],this.__z_e_listeners[e]=r);var i={handler:n,context:t};return r.push(i),i},t.prototype.off=function(e,n,t){var r=this.__z_e_listeners[e];if(void 0!==r)for(var i=r.length,o=0;o<i;o++){var s=r[o];if(s.handler===n&&s.context===t)return void r.splice(o,1)}},t.prototype.emit=function(e,n){var t=this.__z_e_listeners[e];if(void 0!==t)for(var r=t.length,i=0;i<r;i++){var o=t[i],s=o.handler,a=o.context;s.apply(a,[n])}},new t)},function(e,n){window.PersonalityTester=function(){let e=e=>`personalities/${e}.png`,n=e=>`personality_names/${e}.png`,t={name:"",sex:""};const r=[{name:"山大橘猫型人格",url:e("shandajumao"),nameUrl:n("shandajumao")},{name:"山大白猫型人格",url:e("baimao"),nameUrl:n("baimao")},{name:"知新楼型人格",url:e("zhixinlou"),nameUrl:n("zhixinlou")},{name:"小树林型人格",url:e("xiaoshulin"),nameUrl:n("xiaoshulin")},{name:"情人坡型人格",url:e("qingrenpo"),nameUrl:n("qingrenpo")},{name:"青岛风型人格",url:e("qingdaofeng"),nameUrl:n("qingdaofeng")},{name:"文心湖型人格",url:e("wenxinhu"),nameUrl:n("wenxinhu")},{name:"鸡蛋饼型人格",url:e("jidanbing"),nameUrl:n("jidanbing")},{name:"号院型人格",url:e("haoyuan"),nameUrl:n("haoyuan")},{name:"风雨操场型人格",url:e("fengyucaochang"),nameUrl:n("fengyucaochang")},{name:"麻辣香锅人格",url:e("malaxiangguo"),nameUrl:n("malaxiangguo")},{name:"校友门型人格",url:e("xiaoyoumen"),nameUrl:n("xiaoyoumen")},{name:"海棠花型人格",url:e("haitanghua"),nameUrl:n("haitanghua")}];let i=[];const o={A:Symbol("A"),B:Symbol("B"),C:Symbol("C"),D:Symbol("D")},s=()=>Math.random()>=.5,a=()=>{let e=Math.random();return e>=2/3?1:e>=1/3?0:-1};let l=null;return{updateUserInfo:(e,n)=>{t.name=e,t.sex=n},updateAnswer(e,n){i[e]=n},getTestingResult(){if(l)return l;if(i[5]===o.A){let e=a();l=r[e>0?0:e<0?6:9]}else if(i[4]===o.A){let e=a();l=r[e>0?1:e<0?8:11]}else if(i[5]===o.D)l=r[s()?s()?3:4:s()?10:12];else{let e=a();l=r[e>0?2:e<0?5:7]}return l},showResult(){let e=this.getTestingResult(),n=document.createElement("div");document.body.appendChild(n),n.outerHTML=`\n            <div class="testing-result" id="testing-result">\n    <img src="private_images/cele.png" class="cele">\n    <img src="private_images/dangdangdang.png" class="dangdangdang">\n    <img class="personality" src="${e.nameUrl}">\n    <button class="enter-button" id="enter-button">点击查看你的人格报告</button>\n    <style>\n        .testing-result{\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            background-color: #bbdadc;\n            color: #0a2d2f;\n        }\n        .testing-result .cele{\n            width: 50%;\n            position: absolute;\n            left: 0;\n        }\n        .testing-result .dangdangdang{\n            width: 70%;\n            position: absolute;\n            left: 15%;\n            top: 20%;\n            animation: dangdangdang ease-in-out 200ms infinite alternate ;\n            transform-origin: 30% 70%;\n        }\n        @keyframes dangdangdang {\n            0%{\n                transform: rotateZ(0);\n            }\n            100%{\n                transform: rotateZ(5deg);\n            }\n        }\n        .testing-result .personality{\n            position: absolute;\n            box-sizing: border-box;\n            width: 83%;\n            left: 10%;\n            top: 50%;\n        }\n        .testing-result .enter-button{\n            position: absolute;\n            bottom: 1em;\n            right: 1em;\n            border: none;\n            background-color: transparent;\n            color: inherit;\n            font-size: 1.2em;\n        }\n\n        .testing-result .enter-button:focus{\n            outline: none;\n        }\n    </style>\n</div>\n`;let t=document.getElementById("enter-button"),r=document.getElementById("testing-result");t.addEventListener("click",function(){r.parentNode.removeChild(r),PersonalityTester.showPersonalPoster()})},showPersonalPoster(){let n=this.getTestingResult(),r=document.createElement("canvas"),i=r.getContext("2d");r.width=640,r.height=1136;let o=new Image;o.src=n.url,o.onload=(()=>{i.drawImage(o,0,0),i.fillStyle="#fff",i.font="bolder 25px NSimSun",i.textAlign="right",i.fillText(t.name,240,57);let n=r.toDataURL("image/jpeg"),s=`\n    <style>\n        /*专属海报css*/\n\n        .personal-poster{\n            position: fixed;\n            left: 0;\n            top: 0;\n            width: 100%;\n            height: 100%;\n            text-align: center;\n            color: white;\n            background-image: url("${e("poster_bg")}");\n            background-size: cover;\n        }\n        .personal-poster__img{\n            margin-top: 1em;\n            width: 73%;\n            height: 78%;\n            object-fit: contain;\n            animation: poster-transition 2s;\n        }\n        .restart-button{\n            font-size: 1.5em;\n            height: 2em;\n            color: white;\n            background-color: transparent;\n            border: 1px solid white;\n            border-radius: 1em;\n            padding: 0 2em;\n        }\n        .restart-button:hover{\n            cursor: pointer;\n        }\n        .restart-button:focus{\n            outline: none;\n        }\n        \n        @keyframes poster-transition {\n            from {\n                transform: scale(2.5);\n            }\n            to{\n                transform: scale(1);\n            }\n        }\n        \n    </style>\n    <div class="personal-poster">\n        <img src="${n}" class="personal-poster__img">\n        <p class="personal-poster__hint">长按保存图片</p>\n        <button class="restart-button" onclick="location.reload()">再测一次</button>\n    </div>`,a=document.createElement("div");document.body.appendChild(a),a.outerHTML=s})},optionTypes:o}}()},function(e,n){function t(e){let n=e.split(/(\s)/),t=[];return n.forEach(e=>{let n="";for(let r of e)n+=r,r>="一"&&r<="龥"&&(t.push(n),n="");n.length>0&&t.push(n)}),t}createjs.Text.prototype._drawText=function(e,n,r){var i=!!e;i||((e=Text._workingContext).save(),this._prepContext(e));for(var o=this.lineHeight||this.getMeasuredLineHeight(),s=0,a=0,l=String(this.text).split(/(?:\r\n|\r|\n)/),u=0,d=l.length;u<d;u++){var A=l[u],g=null;if(null!=this.lineWidth&&(g=e.measureText(A).width)>this.lineWidth){var c=t(A);A=c[0],g=e.measureText(A).width;for(var f=1,m=c.length;f<m;f++){var p=e.measureText(c[f]).width;g+p>this.lineWidth?(i&&this._drawTextLine(e,A,a*o),r&&r.push(A),g>s&&(s=g),console.log(A),A=c[f],g=e.measureText(A).width,a++):(A+=c[f],g+=p)}}i&&this._drawTextLine(e,A,a*o),r&&r.push(A),n&&null==g&&(g=e.measureText(A).width),g>s&&(s=g),a++}return n&&(n.width=s,n.height=a*o),i||e.restore(),n}},function(e,n){window.waitAnswer=function(e,n=[{name:`option${e}A`,representedAnswer:PersonalityTester.optionTypes.A},{name:`option${e}B`,representedAnswer:PersonalityTester.optionTypes.B},{name:`option${e}C`,representedAnswer:PersonalityTester.optionTypes.C},{name:`option${e}D`,representedAnswer:PersonalityTester.optionTypes.D}]){this.stop(),n.forEach(n=>{this[n.name].addEventListener("click",function(){PersonalityTester.updateAnswer(e,n.representedAnswer),this.play()}.bind(this))})},window.waitClickingScreen=function(){this.stop();let e=()=>{this.play(),window.document.body.removeEventListener("click",e)};window.document.body.addEventListener("click",e)}},function(e,n){function t(){let e=[];let n=function(){let t=0;return function(){++t>20&&(!function(){let n={flake:null,verticalSpeed:null,horizontalSpeed:null,disabled:!1};if(n.distance=Math.floor(10*Math.random()),n.startLeft=Math.random()*window.innerWidth,n.verticalSpeed=(e=>.5*e+4)(Math.random()),n.horizontalSpeed=-n.verticalSpeed*(e=>Math.tan(Math.pow(e,2)*(Math.PI/4)))(Math.random()),n.size=3+5*n.distance,n.spinReversed=Math.random()>=.5,n.spinTime=3,n.flake=document.createElement("span"),n.flake.innerHTML="❅",n.flake.style.cssText=`\n                        user-select:none;\n                        position:fixed;\n                        color:#fff;\n                        left: ${n.startLeft}px;\n                        font-size:${n.size}px;\n                        top:-25px;\n                        animation:${n.spinReversed?"spin-reversed":"spin"}  linear ${n.spinTime}s infinite;\n                      `,Math.random()<.2){let e=Math.random();e<.333?(n.flake=document.createElement("img"),n.flake.src="data:image/png;base64,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",n.flake.style.cssText=`\n                        user-select:none;\n                        position:fixed;\n                        left: ${n.startLeft}px;\n                        width:50px;\n                        top:-25px;\n                        // animation:${n.spinReversed?"spin-reversed":"spin"}  linear ${n.spinTime}s infinite;\n                        pointer-events:none;\n                      `,n.flake.ondragstart=function(){return!1}):e<.666?(n.flake=document.createElement("img"),n.flake.src="data:image/png;base64,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",n.flake.style.cssText=`\n                        user-select:none;\n                        position:fixed;\n                        left: ${n.startLeft}px;\n                        width:50px;\n                        top:-25px;\n                        // animation:${n.spinReversed?"spin-reversed":"spin"}  linear ${n.spinTime}s infinite;\n                        pointer-events:none;\n                      `,n.flake.ondragstart=function(){return!1}):e<1&&(n.flake=document.createElement("img"),n.flake.src="data:image/png;base64,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",n.flake.style.cssText=`\n                        user-select:none;\n                        position:fixed;\n                        left: ${n.startLeft}px;\n                        width:50px;\n                        top:-25px;\n                        // animation:${n.spinReversed?"spin-reversed":"spin"}  linear ${n.spinTime}s infinite;\n                        pointer-events:none;\n                      `,n.flake.ondragstart=function(){return!1})}document.body.appendChild(n.flake),e.push(n)}(),t=0),requestAnimationFrame(n)}}();requestAnimationFrame(function n(){e.forEach((n,t)=>{let{flake:r,horizontalSpeed:i,verticalSpeed:o,disabled:s}=n;if(s)return;let a=parseFloat(getComputedStyle(r).top),l=parseFloat(getComputedStyle(r).left);(l>window.innerWidth||l<0||a>window.innerHeight)&&(document.body.removeChild(r),e.splice(t,1)),a+=o,l+=i,r.style.top=`${a}px`,r.style.left=`${l}px`}),requestAnimationFrame(n)}),requestAnimationFrame(n)}window.bindEasterEgg=function(e){let n=document.createElement("div");n.innerHTML="\n        <style>\n        .stage-1 {\n            animation: stage-1 .5s forwards;\n        }\n    \n        .stage-2 {\n            animation: stage-2 .5s forwards;\n        }\n    \n        .stage-3 {\n            animation: stage-3 .5s forwards;\n        }\n    \n        @keyframes stage-1 {\n            0% {\n                transform: scale(1);\n            }\n            50% {\n                transform: scale(1.3);\n            }\n            100% {\n                transform: scale(1.2);\n            }\n        }\n    \n        @keyframes stage-2 {\n            0% {\n                transform: scale(1.2);\n            }\n            50% {\n                transform: scale(1.5);\n            }\n            100% {\n                transform: scale(1.4);\n            }\n        }\n    \n        @keyframes stage-3 {\n            0% {\n                transform: scale(1.4);\n                opacity: 1;\n            }\n            100% {\n                transform: scale(3);\n                opacity: 0;\n                display: none;\n                pointer-events: none;\n            }\n        }\n    \n        @keyframes spin {\n            from {\n                transform: rotateZ(0deg);\n            }\n            to {\n                transform: rotateZ(360deg);\n            }\n        }\n    \n        @keyframes spin-reversed {\n            from {\n                transform: rotateZ(360deg);\n            }\n            to {\n                transform: rotateZ(0deg);\n            }\n        }\n    </style>\n    ";let r=document.createElement("img");r.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAEXklEQVR4Xu2aUWhbZRTH/+cmNtmEOdijIsM9aBHEttAtza2tMqTghgzHTTqS1DKh4Iu+CXuYGSKCTwq+TJSuSQbJRSbolCLqWpab2cK6MZSo2DHGEByOFcZs1/XeIykddqX23tzvu/cGcu/rPf9zzv+X86VfDiW0+UNt7h8hgHAC2pxAeATafADCL8HwCIRHIEACPbr+WPxOzDKOvnonqDYCOwLqab2HTf6OAJM4sv/8yOErQUAIBIBa0J9k8BwRdjVMM/gvRLnbGB7+028IvgPonTizq0NZngXoqfVmGfjt7krHvsujhxb8hOArgMHx8fj9yLYaEXVtapIxeztO/b9o2rJfEPwDoOsR9R6fBTC0lTkGvjLm64eQz1t+QPANQLJYKRKQcWKKmT83cuk3nMSKxvgCQC1W8gDebaZZZhwzcqkPmtG4ifUcQF+pklEYRTfNWYRsLZMqudE61XgKQC3qQ8DquY84bWhDnGkxvVzLaT+61NvKPAOQmPiiK0IrNRDFbbvY8luR75oc7b8wcviSUJ7/EXsCoO9UeQ8pNPPgoiPaODNuEai7mtOui+baqJcOIKHr2yL3rJ83XnREG2fgj4UYPSv7jiAdQF9Bf0kh/kHU8GZ6IqjnMylDZm7pAAbPnYuu3Lj5MYA3ZTbK4E+MmPI2NM2UmVc6AJnN+ZHLUwCJCf1xReFxYnS4MkNYXIyY2YtHjvztSu9A5BmAvaXSjqgVnSGiZxz0sUUIz5kxRb2gaYtieTZXewKg5+TJR+Lbd35PwAsymmbGt8bV+kEvfiB5AiBZKJeJKCXD/H85+NNqNj0mNyfkr8WTxcr7BByT3Wgjn8V4p5ZLfSgzt9QJSJYqI8Q4JbPB9bkYYCJ6rZrRvpRVQxoAdaKyHwomBX74OPLEwDKIB4xM+idHApsgKQCeKxQe3YHYDRB2ymjKLgczbi4tLjxxcWzsvl2s3XspANb+5N0mIsWuoIz3jSkwMlocRCyaTwqARhNqsTIM4GnRhpzomfmKkUufcRJrFyMNgF2hVn3vCYDG+nslsn0ahF4pxhmzUfOfganR0SUp+dYlkQ8gn1fUPZ3f2K2/XRiZrM7XX5F9G5QOIFkof0ZER10YtJV4sS6XCiBZKB8nohO2TgQCGDhuZFPvCaR4SCoNgMj6u1kzMtflUgBIWH83y8AE6EA1qzVunkKPMIDEab03YlrTwuvvZm0wL5kc7RNdlwsBkL3+bp4BbrHFe2uvp+eb1T6IFwKQLFRqREi4LS5FxzxTzaX3uc0lCKBcF195uW19Tcf8ezWXdn0FFwLQX9AHmPhFQQuCcmuqmh2ecptECIDboq2kCwRA/WDXFIEG1oNg8HTn15cG/YYTAvCbeKNe20/Arwe6PwLhrYeOAONE59m5xr/S+PoEcgRWp2Do+d2IYveq2xVc65y8fM1X52vFAgMQhNnNaoYAWuWTCKqPcAKCIt8qdcMJaJVPIqg+wgkIinyr1G37CfgXSgZYUMAufVIAAAAASUVORK5CYII=",n.appendChild(r);let i=function(){let e=0;return function(){++e>3||(1===e?r.classList.add("stage-1"):2===e?(r.classList.remove("stage-1"),r.classList.add("stage-2")):3===e&&(r.classList.remove("stage-2"),r.classList.add("stage-3"),setTimeout(()=>{t()},1e3)))}}();r.addEventListener("click",i),e.parentNode.replaceChild(n,e)}}]);