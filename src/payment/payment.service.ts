import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentRepository } from './repository/payment.repository';
import { Types } from 'mongoose';

@Injectable()
export class PaymentService {
  constructor(private readonly voucherRepository: PaymentRepository) {}
  async create(createPaymentDto: CreatePaymentDto) {
    return await this.voucherRepository.create(createPaymentDto);
  }

  async findAll() {
    return await this.voucherRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.voucherRepository.findById(id);
  }

  async update(id: Types.ObjectId, updatePaymentDto: UpdatePaymentDto) {
    return await this.voucherRepository.updateOne(id, updatePaymentDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.voucherRepository.deleleOne(id);
  }
}
