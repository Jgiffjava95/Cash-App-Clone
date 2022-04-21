using System.Collections.Generic;

namespace money_app_api.Models {
    public class User {
        public string portraitColor { get; set; }
        public string username { get; set; }
        public string password { get; set; }
        public double wallet { get; set; }
        public List<KnownUser> knownUsers { get; set; }
        public List<Transaction> transactionHistory { get; set; }
        public List<Transaction> pendingReceivedTransactions { get; set; }
        public List<Transaction> pendingSentTransactions { get; set; }

        public User(string portraitColor, string username, string password, float wallet, List<KnownUser> knownUsers, List<Transaction> transactionHistory, List<Transaction> pendingReceivedTransactions, List<Transaction> pendingSentTransactions) {
            this.portraitColor = portraitColor;
            this.username = username;
            this.password = password;
            this.wallet = wallet;   
            this.transactionHistory = transactionHistory;
            this.knownUsers = knownUsers;
            this.pendingReceivedTransactions = pendingReceivedTransactions;
            this.pendingSentTransactions = pendingSentTransactions;
        }
    }
}
