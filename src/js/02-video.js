import Vimeo from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const vimeoPlayer = new Vimeo(iframe);

const updateLocalStorageThrottled = throttle(seconds => {
  localStorage.setItem('videoplayer-current-time', seconds.toString());
}, 1000);

const savedTime = localStorage.getItem('videoplayer-current-time');
if (savedTime) {
  vimeoPlayer
    .setCurrentTime(parseFloat(savedTime))
    .then(() => {
      vimeoPlayer.play();
    })
    .catch(error => {
      console.error('Could not set the player time.', error);
    });
}

vimeoPlayer.on('timeupdate', ({ seconds }) => {
  updateLocalStorageThrottled(seconds);
});
