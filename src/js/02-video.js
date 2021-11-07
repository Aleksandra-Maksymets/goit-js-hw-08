import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');
const LOKALSTORAGE_KEY = 'videoplayer-current-time';

const player = new Vimeo.Player(iframe);

function getPlayingTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem(LOKALSTORAGE_KEY, seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', throttle(getPlayingTime, 1000));

const savedTime = localStorage.getItem(LOKALSTORAGE_KEY);
player.setCurrentTime(savedTime);
