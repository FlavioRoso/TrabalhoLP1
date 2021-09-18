using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TrabalhoLP1.Models
{
    public class Categoria
    {
       public int Id {get; set;}
       public string Nome {get; set;}

       public bool Validar()
       {
           return Nome != null && Nome.Length > 2;
       }
    }

}
