import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

connectDb();

export async function POST(request) {
  const { email, password } = await request.json();
  //   console.log("login api");
  //   console.log(email, password);
  try {
    //1. Find the user in database.
    const user = await User.findOne({
      email: email,
    });
    // console.log(user);
    if (user == null) {
      throw new Error("User not found !!");
    }

    // 2. Password check
    const matched = bcrypt.compareSync(password, user.password);
    if (!matched) {
      throw new Error("Pasword not correct. Plz try again !!");
    }

    //3. Generate token
    const token = jwt.sign(
      { _id: user._id, name: user.name },
      process.env.JWT_KEY
    );
    console.log(token);

    //4. create nextResponse - cookies
    const response = NextResponse.json({
      message: "Login success !!",
      success: true,
    });
    response.cookies.set("authToken",
         token,
          { expiresIn: "1d",
            httpOnly:true
           });

    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: error.message,
        success: false,
      },
      { status: 500 }
    );
  }
}
