(this.webpackJsonpejercicio=this.webpackJsonpejercicio||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},25:function(e,a,t){e.exports=t(37)},30:function(e,a,t){},36:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var r=t(0),c=t.n(r),n=t(16),l=t.n(n),s=t(17),i=t(18),m=t(23),o=t(19),u=t(9),h=t(24),d=t(10),f=t(20),E=t.n(f),p=(t(30),function(e){var a;return c.a.createElement("header",{className:"header"},c.a.createElement("img",(a={className:"header__logo"},Object(d.a)(a,"className","img-fluid"),Object(d.a)(a,"src",E.a),Object(d.a)(a,"alt",e.alt),a)))}),_=function(e){return c.a.createElement("form",{className:"form"},c.a.createElement("input",{className:"form__input",type:"text",placeholder:"Buscar personaje",value:e.search,onChange:function(a){e.handleSearch({value:a.target.value})}}))},N=t(5),b=function(e){var a=e.character,t=a.id,r=a.name,n=a.image,l=a.species,s="/character/".concat(t);return c.a.createElement("li",{className:"card"},c.a.createElement(N.b,{to:s},c.a.createElement("img",{className:"card__image",src:n,alt:r})),c.a.createElement(N.b,{to:s},c.a.createElement("h3",{className:"card__title"},r)),c.a.createElement(N.b,{to:s},c.a.createElement("p",{className:"card__icon"},"Human"===l?c.a.createElement("i",{className:"fas fa-user-alt"}):"Alien"===l?c.a.createElement("i",{className:"fas fa-hand-spock"}):void 0)))},v=function(e){return 0===e.characters.length?c.a.createElement("p",{className:"card__title"},"\xa1Ups!...los personajes encontrados no coinciden con la b\xfasqueda"):c.a.createElement("ul",{className:"cards"},e.characters.map((function(e){return c.a.createElement(b,{key:e.id,character:e})})))},g=t(6),j=function(e){var a=e.character,t=a.image,r=a.name,n=a.status,l=a.species,s=a.origin,i=a.episode;return c.a.createElement(c.a.Fragment,null,c.a.createElement(N.b,{to:"/"},c.a.createElement("button",{className:"fas fa-backward card__btn"})),c.a.createElement("div",{className:"card--detail"},c.a.createElement("img",{className:"card--detail__image",src:t,alt:r}),c.a.createElement("h3",{className:"card__title"},r),c.a.createElement("ul",null,c.a.createElement("li",{className:"card__icon"},"Status: ","Alive"===n?c.a.createElement("i",{className:"fas fa-laugh-beam"}):"Dead"===n?c.a.createElement("i",{className:"fas fa-skull-crossbones"}):"unknown"===n?c.a.createElement("i",{className:"fas fa-question"}):void 0),c.a.createElement("li",{className:"card__text"},"Species: ",l),c.a.createElement("li",{className:"card__text"},"Origin: ",s.name),c.a.createElement("li",{className:"card__text"},"Episodes: ",i.length))))},k=(t(36),function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(m.a)(this,Object(o.a)(a).call(this,e))).filter=function(e,a,t){return e.filter((function(e){return e[a].trim().toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}))},t.state={characters:[],search:""},t.renderCharacterDetail=t.renderCharacterDetail.bind(Object(u.a)(t)),t.handleSearch=t.handleSearch.bind(Object(u.a)(t)),t}return Object(h.a)(a,e),Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./api/characters.json").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){return e.setState({characters:a})}))}},{key:"handleSearch",value:function(e){this.setState({search:e.value})}},{key:"filterBySearch",value:function(){var e=this.state.characters,a=this.state.search;return this.filter(e,"name",a)}},{key:"renderCharacterDetail",value:function(e){var a=parseInt(e.match.params.id),t=this.state.characters.find((function(e){return e.id===a}));return void 0===t?c.a.createElement("p",null,"Personaje no encontrado"):c.a.createElement(j,{character:t})}},{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement(p,{alt:"Ricky y Morty logo"}),c.a.createElement(g.c,null,c.a.createElement(g.a,{exact:!0,path:"/"},c.a.createElement(_,{search:this.state.search,handleSearch:this.handleSearch}),c.a.createElement(v,{characters:this.filterBySearch()})),c.a.createElement(g.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),a}(c.a.Component));l.a.render(c.a.createElement(N.a,null,c.a.createElement(k,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.f32335fa.chunk.js.map