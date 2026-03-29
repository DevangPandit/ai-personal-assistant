import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
  getHealth() {
    return {
      success: true,
      message: 'Backend is running',
      timestamp: new Date().toISOString(),
    };
  }
}