// Copyright 2021-2024 The Connect Authors
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts"
// @generated from file buf/registry/module/v1/label.proto (package buf.registry.module.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import { file_buf_registry_priv_extension_v1beta1_extension } from "../../priv/extension/v1beta1/extension_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Timestamp } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1/label.proto.
 */
export const file_buf_registry_module_v1_label: GenFile = /*@__PURE__*/
  fileDesc("CiJidWYvcmVnaXN0cnkvbW9kdWxlL3YxL2xhYmVsLnByb3RvEhZidWYucmVnaXN0cnkubW9kdWxlLnYxIscECgVMYWJlbBIXCgJpZBgBIAEoCUILukgIyAEBcgOIAgESNwoLY3JlYXRlX3RpbWUYAiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESNwoLdXBkYXRlX3RpbWUYAyABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wQga6SAPIAQESMAoMYXJjaGl2ZV90aW1lGAQgASgLMhouZ29vZ2xlLnByb3RvYnVmLlRpbWVzdGFtcBIZCgRuYW1lGAUgASgJQgu6SAjIAQFyAxj6ARIdCghvd25lcl9pZBgGIAEoCUILukgIyAEBcgOIAgESHgoJbW9kdWxlX2lkGAcgASgJQgu6SAjIAQFyA4gCARIeCgljb21taXRfaWQYCCABKAlCC7pICMgBAXIDiAIBEicKEnVwZGF0ZWRfYnlfdXNlcl9pZBgJIAEoCUILukgI2AEBcgOIAgES1QEKEmNvbW1pdF9jaGVja19zdGF0ZRgKIAEoCzIoLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuQ29tbWl0Q2hlY2tTdGF0ZUKOAbpIigG6AYMBCh9sYWJlbF9jb21taXRfY2hlY2tfc3RhdGVfc3RhdHVzEkZjb21taXRfY2hlY2tfc3RhdGUgbXVzdCBoYXZlIGEgc3RhdHVzIG9mIERJU0FCTEVELCBQQVNTRUQsIG9yIEFQUFJPVkVEGhh0aGlzLnN0YXR1cyBpbiBbMSwgMiwgNV3IAQE6BurFKwIQASKTAQoQQ29tbWl0Q2hlY2tTdGF0ZRJGCgZzdGF0dXMYASABKA4yKS5idWYucmVnaXN0cnkubW9kdWxlLnYxLkNvbW1pdENoZWNrU3RhdHVzQgu6SAjIAQGCAQIQARI3Cgt1cGRhdGVfdGltZRgDIAEoCzIaLmdvb2dsZS5wcm90b2J1Zi5UaW1lc3RhbXBCBrpIA8gBASLLAQoITGFiZWxSZWYSFgoCaWQYASABKAlCCLpIBXIDiAIBSAASNQoEbmFtZRgCIAEoCzIlLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuTGFiZWxSZWYuTmFtZUgAGlgKBE5hbWUSGQoFb3duZXIYASABKAlCCrpIB8gBAXICGCASGQoGbW9kdWxlGAIgASgJQgm6SAZyBBACGGQSGgoFbGFiZWwYAyABKAlCC7pICMgBAXIDGPoBOgbqxSsCCAFCDgoFdmFsdWUSBbpIAggBIlAKDlNjb3BlZExhYmVsUmVmEhYKAmlkGAEgASgJQgi6SAVyA4gCAUgAEg4KBG5hbWUYAiABKAlIADoG6sUrAggBQg4KBXZhbHVlEgW6SAIIASrfAQoRQ29tbWl0Q2hlY2tTdGF0dXMSIwofQ09NTUlUX0NIRUNLX1NUQVRVU19VTlNQRUNJRklFRBAAEiAKHENPTU1JVF9DSEVDS19TVEFUVVNfRElTQUJMRUQQARIeChpDT01NSVRfQ0hFQ0tfU1RBVFVTX1BBU1NFRBACEh8KG0NPTU1JVF9DSEVDS19TVEFUVVNfUEVORElORxADEiAKHENPTU1JVF9DSEVDS19TVEFUVVNfUkVKRUNURUQQBBIgChxDT01NSVRfQ0hFQ0tfU1RBVFVTX0FQUFJPVkVEEAVCTlpMYnVmLmJ1aWxkL2dlbi9nby9idWZidWlsZC9yZWdpc3RyeS9wcm90b2NvbGJ1ZmZlcnMvZ28vYnVmL3JlZ2lzdHJ5L21vZHVsZS92MWIGcHJvdG8z", [file_buf_registry_priv_extension_v1beta1_extension, file_buf_validate_validate, file_google_protobuf_timestamp]);

/**
 * A label on a specific Module.
 *
 * Many Labels can be associated with one Commit.
 *
 * @generated from message buf.registry.module.v1.Label
 */
export type Label = Message<"buf.registry.module.v1.Label"> & {
  /**
   * The id of the Label.
   *
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * The time the Label was created on the BSR.
   *
   * @generated from field: google.protobuf.Timestamp create_time = 2;
   */
  createTime?: Timestamp;

  /**
   * The last time the Label was updated on the BSR.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;

  /**
   * The time the Label was archived if it is currently archived.
   *
   * If this field is not set, the Label is not currently archived.
   *
   * @generated from field: google.protobuf.Timestamp archive_time = 4;
   */
  archiveTime?: Timestamp;

  /**
   * The name of the Label.
   *
   * Unique within a given Module.
   *
   * @generated from field: string name = 5;
   */
  name: string;

  /**
   * The id of the User or Organization that owns the Module that the Label is associated with.
   *
   * @generated from field: string owner_id = 6;
   */
  ownerId: string;

  /**
   * The id of the Module that the Label is associated with.
   *
   * @generated from field: string module_id = 7;
   */
  moduleId: string;

  /**
   * The id of the Commit currently associated with the Label.
   *
   * If policy checks are enabled, this will point to the most recent Commit that passed or was approved.
   * To get the history of the Commits that have been associated with a Label, use ListLabelHistory.
   *
   * @generated from field: string commit_id = 8;
   */
  commitId: string;

  /**
   * The id of the User that last updated this Label on the BSR.
   *
   * May be empty if the User is no longer available.
   *
   * @generated from field: string updated_by_user_id = 9;
   */
  updatedByUserId: string;

  /**
   * The CommitCheckState for the Commit the Label points to.
   *
   * The CommitCheckStatus will always be disabled, passed, or approved, since Labels will
   * never point to pending or rejected Commits.
   *
   * @generated from field: buf.registry.module.v1.CommitCheckState commit_check_state = 10;
   */
  commitCheckState?: CommitCheckState;
};

/**
 * Describes the message buf.registry.module.v1.Label.
 * Use `create(LabelSchema)` to create a new message.
 */
export const LabelSchema: GenMessage<Label> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_label, 0);

/**
 * The state of a Commit's policy checks for a particular Label.
 *
 * Policy checks are an enterprise-only feature - contact us to learn more!
 *
 * @generated from message buf.registry.module.v1.CommitCheckState
 */
export type CommitCheckState = Message<"buf.registry.module.v1.CommitCheckState"> & {
  /**
   * The status of the policy check.
   *
   * @generated from field: buf.registry.module.v1.CommitCheckStatus status = 1;
   */
  status: CommitCheckStatus;

  /**
   * The time the policy check state was last updated.
   *
   * If the status is disabled, this will be equal to the Commit create_time.
   *
   * @generated from field: google.protobuf.Timestamp update_time = 3;
   */
  updateTime?: Timestamp;
};

/**
 * Describes the message buf.registry.module.v1.CommitCheckState.
 * Use `create(CommitCheckStateSchema)` to create a new message.
 */
export const CommitCheckStateSchema: GenMessage<CommitCheckState> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_label, 1);

/**
 * LabelRef is a reference to a Label, either an id or a fully-qualified name.
 *
 * This is used in requests.
 *
 * @generated from message buf.registry.module.v1.LabelRef
 */
export type LabelRef = Message<"buf.registry.module.v1.LabelRef"> & {
  /**
   * @generated from oneof buf.registry.module.v1.LabelRef.value
   */
  value: {
    /**
     * The id of the Label.
     *
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The fully-qualified name of the Label.
     *
     * @generated from field: buf.registry.module.v1.LabelRef.Name name = 2;
     */
    value: LabelRef_Name;
    case: "name";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message buf.registry.module.v1.LabelRef.
 * Use `create(LabelRefSchema)` to create a new message.
 */
export const LabelRefSchema: GenMessage<LabelRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_label, 2);

/**
 * The fully-qualified name of a Label within a BSR instance.
 *
 * A Name uniquely identifies a Label.
 * This is used for requests when a caller only has the label name and not the ID.
 *
 * @generated from message buf.registry.module.v1.LabelRef.Name
 */
export type LabelRef_Name = Message<"buf.registry.module.v1.LabelRef.Name"> & {
  /**
   * The name of the owner of the Module that contains the Label, either a User or Organization.
   *
   * @generated from field: string owner = 1;
   */
  owner: string;

  /**
   * The name of the Module that contains the Label, either a User or Organization.
   *
   * @generated from field: string module = 2;
   */
  module: string;

  /**
   * The Label name.
   *
   * @generated from field: string label = 3;
   */
  label: string;
};

/**
 * Describes the message buf.registry.module.v1.LabelRef.Name.
 * Use `create(LabelRef_NameSchema)` to create a new message.
 */
export const LabelRef_NameSchema: GenMessage<LabelRef_Name> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_label, 2, 0);

/**
 * A reference to a Label scoped to a Module, either an id or a name.
 *
 * This is used in requests.
 *
 * @generated from message buf.registry.module.v1.ScopedLabelRef
 */
export type ScopedLabelRef = Message<"buf.registry.module.v1.ScopedLabelRef"> & {
  /**
   * @generated from oneof buf.registry.module.v1.ScopedLabelRef.value
   */
  value: {
    /**
     * The id of the Label.
     *
     * @generated from field: string id = 1;
     */
    value: string;
    case: "id";
  } | {
    /**
     * The name of the Label.
     *
     * @generated from field: string name = 2;
     */
    value: string;
    case: "name";
  } | { case: undefined; value?: undefined };
};

/**
 * Describes the message buf.registry.module.v1.ScopedLabelRef.
 * Use `create(ScopedLabelRefSchema)` to create a new message.
 */
export const ScopedLabelRefSchema: GenMessage<ScopedLabelRef> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_label, 3);

/**
 * A check status for a Commit.
 *
 * Policy checks are an enterprise-only feature - contact us to learn more!
 *
 * @generated from enum buf.registry.module.v1.CommitCheckStatus
 */
export enum CommitCheckStatus {
  /**
   * @generated from enum value: COMMIT_CHECK_STATUS_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Policy checks were not enabled when the Commit was created.
   *
   * @generated from enum value: COMMIT_CHECK_STATUS_DISABLED = 1;
   */
  DISABLED = 1,

  /**
   * The Commit did not fail any policy checks and therefore did not need review.
   *
   * @generated from enum value: COMMIT_CHECK_STATUS_PASSED = 2;
   */
  PASSED = 2,

  /**
   * The Commit has not yet been reviewed after failing policy checks and is pending.
   *
   * @generated from enum value: COMMIT_CHECK_STATUS_PENDING = 3;
   */
  PENDING = 3,

  /**
   * The Commit was reviewed after failing policy checks and was rejected.
   *
   * @generated from enum value: COMMIT_CHECK_STATUS_REJECTED = 4;
   */
  REJECTED = 4,

  /**
   * The Commit was reviewed after failing policy checks and was approved.
   *
   * @generated from enum value: COMMIT_CHECK_STATUS_APPROVED = 5;
   */
  APPROVED = 5,
}

/**
 * Describes the enum buf.registry.module.v1.CommitCheckStatus.
 */
export const CommitCheckStatusSchema: GenEnum<CommitCheckStatus> = /*@__PURE__*/
  enumDesc(file_buf_registry_module_v1_label, 0);

