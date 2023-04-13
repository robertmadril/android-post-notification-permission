import { registerPlugin } from '@capacitor/core';

import type { AndroidPostNotificationPermissionPlugin } from './definitions';

const AndroidPostNotificationPermission = registerPlugin<AndroidPostNotificationPermissionPlugin>('AndroidPostNotificationPermission', {});

export * from './definitions';
export { AndroidPostNotificationPermission };
