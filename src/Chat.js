import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, MoreVert, SearchOutlined } from '@material-ui/icons';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import "./Chat.css";
function Chat() {
    return (

        <div className="chat">
            <div className="chat_header">
                <Avatar src={"https://static.fandomspot.com/images/07/7845/00-featured-black-hair-anime-girl-yaoyorozu-momo.jpg "} />
                <div className="chat_headerInfo">
                    <h2>Anime-GOHO</h2>
                    <p>last seen
                    </p>
                </div>
                <div className="chat_headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>
            <div className="chat_body">
                <p className="chat_message">
                    <span className="chat_name">Person </span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p>

                    <p className="chat_message chat_receiver">
                    <span className="chat_name">Person</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p>

                    <p className="chat_message">
                    <span className="chat_name">Person</span>
                    This is a message
                    <span className="chat_timestamp">{new Date().toUTCString()}</span>
                    </p>
            </div>

            <div className="chat_footer">
              <InsertEmoticonIcon />
              <form>
                  <input placeholder="Type a message" type="text" />
                  <button type="submit">Send a message
                  </button>
              </form>
              <MicIcon />
            </div>
        </div>
    )
}
export default Chat