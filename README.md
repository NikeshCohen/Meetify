<h1 align='center'>Meetify</h1>

![](./design/zoom.webp)

## About

Meetify is a spin on the popular video conference platform, Zoom. It is built using the latest technologies, NextJS and TailwindCSS. Users can create, schedule and view recordings of their previous meetings among other features.

You can visit the live site: https://meetify-sbec.vercel.app/

# Tech Stack

Next.js
TypeScript
Clerk
getstream
shadcn
Tailwind CSS

# Features

👉 New Meeting: Quickly start a new meeting, configuring camera and microphone settings before joining.

👉 Meeting Controls: Participants have full control over meeting aspects, including recording, emoji reactions, screen sharing, muting/unmuting, sound adjustments, grid layout, participant list view, and individual participant management (pinning, muting, unmuting, blocking, allowing video share).

👉 Exit Meeting: Participants can leave a meeting, or creators can end it for all attendees.

👉 Schedule Future Meetings: Input meeting details (date, time) to schedule future meetings, accessible on the 'Upcoming Meetings' page for sharing the link or immediate start.

👉 Past Meetings List: Access a list of previously held meetings, including details and metadata.

👉 View Recorded Meetings: Access recordings of past meetings for review or reference.

👉 Personal Room: Users have a personal room with a unique meeting link for instant meetings, shareable with others.

👉 Join Meetings via Link: Easily join meetings created by others by providing a link.

👉 Secure Real-time Functionality: All interactions within the platform are secure and occur in real-time, maintaining user privacy and data integrity.

👉 Responsive Design: Follows responsive design principles to ensure optimal user experience across devices, adapting seamlessly to different screen sizes and resolutions.

and many more, including code architecture and reusability.

## Getting Started

You can visit the live site: https://meetify-sbec.vercel.app/

Alteratively you can clone this repo

```
git clone https://github.com/NikeshCohen/Meetify.git
cd Meetify
```

Next we need to install the dependencies

```
npm i
```

Create a .env file in the root directory and paste the following

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_STREAM_API_KEY=
STREAM_SECRET_KEY=
```

Replace the placeholder values with your actual Clerk & getstream credentials. You can obtain these credentials by signing up on the Clerk website and getstream website

Finailly run

```
npm run dev
```
