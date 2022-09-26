import React from "react";

const EditSalary = (props) => {
  const {
    paidSalary,
    setPaidSalary,
    monthlySalary,
    setMonthlySalary,
    totalSalary,
    setTotalSalary,
    id,
    handleSubmitBtn,
    title,
  } = props;

  return (
    <form className="my-10 dark:bg-slate-900  w-[95%] md:w-[29rem] pt-5 pb-14 px-4 rounded-lg md:px-8  lg:px-12  border border-slate-500">
      <h1 className="text-2xl   text-slate-800 dark:text-slate-300 text-center">
        Edit {title} Salary
      </h1>
      <div className="id mt-12 mb-5 relative ">
        <label
          htmlFor="id"
          className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
        >
          Id
        </label>
        <input
          type="text"
          name="id"
          id="id"
          value={id}
          readOnly
          className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
        />
      </div>
      <div className="attend mt-10 mb-5 relative ">
        <label
          htmlFor="monthlySalary"
          className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600"
        >
          Monthly Salary
        </label>
        <input
          type="number"
          name="monthlySalary"
          id="monthlySalary"
          value={monthlySalary}
          onChange={(e) => setMonthlySalary(e.target.value)}
          required
          className="form-input dark:bg-slate-900 dark:text-slate-300 py-3 px-2 w-full rounded-md"
        />
      </div>
      <div className="paidSalary mt-10 mb-8  relative ">
        <label
          htmlFor="paidSalary"
          className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600 rounded-md"
        >
          Paid Salary
        </label>
        <input
          type="number"
          name="paidSalary"
          id="paidSalary"
          value={paidSalary}
          onChange={(e) => setPaidSalary(e.target.value)}
          required
          className="form-input dark:bg-slate-900 dark:text-slate-300  px-2 w-full py-3 rounded-md"
        />
      </div>

      <div className="totalSalary mt-10 mb-8  relative ">
        <label
          htmlFor="totalSalary"
          className="absolute left-4 px-1  -top-3 bg-white dark:bg-slate-900  text-sm text-sky-600 rounded-md"
        >
          Total Salary
        </label>
        <input
          type="number"
          name="totalSalary"
          id="totalSalary"
          value={totalSalary}
          onChange={(e) => setTotalSalary(e.target.value)}
          required
          className="form-input dark:bg-slate-900 dark:text-slate-300  px-2 w-full py-3 rounded-md"
        />
      </div>

      <div className="mt-10">
        <button
          className="bg-[#7582eb] w-full rounded-md py-4 text-sm font-semibold hover:bg-[#4453c8]"
          disabled={!id || !totalSalary || !paidSalary || !monthlySalary}
          onClick={handleSubmitBtn}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditSalary;
