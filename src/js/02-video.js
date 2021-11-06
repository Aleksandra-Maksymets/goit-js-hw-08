import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player');

const player = new Vimeo.Player(iframe);

function getPlayingTime() {
  player
    .getCurrentTime()
    .then(function (seconds) {
      localStorage.setItem('videoplayer-current-time', seconds);
    })
    .catch(function (error) {
      console.log(error);
    });
}

player.on('timeupdate', throttle(getPlayingTime, 1000));

const savedTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(savedTime);
