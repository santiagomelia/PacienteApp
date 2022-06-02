export interface Paciente {
    DNI:                string;
    nombre:             string;
    email:              string;
    password:           string;
    telefono:           string;
    fechaNacimiento:    string;
    direccion:          string;
    codigoPostal:       string;
    numSeguridadSocial: string;
}

export interface Cita {
    id:  string;
    Especialidad: string;
    Facultativo: string;
    fecha: string;
    paciente: string;
}

export interface Especialidad {
    nombre: string;
    medicos: Medico[];
}

export interface Medico {
    nombre:string;
}