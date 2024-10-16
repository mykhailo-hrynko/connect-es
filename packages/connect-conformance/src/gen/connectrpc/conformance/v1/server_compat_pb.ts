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

// @generated by protoc-gen-es v2.2.0 with parameter "target=ts,import_extension=.js"
// @generated from file connectrpc/conformance/v1/server_compat.proto (package connectrpc.conformance.v1, syntax proto3)
/* eslint-disable */

import type { GenFile, GenMessage } from "@bufbuild/protobuf/codegenv1";
import { fileDesc, messageDesc } from "@bufbuild/protobuf/codegenv1";
import type { HTTPVersion, Protocol, TLSCreds } from "./config_pb.js";
import { file_connectrpc_conformance_v1_config } from "./config_pb.js";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file connectrpc/conformance/v1/server_compat.proto.
 */
export const file_connectrpc_conformance_v1_server_compat: GenFile = /*@__PURE__*/
  fileDesc("Ci1jb25uZWN0cnBjL2NvbmZvcm1hbmNlL3YxL3NlcnZlcl9jb21wYXQucHJvdG8SGWNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEijgIKE1NlcnZlckNvbXBhdFJlcXVlc3QSNQoIcHJvdG9jb2wYASABKA4yIy5jb25uZWN0cnBjLmNvbmZvcm1hbmNlLnYxLlByb3RvY29sEjwKDGh0dHBfdmVyc2lvbhgCIAEoDjImLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuSFRUUFZlcnNpb24SDwoHdXNlX3RscxgEIAEoCBIXCg9jbGllbnRfdGxzX2NlcnQYBSABKAwSHQoVbWVzc2FnZV9yZWNlaXZlX2xpbWl0GAYgASgNEjkKDHNlcnZlcl9jcmVkcxgHIAEoCzIjLmNvbm5lY3RycGMuY29uZm9ybWFuY2UudjEuVExTQ3JlZHMiRAoUU2VydmVyQ29tcGF0UmVzcG9uc2USDAoEaG9zdBgBIAEoCRIMCgRwb3J0GAIgASgNEhAKCHBlbV9jZXJ0GAMgASgMYgZwcm90bzM", [file_connectrpc_conformance_v1_config]);

/**
 * Describes one configuration for an RPC server. The server is
 * expected to expose the connectrpc.conformance.v1.ConformanceService
 * RPC service. The configuration does not include a port. The
 * process should pick an available port, which is typically
 * done by using port zero (0) when creating a network listener
 * so that the OS selects an available ephemeral port.
 *
 * These properties are read from stdin. Once the server is
 * listening, details about the server, in the form of a
 * ServerCompatResponse, are written to stdout.
 *
 * Each test process is expected to start only one RPC server.
 * When testing multiple configurations, multiple test processes
 * will be started, each with different properties.
 *
 * @generated from message connectrpc.conformance.v1.ServerCompatRequest
 */
export type ServerCompatRequest = Message<"connectrpc.conformance.v1.ServerCompatRequest"> & {
  /**
   * Signals to the server that it must support at least this protocol. Note
   * that it is fine to support others.
   * For example if `PROTOCOL_CONNECT` is specified, the server _must_ support
   * at least Connect, but _may_ also support gRPC or gRPC-web.
   *
   * @generated from field: connectrpc.conformance.v1.Protocol protocol = 1;
   */
  protocol: Protocol;

  /**
   * Signals to the server the minimum HTTP version to support. As with
   * `protocol`, it is fine to support other versions. For example, if
   * `HTTP_VERSION_2` is specified, the server _must_ support HTTP/2, but _may_ also
   * support HTTP/1.1 or HTTP/3.
   *
   * @generated from field: connectrpc.conformance.v1.HTTPVersion http_version = 2;
   */
  httpVersion: HTTPVersion;

  /**
   * If true, generate a certificate that clients will be configured to trust
   * when connecting and return it in the `pem_cert` field of the `ServerCompatResponse`.
   * The certificate can be any TLS certificate where the subject matches the
   * value sent back in the `host` field of the `ServerCompatResponse`.
   * Self-signed certificates (and `localhost` as the subject) are allowed.
   * If false, the server should not use TLS and instead use
   * a plain-text/unencrypted socket.
   *
   * @generated from field: bool use_tls = 4;
   */
  useTls: boolean;

  /**
   * If non-empty, the clients will use certificates to authenticate
   * themselves. This value is a PEM-encoded cert that should be
   * trusted by the server. When non-empty, the server should require
   * that clients provide certificates and they should validate that
   * the certificate presented is valid.
   *
   * This will always be empty if use_tls is false.
   *
   * @generated from field: bytes client_tls_cert = 5;
   */
  clientTlsCert: Uint8Array;

  /**
   * If non-zero, indicates the maximum size in bytes for a message.
   * If the client sends anything larger, the server should reject it.
   *
   * @generated from field: uint32 message_receive_limit = 6;
   */
  messageReceiveLimit: number;

  /**
   * If use_tls is true, this provides details for a self-signed TLS
   * cert that the server may use.
   *
   * The provided certificate is only good for loopback communication:
   * it uses "localhost" and "127.0.0.1" as the IP and DNS names in
   * the certificate's subject. If the server needs a different subject
   * or the client is in an environment where configuring trust of a
   * self-signed certificate is difficult or infeasible.
   *
   * If the server implementation chooses to use these credentials,
   * it must echo back the certificate in the ServerCompatResponse and
   * should also leave the host field empty or explicitly set to
   * "127.0.0.1".
   *
   * If it chooses to use a different certificate and key, it must send
   * back the corresponding certificate in the ServerCompatResponse.
   *
   * @generated from field: connectrpc.conformance.v1.TLSCreds server_creds = 7;
   */
  serverCreds?: TLSCreds;
};

/**
 * Describes the message connectrpc.conformance.v1.ServerCompatRequest.
 * Use `create(ServerCompatRequestSchema)` to create a new message.
 */
export const ServerCompatRequestSchema: GenMessage<ServerCompatRequest> = /*@__PURE__*/
  messageDesc(file_connectrpc_conformance_v1_server_compat, 0);

/**
 * The outcome of one ServerCompatRequest.
 *
 * @generated from message connectrpc.conformance.v1.ServerCompatResponse
 */
export type ServerCompatResponse = Message<"connectrpc.conformance.v1.ServerCompatResponse"> & {
  /**
   * The host where the server is running. This should usually be `127.0.0.1`,
   * unless your program actually starts a remote server to which the client
   * should connect.
   *
   * @generated from field: string host = 1;
   */
  host: string;

  /**
   * The port where the server is listening.
   *
   * @generated from field: uint32 port = 2;
   */
  port: number;

  /**
   * The TLS certificate, in PEM format, if `use_tls` was set
   * to `true`. Clients will verify this certificate when connecting via TLS.
   * If `use_tls` was set to `false`, this should always be empty.
   *
   * @generated from field: bytes pem_cert = 3;
   */
  pemCert: Uint8Array;
};

/**
 * Describes the message connectrpc.conformance.v1.ServerCompatResponse.
 * Use `create(ServerCompatResponseSchema)` to create a new message.
 */
export const ServerCompatResponseSchema: GenMessage<ServerCompatResponse> = /*@__PURE__*/
  messageDesc(file_connectrpc_conformance_v1_server_compat, 1);

