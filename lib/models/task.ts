import mongoose, { Schema } from "mongoose";

const TaskSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    maxLength: 100
  },
  completed: {
    type: Boolean,
    default: false
  },
  time: {
    type: Date,
    default: Date.now
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

// Custom validation for time
TaskSchema.path('time').validate(function(value) {
  return value instanceof Date && !isNaN(value.getTime());
}, 'Time must be a valid date.');

// Pre-save hook to set the user ID
TaskSchema.pre('save', function(next) {
  // No need to convert user to string
  if (this.isModified('user')) {
    // this.user remains an ObjectId
  }
  next();
});

export default mongoose.models.Task || mongoose.model("Task", TaskSchema);
