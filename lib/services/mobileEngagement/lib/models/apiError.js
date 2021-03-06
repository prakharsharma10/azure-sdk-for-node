/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

const models = require('./index');

/**
 * Class representing a ApiError.
 */
class ApiError {
  /**
   * Create a ApiError.
   * @member {object} [error]
   * @member {string} [error.code]
   * @member {string} [error.message]
   */
  constructor() {
  }

  /**
   * Defines the metadata of ApiError
   *
   * @returns {object} metadata of ApiError
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'ApiError',
      type: {
        name: 'Composite',
        className: 'ApiError',
        modelProperties: {
          error: {
            required: false,
            serializedName: 'error',
            type: {
              name: 'Composite',
              className: 'ApiErrorError'
            }
          }
        }
      }
    };
  }
}

module.exports = ApiError;
