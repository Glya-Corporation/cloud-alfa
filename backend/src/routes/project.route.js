const { Router } = require('express');
const { createProject, getProject, getAllProjects, updateProject, deleteProject } = require('../controllers');
const { authenticate } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/project', authenticate, createProject);

router.get('/project/:id', authenticate, getProject);

router.get('/projects', authenticate, getAllProjects);

router.put('/project/:id/update', authenticate, updateProject);

router.delete('/project/:id/delete', authenticate, deleteProject);

module.exports = router;
