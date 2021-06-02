using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ApiMisCallesLimpiasRD.Models.Entidad
{
    public class Emisreportes
    {
        public int cod_reporte { get; set; } = 0;
        public string ubicacion { get; set; } = "";
        public double lat { get; set; } = 0;
        public double lng { get; set; } = 0;
        public int fotos { get; set; } = 0;
        
    }
}
