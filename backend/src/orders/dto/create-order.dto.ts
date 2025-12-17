import { IsArray, IsEnum, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateOrderDto {
  @IsArray()
  @IsNotEmpty()
  produtos: { id: number; quantidade: number }[];

  @IsNumber()
  total_pedido: number;

  @IsEnum(['Pendente', 'Concluído', 'Cancelado'])
  status: 'Pendente' | 'Concluído' | 'Cancelado';
}
