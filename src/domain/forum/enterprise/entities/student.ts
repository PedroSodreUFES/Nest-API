import { Entity } from '@/core/entities/entity'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface StudentProps {
  name: string
  email: string
  password: string
}

export class Student extends Entity<StudentProps> {
  static create(props: StudentProps, id?: UniqueEntityID) {
    const student = new Student(props, id)

    return student
  }

  get name() {
    return this.props.name
  }

  set name(name: string) {
    this.name = name
  }

  get email() {
    return this.props.email
  }

  set email(email: string) {
    this.email = email
  }

  get password() {
    return this.props.password
  }

  set password(password: string) {
    this.password = password
  }
}
