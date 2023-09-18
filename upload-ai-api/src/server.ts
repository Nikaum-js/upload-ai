import { fastifyCors } from '@fastify/cors'
import { fastify } from 'fastify'
import { createTranscriptionRoute } from './routes/create-transcription'
import { generateAICompletionRoute } from './routes/generate-ai-completion'
import { getAllPromptsRoute } from './routes/get-all-prompts'
import { getVideosRoute } from './routes/get-videos'
import { uploadVideoRoute } from './routes/upload-video'

const app = fastify()

app.register(fastifyCors, {
  origin: '*'
})

app.register(getVideosRoute)
app.register(uploadVideoRoute)
app.register(getAllPromptsRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({
  host: '0.0.0.0',
  port: process.env.PORT ? Number(process.env.PORT) : 3333
}).then(() => {
  console.log('HTTP server runnig in http://localhost:3333')
})