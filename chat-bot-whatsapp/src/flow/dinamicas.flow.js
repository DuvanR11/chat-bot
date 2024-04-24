import { addKeyword } from '@builderbot/bot'

export default addKeyword(['dinamica', 'dinamicas'])
    .addAnswer(
        [ 
            'Nuestra proxima dianmica sera *Control de seguridad*',
            'Te esperamos a las 4:00 PM no faltes',
            'Ubicación: ',
        ]
    )
    .addAction(
        async (ctx, { provider, flowDynamic }) => {
            const number = ctx.key.remoteJid
            await provider.vendor.sendMessage(
                number, {
                location: {
                    degreesLatitude: 45.685941,
                    degreesLongitude: -73.7386477,
                    name: "Evento Control",
                    address: "Localidad kennedy"
                }
            }
            )
        }
    )


