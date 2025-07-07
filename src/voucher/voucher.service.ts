import { Injectable } from '@nestjs/common';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { VoucherRepository } from './repository/voucher.repository';
import { Types } from 'mongoose';

@Injectable()
export class VoucherService {
  constructor(private readonly voucherRepository: VoucherRepository) {}
  async create(createVoucherDto: CreateVoucherDto) {
    return await this.voucherRepository.create(createVoucherDto);
  }

  async findAll() {
    return await this.voucherRepository.findAll();
  }

  async findOne(id: Types.ObjectId) {
    return await this.voucherRepository.findById(id);
  }

  async update(id: Types.ObjectId, updateVoucherDto: UpdateVoucherDto) {
    return await this.voucherRepository.updateOne(id, updateVoucherDto);
  }

  async remove(id: Types.ObjectId) {
    return await this.voucherRepository.deleleOne(id);
  }
  async aggregate(pipelines) {
    return await this.voucherRepository.aggregate(pipelines);
  }
}
