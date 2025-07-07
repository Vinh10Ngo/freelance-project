// classInPayment.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Payment, PaymentDocument } from '../schemas/payment.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class PaymentRepository {
  constructor(
    @InjectModel(Payment.name) private paymentModel: Model<Payment>,
  ) {}

  async create(data: Partial<Payment>) {
    return await this.paymentModel.create(data);
  }

  async findAll() {
    return await this.paymentModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<PaymentDocument | null> {
    return await this.paymentModel
      .findById(id)
      .populate('student')
      .populate('classInCourse')
      .populate('voucher')
      .exec();
  }

  async findByOneEmail(email: string): Promise<PaymentDocument | null> {
    return await this.paymentModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.paymentModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.paymentModel.deleteOne({ _id: id }).exec();
  }
  async aggregate(pipelines) {
    await this.paymentModel.aggregate(pipelines);
  }
}
