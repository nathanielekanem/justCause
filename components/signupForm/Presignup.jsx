import React from "react";
import useForm from "react-hook-form";

function Presignup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const submitHandler = (i) => {
    {
      console.log(i);
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

          <div className="card-body form-hidden">
            <div className="form-group p-4">
              <label htmlFor="DOB">Date Of Birth:</label>
              <input
                className="form-control"
                {...register("DOB", { required: true })}
              />
              {errors.DOB && errors.DOB.type === "required" && (
                <p className="errorText">Please input your date of birth.</p>
              )}
            </div>
            <div className="form-group p-4">
              <label htmlFor="country">Country:</label>
              <input
                className="form-control"
                {...register("country", { required: true })}
              />
              {errors.country && errors.country.type === "required" && (
                <p className="errorText">Please input your country.</p>
              )}
            </div>
            <div className="form-group p-4">
              <label htmlFor="bsc-address">BEP-20 Address:</label>
              <input
                className="form-control"
                {...register("bsc-address", { required: true })}
              />
              {errors.bsc - address &&
                errors.bsc - address.type === "required" && (
                  <p className="errorText">Invalid wallet address.</p>
                )}
            </div>
            <div className="form-group p-4">
              <label htmlFor="referrercode">Referrer Code:</label>
              <input
                className="form-control"
                {...register("referrercode", { required: false })}
              />
            </div>
            <div className="form-group p-4">
              <input type="submit" className="btn btn-go" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Presignup;
