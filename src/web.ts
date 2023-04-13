import { WebPlugin } from '@capacitor/core';

import type { AndroidPostNotificationPermissionPlugin } from './definitions';

export class AndroidPostNotificationPermissionWeb extends WebPlugin implements AndroidPostNotificationPermissionPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}
