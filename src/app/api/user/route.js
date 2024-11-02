import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectDb();

// Get user
export async function GET() {
  let user = [];
  try {
    user = await User.find().select("-password");
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Faild to get users",
        success: false,
      },
      { status: 500 }
    );
  }

  return NextResponse.json(user);
}

// create user
export async function POST(request) {
  //fetch user detail from request
  const { name, email, password, about, profileURL } = await request.json();

  console.log({ name, email, password, about, profileURL });
  // create user object with user model
  const user = new User({
    name,
    email,
    password,
    about,
    profileURL,
  });

  try {
    // save the object to database
    user.password = await bcrypt.hash(
      user.password,
      parseInt(process.env.BCRYPT_SALT)
    );
    console.log(user);
    const createdUser = await user.save();
    const response = NextResponse.json(createdUser, { status: 201 });
    // console.log(response)
    return response;
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Faild to create user !!",
        status: false,
      },
      { status: 500 }
    );
  }
}
