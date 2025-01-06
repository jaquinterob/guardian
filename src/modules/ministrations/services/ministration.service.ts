import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ministration } from '../models/ministration';
import {
  MinistrationDto,
  UpdateMinistrationDto,
} from '../dtos/ministrationDto';

@Injectable()
export class MinistrationService {
  constructor(
    @InjectModel(Ministration.name)
    private ministrationModel: Model<Ministration>,
  ) {}

  async create(ministration: MinistrationDto): Promise<Ministration> {
    const newMinistration = new this.ministrationModel(ministration);
    return newMinistration.save();
  }

  async findAll(): Promise<Ministration[]> {
    return this.ministrationModel.find();
  }

  async findOne(id: string): Promise<Ministration> {
    return this.ministrationModel.findById(id);
  }

  async update(
    id: string,
    ministration: UpdateMinistrationDto,
  ): Promise<Ministration> {
    return this.ministrationModel.findByIdAndUpdate(id, ministration, {
      new: true,
    });
  }

  async remove(id: string): Promise<Ministration> {
    return this.ministrationModel.findByIdAndDelete(id);
  }
}
