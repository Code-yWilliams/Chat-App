import { CometChat } from "@cometchat-pro/chat";
import log from "../utils/logger";
import vars from "../utils/config";

async function initialize() {
  try {
    const APP_SETTING = new CometChat.AppSettingsBuilder()
    .subscribePresenceForAllUsers()
    .setRegion(vars.COMETCHAT_REGION)
    .build();

    await CometChat.init(vars.COMETCHAT_APP_ID, APP_SETTING);
    log.info("Chat service initialized.")
  } catch (e) {
    log.error("Chat Service Error:", e)
  }
}

async function createUser(name, uid) {
  const user = new CometChat.User(uid);
  user.setName(name);
  try {
    await CometChat.createUser(user, vars.COMETCHAT_AUTH_KEY)
    log.info("User created", user)
  } catch (e) {
    log.error("Add User error:", e)
  }
}

async function loginUser(uid) {
  try {
    const user = await CometChat.login(uid, vars.COMETCHAT_AUTH_KEY);
    log.info("Login successful:", { user })
  } catch (e) {
    log.error("Login error", e)
  }
}

const chatService = {
  initialize,
  createUser,
  loginUser
}

export default chatService;