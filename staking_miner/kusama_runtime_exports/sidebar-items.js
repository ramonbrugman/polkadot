initSidebarItems({"constant":[["BABE_GENESIS_EPOCH_CONFIG","The BABE epoch configuration at genesis."],["VERSION","Runtime version (Kusama)."],["WASM_BINARY",""],["WASM_BINARY_BLOATY",""]],"enum":[["BalancesCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Call",""],["EPMCall","Contains one variant per dispatchable that can be called by an extrinsic."],["Event",""],["OriginCaller",""],["ProxyType","The type used to represent the kinds of proxying allowed."],["StakerStatus","Indicates the initial status of the staker."],["TimestampCall","Contains one variant per dispatchable that can be called by an extrinsic."]],"fn":[["native_version","Native version."]],"mod":[["api",""],["constants","Constant values used within the runtime."],["private",""]],"struct":[["Ancestry","Our XCM location ancestry - i.e. what, if anything, `Parent` means evaluated in our context. Since Kusama is a top-level relay-chain, there is no ancestry."],["AnnouncementDepositBase",""],["AnnouncementDepositFactor",""],["BagThresholds",""],["BaseFilter","Don’t allow swaps until parathread story is more mature."],["BaseXcmWeight","The amount of weight an XCM operation takes. This is a safe overestimate."],["BasicDeposit",""],["BondingDuration",""],["BountyCuratorDeposit",""],["BountyDepositBase",""],["BountyDepositPayoutDelay",""],["BountyUpdatePeriod",""],["BountyValueMinimum",""],["Burn",""],["CandidacyBond",""],["CandidateDeposit",""],["ChallengePeriod",""],["CheckAccount","The check account, which holds any native assets that have been teleported out and not back in (yet)."],["ConfigDepositBase",""],["CooloffPeriod",""],["CouncilBodyId",""],["CouncilMaxMembers",""],["CouncilMaxProposals",""],["CouncilMotionDuration",""],["CrowdloanId",""],["DataDepositPerByte",""],["DepositBase",""],["DepositFactor",""],["DesiredMembers",""],["DesiredRunnersUp",""],["EnactmentPeriod",""],["EndingPeriod",""],["EpochDuration",""],["EraPayout",""],["ExistentialDeposit",""],["ExpectedBlockTime",""],["FastTrackVotingPeriod",""],["FieldDeposit",""],["FifoQueueLen",""],["FirstMessageFactorPercent",""],["FriendDepositFactor",""],["GenesisConfig",""],["GiltPeriod",""],["IgnoredIssuance",""],["ImOnlineUnsignedPriority",""],["IndexDeposit",""],["InstantAllowed",""],["IntakePeriod",""],["KsmLocation","The location of the KSM token, from the context of this chain. Since this token is native to this chain, we make it synonymous with it and thus it is the `Here` location, which means “equivalent to the context”."],["Kusama",""],["KusamaForStatemine",""],["KusamaNetwork","The Kusama network ID. This is named."],["LaunchPeriod",""],["LeasePeriod",""],["MaxAdditionalFields",""],["MaxApprovals",""],["MaxAuthorities",""],["MaxCandidateIntake",""],["MaxFriends",""],["MaxInstructions","Maximum number of instructions in a single XCM fragment. A sanity check against weight calculations getting too crazy."],["MaxIntakeBids",""],["MaxKeys",""],["MaxLockDuration",""],["MaxLocks",""],["MaxMemoLength",""],["MaxNominatorRewardedPerValidator",""],["MaxPeerDataEncodingSize",""],["MaxPeerInHeartbeats",""],["MaxPending",""],["MaxProposals",""],["MaxProxies",""],["MaxQueueLen",""],["MaxRegistrars",""],["MaxReserves",""],["MaxScheduledPerBlock",""],["MaxSignatories",""],["MaxStrikes",""],["MaxSubAccounts",""],["MaxVotes",""],["MaximumReasonLength",""],["MaximumSchedulerWeight",""],["MinContribution",""],["MinFreeze",""],["MinVestedTransfer",""],["MinimumDeposit",""],["MinimumPeriod",""],["NposCompactSolution24",""],["NposSolutionPriority",""],["OffchainRepeat",""],["OffendingValidatorsThreshold",""],["Offset",""],["OnlyParachains",""],["OperationalFeeMultiplier","This value increases the priority of `Operational` transactions by adding a “virtual tip” that’s equal to the `OperationalFeeMultiplier * final_fee`."],["Origin","The runtime origin type represanting the origin of a call."],["OriginPrivilegeCmp","Used the compare the privilege of an origin inside the scheduler."],["PalletInfo","Provides an implementation of `PalletInfo` to provide information about the pallet setup in the runtime."],["ParaDeposit",""],["Period",""],["PeriodSpend",""],["PhragmenElectionPalletId",""],["Prefix",""],["PreimageByteDeposit",""],["ProposalBond",""],["ProposalBondMinimum",""],["ProxyDepositBase",""],["ProxyDepositFactor",""],["QueueCount",""],["RecoveryDeposit",""],["RemoveKeysLimit",""],["ReportLongevity",""],["RotationPeriod",""],["Runtime",""],["RuntimeApi",""],["RuntimeApiImpl","Implements all runtime apis for the client side."],["SS58Prefix",""],["SampleLength",""],["SessionKeys",""],["SessionsPerEra",""],["SignedDepositBase",""],["SignedDepositByte",""],["SignedMaxSubmissions",""],["SignedPhase",""],["SignedRewardBase",""],["SlashDeferDuration",""],["SocietyPalletId",""],["SolutionImprovementThreshold",""],["SpendPeriod",""],["SubAccountDeposit",""],["SubmissionDeposit",""],["TechnicalMaxMembers",""],["TechnicalMaxProposals",""],["TechnicalMotionDuration",""],["TermDuration","Daily council elections"],["TipCountdown",""],["TipFindersFee",""],["TipReportDepositBase",""],["TransactionByteFee",""],["TreasuryPalletId",""],["UncleGenerations",""],["UnsignedPhase",""],["Version",""],["VoterSnapshotPerBlock","Whilst `UseNominatorsAndUpdateBagsList` or `UseNominatorsMap` is in use, this can still be a very large value. Once the `BagsList` is in full motion, staking might open its door to many more nominators, and this value should instead be what is a “safe” number (e.g. 22500)."],["VotingBondBase",""],["VotingBondFactor",""],["VotingPeriod",""],["WrongSideDeduction",""],["XcmConfig",""]],"trait":[["BuildStorage","Complex storage builder stuff."]],"type":[["Address","The address format for describing accounts."],["AllModules","All modules included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllModulesWithSystem","All modules included in the runtime as a nested tuple of types."],["AllPallets","All pallets included in the runtime as a nested tuple of types. Excludes the System pallet."],["AllPalletsWithSystem","All pallets included in the runtime as a nested tuple of types."],["Auctions",""],["AuthorityDiscovery",""],["AuthorityDiscoveryConfig",""],["Authorship",""],["Babe",""],["BabeConfig",""],["BagsList",""],["Balances",""],["BalancesConfig",""],["Barrier","The barriers one of which must be passed for an XCM message to be executed."],["Block","Block type as expected by this runtime."],["BlockId","`BlockId` type as expected by this runtime."],["Bounties",""],["Claims",""],["ClaimsConfig",""],["Configuration",""],["ConfigurationConfig",""],["Council",""],["CouncilConfig",""],["Crowdloan",""],["Democracy",""],["DemocracyConfig",""],["Dmp",""],["ElectionProviderMultiPhase",""],["Executive","Executive: handles dispatch to the various modules."],["Gilt",""],["GiltConfig",""],["Grandpa",""],["GrandpaConfig",""],["Header","Block header type as expected by this runtime."],["Historical",""],["Hrmp",""],["Identity",""],["ImOnline",""],["ImOnlineConfig",""],["Indices",""],["IndicesConfig",""],["Initializer",""],["LocalAssetTransactor","Our asset transactor. This is what allows us to interest with the runtime facilities from the point of view of XCM-only concepts like `MultiLocation` and `MultiAsset`."],["LocalOriginToLocation","Type to convert an `Origin` type value into a `MultiLocation` value which represents an interior location of this chain."],["Multisig",""],["Offences",""],["ParaInclusion",""],["ParaInherent",""],["ParaScheduler",""],["ParaSessionInfo",""],["ParachainsOrigin",""],["Paras",""],["ParasConfig",""],["ParasShared",""],["PhragmenElection",""],["PhragmenElectionConfig",""],["Proxy",""],["Recovery",""],["Registrar",""],["Scheduler",""],["Session",""],["SessionConfig",""],["SignedBlock","A Block signed with a Justification"],["SignedExtra","The `SignedExtension` to the basic transaction logic."],["SignedPayload","The payload being signed in the transactions."],["Slots",""],["Society",""],["SovereignAccountOf","The canonical means of converting a `MultiLocation` into an `AccountId`, used when we want to determine the sovereign account controlled by a location."],["Staking",""],["StakingConfig",""],["System",""],["SystemConfig",""],["TechnicalCommittee",""],["TechnicalCommitteeConfig",""],["TechnicalMembership",""],["TechnicalMembershipConfig",""],["Timestamp",""],["Tips",""],["TransactionPayment",""],["Treasury",""],["TreasuryConfig",""],["TrustedTeleporters",""],["Ump",""],["UncheckedExtrinsic","Unchecked extrinsic type as expected by this runtime."],["Utility",""],["Vesting",""],["VestingConfig",""],["XcmPallet",""],["XcmPalletConfig",""],["XcmRouter","The XCM router. When we want to send an XCM message, we use this type. It amalgamates all of our individual routers."]]});