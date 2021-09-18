using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrabalhoLP1.Models;

namespace TrabalhoLP1.Services
{
    public class ProdutoService
    {

        public bool Cadastrar(Produto produto, out string msg)
        {
            if (produto != null && produto.Validar())
            {
                // cadastra produto
                msg = "Produto cadastrado com sucesso!!!";
                return true;
            }
            msg = "Produto invalido, verifique dados de cadastro!!!";
            return false;
        }




    }
}
