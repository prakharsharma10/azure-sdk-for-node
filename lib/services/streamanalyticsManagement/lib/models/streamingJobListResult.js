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

/**
 * Object containing a list of streaming jobs.
 */
class StreamingJobListResult extends Array {
  /**
   * Create a StreamingJobListResult.
   * @member {string} [nextLink] The link (url) to the next page of results.
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of StreamingJobListResult
   *
   * @returns {object} metadata of StreamingJobListResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'StreamingJobListResult',
      type: {
        name: 'Composite',
        className: 'StreamingJobListResult',
        modelProperties: {
          value: {
            required: false,
            readOnly: true,
            serializedName: '',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StreamingJobElementType',
                  type: {
                    name: 'Composite',
                    className: 'StreamingJob'
                  }
              }
            }
          },
          nextLink: {
            required: false,
            readOnly: true,
            serializedName: 'nextLink',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = StreamingJobListResult;