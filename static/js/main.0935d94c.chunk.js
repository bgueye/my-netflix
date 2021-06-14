(this["webpackJsonpmy-netflix"]=this["webpackJsonpmy-netflix"]||[]).push([[0],{22:function(e,t,n){},23:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var i=n(2),c=n.n(i),a=n(17),s=n.n(a),r=(n(22),n(4)),o=n(5),l=n(7),u=n(6),d=(n(23),n(0)),h=function(e){var t=e.movie;return Object(d.jsxs)("div",{className:"flex my-2 px-2 max-w-sm w-full lg:max-w-full lg:flex",onClick:function(){e.callback(t)},children:[Object(d.jsx)("img",{width:"75px",src:"".concat("https://image.tmdb.org/t/p/w500").concat(t.poster_path)}),Object(d.jsxs)("div",{class:"border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between w-card",children:[Object(d.jsx)("h2",{children:t.title}),Object(d.jsxs)("p",{children:["Votes: ",t.vote_count]}),Object(d.jsxs)("p",{children:["Moyenne: ",t.vote_average]})]})]})},b=function(e){e.movieList;return Object(d.jsxs)("div",{className:"w-1/3 w-full ml-2  hauteur",children:[Object(d.jsx)("div",{className:"bg-gray-200",children:Object(d.jsx)("h1",{children:"VIDEOS POPULAIRES"})}),Object(d.jsx)("div",{className:"overscroll-x-none overflow-auto hauteur",children:Object(d.jsx)("ul",{children:e.movieList.map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(h,{movie:e,callback:t})})}))})})]});function t(t){e.callback(t)}},v=function(e){var t=e.videoId;return Object(d.jsx)("iframe",{className:"flex",width:"640",height:"400",src:"".concat("https://www.youtube.com/embed/").concat(t)})},j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={placeholder:"Recherchez un film",inputValue:""},i}return Object(o.a)(n,[{key:"handleChange",value:function(e){this.setState({inputValue:e.target.value})}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"bg-gray-200 mb-4 py-4",children:[Object(d.jsx)("input",{className:"rounded-2xl px-2",type:"text",placeholder:this.state.placeholder,onChange:this.handleChange.bind(this)}),Object(d.jsx)("button",{className:"bg-gray-400 hover:bg-gray-700 text-white hover:font-bold px-4 hover:rounded-full rounded-full",onClick:this.handleClick.bind(this),children:" Search "})]})}},{key:"handleClick",value:function(){this.props.callback(this.state.inputValue)}}]),n}(i.Component),f=n(3),m=n.n(f),p=function(e){return Object(d.jsxs)("div",{className:"bg-gray-200",children:[Object(d.jsx)("h1",{className:"text-4xl",children:e.title}),Object(d.jsx)("p",{children:e.description})]})},g="api_key=b1bb009f89a909c0ae0b65bc17104e0e",x="https://api.themoviedb.org/3/",O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={movieList:{},currentMovie:{}},i}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.initMovies()}},{key:"initMovies",value:function(){m.a.get("".concat(x).concat("discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images","&").concat(g)).then(function(e){this.setState({movieList:e.data.results.slice(1,16),currentMovie:e.data.results[0]},(function(){this.applyCurrentVideo()}))}.bind(this))}},{key:"applyCurrentVideo",value:function(){m.a.get("".concat(x,"movie/").concat(this.state.currentMovie.id,"?").concat(g,"&append_to_response=videos&include_adult=false")).then(function(e){if(e.data.videos&&e.data.videos.results[0]){var t=e.data.videos.results[0].key,n=this.state.currentMovie;n.videoId=t,this.setState({currentMovie:n})}}.bind(this))}},{key:"recevoirCallBack",value:function(e){var t=this;this.setState({currentMovie:e},(function(){t.applyCurrentVideo(),t.setRecommendation()}))}},{key:"setRecommendation",value:function(){m.a.get("".concat(x,"movie/").concat(this.state.currentMovie.id,"/recommendations?").concat(g,"&language=fr")).then(function(e){this.setState({movieList:e.data.results.slice(0,15)})}.bind(this))}},{key:"onClickSearch",value:function(e){m.a.get("".concat(x).concat("search/movie?language=fr&include_adult=false","&").concat(g,"&query=").concat(e)).then(function(e){var t=this;console.log("----Movie search----",e),e.data&&e.data.results[0]&&e.data.results[0].id!==this.state.currentMovie.id&&this.setState({currentMovie:e.data.results[0]},(function(){t.applyCurrentVideo(),t.setRecommendation()}))}.bind(this))}},{key:"render",value:function(){var e=this;return Object(d.jsxs)("div",{className:"App container mx-auto justify-center ",children:[Object(d.jsx)(j,{callback:this.onClickSearch.bind(this)}),Object(d.jsxs)("div",{className:"flex",children:[Object(d.jsxs)("div",{className:"w-2/3",children:[Object(d.jsx)(v,{videoId:this.state.currentMovie.videoId}),Object(d.jsx)(p,{title:this.state.currentMovie.original_title,description:this.state.currentMovie.overview})]}),function(){if(e.state.movieList.length>=15)return Object(d.jsx)(b,{movieList:e.state.movieList,callback:e.recevoirCallBack.bind(e)})}()]})]})}}]),n}(c.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then((function(t){var n=t.getCLS,i=t.getFID,c=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),i(e),c(e),a(e),s(e)}))};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(O,{})}),document.getElementById("root")),y()}},[[43,1,2]]]);
//# sourceMappingURL=main.0935d94c.chunk.js.map