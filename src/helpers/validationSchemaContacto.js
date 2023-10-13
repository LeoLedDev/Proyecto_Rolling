import * as yup from 'yup'

const userSchemaContacto = yup.object({
    nombre: yup.string().min(4,'El minimo es de 4 caracteres').max(30, 'El Maximo es de 30 Caracteres').required('El nombre y apellido es obligatorio'),
    email: yup.string().required('La Direccion de correo es necesaria').email('La direccion de correo es invalida'),
    fono: yup.number().min(10,'El Minimo es de 10 carateres').required('El telefono es necesario'),
    motivo:yup.string().min(4,'El minimo es de 4 caracteres').max(30, 'El maximo es de 30 Caracteres').required('La ciudad es obligatoria'),
    tarea: yup.string().min(10,'El minimo es de 10 caracteres').max(250, 'El maximo es de 150 Caracteres').required('El mensaje o asunto es Obligatorio'),

});

export default userSchemaContacto;