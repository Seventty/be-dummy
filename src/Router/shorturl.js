import { Router } from 'express'

const router = Router()

router.post('/shorturl', (res, req) => {
    req.status(200).json({ Food: salami })
})

router.post('/shorturl/id:?', (res, req) => {})

export default router
