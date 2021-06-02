using ApiMisCallesLimpiasRD.Models.Entidad;
using MySql.Data.MySqlClient;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Data;
using System.Linq;
using System.Threading.Tasks;

namespace ApiMisCallesLimpiasRD.Models
{
    public class Misreportes : Conexion
    {
        //MetodoControl metodoControl = new MetodoControl();
        public List<Models.Entidad.Emisreportes> lista_de_misreportes()
        {
            List<Models.Entidad.Emisreportes> lista_de_misreportes = new List<Models.Entidad.Emisreportes>();

            DataTable dt = new DataTable();
            MySqlCommand cmd = new MySqlCommand("SListaMisReportesPorCod_usuario", GetCon());
            //cmd.Parameters.Add("1- prm_Cod_usuario", MySqlDbType.VarChar).Value = "%%";
            MySqlDataAdapter da = new MySqlDataAdapter();
            da.SelectCommand = cmd;
            da.Fill(dt);

            if (dt.Rows.Count > 0)
            {
                var result = JsonConvert.SerializeObject(dt, Formatting.Indented);
                lista_de_misreportes = JsonConvert.DeserializeObject<List<Models.Entidad.Emisreportes>>(result, new JsonSerializerSettings()
                {
                    NullValueHandling = NullValueHandling.Ignore
                });
            }

            return lista_de_misreportes;
        }

        //public List<Models.Entidad.EProducto> Lista_de_productos_por_sector(int id_sector, string estado, string serviciotecnico)
        //{

        //    List<Models.Entidad.EProducto> Lista_de_productos_por_sector = new List<Models.Entidad.EProducto>();

        //    DataTable dt = new DataTable();
        //    MySqlDataAdapter da = new MySqlDataAdapter("SListaProductosPorSector", GetCon());
        //    da.SelectCommand.CommandType = CommandType.StoredProcedure;
        //    da.SelectCommand.Parameters.Add("prm_id_sector", MySqlDbType.Int32).Value = id_sector;
        //    da.SelectCommand.Parameters.Add("prm_estado", MySqlDbType.VarChar).Value = estado;
        //    da.SelectCommand.Parameters.Add("prm_serviciotecnico", MySqlDbType.VarChar).Value = serviciotecnico;
        //    da.Fill(dt);
        //    if (dt.Rows.Count > 0)
        //    {
        //        Lista_de_productos_por_sector = metodoControl.ConvertirTablaEnLista<Models.Entidad.EProducto>(dt);
        //    }
        //    return Lista_de_productos_por_sector;
        //}

    }
}
