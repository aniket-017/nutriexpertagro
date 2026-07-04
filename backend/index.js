const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const PORT = process.env.PORT || 3054
const distPath = path.join(__dirname, '../frontend/dist')

if (!fs.existsSync(distPath)) {
  console.error(
    `Frontend build not found at ${distPath}. Run "npm run build" in the frontend folder first.`
  )
  
  process.exit(1)
}

app.use(express.static(distPath))

app.get('*', (req, res) => {
  res.sendFile(path.join(distPath, 'index.html'))
})

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`)
})
