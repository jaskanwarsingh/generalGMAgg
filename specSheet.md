# Cross-Chain Messaging Aggregator Contracts Specification

## Overview
This document provides a detailed specification of each smart contract in the Cross-Chain Messaging Aggregator system. The platform enables dApps to interact with multiple General Messaging Partners (GMPs) for enhanced security and redundancy in cross-chain messaging.

## Contracts

### Aggregator Interface Contract (AIC)
- **Purpose**: Central contract for dApps to send cross-chain messages.
- **Functions**:
  - `initialize()`: Sets up initial contract state.
  - `registerGMP(address, uint)`: Registers new GMP interfaces.
  - `setSecurityPolicy(uint, uint[])`: Defines security requirements for actions.
  - `sendMessage(uint, bytes)`: Distributes messages to GMPs based on security policy.
  - `receiveConfirmation(bytes32, uint)`: Receives confirmations from GMPs.
- **Events**:
  - `MessageSent`
  - `MessageConfirmed`

### GMP Registry Contract
- **Purpose**: Manages a list of all GMP Interfaces.
- **Functions**:
  - `addGMP(address, uint)`: Adds a new GMP to the registry.
  - `removeGMP(address)`: Removes a GMP.
  - `getGMP(uint)`: Retrieves a GMP interface.
- **Events**:
  - `GMPAdded`
  - `GMPRemoved`

### GMP Interface Contract
- **Purpose**: Defines a standard interface for GMPs.
- **Functions**:
  - `sendMessage(bytes, address)`: Sends a message.
  - `receiveMessage(bytes, bytes)`: Receives and validates incoming messages.
- **Events**:
  - `MessageSent`
  - `MessageReceived`

### Security Policy Contract
- **Purpose**: Outlines security policies per action.
- **Functions**:
  - `definePolicy(uint, uint[])`: Sets a security policy.
  - `getPolicy(uint)`: Retrieves a security policy.
- **Events**:
  - `PolicyDefined`

### Message Queue Contract
- **Purpose**: Manages a queue of messages for delivery.
- **Functions**:
  - `enqueueMessage(uint, bytes)`: Adds a message to the queue.
  - `processNextMessage()`: Processes the next message.
- **Events**:
  - `MessageEnqueued`
  - `MessageProcessed`

### Verification Contract
- **Purpose**: Ensures message integrity and authenticity.
- **Functions**:
  - `verifyMessage(bytes32, bytes, bytes)`: Verifies a message.
  - `completeAction(bytes32)`: Signals successful verification.
- **Events**:
  - `MessageVerified`
  - `ActionCompleted`

### Action Handlers
- **Purpose**: Executes specific actions from messages.
- **Functions**:
  - `handleAction(bytes32, bytes)`: Handles an action.
- **Events**:
  - `ActionHandled`

### Fallback Handler Contract
- **Purpose**: Provides backup routing for messages.
- **Functions**:
  - `setFallbackRoute(uint, address)`: Sets a fallback GMP.
  - `triggerFallback(bytes32)`: Initiates fallback procedure.
- **Events**:
  - `FallbackTriggered`

### Governance Contract
- **Purpose**: Manages system changes via proposals and voting.
- **Functions**:
  - `proposeChange(bytes)`: Creates a change proposal.
  - `vote(uint, bool)`: Records a vote.
  - `executeChange(uint)`: Executes a change upon approval.
- **Events**:
  - `ChangeProposed`
  - `VoteRecorded`
  - `ChangeExecuted`

## Conclusion
The contracts described here provide a robust framework for secure, flexible, and decentralized cross-chain communication for dApps, enabling them to utilize multiple messaging services with varying levels of security as required.

