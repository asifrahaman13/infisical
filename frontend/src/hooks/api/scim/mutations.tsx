import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@app/config/request";
import {
    CreateScimTokenDTO,
    CreateScimTokenRes,
    DeleteScimTokenDTO
} from "./types";
import { scimKeys } from "./queries";

export const useCreateScimToken = () => {
    const queryClient = useQueryClient();
    return useMutation<CreateScimTokenRes, {}, CreateScimTokenDTO>({
        mutationFn: async ({
            organizationId,
            description,
            ttlDays
        }) => {
            const { data } = await apiRequest.post("/api/v1/scim/scim-tokens", {
                organizationId,
                description,
                ttlDays
            });
            
            return data;
        },
        onSuccess: (_, { organizationId }) => {
            queryClient.invalidateQueries(scimKeys.getScimTokens(organizationId));
        }
    });
};

export const useDeleteScimToken = () => {
    const queryClient = useQueryClient();
    return useMutation<CreateScimTokenRes, {}, DeleteScimTokenDTO>({
        mutationFn: async ({
            organizationId,
            scimTokenId
        }) => {
            const { data } = await apiRequest.delete(`/api/v1/scim/scim-tokens/${scimTokenId}`);
            return data;
        },
        onSuccess: (_, { organizationId }) => {
            queryClient.invalidateQueries(scimKeys.getScimTokens(organizationId));
        }
    });
};