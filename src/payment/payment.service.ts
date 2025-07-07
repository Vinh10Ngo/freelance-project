import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentRepository } from './repository/payment.repository';
import { Types } from 'mongoose';

@Injectable()
export class PaymentService {
  constructor(private readonly paymentRepository: PaymentRepository) {}
  async create(createPaymentDto: CreatePaymentDto) {
    return await this.paymentRepository.create(createPaymentDto);
  }

  async findAll() {
    return await this.paymentRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.paymentRepository.findById(id);
  }

  async update(id: Types.ObjectId, updatePaymentDto: UpdatePaymentDto) {
    return await this.paymentRepository.updateOne(id, updatePaymentDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.paymentRepository.deleleOne(id);
  }
  async aggregate(pipelines) {
    return await this.paymentRepository.aggregate(pipelines);
  }
}
