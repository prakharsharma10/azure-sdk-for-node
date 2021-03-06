/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource } from 'ms-rest-azure';
import { CloudError } from 'ms-rest-azure';
import * as moment from 'moment';

export { BaseResource } from 'ms-rest-azure';
export { CloudError } from 'ms-rest-azure';


/**
 * @class
 * Initializes a new instance of the Sku class.
 * @constructor
 * SKU details
 *
 * @member {string} name SKU name to specify whether the key vault is a
 * standard vault or a premium vault. Possible values include: 'standard',
 * 'premium'
 */
export interface Sku {
  name: string;
}

/**
 * @class
 * Initializes a new instance of the Permissions class.
 * @constructor
 * Permissions the identity has for keys, secrets, certificates and storage.
 *
 * @member {array} [keys] Permissions to keys
 * @member {array} [secrets] Permissions to secrets
 * @member {array} [certificates] Permissions to certificates
 * @member {array} [storage] Permissions to storage accounts
 */
export interface Permissions {
  keys?: string[];
  secrets?: string[];
  certificates?: string[];
  storage?: string[];
}

/**
 * @class
 * Initializes a new instance of the AccessPolicyEntry class.
 * @constructor
 * An identity that have access to the key vault. All identities in the array
 * must use the same tenant ID as the key vault's tenant ID.
 *
 * @member {uuid} tenantId The Azure Active Directory tenant ID that should be
 * used for authenticating requests to the key vault.
 * @member {string} objectId The object ID of a user, service principal or
 * security group in the Azure Active Directory tenant for the vault. The
 * object ID must be unique for the list of access policies.
 * @member {uuid} [applicationId] Application ID of the client making request
 * on behalf of a principal
 * @member {object} permissions Permissions the identity has for keys, secrets
 * and certificates.
 * @member {array} [permissions.keys] Permissions to keys
 * @member {array} [permissions.secrets] Permissions to secrets
 * @member {array} [permissions.certificates] Permissions to certificates
 * @member {array} [permissions.storage] Permissions to storage accounts
 */
export interface AccessPolicyEntry {
  tenantId: string;
  objectId: string;
  applicationId?: string;
  permissions: Permissions;
}

/**
 * @class
 * Initializes a new instance of the VaultProperties class.
 * @constructor
 * Properties of the vault
 *
 * @member {uuid} tenantId The Azure Active Directory tenant ID that should be
 * used for authenticating requests to the key vault.
 * @member {object} sku SKU details
 * @member {string} [sku.name] SKU name to specify whether the key vault is a
 * standard vault or a premium vault. Possible values include: 'standard',
 * 'premium'
 * @member {array} [accessPolicies] An array of 0 to 16 identities that have
 * access to the key vault. All identities in the array must use the same
 * tenant ID as the key vault's tenant ID.
 * @member {string} [vaultUri] The URI of the vault for performing operations
 * on keys and secrets.
 * @member {boolean} [enabledForDeployment] Property to specify whether Azure
 * Virtual Machines are permitted to retrieve certificates stored as secrets
 * from the key vault.
 * @member {boolean} [enabledForDiskEncryption] Property to specify whether
 * Azure Disk Encryption is permitted to retrieve secrets from the vault and
 * unwrap keys.
 * @member {boolean} [enabledForTemplateDeployment] Property to specify whether
 * Azure Resource Manager is permitted to retrieve secrets from the key vault.
 * @member {boolean} [enableSoftDelete] Property to specify whether the 'soft
 * delete' functionality is enabled for this key vault. It does not accept
 * false value.
 * @member {string} [createMode] The vault's create mode to indicate whether
 * the vault need to be recovered or not. Possible values include: 'recover',
 * 'default'
 */
export interface VaultProperties {
  tenantId: string;
  sku: Sku;
  accessPolicies?: AccessPolicyEntry[];
  vaultUri?: string;
  enabledForDeployment?: boolean;
  enabledForDiskEncryption?: boolean;
  enabledForTemplateDeployment?: boolean;
  enableSoftDelete?: boolean;
  createMode?: string;
}

/**
 * @class
 * Initializes a new instance of the DeletedVaultProperties class.
 * @constructor
 * Properties of the deleted vault.
 *
 * @member {string} [vaultId] The resource id of the original vault.
 * @member {string} [location] The location of the original vault.
 * @member {date} [deletionDate] The deleted date.
 * @member {date} [scheduledPurgeDate] The scheduled purged date.
 * @member {object} [tags] Tags of the original vault.
 */
export interface DeletedVaultProperties {
  readonly vaultId?: string;
  readonly location?: string;
  readonly deletionDate?: Date;
  readonly scheduledPurgeDate?: Date;
  readonly tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the VaultCreateOrUpdateParameters class.
 * @constructor
 * Parameters for creating or updating a vault
 *
 * @member {string} location The supported Azure location where the key vault
 * should be created.
 * @member {object} [tags] The tags that will be assigned to the key vault.
 * @member {object} properties Properties of the vault
 * @member {uuid} [properties.tenantId] The Azure Active Directory tenant ID
 * that should be used for authenticating requests to the key vault.
 * @member {object} [properties.sku] SKU details
 * @member {string} [properties.sku.name] SKU name to specify whether the key
 * vault is a standard vault or a premium vault. Possible values include:
 * 'standard', 'premium'
 * @member {array} [properties.accessPolicies] An array of 0 to 16 identities
 * that have access to the key vault. All identities in the array must use the
 * same tenant ID as the key vault's tenant ID.
 * @member {string} [properties.vaultUri] The URI of the vault for performing
 * operations on keys and secrets.
 * @member {boolean} [properties.enabledForDeployment] Property to specify
 * whether Azure Virtual Machines are permitted to retrieve certificates stored
 * as secrets from the key vault.
 * @member {boolean} [properties.enabledForDiskEncryption] Property to specify
 * whether Azure Disk Encryption is permitted to retrieve secrets from the
 * vault and unwrap keys.
 * @member {boolean} [properties.enabledForTemplateDeployment] Property to
 * specify whether Azure Resource Manager is permitted to retrieve secrets from
 * the key vault.
 * @member {boolean} [properties.enableSoftDelete] Property to specify whether
 * the 'soft delete' functionality is enabled for this key vault. It does not
 * accept false value.
 * @member {string} [properties.createMode] The vault's create mode to indicate
 * whether the vault need to be recovered or not. Possible values include:
 * 'recover', 'default'
 */
export interface VaultCreateOrUpdateParameters extends BaseResource {
  location: string;
  tags?: { [propertyName: string]: string };
  properties: VaultProperties;
}

/**
 * @class
 * Initializes a new instance of the Resource class.
 * @constructor
 * Key Vault resource
 *
 * @member {string} [id] The Azure Resource Manager resource ID for the key
 * vault.
 * @member {string} name The name of the key vault.
 * @member {string} [type] The resource type of the key vault.
 * @member {string} location The supported Azure location where the key vault
 * should be created.
 * @member {object} [tags] The tags that will be assigned to the key vault.
 */
export interface Resource extends BaseResource {
  readonly id?: string;
  name: string;
  readonly type?: string;
  location: string;
  tags?: { [propertyName: string]: string };
}

/**
 * @class
 * Initializes a new instance of the Vault class.
 * @constructor
 * Resource information with extended details.
 *
 * @member {object} properties Properties of the vault
 * @member {uuid} [properties.tenantId] The Azure Active Directory tenant ID
 * that should be used for authenticating requests to the key vault.
 * @member {object} [properties.sku] SKU details
 * @member {string} [properties.sku.name] SKU name to specify whether the key
 * vault is a standard vault or a premium vault. Possible values include:
 * 'standard', 'premium'
 * @member {array} [properties.accessPolicies] An array of 0 to 16 identities
 * that have access to the key vault. All identities in the array must use the
 * same tenant ID as the key vault's tenant ID.
 * @member {string} [properties.vaultUri] The URI of the vault for performing
 * operations on keys and secrets.
 * @member {boolean} [properties.enabledForDeployment] Property to specify
 * whether Azure Virtual Machines are permitted to retrieve certificates stored
 * as secrets from the key vault.
 * @member {boolean} [properties.enabledForDiskEncryption] Property to specify
 * whether Azure Disk Encryption is permitted to retrieve secrets from the
 * vault and unwrap keys.
 * @member {boolean} [properties.enabledForTemplateDeployment] Property to
 * specify whether Azure Resource Manager is permitted to retrieve secrets from
 * the key vault.
 * @member {boolean} [properties.enableSoftDelete] Property to specify whether
 * the 'soft delete' functionality is enabled for this key vault. It does not
 * accept false value.
 * @member {string} [properties.createMode] The vault's create mode to indicate
 * whether the vault need to be recovered or not. Possible values include:
 * 'recover', 'default'
 */
export interface Vault extends Resource {
  properties: VaultProperties;
}

/**
 * @class
 * Initializes a new instance of the DeletedVault class.
 * @constructor
 * Deleted vault information with extended details.
 *
 * @member {string} [id] The resource ID for the deleted key vault.
 * @member {string} [name] The name of the key vault.
 * @member {string} [type] The resource type of the key vault.
 * @member {object} [properties] Properties of the vault
 * @member {string} [properties.vaultId] The resource id of the original vault.
 * @member {string} [properties.location] The location of the original vault.
 * @member {date} [properties.deletionDate] The deleted date.
 * @member {date} [properties.scheduledPurgeDate] The scheduled purged date.
 * @member {object} [properties.tags] Tags of the original vault.
 */
export interface DeletedVault {
  readonly id?: string;
  readonly name?: string;
  readonly type?: string;
  properties?: DeletedVaultProperties;
}


/**
 * @class
 * Initializes a new instance of the VaultListResult class.
 * @constructor
 * List of vaults
 *
 * @member {string} [nextLink] Gets or sets the URL to get the next set of
 * vaults.
 */
export interface VaultListResult extends Array<Vault> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the DeletedVaultListResult class.
 * @constructor
 * List of vaults
 *
 * @member {string} [nextLink] The URL to get the next set of deleted vaults.
 */
export interface DeletedVaultListResult extends Array<DeletedVault> {
  nextLink?: string;
}

/**
 * @class
 * Initializes a new instance of the ResourceListResult class.
 * @constructor
 * List of vault resources.
 *
 * @member {string} [nextLink] Gets the URL to get the next set of vault
 * resources.
 */
export interface ResourceListResult extends Array<Resource> {
  nextLink?: string;
}
