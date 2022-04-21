using money_app_api.Enums;
using System;
using System.ComponentModel;

namespace money_app_api.Models {

    public class Transaction {
        public Guid id { get; set; }
        public DateTime dateCreated { get; set; }
        public string sender { get; set; }
        public string senderPortraitColor { get; set; }
        public string receiver { get; set; }
        public string receiverPortraitColor { get; set; }
        public double amount { get; set; }
        public TransactionState state { get; set; }
        public TransactionType transactionType { get; set; }    

        public Transaction(Guid id, DateTime dateCreated, string sender, string senderPortraitColor, string receiver, string receiverPortraitColor, double amount, TransactionState state, TransactionType transaction) { 
            this.id = id;
            this.dateCreated = dateCreated;
            this.sender = sender;
            this.senderPortraitColor = senderPortraitColor;
            this.receiver = receiver;
            this.receiverPortraitColor = receiverPortraitColor;
            this.amount = amount;
            this.state = state;
            this.transactionType = transactionType;
        }
    }
}
