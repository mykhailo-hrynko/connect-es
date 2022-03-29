/* eslint-disable */
// @generated by protoc-gen-connect-web v0.0.2-alpha.2 with parameter "ts_nocheck=false,target=ts"
// @generated from file buf/alpha/registry/v1alpha1/resolve.proto (package buf.alpha.registry.v1alpha1, syntax proto3)
//
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

import {GetLocalModulePinsRequest, GetLocalModulePinsResponse, GetModulePinsRequest, GetModulePinsResponse} from "./resolve_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * ResolveService is the resolve service.
 *
 * This is the public service.
 *
 * @generated from service buf.alpha.registry.v1alpha1.ResolveService
 */
export const ResolveService = {
    typeName: "buf.alpha.registry.v1alpha1.ResolveService",
    methods: {
        /**
         * GetModulePins finds all the latest digests and respective dependencies of
         * the provided module references and picks a set of distinct modules pins.
         *
         * Note that module references with commits should still be passed to this function
         * to make sure this function can do dependency resolution.
         *
         * This function also deals with tiebreaking what ModulePin wins for the same repository.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.ResolveService.GetModulePins
         */
        getModulePins: {
            name: "GetModulePins",
            I: GetModulePinsRequest,
            O: GetModulePinsResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

/**
 * LocalResolveService is the local resolve service.
 *
 * This is called by ResolveService implementations, and is enterprise.
 *
 * @generated from service buf.alpha.registry.v1alpha1.LocalResolveService
 */
export const LocalResolveService = {
    typeName: "buf.alpha.registry.v1alpha1.LocalResolveService",
    methods: {
        /**
         * GetLocalModulePins gets the latest pins for the specified local module references.
         * It also includes all of the modules transitive dependencies for the specified references.
         *
         * We want this for two reasons:
         *
         * 1. It makes it easy to say "we know we're looking for owner/repo on this specific remote".
         *    While we could just do this in GetModulePins by being aware of what our remote is
         *    (something we probably still need to know, DNS problems aside, which are more
         *    theoretical), this helps.
         * 2. Having a separate method makes us able to say "do not make decisions about what
         *    wins between competing pins for the same repo". This should only be done in
         *    GetModulePins, not in this function, i.e. only done at the top level.
         *
         * @generated from rpc buf.alpha.registry.v1alpha1.LocalResolveService.GetLocalModulePins
         */
        getLocalModulePins: {
            name: "GetLocalModulePins",
            I: GetLocalModulePinsRequest,
            O: GetLocalModulePinsResponse,
            kind: MethodKind.Unary,
        },
    }
} as const;

