import React from 'react';
import { LuCircleAlert, LuMail, LuShieldAlert } from 'react-icons/lu';

const BlockedUserMessage = () => {
    return (
        <div className='m-7'>

<div className="mx-auto max-w-4xl">
  <div className="overflow-hidden rounded-[32px] border border-red-200 bg-white shadow-sm">

    <div className="bg-linear-to-r from-[#DC2626] to-[#B91C1C] px-8 py-8 text-white">
      <div className="flex items-center gap-5">
        <div className="flex sm:h-20 sm:w-20 items-center justify-center rounded-full sm:bg-white/15 backdrop-blur">
          <LuShieldAlert className="text-5xl" />
        </div>

        <div>
          <h1 className="font-logo text-3xl sm:text-4xl">
            Account Restricted
          </h1>

          <p className="mt-2 text-sm sm:text-md text-red-100">
            Your account has been blocked by an administrator.
          </p>

        </div>

      </div>

    </div>
    <div className="p-8">
      <div className="rounded-3xl border border-red-100 bg-red-50 p-6">
        <div className="flex items-start gap-4">
          <LuCircleAlert className="mt-1 text-3xl text-[#DC2626]" />
          <div>

            <h2 className="text-2xl font-semibold text-[#130505]">
              Access Restricted
            </h2>

            <p className="mt-3 leading-8 text-gray-600">
              Because your account is currently blocked, you cannot create,
              edit, manage, or respond to donation requests. These features
              will become available again once your account has been reactivated
              by an administrator.
            </p>
          </div>
        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
        <h3 className="text-lg font-semibold text-[#130505]">
          What can you do?
        </h3>

        <ul className="mt-4 space-y-3 text-gray-600">
          <li>• Contact the administrator to review your account.</li>
          <li>• Wait until your account status is changed back to <strong>Active</strong>.</li>
          <li>• Once activated, you'll be able to access all donor features again.</li>

        </ul>

      </div>

    </div>

  </div>
</div>
        </div>
    );
};

export default BlockedUserMessage;