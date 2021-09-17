using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrabalhoLP1.Models
{
    public class Produto
    {
       public int Id {get; set;}
       public string Nome {get; set;}
       public Decimal Preço {get; set;}
       public int Estoque {get; set;}
       public int CategoriaId {get; set;}
       public Categoria Categoria {get; set;}

    }
}
