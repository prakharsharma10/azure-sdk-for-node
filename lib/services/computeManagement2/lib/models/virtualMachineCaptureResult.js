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
 * Resource Id.
 *
 * @extends models['SubResource']
 */
class VirtualMachineCaptureResult extends models['SubResource'] {
  /**
   * Create a VirtualMachineCaptureResult.
   * @member {object} [output] Operation output data (raw JSON)
   */
  constructor() {
    super();
  }

  /**
   * Defines the metadata of VirtualMachineCaptureResult
   *
   * @returns {object} metadata of VirtualMachineCaptureResult
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VirtualMachineCaptureResult',
      type: {
        name: 'Composite',
        className: 'VirtualMachineCaptureResult',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          output: {
            required: false,
            serializedName: 'properties.output',
            type: {
              name: 'Object'
            }
          }
        }
      }
    };
  }
}

module.exports = VirtualMachineCaptureResult;
