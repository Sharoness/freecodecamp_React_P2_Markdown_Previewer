(this.webpackJsonpmarkdown_previewer=this.webpackJsonpmarkdown_previewer||[]).push([[0],{17:function(e,t,n){e.exports=n(26)},22:function(e,t,n){},23:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(10),i=n.n(o),s=(n(22),n(11)),c=n(12),l=n(5),d=n(16),u=n(15),m=(n(23),n(6)),h=n.n(m),w=(n(24),n(13)),f=n(7),g=n(8);h.a.setOptions({breaks:!0});var b=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).state={editorInput:"# Welcome to my React Markdown Previewer!\n## This is a sub-heading\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n  \nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want! \n1. But the list goes on...\n- Even if you use dashes or asterisks.\n* And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n"},a.handleChange=a.handleChange.bind(Object(l.a)(a)),a.getMarkdownText=a.getMarkdownText.bind(Object(l.a)(a)),a}return Object(c.a)(n,[{key:"handleChange",value:function(e){this.setState({editorInput:e.target.value})}},{key:"getMarkdownText",value:function(){return{__html:h()(this.state.editorInput)}}},{key:"render",value:function(){return r.a.createElement(w.a,{id:"container"},r.a.createElement(f.a,{className:"justify-content-center mb-4"},r.a.createElement(g.a,{id:"editorWrap",xs:6,className:"p-0 mt-4 mb-3"},r.a.createElement("div",{className:"bg-primary text-center font-weight-bold",id:"headerEditor"},"Editor"),r.a.createElement("textarea",{className:"w-100",id:"editor",value:this.state.editorInput,onChange:this.handleChange,rows:"10"}))),r.a.createElement(f.a,{className:"justify-content-center"},r.a.createElement(g.a,{id:"previewWrap",className:"p-0 mb-4"},r.a.createElement("div",{className:"bg-primary text-center font-weight-bold",id:"headerPreview"},"Preview"),r.a.createElement("div",{id:"preview",className:"pl-1",dangerouslySetInnerHTML:this.getMarkdownText()}))))}}]),n}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(25);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.391828aa.chunk.js.map