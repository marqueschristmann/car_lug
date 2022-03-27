import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateListaCarDTO } from './dtos/create-lista-car.dto';
import { UpdateListaCarDTO } from './dtos/updade-lista-car.dto';
import { GerentesService } from './gerentes.service';

@Controller('Gerente')
@UseGuards(AuthGuard('jwt'))
export class GerentesController {
  constructor(private gerentesService: GerentesService) {}
  @Get()
  getAllGerentes() {
    return this.gerentesService.getAllGerentes();
  }

  @Get('/:id')
  getAllcarId(@Param('id') id) {
    return this.gerentesService.getAllcarId(id);
  }

  @Post()
  createlistaCar(@Body() createListaCarDTO: CreateListaCarDTO) {
    return this.gerentesService.createlistaCar(createListaCarDTO);
  }

  @Put('/:id')
  updateListaCar(
    @Param('id') id,
    @Body() updateListaCarDTO: UpdateListaCarDTO,
  ) {
    return this.gerentesService.updateListaCar(id, updateListaCarDTO);
  }
  @Delete('/:id')
  deleteCarro(@Param('id') id) {
    return this.gerentesService.deleteCarro(id);
  }
}
