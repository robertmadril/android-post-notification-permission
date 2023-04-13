import { registerPlugin } from '@capacitor/core';

import type { AndroidPostNotificationPermissionPlugin } from './definitions';

const AndroidPostNotificationPermission = registerPlugin<AndroidPostNotificationPermissionPlugin>('AndroidPostNotificationPermission', {
  web: () => import('./web').then(m => new m.AndroidPostNotificationPermissionWeb()),
});

export * from './definitions';
export { AndroidPostNotificationPermission };
