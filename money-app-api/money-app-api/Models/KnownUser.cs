using System;

namespace money_app_api.Models {
    public class KnownUser {
        public string portraitColor { get; set; }
        public string username { get; set; }
        public DateTime dateMet { get; set; }
        public bool blocked { get; set; }

        public KnownUser(string portraitColor, string username, DateTime dateMet, bool blocked) { 
            this.portraitColor = portraitColor;
            this.username = username;
            this.dateMet = dateMet;
            this.blocked = blocked;
        }
    }
}
