/**
 * 📝 LOGGER SETUP (Updated)
 *
 * 1. `getLogFileName()` returns a daily log file based on IST date (e.g. 2025-11-01.log).
 * 2. `createTransports()` sets up separate files for info and error logs, plus colored console output.
 * 3. `scheduleLogSwitch()` rotates logs every day at 12 AM IST automatically.
 * 4. The format includes IST timestamps and uniform API-style log entries.
 * 5. Directories used:
 *      /logs/info-logs
 *      /logs/error-logs
 */

import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";
import moment from "moment-timezone";

const { combine, printf, colorize } = format;

// Generate IST timestamp
const timestampIST = format((info) => {
  info.timestamp = moment().tz("Asia/Kolkata").format("YYYY-MM-DD HH:mm:ss");
  return info;
});

// Define daily filename (e.g., 2025-11-01.log)
function getLogFileName() {
  const todayIST = moment().tz("Asia/Kolkata").format("YYYY-MM-DD");
  return `${todayIST}.log`;
}

// Create folders if not exist
const logDir = path.join(process.cwd(), "logs");
const infoDir = path.join(logDir, "info-logs");
const errorDir = path.join(logDir, "error-logs");

[logDir, infoDir, errorDir].forEach((dir) => {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
});

// Define custom format
const logFormat = printf(({ level, message, timestamp }) => {
  return `[IST ${timestamp}] [${level.toUpperCase()}]: ${message}`;
});

// Create transports
function createTransports() {
  const filename = getLogFileName();

  return [
    new transports.Console({
      format: combine(colorize(), logFormat),
      level: "info",
    }),
    new transports.File({
      filename: path.join(infoDir, filename),
      level: "info",
      format: combine(logFormat),
    }),
    new transports.File({
      filename: path.join(errorDir, filename),
      level: "error",
      format: combine(logFormat),
    }),
  ];
}

// Schedule daily rotation at midnight IST
function scheduleLogSwitch(logger) {
  const nowIST = moment().tz("Asia/Kolkata");
  const nextMidnight = nowIST.clone().add(1, "day").startOf("day");
  const msUntilMidnight = nextMidnight.diff(nowIST);

  setTimeout(() => {
    logger.clear();
    createTransports().forEach((t) => logger.add(t));
    scheduleLogSwitch(logger);
  }, msUntilMidnight);
}

// Create main logger
const logger = createLogger({
  level: "info",
  format: combine(timestampIST(), logFormat),
  transports: createTransports(),
});

scheduleLogSwitch(logger);

export default logger;
