import { FC } from 'react'

export interface HelloViewProps {
  name?: string
  onQuery: () => void
}

export const HelloView: FC<HelloViewProps> = ({ name, onQuery }) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center bg-blue-50'>
      <div
        onClick={onQuery}
        data-testid='hello-view-box'
        className='relative flex  max-w-[500px] cursor-pointer flex-col gap-6 overflow-hidden rounded-lg border border-gray-100 bg-white p-8'
      >
        <span className='absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-300 via-blue-500 to-purple-600'></span>

        <div className='justify-between sm:flex'>
          <div>
            <h5 className='text-xl font-bold text-gray-900'>
              Welcome to the frontend!
            </h5>
            <p className='mt-1 text-xs font-medium text-gray-600'>
              Now, lets build something great.
            </p>
          </div>
        </div>

        <div className='space-y-3 sm:pr-8'>
          <p className='text-sm text-gray-500'>
            If you see this screen it means your project was bootrapped
            successfully. You can now start building your app.
          </p>
          <p className='text-sm text-gray-500'>
            Click on this box to trigger an simple API request to check all
            moving parts are working correctly
          </p>
        </div>

        <div className='flex items-center justify-between'>
          <div className='flex gap-1 md:gap-5'>
            <div className='flex flex-col-reverse'>
              <dt className='text-sm font-medium text-gray-600'>Version</dt>
              <dd className='text-xs text-gray-500'>31st August, 2022</dd>
            </div>

            <div className='flex flex-col-reverse'>
              <dt className='text-sm font-medium text-gray-600'>Status</dt>
              <dd className='text-xs text-gray-500'>
                {name ? 'OK' : 'Loading'}
              </dd>
            </div>
          </div>

          <div className='flex flex-col-reverse text-right'>
            <dt className='text-sm font-medium text-gray-600'>
              Server Response
            </dt>
            <dd data-testid='name-box' className='text-xs text-gray-500'>
              {name || '-'}
            </dd>
          </div>
        </div>
      </div>
    </div>
  )
}
