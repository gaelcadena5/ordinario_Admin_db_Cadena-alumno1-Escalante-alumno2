const connection = require('./conection'); // Tu archivo para gestionar la conexión a la base de datos

class DatabaseHandler {
  // Constructor para inicializar la conexión si es necesario
  constructor() {
    this.connection = connection;
  }

  // Método genérico para ejecutar consultas
  async executeQuery(query, params = []) {
    this.connection.query(query, params, (err, results) => {
    if (err) {
        throw err;
    } else {
        return results;
    }
    });
  }
  // Método para obtener estudiantes
  async getEstudiantes() {
    const query = 'SELECT * FROM estudiantes';
    return this.executeQuery(query);
  }
  // Método para obtener maestros
  async getMaestros() {
    const query = 'SELECT * FROM maestros';
    return this.executeQuery(query);
  }
  // Método para insertar un estudiante
  async insertEstudiante({ nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion }) {
    const query = `
      INSERT INTO estudiantes 
      (nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const params = [nombre, apellidos, email, matricula, edad, semestre, usuario_creacio, fecha_creacion];
    return this.executeQuery(query, params);
  }
  // Método para insertar un maestro
  async insertMaestro({ nombre, edad, telefono, correo, usuario_creacio, fecha_creacion }) {
    const query = `
      INSERT INTO maestros 
      (nombre, edad, telefono, correo, usuario_creacio, fecha_creacion) 
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [nombre, edad, telefono, correo, usuario_creacio, fecha_creacion];
    return this.executeQuery(query, params);
  }
  async getEstudianteById(id) {
    const query = 'SELECT * FROM estudiantes WHERE id = ?';
    const params = [id];
    return this.executeQuery(query, params);
  }
  async getMaestroById(id) {
    const query = 'SELECT * FROM maestros WHERE id = ?';
    const params = [id];
    return this.executeQuery(query, params);
  }
  //Método para obtener las materias
  async getMaterias() {
    const query = 'SELECT * FROM materias';
    return this.executeQuery(query);
  }
  async getMateriaById(id) {
    const query = 'SELECT * FROM materias WHERE id = ?';
    const params = [id];
    return this.executeQuery(query, params);
  }
  async insertMateria({ nombre, descripcion, usuario_creacio, fecha_creacion }) {
    const query = `
      INSERT INTO materias
      (nombre, profesor_id, create_user, create_date)
      VALUES (?, ?, ?, ?)
    `;
    const params = [nombre, descripcion, usuario_creacio, fecha_creacion];
    return this.executeQuery(query, params);
  }
  async getCalificaciones() {
    const query = 'SELECT * FROM calificaciones';
    return this.executeQuery(query);
  }
  async getCalificacionById(id) {
    const query = 'SELECT * FROM calificaciones WHERE id = ?';
    const params = [id];
    return this.executeQuery(query, params);
  }
  async insertCalificacion({ estudiante_id, materia_id, calificacion, usuario_creacio, fecha_creacion }) {
    const query = `
      INSERT INTO calificaciones
      (estudiante_id, maestro_id, materia_id,calificacion, create_user, create_date)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    const params = [estudiante_id, maestro_id, materia_id,calificacion, usuario_creacio, fecha_creacion];
    return this.executeQuery(query, params);
  }
}

module.exports = DatabaseHandler;