import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { YouthService } from '../services/youth.service';
import { YouthDto, UpdateYouthDto } from '../dtos/youthDto';
import { Youth } from '../models/youth';

@Controller('youth')
@UsePipes(new ValidationPipe({ transform: true }))
export class YouthController {
  constructor(private readonly youthService: YouthService) {}

  @Post()
  async create(@Body() createYouthDto: YouthDto): Promise<Youth> {
    return this.youthService.create(createYouthDto);
  }

  @Get()
  async findAll(@Query('wardId') wardId?: string): Promise<Youth[]> {
    if (wardId) {
      return this.youthService.findByWard(wardId);
    }
    return this.youthService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Youth> {
    return this.youthService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateYouthDto: UpdateYouthDto,
  ): Promise<Youth> {
    return this.youthService.update(id, updateYouthDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<Youth> {
    return this.youthService.remove(id);
  }
}
