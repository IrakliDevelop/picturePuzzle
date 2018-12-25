function Timer(){
    let startTime, endTime, running, duration = 0;

    this.start = function(){
        running = true;

        startTime = new Date();
    }

    this.getDuration = function(){
        this.stop();
        console.log(this.duration);
        this.start();
    }

    this.stop = function(){
        running = false;

        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000;
        duration += seconds;
    }

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}