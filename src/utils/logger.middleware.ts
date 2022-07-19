import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { getLogger } from './logging';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private logger = getLogger('HTTP');

  use(request: Request, response: Response, next: NextFunction): void {
    const { ip, method, originalUrl } = request;
    const userAgent = request.get('user-agent') || '';

    response.on('finish', () => {
      const { statusCode } = response;
      const contentLength = response.get('content-length');

      this.logger.info(
        `${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
      );

      if (method !== 'GET') {
        //this.logger.error(`error---> ${JSON.stringify(request.body)}`);
        this.logger.debug(
          `debug:---> ${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        );
        this.logger.info(
          `log:---> ${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        );
        this.logger.verbose(
          `verbose:---> ${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        );
        this.logger.warn(
          `warn:---> ${method} ${originalUrl} ${statusCode} ${contentLength} - ${userAgent} ${ip}`,
        );
      }
    });

    next();
  }
}
