const { exec } = require('child_process');



const clonarRepositorioEnServidor = (urlRepositorio, project) => {

  const path = `/home/glya/projects/${project}`

  // Comando para clonar el repositorio usando Git
  const comando = `git clone ${urlRepositorio} ${path}`;

  exec(comando, (error, stdout, stderr) => {
    if (error) {
      console.error('Error al clonar el repositorio:', error);
    } else {
      return { path, salida: stdout};
    }
  });
}