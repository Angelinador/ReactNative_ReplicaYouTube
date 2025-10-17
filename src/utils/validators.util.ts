export const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const validatePasswordLength = (password: string): boolean => {
  return password.length >= 8;
};

export const validatePasswordSpecialChar = (password: string): boolean => {
  const regex = /[!@#$%^&*(),.?":{}|<>]/;
  return regex.test(password);
};

export const validatePasswordEmpty = (password: string): boolean => {
  return password.length!=0 ? true : false;
};

export const validateRegister = (
  apellidos: string,
  nombres: string,
  email: string,
  telefono: string,
  password: string,
  confirm: string
): string | null => {
  if (!apellidos.trim()) {
    return "ingresa tus apellidos";
  }
  if (!nombres.trim()) {
    return "ingresa tus nombres";
  }
  if (!validateEmail(email)) {
    return "ingresa un correo valido";
  }
  if (!telefono.trim() || telefono.length < 10) {
    return "ingresa un numero de telefono valido";
  }
  if (!validatePasswordLength(password)) {
    return "la contrasña debe tener al menos 8 caracteres";
  }
  if (!validatePasswordSpecialChar(password)) {
    return "la contraseña debe incluir un caracter especial";
  }
  if (password !== confirm) {
    return "las contraseñas no coinciden";
  }
  return null;
};


export const validateLogin = (
  email: string,
  password: string
): string | null => {
  if (!validateEmail(email)) {
    return "ingresa un correo válido";
  }
  if (!validatePasswordEmpty(password)) {
    return "la contraseña no puede estar vacia";
  }
  return null; 
};
