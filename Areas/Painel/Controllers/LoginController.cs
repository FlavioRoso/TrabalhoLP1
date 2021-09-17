using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TrabalhoLP1.Models;
using TrabalhoLP1.Services;

namespace TrabalhoLP1.Areas.Painel.Controllers
{

    [Area("Painel")]
    public class LoginController : Controller
    {
        private readonly ILogger<LoginController> _logger;

        public LoginController(ILogger<LoginController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Autenticar([FromBody] Usuario usuario)
        {


            UsuarioService us = new UsuarioService();
            string msg = "";
            bool logado = us.ValidarAutenticacao(usuario, out msg);

            return Json(new
            {
                sucesso = logado,
                msg = msg,

            });

        }

    }
}
