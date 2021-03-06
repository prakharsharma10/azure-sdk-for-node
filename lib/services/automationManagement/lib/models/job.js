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
 * Definition of the job.
 *
 */
class Job {
  /**
   * Create a Job.
   * @member {string} [id] Gets or sets the id of the resource.
   * @member {object} [runbook] Gets or sets the runbook.
   * @member {string} [runbook.name] Gets or sets the name of the runbook.
   * @member {string} [startedBy] Gets or sets the job started by.
   * @member {string} [runOn] Gets or sets the runOn which specifies the group
   * name where the job is to be executed.
   * @member {uuid} [jobId] Gets or sets the id of the job.
   * @member {date} [creationTime] Gets or sets the creation time of the job.
   * @member {string} [status] Gets or sets the status of the job. Possible
   * values include: 'New', 'Activating', 'Running', 'Completed', 'Failed',
   * 'Stopped', 'Blocked', 'Suspended', 'Disconnected', 'Suspending',
   * 'Stopping', 'Resuming', 'Removing'
   * @member {string} [statusDetails] Gets or sets the status details of the
   * job.
   * @member {date} [startTime] Gets or sets the start time of the job.
   * @member {date} [endTime] Gets or sets the end time of the job.
   * @member {string} [exception] Gets or sets the exception of the job.
   * @member {date} [lastModifiedTime] Gets or sets the last modified time of
   * the job.
   * @member {date} [lastStatusModifiedTime] Gets or sets the last status
   * modified time of the job.
   * @member {object} [parameters] Gets or sets the parameters of the job.
   */
  constructor() {
  }

  /**
   * Defines the metadata of Job
   *
   * @returns {object} metadata of Job
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'Job',
      type: {
        name: 'Composite',
        className: 'Job',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          runbook: {
            required: false,
            serializedName: 'properties.runbook',
            type: {
              name: 'Composite',
              className: 'RunbookAssociationProperty'
            }
          },
          startedBy: {
            required: false,
            serializedName: 'properties.startedBy',
            type: {
              name: 'String'
            }
          },
          runOn: {
            required: false,
            serializedName: 'properties.runOn',
            type: {
              name: 'String'
            }
          },
          jobId: {
            required: false,
            serializedName: 'properties.jobId',
            type: {
              name: 'String'
            }
          },
          creationTime: {
            required: false,
            serializedName: 'properties.creationTime',
            type: {
              name: 'DateTime'
            }
          },
          status: {
            required: false,
            serializedName: 'properties.status',
            type: {
              name: 'String'
            }
          },
          statusDetails: {
            required: false,
            serializedName: 'properties.statusDetails',
            type: {
              name: 'String'
            }
          },
          startTime: {
            required: false,
            serializedName: 'properties.startTime',
            type: {
              name: 'DateTime'
            }
          },
          endTime: {
            required: false,
            serializedName: 'properties.endTime',
            type: {
              name: 'DateTime'
            }
          },
          exception: {
            required: false,
            serializedName: 'properties.exception',
            type: {
              name: 'String'
            }
          },
          lastModifiedTime: {
            required: false,
            serializedName: 'properties.lastModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          lastStatusModifiedTime: {
            required: false,
            serializedName: 'properties.lastStatusModifiedTime',
            type: {
              name: 'DateTime'
            }
          },
          parameters: {
            required: false,
            serializedName: 'properties.parameters',
            type: {
              name: 'Dictionary',
              value: {
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

module.exports = Job;
