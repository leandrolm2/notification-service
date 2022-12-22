import { Content } from '@app/entitites/content';
import { Notification, NotificationProps } from '@app/entitites/notification';

type override = Partial<NotificationProps>;

export function makeNotification(override: override = {}) {
  return new Notification({
    category: 'social',
    content: new Content('new friend request'),
    recipientId: 'recipient-2-id',
    ...override,
  });
}
