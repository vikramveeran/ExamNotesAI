import mongoose from "mongoose"
const notesSchema = new mongoose.Schema({
   user:{
     type:mongoose.Schema.Types.ObjectId,
     ref:"UserModel",
     required:true
   },

   topic:{
    type:String,
    required:true
   },
   revisionMode:{
    type:Boolean,
    default:false
   },
   includeDiagram:Boolean,
   includeCharts:Boolean,

   content:{
    type:mongoose.Schema.Types.Mixed,
    reqired:true
   }

},{timestamps:true})

const Notes = mongoose.model("Notes",notesSchema)  

export default Notes

