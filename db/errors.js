export const handleErrors = (code) => {
  if (!code) {
    return {
      status: 500,
      message: "Error de servidor, codigo desconocido",
    };
  }

  switch (code) {
    case "22P02":
      return {
        status: 400,
        message: "Formato no valido en el parametro",
      };
    case "400":
      return {
        status: 400,
        message: "Faltan datos en la peticion",
      };
    case "400":
      return {
        status: 404,
        message: "No existe ese registro",
      };
    default:
      return {
        status: 500,
        message: "Error de servidor",
      };
  }
};
