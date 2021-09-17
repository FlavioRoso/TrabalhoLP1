using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using TrabalhoLP1.Services;
using TrabalhoLP1.Models;

namespace TrabalhoLP1.Areas.Painel.Controllers
{

    [Area("Painel")]
    public class CategoriaController : Controller
    {
        private readonly ILogger<CategoriaController> _logger;

        public CategoriaController(ILogger<CategoriaController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }


        [HttpGet]
        public IActionResult Novo()
        {
            
            return View(new Produto());
        }

        [HttpPost]
        public IActionResult Novo([FromBody] Categoria categoria)
        {
            CategoriaService categoriaService = new CategoriaService();

            string msg = "";
            bool sucesso = categoriaService.Cadastrar(categoria,out msg);
            
            return Json(new {
                    sucesso = sucesso,
                    msg = msg,

                });
        }

    }
}
