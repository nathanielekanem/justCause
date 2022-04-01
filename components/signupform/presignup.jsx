import React from "react";
import { useForm } from "react-hook-form";

function presignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (i) => {
    {
      {
        /**Add code to send data to database. */
      }
    }
  };
  return (
    <div className="form mt-5">
      <div className="col-md-4 card m-auto shadow-lg">
        <form onSubmit={handleSubmit(submitHandler)}>
          <div className="card-body">
            <div className="form-group p-4">
              <label htmlFor="fullname">Name:</label>
              <input
                className="form-control"
                {...register("fullname", { required: true })}
              />
              {errors.fullname && errors.fullname.type === "required" && (
                <p className="errorText">Name cannot be empty.</p>
              )}
            </div>

            <div className="form-group p-4">
              <label htmlFor="username">Username:</label>
              <input
                className="form-control"
                {...register("username", { required: true })}
              />
              {errors.username && errors.username.type === "required" && (
                <p className="errorText">Username cannot be empty.</p>
              )}
            </div>

            <div className="form-group p-4">
              <label htmlFor="email">Email:</label>
              <input
                className="form-control"
                {...register("email", { required: true })}
              />
              {errors.email && errors.email.type === "required" && (
                <p className="errorText">Email cannot be empty.</p>
              )}
            </div>

            <div className="form-group p-4">
              <label htmlFor="password">Password:</label>
              <input
                className="form-control"
                {...register("password", { required: true }, { minLength: 8 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p className="errorText">Password cannot be empty.</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p className="warningText">
                  Password must be at least 8 characters.
                </p>
              )}
            </div>

            <div className="form-group p-4">
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <input
                className="form-control"
                {...register("confirmPassword", { required: true })}
              />
              {errors.confirmPassword &&
                errors.confirmPassword.type === "required" && (
                  <p className="errorText">Required field.</p>
                )}
            </div>

            {/**Put in an arrow at the side from boxicon */}
          </div>
        </form>
      </div>
    </div>
  );
}

export default presignup;
