import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Youth } from '../models/youth';
import { YouthDto } from '../dtos/youthDto';
import { UpdateYouthDto } from '../dtos/youthDto';

@Injectable()
export class YouthService {
  constructor(
    @InjectModel(Youth.name)
    private readonly youthModel: Model<Youth>,
  ) {}

  async create(createYouthDto: YouthDto): Promise<Youth> {
    const createdYouth = new this.youthModel(createYouthDto);
    return createdYouth.save();
  }

  async findAll(): Promise<Youth[]> {
    return this.youthModel.find();
  }

  async findOne(id: string): Promise<Youth> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid youth ID');
    }

    const youth = await this.youthModel.findById(id);
    if (!youth) {
      throw new NotFoundException('Youth not found');
    }
    return youth;
  }

  async update(id: string, updateYouthDto: UpdateYouthDto): Promise<Youth> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid youth ID');
    }

    const updatedYouth = await this.youthModel.findByIdAndUpdate(
      id,
      updateYouthDto,
      { new: true },
    );

    if (!updatedYouth) {
      throw new NotFoundException('Youth not found');
    }
    return updatedYouth;
  }

  async remove(id: string): Promise<Youth> {
    if (!Types.ObjectId.isValid(id)) {
      throw new NotFoundException('Invalid youth ID');
    }

    const deletedYouth = await this.youthModel.findByIdAndDelete(id);
    if (!deletedYouth) {
      throw new NotFoundException('Youth not found');
    }
    return deletedYouth;
  }

  async findByWard(wardId: string): Promise<Youth[]> {
    if (!Types.ObjectId.isValid(wardId)) {
      throw new NotFoundException('Invalid ward ID');
    }

    return this.youthModel.find({ wardId });
  }
}
