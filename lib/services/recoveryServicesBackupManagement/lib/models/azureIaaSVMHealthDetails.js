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
 * Azure IaaS VM workload-specific Health Details.
 *
 */
class AzureIaaSVMHealthDetails {
  /**
   * Create a AzureIaaSVMHealthDetails.
   * @member {number} [code] Health Code
   * @member {string} [title] Health Title
   * @member {string} [message] Health Message
   * @member {array} [recommendations] Health Recommended Actions
   */
  constructor() {
  }

  /**
   * Defines the metadata of AzureIaaSVMHealthDetails
   *
   * @returns {object} metadata of AzureIaaSVMHealthDetails
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'AzureIaaSVMHealthDetails',
      type: {
        name: 'Composite',
        className: 'AzureIaaSVMHealthDetails',
        modelProperties: {
          code: {
            required: false,
            serializedName: 'code',
            type: {
              name: 'Number'
            }
          },
          title: {
            required: false,
            serializedName: 'title',
            type: {
              name: 'String'
            }
          },
          message: {
            required: false,
            serializedName: 'message',
            type: {
              name: 'String'
            }
          },
          recommendations: {
            required: false,
            serializedName: 'recommendations',
            type: {
              name: 'Sequence',
              element: {
                  required: false,
                  serializedName: 'StringElementType',
                  type: {
                    name: 'String'
                  }
              }
            }
          }
        }
      }
    };
  }
}

module.exports = AzureIaaSVMHealthDetails;