import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { Notification } from '../entitites/notification';
import { Content } from '../entitites/content';
import { CountRecipientNotifications } from './count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count recipients Notification', () => {
  it('should be able to count recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1-id' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2-id' }),
    );

    const { count } = await countRecipientNotification.execute({
      recipientId: 'recipient-1-id',
    });

    expect(count).toEqual(2);
  });
});
