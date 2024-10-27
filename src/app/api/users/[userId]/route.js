import { User } from "@/models/user";
import { NextResponse } from "next/server";

// get user by id / single user
export async function GET(request, { params }) {
  const { userId } = params;
  try {
    const user = await User.findById({ _id: userId }).select("-password");
    return NextResponse.json(user);
  } catch (error) {
    return NextResponse.json({
      message: "The User is not exist !!",
    });
  }
}

// delete user
export async function DELETE(request, { params }) {
  // console.log(params);
  const { userId } = params;
  try {
    await User.deleteOne({ _id: userId });
    return NextResponse.json({
      message: "user deleted !!",
      success: true,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error in delete user !!",
    });
  }
}

// update user
export async function PUT(request, { params }) {
  const { userId } = params;

  const { name, password, about, profileURL } = await request.json();

  try {
    const user = await User.findById(userId);

    user.name = name;
    user.about = about;
    user.password = password;
    user.profileURL = profileURL;

   const updatedUser = await user.save();
   return NextResponse.json(updatedUser)
  } catch (error) {
    return NextResponse.json({
      message: "Faild to update user !!",
      success: false
    })
  }
}
