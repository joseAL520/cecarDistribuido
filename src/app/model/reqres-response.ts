export interface RequerReponsive {
    
    page:      number;
    pageSize:  number;
    pageCount: number;
    total:     number;

    data: ReqEst[];
    add: add;
}

interface add {
   // id:         number;
  
}

interface ReqEst {
    eNombre:          string;
    eCelular:         string;
    eCorreo:          string;
    createdAt:        Date;
    updatedAt:        Date;
    publishedAt:      Date;
    eApellido:        string;
    eFechaNacimiento: Date;
    eDireccion:       string;
    eTipodocumento:   string;
    eGenero:          string;
    eEstadoCivil:     string;
    eIdentificacion:  string;
}
