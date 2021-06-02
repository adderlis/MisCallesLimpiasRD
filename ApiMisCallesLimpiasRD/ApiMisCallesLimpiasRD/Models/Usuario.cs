using MySql.Data.MySqlClient;
using ApiMisCallesLimpiasRD.Models.Entidad;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ApiMisCallesLimpiasRD.Models
{
    public class Usuario : Conexion
    {
        public Eusuario IniciarSesion(string usuario, string clave)
        {
            Eusuario usuarios = new Eusuario();
            try
            {
                DataTable dt = new DataTable();
                MySqlCommand cmd = new MySqlCommand("IniciarSesion", GetCon());
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.Add("prm_usuario", MySqlDbType.Text).Value = usuario;
                cmd.Parameters.Add("prm_clave", MySqlDbType.Text).Value = clave;
                MySqlDataAdapter da = new MySqlDataAdapter();
                da.SelectCommand = cmd;
                da.Fill(dt);

            }
            catch (Exception ex)
            {

            }
            return usuarios;
        }
    }
}
