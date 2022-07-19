import { Injectable } from '@nestjs/common';
import { AzureService } from './azure.config.service';

@Injectable()
export class ConfigService {
  constructor(private azureService: AzureService) {}

  // Application
  configValues = {
    appName: this.azureService.getAzureConfigValue('appName'),
    appVersion: this.azureService.getAzureConfigValue('appVersion'),
    port: this.azureService.getAzureConfigValue('appid'),
  };

  getConfigConstantValue(keyName) {
    return this.configValues[keyName];
  }
}
