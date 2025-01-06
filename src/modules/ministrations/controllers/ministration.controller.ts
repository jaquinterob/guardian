import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { MinistrationService } from '../services/ministration.service';
import {
  MinistrationDto,
  UpdateMinistrationDto,
} from '../dtos/ministrationDto';

@Controller('ministrations')
@UsePipes(new ValidationPipe({ transform: true }))
export class MinistrationController {
  constructor(private readonly ministrationService: MinistrationService) {}

  @Post()
  create(@Body() ministration: MinistrationDto) {
    return this.ministrationService.create(ministration);
  }

  @Get()
  findAll() {
    return this.ministrationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ministrationService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() ministration: UpdateMinistrationDto) {
    return this.ministrationService.update(id, ministration);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ministrationService.remove(id);
  }
}
