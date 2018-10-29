import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable({
  providedIn: 'root'
})
export class EnvConfigurationService {
 public config: Config;
  constructor() { }

  public loadConfig() {
    return new Promise((resolve, reject) => {
        const envFile = '/env.json';
        this.readJsonFile(envFile).
            then((envData) => {
                const configFile = `assets/config.${envData.env}.json`;
                this.readJsonFile(configFile).
                    then((configsettings) => {
                        this.config = configsettings;
                        resolve(this.config);
                    });
            });
    });
}

// reads json file and returns the json object promise
public readJsonFile(jsonUrl: string): any {
    return new Promise((resolve, reject) => {
        let retObject: any;
        const xhr = new XMLHttpRequest();
        xhr.overrideMimeType('application/json');
        xhr.open('GET', jsonUrl, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    retObject = JSON.parse(xhr.responseText);
                    resolve(retObject);
                } else {
                    reject(`Could not load file '${jsonUrl}': ${xhr.status}`);
                }
            }
        };
        xhr.send(null);
    });
}
}



export function onAppInit(envConfigService: EnvConfigurationService) {
    return () => envConfigService.loadConfig();
}
