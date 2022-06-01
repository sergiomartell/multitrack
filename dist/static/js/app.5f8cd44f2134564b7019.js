webpackJsonp([0],[
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTheme", function() { return loadTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadStyle", function() { return loadStyle; });
const loadTheme = function (fileName) {
    return customRequire(`views/${fileName}`);
};

const loadStyle = function () {
    return customRequire("css/style.scss");
};

const customRequire = function (path) {
    return __webpack_require__(29)(`./${appOptions.theme}/${path}`);
};



/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const FETCH_PLAYLIST = 'FETCH_PLAYLIST';
/* harmony export (immutable) */ __webpack_exports__["a"] = FETCH_PLAYLIST;

const GET_CURRENT_LIST = 'GET_CURRENT_LIST';
/* harmony export (immutable) */ __webpack_exports__["b"] = GET_CURRENT_LIST;

const PLAYER_STARTSTOP_TRACK = 'PLAYER_STARTSTOP_TRACK';
/* harmony export (immutable) */ __webpack_exports__["c"] = PLAYER_STARTSTOP_TRACK;


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AudioPlayer__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_AudioPlayer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_AudioPlayer__);




__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

var router = new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  mode: 'history',
  routes: [{
    path: '/:id?',
    name: 'AudioPlayer',
    component: __WEBPACK_IMPORTED_MODULE_2__components_AudioPlayer___default.a
  }]
});

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutation_types_js__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_dataviewhelper_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_dataService_js__ = __webpack_require__(13);






__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

var state = {
    playList: [],
    currentList: {},
    changeTrack: false,
    startStopTrack: false,
    isPlaying: false,
    loading: true
};

var mutations = {
    [__WEBPACK_IMPORTED_MODULE_2__mutation_types_js__["a" /* FETCH_PLAYLIST */]](state) {
        const data = {
            "title": "Rise",
            "description": "Country-rock band FOOLSHINE’s single “Rise”",
            "coverImage": "",
            "options": {
                "imageroot": "./static/img",
                "soundfileroot": "./static/playlist"
            },
            "list": [{
                "type": "mp3",
                "id": "track1",
                "title": "Rise",
                "description": "",
                "duration": "2614187",
                "image": "/album.png",
                "recorddate": "2014/09/05 18:34:56 +0000",
                "soundfile": {
                    "mp3": "/1.mp3"
                }
            }]
        };
        var viewData = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_dataviewhelper_js__["a" /* toViewModel */])(data);
        var id = 0;
        state.playList = viewData;
        state.currentList = viewData.list[id];
        state.loading = false;
    },
    [__WEBPACK_IMPORTED_MODULE_2__mutation_types_js__["b" /* GET_CURRENT_LIST */]](state, id) {
        state.currentList = state.playList.list[id];
    },
    [__WEBPACK_IMPORTED_MODULE_2__mutation_types_js__["c" /* PLAYER_STARTSTOP_TRACK */]](state, status) {
        state.startStopTrack = status;
    }
};

var actions = {
    [__WEBPACK_IMPORTED_MODULE_2__mutation_types_js__["a" /* FETCH_PLAYLIST */]](context) {
        var data = {
            "title": "Rise",
            "description": "Country-rock band FOOLSHINE’s single “Rise”",
            "coverImage": "",
            "options": {
                "imageroot": "./static/img",
                "soundfileroot": "./static/playlist"
            },
            "list": [{
                "type": "mp3",
                "id": "track1",
                "title": "Rise",
                "description": "",
                "duration": "2614187",
                "image": "/album.png",
                "recorddate": "2014/09/05 18:34:56 +0000",
                "soundfile": {
                    "mp3": "/1.mp3"
                }
            }]
        };
        context.commit(__WEBPACK_IMPORTED_MODULE_2__mutation_types_js__["a" /* FETCH_PLAYLIST */], {
            id: 0,
            data: data
        });
    }
};

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state,
    mutations,
    actions
}));

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(25),
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

__webpack_require__(0).loadStyle();

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'app'
});

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PlayList__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_PlayList___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_PlayList__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Player__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Player___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_Player__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores_mutation_types__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_themeService__ = __webpack_require__(0);






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AudioPlayer',
  template: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__services_themeService__["loadTheme"])("AudioPlayer.html"),
  components: {
    PlayList: __WEBPACK_IMPORTED_MODULE_0__components_PlayList___default.a,
    Player: __WEBPACK_IMPORTED_MODULE_1__components_Player___default.a
  },
  created() {
    var id = this.$route.params.id || "0";
    this.$store.dispatch(__WEBPACK_IMPORTED_MODULE_2__stores_mutation_types__["a" /* FETCH_PLAYLIST */], [appOptions.playListSourceUrl, id]);
  },
  computed: {
    playList() {
      var plist = this.$store.state.playList;
      document.title = plist.title;
      return plist;
    },
    currentList() {
      return this.$store.state.currentList;
    },
    loading() {
      return this.$store.state.loading;
    }
  }
});

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_themeService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_mutation_types__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
    template: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_themeService__["loadTheme"])("PlayList.html"),
    name: "PlayList",
    props: ["playList"],
    methods: {
        playerControl(index) {
            //routing TAQLA
            if (this.$store.state.currentList.id == index) {
                this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__stores_mutation_types__["c" /* PLAYER_STARTSTOP_TRACK */], !this.$store.state.startStopTrack);
            } else {
                this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__stores_mutation_types__["c" /* PLAYER_STARTSTOP_TRACK */], true);
                this.$store.commit(__WEBPACK_IMPORTED_MODULE_1__stores_mutation_types__["b" /* GET_CURRENT_LIST */], this.$route.params.id);
            }
        }
    },
    computed: {
        isPlaying() {
            return this.$store.state.isPlaying;
        }
    }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_themeService__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stores_mutation_types__ = __webpack_require__(1);




/* harmony default export */ __webpack_exports__["default"] = ({
    name: "Player",
    template: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__services_themeService__["loadTheme"])("Player.html"),
    props: {
        currentList: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            id: parseInt(this.$route.params.id),
            isPlaying: false
        };
    },
    computed: {
        getModalClassList() {
            return document.querySelector(".modal-wrapper").classList;
        },
        getAudioPlayer() {
            return this.$refs.player;
        },
        startStopTrack() {
            return this.$store.state.startStopTrack;
        }
    },
    watch: {
        currentList() {
            this.loadTrack();
        },
        startStopTrack() {
            this.playerChange();
        },
        isPlaying() {
            this.$store.state.isPlaying = this.isPlaying;
        }
    },
    methods: {
        playerChange() {
            const player = this.getAudioPlayer;

            const isPlaying = player.currentTime > 0 && !player.paused && !player.ended && player.readyState > 2;

            if (isPlaying) {
                player.pause();
                this.isPlaying = false;
            } else {
                player.play();
                this.isPlaying = true;
            }
        },
        /*  openModal(){
             this.getModalClassList.add("open");
         },
         closeModal(){
             this.getModalClassList.remove("open");
         }, */
        loadTrack() {
            const player = this.getAudioPlayer;
            player.load();
            this.playerChange();
        }
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__stores_store_js__ = __webpack_require__(6);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.





__WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */].config.productionTip = false;
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["a" /* default */]({
  el: '#app',
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App />',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },
  store: __WEBPACK_IMPORTED_MODULE_3__stores_store_js__["a" /* default */]
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony default export */ var _unused_webpack_default_export = ({
    fetchData(dataUrl) {
        return fetch(dataUrl);
    }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toViewModel; });
const toViewModel = function (data) {
    var self = this;
    var options = data.options;
    var list = data.list;

    list.forEach(function (item, index) {
        item.image = options.imageroot + item.image;

        if (item.type == "mp3") {
            item.soundfile.mp3 = options.soundfileroot + item.soundfile.mp3;
        } else if (item.type == "youtube") {
            item.videoEmbedUrl = "http://www.youtube.com/embed/" + item.videoId;
        }
        item.description = linkify(item.description);
        item.detailsUrl = "/" + index;
        item.recorddateformatted = formatDateString(item.recorddate);
    });

    return data;
};

const formatDateString = function (dateTimeString) {
    var date = new Date(dateTimeString).toISOString().slice(0, 10);
    var dateParse = date.split("-");
    return `${dateParse[2]}-${dateParse[1]}-${dateParse[0]}`;
};

const linkify = function (inputText) {
    //http://stackoverflow.com/questions/37684/how-to-replace-plain-urls-with-links

    var replacedText, replacePattern1, replacePattern2, replacePattern3;

    //URLs starting with http://, https://, or ftp://
    replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
    replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank" rel="noopener">$1</a>');

    //URLs starting with "www." (without // before it, or it'd re-link the ones done above).
    replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
    replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank" rel="noopener">$2</a>');

    //Change email addresses to mailto:: links.
    replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
    replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');

    return replacedText;
};



/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "<div class=\"audio-player-container\">\n\n  <div class=\"spinner\" v-if=\"loading\">\n    <div class=\"rect1\"></div>\n    <div class=\"rect2\"></div>\n    <div class=\"rect3\"></div>\n    <div class=\"rect4\"></div>\n    <div class=\"rect5\"></div>\n  </div>\n\n  <template v-else>\n    <!-- <h1 class=\"main-title\">{{playList.title}}</h1> -->\n    <player :currentList=\"currentList\"></player>\n    <play-list :playList=\"playList\"></play-list>\n  </template>\n</div>";

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = "<div class=\"list\">\n\n    <ul class=\"list-items\" v-for=\"(item,index) in playList.list\" v-bind:key=\"item\">\n      <li>\n        <router-link :to=\"{path : item.detailsUrl}\" @click.native=\"playerControl(item.id)\">\n            <span class=\"number\" v-bind:class=\"{ playing: isPlaying }\"><em>{{ index+1 }}</em></span> <span class=\"title\">{{item.title}}</span>\n        </router-link>\n      </li>\n    </ul>\n</div>";

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = "<div class=\"player\">\n  <div class=\"custom-audio-player\">\n    <a href=\"https://www.bandnfts.com/\" class=\"band\" target=\"_parent\" > <img src=\"/static/img/bandNFTs.png\" alt=\"\"> </a>\n   \n    \n    <audio controls preload=\"none\" controlsList=\"nodownload\" ref=\"player\">\n      <source v-if=\"currentList.soundfile\" :src=\"currentList.soundfile.mp3\" type=\"audio/mp3\"> Your browser does not support the audio element.\n    </audio>\n  </div>\n\n  <!-- <p class=\"title\">{{currentList.title}}</p> -->\n  <div class=\"cover-avatar\">\n    <img :src=\"currentList.image\" :alt=\"currentList.title\">\n  </div>\n  \n  <div class=\"cover-image\" :style=\"{ backgroundImage: 'url('+currentList.image+')' }\"></div>\n \n\n</div>";

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(9),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(10),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(11),
  /* template */
  null,
  /* styles */
  null,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)

module.exports = Component.exports


/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    attrs: {
      "id": "app"
    }
  }, [_c('main', {
    staticClass: "container"
  }, [_c('router-view')], 1)])
},staticRenderFns: []}

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./modern/css/style.scss": 15,
	"./modern/views/AudioPlayer.html": 16,
	"./modern/views/PlayList.html": 17,
	"./modern/views/Player.html": 18
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ })
],[12]);
//# sourceMappingURL=app.5f8cd44f2134564b7019.js.map