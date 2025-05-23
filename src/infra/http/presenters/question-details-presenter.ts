import { QuestionDetails } from '@/domain/forum/enterprise/entities/value-objects/question-details'
import { AttachmentPresenter } from './attachment-presenter'

export class QuestionDetailsPresenter {
  static toHTTP(question: QuestionDetails) {
    return {
      questionId: question.questionId.toString(),
      authorId: question.authorId.toString(),
      author: question.author,
      title: question.title,
      slug: question.slug.value,
      content: question.content,
      bestAnswerId: question.bestAnswerId
        ? question.bestAnswerId.toString()
        : null,
      createdAt: question.createdAt,
      updatedAt: question.updatedAt,
      attachments: question.attachments.map(AttachmentPresenter.toHTTP),
    }
  }
}
