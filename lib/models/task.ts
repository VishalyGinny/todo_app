// the models folder is the structure of our connection
import mongoose, {Schema} from "mongoose";

const TaskSchema = new Schema(
    {
        // the title of the task
        title: {
            type: String,
            required: true,
          },
            // the description of the task
          completed: {
            type: Boolean,
            default: false,
          },
            // the time the task was created
          time: {
            type: Date,
            // default: Date.now,
          },
            // the user that created the task
          user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          },
        });
        // this is the model that we are going to use to interact with the database
        export default mongoose.models.Task || mongoose.model("Task", TaskSchema);