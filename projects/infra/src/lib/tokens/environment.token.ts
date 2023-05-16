import {InjectionToken} from '@angular/core';

export interface InfraEnvironment {
  isProd: boolean;
  api: string;
}

export const INFRA_ENVIRONMENT_TOKEN =
  new InjectionToken<InfraEnvironment>('InfraEnvironment');
