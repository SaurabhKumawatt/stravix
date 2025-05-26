const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
    {
        fullName: {
            type: String,
            required: true,
            trim: true,
        },
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        mobileNumber: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true,
        },
        profileImage: {
            type: String,
            default: "",
        },
        dob: {
            type: Date,
            default: null,
        },
        role: {
            type: String,
            enum: ["affiliate", "admin", "instructor"],
            default: "affiliate",
            required: true,
        },
        address: {
            type: String,
            required: true
        },
        state: {
            type: String,
            default: null
        },
        isEmailVerified: {
            type: Boolean,
            default: false,
        },
        affiliateCode: {
            type: String,
            unique: true,
            sparse: true,
        },
        sponsorCode: {
            type: String,
            default: null,
        },
        kycStatus: {
            type: String,
            enum: ["pending", "approved", "rejected"],
            default: "pending",
        },
        joinedAt: {
            type: Date,
            default: Date.now
        },
        updatedAt: {
            type: Date,
            default: Date.now
        },
        referralEarnings: {
            type: Number,
            default: 0,
        },
        enrolledCourses: [
            {
                course: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "Course",
                },
                progress: {
                    type: Number,
                    default: 0, // 0–100%
                },
            }
        ],

    },
    {
        timestamps: true,
    }
);

// Encrypt password before save
userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Match password for login
userSchema.methods.matchPassword = async function (enteredPassword) {
    const result = await bcrypt.compare(enteredPassword, this.password);
    console.log("🔐 Password Match:", result);
    return result;
};
module.exports = mongoose.model("User", userSchema);
