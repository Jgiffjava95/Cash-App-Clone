namespace money_app_api.Requests {
    public class SearchUserRequest {
        public string username { get; set; }
        public string portraitColor { get; set; }

        public SearchUserRequest(string username, string portraitColor) {
            this.username = username;
            this.portraitColor = portraitColor;
        }
    }
}
