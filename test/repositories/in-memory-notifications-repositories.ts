import { NotificationsRepository } from 'src/app/repositories/notification-repository';
import { Notification } from 'src/app/entitites/notification';
export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async create(notification: Notification) {
    this.notifications.push(notification);
  }
}
