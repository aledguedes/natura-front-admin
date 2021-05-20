import { Cliente } from "./Cliente";
import { itemPedido } from "./itemPedido";

/* Aqui fazemos o objeto Pedido, porém ele funciona como nosso carrinho de compras */
export class Pedido{
    public idPedido: number;
    public status: number;
    public cliente: Cliente;
    public itensPedido: itemPedido[];
    public valorTotal: number;
    public observacoes: string;
}