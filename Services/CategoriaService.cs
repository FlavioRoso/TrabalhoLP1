using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrabalhoLP1.Models;

namespace TrabalhoLP1.Services
{
    public class CategoriaService
    {

        public bool Cadastrar(Categoria categoria, out string msg)
        {
            if(categoria != null && categoria.Validar())
            {
                // cadastra produto
                msg = "Categoria cadastrada com sucesso!!!";
                return true;
            }
            msg = "Categoria invalida, verifique dados de cadastro!!!";
            return false;
        }

    

    }
}
