import express from 'express'

const app = express()

app.get('/', (_, res) => {
	res.status(200).json({ message: 'Hello, World!' })
})

const PORT = process.env.PORT ?? 3000

app.listen(PORT, () => {
	console.log('Listening on http://localhost:3000')
})
