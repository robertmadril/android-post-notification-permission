export interface AndroidPostNotificationPermissionPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
