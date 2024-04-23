import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
  videoFile: {
    type: String, // cloudnaiory
    required: true
  },
  thumbnail: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  duration: {
    type: Number, // cloudnaiory
    required: true
  },
  views: {
    type: Number,
    default: 0
  },
  isPublished: {
    type: Boolean,
    default: true
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Video"
  }
}

  , {
    timestamps: true
  })

  videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video".videoSchema)