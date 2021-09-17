using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrabalhoLP1.Models;

namespace TrabalhoLP1.Services
{
    public class UsuarioService
    {

        public Usuario Obter(int id)
        {
            Usuario u = new Usuario();
            //sql

            return u;
        }

        



        public bool ValidarAutenticacao(string nome, string senha)
        {
            if (nome == "admin" && senha == "123")
                return true;

            return false;
        }

        public bool ValidarAutenticacao(Usuario usuario, out string msg)
        {
            if (usuario.Login == "admin" && usuario.Senha == "123")
            {
                msg = "Usuario validado com sucesso!";
                return true;
            }

             msg = "Email ou senha incorretos!";


            return false;
        }
    }
}
