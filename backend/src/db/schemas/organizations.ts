// Code generated by automation script, DO NOT EDIT.
// Automated by pulling database and generating zod schema
// To update. Just run npm run generate:schema
// Written by akhilmhdh.

import { z } from "zod";

import { TImmutableDBKeys } from "./models";

export const OrganizationsSchema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  customerId: z.string().nullable().optional(),
  slug: z.string(),
  createdAt: z.date(),
  updatedAt: z.date(),
  authEnforced: z.boolean().default(false).nullable().optional(),
  scimEnabled: z.boolean().default(false).nullable().optional()
});

export type TOrganizations = z.infer<typeof OrganizationsSchema>;
export type TOrganizationsInsert = Omit<TOrganizations, TImmutableDBKeys>;
export type TOrganizationsUpdate = Partial<Omit<TOrganizations, TImmutableDBKeys>>;
