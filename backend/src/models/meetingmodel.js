//import keyword is used to import the library
//schema is the structure that we were
//import the schema - structure,
//mangoosee is the library that is used to
//iporting the library.
import mongoose, { Schema } from "mongoose";

//we were createing the schema.
/*mongodb collection -ka every document we
will storing in the  database.
it is basically sefine the schema of meeting.
*/

const meetingSchema = new Schema(
  {
    //in this we will define the user-id
    /*in the database and provided string
    in this.
    */
    user_id: { type: String },
    //this show an meeting code
    //and what i will do in this
    //i will take the string as meeting code
    //and this field is true
    meetingCode: { type: String, required: true },
    //date is date and we will put the current 
    //date if no one exist.
    date: { type: Date, default: Date.now, required: true },
  }
);

/*isma meeting model banata hai jiska name
 meeting hai.this will create one collection
 by default.
*/

const Meeting = mongoose.model("Meeting", meetingSchema);

//export meeting.
export default Meeting;
