using System.ComponentModel;

namespace money_app_api.Enums {
    public enum TransactionType {
        [Description("Sending")]
        Sending,
        [Description("Requesting")]
        Requesting,
    }
}