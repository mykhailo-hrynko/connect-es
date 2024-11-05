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
// @generated from file buf/registry/module/v1/download_service.proto (package buf.registry.module.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Commit } from "./commit_pb";
import { file_buf_registry_module_v1_commit } from "./commit_pb";
import type { File, FileType } from "./file_pb";
import { file_buf_registry_module_v1_file } from "./file_pb";
import type { ResourceRef } from "./resource_pb";
import { file_buf_registry_module_v1_resource } from "./resource_pb";
import { file_buf_validate_validate } from "../../../validate/validate_pb";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file buf/registry/module/v1/download_service.proto.
 */
export const file_buf_registry_module_v1_download_service: GenFile = /*@__PURE__*/
  fileDesc("Ci1idWYvcmVnaXN0cnkvbW9kdWxlL3YxL2Rvd25sb2FkX3NlcnZpY2UucHJvdG8SFmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEi+wIKD0Rvd25sb2FkUmVxdWVzdBJKCgZ2YWx1ZXMYASADKAsyLS5idWYucmVnaXN0cnkubW9kdWxlLnYxLkRvd25sb2FkUmVxdWVzdC5WYWx1ZUILukgIkgEFCAEQ+gEamwIKBVZhbHVlEkEKDHJlc291cmNlX3JlZhgBIAEoCzIjLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuUmVzb3VyY2VSZWZCBrpIA8gBARJICgpmaWxlX3R5cGVzGAIgAygOMiAuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5GaWxlVHlwZUISukgPkgEMGAEiCIIBBRABIgEAEmYKBXBhdGhzGAMgAygJQle6SFSSAVEiT3JNGIAgMkReKFteLy5dW14vXT98W14vXVteLy5dfFteL117Myx9KSgvKFteLy5dW14vXT98W14vXVteLy5dfFteL117Myx9KSkqJLoBAVwSHQoVcGF0aHNfYWxsb3dfbm90X2V4aXN0GAQgASgIItABChBEb3dubG9hZFJlc3BvbnNlEkwKCGNvbnRlbnRzGAEgAygLMjAuYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5Eb3dubG9hZFJlc3BvbnNlLkNvbnRlbnRCCLpIBZIBAggBGm4KB0NvbnRlbnQSNgoGY29tbWl0GAEgASgLMh4uYnVmLnJlZ2lzdHJ5Lm1vZHVsZS52MS5Db21taXRCBrpIA8gBARIrCgVmaWxlcxgCIAMoCzIcLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuRmlsZTJ1Cg9Eb3dubG9hZFNlcnZpY2USYgoIRG93bmxvYWQSJy5idWYucmVnaXN0cnkubW9kdWxlLnYxLkRvd25sb2FkUmVxdWVzdBooLmJ1Zi5yZWdpc3RyeS5tb2R1bGUudjEuRG93bmxvYWRSZXNwb25zZSIDkAIBQk5aTGJ1Zi5idWlsZC9nZW4vZ28vYnVmYnVpbGQvcmVnaXN0cnkvcHJvdG9jb2xidWZmZXJzL2dvL2J1Zi9yZWdpc3RyeS9tb2R1bGUvdjFiBnByb3RvMw", [file_buf_registry_module_v1_commit, file_buf_registry_module_v1_file, file_buf_registry_module_v1_resource, file_buf_validate_validate]);

/**
 * @generated from message buf.registry.module.v1.DownloadRequest
 */
export type DownloadRequest = Message<"buf.registry.module.v1.DownloadRequest"> & {
  /**
   * The references to get contents for.
   *
   * @generated from field: repeated buf.registry.module.v1.DownloadRequest.Value values = 1;
   */
  values: DownloadRequest_Value[];
};

/**
 * Describes the message buf.registry.module.v1.DownloadRequest.
 * Use `create(DownloadRequestSchema)` to create a new message.
 */
export const DownloadRequestSchema: GenMessage<DownloadRequest> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_download_service, 0);

/**
 * A request for content for a single reference.
 *
 * @generated from message buf.registry.module.v1.DownloadRequest.Value
 */
export type DownloadRequest_Value = Message<"buf.registry.module.v1.DownloadRequest.Value"> & {
  /**
   * The reference to get content for.
   *
   * See the documentation on ResourceRef for resource resolution details.
   *
   * Once the resource is resolved, the following content is returned:
   *   - If a Module is referenced, the content of the Commit of the default Label is returned.
   *   - If a Label is referenced, the content of the Commit of this Label is returned.
   *   - If a Commit is referenced, the content for this Commit is returned.
   *
   * @generated from field: buf.registry.module.v1.ResourceRef resource_ref = 1;
   */
  resourceRef?: ResourceRef;

  /**
   * Specific file types to request.
   *
   * If not set, all file types are returned.
   *
   * @generated from field: repeated buf.registry.module.v1.FileType file_types = 2;
   */
  fileTypes: FileType[];

  /**
   * Specific file paths to retrieve.
   *
   * May be directories. For example, path "foo/bar" will result in files "foo/bar/baz.proto",
   * "foo/bar/LICENSE" being downloaded.
   *
   * If empty, all file paths for the given reference are retrieved.
   *
   * If no paths match, an empty Files list will be returned, however the call may still
   * be successful if paths_allow_not_exist is set (the dependency list may still be on
   * the response). If a directory "foo/bar" is specified but this directory has no files,
   * this is considered to be a non-match.
   *
   * This field also interacts with file_types - if file_types is set, a path only matches
   * if it is also of the file type, and if there are no matching paths for the given FileTypes,
   * an error is returned unless paths_not_allow_exist is set.
   *
   * The path must be relative, and cannot contain any "." or ".." components
   * The separator "/" must be used.
   *
   * @generated from field: repeated string paths = 3;
   */
  paths: string[];

  /**
   * Whether to allow file paths not to exist within the given module.
   *
   * For example, one may want to retrieve the file paths "buf.md" and "README.md",
   * but only expect one to actually exist.
   *
   * If false, it is an error to specify non-existent file paths.
   *
   * @generated from field: bool paths_allow_not_exist = 4;
   */
  pathsAllowNotExist: boolean;
};

/**
 * Describes the message buf.registry.module.v1.DownloadRequest.Value.
 * Use `create(DownloadRequest_ValueSchema)` to create a new message.
 */
export const DownloadRequest_ValueSchema: GenMessage<DownloadRequest_Value> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_download_service, 0, 0);

/**
 * @generated from message buf.registry.module.v1.DownloadResponse
 */
export type DownloadResponse = Message<"buf.registry.module.v1.DownloadResponse"> & {
  /**
   * The Contents of the references in the same order as requested.
   *
   * @generated from field: repeated buf.registry.module.v1.DownloadResponse.Content contents = 1;
   */
  contents: DownloadResponse_Content[];
};

/**
 * Describes the message buf.registry.module.v1.DownloadResponse.
 * Use `create(DownloadResponseSchema)` to create a new message.
 */
export const DownloadResponseSchema: GenMessage<DownloadResponse> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_download_service, 1);

/**
 * Content for a single Commit.
 *
 * @generated from message buf.registry.module.v1.DownloadResponse.Content
 */
export type DownloadResponse_Content = Message<"buf.registry.module.v1.DownloadResponse.Content"> & {
  /**
   * The Commit associated with the Content.
   *
   * The Commit associated with this ID will be present in the commits field.
   *
   * The Commit will use the DigestType specified in the request value.
   *
   * @generated from field: buf.registry.module.v1.Commit commit = 1;
   */
  commit?: Commit;

  /**
   * The Files of the content.
   *
   * This will consist of the .proto files, license files, and documentation files.
   *
   * If no paths match and paths_allow_not_exist is set, this may be empty.
   *
   * @generated from field: repeated buf.registry.module.v1.File files = 2;
   */
  files: File[];
};

/**
 * Describes the message buf.registry.module.v1.DownloadResponse.Content.
 * Use `create(DownloadResponse_ContentSchema)` to create a new message.
 */
export const DownloadResponse_ContentSchema: GenMessage<DownloadResponse_Content> = /*@__PURE__*/
  messageDesc(file_buf_registry_module_v1_download_service, 1, 0);

/**
 * Download contents.
 *
 * @generated from service buf.registry.module.v1.DownloadService
 */
export const DownloadService: GenService<{
  /**
   * Download the contents of multiple Modules, Labels, or Commits.
   *
   * Content consists of the .proto files, license files, and documentation files.
   *
   * @generated from rpc buf.registry.module.v1.DownloadService.Download
   */
  download: {
    methodKind: "unary";
    input: typeof DownloadRequestSchema;
    output: typeof DownloadResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_buf_registry_module_v1_download_service, 0);

