// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const IdentityOidcAuthsSchema = z.object({
  id: z.string().uuid(),
  accessTokenTTL: z.coerce.number().default(7200),
  accessTokenMaxTTL: z.coerce.number().default(7200),
  accessTokenNumUsesLimit: z.coerce.number().default(0),
  accessTokenTrustedIps: z.unknown(),
  identityId: z.string().uuid(),
  oidcDiscoveryUrl: z.string(),
  encryptedCaCert: z.string(),
  caCertIV: z.string(),
  caCertTag: z.string(),
  boundIssuer: z.string(),
  boundAudiences: z.string(),
  boundClaims: z.unknown(),
  boundSubject: z.string().nullable().optional(),
  createdAt: z.date(),
  updatedAt: z.date()
});

export type TIdentityOidcAuths = z.infer<typeof IdentityOidcAuthsSchema>;
export type TIdentityOidcAuthsInsert = Omit<z.input<typeof IdentityOidcAuthsSchema>, TImmutableDBKeys>;
export type TIdentityOidcAuthsUpdate = Partial<Omit<z.input<typeof IdentityOidcAuthsSchema>, TImmutableDBKeys>>;
