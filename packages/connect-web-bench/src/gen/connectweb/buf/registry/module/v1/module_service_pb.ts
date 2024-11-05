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

// @generated by protoc-gen-es v2.2.2 with parameter "target=ts"
// @generated from file buf/registry/module/v1/module_service.proto (package buf.registry.module.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Module, ModuleRef, ModuleState, ModuleVisibility } from "./module_pb";
import { file_buf_registry_module_v1_module } from "./module_pb";
import type { OwnerRef } from "../../owner/v1/owner_pb";
import { file_buf_registry_owner_v1_owner } from "../../owner/v1/owner_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1/module_service.proto.
 */
export const file_buf_registry_module_v1_module_service: GenFile = /*@__PURE__*/
  fileDesc("CitidWYvcmVnaXN0cnkvbW9kdWxlL3YxL21vZHVsZV9zZXJ2aWNlLnByb3RvEhZidWYucmVnaXN0cnkubW9kdWxlLnYxIlgKEUdldE1vZHVsZXNSZXF1ZXN0EkMKC21vZHVsZV9yZWZzGAEgAygLMiEuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5Nb2R1bGVSZWZCC7pICJIBBQgBEPoBIk8KEkdldE1vZHVsZXNSZXNwb25zZRI5Cgdtb2R1bGVzGAEgAygLMh4uYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5Nb2R1bGVCCLpIBZIBAggBIqYCChJMaXN0TW9kdWxlc1JlcXVlc3QSGwoJcGFnZV9zaXplGAEgASgNQgi6SAUqAxj6ARIcCgpwYWdlX3Rva2VuGAIgASgJQgi6SAVyAxiAIBIzCgpvd25lcl9yZWZzGAMgAygLMh8uYnVmLnJlZ2lzdHJ5Lm93bmVyLnYxLk93bmVyUmVmEkkKBW9yZGVyGAQgASgOMjAuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5MaXN0TW9kdWxlc1JlcXVlc3QuT3JkZXJCCLpIBYIBAhABIlUKBU9yZGVyEhUKEU9SREVSX1VOU1BFQ0lGSUVEEAASGgoWT1JERVJfQ1JFQVRFX1RJTUVfREVTQxABEhkKFU9SREVSX0NSRUFURV9USU1FX0FTQxACImkKE0xpc3RNb2R1bGVzUmVzcG9uc2USIQoPbmV4dF9wYWdlX3Rva2VuGAEgASgJQgi6SAVyAxiAIBIvCgdtb2R1bGVzGAIgAygLMh4uYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5Nb2R1bGUi8wIKFENyZWF0ZU1vZHVsZXNSZXF1ZXN0Ek8KBnZhbHVlcxgBIAMoCzIyLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuQ3JlYXRlTW9kdWxlc1JlcXVlc3QuVmFsdWVCC7pICJIBBQgBEPoBGokCCgVWYWx1ZRI6Cglvd25lcl9yZWYYASABKAsyHy5idWYucmVnaXN0cnkub3duZXIudjEuT3duZXJSZWZCBrpIA8gBARIXCgRuYW1lGAIgASgJQgm6SAZyBBACGGQSSQoKdmlzaWJpbGl0eRgDIAEoDjIoLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuTW9kdWxlVmlzaWJpbGl0eUILukgIyAEBggECEAESHQoLZGVzY3JpcHRpb24YBCABKAlCCLpIBXIDGN4CEhsKA3VybBgFIAEoCUIOukgL2AEBcgYY/wGIAQESJAoSZGVmYXVsdF9sYWJlbF9uYW1lGAYgASgJQgi6SAVyAxj6ASJSChVDcmVhdGVNb2R1bGVzUmVzcG9uc2USOQoHbW9kdWxlcxgBIAMoCzIeLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuTW9kdWxlQgi6SAWSAQIIASKBBAoUVXBkYXRlTW9kdWxlc1JlcXVlc3QSTwoGdmFsdWVzGAEgAygLMjIuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5VcGRhdGVNb2R1bGVzUmVxdWVzdC5WYWx1ZUILukgIkgEFCAEQ+gEalwMKBVZhbHVlEj0KCm1vZHVsZV9yZWYYASABKAsyIS5idWYucmVnaXN0cnkubW9kdWxlLnYxLk1vZHVsZVJlZkIGukgDyAEBEk4KCnZpc2liaWxpdHkYAyABKA4yKC5idWYucmVnaXN0cnkubW9kdWxlLnYxLk1vZHVsZVZpc2liaWxpdHlCC7pICIIBBRABIgEASACIAQESRAoFc3RhdGUYBCABKA4yIy5idWYucmVnaXN0cnkubW9kdWxlLnYxLk1vZHVsZVN0YXRlQgu6SAiCAQUQASIBAEgBiAEBEiIKC2Rlc2NyaXB0aW9uGAUgASgJQgi6SAVyAxjeAkgCiAEBEiAKA3VybBgGIAEoCUIOukgL2AECcgYY/wGIAQFIA4gBARIrChJkZWZhdWx0X2xhYmVsX25hbWUYByABKAlCCrpIB3IFEAEY+gFIBIgBAUINCgtfdmlzaWJpbGl0eUIICgZfc3RhdGVCDgoMX2Rlc2NyaXB0aW9uQgYKBF91cmxCFQoTX2RlZmF1bHRfbGFiZWxfbmFtZSJSChVVcGRhdGVNb2R1bGVzUmVzcG9uc2USOQoHbW9kdWxlcxgBIAMoCzIeLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuTW9kdWxlQgi6SAWSAQIIASJbChREZWxldGVNb2R1bGVzUmVxdWVzdBJDCgttb2R1bGVfcmVmcxgBIAMoCzIhLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuTW9kdWxlUmVmQgu6SAiSAQUIARD6ASIXChVEZWxldGVNb2R1bGVzUmVzcG9uc2UyvwQKDU1vZHVsZVNlcnZpY2USaAoKR2V0TW9kdWxlcxIpLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuR2V0TW9kdWxlc1JlcXVlc3QaKi5idWYucmVnaXN0cnkubW9kdWxlLnYxLkdldE1vZHVsZXNSZXNwb25zZSIDkAIBEmsKC0xpc3RNb2R1bGVzEiouYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5MaXN0TW9kdWxlc1JlcXVlc3QaKy5idWYucmVnaXN0cnkubW9kdWxlLnYxLkxpc3RNb2R1bGVzUmVzcG9uc2UiA5ACARJxCg1DcmVhdGVNb2R1bGVzEiwuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5DcmVhdGVNb2R1bGVzUmVxdWVzdBotLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuQ3JlYXRlTW9kdWxlc1Jlc3BvbnNlIgOQAgIScQoNVXBkYXRlTW9kdWxlcxIsLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuVXBkYXRlTW9kdWxlc1JlcXVlc3QaLS5idWYucmVnaXN0cnkubW9kdWxlLnYxLlVwZGF0ZU1vZHVsZXNSZXNwb25zZSIDkAICEnEKDURlbGV0ZU1vZHVsZXMSLC5idWYucmVnaXN0cnkubW9kdWxlLnYxLkRlbGV0ZU1vZHVsZXNSZXF1ZXN0Gi0uYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5EZWxldGVNb2R1bGVzUmVzcG9uc2UiA5ACAkJOWkxidWYuYnVpbGQvZ2VuL2dvL2J1ZmJ1aWxkL3JlZ2lzdHJ5L3Byb3RvY29sYnVmZmVycy9nby9idWYvcmVnaXN0cnkvbW9kdWxlL3YxYgZwcm90bzM", [file_buf_registry_module_v1_module, file_buf_registry_owner_v1_owner, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.module.v1.GetModulesRequest
 */
export type GetModulesRequest = Message<"buf.registry.module.v1.GetModulesRequest"> & {
  /**
   * The Modules to request.
   *
   * @generated from field: repeated buf.registry.module.v1.ModuleRef module_refs = 1;
   */
  moduleRefs: ModuleRef[];
};

/**
 * Describes the message buf.registry.module.v1.GetModulesRequest.
 * Use `create(GetModulesRequestSchema)` to create a new message.
 */
export const GetModulesRequestSchema: GenMessage<GetModulesRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 0);

/**
 * @generated from message buf.registry.module.v1.GetModulesResponse
 */
export type GetModulesResponse = Message<"buf.registry.module.v1.GetModulesResponse"> & {
  /**
   * The retrieved Modules in the same order as requested.
   *
   * @generated from field: repeated buf.registry.module.v1.Module modules = 1;
   */
  modules: Module[];
};

/**
 * Describes the message buf.registry.module.v1.GetModulesResponse.
 * Use `create(GetModulesResponseSchema)` to create a new message.
 */
export const GetModulesResponseSchema: GenMessage<GetModulesResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 1);

/**
 * @generated from message buf.registry.module.v1.ListModulesRequest
 */
export type ListModulesRequest = Message<"buf.registry.module.v1.ListModulesRequest"> & {
  /**
   * The maximum number of items to return.
   *
   * The default value is 10.
   *
   * @generated from field: uint32 page_size = 1;
   */
  pageSize: number;

  /**
   * The page to start from.
   *
   * If empty, the first page is returned,
   *
   * @generated from field: string page_token = 2;
   */
  pageToken: string;

  /**
   * The specific Users or Organizations to list Modules for.
   *
   * If empty, all Modules for all owners are listed, but this functionality
   * is limited to Users with the necessary permissions.
   *
   * @generated from field: repeated buf.registry.owner.v1.OwnerRef owner_refs = 3;
   */
  ownerRefs: OwnerRef[];

  /**
   * The order to return the Modules.
   *
   * If not specified, defaults to ORDER_CREATE_TIME_DESC.
   *
   * @generated from field: buf.registry.module.v1.ListModulesRequest.Order order = 4;
   */
  order: ListModulesRequest_Order;
};

/**
 * Describes the message buf.registry.module.v1.ListModulesRequest.
 * Use `create(ListModulesRequestSchema)` to create a new message.
 */
export const ListModulesRequestSchema: GenMessage<ListModulesRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 2);

/**
 * The list order.
 *
 * @generated from enum buf.registry.module.v1.ListModulesRequest.Order
 */
export enum ListModulesRequest_Order {
  /**
   * @generated from enum value: ORDER_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Order by create_time newest to oldest.
   *
   * @generated from enum value: ORDER_CREATE_TIME_DESC = 1;
   */
  CREATE_TIME_DESC = 1,

  /**
   * Order by create_time oldest to newest.
   *
   * @generated from enum value: ORDER_CREATE_TIME_ASC = 2;
   */
  CREATE_TIME_ASC = 2,
}

/**
 * Describes the enum buf.registry.module.v1.ListModulesRequest.Order.
 */
export const ListModulesRequest_OrderSchema: GenEnum<ListModulesRequest_Order> = /*@__PURE__*/
  enumDesc(file_buf_registry_module_v1_module_service, 2, 0);

/**
 * @generated from message buf.registry.module.v1.ListModulesResponse
 */
export type ListModulesResponse = Message<"buf.registry.module.v1.ListModulesResponse"> & {
  /**
   * The next page token.
   *
   * If empty, there are no more pages.
   *
   * @generated from field: string next_page_token = 1;
   */
  nextPageToken: string;

  /**
   * The listed Modules.
   *
   * @generated from field: repeated buf.registry.module.v1.Module modules = 2;
   */
  modules: Module[];
};

/**
 * Describes the message buf.registry.module.v1.ListModulesResponse.
 * Use `create(ListModulesResponseSchema)` to create a new message.
 */
export const ListModulesResponseSchema: GenMessage<ListModulesResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 3);

/**
 * @generated from message buf.registry.module.v1.CreateModulesRequest
 */
export type CreateModulesRequest = Message<"buf.registry.module.v1.CreateModulesRequest"> & {
  /**
   * The Modules to create.
   *
   * @generated from field: repeated buf.registry.module.v1.CreateModulesRequest.Value values = 1;
   */
  values: CreateModulesRequest_Value[];
};

/**
 * Describes the message buf.registry.module.v1.CreateModulesRequest.
 * Use `create(CreateModulesRequestSchema)` to create a new message.
 */
export const CreateModulesRequestSchema: GenMessage<CreateModulesRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 4);

/**
 * An individual request to create a Module.
 *
 * @generated from message buf.registry.module.v1.CreateModulesRequest.Value
 */
export type CreateModulesRequest_Value = Message<"buf.registry.module.v1.CreateModulesRequest.Value"> & {
  /**
   * The User or Organization to create the Module under.
   *
   * @generated from field: buf.registry.owner.v1.OwnerRef owner_ref = 1;
   */
  ownerRef?: OwnerRef;

  /**
   * The name of the Module.
   *
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * The module's visibility.
   *
   * @generated from field: buf.registry.module.v1.ModuleVisibility visibility = 3;
   */
  visibility: ModuleVisibility;

  /**
   * The configurable description of the Module.
   *
   * @generated from field: string description = 4;
   */
  description: string;

  /**
   * The configurable URL in the description of the module.
   *
   * @generated from field: string url = 5;
   */
  url: string;

  /**
   * The name of the default Label of the Module.
   *
   * If not set, the default Label will be named "main" upon creation.
   *
   * This may point to an archived Label.
   *
   * @generated from field: string default_label_name = 6;
   */
  defaultLabelName: string;
};

/**
 * Describes the message buf.registry.module.v1.CreateModulesRequest.Value.
 * Use `create(CreateModulesRequest_ValueSchema)` to create a new message.
 */
export const CreateModulesRequest_ValueSchema: GenMessage<CreateModulesRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 4, 0);

/**
 * @generated from message buf.registry.module.v1.CreateModulesResponse
 */
export type CreateModulesResponse = Message<"buf.registry.module.v1.CreateModulesResponse"> & {
  /**
   * The created Modules in the same order as given on the request.
   *
   * @generated from field: repeated buf.registry.module.v1.Module modules = 1;
   */
  modules: Module[];
};

/**
 * Describes the message buf.registry.module.v1.CreateModulesResponse.
 * Use `create(CreateModulesResponseSchema)` to create a new message.
 */
export const CreateModulesResponseSchema: GenMessage<CreateModulesResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 5);

/**
 * @generated from message buf.registry.module.v1.UpdateModulesRequest
 */
export type UpdateModulesRequest = Message<"buf.registry.module.v1.UpdateModulesRequest"> & {
  /**
   * The Modules to update.
   *
   * @generated from field: repeated buf.registry.module.v1.UpdateModulesRequest.Value values = 1;
   */
  values: UpdateModulesRequest_Value[];
};

/**
 * Describes the message buf.registry.module.v1.UpdateModulesRequest.
 * Use `create(UpdateModulesRequestSchema)` to create a new message.
 */
export const UpdateModulesRequestSchema: GenMessage<UpdateModulesRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 6);

/**
 * An individual request to update a Module.
 *
 * @generated from message buf.registry.module.v1.UpdateModulesRequest.Value
 */
export type UpdateModulesRequest_Value = Message<"buf.registry.module.v1.UpdateModulesRequest.Value"> & {
  /**
   * The Module to update.
   *
   * @generated from field: buf.registry.module.v1.ModuleRef module_ref = 1;
   */
  moduleRef?: ModuleRef;

  /**
   * The module's visibility.
   *
   * @generated from field: optional buf.registry.module.v1.ModuleVisibility visibility = 3;
   */
  visibility?: ModuleVisibility;

  /**
   * The deprecation status of the module.
   *
   * @generated from field: optional buf.registry.module.v1.ModuleState state = 4;
   */
  state?: ModuleState;

  /**
   * The configurable description of the module.
   *
   * @generated from field: optional string description = 5;
   */
  description?: string;

  /**
   * The configurable URL in the description of the module.
   *
   * @generated from field: optional string url = 6;
   */
  url?: string;

  /**
   * The name of the default Label of the Module.
   *
   * This Label may not yet exist.
   *
   * This may not point to an archived Label.
   *
   * @generated from field: optional string default_label_name = 7;
   */
  defaultLabelName?: string;
};

/**
 * Describes the message buf.registry.module.v1.UpdateModulesRequest.Value.
 * Use `create(UpdateModulesRequest_ValueSchema)` to create a new message.
 */
export const UpdateModulesRequest_ValueSchema: GenMessage<UpdateModulesRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 6, 0);

/**
 * @generated from message buf.registry.module.v1.UpdateModulesResponse
 */
export type UpdateModulesResponse = Message<"buf.registry.module.v1.UpdateModulesResponse"> & {
  /**
   * The updated Modules in the same order as given on the request.
   *
   * @generated from field: repeated buf.registry.module.v1.Module modules = 1;
   */
  modules: Module[];
};

/**
 * Describes the message buf.registry.module.v1.UpdateModulesResponse.
 * Use `create(UpdateModulesResponseSchema)` to create a new message.
 */
export const UpdateModulesResponseSchema: GenMessage<UpdateModulesResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 7);

/**
 * @generated from message buf.registry.module.v1.DeleteModulesRequest
 */
export type DeleteModulesRequest = Message<"buf.registry.module.v1.DeleteModulesRequest"> & {
  /**
   * The Modules to delete.
   *
   * @generated from field: repeated buf.registry.module.v1.ModuleRef module_refs = 1;
   */
  moduleRefs: ModuleRef[];
};

/**
 * Describes the message buf.registry.module.v1.DeleteModulesRequest.
 * Use `create(DeleteModulesRequestSchema)` to create a new message.
 */
export const DeleteModulesRequestSchema: GenMessage<DeleteModulesRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 8);

/**
 * @generated from message buf.registry.module.v1.DeleteModulesResponse
 */
export type DeleteModulesResponse = Message<"buf.registry.module.v1.DeleteModulesResponse"> & {
};

/**
 * Describes the message buf.registry.module.v1.DeleteModulesResponse.
 * Use `create(DeleteModulesResponseSchema)` to create a new message.
 */
export const DeleteModulesResponseSchema: GenMessage<DeleteModulesResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_module_service, 9);

/**
 * Operate on Modules.
 *
 * @generated from service buf.registry.module.v1.ModuleService
 */
export const ModuleService: GenService<{
  /**
   * Get Modules by id or name.
   *
   * @generated from rpc buf.registry.module.v1.ModuleService.GetModules
   */
  getModules: {
    methodKind: "unary";
    input: typeof GetModulesRequestSchema;
    output: typeof GetModulesResponseSchema;
  },
  /**
   * List Modules, usually for a specific User or Organization.
   *
   * @generated from rpc buf.registry.module.v1.ModuleService.ListModules
   */
  listModules: {
    methodKind: "unary";
    input: typeof ListModulesRequestSchema;
    output: typeof ListModulesResponseSchema;
  },
  /**
   * Create new Modules.
   *
   * When a Module is created, a Branch representing the release Branch
   * is created as well.
   *
   * This operation is atomic. Either all Modules are created or an error is returned.
   *
   * @generated from rpc buf.registry.module.v1.ModuleService.CreateModules
   */
  createModules: {
    methodKind: "unary";
    input: typeof CreateModulesRequestSchema;
    output: typeof CreateModulesResponseSchema;
  },
  /**
   * Update existing Modules.
   *
   * This operation is atomic. Either all Modules are updated or an error is returned.
   *
   * @generated from rpc buf.registry.module.v1.ModuleService.UpdateModules
   */
  updateModules: {
    methodKind: "unary";
    input: typeof UpdateModulesRequestSchema;
    output: typeof UpdateModulesResponseSchema;
  },
  /**
   * Delete existing Modules.
   *
   * This operation is atomic. Either all Modules are deleted or an error is returned.
   *
   * @generated from rpc buf.registry.module.v1.ModuleService.DeleteModules
   */
  deleteModules: {
    methodKind: "unary";
    input: typeof DeleteModulesRequestSchema;
    output: typeof DeleteModulesResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_buf_registry_module_v1_module_service, 0);

