import { createFlow } from '@builderbot/bot'

import helloFlow from './hello.flow.js';
import preguntasFlow from './preguntas.flow.js';
import urgenteFlow from './urgente.flow.js';
import asesorFlow from './asesor.flow.js';
import tutorialesFlow from './tutoriales.flow.js';
import dinamicasFlow from './dinamicas.flow.js'


const adapterFlow = createFlow([
    helloFlow,
    preguntasFlow,
    urgenteFlow,
    asesorFlow,
    tutorialesFlow,
    dinamicasFlow
]);

export default adapterFlow