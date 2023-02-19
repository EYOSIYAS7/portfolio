const { response } = require("express");
const express = require("express");
const app = express();
const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const clientid =
  "106589090545-mnsgao6bo6bra78uhhuggrqv0593ifn3.apps.googleusercontent.com";
const clientsecret = "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";
let refereshToken =
  "1//04Lsnayq85LM0CgYIARAAGAQSNwF-L9Irxq7yTwUJZXTQkqvaAZMIk8DZAHYvOFaWMBJa_KbmF5VBKl_37JbcGjqPGqF3mdB0OwY";

const OAuth2_client = new OAuth2(
  clientid,
  clientsecret,
  "https://developers.google.com/oauthplayground"
);
OAuth2_client.setCredentials({
  refresh_token:
    "1//04Lsnayq85LM0CgYIARAAGAQSNwF-L9Irxq7yTwUJZXTQkqvaAZMIk8DZAHYvOFaWMBJa_KbmF5VBKl_37JbcGjqPGqF3mdB0OwY",
});

app.use(express.json());
app.use(express.urlencoded());
app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "view");

app.get("/", (req, res) => {
  res.render("home");
});

app.post("/mail", (req, res) => {
  let mail = req.body;
  const accessToken = OAuth2_client.getAccessToken();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: `eyosiyasmengesha@gmail.com`,
      clientId: clientid,
      clientSecret: clientsecret,
      refreshToken: refereshToken,
      accessToken: accessToken,
    },
  });
  transporter
    .sendMail({
      from: `${mail.email}`,
      to: "eyosiyasmengesha@gmail.com",
      subject: `message from ${mail.name}`,
      text: mail.message,
    })
    .then((res) => {
      console.log(" email sent to : " + res.accepted);
    })
    .catch((err) => {
      console.log(err);
    });
  res.status(200).redirect("/");
});

app.listen(3000, (req, res) => {
  console.log("listening on port 3000");
});
