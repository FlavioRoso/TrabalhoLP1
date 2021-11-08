using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TrabalhoLP1.Models;
using TrabalhoLP1.DAL;

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
            var usuarioDal = new UsuarioDAL();

            return usuarioDal.ValidarAutenticacao(nome,senha);
        }

        public bool ValidarAutenticacao(Usuario usuario, out string msg)
        {
            var usuarioDal = new UsuarioDAL();

            if (usuarioDal.ValidarAutenticacao(usuario.Login,usuario.Senha))
            {
                msg = "Usuario validado com sucesso!";
                return true;
            }

             msg = "Email ou senha incorretos!";


            return false;
        }
    }
}
