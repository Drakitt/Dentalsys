export interface Paciente {
    id_paciente: number;
    estado_civil: string;
    nacion_originaria: string;
    grado_educativo: string;
    idioma: string;
    lugar_nacimiento: string;
    fecha_nacimiento: string; // Puede ser un string o un tipo Date, dependiendo de su formato en la base de datos
    ocupacion: string;
    sexo: string;
    nombre: string;
    apellidos: string;
    celular: string;
    email: string;
    ci: string;
}


