import logger from 'pino';
import dayjs from 'dayjs';

const log = logger({
    base: {
        pid: false
    },
    transport: {
        pipeline: [{
            target: "pino-pretty"
        }]
    },
    timestamp: () => `,"time":"${dayjs().format()}"`,
});

export default log;