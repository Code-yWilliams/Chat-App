if (process.env.NODE_ENV !== 'test') {
  require('dotenv').config();
}

const COMETCHAT_APP_ID = process.env.COMETCHAT_APP_ID;
const COMETCHAT_REGION = process.env.COMETCHAT_REGION;
const COMETCHAT_AUTH_KEY = process.env.COMETCHAT_AUTH_KEY;

const vars = {
  COMETCHAT_APP_ID,
  COMETCHAT_REGION,
  COMETCHAT_AUTH_KEY,
};

export default vars;