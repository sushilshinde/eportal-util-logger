var winston = require('winston'),
    CloudWatchTransport = require('winston-aws-cloudwatch');

const format = winston.format.combine(
    winston.format.colorize({ all: true }),
    winston.format.timestamp({ format: 'YYYY/MM/DD HH:mm:ss' }),
    winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
  )

const logger = new winston.createLogger({
  transports: [
    new (winston.transports.Console)({
      timestamp: true,
      colorize: true,
      format: format
    })
  ]
});

var config = {
  logGroupName: process.env.AWS_LOG_GROUP_NAME,
  logStreamName: process.env.AWS_LOG_GROUP_NAME,
  awsConfig: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
  },
  format : format
}

if (process.env.AWS_REGION) logger.add(CloudWatchTransport, config);

logger.level = process.env.LOG_LEVEL || "debug";

logger.stream = {
  write: function(message, encoding) {
    logger.info(message);
  }
};

module.exports = logger;