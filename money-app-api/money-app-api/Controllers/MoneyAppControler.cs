using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using money_app_api.DAO;
using money_app_api.Models;
using money_app_api.Requests;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace money_app_api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class MoneyAppController : ControllerBase {

        MoneyAppDAO dao = new MoneyAppDAO();

        [HttpPost("login")]
        public ActionResult<User> LogginUser([FromBody] UserLoginRequest data) {
            return dao.processLoginUser(data);
        }

        [HttpPost("check-username")]
        public bool checkUsername([FromBody] string username) {
            return dao.processCheckUsername(username);
        }

        [HttpPost("search-users")]
        public List<SearchUserRequest> searchUsers(string username) {
            return dao.searchUsers(username);
        }

        [HttpPut("create-transaction")]
        public void createTransaction([FromBody] TransactionRequest trans) {
            dao.processTransactionCreation(trans);
        }

        [HttpPut("accept-transaction")]
        public void acceptTransaction([FromBody] Transaction trans) {
            dao.processTransactionAccept(trans);
        }

        [HttpPut("deny-transaction")]
        public void denyTransaction([FromBody] Transaction trans) {
            dao.processTransactionDecline(trans);
        }

        [HttpDelete("remove-knownUser")]
        public void deleteKnownUser([FromBody] KnownUserRequest data) {
            dao.processDeleteKnownUser(data);
        }

        [HttpPut("block-knownUser")]
        public void blockKnownUser([FromBody] KnownUserRequest data) {
            dao.processBlockKnownUser(data);
        }


    }
}
