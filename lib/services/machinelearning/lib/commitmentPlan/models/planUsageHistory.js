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
 * @class
 * Initializes a new instance of the PlanUsageHistory class.
 * @constructor
 * Represents historical information about usage of the Azure resources
 * associated with a commitment plan.
 *
 * @member {object} [planDeletionOverage] Overage incurred as a result of
 * deleting a commitment plan.
 *
 * @member {object} [planMigrationOverage] Overage incurred as a result of
 * migrating a commitment plan from one SKU to another.
 *
 * @member {object} [planQuantitiesAfterUsage] Included quantities remaining
 * after usage against the commitment plan's associated resources was
 * calculated.
 *
 * @member {object} [planQuantitiesBeforeUsage] Included quantities remaining
 * before usage against the commitment plan's associated resources was
 * calculated.
 *
 * @member {object} [planUsageOverage] Usage against the commitment plan's
 * associated resources which was not covered by included quantities and is
 * therefore overage.
 *
 * @member {object} [usage] Usage against the commitment plan's associated
 * resources.
 *
 * @member {date} [usageDate] The date of usage, in ISO 8601 format.
 *
 */
class PlanUsageHistory {
  constructor() {
  }

  /**
   * Defines the metadata of PlanUsageHistory
   *
   * @returns {object} metadata of PlanUsageHistory
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'PlanUsageHistory',
      type: {
        name: 'Composite',
        className: 'PlanUsageHistory',
        modelProperties: {
          planDeletionOverage: {
            required: false,
            serializedName: 'planDeletionOverage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          planMigrationOverage: {
            required: false,
            serializedName: 'planMigrationOverage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          planQuantitiesAfterUsage: {
            required: false,
            serializedName: 'planQuantitiesAfterUsage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          planQuantitiesBeforeUsage: {
            required: false,
            serializedName: 'planQuantitiesBeforeUsage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          planUsageOverage: {
            required: false,
            serializedName: 'planUsageOverage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          usage: {
            required: false,
            serializedName: 'usage',
            type: {
              name: 'Dictionary',
              value: {
                  required: false,
                  serializedName: 'NumberElementType',
                  type: {
                    name: 'Number'
                  }
              }
            }
          },
          usageDate: {
            required: false,
            serializedName: 'usageDate',
            type: {
              name: 'DateTime'
            }
          }
        }
      }
    };
  }
}

module.exports = PlanUsageHistory;