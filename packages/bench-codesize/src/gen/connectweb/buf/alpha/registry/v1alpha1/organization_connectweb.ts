// Copyright 2020-2022 Buf Technologies, Inc.
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

// @generated by protoc-gen-connect-web v0.0.7 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/organization.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
/* eslint-disable */

import {AddOrganizationMemberRequest, AddOrganizationMemberResponse, CreateOrganizationRequest, CreateOrganizationResponse, DeleteOrganizationByNameRequest, DeleteOrganizationByNameResponse, DeleteOrganizationRequest, DeleteOrganizationResponse, GetOrganizationByNameRequest, GetOrganizationByNameResponse, GetOrganizationRequest, GetOrganizationResponse, GetOrganizationSettingsRequest, GetOrganizationSettingsResponse, ListOrganizationsRequest, ListOrganizationsResponse, ListUserOrganizationsRequest, ListUserOrganizationsResponse, RemoveOrganizationMemberRequest, RemoveOrganizationMemberResponse, SetOrganizationMemberRequest, SetOrganizationMemberResponse, UpdateOrganizationMemberRequest, UpdateOrganizationMemberResponse, UpdateOrganizationSettingsRequest, UpdateOrganizationSettingsResponse} from "./organization_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * OrganizationService is the Organization service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.OrganizationService
 */
export const OrganizationService = {
  typeName: "buf.alpha.registry.v1alpha1.OrganizationService",
  methods: {
    /**
     * GetOrganization gets a organization by ID.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganization
     */
    getOrganization: {
      name: "GetOrganization",
      I: GetOrganizationRequest,
      O: GetOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationByName gets a organization by name.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganizationByName
     */
    getOrganizationByName: {
      name: "GetOrganizationByName",
      I: GetOrganizationByNameRequest,
      O: GetOrganizationByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListOrganizations lists all organizations.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.ListOrganizations
     */
    listOrganizations: {
      name: "ListOrganizations",
      I: ListOrganizationsRequest,
      O: ListOrganizationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * ListUserOrganizations lists all organizations a user is member of.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.ListUserOrganizations
     */
    listUserOrganizations: {
      name: "ListUserOrganizations",
      I: ListUserOrganizationsRequest,
      O: ListUserOrganizationsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * CreateOrganization creates a new organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.CreateOrganization
     */
    createOrganization: {
      name: "CreateOrganization",
      I: CreateOrganizationRequest,
      O: CreateOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOrganization deletes a organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.DeleteOrganization
     */
    deleteOrganization: {
      name: "DeleteOrganization",
      I: DeleteOrganizationRequest,
      O: DeleteOrganizationResponse,
      kind: MethodKind.Unary,
    },
    /**
     * DeleteOrganizationByName deletes a organization by name.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.DeleteOrganizationByName
     */
    deleteOrganizationByName: {
      name: "DeleteOrganizationByName",
      I: DeleteOrganizationByNameRequest,
      O: DeleteOrganizationByNameResponse,
      kind: MethodKind.Unary,
    },
    /**
     * AddOrganizationMember add a role to an user in the organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.AddOrganizationMember
     */
    addOrganizationMember: {
      name: "AddOrganizationMember",
      I: AddOrganizationMemberRequest,
      O: AddOrganizationMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrganizationMember update the user's membership information in the organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.UpdateOrganizationMember
     */
    updateOrganizationMember: {
      name: "UpdateOrganizationMember",
      I: UpdateOrganizationMemberRequest,
      O: UpdateOrganizationMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * RemoveOrganizationMember remove the role of an user in the organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.RemoveOrganizationMember
     */
    removeOrganizationMember: {
      name: "RemoveOrganizationMember",
      I: RemoveOrganizationMemberRequest,
      O: RemoveOrganizationMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * SetOrganizationMember sets the role of a user in the organization.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.SetOrganizationMember
     */
    setOrganizationMember: {
      name: "SetOrganizationMember",
      I: SetOrganizationMemberRequest,
      O: SetOrganizationMemberResponse,
      kind: MethodKind.Unary,
    },
    /**
     * GetOrganizationSettings gets the settings of an organization, including organization base roles.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.GetOrganizationSettings
     */
    getOrganizationSettings: {
      name: "GetOrganizationSettings",
      I: GetOrganizationSettingsRequest,
      O: GetOrganizationSettingsResponse,
      kind: MethodKind.Unary,
    },
    /**
     * UpdateOrganizationSettings update the organization settings including base roles.
     *
     * @generated from rpc buf.alpha.registry.v1alpha1.OrganizationService.UpdateOrganizationSettings
     */
    updateOrganizationSettings: {
      name: "UpdateOrganizationSettings",
      I: UpdateOrganizationSettingsRequest,
      O: UpdateOrganizationSettingsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

