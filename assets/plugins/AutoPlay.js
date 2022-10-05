class AutoPlay{
    run(player){
        //Video has to be muted in order for the engine to allow autoplay.
        player.mute();
        player.play();
    }

}

export default AutoPlay;