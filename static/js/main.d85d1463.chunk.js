(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,function(e,t,a){e.exports={modal_overlay:"styles_modal_overlay__1vw-n",modal_display:"styles_modal_display__IMQNU",modal_window:"styles_modal_window__908os",modal_sub_layer:"styles_modal_sub_layer__sMrPZ",modal_title:"styles_modal_title__38Uws",modal_genres:"styles_modal_genres__3XSQz",modal_descr:"styles_modal_descr__1x7Hy",container_revenue_budget:"styles_container_revenue_budget__2xjvC",modal_budget:"styles_modal_budget__2SqeU",modal_container_btn:"styles_modal_container_btn__2T0Kk",modal_btn:"styles_modal_btn__1Jt49"}},,,,function(e,t,a){e.exports={btns_decsr:"styles_btns_decsr__Nespz",btn_title:"styles_btn_title__3wm4F",btn_gender:"styles_btn_gender__1_kPM",btns:"styles_btns__2WSww"}},,,,,function(e,t,a){e.exports={btn_sort:"styles_btn_sort__Nbz78"}},,,,function(e,t,a){e.exports={inp:"styles_inp__1Hfzj",label:"styles_label__12lna"}},function(e,t,a){e.exports={baner:"styles_baner__2_lJV",title:"styles_title__2SWxL",form:"styles_form__3e_sG"}},,function(e,t,a){e.exports={container_sort_btns:"styles_container_sort_btns__3dFwe",descr_cort:"styles_descr_cort__33RWY"}},function(e,t,a){e.exports={item_film:"styles_item_film__2ps0x",wrapper_title_release:"styles_wrapper_title_release__1uyPn"}},,,,,,function(e,t,a){e.exports={container_counter:"styles_container_counter__L7iyi"}},function(e,t,a){e.exports={top_bar:"styles_top_bar__z5jnB"}},function(e,t,a){e.exports={item_title:"styles_item_title__33g_M"}},function(e,t,a){e.exports={item_ganre:"styles_item_ganre__1PpTY"}},function(e,t,a){e.exports={release_date:"styles_release_date__27hik"}},function(e,t,a){e.exports={img_baner:"styles_img_baner__25AOU"}},function(e,t,a){e.exports={footer:"styles_footer__195NX"}},function(e,t,a){e.exports={modal_genres:"styles_modal_genres__jm7Yb"}},,function(e,t,a){e.exports={container_films:"styles_container_films__llcTT"}},,,function(e,t,a){e.exports=a(48)},,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),s=a.n(l),o=a(8),i=a(9),c=a(13),u=a(10),_=a(14),p=a(15),m=a.n(p),d=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(i.a)(t,[{key:"inputVal",value:function(){if(!this.film)return"";this.props.getInpVal(this.film.value)}},{key:"render",value:function(){var e=this;return this.inputVal(),r.a.createElement("div",{className:m.a.wrapper_inp},r.a.createElement("label",{htmlFor:"inpMain",className:m.a.label},"FIND YOUR MOVIE"),r.a.createElement("input",{className:m.a.inp,ref:function(t){e.film=t},id:"inpMain"}))}}]),t}(r.a.Component),y=a(6),f=a.n(y),g=function(e){return r.a.createElement("div",{style:{display:"inline-block",width:"500px",paddingTop:"30px"}},r.a.createElement("span",{className:f.a.btns_decsr},"SEARCH BY"),r.a.createElement("button",{onClick:e.searchByTitle,className:f.a.btns},"TITLE"),r.a.createElement("button",{onClick:e.searchByGanre,className:f.a.btns},"GENDER"))},E=function(e){return r.a.createElement("button",{onClick:e.getMovis,className:f.a.btns},"SEARCH")},h=a(16),v=a.n(h),b=function(e){return r.a.createElement("div",null,r.a.createElement("header",{className:v.a.baner},r.a.createElement("h1",{className:v.a.title},"netflixroulette"),r.a.createElement("form",{onSubmit:function(e){return e.preventDefault()},className:v.a.form},r.a.createElement(d,{getInpVal:e.getInputValue}),r.a.createElement(g,{searchByGanre:e.searchByGanre,searchByTitle:e.searchByTitle}),r.a.createElement(E,{getMovis:e.getMovisData}))))},B=a(25),N=a.n(B),O=function(e){return r.a.createElement("div",{className:N.a.container_counter},r.a.createElement("div",null,e.data," movies found"))},F=a(11),R=a.n(F),T=function(e){return r.a.createElement("button",{className:R.a.btn_sort,onClick:e.sortByRating},"rating")},x=function(e){return r.a.createElement("button",{className:R.a.btn_sort,onClick:e.sortByRelease},"release ")},M=a(18),j=a.n(M),w=function(e){return r.a.createElement("div",{className:j.a.container_sort_btns},r.a.createElement("span",{className:j.a.descr_cort},"Sort By"),r.a.createElement(T,{sortByRating:e.sortByRating}),r.a.createElement(x,{sortByRelease:e.sortByRelease}))},C=a(26),I=a.n(C),k=function(e){return r.a.createElement("div",{className:I.a.top_bar},r.a.createElement(O,{data:e.dataForCounter}),r.a.createElement(w,{sortByRating:e.sortByRating,sortByRelease:e.sortByRelease}))},S=a(36),A=a(27),V=a.n(A),G=function(e){return r.a.createElement("h3",{className:V.a.item_title},e.title)},L=a(28),D=a.n(L),H=function(e){return e.ganre.map(function(e,t){return r.a.createElement("div",{className:D.a.item_ganre,key:t},r.a.createElement("span",null,e))})},P=a(29),Y=a.n(P),U=function(e){var t=parseInt(e.date);return r.a.createElement("span",{className:Y.a.release_date},t)},z=a(30),J=a.n(z),W=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:J.a.img_baner,src:e.src,alt:e.alt,onClick:function(t){e.targetFilm(t.target.alt),e.toOpenModal()}}))},Q=a(19),X=a.n(Q),q=function(e){var t=Object(S.a)(e.dataFilms);return function(){if("release"===e.sortBy)t.sort(function(e,t){return+e.release_date.replace(/-/g,"")<+t.release_date.replace(/-/g,"")?1:-1});else{if("rating"!==e.sortBy)return null;t.sort(function(e,t){return+e.vote_count<+t.vote_count?1:-1})}}(),t.map(function(t){return r.a.createElement("div",{key:t.id,className:X.a.item_film},r.a.createElement(W,{src:t.poster_path,alt:t.title,targetFilm:e.getTargetFilm,toOpenModal:e.toOpenModal}),r.a.createElement("div",{className:X.a.wrapper_title_release},r.a.createElement(G,{title:t.title}),r.a.createElement(U,{date:t.release_date})),r.a.createElement("div",null,r.a.createElement(H,{ganre:t.genres})))})},K=a(31),Z=a.n(K),$=function(){return r.a.createElement("footer",{className:Z.a.footer},r.a.createElement("span",null,"netflixroulette"))},ee=a(2),te=a.n(ee),ae=a(32),ne=a.n(ae),re=function(e){return e.genres?e.genres.map(function(e,t){return r.a.createElement("h3",{key:t,className:ne.a.modal_genres}," ",e)}):null},le=function(e){var t=e.data,a=t.budget,n=t.title,l=t.genres,s=t.overview,o=t.poster_path,i=t.revenue;return r.a.createElement("div",{className:te.a.modal_overlay,onDoubleClick:function(){return e.toCloseModal()}},r.a.createElement("div",{className:te.a.modal_display},r.a.createElement("div",{className:te.a.modal_window},r.a.createElement("div",{style:{backgroundImage:"url(".concat(o,")"),backgroundSize:"cover",height:"400px"}},r.a.createElement("div",{className:te.a.modal_sub_layer},r.a.createElement("h2",{className:te.a.modal_title},n),r.a.createElement("div",null,l&&r.a.createElement(re,{genres:l})),r.a.createElement("p",{className:te.a.modal_descr},s),r.a.createElement("div",{className:te.a.container_revenue_budget},r.a.createElement("span",{className:te.a.modal_revenue},"Popularity ",i),r.a.createElement("span",{className:te.a.modal_budget},"Budget ",a)))))))},se=a(12),oe="SET_INPUT_VALUE",ie="FILMS_GET_DATA",ce="FILMS_FETCH_SUCCESS",ue="FIMLS_FETCH_ERROR",_e="TARGET_FILM",pe="OPEN",me="CLOSE",de=function(e){return{type:oe,payload:e}};var ye=function(){return{type:ie}},fe=function(){return{type:"SEARCH_BY_TITLE",payload:"title"}},ge=function(){return{type:"SEARCH_BY_GANRE",payload:"ganre"}},Ee=function(e){return{type:_e,payload:e}},he=function(){return{type:"RATING",payload:"rating"}},ve=function(){return{type:"RELEASE",payload:"release"}},be=function(){return{type:pe,payload:!0}},Be=function(){return{type:me,payload:!1}},Ne=a(34),Oe=a.n(Ne),Fe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(_.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;if(this.props.dataFilms&&""!==this.props.inputValue){var t=this.props.dataFilms.filter(function(t){return"title"===e.props.searchBy?t.title.includes(e.props.inputValue):"ganre"===e.props.searchBy?t.genres.includes(e.props.inputValue):t.title.includes(e.props.inputValue)}),a=this.props.dataFilms.filter(function(t){return t.title===e.props.targetFilm&&t})[0];return r.a.createElement("div",null,r.a.createElement(b,{getInputValue:this.props.getInputValue,getMovisData:this.props.getMovisDataFromAPI,searchByGanre:this.props.searchByGanre,searchByTitle:this.props.searchByTitle}),r.a.createElement("main",null,r.a.createElement(k,{sortByRating:this.props.sortByRating,sortByRelease:this.props.sortByRelease,dataForCounter:t.length}),t[0]&&r.a.createElement("div",{className:Oe.a.container_films},r.a.createElement(q,{dataFilms:t,getTargetFilm:this.props.getTargetFilm,sortBy:this.props.sortBy,toOpenModal:this.props.openModal}))),r.a.createElement($,null),this.props.isOpen&&a&&r.a.createElement(le,{data:a,toCloseModal:this.props.toCloseModal}))}return r.a.createElement("div",null,r.a.createElement(b,{getInputValue:this.props.getInputValue,getMovisData:this.props.getMovisDataFromAPI,searchByGanre:this.props.searchByGanre,searchByTitle:this.props.searchByTitle}),r.a.createElement($,null))}}]),t}(r.a.Component),Re=Object(se.b)(function(e){return{inputValue:e.inputValue.value,dataFilms:e.dataFilms.data,searchBy:e.searchFilmsBy.searchBy,targetFilm:e.targetFilm.target,sortBy:e.sortBy.sortBy,isOpen:e.openModal.isOpen}},function(e){return{getInputValue:function(t){return e(de(t))},getMovisDataFromAPI:function(){return e(ye())},searchByGanre:function(){return e(ge())},searchByTitle:function(){return e(fe())},getTargetFilm:function(t){return e(Ee(t))},sortByRating:function(){return e(he())},sortByRelease:function(){return e(ve())},openModal:function(){return e(be())},toCloseModal:function(){return e(Be())}}})(Fe),Te=a(4),xe=a(1),Me={value:""};var je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Me,t=arguments.length>1?arguments[1]:void 0;return t.type===oe?Object(xe.a)({},e,{value:t.payload}):e},we=[];var Ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:we,t=arguments.length>1?arguments[1]:void 0;return t.type===ce?t.payload:e},Ie="";var ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;return t.type===ue?Object(xe.a)({},e,{error:t.payload}):e},Se={searchBy:"title"},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SEARCH_BY_GANRE":case"SEARCH_BY_TITLE":return Object(xe.a)({},e,{searchBy:t.payload});default:return e}},Ve={target:"123"};var Ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;return t.type===_e?Object(xe.a)({},e,{target:t.payload}):e},Le={sortBy:null},De=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"RATING":case"RELEASE":return Object(xe.a)({},e,{sortBy:t.payload});default:return e}},He={isOpen:!1};var Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:He,t=arguments.length>1?arguments[1]:void 0;return t.type===pe?Object(xe.a)({},e,{isOpen:t.payload}):t.type===me?Object(xe.a)({},e,{isOpen:t.payload}):e},Ye=Object(Te.c)({inputValue:je,searchFilmsBy:Ae,dataFilms:Ce,error:ke,targetFilm:Ge,sortBy:De,openModal:Pe}),Ue=a(22),ze=a.n(Ue),Je=a(35),We=function(e){return{type:ce,payload:e}},Qe=function(e){return{type:ue,payload:e}},Xe=Object(Te.a)(function(e){return function(t){return function(){var a=Object(Je.a)(ze.a.mark(function a(n){var r,l;return ze.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:if(n.type!==ie){a.next=16;break}return a.prev=1,a.next=4,fetch("https://reactjs-cdp.herokuapp.com/movies");case 4:return r=a.sent,a.next=7,r.json();case 7:l=a.sent,e.dispatch(We(l)),a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),e.dispatch(Qe(a.t0));case 14:a.next=17;break;case 16:return a.abrupt("return",t(n));case 17:case"end":return a.stop()}},a,null,[[1,11]])}));return function(e){return a.apply(this,arguments)}}()}}),qe=Object(Te.d)(Ye,Xe);a(47);s.a.render(r.a.createElement(se.a,{store:qe},r.a.createElement(Re,null)),document.getElementById("root"))}],[[37,1,2]]]);
//# sourceMappingURL=main.d85d1463.chunk.js.map