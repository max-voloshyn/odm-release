// Dummy change for testing changeset workflow
// Additional dummy change for second PR
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

  // Dummy utility method for testing
  public getStatus(): string {
    return 'running';
  }
}

export default BackendService; 