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
            "title": "Rise",
            "description": "Country-rock band FOOLSHINE’s single “Rise”",
            "coverImage": "",
            "options":{
              "imageroot" : "./static/img",
              "soundfileroot" : "./static/playlist"
            },
            "list": [
              {
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
              },
              
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
          "title": "Rise",
          "description": "Country-rock band FOOLSHINE’s single “Rise”",
          "coverImage": "",
          "options":{
            "imageroot" : "./static/img",
            "soundfileroot" : "./static/playlist"
          },
          "list": [
            {
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
            },
            
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