(this["webpackJsonppokedex-react"]=this["webpackJsonppokedex-react"]||[]).push([[0],Array(25).concat([function(A,e,t){},function(A,e,t){},,function(A,e,t){},function(A,e,t){},function(A,e,t){},,,,,,function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){},function(A,e,t){"use strict";t.r(e);var a=t(0),n=t(1),c=t.n(n),o=t(18),s=t.n(o),r=(t(25),t(26),t(8)),i=t(9),l=t.n(i),j=t(11),m="https://pokeapi.co/api/v2/pokemon";function h(){return d.apply(this,arguments)}function d(){return(d=Object(j.a)(l.a.mark((function A(){var e,t,a,n,c,o,s=arguments;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return e=s.length>0&&void 0!==s[0]?s[0]:{},t=e.limit,a=void 0===t?20:t,n=e.page,c=void 0===n?0:n,o="".concat(m,"/?offset=").concat(a*c,"}&limit=").concat(a),A.next=4,fetch(o).then((function(A){return A.json()})).then((function(A){var e=A.results,t=A.count;return{pokemonName:e.map((function(A){return A.name})),count:t}}));case 4:return A.abrupt("return",A.sent);case 5:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function b(){var A=Object(n.useState)([]),e=Object(r.a)(A,2),t=e[0],a=e[1],c=Object(n.useState)(0),o=Object(r.a)(c,2),s=o[0],i=o[1];return Object(n.useEffect)((function(){h().then((function(A){a(A)}))}),[a]),Object(n.useEffect)((function(){if(s<0)return i(0);h({page:s}).then((function(A){a(A)}))}),[s,a]),{pokemons:t,setPage:i,page:s}}function p(){return(p=Object(j.a)(l.a.mark((function A(e){var t;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="".concat(m,"/").concat(e),A.next=3,fetch(t).then((function(A){return A.json()})).then((function(A){var e=A.sprites,t=A.abilities,a=A.name,n=A.weight,c=A.moves,o=A.types,s=A.stats,r=A.height,i=A.id,l=o.map((function(A){return A.type.name}));return{officialArtwork:e.other["official-artwork"].front_default,name:a,abilities:t,moves:c,typesPokemon:l,stats:s,height:r,weight:n,id:i}})).catch((function(A){return A}));case 3:return A.abrupt("return",A.sent);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function u(A){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),s=Object(r.a)(o,2),i=s[0],l=s[1];return Object(n.useEffect)((function(){l(!0),function(A){return p.apply(this,arguments)}(A).then((function(A){c(A),l(!1)}))}),[c,A]),{pokemonData:a,loading:i}}t(28),t(29);function x(){return Object(a.jsxs)("div",{className:"lds-ring",children:[Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{}),Object(a.jsx)("div",{})]})}function O(A){var e=u(A.pokemon),t=e.loading,n=e.pokemonData;return Object(a.jsx)(c.a.Fragment,{children:t?Object(a.jsx)(x,{}):Object(a.jsx)("img",{src:n.officialArtwork,alt:A.pokemon,className:"image-pokemon"})})}t(30);var g=t(6);function k(A){var e=A.pokemon;return!!e.pokemonName&&e.pokemonName.map((function(A){return Object(a.jsxs)(g.b,{to:"/pokedex-react/pokemon/".concat(A),onClick:function(){return document.getElementById("".concat(A).innerText)},className:"container-pokemon",children:[Object(a.jsx)("div",{className:"container-img-pokemon",children:Object(a.jsx)(O,{pokemon:A})}),Object(a.jsx)("h3",{className:"pokemon-title",id:A,children:A})]},"".concat(A))}))}var f=t.p+"static/media/pokemon-logo.6f7f9958.png";t(36);function N(){return Object(a.jsx)("header",{className:"header",children:Object(a.jsx)(g.b,{to:"/pokedex-react/",className:"pokemon-logo",children:Object(a.jsx)("img",{src:f,alt:"Pokemon Logo",className:"pokemon-logo"})})})}var C=t(2);t(37);function v(){var A=Object(n.useState)(""),e=Object(r.a)(A,2),t=e[0],o=e[1],s=b().pokemons,i=Object(C.f)();return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("div",{className:"container-input",children:[Object(a.jsx)("input",{onChange:function(A){return o(A.target.value)},value:t,className:"input-search",placeholder:"Total Pokemons: ".concat(s.count)}),Object(a.jsx)("button",{onClick:function(){return i.replace("/pokedex-react/pokemon/".concat(t.toLocaleLowerCase())),o("")},className:"button-search",children:"Search Pokemon"}),Object(a.jsxs)("div",{className:"btn-group",children:[Object(a.jsx)(g.c,{to:"/pokedex-react/",className:"btn btn-danger",activeClassName:"active",exact:!0,children:"Home"}),Object(a.jsx)(g.c,{to:"/pokedex-react/pokemon/types",className:"btn btn-danger",activeClassName:"active",exact:!0,children:"Types Table"}),Object(a.jsx)(g.c,{to:"/pokedex-react/pokemon/info",className:"btn btn-danger",activeClassName:"active",exact:!0,children:"Info"}),Object(a.jsx)(g.c,{to:"/pokedex-react/pokemon/contact",className:"btn btn-danger",activeClassName:"active",exact:!0,children:"Contact"})]})]})})}t(38);function F(A){var e=u(A.pokemon).pokemonData;return!!e.typesPokemon&&e.typesPokemon.map((function(A){return Object(a.jsx)("strong",{className:"badge rounded-pill ".concat(A),children:A},A)}))}t(39);function B(A){var e=u(A.pokemon).pokemonData;return[Object(a.jsx)("h1",{className:"abilities-title",children:"Abilities"}),!!e.stats&&e.abilities.map((function(A){return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)("h3",{className:"ability-name",children:[A.ability.name,":",A.is_hidden?Object(a.jsx)("strong",{className:"is-hidden",children:" Is Hidden"},"is-hidden".concat(A.ability.name)):Object(a.jsx)("strong",{className:"not-hidden",children:" Not hidden"},"not-hidden".concat(A.ability.name))]},"abil".concat(A.ability.name," ").concat(A.is_hidden))})}))]}t(40);function U(A){var e=u(A.pokemon),t=e.loading,n=e.pokemonData;return Object(a.jsxs)(c.a.Fragment,{children:[t?Object(a.jsx)(x,{}):Object(a.jsx)("img",{src:n.officialArtwork,alt:A.pokemon,className:"image-pokemon-details"}),Object(a.jsxs)("div",{className:"container-data-pokemon",children:[Object(a.jsxs)("h3",{className:"pokemon-name",children:[n.name,Object(a.jsxs)("span",{className:"id",children:["#",Object(a.jsx)("span",{children:n.id})]})]}),Object(a.jsx)("div",{className:"container-types",children:Object(a.jsx)(F,{pokemon:A.pokemon})}),Object(a.jsxs)("div",{className:"container-details",children:[Object(a.jsxs)("strong",{className:"height",children:["Height: ",Object(a.jsx)("span",{className:"heigh-value",children:n.height})]}),Object(a.jsxs)("strong",{className:"weight",children:["Weight: ",Object(a.jsx)("span",{className:"weight-value",children:n.weight})]}),Object(a.jsx)(B,{pokemon:A.pokemon})]})]})]})}t(41);function Q(A){var e=u(A.pokemon).pokemonData;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("thead",{className:"table-head-stats",children:Object(a.jsx)("tr",{children:!!e.stats&&e.stats.map((function(A){return Object(a.jsx)("th",{className:"stat-title",children:A.stat.name},A.stat.name)}))})}),Object(a.jsx)("tbody",{className:"table-body-stats",children:Object(a.jsx)("tr",{children:!!e.stats&&e.stats.map((function(A){return Object(a.jsx)("td",{className:"stat-value",children:A.base_stat},"".concat(A.base_stat," ").concat(A.stat.name))}))})})]})}t(42);function S(){return(S=Object(j.a)(l.a.mark((function A(e){var t;return l.a.wrap((function(A){for(;;)switch(A.prev=A.next){case 0:return t="https://pokeapi.co/api/v2/move/".concat(e),A.next=3,fetch(t).then((function(A){return A.json()})).then((function(A){var e=A.type,t=A.damage_class,a=A.pp,n=A.power,c=t.name;return{typeName:e.name,damageClassName:c,pp:a,power:n}}));case 3:return A.abrupt("return",A.sent);case 4:case"end":return A.stop()}}),A)})))).apply(this,arguments)}function y(A){var e=Object(n.useState)([]),t=Object(r.a)(e,2),a=t[0],c=t[1];return Object(n.useEffect)((function(){(function(A){return S.apply(this,arguments)})(A).then((function(A){c(A)}))}),[c,A]),{moveData:a}}t(43);function G(A){var e=y(A.move).moveData;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("td",{className:"move-data",children:e.typeName}),Object(a.jsx)("td",{className:"move-data",children:e.damageClassName}),Object(a.jsx)("td",{className:"move-data",children:e.pp}),null===e.power?Object(a.jsx)("td",{className:"move-data",children:" - "}):Object(a.jsx)("td",{className:"move-data",children:e.power})]})}function T(A){var e=u(A.pokemon).pokemonData;return Object(a.jsxs)(c.a.Fragment,{children:[Object(a.jsx)("thead",{className:"table-head-moves",children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"th-moves",children:"Moves"}),Object(a.jsx)("th",{className:"th-moves",children:"Type"}),Object(a.jsx)("th",{className:"th-moves",children:"Damage Class"}),Object(a.jsx)("th",{className:"th-moves",children:"PP"}),Object(a.jsx)("th",{className:"th-moves",children:"Power"}),Object(a.jsx)("th",{className:"th-moves",children:"Moves Learn Method"})]})}),Object(a.jsx)("tbody",{className:"table-body-stats",children:!!e.moves&&e.moves.map((function(A){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{className:"move-value",children:A.move.name},A.move.name),Object(a.jsx)(G,{move:A.move.name}),"machine"===A.version_group_details[0].move_learn_method.name?Object(a.jsx)("td",{className:"move-method",children:"TM"},"".concat(A.move.name," machine")):Object(a.jsx)("td",{className:"move-method",children:"Level Up"},"".concat(A.move.name," Level Up"))]},A.move.name)}))})]})}t(44);function V(){var A=Object(C.g)().pokemon;return Object(a.jsxs)("div",{className:"container-pokemon-info",children:[Object(a.jsx)("div",{className:"container-pokemon-details",children:Object(a.jsx)(U,{pokemon:A})}),Object(a.jsx)("table",{className:"table-stats",children:Object(a.jsx)(Q,{pokemon:A})}),Object(a.jsx)("table",{className:"table-moves",children:Object(a.jsx)(T,{pokemon:A})})]})}var K=t.p+"static/media/type-table.26c19594.png",w=t.p+"static/media/each-type.953d11a1.png";t(45);function E(){return Object(a.jsxs)("div",{className:"container-types-table",children:[Object(a.jsx)("img",{src:K,alt:"Types table",className:"types-table"}),Object(a.jsx)("img",{src:w,alt:"Each type table",className:"each-type"})]})}t(46);var I=t.p+"static/media/rotom-dex.881f13d5.png";function q(){return Object(a.jsxs)("div",{className:"container-pokedex-info",children:[Object(a.jsx)("img",{src:"data:image/png;base64,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",alt:"Pokedex Logo",className:"pokedex-logo"}),Object(a.jsx)("img",{src:I,alt:"Rotomdex",className:"rotomdex1"}),Object(a.jsx)("img",{src:I,alt:"Rotomdex",className:"rotomdex2"}),Object(a.jsx)("h1",{className:"pokedex-title",children:"Pokedex"}),Object(a.jsxs)("p",{className:"pokedex-paragraph",children:['The Pok\xe9dex is an electronic device designed to catalogue and provide information regarding the various species of Pok\xe9mon featured in the Pok\xe9mon video game, anime and manga series. The name Pok\xe9dex is a neologism including "Pok\xe9mon" and "index". The Japanese name is simply "Pok\xe9mon Encyclopedia", and it can feature every Pok\xe9mon on it, depending on the Pok\xe9dex.',Object(a.jsxs)("ul",{className:"pokedex-list",children:[Object(a.jsx)("strong",{children:"The Pok\xe9dex can:"}),Object(a.jsx)("li",{children:"Identify Pok\xe9mon"}),Object(a.jsx)("li",{children:"Scan Pok\xe9 Balls (Sinnoh, anime)"}),Object(a.jsx)("li",{children:"Identify battle moves"}),Object(a.jsx)("li",{children:"Show where to capture Pok\xe9mon (in-game)"})]})]})]})}t(47);var D=t.p+"static/media/instagram-logo.0963b7a5.png",Z=t.p+"static/media/twitter-logo.57573394.png",L=t.p+"static/media/facebook-logo.5b4225fa.png",H=t.p+"static/media/email-logo.a75357d0.png",R=t.p+"static/media/wapp-logo.0f74af52.png";function Y(){return Object(a.jsx)("div",{className:"media",children:Object(a.jsxs)("ul",{className:"social-media",children:[Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://twitter.com/UBerasain",target:"_blank",rel:"noreferrer",className:"twitter",children:[Object(a.jsx)("span",{children:"Twitter: @UBerasain"}),Object(a.jsx)("img",{className:"twitter-logo",alt:"Twitter Logo",src:Z})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://www.facebook.com/Berasain.Uliii/",className:"facebook",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{children:"Facebook: Ulises Berasain"}),Object(a.jsx)("img",{className:"facebook-logo",alt:"Facebook Logo",src:L})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://www.instagram.com/uliuli77/",target:"_blank",rel:"noreferrer",className:"instagram",children:[Object(a.jsx)("span",{children:"Instagram: uliuli77"}),Object(a.jsx)("img",{className:"instagram-logo",alt:"Instagram Logo",src:D})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"mailto:uli_cuervo_79@hotmail.com",className:"email",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{children:"e-mail: uli_cuervo_79@hotmail.com"}),Object(a.jsx)("img",{className:"email-logo",alt:"e-mail Logo",src:H})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"https://github.com/Ulises-Berasain",className:"git-hub",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{children:"Git Hub: Ulises-Berasain"}),Object(a.jsx)("img",{className:"git-hub-logo",alt:"Git Hub Logo",src:"data:image/png;base64,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"})]})}),Object(a.jsx)("li",{children:Object(a.jsxs)("a",{href:"tel:2281535211",className:"telefono",target:"_blank",rel:"noreferrer",children:[Object(a.jsx)("span",{children:"Telefono: 2281-535211"}),Object(a.jsx)("img",{className:"wapp-logo",alt:"Whats App Logo",src:R})]})})]})})}t(48);function J(A){return Object(a.jsxs)("div",{className:"containter-next-prev",children:[Object(a.jsx)("button",{onClick:A.onClickPrev,className:"button-prev btn btn-danger",children:"Prev"}),Object(a.jsx)("button",{onClick:A.onClickNext,className:"button-next btn btn-danger",children:"Next"})]})}var M=function(){var A=b(),e=A.pokemons,t=A.setPage,n=function(){return t((function(A){return A-1}))},o=function(){return t((function(A){return A+1}))};return Object(a.jsx)(c.a.Fragment,{children:Object(a.jsxs)(g.a,{children:[Object(a.jsx)(N,{}),Object(a.jsx)(v,{}),Object(a.jsxs)(C.c,{children:[Object(a.jsxs)(C.a,{path:"/pokedex-react/",exact:!0,children:[Object(a.jsx)(J,{onClickPrev:n,onClickNext:o}),Object(a.jsx)("div",{className:"containter-pokemon-card",children:Object(a.jsx)(k,{pokemon:e})}),Object(a.jsx)(J,{onClickPrev:n,onClickNext:o})]}),Object(a.jsx)(C.a,{path:"/pokedex-react/pokemon/types",exact:!0,children:Object(a.jsx)(E,{})}),Object(a.jsx)(C.a,{path:"/pokedex-react/pokemon/info",exact:!0,children:Object(a.jsx)(q,{})}),Object(a.jsx)(C.a,{path:"/pokedex-react/pokemon/contact",exact:!0,children:Object(a.jsx)(Y,{})}),Object(a.jsx)(C.a,{path:"/pokedex-react/pokemon/:pokemon",exact:!0,children:Object(a.jsx)(V,{})})]})]})})},X=function(A){A&&A instanceof Function&&t.e(3).then(t.bind(null,50)).then((function(e){var t=e.getCLS,a=e.getFID,n=e.getFCP,c=e.getLCP,o=e.getTTFB;t(A),a(A),n(A),c(A),o(A)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(M,{})}),document.getElementById("root")),X()}]),[[49,1,2]]]);
//# sourceMappingURL=main.1dd94312.chunk.js.map