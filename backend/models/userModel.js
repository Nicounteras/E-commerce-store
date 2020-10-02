import mongosose from "mongoose"

const userSchema = new mongosose.Schema({
    name: { type: String , requiered: true},
    email: { type: String , requiered: true, unique: true, dropDups: true},
    password: { type: String , requiered: true},
    isAdmin: { type: Boolean, requiered: true, default: false }
})

const userModel = mongoose.model("User", userSchema)

export default userModel