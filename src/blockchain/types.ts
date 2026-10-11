/**
 * Chain-agnostic contracts for the planned trait-lending integration.
 * These interfaces intentionally contain no collection data or transaction logic.
 */
export interface TraitReference {
  collectionAddress: `0x${string}`;
  tokenId: bigint;
  traitKey: string;
}

export interface TraitAuthorization {
  borrower: `0x${string}`;
  expiresAt: number;
  lender: `0x${string}`;
  trait: TraitReference;
}

export interface TraitEntitlementProvider {
  getActiveAuthorizations(account: `0x${string}`): Promise<TraitAuthorization[]>;
  isAuthorized(account: `0x${string}`, trait: TraitReference): Promise<boolean>;
}
