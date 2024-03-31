import React from "react";
import UserNavigation from "../../components/UserNavigation";
import { useAuth } from "../../context/AuthContextProvider";
const ProfilePage = () => {
  const { auth } = useAuth();
  console.log(auth);
  return (
    <>
      <div className="flex justify-evenly mt-[8rem]  ">
        <UserNavigation />
        <div className="bg-gray-200 w-[70%]">
          <div className="flow-root">
            <dl className="-my-3 divide-y divide-gray-100 text-sm">
              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Name</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {auth?.user?.name}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Email</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {auth?.user?.email}
                </dd>
              </div>

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Phone No.</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {auth?.user?.phone}
                </dd>
              </div>

              {/* <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Salary</dt>
                <dd className="text-gray-700 sm:col-span-2">$1,000,000+</dd>
              </div> */}

              <div className="grid grid-cols-1 gap-1 py-3 even:bg-gray-50 sm:grid-cols-3 sm:gap-4">
                <dt className="font-medium text-gray-900">Bio</dt>
                <dd className="text-gray-700 sm:col-span-2">
                  {auth?.user?.address}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
