// classInVoucher.repository.ts
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Voucher, VoucherDocument } from '../schemas/voucher.schema';
import { Model, UpdateResult } from 'mongoose';
import { Types } from 'mongoose';

@Injectable()
export class VoucherRepository {
  constructor(
    @InjectModel(Voucher.name) private voucherModel: Model<Voucher>,
  ) {}

  async create(data: Partial<Voucher>) {
    return await this.voucherModel.create(data);
  }

  async findAll() {
    return await this.voucherModel.find().exec();
  }

  async findById(id: Types.ObjectId): Promise<VoucherDocument | null> {
    return await this.voucherModel.findOne({ id }).exec();
  }

  async findByOneEmail(email: string): Promise<VoucherDocument | null> {
    return await this.voucherModel.findOne({ email: email }).exec();
  }

  async updateOne(
    id: Types.ObjectId,
    body: object,
  ): Promise<UpdateResult | null> {
    return await this.voucherModel.updateOne({ _id: id }, body).exec();
  }
  async deleleOne(id: Types.ObjectId) {
    return await this.voucherModel.deleteOne({ _id: id }).exec();
  }
}
