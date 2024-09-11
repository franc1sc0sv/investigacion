// Simulación de una base de datos en memoria
let users = [
  { id: 1, name: "Juan Pérez", email: "juan@example.com" },
  { id: 2, name: "María García", email: "maria@example.com" },
];

// Obtener todos los usuarios
export const getUsers = (req, res) => {
  res.json(users);
};

// Obtener un usuario por ID
export const getUserById = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

// Crear un nuevo usuario
export const createUser = (req, res) => {
  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  };
  users.push(newUser);
  res.status(201).json(newUser);
};

// Actualizar un usuario existente
export const updateUser = (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    res.json(user);
  } else {
    res.status(404).json({ message: "Usuario no encontrado" });
  }
};

// Eliminar un usuario
export const deleteUser = (req, res) => {
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  res.json({ message: "Usuario eliminado" });
};
