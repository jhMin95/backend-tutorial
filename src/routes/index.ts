import { Router } from 'express';
import * as books from './books.routes';
// import * as reservations from './reservations.routes'

const router = Router();

router.use(books.path, books.router);
//  .use(reservations.path, reservations.router); 이런식으로 추가할 수 있습니다.

export default router;