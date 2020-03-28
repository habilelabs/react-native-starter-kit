class TimeUtils {
    static secondsToTime(secs) {
        let obj = {
            "m": 0,
            "s": 0
        };
        if (secs > 0) {
            let divisor_for_minutes = secs % (60 * 60);
            let minutes = Math.floor(divisor_for_minutes / 60);

            let divisor_for_seconds = divisor_for_minutes % 60;
            let seconds = Math.ceil(divisor_for_seconds);
            obj = {
                "m": minutes,
                "s": seconds
            };
        }
        return obj;
    }
}

export default TimeUtils;