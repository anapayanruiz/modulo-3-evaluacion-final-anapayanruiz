(this.webpackJsonpejercicio=this.webpackJsonpejercicio||[]).push([[0],{20:function(e,a,t){e.exports=t.p+"static/media/logo.75509f2e.png"},25:function(e,a,t){e.exports=t(36)},35:function(e,a,t){},36:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(16),l=t.n(c),i=t(17),s=t(18),o=t(23),m=t(19),u=t(8),d=t(24),h=t(10),f=t(20),E=t.n(f),p=function(e){var a;return r.a.createElement("header",null,r.a.createElement("img",(a={className:"header__logo"},Object(h.a)(a,"className","img-fluid"),Object(h.a)(a,"src",E.a),Object(h.a)(a,"alt",e.alt),a)))},b=function(e){var a=function(a){e.handleClick({valueRadio:a.target.value})};return r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault()}},r.a.createElement("input",{className:"form__input",type:"text",placeholder:"Buscar personaje",value:e.searchInput,onChange:function(a){e.handleSearch({valueInput:a.target.value})}}),r.a.createElement("div",{className:"form--radio"},r.a.createElement("label",{htmlFor:"all",className:"form--radio__label"},"Todos"),r.a.createElement("input",{id:"all",type:"radio",value:"all",name:"gender",defaultChecked:"all"===e.searchRadio,onClick:a}),r.a.createElement("label",{htmlFor:"Male",className:"form--radio__label"},"Masculino"),r.a.createElement("input",{id:"Male",type:"radio",value:"Male",name:"gender",defaultChecked:"Male"===e.searchRadio,onClick:a}),r.a.createElement("label",{htmlFor:"Female",className:"form--radio__label"},"Femenino"),r.a.createElement("input",{id:"Female",type:"radio",value:"Female",name:"gender",defaultChecked:"Female"===e.searchRadio,onClick:a}),r.a.createElement("label",{htmlFor:"unknown",className:"form--radio__label"},"Desconocido"),r.a.createElement("input",{id:"unknown",type:"radio",value:"unknown",name:"gender",defaultChecked:"unknown"===e.searchRadio,onClick:a})))},v=t(5),_=function(e){var a=e.character,t=a.id,n=a.name,c=a.image,l=a.species,i="/character/".concat(t);return r.a.createElement("li",{className:"card"},r.a.createElement(v.b,{to:i},r.a.createElement("img",{className:"card__image",src:c,alt:n})),r.a.createElement(v.b,{to:i},r.a.createElement("h3",{className:"card__title"},n)),r.a.createElement(v.b,{to:i},r.a.createElement("p",{className:"card__icon"},"Human"===l?r.a.createElement("i",{className:"fas fa-user-alt"}):"Alien"===l?r.a.createElement("i",{className:"fas fa-hand-spock"}):void 0)))},k=function(e){return 0===e.characters.length?r.a.createElement("p",{className:"card__title"},"\xa1Ups!...los personajes encontrados no coinciden con la b\xfasqueda"):r.a.createElement("ul",{className:"cards"},e.characters.map((function(e){return r.a.createElement(_,{key:e.id,character:e})})))},N=t(6),g=function(e){var a=e.character,t=a.image,n=a.name,c=a.status,l=a.species,i=a.origin,s=a.episode;return r.a.createElement(r.a.Fragment,null,r.a.createElement(v.b,{to:"/"},r.a.createElement("button",{className:"fas fa-backward card__btn"})),r.a.createElement("div",{className:"card--detail"},r.a.createElement("img",{className:"card--detail__image",src:t,alt:n}),r.a.createElement("h3",{className:"card__title"},n),r.a.createElement("ul",null,r.a.createElement("li",{className:"card__icon"},"Status: ","Alive"===c?r.a.createElement("i",{className:"fas fa-laugh-beam"}):"Dead"===c?r.a.createElement("i",{className:"fas fa-skull-crossbones"}):"unknown"===c?r.a.createElement("i",{className:"fas fa-question"}):void 0),r.a.createElement("li",{className:"card__text"},"Species: ",l),r.a.createElement("li",{className:"card__text"},"Origin: ",i.name),r.a.createElement("li",{className:"card__text"},"Episodes: ",s.length))))},C=(t(35),function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).filter=function(e,a,t,n){return e.filter((function(e){return n?e[a]===t:e[a].trim().toLocaleLowerCase().includes(t.trim().toLocaleLowerCase())}))},t.state={characters:[],searchInput:"",searchRadio:"all"},t.renderCharacterDetail=t.renderCharacterDetail.bind(Object(u.a)(t)),t.handleSearch=t.handleSearch.bind(Object(u.a)(t)),t.handleClick=t.handleClick.bind(Object(u.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./api/characters.json").then((function(e){return e.json()})).then((function(e){return e.results})).then((function(a){return e.setState({characters:a})}))}},{key:"handleSearch",value:function(e){this.setState({searchInput:e.valueInput})}},{key:"handleClick",value:function(e){this.setState({searchRadio:e.valueRadio})}},{key:"filterBySearch",value:function(){var e=this.state.characters,a=this.state.searchInput,t=this.state.searchRadio;return"all"!==t&&(e=this.filter(e,"gender",t,!0)),e=this.filter(e,"name",a,!1)}},{key:"renderCharacterDetail",value:function(e){var a=parseInt(e.match.params.id),t=this.state.characters.find((function(e){return e.id===a}));return void 0===t?r.a.createElement("p",null,"Personaje no encontrado"):r.a.createElement(g,{character:t})}},{key:"render",value:function(){return r.a.createElement("div",{className:"page"},r.a.createElement(p,{alt:"Ricky y Morty logo"}),r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:"/"},r.a.createElement(b,{searchRadio:this.state.searchRadio,searchInput:this.state.searchInput,handleClick:this.handleClick,handleSearch:this.handleSearch}),r.a.createElement(k,{characters:this.filterBySearch()})),r.a.createElement(N.a,{path:"/character/:id",render:this.renderCharacterDetail})))}}]),a}(r.a.Component));l.a.render(r.a.createElement(v.a,null,r.a.createElement(C,null)),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.5b3bc689.chunk.js.map