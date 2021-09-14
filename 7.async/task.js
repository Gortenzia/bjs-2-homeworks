class AlarmClock {

    constructor(alarmCollection = [], timerId) {
        alarmCollection = this.alarmCollection;
        timerId = this.timerId;
    }

    addClock(id, time, callback) {
        id = this.id;
        time = this.time;
        callback = this.callback;

        const timer = addClock(id, time, callback);

        for (id of this.timerId) {
            if (id === undefined) throw new Error('error text');

            try {
                addClock(id, time, callback);
            } catch (err) {
                if (id === id) console.error(err);
            }
        }
        return alarmCollection.push(timer)
    }
}

const clock = new AlarmClock();