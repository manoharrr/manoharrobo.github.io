(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{12:function(e,a,n){},14:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(12),n(3)),c=n(4),s=n(6),m=n(5);var u=function(e){var a=e.name,n=e.email,t=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw3 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(t,"?200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))};var h=function(e){var a=e.robots;return r.a.createElement(t.Fragment,null,a.map((function(e,n){return r.a.createElement(u,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})})))};var d=function(e){var a=e.searchfield,n=e.onsearchchange;return r.a.createElement("div",{className:"tc pa2"},r.a.createElement("input",{className:"pa3 b--green bg-lightest-blue",type:"text",placeholder:"Search here",value:a,onChange:n}))},b=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}];var v=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"3px solid black",height:"550px"}},e.children,";")},g=function(e){Object(s.a)(n,e);var a=Object(m.a)(n);function n(){var e;return Object(l.a)(this,n),(e=a.call(this)).onsearchchange=function(a){e.setState({searchfield:a.target.value})},e.state={robots:b,searchfield:""},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this,a=this.state.robots.filter((function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())}));return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Robot Searchbar"),r.a.createElement(d,{onsearchchange:this.onsearchchange}),r.a.createElement("div",null,r.a.createElement(v,null,r.a.createElement(h,{robots:a}))))}}]),n}(r.a.Component);n(13),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,a,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ff5fe7cf.chunk.js.map