// Dummy change for testing changeset workflow
import { BackendService, BackendConfig } from 'mv-odm-backend';

export interface ODMConfig {
  backend: BackendConfig;
  frontend: {
    port: number;
    host: string;
  };
}

export class ODMService {
  private backend: BackendService;
  private config: ODMConfig;

  constructor(config: ODMConfig) {
    this.config = config;
    this.backend = new BackendService(config.backend);
  }

  public start(): void {
    console.log(`ODM service starting on ${this.config.frontend.host}:${this.config.frontend.port}`);
    this.backend.start();
  }

  public getConfig(): ODMConfig {
    return { ...this.config };
  }
}

export default ODMService; 