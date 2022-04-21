using System.ComponentModel;

namespace money_app_api.Enums {
    public enum TransactionState {
        [Description("Pending")]
        Pending,
        [Description("Accepted")]
        Accepted,
        [Description("Denied")]
        Denied
    }
}
