// import { existsSync, mkdirSync } from 'fs';
import winston from 'winston'
// import { path } from '@/helpers/fixed_path';
// import * as path from 'path';
import { pad } from 'lodash'

export class FileLogger {
  logger!: winston.Logger | null;
  currentLogDate!: Date;
  app: Electron.App

  constructor (app: Electron.App) {
    this.app = app
    this.currentLogDate = new Date()
    this.openLog()
  }

  // get logFileFolder() : string {
  //   // console.log(app)
  //   const p = path.join(this.app.getPath('userData'), 'logs');
  //   if (!this.checkExists(p)) {
  //     mkdirSync(p);
  //   }
  //   return p;
  // }

  openLog () : void {
    // eslint-disable-next-line no-unused-vars
    const logformat = winston.format.printf(({ level, message, timestamp }) => {
      return `${timestamp} [${pad(level, 7)}] ${message}`;
    })

    this.logger = winston.createLogger({
      level: 'info',
      format: winston.format.combine(
        winston.format.timestamp({
          format: 'YYYY-MM-DD HH:mm:ss'
        }),
        logformat
      ),
      transports: [
        new winston.transports.File({ filename: 'testlog.log' })
      ]
    })
  }

  closeLog () : void {
    // if (this.logger == null) {
    //   return;
    // }
    // this.logger.close();
    // this.logger = null;
  }

  log (msg: string, level : string) : void {
    if (this.logger == null) {
      return
    }
    this.logger.log(level, msg)
  }

  // checkExists(filePath : string) : boolean {
  //   try {
  //     if (existsSync(filePath)) {
  //       return true;
  //     }
  //   } catch(err) {
  //     console.error(err)
  //     return false;
  //   }
  //   return false;
  // }
}
