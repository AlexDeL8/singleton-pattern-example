import homeSatellite from "./satelliteDish.js";

function televisionOne(startingChannel) {
    this.startingChannel = startingChannel;
    this.currentChannel = 0;

    this.turnOn = () => {
        this.currentChannel = startingChannel;
        console.log(`TV #1 turned on to Channel: ${startingChannel}\n`);
    };

    this.changeChannel = (channelToChangeTo) => {
        this.currentChannel = homeSatellite.getChannel(channelToChangeTo);
        console.log(
            `TV #1 recieved the channel from the satellite and changed currentChannel to: ${this.currentChannel}\n`
        );
    };

    return this;
}

export default televisionOne;
