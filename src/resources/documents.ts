// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Documents extends APIResource {
  list(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/documents', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteDocument(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/documents/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  ingestFile(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/documents', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  ingestRawText(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/documents', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  ingestURL(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/documents', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateDocument(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/documents/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
