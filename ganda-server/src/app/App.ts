import express, { Express, Router } from 'express';
import { AppRouter } from '../routes';
import bodyParser from 'body-parser';
import cors from 'cors';

export class App {
  public app: Express;
  private router: AppRouter;

  constructor(app: Express, router: AppRouter) {
    this.app = app;
    this.router = router;
  }

  configure() {
    this.setupCors();
    this.setupParser();
    this.setupRoutes(this.router.routes());
  }

  private setupRoutes(router: Router) {
    this.app.use(router);
  }

  private setupParser() {
    this.app.use(express.json());
    this.app.use(bodyParser.text());
  }

  public start(port: any): void {
    this.app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  }

  private setupCors() {
    this.app.use(
      cors({
        origin: ['http://localhost:5173', /^https:\/\/case-gandaya\.*/],
        credentials: true,
      })
    );
  }
}
