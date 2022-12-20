import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { randomUUID } from 'crypto';
import { CreateNotificationBody } from './create-notification-body';

@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  List() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async Create(@Body() body: CreateNotificationBody) {
    const { recipientId, content, category} = body

    await this.prisma.notification.create({
      data: {
        id: randomUUID(),
        content: content,
        category: category,
        recipientId: recipientId
      }
    })
    
  }
}

