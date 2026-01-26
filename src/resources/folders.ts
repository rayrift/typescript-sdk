// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class Folders extends APIResource {
  createFolder(options?: RequestOptions): APIPromise<void> {
    return this._client.post('/v1/folders', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  deleteFolder(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/folders/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listDocuments(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/folders/${id}/documents`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  listFolders(options?: RequestOptions): APIPromise<void> {
    return this._client.get('/v1/folders', {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  retrieveFolder(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.get(path`/v1/folders/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  updateFolder(id: string, options?: RequestOptions): APIPromise<void> {
    return this._client.patch(path`/v1/folders/${id}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }
}
