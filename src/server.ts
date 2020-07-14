import { IServer } from "recife";
import mongoose from "mongoose";

class Server implements IServer {
  beforeStarted() {
    //
  }

  started() {
    //
  }

  beforeMounted() {
    //
  }

  mounted() {
    mongoose.connect("mongodb://localhost:27017/recife-mongoose", {
      // useCreateIndex: true,
      // useUnifiedTopology: true,
      useNewUrlParser: true
    });
  }

  beforeUpdated() {
    //
  }

  updated() {
    //
  }

  catch(e) {
    console.log(e);
  }
}

export default Server;
