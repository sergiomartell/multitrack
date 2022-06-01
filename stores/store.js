import Vue from 'vue';
import Vuex from 'vuex';
import * as mtypes  from './mutation-types.js';
import { toViewModel } from './helpers/dataviewhelper.js'
import dataService from '@/services/dataService.js'

Vue.use(Vuex);

var state = {
    playList:[],
    currentList:{},
    changeTrack: false,
    startStopTrack: false,
    isPlaying: false,
    loading:true
}

var mutations = {
    [mtypes.FETCH_PLAYLIST] (state){
        const data = {
            "title": "Andie Case - I Think I'm God",
            "description": "YouTube superstar Andie Case returns with her unapologetic new single “I Think I`m God”",
            "coverImage": "",
            "options":{
              "imageroot" : "./static/img",
              "soundfileroot" : "./static/playlist"
            },
            "list": [
              {
                "type": "mp3",
                "id": "track1",
                "title": "I Think I'm God",
                "description": "",
                "duration": "2614187",
                "image": "/case1.jpg",
                "recorddate": "2014/09/05 18:34:56 +0000",
                "soundfile": {
                    "mp3": "/1.mp3"
                  }
              },
              {
                "type": "mp3",
                "id": "track2",
                "title": "I Think I'm God (Radio Edit)",
                "description": "YouTube superstar Andie Case returns with her unapologetic new single “I Think I`m God”",
                "duration": "3055359",
                "image": "/case2.jpeg",
                "recorddate": "2014/09/12 18:20:08 +0000",
                "soundfile": 
                  {
                    "mp3": "/2.mp3"
                  }
                
              }
            ]
          };
          var viewData = toViewModel(data);
          var id = 0;
          state.playList = viewData;
          state.currentList = viewData.list[id];
          state.loading = false;  
    },
    [mtypes.GET_CURRENT_LIST](state, id){
        state.currentList = state.playList.list[id];
    },
    [mtypes.PLAYER_STARTSTOP_TRACK](state, status){
        state.startStopTrack = status
    }
}

var actions = {
    [mtypes.FETCH_PLAYLIST](context){
        var data = {
            "title": "Andie Case - I Think I'm God",
            "description": "YouTube superstar Andie Case returns with her unapologetic new single “I Think I`m God”",
            "coverImage": "",
            "options":{
              "imageroot" : "./static/img",
              "soundfileroot" : "./static/playlist"
            },
            "list": [
              {
                "type": "mp3",
                "id": "track1",
                "title": "I Think I'm God",
                "description": "",
                "duration": "2614187",
                "image": "/case1.jpg",
                "recorddate": "2014/09/05 18:34:56 +0000",
                "soundfile": {
                    "mp3": "/1.mp3"
                  }
              },
              {
                "type": "mp3",
                "id": "track2",
                "title": "I Think I'm God (Radio Edit)",
                "description": "YouTube superstar Andie Case returns with her unapologetic new single “I Think I`m God”",
                "duration": "3055359",
                "image": "/case2.jpeg",
                "recorddate": "2014/09/12 18:20:08 +0000",
                "soundfile": 
                  {
                    "mp3": "/2.mp3"
                  }
                
              }
            ]
          }
        context.commit(mtypes.FETCH_PLAYLIST, {
            id: 0,
            data: data
        });
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
});