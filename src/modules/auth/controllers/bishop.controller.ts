import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { BishopService } from '../services/bishop.service';
import { BishopDto } from '../dtos/bishop.dto';

@Controller('bishop')
@UsePipes(new ValidationPipe({ transform: true }))
export class BishopController {
  constructor(private readonly bishopService: BishopService) {}

  @Post()
  async login(@Body() bishopDto: BishopDto) {
    return this.bishopService.create(bishopDto);
  }
}
