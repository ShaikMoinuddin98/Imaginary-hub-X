const express = require("express");
const ejs = require("ejs");
const app = express();
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const bodyParser = require("body-parser");
const multer = require("multer");
const cron = require("node-cron");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken"); //for creating temporary tokens

const { type } = require("os");
const { exit } = require("process");

const JWT_SECRET = "Moin-JWT";

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.json({ limit: "30mb" }));
app.use(express.urlencoded({ extended: true, limit: "30mb" }));
app.use(bodyParser.json());
app.use(express.static("public"));

// Set up Multer for file uploads
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

//configuring the transporter for sending mails
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "imaginary.hub1@gmail.com",
    pass: "hbur gyqg nvgx ltlg",
  },
});

//configuring our mail like the details of mail
const mailoptions = {
  from: {
    name: "Testing",
    address: "imaginary.hub1@gmail.com", //add your gmail here
  },
  to: "",
  subject: "",
  html: "",
};

//function for sending mails
const send = async (transporter, mailoptions) => {
  try {
    await transporter.sendMail(mailoptions);
    console.log("email sent");
  } catch (err) {
    console.log(err);
  }
};

// Connecting to database
main()
  .then(() => {
    console.log("Connection success");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(
    "mongodb+srv://King-Moin:Moin-7093@cluster0.3uvscb7.mongodb.net/"
  );
}

// Our schema of db
const loginschema = new mongoose.Schema({
  email: {
    type: String,
  },
  termsAccept: {
    type: Boolean,
    default: false,
  },
});
const articleschema = new mongoose.Schema({
  email: {
    type: String,
  },
  title: {
    type: String,
  },
  article: {
    type: String,
  },
  images: {
    type: Array,
  },
  category: {
    type: String,
  },
  schedule: {
    type: Date,
  },
  published: {
    type: Boolean,
    default: false,
  },
  publishedDate: {
    type: Date,
  },
  views: {
    type: Number,
    default: 0,
  },
  shares: {
    type: Number,
    default: 0,
  },
  timespent: {
    type: Number,
    default: 0,
  },
  scrolldepth: {
    type: Number,
    default: 0,
  },
  engagementRatio: {
    type: Number,
    default: 0,
  },
  lastUpdated: {
    type: Date,
  },
});

const subscribeschema = new mongoose.Schema({
  email: {
    type: String,
  },
  topics: {
    type: Array,
  },
});

const creatorschema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  username: {
    type: String,
  },
  img: {
    data: {
      type: Buffer,
      default: null,
    },
    contentType: {
      type: String,
      default: null,
    },
  },
  profession: {
    type: String,
    default: null,
  },
  description: {
    type: String,
  },
  heading: {
    type: String,
  },
  socialmedia: {
    type: Array,
  },
  primarySocial: {
    type: String,
  },
  interests: {
    type: Array,
  },
});
loginschema.plugin(passportLocalMongoose, { usernameField: "email" });

const data = mongoose.model("new", loginschema);
const creator = mongoose.model("writer", creatorschema);
const articles = mongoose.model("article", articleschema);
const subscribers = mongoose.model("subscriber", subscribeschema);
// Configuring session options
const sessionOption = {
  secret: "Moin-7396Session",
  resave: false,
  saveUninitialized: true,
};
app.use(session(sessionOption));

// Initializing passport and session for it
app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new LocalStrategy(
    { usernameField: "email", passwordField: "pass" },
    data.authenticate()
  )
);

// Serializing user
passport.serializeUser(data.serializeUser());
passport.deserializeUser(data.deserializeUser());

// Function for checking whether the user is authenticated or not
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect("/login");
}

// Function to publish scheduled articles
async function publishScheduledArticles() {
  const date = new Date();
  // Calculate UTC+5
  const utc5Date = new Date(date.getTime() + (5 * 60 + 30) * 60 * 1000); // Adding 5 hours in milliseconds

  // Format it as ISO string but with "Z" to indicate UTC
  const currentTime = new Date(utc5Date.toISOString()); // This gives you UTC time
  console.log(currentTime);
  try {
    // Find articles that are scheduled to be published up to the current minute
    const result = await articles.updateMany(
      {
        schedule: { $lte: currentTime },
        publishedDate: { $exists: false }, // Truncate to match 'YYYY-MM-DDTHH:MM' format
      },
      { $set: { publishedDate: new Date() } }
    );

    if (result.modifiedCount > 0) {
      console.log(`${result.modifiedCount} articles published.`);
    } else {
      console.log("No articles to publish at this time.");
    }
  } catch (error) {
    console.error("Error while publishing articles:", error);
  }
}

cron.schedule("* * * * *", () => {
  console.log("Running scheduled publishing task...");
  publishScheduledArticles();
});

const getLastWeekRange = () => {
  const now = new Date();
  const lastMonday = new Date(now);
  lastMonday.setDate(now.getDate() - ((now.getDay() + 6) % 7)); // Last Monday
  lastMonday.setHours(0, 0, 0, 0);

  const thisMonday = new Date(lastMonday);
  thisMonday.setDate(lastMonday.getDate() + 7); // This Monday
  thisMonday.setHours(0, 0, 0, 0);

  return { start: lastMonday, end: thisMonday };
};

const getTopArticlesForTopics = async (topics, startDate, endDate) => {
  const topArticles = await Promise.all(
    topics.map(async (topic) => {
      return await articles
        .findOne({
          publishedDate: { $gte: startDate, $lt: endDate },
          category: topic,
        })
        .sort({ engagementRatio: -1 });
    })
  );

  return topArticles.filter((article) => article); // Remove any null values
};

const sendWeeklyTopArticles = async () => {
  const { start, end } = getLastWeekRange();
  const subs = await subscribers.find();

  for (let user of subs) {
    const topArticles = await getTopArticlesForTopics(user.topics, start, end);

    if (topArticles.length > 0) {
      ejs.renderFile(
        __dirname + "/views/template.ejs",
        { articles: topArticles },
        (err, html) => {
          if (err) {
            console.log("Error rendering EJS:", err);
          } else {
            // Use `html` for sending email

            mailoptions.to = user.email;
            mailoptions.subject = "Weekly Updates";
            mailoptions.html = html;
            send(transporter, mailoptions);
          }
        }
      );
    }
  }
};

// Schedule to run every Monday at 9:00 AM
cron.schedule("0 9 * * 1", async () => {
  try {
    console.log("Sending top articles to subscribers...");
    sendWeeklyTopArticles();
    console.log("Top articles sent successfully.");
  } catch (error) {
    console.error("Error sending top articles:", error);
  }
});

//  sendWeeklyTopArticles()

app.get("/", async (req, res) => {

  res.render("index.ejs");
});

// Routes
app.get("/dashboard", isLoggedIn, async (req, res) => {
  let c = await creator.find({ email: req.user.email });
  let arts = await articles.find({ email: req.user.email });

  if (!c[0].profession) res.redirect("/profile-creation");
  else res.render("dashboard.ejs", { data: c[0], articles: arts });
});

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  try {
    const { email, pass } = req.body;
    const newUser = new data({ email });

    if (pass.length < 6) {
      return res.redirect("/signup");
    }

    await data.register(newUser, pass);

    req.login(newUser, (err) => {
      if (err) {
        console.log(err);
        return res.redirect("/signup");
      }
      let c = new creator({ email: email });
      c.save()

        .then((re) => {
          res.redirect("/terms");
        })
        .catch((err) => {
          console.log(err);
          res.json({ message: err.message });
        });
    });
  } catch (err) {
    console.log(err);
    res.redirect("/signup");
  }
});

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  })
);

app.get("/logout", async (req, res, next) => {
  await req.logout((err) => {
    if (err) {
      return next(err);
    }
    res.redirect("/login");
  });
});

app.get("/about", async (req, res) => {
  let arts = await articles.find({}, "views");
  let totalviews = 0;
  for (i of arts) {
    totalviews += i.views;
  }
  let subs = await subscribers.countDocuments({});
  res.render("about.ejs", {
    views: totalviews,
    subs: subs,
    totalarts: arts.length,
  });
});

app.get("/allnews", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true } })
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/tech", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true },category:"Tech" })
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/business", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true } ,category:"Business"})
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/education", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true } ,category:"Education"})
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/psychology", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true },category:"Psychology" })
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/finance", async (req, res) => {
  let arts = await articles
    .find({ publishedDate: { $exists: true },category:"Finance" })
    .sort({ engagementRatio: -1 });

  for (let i = 0; i < arts.length; i++) {
    let u = await creator.findOne({ email: arts[i].email }, "username");
    arts[i].username = u ? u.username : "Unknown"; // Add username to each article
  }
  res.render("allnews.ejs", { data: arts });
});

app.get("/analytics", (req, res) => {
  res.render("analytics.ejs");
});

app.get("/article-writing", (req, res) => {
  res.render("article-writing.ejs");
});

app.get("/article-editing/:id", isLoggedIn, async (req, res) => {
  let art = await articles.findOne({ _id: req.params.id });
  res.render("article-editing.ejs", { data: art });
});

app.post("/edit-article/:id", isLoggedIn, async (req, res) => {
  const date = new Date();
  // Calculate UTC+5
  const utc5Date = new Date(date.getTime() + (5 * 60 + 30) * 60 * 1000); // Adding 5 hours in milliseconds

  // Format it as ISO string but with "Z" to indicate UTC
  const currentTime = new Date(utc5Date.toISOString()); // This gives you UTC time
  let data;
  if (req.body.schedule) {
    data = { email: req.user.email, ...req.body };
  } else
    data = { email: req.user.email, ...req.body, lastUpdated: currentTime };
  const u = await articles.updateOne(
    { email: req.user.email, _id: req.params.id },
    data
  );

  res.json({ message: "done" });
});

app.post("/delete-article", isLoggedIn, async (req, res) => {
  let id = req.body.id;
  let d = await articles.deleteOne({ _id: id });
  res.status(200).json({ message: "ok" });
});

app.post("/publish-article", async (req, res) => {
  const date = new Date();
  // Calculate UTC+5
  const utc5Date = new Date(date.getTime() + (5 * 60 + 30) * 60 * 1000); // Adding 5 hours in milliseconds

  // Format it as ISO string but with "Z" to indicate UTC
  const currentTime = new Date(utc5Date.toISOString()); // This gives you UTC time
  console.log(req.user);
  let data;
  if (req.body.schedule) {
    data = { email: req.user.email, ...req.body };
  } else
    data = { email: req.user.email, ...req.body, publishedDate: currentTime };
  const u = new articles(data);
  await u.save();
  res.json({ message: "done" });
});
app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/forgot-password", (req, res) => {
  res.render("forgot-password.ejs");
});

app.get("/article/:title/:id", async (req, res) => {
  req.params.title = req.params.title.replace(/%20/g, " ");
  let a = await articles.findOne({
    title: req.params.title,
    _id: req.params.id,
  });
  let u = await creator.findOne({ email: a.email }, "username");
  let top3arts = await articles
    .find({
      publishedDate: { $exists: true },
      email: a.email,
    })
    .sort({ engagementRatio: -1 })
    .limit(3);

  if (a.publishedDate)
    res.render("newstemplate.ejs", {
      data: a,
      toparts: top3arts,
      username: u.username,
    });
  else res.json({ message: "Article Not yet published" });
});

app.get("/profile-creation", isLoggedIn, async (req, res) => {
  if (req.user.termsAccept) {
    let c = await creator.findOne({ email: req.user.email });
    if (c.profession) {
      res.render("profile-creation.ejs", { data: c });
    } else {
      res.render("profile-creation.ejs", { data: {} });
    }
  } else {
    res.redirect("/terms");
  }
});

app.post(
  "/profile-creation",
  isLoggedIn,
  upload.single("profilePhoto"),
  async (req, res) => {
    try {
      console.log(req.body);
      let l = [req.body.linkedin, req.body.xProfile];
      let interestarr = req.body.interests.split(",");
      console.log(req.body);
      let updata;
      if (req.file) {
        updata = {
          username: req.body.username,
          profession: req.body.profession,
          socialmedia: l,
          description: req.body.profileDescription,
          img: {
            data: req.file.buffer,
            contentType: req.file.mimetype,
          },
          primarySocial: req.body.primarySocial,
          heading: req.body.profileHeading,
          interests: interestarr,
        };
      } else {
        updata = {
          username: req.body.username,
          profession: req.body.profession,
          socialmedia: l,
          description: req.body.profileDescription,
          primarySocial: req.body.primarySocial,
          heading: req.body.profileHeading,
          interests: interestarr,
        };
      }
      const u = await creator.updateOne({ email: req.user.email }, updata);

      ejs.renderFile(__dirname + "/views/writer-email.ejs",{name:req.body.username}, (err, html) => {
        if (err) {
          console.log("Error rendering EJS:", err);
        } else {
          // Use `html` for sending email

          mailoptions.to = req.user.email;
          mailoptions.subject = "Welcome to Imaginary Hub X";
          mailoptions.html = html;
          send(transporter, mailoptions);
        }
      });
      res.redirect("/dashboard");
    } catch (err) {
      res.json({ message: err.message });
    }
  }
);

app.get("/profile/:name", async (req, res) => {
  try {
    req.params.name = req.params.name.replace(/%20/g, " ");
    console.log(req.params);

    let d = await creator.findOne({ username: req.params.name });
    console.log(d._id.getTimestamp());
    let email = d.email;
    let arts = await articles.find({ email: email }, "views engagementRatio");
    let totalengagement = 0;
    let totalviews = 0;
    for (i of arts) {
      totalengagement += i.engagementRatio;
      totalviews += i.views;
    }

    if (d) {
      res.render("profile-preview.ejs", {
        data: d,
        engagement: totalengagement.toFixed(0),
        views: totalviews,
        totalarticles: arts.length,
        joined: d._id.getTimestamp(),
      });
    } else {
      res.status(404).send({ message: "Profile not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Server error. Please try again later." });
  }
});
app.get("/subscribe", (req, res) => {
  res.render("subscribe.ejs");
});

app.post("/subscribe", async (req, res) => {
  let { email, topics } = req.body;
  // let topics=["business","tech","psychology"]

  try {
    // Check if the email already exists in the subscriber collection
    const existingSubscriber = await subscribers.findOne({ email: email });

    if (existingSubscriber) {
      // Use $addToSet to add each topic while ensuring uniqueness
      await subscribers.updateOne(
        { email: email },
        { $addToSet: { topics: { $each: topics } } } // Using $each to add multiple topics at once
      );

      return res
        .status(200)
        .json({ message: "Subscription updated successfully!" });
    }

    // If the email does not exist, create a new subscriber
    const newSubscriber = new subscribers({
      email: email,
      topics, // You can directly assign topics since they are passed as an array
    });

    await newSubscriber.save();
    ejs.renderFile(__dirname + "/views/user-email.ejs", (err, html) => {
      if (err) {
        console.log("Error rendering EJS:", err);
      } else {
        // Use `html` for sending email

        mailoptions.to = email;
        mailoptions.subject = "Congratulations For Being a Subscriber";
        mailoptions.html = html;
        send(transporter, mailoptions);
      }
    });
    return res.status(201).json({ message: "Subscription successful!" });
  } catch (error) {
    console.error("Error saving subscription:", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.get("/terms", isLoggedIn, (req, res) => {
  res.render("terms.ejs");
});
app.post("/terms", isLoggedIn, async (req, res) => {
  try {
    if (req.body.message) {
      const u = await data.updateOne(
        { email: req.user.email },
        { termsAccept: true }
      );
      res.json({ message: true });
    } else {
      res.json({ message: false });
    }
  } catch (error) {
    console.error("Error updating terms acceptance:", error);
    res.status(500).json({ message: false });
  }
});

app.get("/writer", (req, res) => {
  res.render("writer.ejs");
});

app.post("/update-engagement", async (req, res) => {
  console.log(req.body);
  const { articleId, views, shares, totalScrollDepth, timeSpent } = req.body;

  await articles.findByIdAndUpdate(articleId, {
    $inc: {
      views: views,
      shares: shares,
      scrolldepth: totalScrollDepth,
      timespent: timeSpent,
    },
  });

  await articles.updateOne({ _id: articleId }, [
    {
      $set: {
        engagementRatio: {
          $divide: [
            {
              $add: [
                "$views",
                { $multiply: ["$shares", 2] },
                "$scrolldepth",
                { $divide: ["$timespent", 60] },
              ],
            },
            "$views",
          ],
        },
      },
    },
  ]);

  res.send({ success: true });
});

app.get("/get-analytics", isLoggedIn, async (req, res) => {
  let article = await articles.find(
    { email: req.user.email },
    "title views shares timespent scrolldepth engagementRatio"
  );

  res.json({ article });
});

app.get("/writers", (req, res) => {
  res.render("all-writer.ejs");
});

app.post("/search-article", async (req, res) => {
  let u = await creator.findOne(
    { username: { $regex: new RegExp(`^${req.body.name}$`, "i") } },
    "email"
  );
  let a = u?.email ? await articles.find({ email: u.email }) : [];
  res.json({ data: a });
});

app.get("/forget-password", (req, res) => {
  res.render("forgot-password.ejs");
});

app.post("/forgetpass", async (req, res) => {
  try {
    let { email } = req.body;

    console.log(email);
    let user = await data.findOne({ email: email });

    if (user) {
      const secret = JWT_SECRET + "Moin-7093";
      const payload = {
        email: user.email,
        id: user.id,
      };
      console.log(payload);
      const token = jwt.sign(payload, secret, { expiresIn: "2m" });
      const link = `https://imaginary-hub-x.onrender.com/reset-pass/${user.id}/${token}`;
      console.log(link);
      mailoptions.to = email;
      mailoptions.subject = "Password Reset Request";
      mailoptions.text = `use this link for updating password,link expires in 2 min,${link}`;
      send(transporter, mailoptions).then((re) => {
        res.status(200).json({ message: "mail sent to given email" });
      });
    } else {
      throw new Error("User not found");
    }
  } catch (error) {
    res.status(406).json({ message: error.message });
  }
});

app.get("/reset-pass/:id/:token", (req, res) => {
  let { id, token } = req.params;
  const secret = JWT_SECRET + "Moin-7093";
  try {
    const payload = jwt.verify(token, secret);
    res.render("resetpass.ejs", { url: `${id}/${token}` });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
});

app.post("/reset-pass/:id/:token", async (req, res) => {
  let { token, id } = req.params;

  let { password } = req.body;

  const secret = JWT_SECRET + "Moin-7093";
  try {
    if (password.length < 6) {
      res.status(406).json({ message: "pass must be greater than 6 chars" });
    } else {
      const payload = jwt.verify(token, secret);
      let u = await data.findOne({ email: payload.email });

      let { _id, __v, ...cp } = u._doc;
      console.log(cp);
      await data
        .deleteOne({ email: u.email })
        .then(async (re) => {
          console.log(u);
          let d = new data(cp);
          let ruser = await data.register(d, password);
          res.status(200).json({ message: "password changed successfully" });
        })
        .catch((err) => {
          console.log(err);
          res.status(406).json({ message: err.message });
        });
    }
  } catch (err) {
    console.log(err);
    res.status(406).json({ message: err.message });
  }
});


app.get("/privacy",(req,res)=>{
  res.render("privacy.ejs")
})

app.get("/terms-cond",(req,res)=>{
  res.render("terms-cond.ejs")
})

app.listen(9000, () => {
  console.log("listening on port 9000");
});
