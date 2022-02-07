/**
 @license
 Copyright (c) 2015-2022 Lablup Inc. All rights reserved.
 */
import {html, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

 /**
  Pipeline Utils

  `pipeline-utils` is collection of common utility methods.

 @group Backend.AI pipeline
 @element pipeline-utils
 */
 @customElement('pipeline-utils')
export default class PipelineUtils extends LitElement {
  public shadowRoot: any; // ShadowRoot

  constructor() {
    super();
  }

  static _humanReadableTimeDuration(d1, d2) {
    let distance = Math.abs(d1 - d2);
    const days = Math.floor(distance / 86400000);
    distance -= days * 86400000;
    const hours = Math.floor(distance / 3600000);
    distance -= hours * 3600000;
    const minutes = Math.floor(distance / 60000);
    distance -= minutes * 60000;
    const seconds = Math.floor(distance / 1000);
    let result = '';
    result += days > 0 ? `${days}d ` : '';
    result += hours > 0 ? `${hours}h ` : '';
    result += minutes > 0 ? `${minutes}m ` : '';
    result += seconds > 0 ? `${seconds}s` : '';
    return result;
  }

  static _categorizeStatus(status) {
    switch (status) {
    case 'PENDING':
      return 'waiting';

    case 'SCHEDULED':
    case 'PREPARING':
    case 'TERMINATING':
    case 'RESTARTING':
      return 'transitional';

    case 'RUNNING':
      return 'ongoing';

    case 'TERMINATED':
      return 'terminal';

    case 'ERROR':
      return 'errorneous';
    }
    return '';
  }

  render() {
    // language=HTML
    return html`
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'pipeline-utils': PipelineUtils;
  }
}
