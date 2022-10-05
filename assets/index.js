import MediaPlayer from './MediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js'
const video = document.querySelector("video");
const buttonPlayPause = document.querySelector(".playPause");
const buttonMuteUnmute = document.querySelector(".muteUnmute")
const player = new MediaPlayer({
    element: video,
    plugins: [new AutoPlay()],
});
player._initPlugins();
buttonPlayPause.onclick = () => player.togglePlayPause();
buttonMuteUnmute.onclick = () => player.toggleMuteUnmute();
