using System;
using System.Collections.Generic;
using System.Data;

namespace TrabalhoLP1.DAL
{
    public class ProdutoDAL
    {
        MySQLPersistence _bd = new MySQLPersistence();

        public bool Salvar(Models.Produto produto)
        {
            bool sucesso = false;
            string sql;
            Dictionary<string, object> parametros = new Dictionary<string, object>();
            if (produto.Id == 0)
            {
                sql = @"insert into produto (nome, preco) values (@nome, @preco)";
            }
            else
            {
                sql = @"update produto set nome = @nome, preco = @preco 
                        where id = @id";

                parametros.Add("@id", produto.Id);
            }

            parametros.Add("@nome", produto.Nome);
            parametros.Add("@preco", produto.Preco);

            _bd.AbrirConexao();
            if (_bd.ExecutarNonQuery(sql, parametros) == 1)
            {
                if (produto.Id == 0)
                {
                    produto.Id = _bd.UltimoId;
                }

                sucesso = true;
            }
            _bd.FecharConexao();

            return sucesso;
        }

        public Models.Produto Obter(int id)
        {
            string sql = @"select * 
                           from produto 
                           where id = @id";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@id", id);

            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            if (dt.Rows.Count == 0)
                return null;
            else
            {
                Models.Produto p = Map(dt.Rows[0]);

                return p;
            }

        }

        public IEnumerable<Models.Produto> Consulta(string nome)
        {
            List<Models.Produto> produtos = new List<Models.Produto>();

            string sql = @"select * 
                           from Produto 
                           where nome like @nome";

            Dictionary<string, object> parametros = new Dictionary<string, object>();
            parametros.Add("@nome", "%" + nome + "%");

            _bd.AbrirConexao();
            DataTable dt = _bd.ExecutarSelect(sql, parametros);

            foreach (DataRow row in dt.Rows)
            {
                produtos.Add(Map(row));
            }
            _bd.FecharConexao();

            return produtos;
        }

        private Models.Produto Map(DataRow row)
        {
            Models.Produto p = new Models.Produto()
            {
                Id = Convert.ToInt32(row["id"]),
                Nome = row["nome"].ToString(),
                Preco = Convert.ToDecimal(row["preco"]),
            };

            return p;
        }

    }
}
