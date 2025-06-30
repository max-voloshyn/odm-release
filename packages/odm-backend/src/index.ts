// Dummy change for testing changeset workflow
export interface BackendConfig {
  port: number;
  host: string;
}

export class BackendService {
  private config: BackendConfig;

  constructor(config: BackendConfig) {
    this.config = config;
  }

  public start(): void {
    console.log(`Backend service starting on ${this.config.host}:${this.config.port}`);
  }

  public getConfig(): BackendConfig {
    return { ...this.config };
  }
}

export default BackendService; 