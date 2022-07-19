import { AzureService } from './azure.config.service';
export declare class ConfigService {
    private azureService;
    constructor(azureService: AzureService);
    configValues: {
        appName: Promise<string>;
        appVersion: Promise<string>;
        port: Promise<string>;
    };
    getConfigConstantValue(keyName: any): any;
}
