

using Microsoft.AspNetCore.Mvc;
using money_app_api.Controllers;
using money_app_api.Models;
using money_app_api.Requests;
using System;
using System.Collections.Generic;
using System.Linq;

namespace money_app_api.DAO {
    public class MoneyAppDAO {

        FakeDB db = new FakeDB();

        public User processLoginUser(UserLoginRequest data) {
            return db.getUser(data);
        }

        public void processTransactionCreation(TransactionRequest trans) {
            if (trans.amount >= 1) {
                db.createPendingTransaction(trans);
            }
        }

        public void processTransactionAccept(Transaction trans) {
                db.acceptTransaction(trans);
        }

        public bool processCheckUsername(string username) {
            return db.checkUsername(username);
        }

        public List<SearchUserRequest> searchUsers(string username) {
            return db.findUsers(username);
        }

        public void processTransactionDecline(Transaction trans) {
            db.denyTransaction(trans);
        }

        public void processDeleteKnownUser(KnownUserRequest data) {
            db.deleteKnownUser(data);
        }

        public void processBlockKnownUser(KnownUserRequest data) {
            db.blockKnownUser(data);
        }

        private String generateHexColor() {
            var random = new Random();
            return String.Format("#{0:X6}", random.Next(0x1000000));
          
        }
    }
}
