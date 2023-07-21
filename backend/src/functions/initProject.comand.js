const { exec } = require('child_process');

const initProject = (urlRepository, project, dir, install, prevStart, cmdStart) => {
  cloneRepositoryInServer();
  dependencyInstall();
  runProject();
}



const cloneRepositoryInServer = (urlRepository, project, dir) => {

  const path = `/home/glya/projects/${project}`

  // Comando para clonar el repositorio usando Git
  const cmd = `git clone ${urlRepository}${dir && dir} ${path}`;
  
  const result = { path, ...ejectCmd(cmd)};
  
  return result;
}

const dependencyInstall = async (project, install) => {
  
  // Comando para entrar al proyecto
  const cmd = `cd /home/glya/projects/${project}`;

  await ejectCmd(cmd);
  
  const result = await ejectCmd(install);
  
  return result;
}

const runProject = (prevStart, cmdStart) => {
  const cmd = `${prevStart ? prevStart + '&&' : ''}${cmdStart}`;
  
  return ejectCmd(cmd);
}

const ejectCmd = cmd => {
exec(cmd, (error, stdout, stderr) => {
    if (error) {
      console.error(error);
    } else {
      return { salida: stdout };
    }
  });
}