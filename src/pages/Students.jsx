import React from "react";

const Students = () => {
  return (
    <div>
      <form action="" method="POST">
        <div className=" w-[1200px]  mx-auto bg-cyan-900 py-5 px-5 mt-10 rounded-lg shadow-xl shadow-slate-500 ">
          <div className="mb-12 text-center font-bold text-2xl text-orange-500">
            <h1 className="py-4">শিক্ষার্থীর তথ্য</h1>
            <hr></hr>
          </div>
          <div>
            <div className="grid-cols-3 justify-between mx-auto  mt-10 p-5 outline-gray-400 outline outline-3 w-[800px] border-x-2 border-y border-x-orange-300 border-y-orange-300">
              <h3 className="absulate top-0 left-0 translate-y-[-32px] bg-cyan-900 inline-block px-2 text-yellow-200">
                শিক্ষার্থীর তথ্য
              </h3>
              <div className="flex mx-auto justify-between">
                <div>
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের নাম :
                  </level>
                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>ঢাকা মেডিকেল কলেজ</option>
                    <option>শহীদ সোরয়ারদী মেডিকেল কলেজ</option>
                  </select>
                </div>
                <div>
                  <level className="text-yellow-200 block">কোর্সের নাম :</level>
                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>প্রশাসন অনুবিভাগ</option>
                    <option>প্রোগ্রামার</option>
                    <option>সহকারী সচিব</option>
                    <option>হিসাব রক্ষণ কর্মকর্তা</option>
                    <option>সহকারী মেইনট্যানেন্স ইঞ্জিনিয়ার</option>
                    <option>লাইব্রেরিয়ান</option>
                    <option>প্রশাসনিক কর্মকর্তা</option>
                    <option>ব্যক্তিগত কর্মকর্তা</option>
                    <option>সহকারী হিসাব রক্ষণ কর্মকর্তা</option>
                    <option>ক্যাশিয়ার</option>
                    <option>কম্পিউটার অপারেটর</option>

                    <option>অফিস সহায়ক</option>
                  </select>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">সেশন :</level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>২০২০-২০২১</option>
                    <option>২০২১-২০২২</option>
                  </select>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">আসন সংখ্যা :</level>
                  <input
                    className=" py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    type="text"
                    name="name"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    মোট ভর্তিকৃত শিক্ষার্থীর সংখ্য :
                  </level>

                  <input
                    className="py-2 px-10 rounded-md border outline-1 hover:outline-indigo-600 "
                    placeholder="কর্মরত জনবল "
                    type="text"
                    name="name"
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">শুন্য আসন :</level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    ছাত্র সংখ্যা :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                  ></input>
                </div>
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    ছাত্রী সংখ্যা :
                  </level>
                  <input
                    className="py-2 px-10 rounded-md  border outline-1 hover:outline-indigo-600 "
                    placeholder="শুন্য আসন"
                    type="text"
                    name="name"
                  ></input>
                </div>
              </div>{" "}
              <div className="flex mx-auto justify-between">
                <div className="py-3">
                  <level className="text-yellow-200 block">
                    প্রতিষ্ঠানের জেলা :
                  </level>

                  <select
                    className="rounded-lg  border-none hover:border-indigo-300 py-2 px-5"
                    id="designation"
                    name="designation"
                  >
                    <option>নির্বাচন করুন</option>
                    <option>সিরাজগঞ্জ</option>
                    <option>পাবনা</option>
                  </select>
                </div>
              </div>{" "}
            </div>
            <button className="py-2 px-16 bg-yellow-200 rounded-lg mt-12 font-bold text-purple-900 hover:bg-indigo-600 hover:text-white flex mx-auto justify-center">
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Students;
