import { Content } from '@app/entitites/content';
import { Notification } from '@app/entitites/notification';
import { Notification as RawNotification } from '@prisma/client';

export class PrismaNotificationsMapper {
  static toPrisma(notification: Notification) {
    return {
      id: notification.id,
      category: notification.category,
      content: notification.content.value,
      recipientId: notification.recipientId,
      createdAt: notification.createdAt,
      readAt: notification.readAt,
    };
  }

  static toDomain(raw: RawNotification): Notification {
    return new Notification(
      {
        category: raw.category,
        content: new Content(raw.content),
        recipientId: raw.recipientId,
        readAt: raw.readAt,
        cancelAt: raw.cancelAt,
        createdAt: raw.createdAt,
      },
      raw.id,
    );
  }
}
