import { DomainEvents } from '@/core/events/domain-events'
import { AttachmentsRepository } from '@/domain/forum/application/repositories/attachment-repository'
import { Attachment } from '@/domain/forum/enterprise/entities/attachment'

export class InMemoryAttachmentsRepository implements AttachmentsRepository {
  public items: Attachment[] = []

  async create(attachment: Attachment) {
    this.items.push(attachment)

    DomainEvents.dispatchEventsForAggregate(attachment.id)
  }
}
