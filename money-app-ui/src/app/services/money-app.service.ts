import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface User {
    portraitColor: string
    username: string,
    password: string,
    wallet: number,
    knownUsers: KnownUser[],
    transactionHistory: Transaction[],
    pendingReceivedTransactions: Transaction[],
    pendingSentTransactions: Transaction[]
}

export interface SearchUserRequest {
    username: string,
    portraitColor: string
}

export interface KnownUser {
    portraitColor: string,
    username: string,
    dateMet: Date,
    blocked: boolean
}

export interface Transaction {
    id?: string,
    dateCreated?: Date,
    sender: string,
    senderPortraitColor?: string,
    receiver: string,
    receiverPortraitColor?: string,
    amount: number,
    state?: TransactionState
}

export interface TransactionRequest {
    sender: string,
    receiver: string,
    amount: number,
    type: TransactionType
}

export enum TransactionState {
    Pending = 0,
    Accepted = 1,
    Denied = 2
}

export enum TransactionType {
    Sending = 0,
    Requesting = 1,
}


@Injectable()
export class MoneyAppService {
    constructor(private http: HttpClient) {

    }

    //need to be able to set address dynamically in environment

    logginUser(user: UserLoginRequest): Observable<any> {

        const content_ = JSON.stringify(user);

        let options_: any = {
            observe: "response",
            responseType: "application/json",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.post('https://localhost:44329/api/MoneyApp/login', content_, options_);
    }

    searchUser(username: string): Observable<any> {

        return this.http.request('post', 'https://localhost:44329/api/MoneyApp/search-users?username=' + username);
    }

}