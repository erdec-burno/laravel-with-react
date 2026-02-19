import { Head } from '@inertiajs/react';

export default function Welcome() {
  return (
    <>
      <Head title="Welcome">{/*<link rel="preconnect" href="https://fonts.bunny.net" />*/}</Head>
      <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
        <div className="flex rounded-br-lg rounded-bl-lg p-6 pb-12 text-[20px] lg:rounded-tl-lg lg:rounded-br-none lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC]">
          <h1>Let's get started with React in Laravel</h1>
        </div>
      </div>
    </>
  );
}
