import { addKeyword } from '@builderbot/bot'

export default addKeyword(['hola', 'buenas'])
    .addAnswer(
        [ 
            'Un gusto tenerte de nuevo',
            '\n¿Como puedo ayudarte el día de hoy 😀?'
        ]
    )
    .addAnswer(
        [
            'Tenemos unas secciones de tu interes',
            '👉 *Preguntas* Dejanos tus dudas',
            '👉 *Urgente*  Escalamos tu urgencia',
            '👉 *Asesor* Contactar un asesor',
            '👉 *Agendar Cita* Agenda tu cita',
            '👉 *Tutoriales* Videos intructivos',
            '👉 *Dinamicas* Proximas dinamicas',
        ],
    )

