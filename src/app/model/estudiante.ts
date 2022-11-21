export class Estudiante{
    
    /*static estudianteDesdeJson(obj: Object){
        return new Estudiante(
            obj['eNombre'],
            obj['eCelular'],
            obj['eCorreo'],
            obj['eApellido'],
            obj['eFechaNacimiento'],
            obj['eDireccion'],
            obj['eTipodocumento'],
            obj['eGenero'],
            obj['eEstadoCivil'],
            obj['eIdentificacion'],
        );
    }*/
    

    constructor(
       public eNombre:          string,
       public eCelular:         string,
       public eCorreo:          string,
       public eApellido:        string,
       public eFechaNacimiento: Date,
       public eDireccion:       string,
       public  eTipodocumento:   string,
       public eGenero:          string,
       public eEstadoCivil:     string,
       public eIdentificacion:  string,){}

}