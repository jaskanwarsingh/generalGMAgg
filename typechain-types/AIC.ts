/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "./common";

export interface AICInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "addGMPService"
      | "gmpServices"
      | "receiveMessage"
      | "sendMessage"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "MessageReceived" | "MessageSent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "addGMPService",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "gmpServices",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "receiveMessage",
    values: [BytesLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendMessage",
    values: [BytesLike, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "addGMPService",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "gmpServices",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "receiveMessage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "sendMessage",
    data: BytesLike
  ): Result;
}

export namespace MessageReceivedEvent {
  export type InputTuple = [message: BytesLike, gmpService: AddressLike];
  export type OutputTuple = [message: string, gmpService: string];
  export interface OutputObject {
    message: string;
    gmpService: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace MessageSentEvent {
  export type InputTuple = [message: BytesLike, gmpService: AddressLike];
  export type OutputTuple = [message: string, gmpService: string];
  export interface OutputObject {
    message: string;
    gmpService: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface AIC extends BaseContract {
  connect(runner?: ContractRunner | null): AIC;
  waitForDeployment(): Promise<this>;

  interface: AICInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  addGMPService: TypedContractMethod<
    [_gmpService: AddressLike],
    [void],
    "nonpayable"
  >;

  gmpServices: TypedContractMethod<[arg0: BigNumberish], [string], "view">;

  receiveMessage: TypedContractMethod<
    [message: BytesLike, gmpIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  sendMessage: TypedContractMethod<
    [message: BytesLike, gmpIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "addGMPService"
  ): TypedContractMethod<[_gmpService: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "gmpServices"
  ): TypedContractMethod<[arg0: BigNumberish], [string], "view">;
  getFunction(
    nameOrSignature: "receiveMessage"
  ): TypedContractMethod<
    [message: BytesLike, gmpIndex: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "sendMessage"
  ): TypedContractMethod<
    [message: BytesLike, gmpIndex: BigNumberish],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "MessageReceived"
  ): TypedContractEvent<
    MessageReceivedEvent.InputTuple,
    MessageReceivedEvent.OutputTuple,
    MessageReceivedEvent.OutputObject
  >;
  getEvent(
    key: "MessageSent"
  ): TypedContractEvent<
    MessageSentEvent.InputTuple,
    MessageSentEvent.OutputTuple,
    MessageSentEvent.OutputObject
  >;

  filters: {
    "MessageReceived(bytes,address)": TypedContractEvent<
      MessageReceivedEvent.InputTuple,
      MessageReceivedEvent.OutputTuple,
      MessageReceivedEvent.OutputObject
    >;
    MessageReceived: TypedContractEvent<
      MessageReceivedEvent.InputTuple,
      MessageReceivedEvent.OutputTuple,
      MessageReceivedEvent.OutputObject
    >;

    "MessageSent(bytes,address)": TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;
    MessageSent: TypedContractEvent<
      MessageSentEvent.InputTuple,
      MessageSentEvent.OutputTuple,
      MessageSentEvent.OutputObject
    >;
  };
}
