import React from 'react';
import CountUp from 'react-countup';

import jsonData from '../Api/data.json';
import CustomShareButton from './CustomShareButton';

const Donate = () => {

  const shareData = {
    text: "A Flexible fund raising platform",
    url: "https://fundit-3xo.pages.dev",
    title: "Fundit - A Flexible fund raising platform",
  };


    const totalGoal = jsonData.donationStatus.goalAmount;
    const moneyRealized = jsonData.donationStatus.amountRealized;
    const percentageDonated = ((moneyRealized / totalGoal) * 100).toFixed(1);
    const donorCount = jsonData.donationStatus.donorsCount;

  return (
    <div className="mx-auto w-full md:w-auto px-4">
      {/* Donation stats */}
      <div className="widget border border-black mx-auto w-full lg:max-w-[400px] p-5 grid grid-cols-1 gap-4">
        <div className="w-full">
          <div>
            <span id="ProgressLabel" className="sr-only">
              Loading
            </span>
            <span className="flex pb-3">
              <p className="text-2xl font-medium text-gray-900 px-2">
                {/* Amount donated so far */}
                <span>
                  $<CountUp end={moneyRealized} duration={2} />
                </span>
                <span className="pl-1 text-base text-gray-500">
                  USD raised of
                  {/* Total amount to be raised */}
                  <span className="font-bold text-gray-900">
                    {" "}
                    ${totalGoal} goal
                  </span>
                </span>
              </p>
            </span>
            {/* Progress bar indicating 100% */}
            <span
              role="progressbar"
              aria-labelledby="ProgressLabel"
              aria-valuenow={percentageDonated}
              className="block rounded-full bg-gray-200"
            >
              {/* Progress bar indicating the percentage of money donated so far */}
              <span
                className="block h-3 rounded-full bg-black"
                style={{
                  width: `${percentageDonated}%`,
                  animation: `
                                progressAnimation 1.5s linear forwards`,
                }}
              >
                <style>
                  {`
                                @keyframes progressAnimation {
                                    from {
                                    width: 0;
                                    }
                                    to {
                                    width: ${percentageDonated}%;
                                    }
                                }
                                `}
                </style>
              </span>
            </span>
          </div>

          <div className="stat flex items-center justify-center flex-wrap gap-5 py-5 lg:py-5">
            <article className="flex-grow flex items-end justify-between lg:py-5">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-gray-100 p-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-user h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </span>

                <div>
                  <p className="text-xl font-medium text-gray-900">
                    {/* Total number of people that has donated so far */}
                    <CountUp end={donorCount} duration={2} />
                  </p>
                  <p className="text-sm text-gray-500">Donated</p>
                </div>
              </div>
            </article>

            <article className="flex-grow flex items-end justify-between lg:py-5">
              <div className="flex items-center gap-4">
                <span className="rounded-full bg-gray-100 p-2 text-gray-600">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </span>

                <div>
                  <p className="text-xl font-medium text-gray-900">
                    {/* Percentege of donation so far */}
                    <CountUp end={percentageDonated} duration={2} />%
                  </p>
                  <p className="text-sm text-gray-500">Donation</p>
                </div>
              </div>
            </article>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <CustomShareButton shareData={shareData} buttonText="Share" />

            <a className="btn" href="#donate">
              Donate
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate