import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { VoucherService } from './voucher.service';
import { CreateVoucherDto } from './dto/create-voucher.dto';
import { UpdateVoucherDto } from './dto/update-voucher.dto';
import { Types } from 'mongoose';

@Controller('voucher')
export class VoucherController {
  constructor(private readonly voucherService: VoucherService) {}

  @Post()
  async create(@Body() createVoucherDto: CreateVoucherDto) {
    return await this.voucherService.create(createVoucherDto);
  }

  @Get()
  async findAll() {
    return await this.voucherService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: Types.ObjectId) {
    return await this.voucherService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: Types.ObjectId,
    @Body() updateVoucherDto: UpdateVoucherDto,
  ) {
    return await this.voucherService.update(id, updateVoucherDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: Types.ObjectId) {
    return await this.voucherService.remove(id);
  }
}
