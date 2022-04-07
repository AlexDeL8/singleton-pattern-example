class SatelliteDish {
    //Singleton Constructor
    constructor() {
        //if the instance property of the class is null/there is no instance, then create one
        if (SatelliteDish.instance == null) {
            SatelliteDish.instance = this;
            this.signalCount = 0;
        }
        /*
         * return the newly created instance
         * OR
         * if something else tries to access the instance and it's already created, return that instance
         * (i.e. skipping the if())
         */
        return SatelliteDish.instance;
    }

    getChannel(channel) {
        this.signalCount++;
        console.log(
            `Signal #${this.signalCount} sent out for: Channel ${channel}`
        );
        return channel;
    }
}

const homeSatellite = new SatelliteDish();
export default homeSatellite;
