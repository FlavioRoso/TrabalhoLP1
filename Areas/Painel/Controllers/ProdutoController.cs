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
    public class ProdutoController : Controller
    {
        private readonly ILogger<ProdutoController> _logger;

        public ProdutoController(ILogger<ProdutoController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }

        public IActionResult Novo()
        {
            return View();
        }
        [HttpPost]
        public IActionResult Novo([FromBody] Produto produto)
        {
            ProdutoService produtoService = new ProdutoService();

            string msg = "";
            bool sucesso = produtoService.Cadastrar(produto,out msg);
            
            return Json(new {
                    sucesso = sucesso,
                    msg = msg,

                });
        }

    }
}
