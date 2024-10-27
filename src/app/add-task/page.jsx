const { default: AddTask } = require("./AddTask");

export const metadata = {
  title: "Add Task : Work Manager",
};

function AddTaskPage() {
  return (
    <>
      <AddTask />
    </>
  );
}

export default AddTaskPage;
