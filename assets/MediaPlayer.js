class MediaPlayer{
    constructor({
        element,
        plugins,
    }){
        this.element = element;
        this.plugins = plugins || [];
    }
    play(){
        this.element.play();
    }
    pause(){
        this.element.pause();
    }
    togglePlayPause(){
        this.element.paused? this.play() : this.pause();
    }
    mute(){
        this.element.muted = true;
    }
    unmute(){
        this.element.muted = false;
    }
    toggleMuteUnmute(){
        this.element.muted? this.unmute(): this.mute();
    }
    _initPlugins(){
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
}


export default MediaPlayer;