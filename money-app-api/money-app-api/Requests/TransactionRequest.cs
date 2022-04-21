using money_app_api.Enums;

namespace money_app_api {
    public class TransactionRequest {

            public string sender { get; set; }
            public string receiver { get; set; }
            public double amount { get; set; }
            public TransactionType transactionType { get; set; } 

        public TransactionRequest() { }

    }
}
