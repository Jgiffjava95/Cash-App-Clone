using money_app_api.Models;
using money_app_api.Requests;
using System;
using System.Collections.Generic;
using System.Linq;

namespace money_app_api.Controllers {
    public class FakeDB {

        //This class was just for testing

        private static String generateHexColor() {
            var random = new Random();
            return String.Format("#{0:X6}", random.Next(0x1000000));

        }

        static List<User> users = new List<User>() {
            new User(generateHexColor(), "Sarovan", "test", 1000, new List<KnownUser>(), new List<Transaction>(), new List<Transaction>(), new List<Transaction>()),
            new User(generateHexColor(),"Emily", "Emily", 1000, new List<KnownUser>(), new List<Transaction>(), new List<Transaction>(), new List<Transaction>()),
            new User(generateHexColor(),"Riley", "Riley", 1000, new List<KnownUser>(), new List<Transaction>(), new List<Transaction>(), new List<Transaction>()),
            new User(generateHexColor(),"test", "test", 1000, new List<KnownUser>(), new List<Transaction>(), new List<Transaction>(), new List<Transaction>()),
            new User(generateHexColor(),"test2", "test2", 1000, new List<KnownUser>(), new List<Transaction>(), new List<Transaction>(), new List<Transaction>()),
        };


        public List<User> GetAllUsers() {
            return users;
        }

        public List<SearchUserRequest> findUsers(string username) {
            List<SearchUserRequest> tempArray = new List<SearchUserRequest>();
            users.ForEach(x => {
                if (x.username.Contains(username)) {
                    tempArray.Add(new SearchUserRequest(x.username, x.portraitColor));
                }
            });

            return tempArray;
        }

        public List<KnownUser> GetAllKnownUsersForUser(string username) {
            var user = users.Find(x => x.username == username);
            return user.knownUsers;
        }

        public List<Transaction> GetAllPendingSentTransactions(string username) {
            var user = users.Find(x => x.username == username);
            return user.pendingSentTransactions;
        }

        public List<Transaction> GetAllPendingReceivedTransactions(string username) {
            var user = users.Find(x => x.username == username);
            return user.pendingReceivedTransactions;
        }

        public List<Transaction> GetTransactionHistroy(string username) {
            var user = users.Find(x => x.username == username);
            return user.transactionHistory;
        }

        public User getUser(UserLoginRequest data) {
            return users.Find(x => x.username == data.username && x.password == data.password);
        }

        public bool checkUsername(string username) {
            return users.Any(x => x.username == username);
        }

        public void createPendingTransaction(TransactionRequest trans) {
            var receiver = users.Find(x => x.username == trans.receiver);
            var sender = users.Find(x => x.username == trans.sender);

            var newTransaction = new Transaction(Guid.NewGuid(), DateTime.Now, trans.sender, sender.portraitColor, trans.receiver, receiver.portraitColor, trans.amount, Enums.TransactionState.Pending, trans.transactionType);

            receiver.pendingReceivedTransactions.Add(newTransaction);
            sender.pendingSentTransactions.Add(newTransaction);
        }

        public void acceptTransaction(Transaction trans) {
            var receiver = users.Find(x => x.username == trans.receiver);
            var sender = users.Find(x => x.username == trans.sender);

            trans.state = Enums.TransactionState.Accepted;

            receiver.transactionHistory.Add(trans);
            sender.transactionHistory.Add(trans);

            receiver.pendingReceivedTransactions.Remove(trans);
            sender.pendingSentTransactions.Remove(trans);

            this.manipulateWallet(trans);

            receiver.knownUsers.Add(new KnownUser(sender.portraitColor, sender.username, DateTime.Now, false));
            sender.knownUsers.Add(new KnownUser(receiver.portraitColor, receiver.username, DateTime.Now, false));
        }

        public void denyTransaction(Transaction trans) {
            var receiver = users.Find(x => x.username == trans.receiver);
            var sender = users.Find(x => x.username == trans.sender);

            trans.state = Enums.TransactionState.Denied;

            receiver.transactionHistory.Add(trans);
            sender.transactionHistory.Add(trans);

            receiver.pendingReceivedTransactions.Remove(trans);
            sender.pendingSentTransactions.Remove(trans);

        }

        public void deleteKnownUser(KnownUserRequest data) {
            var requester = users.Find(x => x.username == data.requestingUser);
            var deletable = users.Find(x => x.username == data.userToDelete);

            requester.knownUsers.Remove(requester.knownUsers.Find(x => x.username == data.userToDelete));
            deletable.knownUsers.Remove(deletable.knownUsers.Find(x => x.username == data.requestingUser));
        }

        public void blockKnownUser(KnownUserRequest data) {
            var requester = users.Find(x => x.username == data.requestingUser);
            var deletable = users.Find(x => x.username == data.userToDelete);

            requester.knownUsers.Find(x => x.username == data.userToDelete).blocked = true;
        }

        private void manipulateWallet(Transaction trans) {
            var receiver = users.Find(x => x.username == trans.receiver);
            var sender = users.Find(x => x.username == trans.sender);

            sender.wallet -= trans.amount;
            receiver.wallet += trans.amount;

        }



    }
}
