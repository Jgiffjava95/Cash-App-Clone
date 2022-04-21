import { SearchUserRequest, Transaction, TransactionState, User } from "./money-app.service";

export interface TransactionTarget {
  username: string,
  portraitColor: string,
  transactionAmount: number
}

export class UserService {

  private _transactionTarget!: TransactionTarget;

  private _loggedInUser: User = { //delete this
    portraitColor: '#fc033d',
    username: 'test',
    password: 'test',
    wallet: 500,
    knownUsers: [],
    transactionHistory: [
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Denied
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Jeremy',
        senderPortraitColor: 'red',
        receiver: 'Emily',
        receiverPortraitColor: 'pink',
        amount: 500,
        state: TransactionState.Accepted
      },
      {
        id: 'test',
        dateCreated: new Date(Date.now()),
        sender: 'Riley',
        senderPortraitColor: 'blue',
        receiver: 'Dede',
        receiverPortraitColor: 'green',
        amount: 500,
        state: TransactionState.Accepted
      },
    ],
    pendingReceivedTransactions: [],
    pendingSentTransactions: []
  };

  setLoggedInUser(user: User): void {
    this._loggedInUser = user;
  }

  get loggedInUser(): User {
    return this._loggedInUser;
  }

  get username(): string {
    return this._loggedInUser.username;
  }

  get userWallet(): number {
    return this._loggedInUser.wallet;
  }

  get userPortraitColor(): string {
    return this.loggedInUser.portraitColor;
  }

  get userTransactionHistory(): Transaction[] {
    return this._loggedInUser.transactionHistory;
  }

  setTransactionTarget(target: TransactionTarget): void {
    console.log(target)
    this._transactionTarget = target;
  }

  get transactionTarget(): TransactionTarget {
    return this._transactionTarget;
  }

}