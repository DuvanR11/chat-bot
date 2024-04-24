import { createBot, createProvider } from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider as Provider } from '@builderbot/provider-baileys'
import flows from './flow/index.js';

const PHONE_NUMBER = +573204084584
const PORT = process.env.PORT ?? 3008

// const welcomeFlow = addKeyword(EVENTS.WELCOME)
//     .addAnswer(`🙌 Example sendImage`)
//     .addAction(
//         async (ctx, { provider }) => {
//             await provider.sendImage(ctx.key.remoteJid, `https://static.vecteezy.com/system/resources/previews/003/805/406/non_2x/online-tutorial-concept-learning-courses-tutorials-illustration-flat-vector.jpg`, 'Cute cat!')
//             await provider.sendImage(ctx.key.remoteJid, './src/sendMedia/jpeg.jpeg', null)
//         }
//     )


const main = async () => {
    const adapterFlow = flows

    const adapterProvider = createProvider(Provider, { usePairingCode: true, phoneNumber: PHONE_NUMBER })
    const adapterDB = new Database()

    const { httpServer } = await createBot(
        {
            flow: adapterFlow,
            provider: adapterProvider,
            database: adapterDB,
        }
    )


    httpServer(+PORT)

    // adapterProvider.http.server.post(
    //     '/v1/messages',
    //     handleCtx(async (bot, req, res) => {
    //         const { number, message, urlMedia } = req.body
    //         await bot.sendMessage(number, message, { media: urlMedia ?? null })
    //         return res.end('sended')
    //     })
    // )

    // adapterProvider.http.server.post(
    //     '/v1/register',
    //     handleCtx(async (bot, req, res) => {
    //         const { number, name } = req.body
    //         await bot.dispatch('REGISTER_FLOW', { from: number, name })
    //         return res.end('trigger')
    //     })
    // )

    // adapterProvider.http.server.post(
    //     '/v1/blacklist',
    //     handleCtx(async (bot, req, res) => {
    //         const { number, intent } = req.body
    //         if (intent === 'remove') bot.blacklist.remove(number)
    //         if (intent === 'add') bot.blacklist.add(number)

    //         res.writeHead(200, { 'Content-Type': 'application/json' })
    //         return res.end(JSON.stringify({ status: 'ok', number, intent }))
    //     })
    // )
}

main()