import { IsNotEmpty, IsNumber, IsString, Min } from 'class-validator';

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  nome: string;

  @IsString()
  @IsNotEmpty()
  categoria: string;

  @IsNumber()
  @Min(0)
  preco: number;

  @IsString()
  descricao: string;

  @IsNumber()
  @Min(0)
  quantidade_estoque: number;
}
