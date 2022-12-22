import { InMemoryNotificationsRepository } from '../../../test/repositories/in-memory-notifications-repositories';
import { makeNotification } from '@test/factories/notification-factory';
import { GetRecipientNotifications } from './get-recipient-notification';

describe('Get recipients Notification', () => {
  it('should be able to get recipient notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository();
    const getRecipientNotification = new GetRecipientNotifications(
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

    const { notifications } = await getRecipientNotification.execute({
      recipientId: 'recipient-1-id',
    });

    expect(notifications).toHaveLength(2);
    expect(notifications).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ recipientId: 'recipient-1-id' }),
        expect.objectContaining({ recipientId: 'recipient-1-id' }),
      ]),
    );
  });
});
