import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApplyModels } from '../model/apply.model';

@Injectable({ providedIn: 'root' })
export class ApplyService {
  private http = inject(HttpClient);
  private webhookUrl = 'http://localhost:5678/webhook-test/0f0e99cd-a09f-4c7d-aa1c-37be37069d84'; // <<--- REPLACE WITH YOUR WEBHOOK
  private storageKey = 'chat_session_id';

  constructor() {
    this.initializeSession();
  }

  private initializeSession(): void {
    if (!sessionStorage.getItem(this.storageKey)) {
      // Generate a UUID (or fallback if crypto is not available in some envs)
      const newSessionId = crypto.randomUUID ? crypto.randomUUID() : this.generateFallbackUUID();
      sessionStorage.setItem(this.storageKey, newSessionId);
    }
  }

  getSessionId(): string {
    // Ensure session exists (just in case)
    if (!sessionStorage.getItem(this.storageKey)) {
      this.initializeSession();
    }
    return sessionStorage.getItem(this.storageKey) || '';
  }

  // Simple fallback for environments without crypto.randomUUID
  private generateFallbackUUID(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  sendApply(payload: ApplyModels.ApplyForm): Observable<any> {
    const payloadWithSession = {
      ...payload,
      sessionId: this.getSessionId()
    };
    return this.http.post(this.webhookUrl, payloadWithSession);
  }
}
